import requests
from bs4 import BeautifulSoup
import time
import re
import os
import json

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
    MAX_PAGES = 116
    TIMEOUT = 15
    base_url = "https://www.javrate.com/actor/list"
    LINKS_PER_PAGE = 24

    try:
        page = 1
        has_next_page = True
        duplicate_count = 0
        invalid_id_count = 0
        name_extract_fail_count = 0

        while page <= MAX_PAGES and has_next_page:
            url = base_url if page == 1 else f"{base_url}/1-0-{page}.html"
            print(f"\n===== 正在抓取第 {page} 页: {url} =====")

            try:
                time.sleep(1)
                response = requests.get(url, headers=headers, timeout=TIMEOUT)
                response.raise_for_status()

                soup = BeautifulSoup(response.text, 'html.parser')
                all_links = soup.find_all('a', href=True)
                actor_links = [link for link in all_links if re.search(r'/actor/detail/[a-f0-9-]+\.html', link['href'])]

                if not actor_links:
                    print(f"第 {page} 页未找到任何演员链接，停止爬取")
                    has_next_page = False
                    break

                links_to_process = actor_links[:LINKS_PER_PAGE]
                actual_processed = len(links_to_process)

                for idx, link in enumerate(links_to_process, 1):
                    href = link.get('href', '')
                    raw_name = link.text.strip()
                    
                    match = re.search(r'/actor/detail/([a-f0-9-]+)\.html', href)
                    if not match:
                        continue
                    
                    actor_id = match.group(1)
                    
                    if len(actor_id) != 36 or actor_id.count('-') != 4:
                        continue
                    
                    if actor_id in unique_ids:
                        continue
                    unique_ids.add(actor_id)

                    no_crown_name = re.sub(r'\s*crown\s+HOT\s*', '', raw_name, flags=re.IGNORECASE)
                    
                    core_name_match = re.search(
                        r'([\u3005\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFFa-zA-Z\s\uFF08\uFF09]+)', 
                        no_crown_name
                    )
                    if not core_name_match:
                        continue
                    
                    processed_name = core_name_match.group(1).strip()
                    if not processed_name:
                        continue

                    print(f"✅ 添加成功 : {processed_name} ({actor_id})")
                    actor_info.append({"name": processed_name, "id": actor_id})

                time.sleep(1)
                has_next_page = (actual_processed > 0) and (page < MAX_PAGES)
                print(f"当前页处理完成，找到 {actual_processed} 个有效演员，跳过 {duplicate_count + invalid_id_count + name_extract_fail_count} 个")

            except requests.exceptions.RequestException as e:
                print(f"请求第 {page} 页失败: {str(e)}，5秒后重试...")
                time.sleep(5)
                continue

            page += 1

        print("\n===== 爬取结果统计 =====")
        print(f"总尝试处理链接数: {duplicate_count + invalid_id_count + name_extract_fail_count + len(actor_info)}")
        print(f"成功添加演员数: {len(actor_info)}")
        print(f"跳过原因统计:")
        print(f"  - 重复ID: {duplicate_count}")
        print(f"  - 无效ID格式: {invalid_id_count}")
        print(f"  - 姓名提取失败（含处理后为空）: {name_extract_fail_count}")

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

        name_counts = {}
        for item in actor_info:
            name = item["name"]
            name_counts[name] = name_counts.get(name, 0) + 1
        
        duplicate_names = {name: count for name, count in name_counts.items() if count > 1}
        if duplicate_names:
            print(f"\n⚠️ 警告：保存前检测到 {len(duplicate_names)} 个重复姓名（将保留第一个ID）:")
            for name, count in duplicate_names.items():
                print(f"   - 姓名 '{name}' 重复 {count} 次（保留第一个ID）")

        json_dict = {}
        for item in actor_info:
            name = item["name"]
            actor_id = item["id"]
            if name not in json_dict:
                json_dict[name] = actor_id

        with open(output_path, 'w', encoding='utf-8') as f:
            json.dump(json_dict, f, ensure_ascii=False, indent=4)

        print(f"\n数据已保存至: {output_path}")
        print(f"原始数据量: {len(actor_info)} 条")
        print(f"JSON实际保存量: {len(json_dict)} 个姓名（重复姓名仅保留第一个ID）")

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
