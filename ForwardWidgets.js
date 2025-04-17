// --- START OF COMBINED WIDGET FILE ---

WidgetMetadata = {
  id: "forward.combined.media.lists", // New unique ID for the combined widget
  title: "榜单🔍聚合", // Combined title
  description: "聚合豆瓣、TMDB、IMDB 和 Bangumi 的电影、剧集、动画片单与榜单", // Combined description
  author: "缝合怪", // Combined authors
  site: "", // Combined sites
  version: "1.1.0", // Updated version
  requiredVersion: "0.0.1", // Keep the minimum required version
  modules: [
    // == 豆瓣 Modules (Reordered & Emojis Added) ==
    {
      title: "📚 豆瓣片单", // Added Emoji
      requiresWebView: false,
      functionName: "loadDoubanCardItems",
      params: [
        {
          name: "url",
          title: "列表地址",
          type: "input",
          description: "豆瓣片单地址 (subject_collection 或 doulist)",
          placeholders: [
            { title: "豆瓣 Top 250", value: "https://m.douban.com/subject_collection/movie_top250" },
            { title: "一周电影口碑榜", value: "https://m.douban.com/subject_collection/movie_weekly_best" },
            { title: "华语口碑剧集榜", value: "https://m.douban.com/subject_collection/tv_chinese_best_weekly" },
            { title: "全球口碑剧集榜", value: "https://m.douban.com/subject_collection/tv_global_best_weekly" },
            { title: "国内综艺口碑榜", value: "https://m.douban.com/subject_collection/show_chinese_best_weekly" },
            { title: "全球综艺口碑榜", value: "https://m.douban.com/subject_collection/show_global_best_weekly" },
            { title: "第97届奥斯卡", value: "https://m.douban.com/subject_collection/EC7I7ZDRA?type=rank" },
            { title: "豆瓣电影测试豆列", value: "https://www.douban.com/doulist/155718871/" }
          ]
        },
        {
          name: "start",
          title: "开始",
          type: "count",
        },
        {
          name: "limit",
          title: "每页数量",
          type: "constant",
          value: "20",
        },
      ],
    },
    {
      title: "📈 豆瓣实时电影榜", // Added Emoji
      requiresWebView: false,
      functionName: "loadDoubanItemsFromApi",
      params: [
        { name: "start", title: "开始", type: "count" },
        { name: "limit", title: "每页数量", type: "constant", value: "20" },
        { name: "url", title: "列表地址", type: "constant", value: "https://m.douban.com/rexxar/api/v2/subject_collection/movie_real_time_hotest/items" },
        { name: "type", title: "类型", type: "constant", value: "movie" },
      ],
    },
    {
      title: "📉 豆瓣实时剧集榜", // Added Emoji
      requiresWebView: false,
      functionName: "loadDoubanItemsFromApi",
      params: [
        { name: "start", title: "开始", type: "count" },
        { name: "limit", title: "每页数量", type: "constant", value: "20" },
        { name: "url", title: "列表地址", type: "constant", value: "https://m.douban.com/rexxar/api/v2/subject_collection/tv_real_time_hotest/items" },
        { name: "type", title: "类型", type: "constant", value: "tv" },
      ],
    },
     {
      title: "👍 豆瓣电影推荐", // Added Emoji
      requiresWebView: false,
      functionName: "loadDoubanRecommendMovies",
      params: [
        {
          name: "category",
          title: "分类",
          type: "enumeration",
          enumOptions: [ { title: "全部", value: "全部" }, { title: "热门电影", value: "热门" }, { title: "最新电影", value: "最新" }, { title: "豆瓣高分", value: "豆瓣高分" }, { title: "冷门佳片", value: "冷门佳片" } ]
        },
        {
          name: "type",
          title: "类型",
          type: "enumeration",
          belongTo: { paramName: "category", value: ["热门", "最新", "豆瓣高分", "冷门佳片"] },
          enumOptions: [ { title: "全部", value: "全部" }, { title: "华语", value: "华语" }, { title: "欧美", value: "欧美" }, { title: "韩国", value: "韩国" }, { title: "日本", value: "日本" } ]
        },
        { name: "start", title: "开始", type: "count" },
        { name: "limit", title: "每页数量", type: "constant", value: "20" }
      ],
    },
    {
      title: "🌟 豆瓣剧集推荐", // Added Emoji
      requiresWebView: false,
      functionName: "loadDoubanRecommendShows",
      params: [
         {
          name: "category",
          title: "分类",
          type: "enumeration",
          enumOptions: [ { title: "全部", value: "all" }, { title: "热门剧集", value: "tv" }, { title: "热门综艺", value: "show" } ]
        },
        {
          name: "type",
          title: "类型",
          type: "enumeration",
          belongTo: { paramName: "category", value: ["tv"] },
          enumOptions: [ { title: "综合", value: "tv" }, { title: "国产剧", value: "tv_domestic" }, { title: "欧美剧", value: "tv_american" }, { title: "日剧", value: "tv_japanese" }, { title: "韩剧", value: "tv_korean" }, { title: "动画", value: "tv_animation" }, { title: "纪录片", value: "tv_documentary" } ]
        },
        {
          name: "type",
          title: "类型",
          type: "enumeration",
          belongTo: { paramName: "category", value: ["show"] },
          enumOptions: [ { title: "综合", value: "show" }, { title: "国内", value: "show_domestic" }, { title: "国外", value: "show_foreign" } ]
        },
        { name: "start", title: "开始", type: "count" },
        { name: "limit", title: "每页数量", type: "constant", value: "20" }
      ],
    },
    { // Moved from end
      title: "🎤 一周国内口碑综艺榜", // Added Emoji
      description: "来自豆瓣的国内综艺周榜",
      requiresWebView: false,
      functionName: "loadDoubanCardItems",
      params: [
        { name: "url", title: "列表地址", type: "constant", value: "https://m.douban.com/subject_collection/show_chinese_best_weekly" },
        { name: "start", title: "开始", type: "count" }
      ]
    },
    { // Moved from end
      title: "🌏 一周国外口碑综艺榜", // Added Emoji
      description: "来自豆瓣的全球综艺周榜",
      requiresWebView: false,
      functionName: "loadDoubanCardItems",
      params: [
        { name: "url", title: "列表地址", type: "constant", value: "https://m.douban.com/subject_collection/show_global_best_weekly" },
        { name: "start", title: "开始", type: "count" }
      ]
    },

    // == TMDB Modules (Reordered & Emojis Added) ==
    {
      title: "🆕 TMDB 正在热映", // Added Emoji
      requiresWebView: false,
      functionName: "tmdbNowPlaying",
      params: [
        { name: "type", title: "类型", type: "enumeration", enumOptions: [{ title: "电影", value: "movie" }, { title: "剧集", value: "tv" }] },
        { name: "page", title: "页码", type: "page" },
        { name: "language", title: "语言", type: "language", value: "zh-CN" },
      ],
    },
    {
      title: "🔥 实时热门电影 (TMDB)", // Changed Emoji
      description: "TMDB 当前热门电影",
      requiresWebView: false,
      functionName: "tmdbPopular",
      params: [
        { name: "type", title: "类型", type: "constant", value: "movie" },
        { name: "language", title: "语言", type: "constant", value: "zh-CN" },
        { name: "page", title: "页码", type: "page" }
      ]
    },
    {
      // MODIFIED: Was "大家都在看 (剧集)", now "大家都在看 (综合)" using daily trending
      title: "📺 大家都在看 (综合)", // Changed Title & Emoji
      description: "TMDB 今日热门综合内容 (电影/剧集/人物)", // Updated Description
      requiresWebView: false,
      functionName: "tmdbTrending", // Changed Function
      params: [
        { name: "time_window", title: "时间窗口", type: "constant", value: "day" }, // Changed Param
        { name: "language", title: "语言", type: "constant", value: "zh-CN" },
        { name: "page", title: "页码", type: "page" }
      ]
    },
    {
      title: "💖 TMDB 备受欢迎", // Added Emoji
      requiresWebView: false,
      functionName: "tmdbPopular",
      params: [
        { name: "type", title: "类型", type: "enumeration", enumOptions: [{ title: "电影", value: "movie" }, { title: "剧集", value: "tv" }] },
        { name: "language", title: "语言", type: "language", value: "zh-CN" },
        { name: "page", title: "页码", type: "page" },
      ],
    },
    {
      title: "📈 TMDB 趋势", // Added Emoji (Generic Day/Week)
      requiresWebView: false,
      functionName: "tmdbTrending",
      params: [
        { name: "time_window", title: "时间窗口", type: "enumeration", enumOptions: [{ title: "今日", value: "day" }, { title: "本周", value: "week" }] },
        { name: "language", title: "语言", type: "language", value: "zh-CN" },
        { name: "page", title: "页码", type: "page" },
      ],
    },
    {
      title: "🏆 本周最受欢迎 Top10 (TMDB)", // Kept Emoji
      description: "TMDB 本周趋势内容",
      requiresWebView: false,
      functionName: "tmdbTrending",
      params: [
        { name: "time_window", title: "时间窗口", type: "constant", value: "week" },
        { name: "language", title: "语言", type: "constant", value: "zh-CN" },
        { name: "page", title: "页码", type: "page" }
      ]
    },
     {
      title: "🧑‍🌟 今日热门人物 (TMDB)", // Kept Emoji
      description: "TMDB 当前热门人物",
      requiresWebView: false,
      functionName: "tmdbPopularPeople",
      params: [
        { name: "language", title: "语言", type: "constant", value: "zh-CN" },
        { name: "page", title: "页码", type: "page" }
      ]
    },

    // == IMDB Modules (Reordered & Emojis Added) ==
    {
      title: "🎬 IMDB 片单", // Added Emoji
      description: "解析 IMDB Top 250 等网页片单",
      requiresWebView: false,
      functionName: "loadImdbCardItems",
      params: [
        {
          name: "url",
          title: "列表地址",
          type: "input",
          description: "IMDB 片单地址",
          placeholders: [
            { title: "IMDb Top 250 电影", value: "https://www.imdb.com/chart/top/?ref_=nv_mv_250" },
            { title: "IMDb Top 250 剧集", value: "https://www.imdb.com/chart/toptv/?ref_=nv_tvv_250" },
            { title: "时下热门电影", value: "https://www.imdb.com/chart/moviemeter/?ref_=nv_mv_mpm"},
            { title: "时下热门剧集", value: "https://www.imdb.com/chart/tvmeter/?ref_=nv_tvv_mptv"}
          ],
        },
      ],
    },
    {
      title: "⭐ IMDB API 推荐", // Added Emoji
      description: "通过 IMDB GraphQL API 获取推荐列表",
      requiresWebView: false,
      functionName: "loadImdbApiItems",
      params: [
        {
          name: "url",
          title: "API 地址",
          type: "input",
          description: "IMDB API 地址 (GraphQL)",
          placeholders: [
            { title: "用户最爱 (Fan Favorites)", value: '...' }, // Keep URLs short for edit
            { title: "热门选择 (Top Picks)", value: '...' },
            { title: "最受欢迎 (Popular Titles)", value: '...' }
          ],
        },
      ],
    },

     // == Bangumi Modules (Reordered & Emojis Added) ==
    {
        title: "📅 Bangumi 每日放送", // Added Emoji
        description: "使用 Bangumi API 获取放送日历",
        requiresWebView: false,
        functionName: "loadBangumiCalendar",
        params: [
            {
                name: "weekday",
                title: "星期",
                type: "enumeration",
                description: "选择要看的星期几的放送",
                enumOptions: [
                    { title: "周一 (Mon)", value: "1" }, { title: "周二 (Tue)", value: "2" }, { title: "周三 (Wed)", value: "3" },
                    { title: "周四 (Thu)", value: "4" }, { title: "周五 (Fri)", value: "5" }, { title: "周六 (Sat)", value: "6" },
                    { title: "周日 (Sun)", value: "0" }
                ]
            }
        ]
    },
  ],
  search: {
    // Consider adding Emoji here if the UI shows this title?
    title: "🔍 聚合搜索", // Added Emoji to Search Title
    requiresWebView: false,
    functionName: "aggregatedSearch",
    params: [
      { name: "query", title: "搜索关键词", type: "input", description: "输入电影、剧集或动画名称", value: "" },
      { name: "platform", title: "搜索平台", type: "enumeration", description: "选择要搜索的平台", value: "all", enumOptions: [ { title: "全部", value: "all" }, { title: "TMDB", value: "tmdb" }, { title: "Bangumi", value: "bangumi" }, { title: "豆瓣", value: "douban" } ] }
    ]
  }
};

