import requests
from bs4 import BeautifulSoup
import time
import re
import os
import json
from random import uniform

def get_actor_info():
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,ja;q=0.7',
        'Connection': 'keep-alive',
        'Referer': 'https://www.javrate.com/',
        'Sec-Fetch-Dest': 'document',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'same-origin',
        'Sec-Fetch-User': '?1',
        'Upgrade-Insecure-Requests': '1',
        'DNT': '1'
    }
    
    actor_info = []  # 存储艺人信息
    unique_ids = set()  # 存储已处理的艺人ID用于去重
    MAX_PAGES = 116  #选择需要抓取的最大页数
    TIMEOUT = 15
    base_url = "https://www.javrate.com/actor/list"
    
    # 创建调试目录
    debug_dir = "javrate_debug"
    os.makedirs(debug_dir, exist_ok=True)
    
    try:
        page = 1
        has_next_page = True
        duplicate_count = 0  # 记录发现的重复项数量
        
        while page <= MAX_PAGES and has_next_page:
            # 构建分页URL
            if page == 1:
                url = base_url
            else:
                url = f"{base_url}/1-0-{page}.html"
            
            print(f"正在抓取第 {page} 页: {url}")
            
            try:
                response = requests.get(url, headers=headers, timeout=TIMEOUT)
                response.raise_for_status()
                
                # 保存HTML用于调试
                debug_filename = os.path.join(debug_dir, f"page_{page}.html")
                with open(debug_filename, 'w', encoding='utf-8') as f:
                    f.write(response.text)
                
                # 检查是否到达最后一页
                if "没有找到相关内容" in response.text or "404 Not Found" in response.text:
                    print(f"第 {page} 页没有内容或404错误，停止爬取")
                    break
                    
                soup = BeautifulSoup(response.text, 'html.parser')
                
                # 查找所有匹配的链接
                actor_links = soup.find_all('a', href=re.compile(r'/actor/detail/[a-f0-9-]+\.html'))
                
                # 如果直接查找失败，尝试备用方法
                if not actor_links:
                    # 查找所有包含"detail"的链接
                    all_links = soup.find_all('a', href=True)
                    actor_links = [link for link in all_links if re.search(r'/actor/detail/[a-f0-9-]+\.html', link['href'])]
                
                if not actor_links:
                    print(f"第 {page} 页未找到艺人链接")
                    break
                
                print(f"在第 {page} 页找到 {len(actor_links)} 个艺人链接")
                
                # 提取ID、名称和作品数量
                for link in actor_links:
                    href = link.get('href', '')
                    if not href:
                        continue
                    
                    # 从URL中提取艺人ID
                    match = re.search(r'/actor/detail/([a-f0-9-]+)\.html', href)
                    if match:
                        actor_id = match.group(1)
                        # 简单验证ID格式（36位UUID）
                        if len(actor_id) == 36 and actor_id.count('-') == 4:
                            
                            # 去重检查
                            if actor_id in unique_ids:
                                duplicate_count += 1
                                print(f"发现重复艺人ID: {actor_id}，跳过处理")
                                continue
                            
                            # 添加到已处理ID集合
                            unique_ids.add(actor_id)
                            
                            # 提取原始艺人名称
                            raw_name = link.text.strip()
                            
                            # 关键修改：彻底处理crown相关前缀
                            # 1. 移除所有crown相关前缀
                            if raw_name.startswith("crown HOT "):
                                processed_name = raw_name[len("crown HOT "):].strip()
                                print(f"处理热门艺人: '{raw_name}' -> '{processed_name}'")
                            elif raw_name.startswith("crown "):
                                processed_name = raw_name[len("crown "):].strip()
                                print(f"处理crown前缀: '{raw_name}' -> '{processed_name}'")
                            else:
                                processed_name = raw_name
                            
                            # 2. 分割名称为关键词列表
                            keywords = re.split(r'[\s・。·.．]', processed_name)
                            # 移除空字符串
                            keywords = [k.strip() for k in keywords if k.strip()]
                            
                            # 3. 特殊处理：如果第一个关键词是"crown"，保留前三个关键词
                            final_name = ""
                            if keywords and keywords[0] == "crown":
                                # 取前三个关键词（如果存在）
                                final_name = " ".join(keywords[:3])
                                print(f"特殊处理crown开头: 保留三个关键词 - {final_name}")
                            elif keywords:
                                # 普通情况：取第一个关键词
                                final_name = keywords[0]
                                # 处理过长名字
                                if len(final_name) > 8:
                                    jp_match = re.match(r'^[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF]{2,4}', processed_name)
                                    if jp_match:
                                        final_name = jp_match.group(0)
                                        print(f"处理过长名称: 匹配到日文名字 -> {final_name}")
                            else:
                                final_name = processed_name  # 保底处理
                            
                            # 添加艺人信息
                            actor_info.append({
                                "name": final_name,
                                "id": actor_id,
                                "raw_name": raw_name
                            })
                            print(f"添加艺人: {final_name} ({actor_id})")
                        else:
                            print(f"跳过无效ID格式: {actor_id}")
                    else:
                        print(f"无法从链接提取ID: {href}")
                
                # 检查是否还有下一页
                has_next_page = False
                if page < MAX_PAGES and len(actor_links) > 0:
                    has_next_page = True
                    print(f"继续下一页 (page={page}/{MAX_PAGES})")
                
                # 随机延时 1-3秒
                delay = uniform(1.0, 3.0)
                print(f"等待 {delay:.2f} 秒后继续下一页...")
                time.sleep(delay)
                
                page += 1
                
            except requests.exceptions.RequestException as e:
                print(f"请求第 {page} 页出错: {e}")
                print("等待5秒后重试...")
                time.sleep(5)
                continue
                
        print(f"\n共获取 {len(actor_info)} 个唯一艺人信息")
        print(f"发现并跳过 {duplicate_count} 个重复艺人")
        return actor_info
    
    except Exception as e:
        print(f"程序运行出错: {e}")
        return []

