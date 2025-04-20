// --- START OF COMBINED WIDGET FILE ---

WidgetMetadata = {
  id: "forward.combined.media.lists",
  title: "榜单🔍聚合",
  description: "聚合豆瓣、TMDB、IMDB 和 Bangumi 的电影、剧集、动画片单与榜单",
  author: "阿米诺斯",
  site: "https://github.com/quantumultxx/FW-Widgets",
  version: "1.0.0",
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

    // --- 🏆 精选榜单 (Curated Charts) ---
    {
      title: "📚 豆瓣 Top 250 电影",
      description: "豆瓣评分最高的 250 部电影",
      requiresWebView: false,
      functionName: "loadDoubanCardItems",
      params: [
        { name: "url", title: "🔗 列表地址", type: "constant", value: "https://m.douban.com/subject_collection/movie_top250" },
        { name: "start", title: "▶️ 开始条目", type: "count", description:"从第几个条目开始加载" },
        { name: "limit", title: "🔢 每页数量", type: "constant", value: "20" },
      ],
    },
    {
      title: "💯 IMDb Top 250 电影",
      description: "IMDb 用户评分最高的 250 部电影",
      requiresWebView: false,
      functionName: "loadImdbCardItems",
      params: [
        { name: "url", title: "🔗 列表地址", type: "constant", value: "https://www.imdb.com/chart/top/?ref_=nv_mv_250" },
      ],
    },
    {
      title: "💯 IMDb Top 250 剧集",
      description: "IMDb 用户评分最高的 250 部剧集",
      requiresWebView: false,
      functionName: "loadImdbCardItems",
      params: [
        { name: "url", title: "🔗 列表地址", type: "constant", value: "https://www.imdb.com/chart/toptv/?ref_=nv_tvv_250" },
      ],
    },
     {
      title: "🏆 豆瓣一周国内综艺",
      description: "来自豆瓣的国内综艺周榜",
      requiresWebView: false,
      functionName: "loadDoubanCardItems",
      params: [
        { name: "url", title: "🔗 列表地址", type: "constant", value: "https://m.douban.com/subject_collection/show_chinese_best_weekly" },
        { name: "start", title: "▶️ 开始条目", type: "count", description:"从第几个条目开始加载" }
      ]
    },
    {
      title: "🌏 豆瓣一周国外综艺",
      description: "来自豆瓣的全球综艺周榜",
      requiresWebView: false,
      functionName: "loadDoubanCardItems",
      params: [
        { name: "url", title: "🔗 列表地址", type: "constant", value: "https://m.douban.com/subject_collection/show_global_best_weekly" },
        { name: "start", title: "▶️ 开始条目", type: "count", description:"从第几个条目开始加载" }
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
        { name: "start", title: "▶️ 开始条目", type: "count", description:"从第几个条目开始加载" },
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
      ],
    },
    {
      title: "✨ IMDB 编辑推荐",
      description: "通过 IMDB API 获取推荐列表 (可能需抓包)",
      requiresWebView: false,
      functionName: "loadImdbApiItems",
      params: [
        {
          name: "url", title: "🔗 API 地址", type: "input", description: "输入 IMDB GraphQL API 地址 (需从浏览器网络请求中捕获)",
          placeholders: [
            { title: "例如：用户最爱 (Fan Favorites)", value: '在此粘贴捕获的URL' },
            { title: "例如：热门选择 (Top Picks)", value: '在此粘贴捕获的URL' },
          ],
        },
      ],
    },

    // --- 🌸 动漫专区 (Anime Zone) ---
    {
        title: "🥇 Bangumi 动画总排行",
        description: "按排名浏览 Bangumi 动画 (基于评分)",
        requiresWebView: false,
        functionName: "loadBangumiRankings",
        params: [
             { name: "page", title: "📄 页码", type: "page" }
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
             { name: "page", title: "📄 页码", type: "page" }
        ]
    },
    {
      title: "🗓️ Bangumi 放送日历",
      description: "查看指定日期或整周的 Bangumi 动画放送安排",
      requiresWebView: false,
      functionName: "loadBangumiCalendarUnified",
      sectionMode: true,
      params: [
        {
            name: "viewType",
            title: "视图模式",
            type: "enumeration",
            description: "选择查看单日放送还是整周概览",
            value: "weekly",
            enumOptions: [
                { title: "整周视图 (按天分组)", value: "weekly" },
                { title: "指定单日", value: "daily" }
            ]
        },
        {
            name: "weekday",
            title: "🗓️ 选择星期",
            type: "enumeration",
            description: "选择要看的单日放送",
            value: "1",
            enumOptions: [
                { title: "周一 (Mon)", value: "1" },
                { title: "周二 (Tue)", value: "2" },
                { title: "周三 (Wed)", value: "3" },
                { title: "周四 (Thu)", value: "4" },
                { title: "周五 (Fri)", value: "5" },
                { title: "周六 (Sat)", value: "6" },
                { title: "周日 (Sun)", value: "0" }
            ],
            belongTo: {
                paramName: "viewType",
                value: ["daily"]
            }
        }
      ]
    },

    // --- 🎬 探索发现 (Explore & Discover) ---
    {
      title: "👍 TMDB 热门内容",
      description: "TMDB 当前流行的电影或剧集 (按热度排序)",
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
        { name: "language", title: "🌐 语言", type: "constant", value: "zh-CN" },
        { name: "page", title: "📄 页码", type: "page" }
      ]
    },
    {
      title: "✨ TMDB 热门人物",
      description: "TMDB 当前热门人物 (演员/导演等)",
      requiresWebView: false,
      functionName: "tmdbPopularPeople",
      params: [
        { name: "language", title: "🌐 语言", type: "constant", value: "zh-CN" },
        { name: "page", title: "📄 页码", type: "page" }
      ]
    },
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
        { name: "start", title: "▶️ 开始条目", type: "count", description:"从第几个条目开始加载" },
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
        { name: "start", title: "▶️ 开始条目", type: "count", description:"从第几个条目开始加载" },
        { name: "limit", title: "🔢 每页数量", type: "constant", value: "20" }
      ],
    },
    {
      title: "🤵 演员/导演搜索",
      description: "查找演员/导演及其代表作 (TMDB)",
      requiresWebView: false,
      functionName: "findPersonAndCredits",
      params: [
        { name: "name", title: "👤 名称", type: "input", description: "输入演员或导演的名字 (中文/英文)", value: "", placeholders:[{title:"例如：克里斯托弗·诺兰", value:"克里斯托弗·诺兰"}, {title:"基努·里维斯", value:"基努·里维斯"}] },
        { name: "language", title: "🌐 语言", type: "language", value: "zh-CN" }
      ]
    },
    {
      title: "⏳ TMDB 即将上映",
      description: "查看 TMDB 即将上映的电影 (可筛选)",
      requiresWebView: false,
      functionName: "tmdbUpcomingMovies",
      params: [
        { name: "language", title: "🌐 语言", type: "language", value: "zh-CN" },
        { 
            name: "primary_release_date.gte", 
            title: "🗓️ 起始日期 (含)", 
            type: "input", 
            description: "最早的上映日期 (格式 YYYY-MM-DD)，默认为今天", 
            value: ""
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
            value: "2|3",
            enumOptions: [
                { title: "影院上映 (优先)", value: "2|3" },
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
            enumOptions: [
                { title: "任意", value: "" }, { title: "动作", value: "28" }, { title: "冒险", value: "12" }, { title: "动画", value: "16" },
                { title: "喜剧", value: "35" }, { title: "犯罪", value: "80" }, { title: "纪录", value: "99" }, { title: "剧情", value: "18" },
                { title: "家庭", value: "10751" }, { title: "奇幻", value: "14" }, { title: "历史", value: "36" }, { title: "恐怖", value: "27" },
                { title: "音乐", value: "10402" }, { title: "悬疑", value: "9648" }, { title: "爱情", value: "10749" }, { title: "科幻", value: "878" },
                { title: "惊悚", value: "53" }, { title: "战争", value: "10752" }, { title: "西部", value: "37" },
                { title: "电视电影", value: "10770" }
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
      title: "🎲 今日看点啥",
      description: "根据条件随机推荐一部影视作品 (TMDB)",
      requiresWebView: false,
      functionName: "getRandomPick",
      params: [
        { name: "type", title: "🎭 类型", type: "enumeration", enumOptions: [{ title: "电影", value: "movie" }, { title: "剧集", value: "tv" }], value: "movie" },
        { name: "language", title: "🌐 语言", type: "language", value: "zh-CN" }
      ]
    },

    // --- 🔧 实用工具 (Utilities) ---
    {
      title: "🎧 OST搜索",
      description: "生成影视原声带在主流音乐平台的搜索链接",
      requiresWebView: false,
      functionName: "generateSoundtrackSearchLinks",
      params: [
        { name: "title", title: "🎬 影视标题", type: "input", description: "输入电影或剧集名称", value: "", placeholders:[{title:"例如：星际穿越", value:"星际穿越"}, {title:"沙丘", value:"沙丘"}] },
        {
          name: "platforms", title: "🎶 平台", type: "enumeration", description: "选择要搜索的音乐平台", value: "all",
          enumOptions: [
            { title: "全部", value: "all" }, { title: "网易云音乐", value: "netease" }, { title: "QQ音乐", value: "qq" },
            { title: "Apple Music", value: "apple" }, { title: "Spotify", value: "spotify" }
          ]
        }
      ]
    },
  ]
};

// --- Helper Functions ---
function formatItemDescription(item) {
    let description = item.description || '';
    if (item.rating) {
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
    return description.trim().replace(/^\|\s*/, '').replace(/\s*\|$/, '');
}

function createErrorItem(id, title, error) {
    return {
        id: id,
        type: "error",
        title: title,
        description: error.message || String(error)
    };
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
  const url = params.url;
  const listId = url.match(/doulist\/(\d+)/)?.[1];
  console.debug("豆瓣豆列 ID:", listId);
  if (!listId) throw new Error("无法从 URL 获取豆瓣豆列 ID");

  const start = params.start || 0;
  const limit = params.limit || 25;
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
  const start = params.start || 0;
  const limit = params.limit || 20;
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
  const start = params.start || 0;
  const limit = params.limit || 20;
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

// --- TMDB Functions ---
async function fetchTmdbData(api, params, watch_region = null) {
  try {
    const tmdbParams = { ...params };
    delete tmdbParams.type;
    delete tmdbParams.time_window;
    delete tmdbParams.watch_region;

    console.log(`调用 TMDB API: ${api} with params:`, tmdbParams);
    const response = await Widget.tmdb.get(api, { params: tmdbParams });

    if (!response || !response.results) {
      console.error("获取 TMDB 数据失败或格式错误", response);
      throw new Error("获取 TMDB 数据失败");
    }

    console.log(`TMDB 响应 (部分): ${response.results.length} items`, response.results.slice(0, 1));
    const data = response.results;

    const resultPromises = data.map(async (item) => {
        let title, releaseDate, description, coverUrl, mediaType, rating, itemId;

        itemId = item.id;
        rating = item.vote_average ? (item.vote_average / 2).toFixed(1) : undefined;

        if (item.media_type === 'movie' || api.startsWith('movie/') || (params.type === 'movie' && !item.media_type)) {
            mediaType = 'movie';
            title = item.title;
            releaseDate = item.release_date;
            description = item.overview;
            coverUrl = item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : undefined;
        } else if (item.media_type === 'tv' || api.startsWith('tv/') || (params.type === 'tv' && !item.media_type)) {
            mediaType = 'tv';
            title = item.name;
            releaseDate = item.first_air_date;
            description = item.overview;
            coverUrl = item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : undefined;
        } else if (item.media_type === 'person' || api.startsWith('person/')) {
            mediaType = 'person';
            title = item.name;
            releaseDate = undefined;
            const knownForTitles = item.known_for ? item.known_for.map(k => k.title || k.name).join(', ') : '';
            description = `热门作品: ${knownForTitles || 'N/A'}`;
            coverUrl = item.profile_path ? `https://image.tmdb.org/t/p/w500${item.profile_path}` : undefined;
            rating = undefined;
        } else {
            mediaType = item.media_type || 'unknown';
            title = item.title || item.name;
            releaseDate = item.release_date || item.first_air_date;
            description = item.overview || '';
            coverUrl = item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : (item.profile_path ? `https://image.tmdb.org/t/p/w500${item.profile_path}` : undefined);
        }

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
            }
        }

        let baseDescription = formatItemDescription({
            description: description,
            rating: rating,
            releaseDate: releaseDate
        });

        const finalDescription = (baseDescription + providersString).trim();

        return {
            id: itemId,
            type: "tmdb",
            media_type: mediaType,
            title: title,
            description: finalDescription,
            releaseDate: releaseDate,
            backdropPath: item.backdrop_path,
            posterPath: item.poster_path || item.profile_path,
            coverUrl: coverUrl,
            rating: rating,
            popularity: item.popularity
        };
    });

    const finalResults = await Promise.all(resultPromises);

    return finalResults.filter(item => item && item.title);

  } catch (error) {
    console.error(`调用 TMDB API ${api} 失败:`, error);
    return [];
  }
}

async function tmdbNowPlaying(params) {
  const type = params.type || 'movie';
  let api = type === 'movie' ? "movie/now_playing" : "tv/on_the_air";
  return await fetchTmdbData(api, params, params.watch_region);
}

async function tmdbTrending(params) {
  const timeWindow = params.time_window || 'day';
  const api = `trending/all/${timeWindow}`;
  return await fetchTmdbData(api, params);
}

async function tmdbPopular(params) {
  const type = params.type || 'movie';
  let api = type === 'movie' ? `movie/popular` : `tv/popular`;
  return await fetchTmdbData(api, params, params.watch_region);
}

async function tmdbUpcomingMovies(params) {
    console.log("Fetching upcoming movies from TMDB using /discover/movie");
    const api = "/discover/movie";

    const getTodayDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const discoverParams = {
        language: params.language || 'zh-CN',
        page: params.page || 1,
        sort_by: 'primary_release_date.asc',
        'primary_release_date.gte': params['primary_release_date.gte'] || getTodayDate(),
        'with_release_type': params['with_release_type'] !== undefined ? params['with_release_type'] : '2|3'
    };

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
         discoverParams['with_keywords'] = params['with_keywords'];
     }

    console.log("Constructed Discover Params:", discoverParams);
    return await fetchTmdbData(api, discoverParams);
}

async function tmdbPopularPeople(params) {
  console.log("Fetching popular people from TMDB");
  const api = "person/popular";
  return await fetchTmdbData(api, params);
}

// --- IMDB Functions ---
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
  return videoIds;
}