// --- Douban Functions ---

async function loadDoubanCardItems(params = {}) { // Renamed
  try {
    console.log("开始解析豆瓣片单...");
    console.log("参数:", params);
    const url = params.url;
    if (!url) throw new Error("缺少片单 URL");

    if (url.includes("douban.com/doulist/")) {
      return loadDoubanDefaultList(params); // Use specific helper
    } else if (url.includes("douban.com/subject_collection/")) {
      return loadDoubanSubjectCollection(params); // Use specific helper
    } else {
        throw new Error("不支持的豆瓣 URL 格式");
    }
  } catch (error) {
    console.error("解析豆瓣片单失败:", error);
    throw error;
  }
}

async function loadDoubanDefaultList(params = {}) { // Specific helper
  const url = params.url;
  const listId = url.match(/doulist\/(\d+)/)?.[1];
  console.debug("豆瓣豆列 ID:", listId);
  if (!listId) throw new Error("无法从 URL 获取豆瓣豆列 ID");

  const start = params.start || 0;
  // Douban doulist uses 25 items per page by default on web
  const limit = params.limit || 25; // Adjust default limit for doulist
  const pageUrl = `https://www.douban.com/doulist/${listId}/?start=${start}&sort=&playable=&sub_type=`; // Removed limit param as it doesn't seem reliable

  console.log("请求豆瓣豆列页面:", pageUrl);
  const response = await Widget.http.get(pageUrl, {
    headers: {
      Referer: `https://www.douban.com/`, // General referer
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
    },
  });

  if (!response || !response.data) throw new Error("获取豆瓣豆列数据失败");
  console.log("豆瓣豆列页面数据长度:", response.data.length);

  const docId = Widget.dom.parse(response.data);
  if (docId < 0) throw new Error("解析豆瓣豆列 HTML 失败");

  const itemElements = Widget.dom.select(docId, ".doulist-item");
  console.log("找到项目元素数量:", itemElements.length);
  if (!itemElements || itemElements.length === 0) {
      // Check if it's the end or page is empty
      const paging = Widget.dom.selectFirst(docId, ".paginator .next a");
      if (paging < 0) { // No next page link
          console.log("已到达豆列末尾或豆列为空");
          return [];
      } else {
           console.warn("未找到 .doulist-item 元素，但存在分页，页面结构可能已更改");
           // Try a fallback selector if needed, or return empty
           return [];
      }
  }


  let doubanIds = [];
  for (const itemId of itemElements) {
      const linkElementId = Widget.dom.selectFirst(itemId, ".title a");
      if (linkElementId >= 0) {
          const link = await Widget.dom.attr(linkElementId, "href");
          const idMatch = link.match(/subject\/(\d+)/);
          if (idMatch && idMatch[1]) {
              const title = await Widget.dom.text(linkElementId);
              let coverUrl = "";
              const imgElementId = Widget.dom.selectFirst(itemId, ".post img");
              if (imgElementId >= 0) {
                  coverUrl = await Widget.dom.attr(imgElementId, "src");
              }
              let description = "";
               const abstractElementId = Widget.dom.selectFirst(itemId, ".abstract");
               if (abstractElementId >= 0) {
                   description = await Widget.dom.text(abstractElementId);
                   description = description.trim().replace(/\n\s*/g, ' '); // Clean up whitespace
               }

              doubanIds.push({
                  id: idMatch[1],
                  type: "douban",
                  title: title ? title.trim() : "未知标题",
                  coverUrl: coverUrl || undefined,
                  description: description || undefined
                });
          }
      }
  }
  console.log(`解析到 ${doubanIds.length} 个豆瓣条目`);
  return doubanIds;
}