def save_to_js(actor_info, filename="javrate_actors.js"):
    try:
        # 创建JavaScript对象
        js_content = "const javrateActors = {\n"
        
        # 添加每个键值对
        for i, actor in enumerate(actor_info):
            # 直接使用JSON转义
            name_str = json.dumps(actor["name"], ensure_ascii=False)
            id_str = f'"{actor["id"]}"'
            
            # 格式化行：键（艺人名）和值（艺人ID）
            line = f"    {name_str}: {id_str}"
            
            # 如果不是最后一行，添加逗号
            if i < len(actor_info) - 1:
                line += ","
                
            js_content += line + "\n"
        
        js_content += "};"
        
        # 添加注释说明
        summary = (
            f"// JavRate艺人数据 ({len(actor_info)}位艺人)\n"
            f"// 生成时间: {time.strftime('%Y-%m-%d %H:%M:%S')}\n"
        )
        js_content = summary + js_content
        
        # 写入文件
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(js_content)
        
        print(f"成功保存 {len(actor_info)} 个艺人信息到 {filename}")
        
        # 显示格式示例
        print("\n输出格式示例:")
        examples = 0
        for actor in actor_info:
            # 只显示特殊处理过的示例
            if "crown" in actor["raw_name"].lower() and examples < 5:
                prefix = "    "
                if "crown" in actor["name"].lower():
                    prefix += "[保留多个关键词] "
                print(f'{prefix}"{actor["name"]}": "{actor["id"]}",')
                examples += 1
            elif examples < 3:  # 也显示一些普通示例
                print(f'    "{actor["name"]}": "{actor["id"]}",')
                examples += 1
            if examples >= 5:
                break
            
        return True
    except Exception as e:
        print(f"保存JavaScript文件时出错: {e}")
        return False

if __name__ == "__main__":
    print("开始爬取JavRate艺人信息")
    start_time = time.time()
    
    actor_info = get_actor_info()
    
    if actor_info:
        if save_to_js(actor_info):
            print(f"任务完成! 共爬取 {len(actor_info)} 个艺人信息")
        else:
            print("数据获取成功但保存失败")
    else:
        print("未获取到艺人信息，请检查网络或网站结构")
    
    print(f"总耗时: {time.time() - start_time:.2f}秒")
