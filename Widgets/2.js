// --- START OF COMBINED WIDGET FILE ---

WidgetMetadata = {
  id: "forward.combined.media.lists",
  title: "影视榜单🔍超级聚合",
  description: "聚合豆瓣、TMDB、IMDB和Bangumi的电影、剧集、动画片单与榜单",
  author: "阿米诺斯",
  site: "https://github.com/quantumultxx/FW-Widgets",
  version: "2.0.0",
  requiredVersion: "0.0.1",
  modules: [
    // ==================== 豆瓣模块 ====================
    // --- 🔥 实时热点 ---
    {
      title: "🔥 豆瓣电影实时热榜",
      description: "来自豆瓣的当前热门电影榜单",
      requiresWebView: false,
      functionName: "loadDoubanItemsFromApi",
      params: [
        { name: "page", title: "📄 页码", type: "page", description:"加载第几页" },
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
        { name: "page", title: "📄 页码", type: "page", description:"加载第几页" },
        { name: "limit", title: "🔢 每页数量", type: "constant", value: "20" },
        { name: "url", title: "🔗 列表地址", type: "constant", value: "https://m.douban.com/rexxar/api/v2/subject_collection/tv_real_time_hotest/items" },
        { name: "type", title: "🎭 类型", type: "constant", value: "tv" },
      ],
    },

    // --- 🏆 精选榜单 ---
    {
      title: "📚 豆瓣 Top 250 电影",
      description: "豆瓣评分最高的 250 部电影",
      requiresWebView: false,
      functionName: "loadDoubanCardItems",
      params: [
        { name: "url", title: "🔗 列表地址", type: "constant", value: "https://m.douban.com/subject_collection/movie_top250" },
        { name: "page", title: "📄 页码", type: "page", description:"加载第几页" },
        { name: "limit", title: "🔢 每页数量", type: "constant", value: "20" },
      ],
    },
    {
      title: "🏆 豆瓣一周国内综艺",
      description: "来自豆瓣的国内综艺周榜",
      requiresWebView: false,
      functionName: "loadDoubanCardItems",
      params: [
        { name: "url", title: "🔗 列表地址", type: "constant", value: "https://m.douban.com/subject_collection/show_chinese_best_weekly" },
        { name: "page", title: "📄 页码", type: "page", description:"加载第几页" }
      ]
    },
    {
      title: "🌏 豆瓣一周国外综艺",
      description: "来自豆瓣的全球综艺周榜",
      requiresWebView: false,
      functionName: "loadDoubanCardItems",
      params: [
        { name: "url", title: "🔗 列表地址", type: "constant", value: "https://m.douban.com/subject_collection/show_global_best_weekly" },
        { name: "page", title: "📄 页码", type: "page", description:"加载第几页" }
      ]
    },
    {
      title: "📚 豆瓣自定义片单＆榜单",
      description: "加载豆瓣官方榜单或用户豆列 (需输入 URL)",
      requiresWebView: false,
      functionName: "loadDoubanCardItems",
      params: [
        {
          name: "url", title: "🔗 列表地址", type: "input", description: "输入豆瓣片单或榜单地址 (subject_collection 或 doulist)",
          placeholders: [
            { title: "一周电影口碑榜", value: "https://m.douban.com/subject_collection/movie_weekly_best" },
            { title: "一周华语口碑剧集榜", value: "https://m.douban.com/subject_collection/tv_chinese_best_weekly" },
            { title: "一周全球口碑剧集榜", value: "https://m.douban.com/subject_collection/tv_global_best_weekly" },
            { title: "第97届奥斯卡 (2025)", value: "https://m.douban.com/subject_collection/EC7I7ZDRA?type=rank" },
            { title: "豆瓣电影测试豆列", value: "https://www.douban.com/doulist/155718871/" }
          ]
        },
        { name: "page", title: "📄 页码", type: "page", description:"加载第几页" },
        { name: "limit", title: "🔢 每页数量", type: "constant", value: "20" },
      ],
    },

    // --- 🎬 探索发现 ---
    {
      title: "👍 豆瓣电影推荐",
      description: "按分类、地区、类型标签浏览豆瓣推荐电影",
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
                {title: "纪录片", value: "纪录片"}, {title: "剧情", value: "剧情"}, {title: "家庭", value: "家庭"}, 
                {title: "犯罪", value: "犯罪"}, {title: "歌舞", value: "歌舞"}, {title: "传记", value: "传记"}, 
                {title: "冒险", value: "冒险"}, {title: "武侠", value: "武侠"}, {title: "运动", value: "运动"}, 
                {title: "古装", value: "古装"}, {title: "同性", value: "同性"}
            ]
        },
        { name: "page", title: "📄 页码", type: "page", description:"加载第几页" },
        { name: "limit", title: "🔢 每页数量", type: "constant", value: "20" }
      ],
    },
    {
      title: "👍 豆瓣剧集推荐",
      description: "按分类、类型浏览豆瓣推荐剧集/综艺",
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
        { name: "page", title: "📄 页码", type: "page", description:"加载第几页" },
        { name: "limit", title: "🔢 每页数量", type: "constant", value: "20" }
      ],
    },

    // ==================== TMDB 模块 ====================
    // --- 当前与趋势模块 ---
    {
        title: "🎬 TMDB 正在热映",
        description: "当前影院或流媒体上映的电影/剧集",
        requiresWebView: false,
        functionName: "tmdbNowPlaying",
        params: [
            { 
                name: "type", 
                title: "类型", 
                type: "enumeration", 
                enumOptions: [
                    { title: "电影", value: "movie" },
                    { title: "剧集", value: "tv" }
                ], 
                value: "movie" 
            },
            { name: "page", title: "页码", type: "page" },
            { name: "language", title: "语言", type: "language", value: "zh-CN" }
        ]
    },
    {
        title: "📈 TMDB 本日热门",
        description: "今日热门电影与剧集",
        requiresWebView: false,
        functionName: "tmdbTrending",
        params: [
            { name: "time_window", title: "时间", type: "constant", value: "day" },
            { name: "language", title: "语言", type: "constant", value: "zh-CN" },
            { name: "page", title: "页码", type: "page" }
        ]
    },
    {
        title: "📊 TMDB 本周热门",
        description: "本周热门电影与剧集",
        requiresWebView: false,
        functionName: "tmdbTrending",
        params: [
            { name: "time_window", title: "时间", type: "constant", value: "week" },
            { name: "language", title: "语言", type: "constant", value: "zh-CN" },
            { name: "page", title: "页码", type: "page" }
        ]
    },

    // --- 常规发现模块 ---
    {
        title: "🔥 TMDB 热门内容",
        description: "当前流行的电影或剧集 (按热度排序)",
        requiresWebView: false,
        functionName: "tmdbPopular",
        params: [
            { 
                name: "type", 
                title: "类型", 
                type: "enumeration", 
                enumOptions: [
                    { title: "电影", value: "movie" },
                    { title: "剧集", value: "tv" }
                ], 
                value: "movie" 
            },
            { name: "language", title: "语言", type: "constant", value: "zh-CN" },
            { name: "page", title: "页码", type: "page" }
        ]
    },
    {
        title: "⭐ TMDB 高分内容",
        description: "高分电影或剧集 (按用户评分排序)",
        requiresWebView: false,
        functionName: "tmdbTopRated",
        params: [
            { 
                name: "type", 
                title: "类型", 
                type: "enumeration", 
                enumOptions: [
                    { title: "电影", value: "movie" },
                    { title: "剧集", value: "tv" }
                ], 
                value: "movie" 
            },
            { name: "language", title: "语言", type: "language", value: "zh-CN" },
            { name: "page", title: "页码", type: "page" }
        ]
    },

    // --- 平台筛选模块 ---
    {
        title: "📺 TMDB 平台类型筛选",
        description: "按播出平台和内容类型筛选剧集内容",
        requiresWebView: false,
        functionName: "tmdbDiscoverByNetwork",
        params: [
            {
                name: "with_networks",
                title: "播出平台",
                type: "enumeration",
                description: "选择一个平台以查看其剧集内容",
                value: "2007",
                enumOptions: [
                    { title: "腾讯视频", value: "2007" },
                    { title: "爱奇艺", value: "1330" },
                    { title: "优酷", value: "1419" },
                    { title: "哔哩哔哩", value: "1605" },
                    { title: "芒果TV", value: "1631" },
                    { title: "Netflix", value: "213" },
                    { title: "Disney+", value: "2739" },
                    { title: "Max", value: "3186" },
                    { title: "Apple TV+", value: "2552" },
                    { title: "Hulu", value: "453" },
                    { title: "HBO", value: "49" },
                    { title: "Prime Video", value: "1024" },
                    { title: "FOX", value: "19" },
                    { title: "派拉蒙", value: "576" },
                    { title: "Paramount+", value: "4330" },
                    { title: "东京电视台", value: "94" },
                    { title: "BBC One", value: "332" },
                    { title: "BBC Two", value: "295" },
                    { title: "NBC", value: "6" },
                    { title: "AMC+", value: "4281" }
                ]
            },
            {
                name: "with_genres",
                title: "🎬 内容类型",
                type: "enumeration",
                description: "选择要筛选的内容类型",
                value: "",
                enumOptions: [
                    { title: "全部类型", value: "" },
                    { title: "动作", value: "28" },
                    { title: "冒险", value: "12" },
                    { title: "动画", value: "16" },
                    { title: "喜剧", value: "35" },
                    { title: "犯罪", value: "80" },
                    { title: "纪录片", value: "99" },
                    { title: "剧情", value: "18" },
                    { title: "家庭", value: "10751" },
                    { title: "悬疑", value: "9648" },
                    { title: "爱情", value: "10749" },
                    { title: "科幻", value: "878" },
                    { title: "惊悚", value: "53" },
                    { title: "战争", value: "10752" },
                    { title: "武侠", value: "37" }
                ]
            },
            { name: "page", title: "页码", type: "page" },
            { name: "language", title: "语言", type: "language", value: "zh-CN" }
        ]
    },

    // --- 高级筛选模块 ---
    {
        title: "📆 TMDB 即将上映",
        description: "即将上映的电影 (可筛选)",
        requiresWebView: false,
        functionName: "tmdbUpcomingMovies",
        params: [
            { name: "language", title: "语言", type: "language", value: "zh-CN" },
            { 
                name: "primary_release_date.gte", 
                title: "起始日期 (含)", 
                type: "input", 
                description: "格式：YYYY-MM-DD（默认今天）", 
                value: "",
                placeholder: "例：2023-12-31"
            },
            { 
                name: "primary_release_date.lte", 
                title: "结束日期 (含)", 
                type: "input", 
                description: "格式：YYYY-MM-DD（可选）", 
                value: "",
                placeholder: "例：2024-05-01"
            },
            { 
                name: "with_release_type", 
                title: "发行渠道", 
                type: "enumeration", 
                description: "选择发行渠道（多选用逗号分隔）", 
                value: "2,3",
                enumOptions: [ 
                    { title: "影院上映 (优先)", value: "2,3" },
                    { title: "全部渠道", value: "" }, 
                    { title: "数字发行", value: "4" }, 
                    { title: "实体发行", value: "5" }, 
                    { title: "电视播出", value: "6" }
                ] 
            },
            { 
                name: "with_genres", 
                title: "类型筛选", 
                type: "enumeration", 
                description: "选择电影类型", 
                value: "",
                enumOptions: [ 
                    { title: "任意类型", value: "" }, 
                    { title: "动作", value: "28" }, 
                    { title: "冒险", value: "12" },
                    { title: "动画", value: "16" }, 
                    { title: "喜剧", value: "35" }, 
                    { title: "犯罪", value: "80" },
                    { title: "纪录", value: "99" }, 
                    { title: "剧情", value: "18" }, 
                    { title: "家庭", value: "10751" },
                    { title: "悬疑", value: "9648" }, 
                    { title: "爱情", value: "10749" },
                    { title: "科幻", value: "878" }, 
                    { title: "战争", value: "10752" },
                    { title: "西部", value: "37" }, 
                    { title: "电视电影", value: "10770" }
                ] 
            },
            { 
                name: "vote_average.gte", 
                title: "最低评分", 
                type: "input", 
                description: "输入0-10之间的数字（如7）", 
                value: "",
                placeholder: "0-10"
            },
            { 
                name: "vote_count.gte", 
                title: "最少评价数", 
                type: "input", 
                description: "输入最小评价数量", 
                value: "",
                placeholder: "如：100"
            },
            { 
                name: "with_keywords", 
                title: "关键词", 
                type: "input", 
                description: "英文关键词（如'superhero'）", 
                value: "",
                placeholder: "多个用逗号分隔"
            },
            { name: "page", title: "页码", type: "page" }
        ]
    },

    // ==================== IMDB 模块 ====================
    {
      title: "💯 IMDb Top 250 电影",
      description: "IMDb 用户评分最高的 250 部电影",
      requiresWebView: false,
      functionName: "loadImdbCardItems",
      params: [
        { name: "url", title: "🔗 列表地址", type: "constant", value: "https://www.imdb.com/chart/top/?ref_=nv_mv_250" },
        { name: "page", title: "📄 页码", type: "page", description:"加载第几页" },
        { name: "limit", title: "🔢 每页数量", type: "constant", value: "20" },
      ],
    },
    {
      title: "💯 IMDb Top 250 剧集",
      description: "IMDb 用户评分最高的 250 部剧集",
      requiresWebView: false,
      functionName: "loadImdbCardItems",
      params: [
        { name: "url", title: "🔗 列表地址", type: "constant", value: "https://www.imdb.com/chart/toptv/?ref_=nv_tvv_250" },
        { name: "page", title: "📄 页码", type: "page", description:"加载第几页" },
        { name: "limit", title: "🔢 每页数量", type: "constant", value: "20" },
      ],
    },
    {
      title: "💯 IMDB 自定义榜单",
      description: "解析 IMDB 热门电影/剧集等网页片单 (需输入 URL)",
      requiresWebView: false,
      functionName: "loadImdbCardItems",
      params: [
        {
          name: "url", title: "🔗 列表地址", type: "input", description: "输入 IMDB 片单或榜单地址",
          placeholders: [
            { title: "时下热门电影", value: "https://www.imdb.com/chart/moviemeter/?ref_=nv_mv_mpm"},
            { title: "时下热门剧集", value: "https://www.imdb.com/chart/tvmeter/?ref_=nv_tvv_mptv"}
          ],
        },
        { name: "page", title: "📄 页码", type: "page", description:"加载第几页" },
        { name: "limit", title: "🔢 每页数量", type: "constant", value: "20" },
      ],
    },

    // ==================== Bangumi 模块 ====================
    // --- 🌸 动漫专区 ---
    {
        title: "🥇 Bangumi 动画总排行",
        description: "按排名浏览 Bangumi 动画 (基于评分)",
        requiresWebView: false,
        functionName: "loadBangumiRankings",
        params: [
             { name: "page", title: "📄 页码", type: "page", description:"加载第几页" }
        ]
    },
    {
        title: "🏷️ Bangumi 动画筛选浏览",
        description: "按标签、年份、类型、题材、地区、受众筛选 Bangumi 动画",
        requiresWebView: false,
        functionName: "loadBangumiBrowser",
        params: [
            { name: "tag", title: "#️⃣ 标签 (可选)", type: "input", description: "输入单个标签, 如 漫画改, 轻小说改...", value: "", placeholders: [{title:"例如：漫画改", value:"漫画改"}, {title:"原创", value:"原创"}] },
            { name: "genre_tag", title: "🎭 题材", type: "enumeration", description: "选择动画题材", value: "", enumOptions: [
                { title: "全部", value: "" }, { title: "科幻", value: "科幻" }, { title: "喜剧", value: "喜剧" }, { title: "校园", value: "校园" }, { title: "战斗", value: "战斗" }, { title: "恋爱", value: "恋爱" }, { title: "剧情", value: "剧情" }, { title: "日常", value: "日常" }, { title: "机战", value: "机战" }, { title: "运动", value: "运动" }, { title: "悬疑", value: "悬疑" }, { title: "音乐", value: "音乐" }, { title: "治愈", value: "治愈" }, { title: "百合", value: "百合" }, { title: "后宫", value: "后宫" }, { title: "推理", value: "推理" }, { title: "耽美", value: "耽美" }, { title: "冒险", value: "冒险" }, { title: "萌系", value: "萌系" }, { title: "穿越", value: "穿越" }, { title: "玄幻", value: "玄幻" }, { title: "乙女", value: "乙女" }, { title: "历史", value: "历史" }, { title: "武侠", value: "武侠" }, { title: "美食", value: "美食" }, { title: "职场", value: "职场" }
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
             { name: "page", title: "📄 页码", type: "page", description:"加载第几页" }
        ]
    }
  ]
};

