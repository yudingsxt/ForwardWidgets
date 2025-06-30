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
    
    actor_info = []
    unique_ids = set()
    MAX_PAGES = 10
    TIMEOUT = 15
    base_url = "https://www.javrate.com/actor/list"

    try:
        page = 1
        has_next_page = True
        duplicate_count = 0

        while page <= MAX_PAGES and has_next_page:
            url = base_url if page == 1 else f"{base_url}/1-0-{page}.html"
            print(f"正在抓取第 {page} 页: {url}")

            try:
                time.sleep(uniform(1.0, 3.0))
                response = requests.get(url, headers=headers, timeout=TIMEOUT)
                response.raise_for_status()

                soup = BeautifulSoup(response.text, 'html.parser')
                actor_links = soup.find_all('a', href=re.compile(r'/actor/detail/[a-f0-9-]+\.html'))

                if not actor_links:
                    all_links = soup.find_all('a', href=True)
                    actor_links = [link for link in all_links if re.search(r'/actor/detail/[a-f0-9-]+\.html', link['href'])]

                if not actor_links:
                    print(f"第 {page} 页未找到演员链接，停止爬取")
                    break

                for link in actor_links:
                    href = link.get('href', '')
                    if not href:
                        continue

                    match = re.search(r'/actor/detail/([a-f0-9-]+)\.html', href)
                    if not match:
                        print(f"链接 {href} 无法提取ID，跳过")
                        continue

                    actor_id = match.group(1)
                    if len(actor_id) != 36 or actor_id.count('-') != 4:
                        print(f"无效ID格式: {actor_id}，跳过")
                        continue

                    if actor_id in unique_ids:
                        duplicate_count += 1
                        print(f"重复ID: {actor_id}，已跳过")
                        continue
                    unique_ids.add(actor_id)

                    raw_name = link.text.strip()
                    
                    no_crown_name = re.sub(r'\s*crown\s+HOT\s*', '', raw_name, flags=re.IGNORECASE)
                    
                    core_name_match = re.search(r'([\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFFa-zA-Z]+)', no_crown_name)
                    if not core_name_match:
                        print(f"未提取到有效姓名（可能无合法字符），跳过: {raw_name}")
                        continue
                    
                    processed_name = core_name_match.group(1).strip()
                    
                    if processed_name:
                        actor_info.append({
                            "name": processed_name,
                            "id": actor_id
                        })
                        print(f"添加成功: {processed_name} ({actor_id})")
                    else:
                        print(f"处理后姓名为空，跳过: {raw_name}")

                has_next_page = len(actor_links) > 0 and page < MAX_PAGES
                print(f"当前页找到 {len(actor_links)} 个演员，继续下一页: {has_next_page}")

            except requests.exceptions.RequestException as e:
                print(f"请求第 {page} 页失败: {str(e)}，5秒后重试...")
                time.sleep(5)
                continue

            time.sleep(uniform(2.0, 4.0))

            page += 1

        print(f"\n爬取完成！总获取: {len(actor_info)} 个，去重跳过: {duplicate_count} 个")
        return actor_info

    except Exception as e:
        print(f"程序运行出错: {str(e)}")
        return []

def save_to_json(actor_info: list, output_path: str = None) -> bool:
    if output_path is None:
        output_path = os.path.join("Widgets", "javrate_actors.json")
    
    try:
        widgets_dir = os.path.dirname(output_path)
        os.makedirs(widgets_dir, exist_ok=True)
        
        json_dict = {
            item["name"]: item["id"] 
            for item in actor_info
        }

        with open(output_path, 'w', encoding='utf-8') as f:
            json.dump(json_dict, f, ensure_ascii=False, indent=4)

        print(f"数据已保存至: {output_path}（共 {len(actor_info)} 条）")
        return True

    except Exception as e:
        print(f"保存JSON失败: {str(e)}")
        return False

if __name__ == "__main__":
    print("===== 开始爬取JavRate演员数据 =====")
    start_time = time.time()

    actors = get_actor_info()

    if actors:
        save_success = save_to_json(actors)
        if save_success:
            print("数据保存成功！")
        else:
            print("数据保存失败！")
    else:
        print("未获取到任何演员数据，请检查网络或网站结构！")

    print(f"总耗时: {time.time() - start_time:.2f} 秒")
    print("===== 爬取结束 =====")
