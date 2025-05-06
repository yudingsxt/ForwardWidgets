// --- START OF COMBINED WIDGET FILE ---

WidgetMetadata = {
  id: "forward.combined.media.lists",
  title: "影视榜单🔍超级聚合",
  description: "聚合豆瓣、TMDB、IMDB和Bangumi的电影、剧集、动画片单与榜单",
  author: "阿米诺斯",
  site: "https://github.com/quantumultxx/FW-Widgets",
  version: "2.1.0",
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
                {title: "纪录片", value: "纪录片"}, {title: "惊悚", value: "惊悚"}, {title: "剧情", value: "剧情"}, 
                {title: "家庭", value: "家庭"}, {title: "战争", value: "战争"}, {title: "奇幻", value: "奇幻"}, 
                {title: "历史", value: "历史"}, {title: "恐怖", value: "恐怖"}, {title: "犯罪", value: "犯罪"}, 
                {title: "歌舞", value: "歌舞"}, {title: "传记", value: "传记"}, {title: "冒险", value: "冒险"}, 
                {title: "武侠", value: "武侠"}, {title: "运动", value: "运动"}, {title: "古装", value: "古装"}, 
                {title: "同性", value: "同性"}
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
        title: "📺 TMDB 播出平台+类型筛选",
        description: "按播出平台和内容类型组合筛选剧集",
        requiresWebView: false,
        functionName: "tmdbDiscoverByNetwork",
        params: [
            {
                name: "with_networks",
                title: "📺 播出平台",
                type: "enumeration",
                description: "选择一个播出平台",
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
                title: "🎭 内容类型",
                type: "enumeration",
                description: "选择要筛选的内容类型",
                value: "",
                enumOptions: [
                    { title: "全部类型", value: "" },
                    { title: "动作冒险", value: "10759" },
                    { title: "动画", value: "16" },
                    { title: "喜剧", value: "35" },
                    { title: "犯罪", value: "80" },
                    { title: "纪录片", value: "99" },
                    { title: "剧情", value: "18" },
                    { title: "家庭", value: "10751" },
                    { title: "奇幻", value: "14" },
                    { title: "历史", value: "36" },
                    { title: "恐怖", value: "27" },
                    { title: "爱情", value: "10749" },
                    { title: "科幻", value: "10765" },
                    { title: "悬疑", value: "9648" },
                    { title: "战争政治", value: "10768" },
                    { title: "西部", value: "37" }
                ]
            },
            {
                name: "sort_by",
                title: "🔀 排序方式",
                type: "enumeration",
                value: "popularity.desc",
                enumOptions: [
                    { title: "热门度⬇", value: "popularity.desc" },
                    { title: "评分⬇", value: "vote_average.desc" },
                    { title: "最新首播⬇", value: "first_air_date.desc" }
                ]
            },
            { name: "page", title: "📄 页码", type: "page" },
            { name: "language", title: "🌐 语言", type: "language", value: "zh-CN" }
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
                    { title: "奇幻", value: "14" }, 
                    { title: "历史", value: "36" }, 
                    { title: "恐怖", value: "27" },
                    { title: "音乐", value: "10402" }, 
                    { title: "悬疑", value: "9648" }, 
                    { title: "爱情", value: "10749" },
                    { title: "科幻", value: "878" }, 
                    { title: "惊悚", value: "53" }, 
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

// ...（此处保留所有中间函数实现，与之前提供的完全一致）...

// === 更新后的 TMDB 发现函数 ===
async function tmdbDiscoverByNetwork(params) {
    const api = "discover/tv";
    
    // 构建查询参数
    const discoverParams = {
        language: params.language || 'zh-CN',
        page: params.page || 1,
        with_networks: params.with_networks,
        ...(params.with_genres && { with_genres: params.with_genres }),
        ...(params.sort_by && { sort_by: params.sort_by })
    };

    // 添加中国区偏好设置
    if (["2007", "1330", "1419", "1605"].includes(params.with_networks)) {
        discoverParams.with_origin_country = "CN";
        discoverParams.with_original_language = "zh";
    }

    return await fetchTmdbData(api, discoverParams);
}

// ...（此处保留所有其他函数实现，与之前提供的完全一致）...

// --- END OF COMBINED WIDGET FILE ---