// --- Helper Functions ---
function formatItemDescription(item) {
    let description = item.description || '';
    const hasRating = /评分|rating/i.test(description);
    const hasYear = /年份|year/i.test(description);
    
    // 智能添加评分信息
    if (item.rating && !hasRating) {
        description = `评分: ${item.rating} | ${description}`;
    }
    
    // 智能添加年份信息
    if (item.releaseDate && !hasYear) {
        const year = String(item.releaseDate).substring(0,4);
        if (/^\d{4}$/.test(year)) {
            description = `年份: ${year} | ${description}`;
        }
    }
    
    // 清理多余分隔符
    return description
        .replace(/^\|\s*/, '')
        .replace(/\s*\|$/, '')
        .trim();
}

function createErrorItem(id, title, error) {
    const errorMessage = String(error?.message || error || '未知错误');
    const uniqueId = `error-${id.replace(/[^a-zA-Z0-9]/g, '-')}-${Date.now()}`;
    return {
        id: uniqueId,
        type: "error",
        title: title || "加载失败",
        description: `错误详情：${errorMessage}`
    };
}

function calculatePagination(params) {
    let page = parseInt(params.page) || 1;
    const limit = parseInt(params.limit) || 20;
    
    // 兼容旧版start参数
    if (typeof params.start !== 'undefined') {
        page = Math.floor(parseInt(params.start) / limit) + 1;
    }
    
    if (page < 1) page = 1;
    if (limit > 50) throw new Error("单页数量不能超过50");

    const start = (page - 1) * limit;
    return { page, limit, start };
}