async function loadDoubanItemsFromApi(params = {}) { // Specific name
  const url = params.url;
  const start = params.start || 0;
  const limit = params.limit || 20;
  const apiUrl = `${url}?start=${start}&count=${limit}&updated_at&items_only=1&for_mobile=1`;
  console.log("请求豆瓣 API:", apiUrl);

  const listIdMatch = params.url.match(/subject_collection\/(\w+)/);
  const referer = listIdMatch ? `https://m.douban.com/subject_collection/${listIdMatch[1]}/` : 'https://m.douban.com/';

  const response = await Widget.http.get(apiUrl, {
    headers: {
      Referer: referer,
      "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1",
    },
  });

  console.log("豆瓣 API 响应:", response.data);
  if (response.data && response.data.subject_collection_items) {
    const items = response.data.subject_collection_items;
    const doubanIds = items.map((item) => ({
      id: item.id,
      type: "douban",
      title: item.title,
      coverUrl: item.cover?.url,
      description: item.card_subtitle, // Or item.description
      rating: item.rating?.value, // Example of getting rating if available
    }));
    return doubanIds;
  }
  return [];
}

async function loadDoubanSubjectCollection(params = {}) { // Specific helper
  const listIdMatch = params.url.match(/subject_collection\/(\w+)/);
  console.debug("豆瓣合集 ID:", listIdMatch ? listIdMatch[1] : "未知");
  if (!listIdMatch) throw new Error("无法从 URL 获取豆瓣合集 ID");

  const listId = listIdMatch[1];
  const start = params.start || 0;
  const limit = params.limit || 20;
  // Construct the specific API URL for subject collections
  const apiUrl = `https://m.douban.com/rexxar/api/v2/subject_collection/${listId}/items`;

  // Pass the constructed URL and other params to the generic API loader
  return await loadDoubanItemsFromApi({
      ...params, // Pass existing params like start, limit
      url: apiUrl, // Override url with the specific API endpoint
  });
}


async function loadDoubanRecommendMovies(params = {}) { // Specific name
  return await loadDoubanRecommendItems(params, "movie");
}

