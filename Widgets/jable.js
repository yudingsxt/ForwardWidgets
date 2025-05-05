WidgetMetadata = {
  id: "jable",
  title: "Jable",
  description: "获取Jable热门影片榜单",
  author: "nibiru",
  site: "https://github.com/quantumultxx/FW-Widgets",
  version: "1.0.1",
  requiredVersion: "0.0.1",
  modules: [
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
            {
              title: "所有时间",
              value: "video_viewed",
            },
            {
              title: "本月热门",
              value: "video_viewed_month",
            },
            {
              title: "本周热门",
              value: "video_viewed_week",
            },
            {
              title: "今日热门",
              value: "video_viewed_today",
            },
          ],
        },
        {
          name: "from",
          title: "页码",
          type: "page",
          description: "页码",
          value: "1",
        },
      ],
    },
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
            {
              title: "最新发布",
              value: "post_date",
            },
            {
              title: "最多观看",
              value: "video_viewed",
            },
            {
              title: "最多收藏",
              value: "most_favourited",
            },
          ],
        },
        {
          name: "from",
          title: "页码",
          type: "page",
          description: "页码",
          value: "1",
        },
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
    if (!url) {
      throw new Error("地址不能为空");
    }
    if (params["sort_by"]) {
      url += `&sort_by=${params.sort_by}`;
    }
    if (params["from"]) {
      url += `&from=${params.from}`;
    }
    // 1. 获取HTML内容
    console.log("=== 获取HTML内容 ===");
    const response = await Widget.http.get(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
      },
    });

    if (!response || !response.data || typeof response.data !== "string") {
      throw new Error("无法获取有效的HTML内容");
    }

    const htmlContent = response.data;
    console.log(`获取到HTML内容长度: ${htmlContent.length} 字符`);

    // 2. 解析HTML
    console.log("\n=== 解析HTML ===");
    const $ = Widget.html.load(htmlContent);
    const sectionSelector = ".site-content .py-3,.pb-e-lg-40";
    const itemSelector = ".video-img-box";
    const coverSelector = "img";
    const durationSelector = ".absolute-bottom-right .label";
    const titleSelector = ".title a";

    let sections = [];
    const sectionElements = $(sectionSelector).toArray();
    
    for (const sectionElement of sectionElements) {
      const $sectionElement = $(sectionElement);
      const items = [];
      const sectionTitle = $sectionElement.find(".title-box .h3-md").first().text().trim();
      
      const itemElements = $sectionElement.find(itemSelector).toArray();
      for (const itemElement of itemElements) {
        const $itemElement = $(itemElement);
        const titleId = $itemElement.find(titleSelector).first();
        const url = titleId.attr("href") || "";
        
        if (url && url.includes("jable.tv")) {
          const durationId = $itemElement.find(durationSelector).first();
          const coverId = $itemElement.find(coverSelector).first();
          const cover = coverId.attr("data-src") || coverId.attr("src");
          const video = coverId.attr("data-preview");
          const title = titleId.text().trim();
          const duration = durationId.text().trim();
          
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
      }

      if (items.length > 0) {
        sections.push({
          id: sectionTitle || "default-section",
          type: "section",
          title: sectionTitle || "默认标题",
          items: items,
          style: "grid",
          metadata: {
            layoutType: "grid",
          }
        });
      }
    }
    
    return sections;
  } catch (error) {
    console.error("测试过程出错:", error.message);
    throw error;
  }
}