// --- Douban Functions ---
async function loadDoubanCardItems(params = {}) {
  try {
    console.log("开始解析豆瓣片单...");
    console.log("参数:", params);
    const url = params.url;
    if (!url) throw new Error("缺少片单 URL");

    if (url.includes("douban.com/doulist/")) {
      return loadDoubanDefaultList(params);
    } else if (url.includes("douban.com/subject_collection/")) {
      return loadDoubanSubjectCollection(params);
    } else {
        throw new Error("不支持的豆瓣 URL 格式");
    }
  } catch (error) {
    console.error("解析豆瓣片单失败:", error);
    throw error;
  }
}
async function loadDoubanDefaultList(params = {}) {
  const { start, limit } = calculatePagination(params);
  const url = params.url;
  const listId = url.match(/doulist\/(\d+)/)?.[1];
  console.debug("豆瓣豆列 ID:", listId);
  if (!listId) throw new Error("无法从 URL 获取豆瓣豆列 ID");

  const pageUrl = `https://www.douban.com/doulist/${listId}/?start=${start}&sort=&playable=&sub_type=`;
  console.log("请求豆瓣豆列页面:", pageUrl);

  const response = await Widget.http.get(pageUrl, {
    headers: {
      Referer: `https://www.douban.com/`,
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
    },
  });

  if (!response || !response.data) throw new Error("获取豆瓣豆列数据失败");
  console.log("豆瓣豆列页面数据长度:", response.data.length);

  const docId = Widget.dom.parse(response.data);
  if (docId < 0) throw new Error("解析豆瓣豆列 HTML 失败");

  const itemElements = Widget.dom.select(docId, "div.doulist-item");
  console.log("找到项目元素数量 (.doulist-item):", itemElements.length);

  let fallbackItemElements = [];
  if (!itemElements || itemElements.length === 0) {
       const articleElement = Widget.dom.selectFirst(docId, ".article");
       if (articleElement >= 0) {
            fallbackItemElements = Widget.dom.select(articleElement, ".doulist-subject");
            console.log("未找到 .doulist-item, 尝试查找 .doulist-subject: ", fallbackItemElements.length);
             if (!fallbackItemElements || fallbackItemElements.length === 0) {
                 fallbackItemElements = Widget.dom.select(articleElement, "li.subject-item");
                 console.log("未找到 .doulist-subject, 尝试查找 li.subject-item: ", fallbackItemElements.length);
             }
       }
  }

  const finalItemElements = (itemElements && itemElements.length > 0) ? itemElements : fallbackItemElements;

  if (!finalItemElements || finalItemElements.length === 0) {
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
       let titleElementId = Widget.dom.selectFirst(itemId, ".title a");
       if (titleElementId < 0) {
           titleElementId = Widget.dom.selectFirst(itemId, ".item-title a");
       }
       if (titleElementId < 0) {
           titleElementId = Widget.dom.selectFirst(itemId, "a[onclick*='subject']");
       }

      if (titleElementId >= 0) {
          const link = await Widget.dom.attr(titleElementId, "href");
          const idMatch = link ? link.match(/subject\/(\d+)/) : null;
          const title = await Widget.dom.text(titleElementId);

          if (idMatch && idMatch[1]) {
              let coverUrl = "";
              let imgElementId = Widget.dom.selectFirst(itemId, ".post img");
              if (imgElementId < 0) {
                 imgElementId = Widget.dom.selectFirst(itemId, ".item-poster img");
              }
              if (imgElementId >= 0) {
                  coverUrl = await Widget.dom.attr(imgElementId, "src");
                   if (coverUrl) {
                       coverUrl = coverUrl.replace(/\/(s|m|sq)\//, '/l/');
                   }
              }

              let description = "";
              let abstractElementId = Widget.dom.selectFirst(itemId, ".abstract");
              if (abstractElementId < 0) {
                  abstractElementId = Widget.dom.selectFirst(itemId, ".card-abstract");
              }
               if (abstractElementId >= 0) {
                   description = await Widget.dom.text(abstractElementId);
                   description = description.trim().replace(/\n\s*/g, ' ');
               }

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

async function loadDoubanItemsFromApi(params = {}) {
  const { start, limit } = calculatePagination(params);
  const url = params.url;
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
          releaseDate: item.year
      }),
      rating: item.rating?.value,
      releaseDate: item.year
    }));
    return doubanIds;
  }
  return [];
}