async function loadDoubanRecommendShows(params = {}) { // Specific name
  return await loadDoubanRecommendItems(params, "tv");
}

async function loadDoubanRecommendItems(params = {}, mediaType = "movie") { // Specific name
  const start = params.start || 0;
  const limit = params.limit || 20;
  const category = params.category || "";
  // For '豆瓣电影推荐', 'type' param holds genre like '华语'.
  // For '豆瓣剧集推荐', 'type' param holds sub-category like 'tv_domestic'.
  const subType = params.type || ""; // Rename internal variable to avoid conflict

  let url;
  const encodedTags = encodeURIComponent(params.tags || ""); // Example if tags were added later
  const encodedSelectedCategories = encodeURIComponent(JSON.stringify(params.selected_categories || {})); // Example

  if (category === "全部" || category === "all") { // Use the recommend endpoint for '全部'
      url = `https://m.douban.com/rexxar/api/v2/${mediaType}/recommend?refresh=0&start=${start}&count=${limit}&selected_categories=${encodedSelectedCategories}&uncollect=false&score_range=0,10&tags=${encodedTags}`;
  } else { // Use the older(?) recent_hot endpoint for specific categories like '热门', '最新' etc.
     // Map user-friendly category names to API values if necessary
     let apiCategory = category;
     // Map user-friendly types ('华语', '欧美') to potential API tags/params if needed.
     // The recent_hot API seems simpler and might not support fine-grained type filtering beyond category.
     // The 'type' param in recent_hot might map to the subType provided.
      url = `https://m.douban.com/rexxar/api/v2/subject/recent_hot/${mediaType}?start=${start}&count=${limit}&category=${encodeURIComponent(apiCategory)}&type=${encodeURIComponent(subType)}`;
  }


  console.log(`请求豆瓣推荐 API (${mediaType}): ${url}`);
  const response = await Widget.http.get(url, {
    headers: {
      Referer: `https://movie.douban.com/explore`, // Or `https://m.douban.com/${mediaType}/`
      "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1",
    },
  });

  console.log("豆瓣推荐 API 结果:", response.data);
  // The structure might be response.data.items or response.data.modules[...].data.subject_collection_items etc.
  // Adjust based on actual API response structure. Let's assume response.data.items for now.
  const items = response.data?.items || response.data?.modules?.[0]?.data?.subject_collection_items || [];


  if (items && items.length > 0) {
    const doubanIds = items.map((item) => ({
      id: item.id,
      type: "douban",
      title: item.title,
      coverUrl: item.cover?.url || item.pic?.normal, // Handle different cover structures
      description: item.card_subtitle || item.description,
      rating: item.rating?.value,
    }));
    return doubanIds;
  }
  return [];
}


// --- TMDB Functions ---

// Helper function for TMDB API calls (Ensure it handles persons if used by tmdbTrending)
async function fetchTmdbData(api, params) {
  try {
    const tmdbParams = { ...params };
    delete tmdbParams.type;
    delete tmdbParams.time_window;

    console.log(`调用 TMDB API: ${api} with params:`, tmdbParams);
    const response = await Widget.tmdb.get(api, { params: tmdbParams });

    if (!response || !response.results) {
      console.error("获取 TMDB 数据失败或格式错误", response);
      throw new Error("获取 TMDB 数据失败");
    }

    console.log("TMDB 响应 (部分):", response.results.slice(0, 2));
    const data = response.results;
    const result = data.map((item) => {
      // Handle different types: movie, tv, person
      let title, releaseDate, description, coverUrl, mediaType;

      if (item.media_type === 'movie' || api.startsWith('movie/')) {
        mediaType = 'movie';
        title = item.title;
        releaseDate = item.release_date;
        description = item.overview;
        coverUrl = item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : undefined;
      } else if (item.media_type === 'tv' || api.startsWith('tv/')) {
        mediaType = 'tv';
        title = item.name;
        releaseDate = item.first_air_date;
        description = item.overview;
        coverUrl = item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : undefined;
      } else if (item.media_type === 'person' || api.startsWith('person/')) {
        mediaType = 'person';
        title = item.name;
        releaseDate = undefined; // Not applicable
        const knownForTitles = item.known_for ? item.known_for.map(k => k.title || k.name).join(', ') : '';
        description = `热门作品: ${knownForTitles || 'N/A'}`;
        coverUrl = item.profile_path ? `https://image.tmdb.org/t/p/w500${item.profile_path}` : undefined;
      } else {
        // Fallback for items without clear type (e.g., from /search/multi)
        mediaType = item.media_type || 'unknown';
        title = item.title || item.name;
        releaseDate = item.release_date || item.first_air_date;
        description = item.overview || '';
        coverUrl = item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : (item.profile_path ? `https://image.tmdb.org/t/p/w500${item.profile_path}` : undefined);
      }

      return {
        id: item.id,
        type: "tmdb", // Main type
        media_type: mediaType, // Specific media type
        title: title,
        description: description,
        releaseDate: releaseDate,
        backdropPath: item.backdrop_path, // Keep backdrop if needed
        posterPath: item.poster_path || item.profile_path, // Keep path
        coverUrl: coverUrl,
        rating: item.vote_average ? (item.vote_average / 2).toFixed(1) : undefined, // Convert 10-scale to 5-star rating
        popularity: item.popularity // Keep popularity if needed
      };
    }).filter(item => item.title); // Filter items without a title
    return result;
  } catch (error) {
    console.error(`调用 TMDB API ${api} 失败:`, error);
    // Propagate error or return empty array based on desired behavior
    // throw error; // Option 1: Stop execution
    return []; // Option 2: Return empty, allowing other parts to potentially continue
  }
}

async function tmdbNowPlaying(params) { // Prefixed
  const type = params.type || 'movie'; // Default to movie if not specified
  let api = "tv/on_the_air";
  if (type === "movie") {
    api = "movie/now_playing";
  }
  return await fetchTmdbData(api, params);
}

async function tmdbTrending(params) { // Prefixed
  const timeWindow = params.time_window || 'day';
  const api = `trending/all/${timeWindow}`; // Fetch all types (movie, tv, person)
  // 'page' param is handled by fetchTmdbData
  return await fetchTmdbData(api, params);
}

