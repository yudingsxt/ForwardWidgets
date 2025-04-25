// --- START OF COMBINED WIDGET FILE ---

WidgetMetadata = {
  id: "forward.combined.media.lists",
  title: "榜单🔍聚合",
  description: "聚合豆瓣、TMDB、IMDB 和 Bangumi 的电影、剧集、动画片单与榜单",
  author: "阿米诺斯",
  site: "",
  version: "1.1.45", // Refactor: Merge TMDB Popular movie/tv modules
  requiredVersion: "0.0.1",
  modules: [
    // --- 🔥 实时热点 (Real-time Hot) ---
    {
      title: "🔥 豆瓣电影实时热榜",
      description: "来自豆瓣的当前热门电影榜单",
      requiresWebView: false,
      functionName: "loadDoubanItemsFromApi",
      params: [
        { name: "start", title: "▶️ 开始条目", type: "count", description:"从第几个条目开始加载" },
        { name: "limit", title: "🔢 每页数量", type: "constant", value: "20" },
        { name: "url", title: "🔗 列表地址", type: "constant", value: "https://m.douban.com/rexxar/api/v2/subject_collection/movie_real_time_hotest/items" },
        { name: "type", title: "🎭 类型", type: "constant", value: "movie" },
      ],
    },
    {
      title: "🔥 豆瓣剧集实时热榜",
      description: "来自豆瓣的当前热门剧集榜单",
      requiresWebView: false,
      functionName: "loadDoubanItemsFromApi",
      params: [
        { name: "start", title: "▶️ 开始条目", type: "count", description:"从第几个条目开始加载" },
        { name: "limit", title: "🔢 每页数量", type: "constant", value: "20" },
        { name: "url", title: "🔗 列表地址", type: "constant", value: "https://m.douban.com/rexxar/api/v2/subject_collection/tv_real_time_hotest/items" },
        { name: "type", title: "🎭 类型", type: "constant", value: "tv" },
      ],
    },
    {
      title: "🎬 TMDB 正在热映",
      description: "TMDB 当前正在影院或流媒体上映的电影/剧集",
      requiresWebView: false,
      functionName: "tmdbNowPlaying",
      params: [
        { name: "type", title: "🎭 类型", type: "enumeration", enumOptions: [{ title: "电影", value: "movie" }, { title: "剧集", value: "tv" }], value: "movie" },
        {
          name: "watch_region", title: "📍 观看地区", type: "enumeration", description: "选择地区以查找观看平台 (留空则不查询)", value: "",
          enumOptions: [
            { title: "不查询", value: "" }, { title: "中国大陆", value: "CN" }, { title: "中国香港", value: "HK" },
            { title: "中国台湾", value: "TW" }, { title: "美国", value: "US" }, { title: "日本", value: "JP" },
            { title: "韩国", value: "KR" }, { title: "英国", value: "GB" }
          ]
        },
        { name: "page", title: "📄 页码", type: "page" },
        { name: "language", title: "🌐 语言", type: "language", value: "zh-CN" },
      ],
    },
    {
      title: "📈 TMDB 本日热门",
      description: "TMDB 今日热门综合内容 (电影/剧集/人物)",
      requiresWebView: false,
      functionName: "tmdbTrending",
      params: [
        { name: "time_window", title: "⏱️ 时间窗口", type: "constant", value: "day" },
        { name: "language", title: "🌐 语言", type: "constant", value: "zh-CN" },
        { name: "page", title: "📄 页码", type: "page" }
      ]
    },
    {
      title: "📅 TMDB 本周热门",
      description: "TMDB 本周趋势内容 (电影/剧集/人物)",
      requiresWebView: false,
      functionName: "tmdbTrending",
      params: [
        { name: "time_window", title: "⏱️ 时间窗口", type: "constant", value: "week" },
        { name: "language", title: "🌐 语言", type: "constant", value: "zh-CN" },
        { name: "page", title: "📄 页码", type: "page" }
      ]
    },

    // --- 🏆 经典 Top 榜单 (Classic Top Charts) ---
    {
      title: "🏆 豆瓣 Top 250 - 电影",
      description: "豆瓣评分最高的 250 部电影",
      requiresWebView: false,
      functionName: "loadDoubanCardItems", // Uses the card loader which handles collections
      params: [
        { name: "url", title: "🔗 列表地址", type: "constant", value: "https://m.douban.com/subject_collection/movie_top250" },
        { name: "start", title: "▶️ 开始条目", type: "count", description:"从第几个条目开始加载" },
        { name: "limit", title: "🔢 每页数量", type: "constant", value: "20" },
      ],
    },
    {
      title: "🏆 IMDb Top 250 - 电影",
      description: "IMDb 用户评分最高的 250 部电影",
      requiresWebView: false,
      functionName: "loadImdbCardItems",
      params: [
        { name: "url", title: "🔗 列表地址", type: "constant", value: "https://www.imdb.com/chart/top/?ref_=nv_mv_250" },
      ],
    },
    {
      title: "🏆 IMDb Top 250 - 剧集",
      description: "IMDb 用户评分最高的 250 部剧集",
      requiresWebView: false,
      functionName: "loadImdbCardItems",
      params: [
        { name: "url", title: "🔗 列表地址", type: "constant", value: "https://www.imdb.com/chart/toptv/?ref_=nv_tvv_250" },
      ],
    },
    // --- 📅 豆瓣周榜与自定义 (Douban Weekly & Custom) ---
     {
      title: "📅 豆瓣 - 一周国内综艺榜",
      description: "豆瓣国内综艺口碑周榜",
      requiresWebView: false,
      functionName: "loadDoubanCardItems",
      params: [
        { name: "url", title: "🔗 列表地址", type: "constant", value: "https://m.douban.com/subject_collection/show_chinese_best_weekly" },
        { name: "start", title: "▶️ 开始条目", type: "count", description:"从第几个条目开始加载" }
      ]
    },
    {
      title: "📅 豆瓣 - 一周全球综艺榜",
      description: "豆瓣全球综艺口碑周榜",
      requiresWebView: false,
      functionName: "loadDoubanCardItems",
      params: [
        { name: "url", title: "🔗 列表地址", type: "constant", value: "https://m.douban.com/subject_collection/show_global_best_weekly" },
        { name: "start", title: "▶️ 开始条目", type: "count", description:"从第几个条目开始加载" }
      ]
    },
     {
      title: "🔍 豆瓣 - 自定义榜单/豆列",
      description: "加载豆瓣官方榜单或用户豆列 (输入URL)",
      requiresWebView: false,
      functionName: "loadDoubanCardItems",
      params: [
        {
          name: "url", title: "🔗 列表地址", type: "input", description: "输入豆瓣榜单(subject_collection)或豆列(doulist)地址",
          placeholders: [
            { title: "一周电影口碑榜", value: "https://m.douban.com/subject_collection/movie_weekly_best" },
            { title: "一周华语口碑剧集榜", value: "https://m.douban.com/subject_collection/tv_chinese_best_weekly" },
            { title: "一周全球口碑剧集榜", value: "https://m.douban.com/subject_collection/tv_global_best_weekly" },
            { title: "第97届奥斯卡 (2025)", value: "https://m.douban.com/subject_collection/EC7I7ZDRA?type=rank" },
            { title: "豆瓣电影测试豆列", value: "https://www.douban.com/doulist/155718871/" }
          ]
        },
        { name: "start", title: "▶️ 开始条目", type: "count", description:"从第几个条目开始加载" },
        { name: "limit", title: "🔢 每页数量", type: "constant", value: "20" }, // Keep limit consistent
      ],
    },
    // --- 🔍 IMDb 自定义与探索 (IMDb Custom & Explore) ---
    {
      title: "🔍 IMDb - 自定义榜单",
      description: "加载 IMDb 网页榜单/片单 (输入URL)",
      requiresWebView: false,
      functionName: "loadImdbCardItems",
      params: [
        {
          name: "url", title: "🔗 列表地址", type: "input", description: "输入 IMDb 榜单或片单地址",
          placeholders: [
            { title: "时下热门电影", value: "https://www.imdb.com/chart/moviemeter/?ref_=nv_mv_mpm"},
            { title: "时下热门剧集", value: "https://www.imdb.com/chart/tvmeter/?ref_=nv_tvv_mptv"}
          ],
        },
      ],
    },
    {
      title: "💡 IMDb - 编辑推荐 (API)",
      description: "通过 IMDb API 获取推荐列表 (需抓包获取URL)",
      requiresWebView: false,
      functionName: "loadImdbApiItems",
      params: [
        {
          name: "url", title: "🔗 API 地址", type: "input", description: "输入 IMDb GraphQL API 地址 (需从浏览器网络请求中捕获)",
          placeholders: [
            { title: "例如：用户最爱 (Fan Favorites)", value: '在此粘贴捕获的URL' },
            { title: "例如：热门选择 (Top Picks)", value: '在此粘贴捕获的URL' },
          ],
        },
      ],
    },

    // --- 🌸 Bangumi 动画专区 (Bangumi Anime Zone) ---
    {
        title: "🏆 Bangumi - 动画总排行",
        description: "按综合评分排名浏览 Bangumi 动画",
        requiresWebView: false,
        functionName: "loadBangumiRankings",
        params: [
             { name: "page", title: "📄 页码", type: "page" }
        ]
    },
    {
        title: "🏷️ Bangumi - 动画筛选浏览",
        description: "按标签、年份、类型、题材等条件筛选 Bangumi 动画",
        requiresWebView: false,
        functionName: "loadBangumiBrowser",
        params: [
            { name: "tag", title: "#️⃣ 标签 (可选)", type: "input", description: "输入单个标签, 如 漫画改, 轻小说改...", value: "", placeholders: [{title:"例如：漫画改", value:"漫画改"}, {title:"原创", value:"原创"}] },
            { name: "genre_tag", title: "🎭 题材", type: "enumeration", description: "选择动画题材", value: "", enumOptions: [
                { title: "全部", value: "" }, { title: "科幻", value: "科幻" }, { title: "喜剧", value: "喜剧" }, { title: "校园", value: "校园" }, { title: "战斗", value: "战斗" }, { title: "恋爱", value: "恋爱" }, { title: "奇幻", value: "奇幻" }, { title: "剧情", value: "剧情" }, { title: "日常", value: "日常" }, { title: "机战", value: "机战" }, { title: "运动", value: "运动" }, { title: "悬疑", value: "悬疑" }, { title: "音乐", value: "音乐" }, { title: "治愈", value: "治愈" }, { title: "百合", value: "百合" }, { title: "惊悚", value: "惊悚" }, { title: "后宫", value: "后宫" }, { title: "推理", value: "推理" }, { title: "耽美", value: "耽美" }, { title: "冒险", value: "冒险" }, { title: "萌系", value: "萌系" }, { title: "穿越", value: "穿越" }, { title: "玄幻", value: "玄幻" }, { title: "乙女", value: "乙女" }, { title: "恐怖", value: "恐怖" }, { title: "历史", value: "历史" }, { title: "武侠", value: "武侠" }, { title: "美食", value: "美食" }, { title: "职场", value: "职场" }
            ] },
             { name: "region", title: "🌍 地区", type: "enumeration", description: "选择动画地区", value: "", enumOptions: [
                 { title: "全部", value: "" }, { title: "日本", value: "日本" }, { title: "中国", value: "中国" }, { title: "美国", value: "美国" }, { title: "欧美", value: "欧美" }, { title: "法国", value: "法国" }, { title: "韩国", value: "韩国" }, { title: "英国", value: "英国" }, { title: "俄罗斯", value: "俄罗斯" }, { title: "中国香港", value: "中国香港" }, { title: "苏联", value: "苏联" }, { title: "捷克", value: "捷克" }, { title: "中国台湾", value: "中国台湾" }, { title: "马来西亚", value: "马来西亚" }
             ] },
             { name: "audience", title: "👥 受众", type: "enumeration", description: "选择动画受众", value: "", enumOptions: [
                 { title: "全部", value: "" }, { title: "少女向", value: "少女向" }, { title: "少年向", value: "少年向" }, { title: "青年向", value: "青年向" }, { title: "女性向", value: "女性向" }, { title: "子供向", value: "子供向" }, { title: "BL", value: "BL" }, { title: "GL", value: "GL" }
             ] },
            { name: "year", title: "📅 年份 (可选)", type: "input", description: "输入四位年份, 例如 2024", value: "", placeholders: [{title:"例如：2024", value:"2024"}] },
            { name: "type", title: "🗂️ 分类", type: "enumeration", description: "选择动画分类", value: "all", enumOptions: [
                { title: "全部", value: "all" }, { title: "TV", value: "tv" }, { title: "Web", value: "web" }, { title: "OVA", value: "ova" }, { title: "剧场版", value: "movie" }, { title: "其他", value: "misc" }
            ] },
             { name: "page", title: "📄 页码", type: "page" }
        ]
    },
 {
    title: "📅 Bangumi - 放送日历",
    description: "查看 Bangumi 动画每日/每周放送时间表",
    requiresWebView: false,
    functionName: "loadBangumiCalendarUnified",
    sectionMode: true,
    params: [
        {
            name: "viewType", // 新增参数：视图类型
            title: "视图模式",
            type: "enumeration",
            description: "选择查看今日放送、指定单日放送还是整周概览", // Updated description
            value: "today", // 默认显示今日
            enumOptions: [
                { title: "今日放送", value: "today" }, // Added new option
                { title: "整周视图 (按天分组)", value: "weekly" },
                { title: "指定单日", value: "daily" }
            ]
        },
        {
            name: "weekday", // 原有的星期参数
            title: "🗓️ 选择星期",
            type: "enumeration",
            description: "选择要看的单日放送",
            value: "1", // 默认周一
            enumOptions: [ // 保持原来的选项
                { title: "周一 (Mon)", value: "1" },
                { title: "周二 (Tue)", value: "2" },
                { title: "周三 (Wed)", value: "3" },
                { title: "周四 (Thu)", value: "4" },
                { title: "周五 (Fri)", value: "5" },
                { title: "周六 (Sat)", value: "6" },
                { title: "周日 (Sun)", value: "0" }
            ],
            belongTo: { // 关键：仅当选择 "指定单日" 时显示此参数
                paramName: "viewType",
                value: ["daily"]
            }
        }
    ]
},

    // --- 🧭 探索发现 (Explore & Discover) ---
    {
      title: "👍 TMDB - 热门内容", // Merged movie & tv
      description: "当前流行的电影或剧集 (按TMDB热度排序)", // Updated description
      requiresWebView: false,
      functionName: "tmdbPopular",
      params: [
        { 
          name: "type", 
          title: "🎭 类型", 
          type: "enumeration", 
          enumOptions: [{ title: "电影", value: "movie" }, { title: "剧集", value: "tv" }], 
          value: "movie" 
        },
        {
          name: "watch_region", title: "📍 观看地区", type: "enumeration", description: "选择地区以查找观看平台 (留空则不查询)", value: "",
          enumOptions: [
            { title: "不查询", value: "" }, { title: "中国大陆", value: "CN" }, { title: "中国香港", value: "HK" },
            { title: "中国台湾", value: "TW" }, { title: "美国", value: "US" }, { title: "日本", value: "JP" },
            { title: "韩国", value: "KR" }, { title: "英国", value: "GB" }
          ]
        },
        { name: "language", title: "🌐 语言", type: "constant", value: "zh-CN" }, // Kept language constant for simplicity, user can change globally?
        { name: "page", title: "📄 页码", type: "page" }
      ]
    },
     {
      title: "🧑‍🤝‍🧑 TMDB - 热门人物", // Changed Emoji
      description: "当前热门人物 (演员/导演等)",
      requiresWebView: false,
      functionName: "tmdbPopularPeople",
      params: [
        { name: "language", title: "🌐 语言", type: "constant", value: "zh-CN" },
        { name: "page", title: "📄 页码", type: "page" }
      ]
    },
    {
      title: "🧭 豆瓣 - 电影类型榜单",
      description: "根据分类、地区、类型标签等条件筛选和浏览豆瓣电影",
      requiresWebView: false,
      functionName: "loadDoubanRecommendMovies",
      params: [
        {
          name: "category", title: "🏷️ 分类", type: "enumeration",
          enumOptions: [ { title: "全部", value: "全部" }, { title: "热门电影", value: "热门" }, { title: "最新电影", value: "最新" }, { title: "豆瓣高分", value: "豆瓣高分" }, { title: "冷门佳片", value: "冷门佳片" } ],
          value: "全部"
        },
        {
          name: "type", title: "🌍 地区", type: "enumeration",
          description: "按地区筛选 (主要对 热门/最新/高分/冷门 分类有效)",
          belongTo: { paramName: "category", value: ["热门", "最新", "豆瓣高分", "冷门佳片"] },
          enumOptions: [ { title: "全部", value: "全部" }, { title: "华语", value: "华语" }, { title: "欧美", value: "欧美" }, { title: "韩国", value: "韩国" }, { title: "日本", value: "日本" } ],
          value: "全部"
        },
        {
            name: "tags", title: "🎭 类型标签 (可选)", type: "input",
            description: "输入类型标签(如 喜剧, 爱情...), 仅当分类为'全部'时生效", 
            value: "",
            belongTo: { paramName: "category", value: ["全部"] },
            placeholders: [
                {title: "喜剧", value: "喜剧"}, {title: "科幻", value: "科幻"}, {title: "爱情", value: "爱情"}, 
                {title: "动作", value: "动作"}, {title: "悬疑", value: "悬疑"}, {title: "动画", value: "动画"}, 
                {title: "纪录片", value: "纪录片"}, {title: "惊悚", value: "惊悚"}, {title: "剧情", value: "剧情"}, 
                {title: "家庭", value: "家庭"}, {title: "战争", value: "战争"}, {title: "奇幻", value: "奇幻"}, 
                {title: "历史", value: "历史"}, {title: "恐怖", value: "恐怖"}, {title: "犯罪", value: "犯罪"}, 
                {title: "歌舞", value: "歌舞"}, {title: "传记", value: "传记"}, {title: "冒险", value: "冒险"}, 
                {title: "武侠", value: "武侠"}, {title: "运动", value: "运动"}, {title: "古装", value: "古装"}, 
                {title: "同性", value: "同性"}
            ]
        },
        { name: "start", title: "▶️ 开始条目", type: "count", description:"从第几个条目开始加载" },
        { name: "limit", title: "🔢 每页数量", type: "constant", value: "20" }
      ],
    },
    {
      title: "🧭 豆瓣 - 电视类型榜单",
      description: "根据分类和类型筛选浏览豆瓣推荐的剧集或综艺节目",
      requiresWebView: false,
      functionName: "loadDoubanRecommendShows",
      params: [
         {
          name: "category", title: "🏷️ 分类", type: "enumeration",
          enumOptions: [ { title: "全部", value: "all" }, { title: "热门剧集", value: "tv" }, { title: "热门综艺", value: "show" } ],
          value: "all"
        },
        {
          name: "type", title: "🎭 类型 (剧集)", type: "enumeration",
          description: "按类型筛选 (主要对 热门剧集 分类有效)",
          belongTo: { paramName: "category", value: ["tv"] },
          enumOptions: [ { title: "综合", value: "tv" }, { title: "国产剧", value: "tv_domestic" }, { title: "欧美剧", value: "tv_american" }, { title: "日剧", value: "tv_japanese" }, { title: "韩剧", value: "tv_korean" }, { title: "动画", value: "tv_animation" }, { title: "纪录片", value: "tv_documentary" } ],
          value: "tv"
        },
        {
          name: "type", title: "🎭 类型 (综艺)", type: "enumeration",
          description: "按类型筛选 (主要对 热门综艺 分类有效)",
          belongTo: { paramName: "category", value: ["show"] },
          enumOptions: [ { title: "综合", value: "show" }, { title: "国内", value: "show_domestic" }, { title: "国外", value: "show_foreign" } ],
          value: "show"
        },
        { name: "start", title: "▶️ 开始条目", type: "count", description:"从第几个条目开始加载" },
        { name: "limit", title: "🔢 每页数量", type: "constant", value: "20" }
      ],
    },
    {
      title: "🤵 演员/导演搜索", // Moved
      description: "查找演员/导演及其代表作 (TMDB)",
      requiresWebView: false,
      functionName: "findPersonAndCredits",
      params: [
        { name: "name", title: "👤 名称", type: "input", description: "输入演员或导演的名字 (中文/英文)", value: "", placeholders:[{title:"例如：克里斯托弗·诺兰", value:"克里斯托弗·诺兰"}, {title:"基努·里维斯", value:"基努·里维斯"}] },
        { name: "language", title: "🌐 语言", type: "language", value: "zh-CN" }
      ]
    },
    {
      title: "⏳ TMDB 即将上映", // Moved
      description: "查看 TMDB 即将上映的电影 (可筛选)", // Updated description
      requiresWebView: false,
      functionName: "tmdbUpcomingMovies",
      params: [
        { name: "language", title: "🌐 语言", type: "language", value: "zh-CN" },
        { 
            name: "primary_release_date.gte", 
            title: "🗓️ 起始日期 (含)", 
            type: "input", 
            description: "最早的上映日期 (格式 YYYY-MM-DD)，默认为今天", 
            value: "" // Default value will be set dynamically in the function
        },
        { 
            name: "primary_release_date.lte", 
            title: "🗓️ 结束日期 (含)", 
            type: "input", 
            description: "最晚的上映日期 (格式 YYYY-MM-DD, 可选)", 
            value: ""
        },
        {
            name: "with_release_type",
            title: "🎬 发行渠道",
            type: "enumeration",
            description: "选择电影的发行渠道 (可选)",
            value: "2|3", // Default to Theatrical
            enumOptions: [
                { title: "影院上映 (优先)", value: "2|3" }, // Premiere | Theatrical
                { title: "全部渠道", value: "" },
                { title: "数字发行", value: "4" },
                { title: "实体发行", value: "5" },
                { title: "电视播出", value: "6" }
            ]
        },
        {
            name: "with_genres", 
            title: "🏷️ 类型 (可选)", 
            type: "enumeration", 
            description: "选择一个电影类型", 
            value: "", 
            enumOptions: [ // Copied from getRandomPick
                { title: "任意", value: "" }, { title: "动作", value: "28" }, { title: "冒险", value: "12" }, { title: "动画", value: "16" },
                { title: "喜剧", value: "35" }, { title: "犯罪", value: "80" }, { title: "纪录", value: "99" }, { title: "剧情", value: "18" },
                { title: "家庭", value: "10751" }, { title: "奇幻", value: "14" }, { title: "历史", value: "36" }, { title: "恐怖", value: "27" },
                { title: "音乐", value: "10402" }, { title: "悬疑", value: "9648" }, { title: "爱情", value: "10749" }, { title: "科幻", value: "878" },
                { title: "惊悚", value: "53" }, { title: "战争", value: "10752" }, { title: "西部", value: "37" },
                { title: "电视电影", value: "10770" } // Added TV Movie genre often missed
            ]
        },
        {
            name: "vote_average.gte", 
            title: "⭐ 最低评分 (可选)", 
            type: "input", 
            description: "输入 TMDB 最低评分 (0-10, 如 7)", 
            value: ""
        },
        {
            name: "vote_count.gte", 
            title: "🗳️ 最少评价数 (可选)", 
            type: "input", 
            description: "输入最少评价人数 (如 100)", 
            value: ""
        },
        {
            name: "with_keywords", 
            title: "🔑 关键词 (可选)", 
            type: "input", 
            description: "输入关键词筛选 (如 'superhero', API 支持有限)", 
            value: ""
        },
        { name: "page", title: "📄 页码", type: "page" }
      ]
    },
    {
      title: "🎲 今日看点啥", // Moved
      description: "根据条件随机推荐一部影视作品 (TMDB)",
      requiresWebView: false,
      functionName: "getRandomPick",
      params: [
        { name: "type", title: "🎭 类型", type: "enumeration", enumOptions: [{ title: "电影", value: "movie" }, { title: "剧集", value: "tv" }], value: "movie" },
        { name: "language", title: "🌐 语言", type: "language", value: "zh-CN" }
      ]
    },

    // --- 🔧 实用工具 (Utilities) ---

  ], // End of modules array
  search: {
    title: "🔍 全局聚合搜索",
    description: "在 TMDB, Bangumi, 豆瓣 中搜索电影、剧集或动画",
    requiresWebView: false,
    functionName: "aggregatedSearch",
    params: [
      { name: "query", title: "🔍 搜索关键词", type: "input", description: "输入电影、剧集或动画名称", value: "", placeholders:[{title:"例如：沙丘", value:"沙丘"}, {title:"间谍过家家", value:"间谍过家家"}] },
      { name: "platform", title: "📡 搜索平台", type: "enumeration", description: "选择要搜索的平台", value: "all", enumOptions: [ { title: "全部", value: "all" }, { title: "TMDB", value: "tmdb" }, { title: "Bangumi", value: "bangumi" }, { title: "豆瓣", value: "douban" } ] }
    ]
  }
};

