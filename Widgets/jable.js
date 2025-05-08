WidgetMetadata = {
  id: "jable",
  title: "Jable",
  description: "获取Jable热门影片榜单",
  author: "nibiru",
  site: "https://github.com/quantumultxx/FW-Widgets",
  version: "1.0.1",
  requiredVersion: "0.0.1",
  modules: [
    // 热门影片模块
    {
      title: "热门影片",
      description: "热门影片",
      requiresWebView: false,
      functionName: "loadPage",
      params: [
        {
          name: "url",
          title: "列表地址",
          type: "constant",
          description: "列表地址",
          value:
            "https://jable.tv/hot/?mode=async&function=get_block&block_id=list_videos_common_videos_list",
        },
        {
          name: "sort_by",
          title: "排序",
          type: "enumeration",
          description: "排序",
          enumOptions: [
            { title: "所有时间", value: "video_viewed" },
            { title: "本月热门", value: "video_viewed_month" },
            { title: "本周热门", value: "video_viewed_week" },
            { title: "今日热门", value: "video_viewed_today" },
          ],
        },
        { name: "from", title: "页码", type: "page", description: "页码", value: "1" },
      ],
    },
    // 中文字幕模块
    {
      title: "中文字幕",
      description: "中文字幕影片",
      requiresWebView: false,
      functionName: "loadPage",
      params: [
        {
          name: "url",
          title: "列表地址",
          type: "constant",
          description: "列表地址",
          value:
            "https://jable.tv/categories/chinese-subtitle/?mode=async&function=get_block&block_id=list_videos_common_videos_list",
        },
        {
          name: "sort_by",
          title: "排序",
          type: "enumeration",
          description: "排序",
          enumOptions: [
            { title: "最新发布", value: "post_date" },
            { title: "最多观看", value: "video_viewed" },
            { title: "最多收藏", value: "most_favourited" },
          ],
        },
        { name: "from", title: "页码", type: "page", description: "页码", value: "1" },
      ],
    },
    // 新增最新上市模块
    {
      title: "最新上市",
      description: "最新上市影片",
      requiresWebView: false,
      functionName: "loadPage",
      params: [
        {
          name: "url",
          title: "列表地址",
          type: "constant",
          description: "列表地址",
          value:
            "https://jable.tv/new-release/?mode=async&function=get_block&block_id=list_videos_common_videos_list",
        },
        {
          name: "sort_by",
          title: "排序",
          type: "enumeration",
          description: "排序",
          enumOptions: [
            { title: "最新发布", value: "post_date" },
            { title: "最多观看", value: "video_viewed" },
            { title: "最多收藏", value: "most_favourited" },
          ],
        },
        { name: "from", title: "页码", type: "page", description: "页码", value: "1" },
      ],
    },
    // 新增影片主题模块
    {
      title: "影片主题",
      description: "按主题分类浏览影片",
      requiresWebView: false,
      functionName: "loadPage",
      params: [
        {
          name: "url",
          title: "选择主题",
          type: "enumeration",
          enumOptions: [
            { 
              title: "选择类型", 
              value: ""
            },
            { 
              title: "角色剧情", 
              value: "https://jable.tv/categories/roleplay/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "制度诱惑", 
              value: "https://jable.tv/categories/uniform/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "直接开啪", 
              value: "https://jable.tv/categories/sex-only/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "丝袜美腿", 
              value: "https://jable.tv/categories/pantyhose/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "主奴调教", 
              value: "https://jable.tv/categories/bdsm/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "多P群交", 
              value: "https://jable.tv/categories/groupsex/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "男友视角", 
              value: "https://jable.tv/categories/pov/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "凌辱快感", 
              value: "https://jable.tv/categories/insult/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "盗摄偷拍", 
              value: "https://jable.tv/categories/private-cam/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "无码解放", 
              value: "https://jable.tv/categories/uncensored/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "女同欢愉", 
              value: "https://jable.tv/categories/lesbian/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
          ],
          value: "https://jable.tv/categories/all/?mode=async&function=get_block&block_id=list_videos_common_videos_list",
        },
        {
          name: "sort_by",
          title: "排序",
          type: "enumeration",
          description: "排序",
          enumOptions: [
            { title: "最新发布", value: "post_date" },
            { title: "最多观看", value: "video_viewed" },
            { title: "最多收藏", value: "most_favourited" },
          ],
        },
        { name: "from", title: "页码", type: "page", description: "页码", value: "1" },
      ],
    },
  ],
};


async function loadPage(params = {}) {
  const sections = await loadPageSections(params);
  const items = sections.flatMap((section) => section.items);
  return items;
}

async function loadPageSections(params = {}) {
  try {
    let url = params.url;
    if (!url) throw new Error("地址不能为空");
    if (params["sort_by"]) url += `&sort_by=${params.sort_by}`;
    if (params["from"]) url += `&from=${params.from}`;

    // 获取并解析HTML
    const response = await Widget.http.get(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
      },
    });

    if (!response?.data || typeof response.data !== "string") {
      throw new Error("无法获取有效的HTML内容");
    }

    const $ = Widget.html.load(response.data);
    const sections = [];
    
    $(".site-content .py-3,.pb-e-lg-40").each((_, sectionElement) => {
      const $section = $(sectionElement);
      const items = [];
      
      $section.find(".video-img-box").each((_, itemElement) => {
        const $item = $(itemElement);
        const url = $item.find(".title a").attr("href") || "";
        
        if (url.includes("jable.tv")) {
          const cover = $item.find("img").attr("data-src") || $item.find("img").attr("src");
          const video = $item.find("img").attr("data-preview");
          const title = $item.find(".title a").text().trim();
          const duration = $item.find(".absolute-bottom-right .label").text().trim();
          
          items.push({
            id: url,
            type: "video",
            title: title,
            durationText: duration,
            posterPath: cover,
            previewUrl: video,
            link: url,
            metadata: {
              posterShape: "landscape",
              mediaType: "video",
            }
          });
        }
      });

      if (items.length > 0) {
        sections.push({
          id: $section.find(".title-box .h3-md").text().trim() || "default-section",
          type: "section",
          title: $section.find(".title-box .h3-md").text().trim() || "默认标题",
          items: items,
          style: "grid",
          metadata: { layoutType: "grid" }
        });
      }
    });

    return sections;
  } catch (error) {
    console.error("解析失败:", error.message);
    return [];
  }
}