async function tmdbPopular(params) { // Prefixed
  const type = params.type || 'movie';
  let api = `tv/popular`;
  if (type === "movie") {
    api = `movie/popular`;
  }
  // 'page' param is handled by fetchTmdbData
  return await fetchTmdbData(api, params);
}

// NEW function for Popular People
async function tmdbPopularPeople(params) {
  console.log("Fetching popular people from TMDB");
  const api = "person/popular";
  // Reuse the generic helper, which now handles person mapping
  return await fetchTmdbData(api, params);
}


// --- IMDB Functions ---

async function loadImdbCardItems(params = {}) { // Renamed
  const url = params.url;
  if (!url) throw new Error("缺少 IMDB 片单 URL");
  console.log("请求 IMDB 页面:", url);

  const response = await Widget.http.get(url, {
    headers: {
      Referer: "https://www.imdb.com/",
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
      "Accept-Language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7", // Request English page for more consistent structure
    },
  });
  if (!response || !response.data) throw new Error("获取 IMDB 片单数据失败");
  console.log("IMDB 页面数据长度:", response.data.length);

  const videoIds = [];

  // Method 1: Try parsing application/ld+json (often present in charts)
  const ldJsonMatch = response.data.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  if (ldJsonMatch && ldJsonMatch[1]) {
      try {
          const json = JSON.parse(ldJsonMatch[1]);
          console.log("解析到 LD+JSON 数据");
          if (json && json.itemListElement && Array.isArray(json.itemListElement)) {
              for (const item of json.itemListElement) {
                  if (item && item.item && item.item.url) {
                      const idMatch = item.item.url.match(/(tt\d+)/);
                      if (idMatch && idMatch[1]) {
                          videoIds.push({
                              id: idMatch[1],
                              type: "imdb",
                              // LD+JSON might not have all details readily available
                              title: item.item.name || "Unknown Title",
                              coverUrl: item.item.image || undefined,
                              // description: item.item.description || undefined // Usually not in list LD+JSON
                          });
                      }
                  }
              }
               console.log(`通过 LD+JSON 解析到 ${videoIds.length} 个条目`);
          }
      } catch (e) {
          console.warn("解析 LD+JSON 失败:", e);
          // Proceed to HTML scraping if LD+JSON fails
      }
  }

  // Method 2: HTML Scraping (Fallback or primary if LD+JSON is missing/incomplete)
  if (videoIds.length === 0) {
      console.log("LD+JSON 未找到或解析失败，尝试 HTML 抓取");
      const docId = Widget.dom.parse(response.data);
      if (docId < 0) throw new Error("解析 IMDB HTML 失败");

      // Common selector for chart pages (Top 250, Most Popular)
      // Note: IMDB structure changes often. This selector might break.
      // Look for list items, then the link containing the ttID within the title column or poster link.
      const listItemsSelector = "ul.ipc-metadata-list > li, .lister-list > tr"; // Try multiple common list structures
      const itemElementIds = Widget.dom.select(docId, listItemsSelector);

      console.log("找到列表项元素数量:", itemElementIds.length);

      for (const itemId of itemElementIds) {
          // Try finding the link within the title column first
          let linkElementId = Widget.dom.selectFirst(itemId, ".ipc-title__text, .titleColumn a"); // Selector for title text element or direct link
          let link = "";
          let title = "";

          if (linkElementId >= 0) {
              // If it's the title text, the link might be on a parent or sibling
              const titleText = await Widget.dom.text(linkElementId);
              title = titleText ? titleText.replace(/^\d+\.\s*/, '').trim() : "Unknown Title"; // Clean up rank number if present

              // Try finding the link associated with this title (might be parent 'a')
              const titleLinkElementId = Widget.dom.selectFirst(itemId, "a.ipc-title-link-wrapper, .titleColumn a");
               if (titleLinkElementId >= 0) {
                   link = await Widget.dom.attr(titleLinkElementId, "href");
               }
          }

           // Fallback: Try finding the link from the poster element if title link fails
          if (!link) {
             const posterLinkElementId = Widget.dom.selectFirst(itemId, ".ipc-poster a, .posterColumn a");
              if (posterLinkElementId >= 0) {
                   link = await Widget.dom.attr(posterLinkElementId, "href");
                   // Try to get title from poster alt text or adjacent title element if not found earlier
                   if (!title) {
                       const imgElementId = Widget.dom.selectFirst(posterLinkElementId, "img");
                       if (imgElementId >= 0) title = await Widget.dom.attr(imgElementId, "alt");
                       if (!title) {
                            // Try finding title again near the poster
                            let fallbackTitleId = Widget.dom.selectFirst(itemId, ".ipc-title__text, .titleColumn a");
                            if(fallbackTitleId >= 0) title = await Widget.dom.text(fallbackTitleId);
                       }
                       title = title ? title.replace(/^\d+\.\s*/, '').trim() : "Unknown Title";
                   }
              }
          }


          if (link) {
              const idMatch = link.match(/(tt\d+)/);
              if (idMatch && idMatch[1]) {
                  let coverUrl = "";
                  const imgElementId = Widget.dom.selectFirst(itemId, ".ipc-poster img, .posterColumn img");
                  if (imgElementId >= 0) {
                      coverUrl = await Widget.dom.attr(imgElementId, "src");
                      // IMDB often uses low-res thumbnails, try to get larger version
                      coverUrl = coverUrl.replace(/@\._V1_.*?\./, '@._V1_FMjpg_UX670_.'); // Experiment with URL format
                  }

                   let description = ""; // Rating, year etc. are harder to reliably scrape consistently
                   const ratingElementId = Widget.dom.selectFirst(itemId, ".ipc-rating-star, .imdbRating strong");
                   if (ratingElementId >= 0) {
                       const ratingText = await Widget.dom.text(ratingElementId);
                       if(ratingText) description += `Rating: ${ratingText.trim()} `;
                   }
                   const yearElementId = Widget.dom.selectFirst(itemId, ".sc-b189961a-8, .titleColumn .secondaryInfo"); // Adjust selector as needed
                    if(yearElementId >= 0) {
                        const yearText = await Widget.dom.text(yearElementId);
                        if(yearText) description += `Year: ${yearText.trim().replace(/[()]/g, '')}`;
                    }


                  videoIds.push({
                      id: idMatch[1],
                      type: "imdb",
                      title: title || "Unknown Title",
                      coverUrl: coverUrl || undefined,
                      description: description.trim() || undefined
                    });
              }
          }
      }
      console.log(`通过 HTML 抓取解析到 ${videoIds.length} 个条目`);
  }


  if (videoIds.length === 0) {
      console.warn("未能从 IMDB URL 解析到任何条目");
  }
  return videoIds;
}