// --- Helper Functions ---
// Helper to safely extract rating and add to description or as separate field
function formatItemDescription(item) {
    let description = item.description || '';
    if (item.rating) {
        // Ensure rating is included, either in desc or as a field
        if (!description.toLowerCase().includes('rating') && !description.toLowerCase().includes('评分')) {
             description = `评分: ${item.rating} | ${description}`;
        }
    }
     if (item.releaseDate) {
        const year = item.releaseDate.substring(0, 4);
         if (!description.toLowerCase().includes('year') && !description.toLowerCase().includes('年份') && !description.includes(year)) {
             description = `年份: ${year} | ${description}`;
         }
     }
    return description.trim().replace(/^\|\s*/, '').replace(/\s*\|$/, ''); // Clean up leading/trailing separators
}


// --- Douban Functions ---
// 【已更新】主入口函数，根据 URL 类型分发任务 (增加 dispatch 处理)
async function loadDoubanCardItems(params = {}) {
    try {
      console.log("开始解析豆瓣片单/豆列...");
      console.log("参数:", params);
      const url = params.url;
      if (!url || typeof url !== 'string' || url.trim() === '') {
          return [{ id: `info-empty-url-${Date.now()}`, type: "info", title: "请输入网址", description: "请在上方输入框粘贴豆瓣榜单或豆列的网址。" }];
      }
  
      const trimmedUrl = url.trim();
  
      // 1. 优先处理 doulist (网页解析, www.douban.com)
      if (trimmedUrl.includes("www.douban.com/doulist/")) {
        console.log("检测到豆列 URL (doulist)");
        return loadDoubanDefaultList(params);
      }
      // 2. 处理 subject_collection (移动版 API, m.douban.com)
      // 注意: 确保 URL 是 m.douban.com 的格式或者能从中提取 ID
      else if (trimmedUrl.includes("m.douban.com/subject_collection/")) {
        console.log("检测到移动版 subject_collection URL");
        return loadDoubanSubjectCollection(params); // 直接调用，因为它处理 m.douban.com/rexxar/api
      }
      // 3. 【新增】处理 doubanapp/dispatch 格式
      else if (trimmedUrl.includes("/doubanapp/dispatch") && trimmedUrl.includes("uri=")) {
        console.log("检测到 doubanapp/dispatch URL");
        const uriMatch = trimmedUrl.match(/uri=([^&]+)/); // 提取 uri 参数值
        if (uriMatch && uriMatch[1]) {
          let decodedUri = "";
          try {
              // 对提取到的 uri 值进行解码
              decodedUri = decodeURIComponent(uriMatch[1]);
              console.log("提取并解码的 URI:", decodedUri);
          } catch (e) {
              console.error("解码 URI 参数失败:", e);
              return [{ id: `info-dispatch-decode-${Date.now()}`, type: "info", title: "解码失败", description: "无法解码 dispatch URL 中的 URI 参数，请检查网址是否完整或损坏。" }];
          }
  
          // 判断解码后的 uri 类型并构造有效 URL
          let effectiveUrl = decodedUri;
          // 如果是 subject_collection，构造成 m.douban.com 的 API 调用基础 URL
          if (effectiveUrl.startsWith('/subject_collection/')) {
               // 注意：我们需要的是API调用基础，而不是网页地址，所以 loadDoubanSubjectCollection 会处理
              effectiveUrl = `https://m.douban.com${effectiveUrl}`; // 构造一个可供 loadDoubanSubjectCollection 识别的 URL
              console.log("Dispatch URI 包含 subject_collection, 构建的有效 URL:", effectiveUrl);
              // 创建临时参数，替换 url
              const tempParams = { ...params, url: effectiveUrl };
              // 调用 subject_collection 的处理函数
              return loadDoubanSubjectCollection(tempParams);
          }
          // 如果是 doulist，构造成 www.douban.com 的网页地址
          else if (effectiveUrl.startsWith('/doulist/')) {
              effectiveUrl = `https://www.douban.com${effectiveUrl}`;
              console.log("Dispatch URI 包含 doulist, 构建的有效 URL:", effectiveUrl);
               // 创建临时参数，替换 url
              const tempParams = { ...params, url: effectiveUrl };
               // 调用 doulist 的处理函数
              return loadDoubanDefaultList(tempParams);
          }
          // 如果是其他无法处理的 uri 类型
          else {
             console.error("Dispatch URI 参数未包含可识别的路径:", decodedUri);
             return [{ id: `info-dispatch-unsupported-${Date.now()}`, type: "info", title: "无法识别的链接", description: "dispatch URL 中的链接类型无法识别或暂不支持 (例如，它可能指向一个讨论或其他页面)。" }];
          }
        } else {
          // 如果 dispatch URL 中没有找到 uri 参数
          console.error("无法从 dispatch URL 中提取 URI 参数:", trimmedUrl);
          return [{ id: `info-dispatch-nourl-${Date.now()}`, type: "info", title: "无法提取链接", description: "无法从 dispatch URL 中提取有效的目标网址。" }];
        }
      }
      // 4. 处理 www.douban.com 的 subject_collection (不常见，但尝试兼容)
      // 通常应使用 m.douban.com 的 API，但如果用户粘贴了这个，尝试转换
      else if (trimmedUrl.includes("www.douban.com/subject_collection/")) {
         console.log("检测到桌面版 subject_collection URL，尝试转换为移动版处理");
         const mobileUrl = trimmedUrl.replace("www.douban.com", "m.douban.com");
         const tempParams = { ...params, url: mobileUrl };
         return loadDoubanSubjectCollection(tempParams);
      }
      // 5. 处理单个条目链接 (提供提示)
      else if (trimmedUrl.match(/movie\.douban\.com\/subject\/\d+\/?$/) || trimmedUrl.match(/m\.douban\.com\/(movie|tv)\/subject\/\d+\/?$/)) {
          console.log("检测到单个电影/剧集页面 URL");
          return [{ id: `info-single-subject-${Date.now()}`, type: "info", title: "单个条目", description: "这是一个指向单个电影/剧集的链接，而非榜单或豆列。请粘贴榜单或豆列的网址。" }];
      }
      // 6. 处理奥斯卡桌面版链接 (提供提示)
      else if (trimmedUrl.match(/movie\.douban\.com\/awards\/Oscar\/(\d+)/)) {
          const oscarSession = trimmedUrl.match(/movie\.douban\.com\/awards\/Oscar\/(\d+)/)[1];
          console.log(`检测到奥斯卡桌面网址 (第 ${oscarSession} 届)`);
          let suggestionUrl = "";
          if (params.placeholders) {
             const oscarPlaceholder = params.placeholders.find(p => p.title.includes(`奥斯卡(${1928 + parseInt(oscarSession)})`) || p.title.includes(`奥斯卡(${oscarSession}届)`));
             if (oscarPlaceholder) suggestionUrl = oscarPlaceholder.value;
          }
          let description = `检测到奥斯卡桌面网址。请尝试使用豆瓣官方提供的移动版“合集”或“豆列”网址。`;
          if (suggestionUrl) description += `\n例如: ${suggestionUrl}`;
          return [{ id: `info-oscar-desktop-${Date.now()}`, type: "info", title: "提示：奥斯卡桌面网址", description: description }];
      }
      // 7. 无法识别的格式 (最终 fallback)
      else {
          console.error("无法识别的豆瓣 URL 格式:", trimmedUrl);
          // 返回错误信息，而不是抛出异常，让 Promise resolve
          return [{ id: `error-unsupported-format-${Date.now()}`, type: "error", title: "不支持的豆瓣 URL 格式", description: "请检查输入的网址是否为有效的豆瓣官方榜单、用户豆列或分享链接。" }];
      }
    } catch (error) {
      // 捕获在调用 loadDoubanDefaultList 或 loadDoubanSubjectCollection 时可能发生的内部错误
      console.error("解析豆瓣片单/豆列时发生内部错误:", error);
      // 返回错误信息
      return [{ id: `error-douban-card-internal-${Date.now()}`, type: "error", title: "解析失败", description: `处理过程中发生错误: ${error.message || error}` }];
    }
  }