async function loadDoubanSubjectCollection(params = {}) {
  const listIdMatch = params.url.match(/subject_collection\/(\w+)/);
  console.debug("豆瓣合集 ID:", listIdMatch ? listIdMatch[1] : "未知");
  if (!listIdMatch) throw new Error("无法从 URL 获取豆瓣合集 ID");

  const listId = listIdMatch[1];
  const { start, limit } = calculatePagination(params);
  const apiUrl = `https://m.douban.com/rexxar/api/v2/subject_collection/${listId}/items`;

  return await loadDoubanItemsFromApi({
      ...params,
      url: apiUrl,
  });
}

async function loadDoubanRecommendMovies(params = {}) {
  return await loadDoubanRecommendItems(params, "movie");
}

async function loadDoubanRecommendShows(params = {}) {
  return await loadDoubanRecommendItems(params, "tv");
}

async function loadDoubanRecommendItems(params = {}, mediaType = "movie") {
  const funcName = "loadDoubanRecommendItems";
  const { start, limit } = calculatePagination(params);
  const category = params.category || "";
  const subType = params.type || "";
  const tags = params.tags || "";
  const minYear = params.min_year || "";
  const maxYear = params.max_year || "";

  let url;
  const encodedTags = encodeURIComponent(tags);
  const encodedSelectedCategories = encodeURIComponent(JSON.stringify(params.selected_categories || {}));

  if (category === "全部" || category === "all") {
      let recommendUrl = `https://m.douban.com/rexxar/api/v2/${mediaType}/recommend?refresh=0&start=${start}&count=${limit}&selected_categories=${encodedSelectedCategories}&uncollect=false&score_range=0,10`;
      if (encodedTags) {
          recommendUrl += `&tags=${encodedTags}`;
      }
      let yearRange = "";
      if (minYear && /\d{4}/.test(minYear)) {
          yearRange += minYear;
      }
      yearRange += ",";
      if (maxYear && /\d{4}/.test(maxYear)) {
          yearRange += maxYear;
      }
      if (yearRange !== ",") {
         if (yearRange.startsWith(",") && yearRange.length > 1) yearRange = yearRange.substring(1);
         if (yearRange.endsWith(",") && yearRange.length > 1) yearRange = yearRange.substring(0, yearRange.length - 1);

         if(yearRange && yearRange !== ",") {
            recommendUrl += `&year_range=${yearRange}`;
         }
      }

      url = recommendUrl;
  } else {
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

      const items = response.data?.subjects
                 || response.data?.items
                 || response.data?.modules?.[0]?.data?.subject_collection_items
                 || [];

      if (items && items.length > 0) {
          if (!Array.isArray(items)) throw new Error("推荐 API 返回的项目不是数组");

          const results = items.map((item) => {
            if (!item || !item.id || !item.title) {
                console.warn("[Douban Recommend] 跳过无效项目 (缺少 id 或 title):", item);
                return null;
            }
            const rating = item.rating?.value || (item.rate ? parseFloat(item.rate) : undefined);
            const releaseYear = item.year || item.release_date?.substring(0, 4);
            const cover = item.cover?.url || item.pic?.normal;

            return {
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
        }).filter(item => item !== null);

         console.log(`[Douban Recommend] 成功解析并过滤得到 ${results.length} 个有效条目`);
         if (results.length === 0 && items.length > 0) {
             console.warn("[Douban Recommend] API 返回了项目但未能成功映射或过滤任何有效条目，检查 API 结构或映射逻辑。")
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

// === TMDB Functions ===
async function fetchTmdbData(api, params) {
    try {
        const tmdbParams = { ...params };
        delete tmdbParams.type;
        delete tmdbParams.time_window;

        const response = await Widget.tmdb.get(api, { params: tmdbParams });
        
        if (!response?.results) {
            throw new Error(response?.status_message || "无效的API响应格式");
        }

        return response.results.map(item => {
            const isMovie = api.includes('movie') || item.media_type === 'movie';
            const mediaType = isMovie ? 'movie' : 'tv';
            
            return {
                id: item.id,
                type: "tmdb",
                mediaType: mediaType,
                title: isMovie ? item.title : item.name,
                description: formatItemDescription({
                    description: item.overview,
                    rating: item.vote_average ? (item.vote_average / 2).toFixed(1) : undefined,
                    releaseDate: isMovie ? item.release_date : item.first_air_date
                }),
                releaseDate: isMovie ? item.release_date : item.first_air_date,
                backdropPath: item.backdrop_path && `https://image.tmdb.org/t/p/w780${item.backdrop_path}`,
                posterPath: item.poster_path && `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                rating: item.vote_average ? (item.vote_average / 2).toFixed(1) : undefined
            };
        }).filter(item => item.id && item.title);

    } catch (error) {
        console.error(`API调用失败: ${api}`, error);
        return [createErrorItem(api, '数据加载失败', error)];
    }
}

async function tmdbNowPlaying(params) {
    const type = params.type || 'movie';
    const api = type === 'movie' ? "movie/now_playing" : "tv/on_the_air";
    return await fetchTmdbData(api, params);
}

async function tmdbTrending(params) {
    const timeWindow = params.time_window || 'day';
    const api = `trending/all/${timeWindow}`;
    return await fetchTmdbData(api, params);
}

async function tmdbPopular(params) {
    const type = params.type || 'movie';
    const api = type === 'movie' ? `movie/popular` : `tv/popular`;
    return await fetchTmdbData(api, params);
}

async function tmdbTopRated(params) {
    const type = params.type || 'movie';
    const api = type === 'movie' ? `movie/top_rated` : `tv/top_rated`;
    return await fetchTmdbData(api, params);
}

async function tmdbUpcomingMovies(params) {
    const api = "discover/movie";
    const getTodayDate = () => {
        const today = new Date();
        return today.toISOString().split('T')[0];
    };
    
    const discoverParams = {
        language: params.language || 'zh-CN',
        page: params.page || 1,
        sort_by: 'primary_release_date.asc',
        'primary_release_date.gte': params['primary_release_date.gte'] || getTodayDate(),
        with_release_type: params.with_release_type || '2,3'
    };

    // 可选参数处理
    if (params['primary_release_date.lte']) discoverParams['primary_release_date.lte'] = params['primary_release_date.lte'];
    if (params.with_genres) discoverParams.with_genres = params.with_genres;
    if (params['vote_average.gte']) discoverParams['vote_average.gte'] = params['vote_average.gte'];
    if (params['vote_count.gte']) discoverParams['vote_count.gte'] = params['vote_count.gte'];
    if (params.with_keywords) discoverParams.with_keywords = params.with_keywords;

    return await fetchTmdbData(api, discoverParams);
}

async function tmdbDiscoverByNetwork(params) {
    const api = "discover/tv";
    if (!params.with_networks) {
        return [createErrorItem('network-filter', '参数错误', new Error('请先选择播出平台'))];
    }

    const discoverParams = {
        language: params.language || 'zh-CN',
        page: params.page || 1,
        with_networks: params.with_networks,
        ...(params.with_genres && { with_genres: params.with_genres })
    };

    return await fetchTmdbData(api, discoverParams);
}

// === IMDB Functions ===
async function loadImdbCardItems(params = {}) {
  const url = params.url;
  if (!url) throw new Error("缺少 IMDB 片单 URL");
  console.log("请求 IMDB 页面:", url);

  const response = await Widget.http.get(url, {
    headers: {
      Referer: "https://www.imdb.com/",
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
      "Accept-Language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7",
    },
  });
  if (!response || !response.data) throw new Error("获取 IMDB 片单数据失败");
  console.log("IMDB 页面数据长度:", response.data.length);

  const videoIds = [];

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
                              title: item.item.name || "Unknown Title",
                              coverUrl: item.item.image || undefined,
                          });
                      }
                  }
              }
               console.log(`通过 LD+JSON 解析到 ${videoIds.length} 个条目`);
          }
      } catch (e) {
          console.warn("解析 LD+JSON 失败:", e);
      }
  }

  if (videoIds.length === 0) {
      console.log("LD+JSON 未找到或解析失败，尝试 HTML 抓取");
      const docId = Widget.dom.parse(response.data);
      if (docId < 0) throw new Error("解析 IMDB HTML 失败");

      const listItemsSelector = "ul.ipc-metadata-list > li, .lister-list > tr";
      const itemElementIds = Widget.dom.select(docId, listItemsSelector);

      console.log("找到列表项元素数量:", itemElementIds.length);

      for (const itemId of itemElementIds) {
          let linkElementId = Widget.dom.selectFirst(itemId, ".ipc-title__text, .titleColumn a");
          let link = "";
          let title = "";

          if (linkElementId >= 0) {
              const titleText = await Widget.dom.text(linkElementId);
              title = titleText ? titleText.replace(/^\d+\.\s*/, '').trim() : "Unknown Title";

              const titleLinkElementId = Widget.dom.selectFirst(itemId, "a.ipc-title-link-wrapper, .titleColumn a");
               if (titleLinkElementId >= 0) {
                   link = await Widget.dom.attr(titleLinkElementId, "href");
               }
          }

           if (!link) {
             const posterLinkElementId = Widget.dom.selectFirst(itemId, ".ipc-poster a, .posterColumn a");
              if (posterLinkElementId >= 0) {
                   link = await Widget.dom.attr(posterLinkElementId, "href");
                   if (!title) {
                       const imgElementId = Widget.dom.selectFirst(posterLinkElementId, "img");
                       if (imgElementId >= 0) title = await Widget.dom.attr(imgElementId, "alt");
                       if (!title) {
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
                      coverUrl = coverUrl.replace(/@\._V1_.*?\./, '@._V1_FMjpg_UX670_.');
                  }

                   let description = "";
                   let rating = undefined;
                   let rankText = "";
                   let year = undefined;

                   const infoElementId = Widget.dom.selectFirst(itemId, ".info.tip");
                   if(infoElementId >= 0) {
                       description = await Widget.dom.text(infoElementId);
                       const yearMatch = description.match(/(\d{4})(?:年|-)/);
                       if(yearMatch) year = yearMatch[1];
                       description = description.trim().replace(/\n\s*/g, ' | ');
                   }
                   const rankElementId = Widget.dom.selectFirst(itemId, ".rank");
                   if(rankElementId >= 0) rankText = await Widget.dom.text(rankElementId);

                   const ratingElement = Widget.dom.selectFirst(itemId, ".fade.rr");
                   if(ratingElement >= 0) {
                       rating = await Widget.dom.text(ratingElement);
                       rating = rating.trim();
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

  // 分页处理
  const { start, limit } = calculatePagination(params);
  const end = start + limit;
  const pagedVideoIds = videoIds.slice(start, end);

  console.log(`返回分页后的 ${pagedVideoIds.length} 项，起始位置 ${start}，每页 ${limit}`);
  return pagedVideoIds;
}

// === Bangumi Functions ===
async function loadBangumiRankings(params = {}) {
    const page = parseInt(params.page) || 1;
    const url = `https://bangumi.tv/anime/browser?sort=rank&page=${page}`;
    console.log("请求 Bangumi 动画排行页面:", url);

    try {
        const response = await Widget.http.get(url, {
             headers: {
                 "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
                 "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
                 "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
                 "Referer": "https://bangumi.tv/anime/browser"
             }
        });

        if (!response || !response.data) {
            throw new Error("获取 Bangumi 排行榜页面失败");
        }

        const docId = Widget.dom.parse(response.data);
        if (docId < 0) throw new Error("解析 Bangumi 排行榜 HTML 失败");

        const listItems = Widget.dom.select(docId, "#browserItemList li");
        console.log(`Bangumi 排行榜: 找到 ${listItems.length} 个列表项`);

        if (listItems.length === 0) {
            const nextLink = Widget.dom.selectFirst(docId, ".page_inner > .p_cur + a");
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

async function loadBangumiBrowser(params = {}) {
    const page = parseInt(params.page) || 1;
    const tag = params.tag || "";
    const genre_tag = params.genre_tag || "";
    const region = params.region || "";
    const audience = params.audience || "";
    const year = params.year || "";
    const type = params.type || "all";

    let basePath = "https://bangumi.tv/anime/browser";
    const pathSegments = [];
    const queryParams = [];

    if (tag) pathSegments.push(encodeURIComponent(tag));
    if (genre_tag) pathSegments.push(encodeURIComponent(genre_tag));
    if (region) pathSegments.push(encodeURIComponent(region));
    if (audience) pathSegments.push(encodeURIComponent(audience));
    if (type !== "all") pathSegments.push(type);
    if (year && /\d{4}/.test(year)) pathSegments.push("airtime", year);

    if (pathSegments.length > 0) {
        basePath += "/" + pathSegments.join("/");
    }

    queryParams.push(`sort=rank`);
    queryParams.push(`page=${page}`);

    const finalUrl = `${basePath}?${queryParams.join("&")}`;

    console.log("请求 Bangumi 动画浏览页面:", finalUrl);

    try {
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

// --- END OF COMBINED WIDGET FILE ---