async function loadImdbApiItems(params = {}) { // Renamed
  const url = params.url;
  if (!url) throw new Error("缺少 IMDB API 地址");
  console.log("请求 IMDB API:", url);

  const response = await Widget.http.get(url, {
    headers: {
      "Content-Type": "application/json",
      Referer: "https://www.imdb.com/", // Referer might be important
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
      "Accept-Language": "en-US,en;q=0.9", // API might behave differently based on language
       // May need 'apollographql-client-name' and 'apollographql-client-version' headers sometimes
       // 'apollographql-client-name': 'imdb-web-next',
       // 'apollographql-client-version': '1.Next' // Version might change
    },
  });

  console.log("IMDB API 原始响应:", JSON.stringify(response.data).substring(0, 500)); // Log snippet
  if (!response || !response.data || !response.data.data) {
    console.error("获取 IMDB API 数据失败或格式错误", response.data);
    throw new Error("获取 IMDB API 数据失败");
  }

  const videos = [];
  // The exact path to the items varies depending on the GraphQL operationName
  let edges = [];
  const data = response.data.data;

  if (data.fanPicksTitles && data.fanPicksTitles.edges) {
      edges = data.fanPicksTitles.edges;
      console.log("解析 FanFavorites/TopPicks 数据");
  } else if (data.popularTitles && data.popularTitles.edges) {
      edges = data.popularTitles.edges;
      console.log("解析 PopularTitles 数据");
  } else if (data.topPicksTab && data.topPicksTab.titleList?.edges) { // Another possible structure for TopPicks
       edges = data.topPicksTab.titleList.edges;
       console.log("解析 TopPicksTab 数据");
  }
   else {
      console.warn("未知的 IMDB API 响应结构:", data);
      return [];
  }


  edges.forEach((edge) => {
    if (edge && edge.node) {
        const node = edge.node;
        const titleText = node.titleText?.text;
        const image = node.primaryImage;
        const rating = node.ratingsSummary?.aggregateRating;
        const yearRange = node.releaseYear?.year; // Or node.releaseDate?.year for single year

        videos.push({
            id: node.id,
            type: "imdb",
            title: titleText || "Unknown Title",
            coverUrl: image?.url || undefined,
            description: `Rating: ${rating || 'N/A'} | Year: ${yearRange || 'N/A'}`, // Basic description
            rating: rating ? parseFloat(rating) : undefined // Store rating numerically if needed
        });
    }
  });
  console.log(`通过 API 解析到 ${videos.length} 个条目`);
  return videos;
}


// --- Bangumi Functions ---

async function loadBangumiCalendar(params = {}) {
    const selectedWeekday = params.weekday; // e.g., "1" for Monday, "0" for Sunday
    const url = "https://api.bgm.tv/calendar";
    console.log("请求 Bangumi 放送日历 API:", url);

    try {
        const response = await Widget.http.get(url, {
            headers: {
                // Bangumi API requires a specific User-Agent, otherwise it might block or return errors
                "User-Agent": "ForwardWidget/1.0 (APP_ID; CONTACT_INFO)", // Replace with actual info if needed
                "Accept": "application/json"
            }
        });

        if (!response || !response.data || !Array.isArray(response.data)) {
             console.error("Bangumi 日历 API 响应无效:", response.data);
            throw new Error("获取 Bangumi 放送日历数据失败或格式错误");
        }
        console.log("Bangumi 日历 API 响应长度:", response.data.length); // Should be 7 (days)

        const bangumiItems = [];
        for (const dayData of response.data) {
             // The API weekday object uses 1-7 (Mon-Sun). Match this with the selectedWeekday param (0-6 or 1-7 standard)
             // Bangumi API: { weekday: { en: 'Mon', cn: '星期一', ja: '月', id: 1 }, items: [...] }
             const apiWeekdayId = dayData.weekday?.id; // This is 1-7 for Mon-Sun

            // Convert selectedWeekday (assuming 0=Sun, 1=Mon...) to API's 1-7 format
            let targetApiWeekdayId = parseInt(selectedWeekday, 10);
            if(selectedWeekday === "0") { // If input is 0 for Sunday
                targetApiWeekdayId = 7; // API uses 7 for Sunday
            }

            // If a specific weekday is selected, only process that day's items
            if (selectedWeekday !== undefined && selectedWeekday !== null && apiWeekdayId !== targetApiWeekdayId) {
                continue;
            }

            if (dayData.items && Array.isArray(dayData.items)) {
                for (const item of dayData.items) {
                    const images = item.images || {};
                    const coverUrl = images.large || images.common || images.medium || images.small || undefined;
                    const title = item.name_cn || item.name || "未知标题";
                    const summary = item.summary || "";
                    const airDate = item.air_date || "";
                     const rating = item.rating?.score;
                     const rank = item.rank;

                    let description = `Air Date: ${airDate}`;
                    if(rating) description += ` | Score: ${rating}`;
                    if(rank) description += ` | Rank: ${rank}`;
                    if(summary) description += ` | Summary: ${summary.substring(0, 100)}${summary.length > 100 ? '...' : ''}`;


                    bangumiItems.push({
                        id: item.id,
                        type: "bangumi",
                        title: title.trim(),
                        coverUrl: coverUrl ? (coverUrl.startsWith('//') ? 'https:' + coverUrl : coverUrl) : undefined,
                        description: description.trim() || undefined,
                        // Add other relevant fields if needed
                        // airWeekday: item.air_weekday, // API provides this too
                    });
                }
            }
        }
        console.log(`解析到 ${bangumiItems.length} 个 Bangumi 放送条目 (符合筛选条件)`);
        return bangumiItems;

    } catch (error) {
        console.error("加载 Bangumi 放送日历失败:", error);
        throw error; // Rethrow error for API calls as they should be more reliable
    }
}