async function loadDoubanDefaultList(params = {}) { // Specific helper
  const url = params.url;
  const listId = url.match(/doulist\/(\d+)/)?.[1];
  console.debug("豆瓣豆列 ID:", listId);
  if (!listId) throw new Error("无法从 URL 获取豆瓣豆列 ID");

  const start = params.start || 0;
  const limit = params.limit || 25; // Doulist web page shows 25
  const pageUrl = `https://www.douban.com/doulist/${listId}/?start=${start}&sort=&playable=&sub_type=`;

  console.log("请求豆瓣豆列页面:", pageUrl);
  const response = await Widget.http.get(pageUrl, {
    headers: {
      Referer: `https://www.douban.com/`,
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
      // Might need Accept-Language if Douban structure differs by lang
      // "Accept-Language": "zh-CN,zh;q=0.9"
    },
  });

  if (!response || !response.data) throw new Error("获取豆瓣豆列数据失败");
  console.log("豆瓣豆列页面数据长度:", response.data.length);

  const docId = Widget.dom.parse(response.data);
  if (docId < 0) throw new Error("解析豆瓣豆列 HTML 失败");

  // --- NEW SELECTORS based on recent Douban Doulist structure ---
  // Items are now often within <div class="doulist-item" data-entity-id="..."> inside <div class="article">...</div>
  // Or sometimes directly <div class="doulist-subject"> inside <div class="doulist-item">
  // Let's try a more general approach targeting items with a subject link inside
  const itemElements = Widget.dom.select(docId, "div.doulist-item"); // Stick with .doulist-item for now, maybe it works sometimes?
  console.log("找到项目元素数量 (.doulist-item):", itemElements.length);

  let fallbackItemElements = [];
  if (!itemElements || itemElements.length === 0) {
       // Fallback selector: Look for items inside the main article section
       const articleElement = Widget.dom.selectFirst(docId, ".article");
       if (articleElement >= 0) {
           // Try finding direct subject divs or items inside the article
            fallbackItemElements = Widget.dom.select(articleElement, ".doulist-subject"); // Try this common pattern
            console.log("未找到 .doulist-item, 尝试查找 .doulist-subject: ", fallbackItemElements.length);
             if (!fallbackItemElements || fallbackItemElements.length === 0) {
                 fallbackItemElements = Widget.dom.select(articleElement, "li.subject-item"); // Another possible structure
                 console.log("未找到 .doulist-subject, 尝试查找 li.subject-item: ", fallbackItemElements.length);
             }
       }
  }

  const finalItemElements = (itemElements && itemElements.length > 0) ? itemElements : fallbackItemElements;

  if (!finalItemElements || finalItemElements.length === 0) {
      // Check if it's the end or page is empty using pagination
      const paging = Widget.dom.selectFirst(docId, ".paginator .next a");
      if (paging < 0) {
          console.log("已到达豆列末尾或豆列为空 (使用主要和备用选择器均未找到项目)");
          return [];
      } else {
           console.warn("页面结构可能已更改，使用主要和备用选择器均未找到项目，但存在分页");
           return [];
      }
  }
  console.log(`最终使用 ${finalItemElements.length} 个元素进行处理`);

  let doubanIds = [];
  for (const itemId of finalItemElements) {
       // Selector for link/title might be inside .title or .subject-title
       let titleElementId = Widget.dom.selectFirst(itemId, ".title a");
       if (titleElementId < 0) {
           titleElementId = Widget.dom.selectFirst(itemId, ".item-title a"); // Fallback
       }
       if (titleElementId < 0) {
           titleElementId = Widget.dom.selectFirst(itemId, "a[onclick*='subject']"); // Another common pattern
       }

      if (titleElementId >= 0) {
          const link = await Widget.dom.attr(titleElementId, "href");
          const idMatch = link ? link.match(/subject\/(\d+)/) : null;
          const title = await Widget.dom.text(titleElementId);

          if (idMatch && idMatch[1]) {
              // Cover selector: .post img OR .item-poster img
              let coverUrl = "";
              let imgElementId = Widget.dom.selectFirst(itemId, ".post img");
              if (imgElementId < 0) {
                 imgElementId = Widget.dom.selectFirst(itemId, ".item-poster img");
              }
              if (imgElementId >= 0) {
                  coverUrl = await Widget.dom.attr(imgElementId, "src");
                  // Clean up low-res douban images
                   if (coverUrl) {
                       coverUrl = coverUrl.replace(/\/(s|m|sq)\//, '/l/');
                   }
              }

              // Description selector: .abstract OR .card-abstract
              let description = "";
              let abstractElementId = Widget.dom.selectFirst(itemId, ".abstract");
              if (abstractElementId < 0) {
                  abstractElementId = Widget.dom.selectFirst(itemId, ".card-abstract");
              }
               if (abstractElementId >= 0) {
                   description = await Widget.dom.text(abstractElementId);
                   description = description.trim().replace(/\n\s*/g, ' ');
               }

              // Rating selector: .rating .rating_nums OR .item-rating .rating_nums
              let rating = undefined;
              let ratingElementId = Widget.dom.selectFirst(itemId, ".rating .rating_nums");
              if (ratingElementId < 0) {
                  ratingElementId = Widget.dom.selectFirst(itemId, ".item-rating .rating_nums");
              }
              if (ratingElementId >= 0) {
                  rating = await Widget.dom.text(ratingElementId);
                  rating = rating.trim();
              }

              doubanIds.push({
                  id: idMatch[1],
                  type: "douban",
                  title: title ? title.trim() : "未知标题",
                  coverUrl: coverUrl || undefined,
                  description: formatItemDescription({ description: description || undefined, rating: rating }),
                  rating: rating ? parseFloat(rating) : undefined
                });
          } else {
             console.warn("解析豆列项时未找到 subject ID, Title:", title, "Link:", link);
          }
      } else {
         console.warn("在豆列项中未找到标题链接元素, Item ID:", itemId);
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
      description: formatItemDescription({
          description: item.card_subtitle || item.description,
          rating: item.rating?.value,
          releaseDate: item.year // Assuming API provides year
      }),
      rating: item.rating?.value,
      releaseDate: item.year
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
  const funcName = "loadDoubanRecommendItems";
  const start = params.start || 0;
  const limit = params.limit || 20;
  const category = params.category || "";
  const subType = params.type || "";
  // Read new parameters for tags and year range
  const tags = params.tags || "";
  const minYear = params.min_year || "";
  const maxYear = params.max_year || "";

  let url;
  const encodedTags = encodeURIComponent(tags);
  const encodedSelectedCategories = encodeURIComponent(JSON.stringify(params.selected_categories || {}));

  if (category === "全部" || category === "all") {
      // Construct base URL for recommend API
      let recommendUrl = `https://m.douban.com/rexxar/api/v2/${mediaType}/recommend?refresh=0&start=${start}&count=${limit}&selected_categories=${encodedSelectedCategories}&uncollect=false&score_range=0,10`;
      // Append tags if provided
      if (encodedTags) {
          recommendUrl += `&tags=${encodedTags}`;
      }
      // Append year_range if minYear or maxYear is provided
      let yearRange = "";
      if (minYear && /\d{4}/.test(minYear)) {
          yearRange += minYear;
      }
      yearRange += ","; // Separator
      if (maxYear && /\d{4}/.test(maxYear)) {
          yearRange += maxYear;
      }
      // Add year_range param only if it contains at least one year
      if (yearRange !== ",") { // Check if it's not just the separator
         // Ensure format is correct (e.g., "1990," or ",2020" or "1990,2020")
         if (yearRange.startsWith(",") && yearRange.length > 1) yearRange = yearRange.substring(1); // Remove leading comma if only maxYear exists
         if (yearRange.endsWith(",") && yearRange.length > 1) yearRange = yearRange.substring(0, yearRange.length - 1); // Remove trailing comma if only minYear exists

         // Only add the parameter if we have a valid year or range
         if(yearRange && yearRange !== ",") {
            recommendUrl += `&year_range=${yearRange}`;
         }
      }

      url = recommendUrl;
  } else {
      // Keep the existing URL structure for other categories (hot/new etc.)
      url = `https://m.douban.com/rexxar/api/v2/subject/recent_hot/${mediaType}?start=${start}&count=${limit}&category=${encodeURIComponent(category)}&type=${encodeURIComponent(subType)}`;
  }

  console.log(`[Douban Recommend] 请求豆瓣推荐 API (${mediaType}): ${url}`);

  try {
      const response = await Widget.http.get(url, {
        headers: {
          Referer: `https://movie.douban.com/explore`,
          "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1",
        },
      });

      console.log("[Douban Recommend] API 结果 (部分):", JSON.stringify(response.data)?.substring(0,200));

      // Robust check for items list location
      const items = response.data?.subjects
                 || response.data?.items
                 || response.data?.modules?.[0]?.data?.subject_collection_items
                 || [];

      if (items && items.length > 0) {
          if (!Array.isArray(items)) throw new Error("推荐 API 返回的项目不是数组");

          const results = items.map((item) => {
            if (!item || !item.id || !item.title) {
                console.warn("[Douban Recommend] 跳过无效项目 (缺少 id 或 title):", item);
                return null; // Mark invalid items as null
            }
            const rating = item.rating?.value || (item.rate ? parseFloat(item.rate) : undefined);
            const releaseYear = item.year || item.release_date?.substring(0, 4);
            const cover = item.cover?.url || item.pic?.normal;

            return {
                // Ensure ID is a string, handle potential null/undefined
                id: String(item.id),
                type: "douban",
                title: item.title,
                coverUrl: cover,
                description: formatItemDescription({
                    description: item.card_subtitle || item.description || item.intro,
                    rating: rating,
                    releaseDate: releaseYear ? `${releaseYear}-01-01` : undefined
                }),
                rating: rating,
                releaseDate: releaseYear ? `${releaseYear}-01-01` : undefined
            };
        }).filter(item => item !== null); // Filter out items marked as null (invalid)

         console.log(`[Douban Recommend] 成功解析并过滤得到 ${results.length} 个有效条目`);
         if (results.length === 0 && items.length > 0) {
             console.warn("[Douban Recommend] API 返回了项目但未能成功映射或过滤任何有效条目，检查 API 结构或映射逻辑。")
         }
         // If API returns empty array or all items were invalid
         if (results.length === 0) {
             return [];
         }
        return results;
      } else {
          console.warn("[Douban Recommend] API响应中未找到有效项目列表", response.data);
          if (items.length === 0 && (response.data?.total === 0 || response.data?.count === 0 || start > (response.data?.total || 0))) {
              return [];
          }
          return [{id:`${funcName}-no-items-${mediaType}`, type:"info", title:"提示", description:"未能从推荐API响应中找到项目列表。"}];
      }
  } catch (error) {
      return [createErrorItem(`${funcName}-fail-${mediaType}-${category}`, `加载豆瓣 ${mediaType} 推荐失败`, error)];
  }
}


// --- TMDB Functions ---

// Helper function for TMDB API calls - Modified to fetch watch providers
async function fetchTmdbData(api, params, watch_region = null) { // Added watch_region parameter
  try {
    const tmdbParams = { ...params };
    // Clean up params not directly needed by the main TMDB list API
    delete tmdbParams.type; // Often used for module logic, not API endpoint itself
    delete tmdbParams.time_window; // Used for trending endpoint path
    delete tmdbParams.watch_region; // Used for provider fetching logic

    console.log(`调用 TMDB API: ${api} with params:`, tmdbParams);
    const response = await Widget.tmdb.get(api, { params: tmdbParams });

    if (!response || !response.results) {
      console.error("获取 TMDB 数据失败或格式错误", response);
      throw new Error("获取 TMDB 数据失败");
    }

    console.log(`TMDB 响应 (部分): ${response.results.length} items`, response.results.slice(0, 1));
    const data = response.results;

    // Map results and potentially fetch watch providers
    const resultPromises = data.map(async (item) => {
        // Handle different types: movie, tv, person
        let title, releaseDate, description, coverUrl, mediaType, rating, itemId;

        itemId = item.id;
        rating = item.vote_average ? (item.vote_average / 2).toFixed(1) : undefined; // Calculate rating

        if (item.media_type === 'movie' || api.startsWith('movie/') || (params.type === 'movie' && !item.media_type)) { // Add check for params.type if media_type is missing
            mediaType = 'movie';
            title = item.title;
            releaseDate = item.release_date;
            description = item.overview;
            coverUrl = item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : undefined;
        } else if (item.media_type === 'tv' || api.startsWith('tv/') || (params.type === 'tv' && !item.media_type)) { // Add check for params.type
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
            rating = undefined; // Rating not applicable to person
        } else {
            // Fallback for items without clear type (e.g., from /search/multi)
            mediaType = item.media_type || 'unknown';
            title = item.title || item.name;
            releaseDate = item.release_date || item.first_air_date;
            description = item.overview || '';
            coverUrl = item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : (item.profile_path ? `https://image.tmdb.org/t/p/w500${item.profile_path}` : undefined);
        }

        // --- Fetch Watch Providers if applicable --- START ---
        let providersString = "";
        if (watch_region && itemId && (mediaType === 'movie' || mediaType === 'tv')) {
            try {
                console.log(`Fetching watch providers for ${mediaType} ${itemId} in region ${watch_region}`);
                const providerResponse = await Widget.tmdb.get(`/${mediaType}/${itemId}/watch/providers`);
                const regionProviders = providerResponse?.results?.[watch_region];

                if (regionProviders) {
                    const stream = regionProviders.flatrate?.map(p => p.provider_name).join(', ') || null;
                    const rent = regionProviders.rent?.map(p => p.provider_name).join(', ') || null;
                    const buy = regionProviders.buy?.map(p => p.provider_name).join(', ') || null;

                    const parts = [];
                    if (stream) parts.push(`▶️ 流媒体: ${stream}`);
                    if (rent) parts.push(` R 租借: ${rent}`);
                    if (buy) parts.push(` 🛒 购买: ${buy}`);

                    if (parts.length > 0) {
                        providersString = ` | ${parts.join(' | ')}`;
                        console.log(`Providers found for ${itemId}: ${providersString}`);
                    } else {
                         console.log(`No providers found for ${itemId} in region ${watch_region}`);
                    }
                } else {
                     console.log(`No provider data available for ${itemId} in region ${watch_region}`);
                }
            } catch (providerError) {
                console.error(`获取 ${itemId} 的观看平台信息失败 (${watch_region}):`, providerError);
                // Do not add provider string if error occurred
            }
        }
        // --- Fetch Watch Providers if applicable --- END ---

        // Format description to include rating, year, and providers
        let baseDescription = formatItemDescription({
            description: description,
            rating: rating,
            releaseDate: releaseDate
        });

        // Append provider string to the description
        const finalDescription = (baseDescription + providersString).trim();

        return {
            id: itemId,
            type: "tmdb", // Main type
            media_type: mediaType, // Specific media type
            title: title,
            description: finalDescription, // Use final description with providers
            releaseDate: releaseDate, // Keep release date field
            backdropPath: item.backdrop_path, // Keep backdrop if needed
            posterPath: item.poster_path || item.profile_path, // Keep path
            coverUrl: coverUrl,
            rating: rating, // Keep rating field explicit
            popularity: item.popularity // Keep popularity if needed
        };
    });

    // Wait for all mapping and provider fetching to complete
    const finalResults = await Promise.all(resultPromises);

    return finalResults.filter(item => item && item.title); // Filter items without a title or potential errors

  } catch (error) {
    console.error(`调用 TMDB API ${api} 失败:`, error);
    return []; // Return empty, allowing other parts to potentially continue
  }
}

// --- Update TMDB Module Functions to pass watch_region --- 

async function tmdbNowPlaying(params) { // Prefixed
  const type = params.type || 'movie'; // Default to movie if not specified
  let api = type === 'movie' ? "movie/now_playing" : "tv/on_the_air";
  return await fetchTmdbData(api, params, params.watch_region); // Pass watch_region
}

async function tmdbTrending(params) { // Prefixed
  const timeWindow = params.time_window || 'day';
  const api = `trending/all/${timeWindow}`; // Fetch all types (movie, tv, person)
  // Watch region is NOT passed here as the results include 'person'
  return await fetchTmdbData(api, params);
}

async function tmdbPopular(params) { // Prefixed
  const type = params.type || 'movie';
  let api = type === 'movie' ? `movie/popular` : `tv/popular`;
  return await fetchTmdbData(api, params, params.watch_region); // Pass watch_region
}

// Upcoming movies don't need watch providers
async function tmdbUpcomingMovies(params) {
    console.log("Fetching upcoming movies from TMDB using /discover/movie");
    const api = "/discover/movie";

    // Helper to get today's date in YYYY-MM-DD
    const getTodayDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    // Prepare parameters for the discover API
    const discoverParams = {
        language: params.language || 'zh-CN',
        page: params.page || 1,
        sort_by: 'primary_release_date.asc', // Default sort: oldest upcoming first
        'primary_release_date.gte': params['primary_release_date.gte'] || getTodayDate(), // Use provided or default to today
        'with_release_type': params['with_release_type'] !== undefined ? params['with_release_type'] : '2|3' // Default to theatrical if not specified
    };

    // Add optional filters if provided by user
    if (params['primary_release_date.lte']) {
        discoverParams['primary_release_date.lte'] = params['primary_release_date.lte'];
    }
    if (params['with_genres']) {
        discoverParams['with_genres'] = params['with_genres'];
    }
    if (params['vote_average.gte']) {
        discoverParams['vote_average.gte'] = params['vote_average.gte'];
    }
    if (params['vote_count.gte']) {
        discoverParams['vote_count.gte'] = params['vote_count.gte'];
    }
     if (params['with_keywords']) {
         // Note: with_keywords API might expect IDs. Passing text might work partially or not at all.
         // Encoding might be needed depending on API behavior. Let's pass raw for now.
         discoverParams['with_keywords'] = params['with_keywords'];
     }

    // Use fetchTmdbData helper, passing the discover endpoint and constructed params
    // No watch region needed here as it's about future releases
    console.log("Constructed Discover Params:", discoverParams);
    return await fetchTmdbData(api, discoverParams);
}

// Popular people don't need watch providers
async function tmdbPopularPeople(params) {
  console.log("Fetching popular people from TMDB");
  const api = "person/popular";
  return await fetchTmdbData(api, params);
}

// New Function for TMDB Trailers (with fix for category logic)
async function tmdbLoadTrailers(params = {}) {
    const category = params.category || 'popular';
    const limit = parseInt(params.limit || '10', 10);
    const language = params.language || 'zh-CN';
    const movieLang = language.split('-')[0]; // Use base language for videos 'language' param

    console.log(`Fetching trailers for ${category} movies (limit ${limit})`);

    let movieApi = 'movie/popular'; // Default to popular
    if (category === 'now_playing') {
        movieApi = 'movie/now_playing'; // Explicitly set for now_playing
        console.log("Using TMDB API endpoint: movie/now_playing");
    } else {
        console.log("Using TMDB API endpoint: movie/popular");
    }

    try {
        // 1. Fetch list of movies based on the CORRECT movieApi
        const movieResponse = await Widget.tmdb.get(movieApi, { params: { language: language, page: 1 } });
        if (!movieResponse || !movieResponse.results) {
            throw new Error(`Failed to fetch ${category} movies from ${movieApi}`);
        }

        const movies = movieResponse.results.slice(0, limit); // Get top 'limit' movies
        console.log(`Found ${movies.length} movies from ${movieApi} to check for trailers.`);
        // Optional: Log movie titles to see the difference
        // console.log(`Movies fetched (${category}):`, movies.map(m => m.title).join(', '));

        // 2. Fetch videos for each movie concurrently
        const videoPromises = movies.map(async (movie) => {
            try {
                const videoResponse = await Widget.tmdb.get(`movie/${movie.id}/videos`, { params: { language: movieLang } }); // Use base lang for videos
                if (videoResponse && videoResponse.results) {
                    // Filter for official YouTube trailers
                    const trailers = videoResponse.results.filter(v =>
                        v.site === 'YouTube' &&
                        v.type === 'Trailer' &&
                        v.official === true
                    );
                    // Prefer trailers matching the full requested language if available
                    const langTrailers = trailers.filter(t => t.iso_639_1 === movieLang);
                    const bestTrailer = langTrailers.length > 0 ? langTrailers[0] : trailers[0]; // Take first official one if no lang match

                    if (bestTrailer) {
                        console.log(`Found trailer for movie ${movie.id} (${movie.title}): ${bestTrailer.key}`);
                        return { movieInfo: movie, trailerInfo: bestTrailer };
                    }
                }
                 console.log(`No suitable trailer found for movie ${movie.id} (${movie.title})`);
                return null; // No trailer found
            } catch (videoError) {
                console.error(`Failed to fetch videos for movie ${movie.id}:`, videoError);
                return null; // Error fetching videos for this movie
            }
        });

        const videoResults = await Promise.all(videoPromises);

        // 3. Format results (remains the same)
        const trailerItems = videoResults
            .filter(result => result !== null) // Filter out movies with no trailer or errors
            .map(result => {
                const movie = result.movieInfo;
                const trailer = result.trailerInfo;
                const youtubeUrl = `https://www.youtube.com/watch?v=${trailer.key}`;

                // Use movie details for the main item
                const rating = movie.vote_average ? (movie.vote_average / 2).toFixed(1) : undefined;
                const formattedDescription = formatItemDescription({
                    description: `预告片: ${trailer.name || '官方预告片'} | ${movie.overview || ''}`,
                    rating: rating,
                    releaseDate: movie.release_date
                });

                return {
                    id: `${movie.id}-${trailer.key}`, // Combine movie id and trailer key for uniqueness
                    type: "tmdb",
                    media_type: 'movie', // It's a movie trailer
                    title: `${movie.title}`, // Keep movie title
                    description: formattedDescription,
                    releaseDate: movie.release_date,
                    coverUrl: movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : undefined,
                    previewUrl: youtubeUrl, // Set the YouTube link here
                    rating: rating,
                    backdropPath: movie.backdrop_path,
                    posterPath: movie.poster_path
                };
            });

        console.log(`Formatted ${trailerItems.length} trailer items.`);
        return trailerItems;

    } catch (error) {
        console.error("Failed to load TMDB trailers:", error);
        // Add API endpoint to error message for better debugging
        return [{ id: "error-tmdb-trailers", type: "error", title: `加载 TMDB ${category} 预告片失败`, description: error.message }];
    }
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
                      description: formatItemDescription({ description: description.trim() || undefined })
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
            description: formatItemDescription({
                description: '', // API might not have good description here
                rating: rating,
                releaseDate: yearRange ? `${yearRange}-01-01` : undefined
            }),
            rating: rating ? parseFloat(rating) : undefined,
            releaseDate: yearRange ? `${yearRange}-01-01` : undefined
        });
    }
  });
  console.log(`通过 API 解析到 ${videos.length} 个条目`);
  return videos;
}


