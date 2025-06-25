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
    
    actor_info = []  # 存储唯一艺人信息
    unique_ids = set()  # 存储已处理的艺人ID用于去重
    MAX_PAGES = 116
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
                            
                            # 清洗名称：去除多余空格和不可见字符
                            actor_name = re.sub(r'\s+', ' ', raw_name)
                            actor_name = actor_name.replace('\u200b', '')  # 移除零宽空格
                            
                            # 提取作品数量 -（在父元素中查找）
                            work_count = 0
                            
                            # 仅在父元素中查找作品数量
                            if link.parent:
                                parent_text = link.parent.get_text()
                                # 使用正则表达式匹配作品数量格式（如"（123部）"）
                                count_match = re.search(r'\((\d+)\s*部?\)', parent_text)
                                if count_match:
                                    work_count = int(count_match.group(1))
                                else:
                                    # 如果未找到括号内标注的作品数量，尝试查找纯数字表示的作品计数
                                    # 这可能是由于网站改版导致的格式变化
                                    count_match = re.search(r'\b(\d+)\s*部作品?\b', parent_text)
                                    if count_match:
                                        work_count = int(count_match.group(1))
                            
                            # 检查名称是否有效
                            if actor_name:
                                actor_info.append({
                                    "name": actor_name,
                                    "id": actor_id,
                                    "count": work_count
                                })
                                print(f"添加艺人: {actor_name} ({actor_id}), 作品数量={work_count}")
                            else:
                                print(f"跳过无效名称的艺人ID: {actor_id}")
                        else:
                            print(f"跳过无效ID格式: {actor_id}")
                    else:
                        print(f"无法从链接提取ID: {href}")
                
                
                has_next_page = False
                
                #如果当前页面有艺人链接且不是最后一页，继续下一页
                if page < MAX_PAGES and len(actor_links) > 0:
                    has_next_page = True
                    print(f"存在下一页内容(page={page}, max={MAX_PAGES}, 当前页艺人数量={len(actor_links)}), 继续爬取")
                else:
                    print(f"到达最大页码{MAX_PAGES}或当前页无艺人链接, 停止爬取")
                
                if not has_next_page:
                    print("停止条件已满足，结束爬取")
                    break
                
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
        # 按作品数量降序排序
        return sorted(actor_info, key=lambda x: x["count"], reverse=True)
    
    except Exception as e:
        print(f"程序运行出错: {e}")
        return []

def save_to_js(actor_info, filename="javrate_actors.js"):
    try:
        # 创建JavaScript数组
        js_content = "const javrateActors = [\n"
        
        # 添加每个艺人对象
        for i, actor in enumerate(actor_info):
            name = json.dumps(actor["name"], ensure_ascii=False)
            js_content += f"  {{ name: {name}, id: \"{actor['id']}\" }}"
            
            if i < len(actor_info) - 1:
                js_content += ","
            
            js_content += "\n"
        
        js_content += "];"
        
        # 添加排序说明注释
        min_count = min(a["count"] for a in actor_info) if actor_info else 0
        max_count = max(a["count"] for a in actor_info) if actor_info else 0
        js_content = f"// 按作品数量降序排序（{max_count}-{min_count}），包含{len(actor_info)}个唯一艺人数据\n" + js_content
        
        # 写入文件
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(js_content)
        
        print(f"成功保存 {len(actor_info)} 个艺人信息到 {filename}")
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
            print(f"任务完成! 共爬取 {len(actor_info)} 个唯一艺人信息")
            print(f"艺人已按作品数量降序排序")
            
            # 显示前10位艺人（作品数量最多）
            print("\n作品数量最多的前10位艺人:")
            for i, actor in enumerate(actor_info[:10]):
                print(f"{i+1}. {actor['name']} - {actor['count']}部作品")
        else:
            print("数据获取成功但保存失败")
    else:
        print("未获取到艺人信息，请检查网络或网站结构")
    
    print(f"总耗时: {time.time() - start_time:.2f}秒")