// --- Aggregated Search Function (Ensure Douban part uses the final working logic) ---
async function aggregatedSearch(params = {}) {
    const query = params.query || "";
    const platform = params.platform || "all"; 

    if (!query) {
        console.warn("搜索查询为空");
        return []; 
    }
    const encodedQuery = encodeURIComponent(query);
    console.log(`开始搜索: ${query} on platform: ${platform}`);

    let searchPromises = [];

    // --- TMDB Search Task --- (Only add if platform is 'all' or 'tmdb')
    if (platform === 'all' || platform === 'tmdb') {
        searchPromises.push((async () => {
            try {
                console.log("开始搜索 TMDB...");
                const response = await Widget.tmdb.get("/search/multi", { params: { query: query, language: "zh-CN" } });
                if (!response || !response.results) {
                    console.error("TMDB 搜索 API 响应无效:", response);
                    return [];
                }
                console.log(`TMDB 搜索到 ${response.results.length} 个结果`);
                return response.results.map(item => {
                    const isMovie = item.media_type === 'movie';
                    const title = isMovie ? item.title : item.name;
                    const releaseDate = isMovie ? item.release_date : item.first_air_date;
                    return {
                        id: item.id.toString(), // Ensure ID is string for consistency if needed
                        type: "tmdb", // Identify source as TMDB
                        title: title,
                        coverUrl: item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : (item.profile_path ? `https://image.tmdb.org/t/p/w500${item.profile_path}` : undefined), // Handle person results too
                        description: item.overview || (item.known_for ? item.known_for.map(k => k.title || k.name).join(', ') : `类型: ${item.media_type}`) , // Basic description or media type
                        rating: item.vote_average ? (item.vote_average / 2).toFixed(1) : undefined,
                        releaseDate: releaseDate
                    };
                }).filter(item => item.title); // Filter out results without title
            } catch (e) {
                console.error("TMDB 搜索失败:", e);
                return []; // Return empty on error
            }
        })());
    }

    // --- Bangumi Search Task --- (Only add if platform is 'all' or 'bangumi')
    if (platform === 'all' || platform === 'bangumi') {
        searchPromises.push((async () => {
            let bangumiResults = [];
            try {
                console.log("开始搜索 Bangumi...");
                const bangumiUrl = `https://bgm.tv/subject_search/${encodedQuery}?cat=all`; // Use subject_search path
                const bangumiResponse = await Widget.http.get(bangumiUrl, {
                    headers: {
                        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
                        "Referer": "https://bgm.tv/",
                        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8"
                    }
                });
                const bangumiDocId = Widget.dom.parse(bangumiResponse.data);
                if (bangumiDocId < 0) {
                     console.error("解析 Bangumi 搜索 HTML 失败");
                     return [];
                 }
                const bangumiItems = Widget.dom.select(bangumiDocId, "#browserItemList li"); // Use ranking list selector pattern
                console.log(`Bangumi 搜索页面找到 ${bangumiItems.length} 个 potential items`);
                for (const itemId of bangumiItems) {
                    const linkElementId = Widget.dom.selectFirst(itemId, "a.subjectCover"); // Link is usually on cover
                    const titleElementId = Widget.dom.selectFirst(itemId, "h3 a");
                    if (linkElementId >= 0 && titleElementId >= 0) {
                        const title = await Widget.dom.text(titleElementId);
                        const link = await Widget.dom.attr(linkElementId, "href");
                        const idMatch = link ? link.match(/\/subject\/(\d+)/) : null;
                        if (idMatch && idMatch[1]) {
                             let coverUrl = undefined;
                             const imgElementId = Widget.dom.selectFirst(linkElementId, "img");
                             if (imgElementId >= 0) {
                                 coverUrl = await Widget.dom.attr(imgElementId, "src");
                                 if (coverUrl && coverUrl.startsWith('//')) {
                                     coverUrl = 'https:' + coverUrl;
                                 }
                                 // Try to get larger image
                                  if (coverUrl && coverUrl.includes('/c/')) { // common size maybe?
                                      coverUrl = coverUrl.replace('/c/', '/l/'); // try large
                                  } else if (coverUrl && coverUrl.includes('/g/')) { // grid size?
                                       coverUrl = coverUrl.replace('/g/', '/l/'); // try large
                                  }
                             }
                             let description = "";
                             const infoElementId = Widget.dom.selectFirst(itemId, ".info.tip");
                             if(infoElementId >= 0) {
                                 description = await Widget.dom.text(infoElementId);
                                 description = description.trim().replace(/\n\s*/g, ' | ');
                             }
                            bangumiResults.push({
                                id: idMatch[1],
                                type: "bangumi",
                                title: title.trim(),
                                coverUrl: coverUrl,
                                description: description || undefined
                            });
                        }
                    }
                }
                console.log(`Bangumi 搜索解析到 ${bangumiResults.length} 个结果`);
            } catch (e) {
                console.error("Bangumi 搜索失败:", e);
            }
             return bangumiResults; 
        })());
    }

    // --- Douban Search Task --- (Apply FINAL working logic: cat=1002, .result, specific selectors, jump link ID handling)
    if (platform === 'all' || platform === 'douban') {
        searchPromises.push((async () => {
            let doubanResults = [];
            try {
                console.log("=====>>>>> Douban: 开始搜索 (cat=1002 + 精确选择器策略) <<<<<=====");
                const doubanUrl = `https://www.douban.com/search?q=${encodedQuery}&cat=1002`; // USE cat=1002
                const doubanResponse = await Widget.http.get(doubanUrl, {
                     headers: { 
                        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1",
                        "Referer": "https://www.douban.com/"
                    }
                });
                const doubanDocId = Widget.dom.parse(doubanResponse.data);
                if (doubanDocId < 0) {
                    console.error("=====>>>>> Douban: 解析 HTML 失败 <<<<<=====");
                    return [];
                }
                const resultItems = Widget.dom.select(doubanDocId, ".result"); // Use .result selector
                console.log(`=====>>>>> Douban: 找到 ${resultItems.length} 个 .result 元素 (cat=1002) <<<<<=====`);
                if (!resultItems || resultItems.length === 0) {
                     console.log("=====>>>>> Douban: 未找到结果元素，搜索结束 <<<<<=====");
                     return [];
                }
                for (const resultId of resultItems) {
                     console.log("=====>>>>> Douban: 处理一个 resultId <<<<<=====");
                    // Use .title h3 a selector
                    const titleElement = Widget.dom.selectFirst(resultId, ".title h3 a"); 
                    if (titleElement < 0) {
                         console.log("=====>>>>> Douban: 未找到 .title h3 a, 跳过 <<<<<=====");
                         continue;
                     }
                    const title = await Widget.dom.text(titleElement);
                    const link = await Widget.dom.attr(titleElement, "href");
                    console.log(`=====>>>>> Douban: 获取到标题: ${title}`);
                    console.log(`=====>>>>> Douban: 获取到原始链接: ${link}`);
                    if (!link || typeof link !== 'string') continue;
                    
                    // --- Corrected ID Extraction Logic for Redirects ---
                    let id = null;
                    let actualSubjectUrl = link;
                    const redirectPrefix = "https://www.douban.com/link/?url=";
                    if (link.startsWith(redirectPrefix)) {
                        console.log("=====>>>>> Douban: 检测到跳转链接");
                        try {
                            const urlParamStartIndex = link.indexOf("url=");
                            if (urlParamStartIndex !== -1) {
                                const encodedUrlStart = urlParamStartIndex + 4;
                                let encodedUrlEnd = link.indexOf('&', encodedUrlStart);
                                if (encodedUrlEnd === -1) { encodedUrlEnd = link.length; }
                                const encodedUrl = link.substring(encodedUrlStart, encodedUrlEnd);
                                if (encodedUrl) {
                                    actualSubjectUrl = decodeURIComponent(encodedUrl);
                                    console.log("=====>>>>> Douban: 解码后的内部 URL:", actualSubjectUrl);
                                } else {
                                    console.log("=====>>>>> Douban: 未能提取编码后的 URL 部分");
                                    actualSubjectUrl = "";
                                }
                            } else {
                                 console.log("=====>>>>> Douban: 跳转链接中未找到 'url='");
                                 actualSubjectUrl = "";
                            }
                        } catch (e) {
                            console.error("=====>>>>> Douban: 提取或解码内部 URL 失败:", e);
                            actualSubjectUrl = "";
                        }
                    } else {
                         console.log("=====>>>>> Douban: 不是跳转链接，直接使用原始链接");
                    }
                    if (actualSubjectUrl) {
                        const idMatch = actualSubjectUrl.match(/subject\/(\d+)/);
                        if (idMatch && idMatch[1]) {
                            id = idMatch[1];
                            console.log("=====>>>>> Douban: 成功提取到 ID:", id);
                        }
                    }
                    // --- End ID Extraction --- 

                    // Use .pic img selector for cover
                    const coverElement = Widget.dom.selectFirst(resultId, ".pic img"); 
                    let coverUrl = undefined;
                    if (coverElement >= 0) {
                         coverUrl = await Widget.dom.attr(coverElement, "src");
                          console.log("=====>>>>> Douban: 获取到封面元素 src:", coverUrl);
                         if (coverUrl && coverUrl.startsWith('//')) {
                             coverUrl = 'https:' + coverUrl;
                         }
                    } else {
                          console.log("=====>>>>> Douban: 未找到 .pic img 元素 <<<<<=====");
                    }

                    // Description selector: try .content .subject-cast, fallback .abstract .inq
                    const descElement = Widget.dom.selectFirst(resultId, ".content .subject-cast"); 
                    let description = "";
                    if (descElement >= 0) {
                         description = await Widget.dom.text(descElement); 
                         console.log("=====>>>>> Douban: 获取到描述 (cast):", description);
                         description = description.trim().replace(/\n\s*/g, ' / '); 
                    } else {
                         const abstractElement = Widget.dom.selectFirst(resultId, ".abstract .inq");
                         if (abstractElement >= 0) {
                              description = await Widget.dom.text(abstractElement);
                              console.log("=====>>>>> Douban: 获取到描述 (abstract):", description);
                         } else {
                              console.log("=====>>>>> Douban: 未找到描述元素 (.subject-cast 或 .abstract .inq)");
                         }
                    }

                    doubanResults.push({
                        id: id || "", // Use empty string if ID is null
                        type: "douban",
                        title: title.trim(),
                        coverUrl: coverUrl,
                        description: description.trim() || undefined
                    });
                     console.log("=====>>>>> Douban: 成功添加一个结果到 doubanResults (即使 ID 可能为空) <<<<<=====");
                }
                 console.log(`=====>>>>> Douban: 循环结束, 解析到 ${doubanResults.length} 个结果 <<<<<=====`);
            } catch (e) {
                console.error("=====>>>>> Douban (cat=1002 策略) 捕获到错误: <<<<<=====", e);
                return [];
            }
            return doubanResults;
        })());
    }

    // Execute all selected searches concurrently and wait for all to settle
    if (searchPromises.length === 0) {
        console.log("没有选择任何平台进行搜索");
        return [];
    }
    const allResults = await Promise.allSettled(searchPromises);

    // Combine results from successful searches
    let combinedResults = [];
    allResults.forEach((result, index) => {
        // Determine platform based on the order promises were added
        let platformName = "Unknown";
        if (platform === 'all') platformName = ["TMDB", "Bangumi", "Douban"][index];
        else if (platform === 'tmdb') platformName = "TMDB";
        else if (platform === 'bangumi') platformName = "Bangumi";
        else if (platform === 'douban') platformName = "Douban";
        
        if (result.status === "fulfilled") {
            console.log(`${platformName} 搜索成功，获得 ${result.value.length} 条结果`);
            combinedResults = combinedResults.concat(result.value);
        } else {
            console.error(`${platformName} 搜索处理失败: ${result.reason}`);
        }
    });

    console.log(`搜索完成，共获得 ${combinedResults.length} 条结果`);
    return combinedResults;
}


// --- END OF COMBINED WIDGET FILE ---