// --- Bangumi Functions ---

// 内部辅助函数：获取并处理原始日历数据
async function _fetchAndProcessBangumiCalendar() {
    const url = "https://api.bgm.tv/calendar";
    console.log("内部请求 Bangumi 放送日历 API:", url);
    try {
        const response = await Widget.http.get(url, {
            headers: {
                // !!重要: 请替换为你的应用标识和联系方式, 否则可能被 BGM 限制!!
                "User-Agent": "ForwardWidget/1.0 (YourAppName/1.0; YourContactEmailOrURL)",
                "Accept": "application/json"
            }
        });

        if (!response || !response.data || !Array.isArray(response.data)) {
            console.error("Bangumi 日历 API 响应无效:", response.data);
            throw new Error("获取 Bangumi 放送日历数据失败或格式错误");
        }

        const processedItems = [];
        for (const dayData of response.data) {
             const apiWeekdayId = dayData.weekday?.id; // API 返回 1-7 (周一到周日)
             // Bangumi API返回的数据结构可能有两种情况：
             // 1. dayData中包含items数组
             // 2. dayData本身就是一个项目数组
             // 这里我们检查两种情况并适当处理
             if (dayData.items && Array.isArray(dayData.items)) {
                // 情况1: 标准结构，dayData包含items数组
                for (const item of dayData.items) {
                    // 安全地提取数据
                     const images = item.images || {};
                     const coverUrl = images.large || images.common || images.medium || images.small || undefined;
                     const title = item.name_cn || item.name || "未知标题";
                     const summary = item.summary || "";
                     const airDate = item.air_date || "";
                     const rating = item.rating?.score;
                     const rank = item.rank;
                     const itemId = item.id; // 获取 ID

                    // 检查基本信息是否存在
                     if (!itemId || !title) {
                         console.warn("跳过 Bangumi 日历中的无效项目 (缺少 ID 或标题):", item);
                         continue;
                     }

                    let rawDescription = `放送日期: ${airDate || '未知'}`;
                     if (summary) rawDescription += ` | 简介: ${summary.substring(0, 80)}${summary.length > 80 ? '...' : ''}`; // 限制摘要长度

                    // 使用已存在的 formatItemDescription 格式化描述 (确保此函数在你的脚本中已定义)
                     const formattedDescription = formatItemDescription({
                         description: rawDescription,
                         rating: rating,
                         releaseDate: airDate && airDate.length >= 4 ? airDate : undefined // 只在有年份时传递日期
                     }) + (rank ? ` | 排名: ${rank}` : ''); // 添加排名信息

                    processedItems.push({
                        id: itemId.toString(), // 确保 ID 是字符串
                        type: "bangumi",
                        title: title.trim(),
                        coverUrl: coverUrl ? (coverUrl.startsWith('//') ? 'https:' + coverUrl : coverUrl) : undefined,
                        description: formattedDescription.trim() || undefined,
                        rating: rating ? parseFloat(rating) : undefined, // 确保评分是数字
                        releaseDate: airDate || undefined, // 保留原始放送日期
                        // 存储 API 的星期 ID (1-7)，用于后续分组或筛选
                        airWeekday: apiWeekdayId
                    });
                }
             } else {
                // 情况2: dayData本身可能是项目，或者有其他结构
                // 尝试直接从dayData中提取项目信息
                const item = dayData;
                // 安全地提取数据
                const images = item.images || {};
                const coverUrl = images.large || images.common || images.medium || images.small || undefined;
                const title = item.name_cn || item.name || "未知标题";
                const summary = item.summary || "";
                const airDate = item.air_date || "";
                const rating = item.rating?.score;
                const rank = item.rank;
                const itemId = item.id; // 获取 ID

                // 检查基本信息是否存在
                if (itemId && title) {
                    let rawDescription = `放送日期: ${airDate || '未知'}`;
                    if (summary) rawDescription += ` | 简介: ${summary.substring(0, 80)}${summary.length > 80 ? '...' : ''}`; // 限制摘要长度

                    // 使用已存在的 formatItemDescription 格式化描述
                    const formattedDescription = formatItemDescription({
                        description: rawDescription,
                        rating: rating,
                        releaseDate: airDate && airDate.length >= 4 ? airDate : undefined // 只在有年份时传递日期
                    }) + (rank ? ` | 排名: ${rank}` : ''); // 添加排名信息

                    processedItems.push({
                        id: itemId.toString(), // 确保 ID 是字符串
                        type: "bangumi",
                        title: title.trim(),
                        coverUrl: coverUrl ? (coverUrl.startsWith('//') ? 'https:' + coverUrl : coverUrl) : undefined,
                        description: formattedDescription.trim() || undefined,
                        rating: rating ? parseFloat(rating) : undefined, // 确保评分是数字
                        releaseDate: airDate || undefined, // 保留原始放送日期
                        // 存储 API 的星期 ID (1-7)，用于后续分组或筛选
                        airWeekday: apiWeekdayId
                    });
                }
             }
        }
        console.log(`Bangumi API 获取并处理了 ${processedItems.length} 个原始项目`);
        return processedItems; // 返回处理好的扁平项目列表

    } catch (error) {
        console.error("内部获取 Bangumi 日历数据失败:", error);
        // 将错误继续向上抛出，由调用者处理
        throw error;
    }
}