async function loadImdbApiItems(params = {}) {
  const url = params.url;
  if (!url) throw new Error("缺少 IMDB API 地址");
  console.log("请求 IMDB API:", url);

  const response = await Widget.http.get(url, {
    headers: {
      "Content-Type": "application/json",
      Referer: "https://www.imdb.com/",
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
      "Accept-Language": "en-US,en;q=0.9",
    },
  });

  console.log("IMDB API 原始响应:", JSON.stringify(response.data).substring(0, 500));
  if (!response || !response.data || !response.data.data) {
    console.error("获取 IMDB API 数据失败或格式错误", response.data);
    throw new Error("获取 IMDB API 数据失败");
  }

  const videos = [];
  let edges = [];
  const data = response.data.data;

  if (data.fanPicksTitles && data.fanPicksTitles.edges) {
      edges = data.fanPicksTitles.edges;
      console.log("解析 FanFavorites/TopPicks 数据");
  } else if (data.popularTitles && data.popularTitles.edges) {
      edges = data.popularTitles.edges;
      console.log("解析 PopularTitles 数据");
  } else if (data.topPicksTab && data.topPicksTab.titleList?.edges) {
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
        const yearRange = node.releaseYear?.year;

        videos.push({
            id: node.id,
            type: "imdb",
            title: titleText || "Unknown Title",
            coverUrl: image?.url || undefined,
            description: formatItemDescription({
                description: '',
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
async function _fetchAndProcessBangumiCalendar() {
    const url = "https://api.bgm.tv/calendar";
    console.log("内部请求 Bangumi 放送日历 API:", url);
    try {
        const response = await Widget.http.get(url, {
            headers: {
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
             const apiWeekdayId = dayData.weekday?.id;
             if (dayData.items && Array.isArray(dayData.items)) {
                for (const item of dayData.items) {
                     const images = item.images || {};
                     const coverUrl = images.large || images.common || images.medium || images.small || undefined;
                     const title = item.name_cn || item.name || "未知标题";
                     const summary = item.summary || "";
                     const airDate = item.air_date || "";
                     const rating = item.rating?.score;
                     const rank = item.rank;
                     const itemId = item.id;

                     if (!itemId || !title) {
                         console.warn("跳过 Bangumi 日历中的无效项目 (缺少 ID 或标题):", item);
                         continue;
                     }

                    let rawDescription = `放送日期: ${airDate || '未知'}`;
                     if (summary) rawDescription += ` | 简介: ${summary.substring(0, 80)}${summary.length > 80 ? '...' : ''}`;

                     const formattedDescription = formatItemDescription({
                         description: rawDescription,
                         rating: rating,
                         releaseDate: airDate && airDate.length >= 4 ? airDate : undefined
                     }) + (rank ? ` | 排名: ${rank}` : '');

                    processedItems.push({
                        id: itemId.toString(),
                        type: "bangumi",
                        title: title.trim(),
                        coverUrl: coverUrl ? (coverUrl.startsWith('//') ? 'https:' + coverUrl : coverUrl) : undefined,
                        description: formattedDescription.trim() || undefined,
                        rating: rating ? parseFloat(rating) : undefined,
                        releaseDate: airDate || undefined,
                        airWeekday: apiWeekdayId
                    });
                }
             }
        }
        console.log(`Bangumi API 获取并处理了 ${processedItems.length} 个原始项目`);
        return processedItems;

    } catch (error) {
        console.error("内部获取 Bangumi 日历数据失败:", error);
        throw error;
    }
}

async function loadBangumiCalendarUnified(params = {}) {
    const viewType = params.viewType || 'weekly';
    console.log(`加载 Bangumi 日历，视图模式: ${viewType}`);

    try {
        const allProcessedItems = await _fetchAndProcessBangumiCalendar();
        if (!allProcessedItems || allProcessedItems.length === 0) {
             console.log("未能从 Bangumi API 获取到任何日历数据。");
             return [];
        }

        if (viewType === 'daily') {
            const selectedWeekday = params.weekday;
             if (selectedWeekday === undefined || selectedWeekday === null) {
                 throw new Error("选择了单日视图，但未提供星期参数。");
             }

            let targetApiWeekdayId;
             const selectedWeekdayInt = parseInt(selectedWeekday, 10);
            if (selectedWeekdayInt === 0) { targetApiWeekdayId = 7; }
             else if (selectedWeekdayInt >= 1 && selectedWeekdayInt <= 6) { targetApiWeekdayId = selectedWeekdayInt; }
             else { throw new Error(`无效的星期参数值: ${selectedWeekday}`); }

            console.log(`筛选单日视图，用户选择: ${selectedWeekday}, 对应的 API 星期 ID: ${targetApiWeekdayId}`);
            const dailyItems = allProcessedItems.filter(item => item.airWeekday === targetApiWeekdayId);
            console.log(`筛选结果: 找到 ${dailyItems.length} 个符合条件的单日项目`);

            const dayNames = ["周日 (Sun)", "周一 (Mon)", "周二 (Tue)", "周三 (Wed)", "周四 (Thu)", "周五 (Fri)", "周六 (Sat)"];
            const sectionTitle = `--- ${dayNames[selectedWeekdayInt]} 放送 ---`;

            return [{
                title: sectionTitle,
                items: dailyItems
            }];

        } else {
            console.log("生成整周视图 (按天分组)...");
            const weekdaysMeta = [
                { id: 1, title: "--- 星期一 (Mon) ---" },
                { id: 2, title: "--- 星期二 (Tue) ---" },
                { id: 3, title: "--- 星期三 (Wed) ---" },
                { id: 4, title: "--- 星期四 (Thu) ---" },
                { id: 5, title: "--- 星期五 (Fri) ---" },
                { id: 6, title: "--- 星期六 (Sat) ---" },
                { id: 7, title: "--- 星期日 (Sun) ---" }
            ];
            const groupedResults = [];
            for (const day of weekdaysMeta) {
                const itemsForDay = allProcessedItems.filter(item => item.airWeekday === day.id);
                if (itemsForDay.length > 0) {
                    groupedResults.push({
                        title: day.title,
                        items: itemsForDay
                    });
                }
            }
            console.log(`已将 Bangumi 日历分组为 ${groupedResults.length} 个部分 (天)`);
            return groupedResults;
        }

    } catch (error) {
         console.error(`加载 Bangumi 统一日历视图 (${viewType}) 失败:`, error);
         return [{
             title: "加载失败",
             items: [{
                 id: `error-bangumi-unified-${viewType}-${Date.now()}`,
                 type: "error",
                 title: "加载 Bangumi 日历失败",
                 description: error.message || "发生未知错误"
             }]
         }];
    }
}

async function loadBangumiRankings(params = {}) {
    const page = params.page || 1;
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
    const page = params.page || 1;
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

// --- 其他功能函数 ---
async function findPersonAndCredits(params = {}) {
    const name = params.name;
    const language = params.language || 'zh-CN';
    if (!name) {
        return [{ id: "error-person-noname", type: "error", title: "请输入演员或导演名称" }];
    }
    console.log(`搜索人物: ${name}`);

    try {
        const searchResponse = await Widget.tmdb.get('/search/person', { params: { query: name, language: language } });
        if (!searchResponse || !searchResponse.results || searchResponse.results.length === 0) {
            console.log(`未找到名为 \"${name}\" 的人物`);
            return [{ id: `error-person-notfound-${name}`, type: "info", title: `未找到人物: ${name}` }];
        }

        const person = searchResponse.results[0];
        const personId = person.id;
        console.log(`找到人物: ${person.name} (ID: ${personId}), Popularity: ${person.popularity}`);

        const creditsResponse = await Widget.tmdb.get(`/person/${personId}/combined_credits`, { params: { language: language } });
        if (!creditsResponse || (!creditsResponse.cast && !creditsResponse.crew)) {
            console.log(`未能获取 ${person.name} 的作品信息`);
             return [{ id: `error-credits-notfound-${personId}`, type: "info", title: `未获取到 ${person.name} 的作品信息` }];
        }

        let combinedCredits = [...(creditsResponse.cast || []), ...(creditsResponse.crew || [])];
        combinedCredits = combinedCredits.filter(item => (item.release_date || item.first_air_date) && (item.title || item.name));
        const uniqueCredits = combinedCredits.reduce((acc, current) => {
            const x = acc.find(item => item.id === current.id && item.media_type === current.media_type);
            if (!x) {
                return acc.concat([current]);
            } else {
                return acc;
            }
        }, []);

        uniqueCredits.sort((a, b) => (b.popularity || 0) - (a.popularity || 0));

        console.log(`共找到 ${uniqueCredits.length} 部独立作品 (按热度排序)`);

        const results = uniqueCredits.slice(0, 50).map(item => {
            const isMovie = item.media_type === 'movie';
            const title = isMovie ? item.title : item.name;
            const releaseDate = isMovie ? item.release_date : item.first_air_date;
            const rating = item.vote_average ? (item.vote_average / 2).toFixed(1) : undefined;
            const description = formatItemDescription({
                 description: item.overview || `类型: ${item.media_type}`,
                 rating: rating,
                 releaseDate: releaseDate
            });

            let role = '';
            if (creditsResponse.cast && creditsResponse.cast.some(c => c.id === item.id)) role = item.character || '演员';
            if (!role && creditsResponse.crew && creditsResponse.crew.some(c => c.id === item.id)) role = item.job || '制作人员';

            return {
                id: `${item.media_type}/${item.id}`,
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

        results.unshift({
             id: `person/${personId}`,
             type: "tmdb",
             media_type: "person",
             title: `${person.name} (点击查看其作品)`,
             coverUrl: person.profile_path ? `https://image.tmdb.org/t/p/w500${person.profile_path}` : undefined,
             description: `性别: ${person.gender === 1 ? '女' : person.gender === 2 ? '男' : '未知'} | 职业: ${person.known_for_department || 'N/A'} | 热度: ${person.popularity.toFixed(2)}`,
        });

        return results;

    } catch (error) {
        console.error("查找演员/导演及其作品失败:", error);
        return [{ id: "error-person-fetch", type: "error", title: "获取人物信息失败", description: error.message }];
    }
}

async function getRandomPick(params = {}) {
    const { type = 'movie', genre, min_year, max_year, min_rating, language = 'zh-CN' } = params;

    const discoverParams = {
        language: language,
        sort_by: 'popularity.desc',
        'vote_count.gte': 100
    };

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
        console.log(`随机推荐: 从第 ${randomPage} 页选中: ${randomItem.title || randomItem.name} (ID: ${randomItem.id}). Genre IDs: ${randomItem.genre_ids}`);

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

async function generateSoundtrackSearchLinks(params = {}) {
    const title = params.title;
    const selectedPlatform = params.platforms || 'all';

    if (!title) {
        return [{ id: "error-soundtrack-notitle", type: "error", title: "请输入影视标题" }];
    }

    const encodedTitle = encodeURIComponent(title);
    const encodedTitleWithOst = encodeURIComponent(title + " 原声带");
    const encodedTitleWithSoundtrack = encodeURIComponent(title + " Soundtrack");

    console.log(`为 \"${title}\" 生成原声带搜索链接 (平台: ${selectedPlatform})`);

    const platformData = {
        netease: {
            name: "网易云音乐",
            searchUrl: `https://music.163.com/#/search/m/?s=${encodedTitleWithOst}&type=1000`,
            icon: "https://s1.music.126.net/style/favicon.ico"
        },
        qq: {
            name: "QQ音乐",
            searchUrl: `https://y.qq.com/n/ryqq/search?w=${encodedTitleWithOst}&t=8`,
            icon: "https://y.qq.com/favicon.ico"
        },
        apple: {
            name: "Apple Music",
            searchUrl: `https://music.apple.com/us/search?term=${encodedTitleWithSoundtrack}`,
            icon: "https://www.apple.com/favicon.ico"
        },
        spotify: {
            name: "Spotify",
            searchUrl: `https://open.spotify.com/search/${encodeURIComponent(title)}%20(Original%20Soundtrack)`,
            icon: "https://open.spotifycdn.com/cdn/images/favicon32.b64ecc03.png"
        }
    };

    const urlItems = [];
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

// --- END OF COMBINED WIDGET FILE ---