// --- 辅助函数：获取星期标题 (基于 API Weekday ID 1-7) ---
function getWeekdayTitle(apiWeekdayId) {
    const weekdaysMeta = {
        1: "--- 星期一 (Mon) ---",
        2: "--- 星期二 (Tue) ---",
        3: "--- 星期三 (Wed) ---",
        4: "--- 星期四 (Thu) ---",
        5: "--- 星期五 (Fri) ---",
        6: "--- 星期六 (Sat) ---",
        7: "--- 星期日 (Sun) ---" // API 使用 7 代表周日
    };
    return weekdaysMeta[apiWeekdayId] || `--- 未知星期 (${apiWeekdayId}) ---`;
}

// --- 辅助函数：将 JS Day (0-6) 或用户选择 (0-6) 转换为 API Weekday ID (1-7) ---
function convertToApiWeekdayId(dayValue) {
    // dayValue 可以是 JS 的 getDay() 结果 (0-6) 或用户选择的字符串 "0"-"6"
    const dayInt = parseInt(dayValue, 10);
    if (isNaN(dayInt) || dayInt < 0 || dayInt > 6) {
        console.warn(`无效的星期值: ${dayValue}, 默认使用周一 (1)`);
        return 1; // 返回默认值或抛出错误
    }
    if (dayInt === 0) { // 周日 (JS:0 -> API:7)
        return 7;
    } else { // 周一到周六 (JS:1-6 -> API:1-6)
        return dayInt;
    }
}


// --- Bangumi 放送日历统一处理函数 (已更新) ---
async function loadBangumiCalendarUnified(params = {}) {
    // --- CORRECTED: Read viewType, default to 'today' ---
    const viewType = params.viewType || 'today';
    console.log(`加载 Bangumi 日历，视图模式: ${viewType}`);

    try {
        // 第一步：获取并处理本周所有放送数据 (逻辑不变)
        const allProcessedItems = await _fetchAndProcessBangumiCalendar();
        if (!allProcessedItems || allProcessedItems.length === 0) {
             console.log("未能从 Bangumi API 获取到任何日历数据。");
             // 返回一个表示无数据的 section
             return [{
                 title: "无数据",
                 items: [{
                     id: `info-bangumi-nodata-${Date.now()}`,
                     type: "info",
                     title: "无放送数据",
                     description: "未能从 Bangumi API 获取到本周放送数据。"
                 }]
             }];
        }

        // 第二步：根据视图模式返回不同格式的数据

        if (viewType === 'weekly') {
            // --- 返回整周视图 (按天分组) ---
            console.log("生成整周视图 (按天分组)...");
             const weekdaysOrder = [1, 2, 3, 4, 5, 6, 7]; // API ID 顺序
            const groupedResults = [];

            for (const apiId of weekdaysOrder) {
                const itemsForDay = allProcessedItems.filter(item => item.airWeekday === apiId);
                if (itemsForDay.length > 0) {
                    groupedResults.push({
                        title: getWeekdayTitle(apiId), // 使用辅助函数获取标题
                        items: itemsForDay
                    });
                }
            }
            console.log(`已将 Bangumi 日历分组为 ${groupedResults.length} 个部分 (天)`);
            return groupedResults;

        } else if (viewType === 'today') {
            // --- 新增：返回今日放送数据 ---
            console.log("筛选今日放送...");
            const jsToday = new Date().getDay(); // 0 = Sun, 1 = Mon, ..., 6 = Sat
            const targetApiWeekdayId = convertToApiWeekdayId(jsToday); // 转换为 API ID (1-7)
            console.log(`今天是 JS 星期 ${jsToday}, 对应的 API 星期 ID: ${targetApiWeekdayId}`);

            const dailyItems = allProcessedItems.filter(item => item.airWeekday === targetApiWeekdayId);
            const dailyTitle = getWeekdayTitle(targetApiWeekdayId); // 获取今天的标题
            console.log(`筛选结果: 找到 ${dailyItems.length} 个今日放送项目`);

             // 返回包含单个分组的数组 (符合 sectionMode)
             if (dailyItems.length === 0) {
                 return [{
                     title: `${dailyTitle} (无放送)`,
                     items: [{
                         id: `info-bangumi-today-empty-${Date.now()}`,
                         type: "info",
                         title: "今日无放送",
                         description: "今天似乎没有动画放送计划。"
                     }]
                 }];
             } else {
                return [{
                    title: dailyTitle,
                    items: dailyItems
                }];
             }

        } else if (viewType === 'daily') { // <--- 处理指定单日 ('daily' value from metadata)
            // --- 处理选择的单日 ---
            const selectedWeekdayParam = params.weekday; // 用户选择的星期 ("0" 到 "6")
            if (selectedWeekdayParam === undefined || selectedWeekdayParam === null) {
                 console.error("选择了'指定单日'，但未提供星期参数。");
                 // 返回错误信息 Section
                 return [{
                     title: "参数错误",
                     items: [{
                         id: `error-bangumi-missing-weekday-${Date.now()}`,
                         type: "error",
                         title: "缺少参数",
                         description: "请选择要查看的星期。"
                     }]
                 }];
            }

            const targetApiWeekdayId = convertToApiWeekdayId(selectedWeekdayParam); // 转换为 API ID (1-7)
            console.log(`筛选指定单日，用户选择: ${selectedWeekdayParam}, 对应的 API 星期 ID: ${targetApiWeekdayId}`);

            const dailyItems = allProcessedItems.filter(item => item.airWeekday === targetApiWeekdayId);
            const dailyTitle = getWeekdayTitle(targetApiWeekdayId); // 获取所选日期的标题
            console.log(`筛选结果: 找到 ${dailyItems.length} 个符合条件的单日项目`);

            // 返回包含单个分组的数组 (符合 sectionMode)
            if (dailyItems.length === 0) {
                return [{
                    title: `${dailyTitle} (无放送)`,
                    items: [{
                        id: `info-bangumi-daily-empty-${targetApiWeekdayId}-${Date.now()}`,
                        type: "info",
                        title: "当日无放送",
                        description: "所选日期似乎没有动画放送计划。"
                    }]
                }];
            } else {
               return [{
                   title: dailyTitle,
                   items: dailyItems
               }];
            }
        } else {
             // 处理未知的 viewType
             console.warn(`未知的视图模式: ${viewType}, 将返回空数据。`);
             return [{
                 title: "未知视图",
                 items: [{
                     id: `error-bangumi-unknown-view-${Date.now()}`,
                     type: "error",
                     title: "无效的视图模式",
                     description: `请求了未知的视图模式: ${viewType}`
                 }]
             }];
        }

    } catch (error) {
         console.error(`加载 Bangumi 统一日历视图 (${viewType}) 失败:`, error);
         // 返回一个包含错误信息的 Section，符合 sectionMode: true 的格式
         return [{
             title: "加载失败", // Section 标题
             items: [{ // Section 内容，包含一个错误项
                 id: `error-bangumi-unified-${viewType}-${Date.now()}`,
                 type: "error", // 标记为错误类型
                 title: "加载 Bangumi 日历失败",
                 description: error.message || "发生未知错误" // 显示具体的错误信息
             }]
         }];
    }
}


// --- 保留原有的 Bangumi 排行榜功能 ---
async function loadBangumiRankings(params = {}) {
    const page = params.page || 1;
    const url = `https://bangumi.tv/anime/browser?sort=rank&page=${page}`;
    console.log("请求 Bangumi 动画排行页面:", url);

    try {
        const response = await Widget.http.get(url, {
             headers: {
                 "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
                 "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8", // Prefer Chinese
                 "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
                 "Referer": "https://bangumi.tv/anime/browser" // Added Referer
             }
        });

        if (!response || !response.data) {
            throw new Error("获取 Bangumi 排行榜页面失败");
        }

        const docId = Widget.dom.parse(response.data);
        if (docId < 0) throw new Error("解析 Bangumi 排行榜 HTML 失败");

        // 使用更精确的选择器，直接定位到列表项 li
        const listItems = Widget.dom.select(docId, "ul#browserItemList > li.item");
        console.log(`Bangumi 排行榜: 找到 ${listItems.length} 个列表项 (使用 ul#browserItemList > li.item)`);

        if (listItems.length === 0) {
            const nextLink = Widget.dom.selectFirst(docId, ".page_inner > .p_cur + a.p"); // 更精确的选择器
            if (nextLink < 0) {
                 console.log("Bangumi 排行榜: 已到达末尾或无结果");
            } else {
                 console.warn("Bangumi 排行榜: 未找到列表项，但存在下一页链接?");
            }
            return [];
        }

        const results = [];
        for (const itemId of listItems) {
            try {
                 // 选择器调整: 封面链接、标题链接、信息、排名、评分
                 const linkElementId = Widget.dom.selectFirst(itemId, "a.subjectCover");
                 const titleElementId = Widget.dom.selectFirst(itemId, "div.inner > h3 > a"); // 更精确路径
                 const infoElementId = Widget.dom.selectFirst(itemId, "p.info.tip");
                 const rankElementId = Widget.dom.selectFirst(itemId, "span.rank");
                 const ratingElementId = Widget.dom.selectFirst(itemId, "small.fade.rr"); // 评分数字的选择器

                // 确保关键元素存在
                if (linkElementId < 0 || titleElementId < 0) {
                    console.warn("Bangumi 排行榜: 跳过缺少封面链接或标题链接的条目, Item ID:", itemId);
                    continue;
                }

                const title = await Widget.dom.text(titleElementId);
                const link = await Widget.dom.attr(linkElementId, "href");
                const idMatch = link ? link.match(/\/subject\/(\d+)/) : null;

                if (idMatch && idMatch[1]) {
                    let coverUrl = undefined;
                    const imgElementId = Widget.dom.selectFirst(linkElementId, "img");
                    if (imgElementId >= 0) {
                        coverUrl = await Widget.dom.attr(imgElementId, "src") || await Widget.dom.attr(imgElementId, "data-cfsrc"); // 检查 data-cfsrc for Cloudflare
                        if (coverUrl && coverUrl.startsWith('//')) {
                            coverUrl = 'https:' + coverUrl;
                        }
                        // 尝试获取大图
                        if (coverUrl) {
                             coverUrl = coverUrl.replace(/\/(c|g|s)\//, '/l/');
                        }
                    }

                    let infoText = "";
                    let ratingText = undefined;
                    let rankText = "";
                    let year = undefined;

                    if(infoElementId >= 0) {
                        infoText = await Widget.dom.text(infoElementId);
                        const yearMatch = infoText.match(/(\d{4})(?:年|-|\/)/); // 匹配年份格式
                        if (yearMatch) year = yearMatch[1];
                        infoText = infoText.trim().replace(/\n\s*/g, ' | ');
                    }
                    if(rankElementId >= 0) {
                        rankText = await Widget.dom.text(rankElementId);
                        rankText = rankText.trim(); // 清理 Rank 文本
                    }
                    if(ratingElementId >= 0) {
                        ratingText = await Widget.dom.text(ratingElementId);
                        ratingText = ratingText.trim();
                    }

                    // 优先使用 infoText 作为描述基础
                    const formattedDescription = formatItemDescription({
                        description: infoText || undefined,
                        rating: ratingText,
                        releaseDate: year ? `${year}-01-01` : undefined
                    }) + (rankText ? ` | ${rankText}` : ''); // 将 Rank 拼接到后面

                    results.push({
                        id: idMatch[1],
                        type: "bangumi",
                        title: title.trim(),
                        coverUrl: coverUrl,
                        description: formattedDescription.trim() || undefined,
                        rating: ratingText ? parseFloat(ratingText) : undefined,
                        releaseDate: year ? `${year}-01-01` : undefined
                    });
                } else {
                    console.warn("Bangumi 排行榜: 无法从链接提取 ID:", link);
                }
            } catch (parseError) {
                 console.error("Bangumi 排行榜: 解析单个条目时出错:", parseError, "HTML Item ID:", itemId);
            }
        }

        console.log(`Bangumi 排行榜: 成功解析 ${results.length} 个条目`);
        return results;

    } catch (error) {
        console.error("加载 Bangumi 排行榜失败:", error);
        return [{ id: `error-bangumi-rank-${Date.now()}`, type: "error", title: "加载 Bangumi 排行榜失败", description: error.message }];
    }
}

// --- 保留原有的 Bangumi 浏览功能 (包括路径构建逻辑) ---
async function loadBangumiBrowser(params = {}) {
    const page = params.page || 1;
    const tag = params.tag || ""; // User input tag
    const genre_tag = params.genre_tag || ""; // Enum genre/type tag
    const region = params.region || ""; // Enum region
    const audience = params.audience || ""; // Enum audience
    const year = params.year || "";
    const type = params.type || "all"; // Enum classification (tv, ova, etc.)

    let basePath = "https://bangumi.tv/anime/browser";
    const pathSegments = [];
    const queryParams = [];

    // Build path segments in a potential Bangumi order:
    if (tag) pathSegments.push("tag", encodeURIComponent(tag)); // Tag is usually /tag/TAG_NAME
    if (genre_tag) pathSegments.push(encodeURIComponent(genre_tag));
    if (region) pathSegments.push(encodeURIComponent(region));
    if (audience) pathSegments.push(encodeURIComponent(audience));
    if (type !== "all") pathSegments.push(type);
    if (year && /\d{4}/.test(year)) pathSegments.push("airtime", year);

    // Construct the final path
    if (pathSegments.length > 0) {
        basePath += "/" + pathSegments.join("/");
    }

    // Add Query Parameters (sort, page)
    queryParams.push(`sort=rank`); // Default sort by rank for browsing consistency
    queryParams.push(`page=${page}`);

    const finalUrl = `${basePath}?${queryParams.join("&")}`;

    console.log("请求 Bangumi 动画浏览页面:", finalUrl);

    try {
        const response = await Widget.http.get(finalUrl, {
             headers: { // Headers 与 Rankings 保持一致
                 "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
                 "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
                 "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
                 "Referer": "https://bangumi.tv/anime/browser"
             }
        });

        if (!response || !response.data) {
            throw new Error("获取 Bangumi 浏览页面失败");
        }

        const docId = Widget.dom.parse(response.data);
        if (docId < 0) throw new Error("解析 Bangumi 浏览 HTML 失败");

        // 使用与 Rankings 一致的选择器
        const listItems = Widget.dom.select(docId, "ul#browserItemList > li.item");
        console.log(`Bangumi 浏览: 找到 ${listItems.length} 个列表项`);

        if (listItems.length === 0) {
            const nextLink = Widget.dom.selectFirst(docId, ".page_inner > .p_cur + a.p");
            if (nextLink < 0) {
                 console.log("Bangumi 浏览: 已到达末尾或无结果 (根据当前筛选条件)");
            } else {
                 console.warn("Bangumi 浏览: 未找到列表项，但存在下一页链接?");
            }
            return [];
        }

        // 解析逻辑与 Rankings 保持一致
        const results = [];
        for (const itemId of listItems) {
             try {
                 const linkElementId = Widget.dom.selectFirst(itemId, "a.subjectCover");
                 const titleElementId = Widget.dom.selectFirst(itemId, "div.inner > h3 > a");
                 const infoElementId = Widget.dom.selectFirst(itemId, "p.info.tip");
                 const rankElementId = Widget.dom.selectFirst(itemId, "span.rank");
                 const ratingElementId = Widget.dom.selectFirst(itemId, "small.fade.rr");

                 if (linkElementId < 0 || titleElementId < 0) {
                     console.warn("Bangumi 浏览: 跳过缺少封面或标题的条目, Item ID:", itemId);
                     continue;
                 }

                 const title = await Widget.dom.text(titleElementId);
                 const link = await Widget.dom.attr(linkElementId, "href");
                 const idMatch = link ? link.match(/\/subject\/(\d+)/) : null;

                 if (idMatch && idMatch[1]) {
                     let coverUrl = undefined;
                     const imgElementId = Widget.dom.selectFirst(linkElementId, "img");
                     if (imgElementId >= 0) {
                          coverUrl = await Widget.dom.attr(imgElementId, "src") || await Widget.dom.attr(imgElementId, "data-cfsrc");
                          if (coverUrl && coverUrl.startsWith('//')) coverUrl = 'https:' + coverUrl;
                          if (coverUrl) coverUrl = coverUrl.replace(/\/(c|g|s)\//, '/l/');
                     }

                     let infoText = "";
                     let ratingText = undefined;
                     let rankText = "";
                     let currentYear = undefined;

                     if(infoElementId >= 0) {
                         infoText = await Widget.dom.text(infoElementId);
                         const yearMatch = infoText.match(/(\d{4})(?:年|-|\/)/);
                         if (yearMatch) currentYear = yearMatch[1];
                         infoText = infoText.trim().replace(/\n\s*/g, ' | ');
                     }
                     if(rankElementId >= 0) {
                         rankText = await Widget.dom.text(rankElementId);
                         rankText = rankText.trim();
                     }
                     if(ratingElementId >= 0) {
                         ratingText = await Widget.dom.text(ratingElementId);
                         ratingText = ratingText.trim();
                     }

                     const formattedDescription = formatItemDescription({
                         description: infoText || undefined,
                         rating: ratingText,
                         releaseDate: currentYear ? `${currentYear}-01-01` : undefined
                     }) + (rankText ? ` | ${rankText}` : '');

                     results.push({
                         id: idMatch[1],
                         type: "bangumi",
                         title: title.trim(),
                         coverUrl: coverUrl,
                         description: formattedDescription.trim() || undefined,
                         rating: ratingText ? parseFloat(ratingText) : undefined,
                         releaseDate: currentYear ? `${currentYear}-01-01` : undefined
                     });
                 } else {
                     console.warn("Bangumi 浏览: 无法从链接提取 ID:", link);
                 }
            } catch (parseError) {
                 console.error("Bangumi 浏览: 解析单个条目时出错:", parseError, "HTML Item ID:", itemId);
            }
        }

        console.log(`Bangumi 浏览: 成功解析 ${results.length} 个条目`);
        return results;

    } catch (error) {
        console.error("加载 Bangumi 浏览页面失败:", error);
        return [{ id: `error-bangumi-browser-${Date.now()}`, type: "error", title: "加载 Bangumi 浏览失败", description: error.message }];
    }
}

// --- End of Bangumi Functions ---

// Updated loadBangumiBrowser for path-based filtering and tag support
async function loadBangumiBrowser(params = {}) {
    const page = params.page || 1;
    const tag = params.tag || ""; // User input tag
    const genre_tag = params.genre_tag || ""; // Enum genre/type tag
    const region = params.region || ""; // Enum region
    const audience = params.audience || ""; // Enum audience
    const year = params.year || "";
    const type = params.type || "all"; // Enum classification (tv, ova, etc.)

    let basePath = "https://bangumi.tv/anime/browser";
    const pathSegments = [];
    const queryParams = [];

    // Build path segments in a potential Bangumi order:
    // Tag (user input) -> Genre Tag (enum) -> Region -> Audience -> Type (classification) -> airtime -> Year

    // 1. Add Tag segment (user input)
    if (tag) {
        pathSegments.push(encodeURIComponent(tag));
    }
    // 2. Add Genre Tag segment (enum)
    if (genre_tag) {
        pathSegments.push(encodeURIComponent(genre_tag));
    }
    // 3. Add Region segment (enum)
    if (region) {
        pathSegments.push(encodeURIComponent(region));
    }
    // 4. Add Audience segment (enum)
    if (audience) {
        pathSegments.push(encodeURIComponent(audience));
    }
    // 5. Add Type (classification) segment (if not 'all')
    if (type !== "all") {
        pathSegments.push(type); // 'tv', 'ova', etc. - already safe characters
    }
    // 6. Add Year segment (airtime/YEAR)
    if (year && /\d{4}/.test(year)) {
        pathSegments.push("airtime", year);
    }

    // Construct the final path
    if (pathSegments.length > 0) {
        basePath += "/" + pathSegments.join("/");
    }

    // 7. Add Query Parameters (sort, page)
    queryParams.push(`sort=date`); // Default sort by date seems reasonable for browsing
    queryParams.push(`page=${page}`);

    const finalUrl = `${basePath}?${queryParams.join("&")}`;

    console.log("请求 Bangumi 动画浏览页面:", finalUrl);

    try {
        // Rest of the fetching and parsing logic remains the same
        const response = await Widget.http.get(finalUrl, {
             headers: {
                 "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
                 "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
                 "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
                 "Referer": "https://bangumi.tv/anime/browser"
             }
        });

        if (!response || !response.data) {
            throw new Error("获取 Bangumi 浏览页面失败");
        }

        const docId = Widget.dom.parse(response.data);
        if (docId < 0) throw new Error("解析 Bangumi 浏览 HTML 失败");

        const listItems = Widget.dom.select(docId, "#browserItemList li");
        console.log(`Bangumi 浏览: 找到 ${listItems.length} 个列表项`);

        if (listItems.length === 0) {
            const nextLink = Widget.dom.selectFirst(docId, ".page_inner > .p_cur + a");
            if (nextLink < 0) {
                 console.log("Bangumi 浏览: 已到达末尾或无结果 (根据当前筛选条件)");
            } else {
                 console.warn("Bangumi 浏览: 未找到列表项，但存在下一页链接?");
            }
            return [];
        }

        // Parsing logic remains the same
        const results = [];
        for (const itemId of listItems) {
             try {
                 const linkElementId = Widget.dom.selectFirst(itemId, "a.subjectCover");
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
                             if (coverUrl && coverUrl.startsWith('//')) coverUrl = 'https:' + coverUrl;
                             if (coverUrl) coverUrl = coverUrl.replace(/\/(c|g|s)\//, '/l/');
                         }

                         let description = "";
                         let rating = undefined;
                         let rankText = "";
                         let currentYear = undefined;

                         const infoElementId = Widget.dom.selectFirst(itemId, ".info.tip");
                         if(infoElementId >= 0) {
                             description = await Widget.dom.text(infoElementId);
                             const yearMatch = description.match(/(\d{4})(?:年|-)/);
                             if (yearMatch) currentYear = yearMatch[1];
                             description = description.trim().replace(/\n\s*/g, ' | ');
                         }
                         const rankElementId = Widget.dom.selectFirst(itemId, ".rank");
                         if(rankElementId >= 0) rankText = await Widget.dom.text(rankElementId);

                         const ratingElement = Widget.dom.selectFirst(itemId, ".fade.rr");
                         if(ratingElement >= 0) {
                             rating = await Widget.dom.text(ratingElement);
                             rating = rating.trim();
                         }

                         const formattedDescription = formatItemDescription({
                             description: description,
                             rating: rating,
                             releaseDate: currentYear ? `${currentYear}-01-01` : undefined
                         }) + (rankText ? ` | ${rankText.trim()}` : '');

                         results.push({
                             id: idMatch[1],
                             type: "bangumi",
                             title: title.trim(),
                             coverUrl: coverUrl,
                             description: formattedDescription,
                             rating: rating ? parseFloat(rating) : undefined,
                             releaseDate: currentYear ? `${currentYear}-01-01` : undefined
                         });
                     }
                 }
            } catch (parseError) {
                 console.error("Bangumi 浏览: 解析单个条目时出错:", parseError, "HTML Item ID:", itemId);
            }
        }

        console.log(`Bangumi 浏览: 成功解析 ${results.length} 个条目`);
        return results;

    } catch (error) {
        console.error("加载 Bangumi 浏览页面失败:", error);
        return [{ id: "error-bangumi-browser", type: "error", title: "加载 Bangumi 浏览失败", description: error.message }];
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
                    const rating = item.vote_average ? (item.vote_average / 2).toFixed(1) : undefined;

                    return {
                        id: item.id.toString(), // Ensure ID is string
                        type: "tmdb",
                        title: title,
                        coverUrl: item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : (item.profile_path ? `https://image.tmdb.org/t/p/w500${item.profile_path}` : undefined),
                        description: formatItemDescription({
                            description: item.overview || (item.known_for ? item.known_for.map(k => k.title || k.name).join(', ') : `类型: ${item.media_type}`),
                            rating: rating,
                            releaseDate: releaseDate
                        }),
                        rating: rating,
                        releaseDate: releaseDate
                    };
                }).filter(item => item.title);
            } catch (e) {
                console.error("TMDB 搜索失败:", e);
                return [];
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
                             let rating = undefined;
                             let rankText = "";
                             let year = undefined;

                             const infoElementId = Widget.dom.selectFirst(itemId, ".info.tip");
                             if(infoElementId >= 0) {
                                 description = await Widget.dom.text(infoElementId);
                                 // Try extracting year from description
                                 const yearMatch = description.match(/(\d{4})(?:年|-)/);
                                 if (yearMatch) year = yearMatch[1];
                                 description = description.trim().replace(/\n\s*/g, ' | ');
                             }
                             const rankElementId = Widget.dom.selectFirst(itemId, ".rank");
                             if(rankElementId >= 0) rankText = await Widget.dom.text(rankElementId);

                             const ratingElementId = Widget.dom.selectFirst(itemId, ".fade.rr");
                             if(ratingElementId >= 0) {
                                 rating = await Widget.dom.text(ratingElementId);
                                 rating = rating.trim();
                             }

                            bangumiResults.push({
                                id: idMatch[1],
                                type: "bangumi",
                                title: title.trim(),
                                coverUrl: coverUrl,
                                description: formatItemDescription({
                                    description: description || undefined,
                                    rating: rating,
                                    releaseDate: year ? `${year}-01-01` : undefined
                                }) + (rankText ? ` | ${rankText.trim()}` : ''), // Append rank separately
                                rating: rating ? parseFloat(rating) : undefined,
                                releaseDate: year ? `${year}-01-01` : undefined
                            });
                        }
                    }
                }
                console.log(`Bangumi 搜索解析到 ${bangumiResults.length} 个结果`);
                return bangumiResults;
            } catch (e) {
                console.error("Bangumi 搜索失败:", e);
                // Return error object for better handling in Promise.allSettled
                return { platform: "Bangumi", error: true, message: e.message || "未知错误" };
            }
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

                    // Description selector: try .rating_nums, .meta.abstract, fallback .abstract .inq
                    let description = "";
                    let rating = undefined;
                    let year = undefined;
                    let cast = "";

                     const ratingElement = Widget.dom.selectFirst(resultId, ".rating_nums"); // Direct rating number
                     if(ratingElement >= 0) {
                         rating = await Widget.dom.text(ratingElement);
                         rating = rating.trim();
                     }

                      // Meta abstract often contains year and cast
                     const metaElement = Widget.dom.selectFirst(resultId, ".meta.abstract");
                     let metaText = "";
                     if (metaElement >= 0) {
                         metaText = await Widget.dom.text(metaElement);
                         // Try extracting year from meta
                         const yearMatch = metaText.match(/(\d{4})(?:年|-)/); // Match year followed by 年 or -
                         if (yearMatch) year = yearMatch[1];
                         cast = metaText.trim().replace(/\n\s*/g, ' / '); // Use meta text as description/cast info
                     } else {
                         // Fallback abstract description
                         const abstractElement = Widget.dom.selectFirst(resultId, ".abstract .inq");
                         if (abstractElement >= 0) {
                              cast = await Widget.dom.text(abstractElement);
                         }
                     }

                    doubanResults.push({
                        id: id || "", // Use empty string if ID is null
                        type: "douban",
                        title: title.trim(),
                        coverUrl: coverUrl,
                        description: formatItemDescription({
                            description: cast.trim() || undefined,
                            rating: rating,
                            releaseDate: year ? `${year}-01-01` : undefined
                        }),
                        rating: rating ? parseFloat(rating) : undefined,
                        releaseDate: year ? `${year}-01-01` : undefined
                    });
                     console.log("=====>>>>> Douban: 成功添加一个结果到 doubanResults <<<<<=====");
                }
                 console.log(`=====>>>>> Douban: 循环结束, 解析到 ${doubanResults.length} 个结果 <<<<<=====`);
                return doubanResults;
            } catch (e) {
                console.error("=====>>>>> Douban (cat=1002 策略) 捕获到错误: <<<<<=====", e);
                 // Return error object for better handling in Promise.allSettled
                 return { platform: "Douban", error: true, message: e.message || "未知错误" };
            }
        })());
    }

    // Execute all selected searches concurrently and wait for all to settle
    if (searchPromises.length === 0) {
        console.log("没有选择任何平台进行搜索");
        return [];
    }
    const allSettledResults = await Promise.allSettled(searchPromises);

    // Combine results from successful searches and add error messages for failures
    let combinedResults = [];
    const platformOrder = ['TMDB', 'Bangumi', 'Douban']; // Keep track based on push order
    let platformIndex = 0;

    allSettledResults.forEach((result, index) => {
        let currentPlatform = "Unknown";
         // Determine platform based on the order promises were added when 'all' is selected
         if (platform === 'all') {
            // This logic needs refinement if platforms are conditionally added
             if (index === 0 && (platform === 'all' || platform === 'tmdb')) currentPlatform = "TMDB";
             else if (index === 1 && (platform === 'all' || platform === 'bangumi')) currentPlatform = "Bangumi";
             else if (index === 2 && (platform === 'all' || platform === 'douban')) currentPlatform = "Douban";
         } else {
            currentPlatform = platform.toUpperCase(); // If single platform search
         }


        if (result.status === "fulfilled") {
            const value = result.value;
            // Check if the fulfilled value is an error object we returned
            if (value && value.error === true) {
                 console.error(`${value.platform} 搜索处理失败: ${value.message}`);
                 combinedResults.push({
                     id: `error-${value.platform.toLowerCase()}-${Date.now()}`,
                     type: "error", // Use a distinct type for errors
                     title: `${value.platform} 搜索失败`,
                     description: `未能加载 ${value.platform} 搜索结果。错误: ${value.message}`
                 });
            } else if (Array.isArray(value)) {
                 // Successful result array
                 console.log(`${currentPlatform} 搜索成功，获得 ${value.length} 条结果`);
                 combinedResults = combinedResults.concat(value);
             } else {
                 // Unexpected fulfilled value
                 console.warn(`${currentPlatform} 搜索返回了非预期的成功结果:`, value);
             }
        } else { // Promise rejected (should be less common now)
            console.error(`${currentPlatform} 搜索 Promise rejected: ${result.reason}`);
            combinedResults.push({
                 id: `error-rejected-${currentPlatform.toLowerCase()}-${Date.now()}`,
                 type: "error",
                 title: `${currentPlatform} 搜索失败`,
                 description: `加载 ${currentPlatform} 搜索结果时发生意外错误。`
             });
        }
    });

    console.log(`聚合搜索完成，共获得 ${combinedResults.length} 条结果 (包括可能的错误提示)`);
    // Filter out potential null/undefined entries just in case
    return combinedResults.filter(item => item != null);
}


// --- END OF COMBINED WIDGET FILE ---

// --- NEW FUNCTIONS V2 ---

// 1. Actor/Director Quick Connect
async function findPersonAndCredits(params = {}) {
    const name = params.name;
    const language = params.language || 'zh-CN';
    if (!name) {
        return [{ id: "error-person-noname", type: "error", title: "请输入演员或导演名称" }];
    }
    console.log(`搜索人物: ${name}`);

    try {
        // Step 1: Search for the person
        const searchResponse = await Widget.tmdb.get('/search/person', { params: { query: name, language: language } });
        if (!searchResponse || !searchResponse.results || searchResponse.results.length === 0) {
            console.log(`未找到名为 \"${name}\" 的人物`);
            return [{ id: `error-person-notfound-${name}`, type: "info", title: `未找到人物: ${name}` }];
        }

        // Take the most popular result (first one)
        const person = searchResponse.results[0];
        const personId = person.id;
        console.log(`找到人物: ${person.name} (ID: ${personId}), Popularity: ${person.popularity}`);

        // Step 2: Get combined credits
        const creditsResponse = await Widget.tmdb.get(`/person/${personId}/combined_credits`, { params: { language: language } });
        if (!creditsResponse || (!creditsResponse.cast && !creditsResponse.crew)) {
            console.log(`未能获取 ${person.name} 的作品信息`);
             return [{ id: `error-credits-notfound-${personId}`, type: "info", title: `未获取到 ${person.name} 的作品信息` }];
        }

        // Combine cast and crew, remove duplicates, sort by popularity
        let combinedCredits = [...(creditsResponse.cast || []), ...(creditsResponse.crew || [])];
        // Filter out items without release date or title for better sorting/display
        combinedCredits = combinedCredits.filter(item => (item.release_date || item.first_air_date) && (item.title || item.name));
        // Remove duplicates based on ID and media_type
        const uniqueCredits = combinedCredits.reduce((acc, current) => {
            const x = acc.find(item => item.id === current.id && item.media_type === current.media_type);
            if (!x) {
                return acc.concat([current]);
            } else {
                // Optionally merge or prioritize if needed, here we just keep the first encountered
                return acc;
            }
        }, []);

        uniqueCredits.sort((a, b) => (b.popularity || 0) - (a.popularity || 0));

        console.log(`共找到 ${uniqueCredits.length} 部独立作品 (按热度排序)`);

        // Step 3: Format output
        const results = uniqueCredits.slice(0, 50).map(item => { // Limit results to 50
            const isMovie = item.media_type === 'movie';
            const title = isMovie ? item.title : item.name;
            const releaseDate = isMovie ? item.release_date : item.first_air_date;
            const rating = item.vote_average ? (item.vote_average / 2).toFixed(1) : undefined;
            const description = formatItemDescription({
                 description: item.overview || `类型: ${item.media_type}`,
                 rating: rating,
                 releaseDate: releaseDate
            });

            // Determine role (more complex logic could be added here)
            let role = '';
            if (creditsResponse.cast && creditsResponse.cast.some(c => c.id === item.id)) role = item.character || '演员';
            if (!role && creditsResponse.crew && creditsResponse.crew.some(c => c.id === item.id)) role = item.job || '制作人员';

            return {
                id: `${item.media_type}/${item.id}`, // Use format like movie/123 or tv/456
                type: "tmdb",
                media_type: item.media_type,
                title: title,
                coverUrl: item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : undefined,
                description: `${role ? `[${role}] ` : ''}${description}`,
                rating: rating,
                releaseDate: releaseDate
            };
        });

        if (results.length === 0) {
             return [{ id: `info-credits-empty-${personId}`, type: "info", title: `${person.name} 暂无关联作品记录` }];
        }

        // Add person summary as the first item?
        results.unshift({
             id: `person/${personId}`,
             type: "tmdb",
             media_type: "person",
             title: `${person.name} (点击查看其作品)`, // Title indicates action
             coverUrl: person.profile_path ? `https://image.tmdb.org/t/p/w500${person.profile_path}` : undefined,
             description: `性别: ${person.gender === 1 ? '女' : person.gender === 2 ? '男' : '未知'} | 职业: ${person.known_for_department || 'N/A'} | 热度: ${person.popularity.toFixed(2)}`,
             // No rating or release date for person
        });


        return results;

    } catch (error) {
        console.error("查找演员/导演及其作品失败:", error);
        return [{ id: "error-person-fetch", type: "error", title: "获取人物信息失败", description: error.message }];
    }
}

// 2. Release Date Explorer (时光机) - Filter by Year API, then Month/Day client-side
async function exploreReleasesByDate(params = {}) {
    const { type = 'movie', year, month, day, language = 'zh-CN', page = 1 } = params; // Added page param

    if (!year || !/\d{4}/.test(year)) {
        return [{ id: "error-date-year", type: "error", title: "请输入有效的四位数年份" }];
    }
    if (!month || !/^(0[1-9]|1[0-2])$/.test(month)) {
         return [{ id: "error-date-month", type: "error", title: "请选择有效的月份" }];
    }

    // Parameter for the API call - filter only by year
    const yearParamName = type === 'movie' ? 'primary_release_year' : 'first_air_date_year';
    const discoverParams = {
        language: language,
        sort_by: 'primary_release_date.asc', // Sort ascending to get earliest dates first
        page: page, // Use page parameter
        [yearParamName]: year // Filter by year using computed property name
    };

    console.log(`时光机: 查询年份 ${year}, 准备获取第 ${page} 页结果，稍后过滤月份 ${month}${day ? `/${day}` : ''}`);
    console.log(`调用 TMDB Discover API (${type}) with params:`, discoverParams);

    try {
        // Use the standard Widget.tmdb.get again
        const response = await Widget.tmdb.get(`/discover/${type}`, { params: discoverParams });

        if (!response || !response.results) {
            console.error("获取 TMDB Discover 数据失败或格式错误", response);
            throw new Error("获取 TMDB Discover 数据失败");
        }

        console.log(`TMDB Discover 响应: 收到 ${response.results.length} 个 ${year} 年的结果 (Page ${response.page}/${response.total_pages})`);

        // Client-side filtering based on month and optional day
        const targetMonth = month; // Already zero-padded
        const targetDay = day ? day.padStart(2, '0') : null; // Zero-pad day if provided

        const filteredResults = response.results.filter(item => {
            const releaseDate = type === 'movie' ? item.release_date : item.first_air_date; // YYYY-MM-DD
            if (!releaseDate || releaseDate.length < 7) return false; // Need at least YYYY-MM

            const itemYear = releaseDate.substring(0, 4);
            const itemMonth = releaseDate.substring(5, 7);
            const itemDay = releaseDate.length >= 10 ? releaseDate.substring(8, 10) : null;

            // Check year (should match due to API filter, but double-check) and month
            if (itemYear !== year || itemMonth !== targetMonth) {
                return false;
            }
            // If day is specified, also check day
            if (targetDay && itemDay !== targetDay) {
                return false;
            }
            return true; // Matches year, month, and day (if specified)
        });

        console.log(`过滤后: 找到 ${filteredResults.length} 个符合 ${year}-${targetMonth}${targetDay ? `-${targetDay}` : ''} 的结果`);

        if (filteredResults.length === 0) {
            // Check if there are more pages for this year to potentially check
            const message = (response.page < response.total_pages)
                ? `第 ${response.page} 页无匹配结果，可尝试下一页`
                : `在 ${year} 年 ${targetMonth} 月${targetDay ? ` ${targetDay} 日` : ''} 未找到符合条件的影视作品`;
             return [{ id: `info-discover-empty-${year}-${month}-${day || 'month'}-page${page}`, type: "info", title: "该时段暂无记录", description: message }];
        }

        // Format the filtered results
        const results = filteredResults.map(item => {
            const isMovie = type === 'movie'; // Already known
            const title = isMovie ? item.title : item.name;
            const releaseDate = isMovie ? item.release_date : item.first_air_date;
            const rating = item.vote_average ? (item.vote_average / 2).toFixed(1) : undefined;
            const description = formatItemDescription({
                description: item.overview || `TMDB ID: ${item.id}`,
                rating: rating,
                releaseDate: releaseDate
            });

            return {
                id: `${type}/${item.id}`,
                type: "tmdb",
                media_type: type,
                title: title,
                coverUrl: item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : undefined,
                description: description,
                rating: rating,
                releaseDate: releaseDate
            };
        });

        return results;

    } catch (error) {
        console.error("调用 TMDB Discover API 或处理失败:", error);
        return [{ id: "error-discover-fetch-v2", type: "error", title: "查询影视时光机失败", description: error.message }];
    }
}

// 3. Simple Random Picker (是日吉片) - REVERTED VALIDATION
async function getRandomPick(params = {}) {
    const { type = 'movie', genre, min_year, max_year, min_rating, language = 'zh-CN' } = params;

    const discoverParams = {
        language: language,
        sort_by: 'popularity.desc',
        'vote_count.gte': 100
    };

    // Keep requestedGenreId for logging, but remove validation step
    const requestedGenreId = genre ? parseInt(genre, 10) : null;

    if (requestedGenreId) discoverParams['with_genres'] = genre;
    if (min_rating && !isNaN(parseFloat(min_rating))) {
        discoverParams['vote_average.gte'] = parseFloat(min_rating);
    }

    const yearParamPrefix = type === 'movie' ? 'primary_release_date' : 'first_air_date';
    if (min_year && /^\d{4}$/.test(min_year)) discoverParams[`${yearParamPrefix}.gte`] = `${min_year}-01-01`;
    if (max_year && /^\d{4}$/.test(max_year)) discoverParams[`${yearParamPrefix}.lte`] = `${max_year}-12-31`;

    console.log(`随机推荐: 筛选条件 (${type}):`, discoverParams);

    try {
        const initialResponse = await Widget.tmdb.get(`/discover/${type}`, { params: { ...discoverParams, page: 1 } });

        if (!initialResponse || !initialResponse.total_pages || initialResponse.total_results === 0) {
            console.log("随机推荐: 未找到符合条件的任何结果");
             return [{ id: "info-random-empty", type: "info", title: "无符合条件的结果", description: "请尝试放宽筛选条件" }];
        }

        const totalPages = Math.min(initialResponse.total_pages, 500);
        console.log(`随机推荐: 总共 ${initialResponse.total_results} 个结果，可用页数 ${totalPages}`);

        const randomPage = Math.floor(Math.random() * totalPages) + 1;
        console.log(`随机推荐: 选择第 ${randomPage} 页`);

        const randomPageResponse = await Widget.tmdb.get(`/discover/${type}`, { params: { ...discoverParams, page: randomPage } });

        if (!randomPageResponse || !randomPageResponse.results || randomPageResponse.results.length === 0) {
            console.error(`随机推荐: 获取随机页 (${randomPage}) 数据失败或该页无数据`);
            return [{ id: "error-random-pagefetch", type: "error", title: "获取随机推荐失败", description: "无法加载随机页面数据" }];
        }

        const randomIndex = Math.floor(Math.random() * randomPageResponse.results.length);
        const randomItem = randomPageResponse.results[randomIndex];
        console.log(`随机推荐: 从第 ${randomPage} 页选中: ${randomItem.title || randomItem.name} (ID: ${randomItem.id}). Genre IDs: ${randomItem.genre_ids}`); // Log Genre IDs

        // --- REMOVED VALIDATION STEP ---
        // The validation block previously here is removed.
        // --- END REMOVED VALIDATION STEP ---

        // Format the single result
        const isMovie = type === 'movie';
        const title = isMovie ? randomItem.title : randomItem.name;
        const releaseDate = isMovie ? randomItem.release_date : randomItem.first_air_date;
        const rating = randomItem.vote_average ? (randomItem.vote_average / 2).toFixed(1) : undefined;
        const description = formatItemDescription({
            description: randomItem.overview || `TMDB ID: ${randomItem.id}`,
            rating: rating ? (randomItem.vote_average || 0).toFixed(1) : undefined,
            releaseDate: releaseDate
        });

        const resultItem = {
            id: `${type}/${randomItem.id}`,
            type: "tmdb",
            media_type: type,
            title: title,
            coverUrl: randomItem.poster_path ? `https://image.tmdb.org/t/p/w500${randomItem.poster_path}` : undefined,
            description: description,
            rating: rating,
            releaseDate: releaseDate
        };

        return [resultItem];

    } catch (error) {
        console.error("随机推荐失败:", error);
        return [{ id: "error-random-fetch", type: "error", title: "获取随机推荐失败", description: error.message }];
    }
}

// 4. Soundtrack Search Links - MODIFIED
async function generateSoundtrackSearchLinks(params = {}) {
    const title = params.title;
    const selectedPlatform = params.platforms || 'all'; // 'all', 'netease', 'qq', 'apple', 'spotify'

    if (!title) {
        return [{ id: "error-soundtrack-notitle", type: "error", title: "请输入影视标题" }];
    }

    const encodedTitle = encodeURIComponent(title);
    const encodedTitleWithOst = encodeURIComponent(title + " 原声带"); // Common suffix for Chinese searches
    const encodedTitleWithSoundtrack = encodeURIComponent(title + " Soundtrack"); // Common suffix for English searches

    console.log(`为 \"${title}\" 生成原声带搜索链接 (平台: ${selectedPlatform})`);

    // Updated platformData with QQ Music and new order
    const platformData = {
        netease: {
            name: "网易云音乐",
            // type=1000 is for Album search
            searchUrl: `https://music.163.com/#/search/m/?s=${encodedTitleWithOst}&type=1000`,
            icon: "https://s1.music.126.net/style/favicon.ico"
        },
        qq: {
            name: "QQ音乐",
            // t=8 might be album search type for QQ Music web
            searchUrl: `https://y.qq.com/n/ryqq/search?w=${encodedTitleWithOst}&t=8`,
            icon: "https://y.qq.com/favicon.ico" // QQ Music favicon
        },
        apple: {
            name: "Apple Music",
            // Use Soundtrack suffix, search should handle OST too
            searchUrl: `https://music.apple.com/us/search?term=${encodedTitleWithSoundtrack}`,
            icon: "https://www.apple.com/favicon.ico"
        },
        spotify: {
            name: "Spotify",
            // Search for Album or Playlist, often includes 'Soundtrack' or 'OST'
            searchUrl: `https://open.spotify.com/search/${encodeURIComponent(title)}%20(Original%20Soundtrack)`, // More specific query
            icon: "https://open.spotifycdn.com/cdn/images/favicon32.b64ecc03.png"
        }
    };

    const urlItems = [];
    // Use the defined order for 'all'
    const platformOrder = ['netease', 'qq', 'apple', 'spotify'];
    const platformsToSearch = selectedPlatform === 'all'
        ? platformOrder
        : (platformData[selectedPlatform] ? [selectedPlatform] : []);

    platformsToSearch.forEach(platformKey => {
        const platform = platformData[platformKey];
        if (platform) {
            urlItems.push({
                id: `soundtrack-search-${platformKey}-${encodedTitle}`,
                type: "url",
                title: `在 ${platform.name} 搜索 \"${title}\" 原声带`,
                description: `跳转到 ${platform.name} 搜索结果`,
                previewUrl: platform.searchUrl,
                coverUrl: platform.icon || undefined
            });
        }
    });

    if (urlItems.length === 0 && selectedPlatform !== 'all') {
         return [{ id: `info-soundtrack-noplatform-${selectedPlatform}`, type: "info", title: "未知的平台", description: `不支持的平台选项: ${selectedPlatform}` }];
    } else if (urlItems.length === 0) {
        return [{ id: `error-soundtrack-noconfig`, type: "error", title: "无可用平台", description: "未能生成任何搜索链接" }];
    }

    console.log(`生成了 ${urlItems.length} 个原声带搜索链接`);
    return urlItems;
}

// --- END NEW FUNCTIONS V2 --- // Remove this comment if adding more functions below it later

// --- NEW FUNCTION: Load Douban Oscar Awards ---
async function loadDoubanOscarAwards(params = {}) {
    const sessionId = params.year; // Year param value is the session ID
    if (!sessionId) {
        throw new Error("请选择奥斯卡年份/届数");
    }

    const year = parseInt(sessionId) + 1928; // Calculate year for display/logging
    const url = `https://movie.douban.com/awards/Oscar/${sessionId}/nominees`;
    console.log(`开始获取第 ${sessionId} 届 (${year}年) 奥斯卡获奖名单: ${url}`);

    try {
        const response = await Widget.http.get(url, {
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
                "Referer": "https://movie.douban.com/awards/",
                // Requesting Chinese page as selectors are based on it
                "Accept-Language": "zh-CN,zh;q=0.9"
            }
        });

        if (!response || !response.data) {
            throw new Error(`获取第 ${sessionId} 届奥斯卡页面数据失败`);
        }

        const docId = Widget.dom.parse(response.data);
        if (docId < 0) {
            throw new Error(`解析第 ${sessionId} 届奥斯卡页面 HTML 失败`);
        }

        const awardSections = [];
        // Target specific award categories by their Chinese titles
        const targetCategories = ["最佳影片", "最佳导演", "最佳男主角", "最佳女主角"];
        const awardDivs = Widget.dom.select(docId, "div.awards"); // Select all award blocks

        console.log(`找到 ${awardDivs.length} 个奖项区块`);

        for (const awardDivId of awardDivs) {
            const categoryTitleElement = Widget.dom.selectFirst(awardDivId, "h4");
            if (categoryTitleElement < 0) continue;

            const categoryTitleText = await Widget.dom.text(categoryTitleElement);
            let matchedCategory = null;

            // Check if this category is one we want
            for (const target of targetCategories) {
                if (categoryTitleText.includes(target)) {
                    matchedCategory = target; // Store the matched Chinese name
                    break;
                }
            }

            if (!matchedCategory) {
                 // console.log(`Skipping category: ${categoryTitleText}`);
                continue; // Skip categories we are not interested in
            }

            console.log(`Processing category: ${categoryTitleText}`);
            const itemsListElement = Widget.dom.selectFirst(awardDivId, "ul"); // Find the ul list following h4
             if (itemsListElement < 0) {
                 console.warn(`Category ${categoryTitleText} has no UL element?`);
                 continue;
             }

            const nominees = Widget.dom.select(itemsListElement, "li"); // Select all nominees/winners
            const categoryItems = [];

            console.log(`Found ${nominees.length} items in category ${matchedCategory}`);

            for (const nomineeId of nominees) {
                 try {
                     const picLinkElement = Widget.dom.selectFirst(nomineeId, "div.pic a");
                     const infoTitleElement = Widget.dom.selectFirst(nomineeId, "div.info h4 a"); // Changed selector based on inspection
                     const infoDetailsElement = Widget.dom.selectFirst(nomineeId, "div.info p");
                     const winnerSpanElement = Widget.dom.selectFirst(nomineeId, "span.award"); // Check for winner span

                    if (picLinkElement < 0 || infoTitleElement < 0) {
                         console.warn("Skipping nominee item due to missing link or title element.");
                         continue;
                     }

                    const link = await Widget.dom.attr(picLinkElement, "href");
                    const title = await Widget.dom.text(infoTitleElement);
                    const details = infoDetailsElement >= 0 ? await Widget.dom.text(infoDetailsElement) : "";
                    const isWinner = winnerSpanElement >= 0;

                    let coverUrl = undefined;
                    const imgElement = Widget.dom.selectFirst(picLinkElement, "img");
                    if (imgElement >= 0) {
                        coverUrl = await Widget.dom.attr(imgElement, "src");
                         if (coverUrl && coverUrl.startsWith("//")) {
                             coverUrl = "https:" + coverUrl;
                         }
                    }

                    // Extract ID (subject or personage)
                    let itemId = "";
                    let itemType = "douban"; // Default to douban subject
                    const subjectMatch = link.match(/douban\.com\/subject\/(\d+)/);
                    const personMatch = link.match(/douban\.com\/(?:personage|celebrity)\/(\d+)/);

                    if (subjectMatch && subjectMatch[1]) {
                        itemId = subjectMatch[1];
                    } else if (personMatch && personMatch[1]) {
                        itemId = personMatch[1];
                        itemType = "douban_person"; // Use a different type if needed, or stick to 'douban'
                    } else {
                         console.warn(`Could not extract ID from link: ${link}`);
                         itemId = link; // Use link as fallback ID if extraction fails
                         itemType = "url";
                    }

                    // Format description
                    let description = details.trim().replace(/\s*\/\s*/g, ' / '); // Clean up details string
                    if (isWinner) {
                        description = "[获奖] " + description;
                    }

                    categoryItems.push({
                        id: itemId,
                        type: itemType, // Use 'douban' or distinguish person
                        title: title.trim(),
                        coverUrl: coverUrl,
                        description: description.trim() || (isWinner ? "[获奖]" : "提名"), // Add fallback description
                        // Add previewUrl if it's a person link to allow opening the person page?
                         previewUrl: itemType === "douban_person" || itemType === "url" ? link : undefined,
                        // No rating or release date available directly here
                    });
                 } catch (itemError) {
                     console.error(`Error processing nominee item in category ${matchedCategory}:`, itemError);
                 }
            } // End loop through nominees

            if (categoryItems.length > 0) {
                 awardSections.push({
                     title: categoryTitleText, // Use the full category title with English name
                     items: categoryItems
                 });
            }

        } // End loop through awardDivs

        if (awardSections.length === 0) {
             console.log(`未能在第 ${sessionId} 届奥斯卡页面找到目标奖项数据`);
            return [{ title: "无数据", items: [{ id: `no-data-oscar-${sessionId}`, type: "info", title: "未找到奖项数据", description: "可能页面结构已更改或该届无数据。" }] }];
        }

        console.log(`成功解析 ${awardSections.length} 个奥斯卡奖项分类`);
        return awardSections;

    } catch (error) {
        console.error(`加载第 ${sessionId} 届豆瓣奥斯卡获奖名单失败:`, error);
        // Return an error section
        return [{ title: "加载失败", items: [{ id: `error-oscar-${sessionId}`, type: "error", title: "加载奥斯卡数据失败", description: error.message }] }];
    }
}