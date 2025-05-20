WidgetMetadata = {
  id: "jable",
  title: "Jable Detailed Categories",
  description: "Fetch Jable category rankings",
  author: "nibiru",
  site: "https://github.com/quantumultxx/FW-Widgets",
  version: "1.0.2",
  requiredVersion: "0.0.1",
  modules: [
    // Popular Movies Module
    {
      title: "Popular Movies",
      description: "Popular movies ranking",
      requiresWebView: false,
      functionName: "loadPage",
      params: [
        {
          name: "url",
          title: "List Address",
          type: "constant",
          description: "List Address",
          value: "https://jable.tv/hot/?mode=async&function=get_block&block_id=list_videos_common_videos_list",
        },
        {
          name: "sort_by",
          title: "Sort By",
          type: "enumeration",
          description: "Sort by",
          enumOptions: [
            { title: "All Time", value: "video_viewed" },
            { title: "This Month", value: "video_viewed_month" },
            { title: "This Week", value: "video_viewed_week" },
            { title: "Today", value: "video_viewed_today" },
          ],
        },
        { name: "from", title: "Page", type: "page", description: "Page number", value: "1" },
      ],
    },
    // New Releases Module
    {
      title: "New Releases",
      description: "Newly released movies",
      requiresWebView: false,
      functionName: "loadPage",
      params: [
        {
          name: "url",
          title: "List Address",
          type: "constant",
          description: "List Address",
          value: "https://jable.tv/new-release/?mode=async&function=get_block&block_id=list_videos_common_videos_list",
        },
        {
          name: "sort_by",
          title: "Sort By",
          type: "enumeration",
          description: "Sort by",
          enumOptions: [
            { title: "Newest", value: "post_date" },
            { title: "Most Viewed", value: "video_viewed" },
            { title: "Most Favorited", value: "most_favourited" },
          ],
        },
        { name: "from", title: "Page", type: "page", description: "Page number", value: "1" },
      ],
    },

    // Chinese Subtitles Module
    {
      title: "Chinese Subtitles",
      description: "Movies with Chinese subtitles",
      requiresWebView: false,
      functionName: "loadPage",
      params: [
        {
          name: "url",
          title: "List Address",
          type: "constant",
          description: "List Address",
          value: "https://jable.tv/categories/chinese-subtitle/?mode=async&function=get_block&block_id=list_videos_common_videos_list",
        },
        {
          name: "sort_by",
          title: "Sort By",
          type: "enumeration",
          description: "Sort by",
          enumOptions: [
            { title: "Newest", value: "post_date" },
            { title: "Most Viewed", value: "video_viewed" },
            { title: "Most Favorited", value: "most_favourited" },
          ],
        },
        { name: "from", title: "Page", type: "page", description: "Page number", value: "1" },
      ],
    },
    // Actress Selection Module (Names preserved)
    {
      title: "Actress Selection",
      description: "Browse movies by actress categories",
      requiresWebView: false,
      functionName: "loadPage",
      params: [
        {
          name: "url",
          title: "Actress Selection",
          type: "enumeration",
          enumOptions: [
            { 
              title: "三上悠亚", 
              value: "https://jable.tv/s1/models/yua-mikami/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "楪可怜", 
              value: "https://jable.tv/models/86b2f23f95cc485af79fe847c5b9de8d/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "小野夕子", 
              value: "https://jable.tv/models/2958338aa4f78c0afb071e2b8a6b5f1b/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "大槻响", 
              value: "https://jable.tv/models/hibiki-otsuki/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "藤森里穗", 
              value: "https://jable.tv/models/riho-fujimori/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "JULIA", 
              value: "https://jable.tv/models/julia/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "明里䌷", 
              value: "https://jable.tv/models/tsumugi-akari/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "桃乃木香奈", 
              value: "https://jable.tv/models/momonogi-kana/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "水户香奈", 
              value: "https://jable.tv/models/kana-mito/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "篠田ゆう", 
              value: "https://jable.tv/s1/models/shinoda-yuu/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "枫可怜", 
              value: "https://jable.tv/models/kaede-karen/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "吉沢明歩", 
              value: "https://jable.tv/models/akiho-yoshizawa/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "羽月希", 
              value: "https://jable.tv/models/21e145d3f4d7c8c818fc7eae19342a7a/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "美谷朱里 ", 
              value: "https://jable.tv/s1/models/mitani-akari/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "山岸逢花", 
              value: "https://jable.tv/models/yamagishi-aika/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "佐佐木明希", 
              value: "https://jable.tv/models/sasaki-aki/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "神木麗", 
              value: "https://jable.tv/models/ef9b1ab9a21b58d6ee4d7d97ab883288/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "七泽美亚", 
              value: "https://jable.tv/models/nanasawa-mia/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "瀬戸環奈", 
              value: "https://jable.tv/models/1a71be5a068c6f9e00fac285b31019f9/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "瀧本雫葉", 
              value: "https://jable.tv/models/7ffb432871f53eda0b4d80be34fff86a/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "さくらわかな", 
              value: "https://jable.tv/models/0b96db26c8b192b0a54e24d878380765/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "彩月七緒", 
              value: "https://jable.tv/models/e82b22cd3275fd0e569147d82fa1999d/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "鈴乃ウト", 
              value: "https://jable.tv/models/559904d22cbf03091f790258aa4e9b8c/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "三田真鈴", 
              value: "https://jable.tv/models/7749dd641e0426f55342972d920513a7/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "七ツ森りり", 
              value: "https://jable.tv/models/9ed214792a2144520430dd494c93f651/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "七嶋舞", 
              value: "https://jable.tv/models/6ab2e738a33eafc3db27cab0b83cf5cd/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "八掛うみ", 
              value: "https://jable.tv/models/83397477054d35cd07e2c48685335a86/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "八木奈々", 
              value: "https://jable.tv/models/3610067a1d725dab8ee8cd3ffe828850/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "宮下玲奈", 
              value: "https://jable.tv/models/b435825a4941964079157dd2fc0a8e5a/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "小湊よつ葉", 
              value: "https://jable.tv/models/ff8ce98f2419126e00a90bc1f3385824/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "小野六花", 
              value: "https://jable.tv/models/0478c4db9858c4e6c60af7fbf828009a/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "工藤ゆら", 
              value: "https://jable.tv/models/e7ba849893aa7ce8afcc3003a4075c20/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "本庄鈴", 
              value: "https://jable.tv/models/honjou-suzu/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "桜空もも", 
              value: "https://jable.tv/models/sakura-momo/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "楓ふうあ", 
              value: "https://jable.tv/models/f88e49c4c1adb0fd1bae71ac122d6b82/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "河北彩伽", 
              value: "https://jable.tv/models/saika-kawakita2/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "矢埜愛茉", 
              value: "https://jable.tv/models/0903b1921df6c616c29041be11c3d2e8/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "石川澪", 
              value: "https://jable.tv/models/a855133fa44ca5e7679cac0a0ab7d1cb/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "美ノ嶋めぐり", 
              value: "https://jable.tv/models/d1ebb3d61ee367652e6b1f35b469f2b6/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "野々浦暖", 
              value: "https://jable.tv/models/6b0ce5c4944edce04ab48d4bb608fd4c/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "青空ひかり", 
              value: "https://jable.tv/models/4c7a2cfa27b343e3e07659650400f61d/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "香澄りこ", 
              value: "https://jable.tv/models/6c2e861e04b9327701a80ca77a088814/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "新ありな", 
              value: "https://jable.tv/models/e763382dc86aa703456d964ca25d0e8b/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "未歩なな", 
              value: "https://jable.tv/models/c9535c2f157202cd0e934d62ef582e2e/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "凪ひかる", 
              value: "https://jable.tv/models/91fca8d824e07075d09de0282f6e9076/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "三宮つばき", 
              value: "https://jable.tv/models/f0e279c00b2a7e1aca2ef4d31d611020/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "藍芽みずき", 
              value: "https://jable.tv/models/679c69a5488daa35a5544749b75556c6/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "つばさ舞", 
              value: "https://jable.tv/models/0d7709a62cc199f923107c120d30893b/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "朝日りお", 
              value: "https://jable.tv/models/ad0935cfa1449ab126dde2b0c0929ad0/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "日下部加奈", 
              value: "https://jable.tv/models/dfea76fd68bc52e0888a78e0fedce073/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "弓乃りむ", 
              value: "https://jable.tv/models/06c22ca98d8ec82963046ad17e0fad4a/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            }
          ],
          value: "https://jable.tv/s1/models/yua-mikami/?mode=async&function=get_block&block_id=list_videos_common_videos_list",
        },
        {
          name: "sort_by",
          title: "Sort By",
          type: "enumeration",
          description: "Sort by",
          enumOptions: [
            { title: "Newest", value: "post_date" },
            { title: "Most Viewed", value: "video_viewed" },
            { title: "Most Favorited", value: "most_favourited" },
          ],
        },
        { name: "from", title: "Page", type: "page", description: "Page number", value: "1" },
      ],
    },

    // Clothing Module
    {
      title: "Clothing Selection",
      description: "Browse movies by clothing categories",
      requiresWebView: false,
      functionName: "loadPage",
      params: [
        {
          name: "url",
          title: "Clothing Selection",
          type: "enumeration",
          enumOptions: [
            { title: "Black Pantyhose", value: "https://jable.tv/tags/black-pantyhose/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "Thigh-High Socks", value: "https://jable.tv/tags/knee-socks/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "Sportswear", value: "https://jable.tv/tags/sportswear/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "Flesh-Tone Pantyhose", value: "https://jable.tv/tags/flesh-toned-pantyhose/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "Pantyhose", value: "https://jable.tv/tags/pantyhose/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "Glasses", value: "https://jable.tv/tags/glasses/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "Kemonomimi", value: "https://jable.tv/tags/kemonomimi/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "Fishnets", value: "https://jable.tv/tags/fishnets/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "Swimsuit", value: "https://jable.tv/tags/swimsuit/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "School Uniform", value: "https://jable.tv/tags/school-uniform/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "Cheongsam", value: "https://jable.tv/tags/cheongsam/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "Wedding Dress", value: "https://jable.tv/tags/wedding-dress/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "Maid", value: "https://jable.tv/tags/maid/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "Kimono", value: "https://jable.tv/tags/kimono/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "Bunny Girl", value: "https://jable.tv/tags/bunny-girl/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "Cosplay", value: "https://jable.tv/tags/Cosplay/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
          ],
          value: "https://jable.tv/tags/black-pantyhose/?mode=async&function=get_block&block_id=list_videos_common_videos_list",
        },
        {
          name: "sort_by",
          title: "Sort By",
          type: "enumeration",
          description: "Sort by",
          enumOptions: [
            { title: "Newest", value: "post_date" },
            { title: "Most Viewed", value: "video_viewed" },
            { title: "Most Favorited", value: "most_favourited" },
          ],
        },
        { name: "from", title: "Page", type: "page", description: "Page number", value: "1" },
      ],
    },

    // Plot Module
    {
      title: "Plot Selection",
      description: "Browse movies by plot categories",
      requiresWebView: false,
      functionName: "loadPage",
      params: [
        {
          name: "url",
          title: "Plot Selection",
          type: "enumeration",
          enumOptions: [
            { title: "Affair", value: "https://jable.tv/tags/affair/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "Ugly Man", value: "https://jable.tv/tags/ugly-man/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "Kinship", value: "https://jable.tv/tags/kinship/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "Virginity", value: "https://jable.tv/tags/virginity/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "Revenge", value: "https://jable.tv/tags/avenge/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "Giant", value: "https://jable.tv/tags/giant/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "Love Potion", value: "https://jable.tv/tags/love-potion/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "Hypnosis", value: "https://jable.tv/tags/hypnosis//?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "Private Cam", value: "https://jable.tv/tags/private-cam/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "NTR", value: "https://jable.tv/tags/ntr/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "Age Difference", value: "https://jable.tv/tags/age-difference/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "Rainy Day", value: "https://jable.tv/tags/rainy-day/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "Time Stop", value: "https://jable.tv/tags/time-stop/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
          ],
          value: "https://jable.tv/tags/affair/?mode=async&function=get_block&block_id=list_videos_common_videos_list",
        },
        {
          name: "sort_by",
          title: "Sort By",
          type: "enumeration",
          description: "Sort by",
          enumOptions: [
            { title: "Newest", value: "post_date" },
            { title: "Most Viewed", value: "video_viewed" },
            { title: "Most Favorited", value: "most_favourited" },
          ],
        },
        { name: "from", title: "Page", type: "page", description: "Page number", value: "1" },
      ],
    },

    // Location Module
    {
      title: "Location Selection",
      description: "Browse movies by location categories",
      requiresWebView: false,
      functionName: "loadPage",
      params: [
        {
          name: "url",
          title: "Location Selection",
          type: "enumeration",
          enumOptions: [
            { title: "Tram", value: "https://jable.tv/tags/tram/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "First Night", value: "https://jable.tv/tags/first-night/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "Prison", value: "https://jable.tv/tags/prison/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "Hot Spring", value: "https://jable.tv/tags/hot-spring/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "Swimming Pool", value: "https://jable.tv/tags/swimming-pool/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "Car", value: "https://jable.tv/tags/car/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "Toilet", value: "https://jable.tv/tags/toilet/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "School", value: "https://jable.tv/tags/school/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "Magic Mirror", value: "https://jable.tv/tags/magic-mirror/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "Bathroom", value: "https://jable.tv/tags/bathing-place/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "Library", value: "https://jable.tv/tags/library/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "Gym Room", value: "https://jable.tv/tags/gym-room/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "Store", value: "https://jable.tv/tags/store/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
          ],
          value: "https://jable.tv/tags/tram/?mode=async&function=get_block&block_id=list_videos_common_videos_list",
        },
        {
          name: "sort_by",
          title: "Sort By",
          type: "enumeration",
          description: "Sort by",
          enumOptions: [
            { title: "Newest", value: "post_date" },
            { title: "Most Viewed", value: "video_viewed" },
            { title: "Most Favorited", value: "most_favourited" },
          ],
        },
        { name: "from", title: "Page", type: "page", description: "Page number", value: "1" },
      ],
    },

    // Body Type Module
    {
      title: "Body Type Selection",
      description: "Browse movies by body type categories",
      requiresWebView: false,
      functionName: "loadPage",
      params: [
        {
          name: "url",
          title: "Body Type Selection",
          type: "enumeration",
          enumOptions: [
            { title: "Tall", value: "https://jable.tv/tags/tall/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "Flexible Body", value: "https://jable.tv/tags/flexible-body/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "Small Tits", value: "https://jable.tv/tags/small-tits/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "Beautiful Legs", value: "https://jable.tv/tags/beautiful-leg/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "Beautiful Butt", value: "https://jable.tv/tags/beautiful-butt/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "Tattoo", value: "https://jable.tv/tags/tattoo/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "Short Hair", value: "https://jable.tv/tags/short-hair/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "Hairy Pussy", value: "https://jable.tv/tags/hairless-pussy/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "Mature Woman", value: "https://jable.tv/tags/mature-woman/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "Big Tits", value: "https://jable.tv/tags/big-tits/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "Girl", value: "https://jable.tv/tags/girl/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "Petite", value: "https://jable.tv/tags/dainty/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
          ],
          value: "https://jable.tv/tags/tall/?mode=async&function=get_block&block_id=list_videos_common_videos_list",
        },
        {
          name: "sort_by",
          title: "Sort By",
          type: "enumeration",
          description: "Sort by",
          enumOptions: [
            { title: "Newest", value: "post_date" },
            { title: "Most Viewed", value: "video_viewed" },
            { title: "Most Favorited", value: "most_favourited" },
          ],
        },
        { name: "from", title: "Page", type: "page", description: "Page number", value: "1" },
      ],
    },

    // Character Module
    {
      title: "Character Selection",
      description: "Browse movies by character categories",
      requiresWebView: false,
      functionName: "loadPage",
      params: [
        {
          name: "url",
          title: "Character Selection",
          type: "enumeration",
          enumOptions: [
            { title: "Wife", value: "https://jable.tv/tags/wife/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "Doctor", value: "https://jable.tv/tags/doctor/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "Nurse", value: "https://jable.tv/tags/nurse/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "Teacher", value: "https://jable.tv/tags/teacher/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "Flight Attendant", value: "https://jable.tv/tags/female-anchor/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "Fugitive", value: "https://jable.tv/tags/fugitive/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "Couple", value: "https://jable.tv/tags/couple/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "Anchor", value: "https://jable.tv/tags/female-anchor/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "Club Hostess", value: "https://jable.tv/tags/club-hostess-and-sex-worker/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "Housewife", value: "https://jable.tv/tags/housewife/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "Private Teacher", value: "https://jable.tv/tags/private-teacher/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "Detective", value: "https://jable.tv/tags/detective/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "Widow", value: "https://jable.tv/tags/widow/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "Team Manager", value: "https://jable.tv/tags/team-manager/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
          ],
          value: "https://jable.tv/tags/wife/?mode=async&function=get_block&block_id=list_videos_common_videos_list",
        },
        {
          name: "sort_by",
          title: "Sort By",
          type: "enumeration",
          description: "Sort by",
          enumOptions: [
            { title: "Newest", value: "post_date" },
            { title: "Most Viewed", value: "video_viewed" },
            { title: "Most Favorited", value: "most_favourited" },
          ],
        },
        { name: "from", title: "Page", type: "page", description: "Page number", value: "1" },
      ],
    },

    // Intimacy Module
    {
      title: "Intimacy Selection",
      description: "Browse movies by intimacy categories",
      requiresWebView: false,
      functionName: "loadPage",
      params: [
        {
          name: "url",
          title: "Intimacy Selection",
          type: "enumeration",
          enumOptions: [
            { title: "Facial", value: "https://jable.tv/tags/facial/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "Footjob", value: "https://jable.tv/tags/footjob/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "Spasms", value: "https://jable.tv/tags/spasms/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "Squirting", value: "https://jable.tv/tags/squirting/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "Deep Throat", value: "https://jable.tv/tags/deep-throat/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "Kissing", value: "https://jable.tv/tags/kiss/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "Cum in Mouth", value: "https://jable.tv/tags/cum-in-mouth/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "Blowjob", value: "https://jable.tv/tags/blowjob/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "Tit Wank", value: "https://jable.tv/tags/tit-wank/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "Creampie", value: "https://jable.tv/tags/creampie/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
          ],
          value: "https://jable.tv/tags/facial/?mode=async&function=get_block&block_id=list_videos_common_videos_list",
        },
        {
          name: "sort_by",
          title: "Sort By",
          type: "enumeration",
          description: "Sort by",
          enumOptions: [
            { title: "Newest", value: "post_date" },
            { title: "Most Viewed", value: "video_viewed" },
            { title: "Most Favorited", value: "most_favourited" },
          ],
        },
        { name: "from", title: "Page", type: "page", description: "Page number", value: "1" },
      ],
    },

    // Miscellaneous Module
    {
      title: "Miscellaneous Selection",
      description: "Browse movies by miscellaneous categories",
      requiresWebView: false,
      functionName: "loadPage",
      params: [
        {
          name: "url",
          title: "Miscellaneous Selection",
          type: "enumeration",
          enumOptions: [
            { title: "Video Recording", value: "https://jable.tv/tags/video-recording/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "Variety Show", value: "https://jable.tv/tags/variety-show/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "Thanksgiving", value: "https://jable.tv/tags/thanksgiving/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "Festival Theme", value: "https://jable.tv/tags/festival/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "Over 4 Hours", value: "https://jable.tv/tags/more-than-4-hours/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "Debut/Retirement", value: "https://jable.tv/tags/debut-retires/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
          ],
          value: "https://jable.tv/tags/video-recording/?mode=async&function=get_block&block_id=list_videos_common_videos_list",
        },
        {
          name: "sort_by",
          title: "Sort By",
          type: "enumeration",
          description: "Sort by",
          enumOptions: [
            { title: "Newest", value: "post_date" },
            { title: "Most Viewed", value: "video_viewed" },
            { title: "Most Favorited", value: "most_favourited" },
          ],
        },
        { name: "from", title: "Page", type: "page", description: "Page number", value: "1" },
      ],
    },

    // Theme Module
    {
      title: "Theme Selection",
      description: "Browse movies by theme categories",
      requiresWebView: false,
      functionName: "loadPage",
      params: [
        {
          name: "url",
          title: "Theme Selection",
          type: "enumeration",
          enumOptions: [
            { title: "Roleplay", value: "https://jable.tv/categories/roleplay/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "Uniform Temptation", value: "https://jable.tv/categories/uniform/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "Direct Fuck", value: "https://jable.tv/categories/sex-only/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "Pantyhose Beauty", value: "https://jable.tv/categories/pantyhose/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "Master-Slave", value: "https://jable.tv/categories/bdsm/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "Group Sex", value: "https://jable.tv/categories/groupsex/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "POV", value: "https://jable.tv/categories/pov/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "Insult Pleasure", value: "https://jable.tv/categories/insult/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "Private Cam", value: "https://jable.tv/categories/private-cam/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "Uncensored", value: "https://jable.tv/categories/uncensored/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "Lesbian", value: "https://jable.tv/categories/lesbian/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
          ],
          value: "https://jable.tv/categories/roleplay/?mode=async&function=get_block&block_id=list_videos_common_videos_list",
        },
        {
          name: "sort_by",
          title: "Sort By",
          type: "enumeration",
          description: "Sort by",
          enumOptions: [
            { title: "Newest", value: "post_date" },
            { title: "Most Viewed", value: "video_viewed" },
            { title: "Most Favorited", value: "most_favourited" },
          ],
        },
        { name: "from", title: "Page", type: "page", description: "Page number", value: "1" },
      ],
    },
  ],
};

async function search(params = {}) {
  const url = `https://jable.tv/search/${params.keyword}/?mode=async&function=get_block&block_id=list_videos_videos_list_search_result&q=${params.keyword}`;
  params.url = url;
  return await loadPage(params);
}

async function loadPage(params = {}) {
  const sections = await loadPageSections(params);
  const items = sections.flatMap((section) => section.childItems);
  return items;
}

async function loadPageSections(params = {}) {
  try {
    let url = params.url;
    if (!url) {
      throw new Error("The address cannot be empty");
    }
    if (params["sort_by"]) {
      url += `&sort_by=${params.sort_by}`;
    }
    if (params["from"]) {
      url += `&from=${params.from}`;
    }
    // 1. Fetch HTML content
    console.log("=== Fetch HTML content ===");
    const response = await Widget.http.get(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
      },
    });

    if (!response || !response.data || typeof response.data !== "string") {
      throw new Error("Unable to fetch valid HTML content");
    }

    const htmlContent = response.data;
    console.log(`Fetched HTML content length: ${htmlContent.length} characters`);
    console.log(htmlContent);

    return parseHtml(htmlContent);
  } catch (error) {
    console.error("Error during test process:", error.message);
    throw error;
  }
}

async function parseHtml(htmlContent) {
  // 2. Parse HTML
  console.log("\n=== Parse HTML ===");
  const $ = Widget.html.load(htmlContent);
  const sectionSelector = ".site-content .py-3,.pb-e-lg-40";
  const itemSelector = ".video-img-box";
  const coverSelector = "img";
  const durationSelector = ".absolute-bottom-right .label";
  const titleSelector = ".title a";

  let sections = [];
  // Use cheerio to parse html
  const sectionElements = $(sectionSelector).toArray();
  for (const sectionElement of sectionElements) {
    const $sectionElement = $(sectionElement);
    var items = [];
    const sectionTitle = $sectionElement.find(".title-box .h3-md").first();
    const sectionTitleText = sectionTitle.text();
    console.log("sectionTitleText:", sectionTitleText);
    const itemElements = $sectionElement.find(itemSelector).toArray();
    console.log("itemElements:", itemElements);
    if (itemElements && itemElements.length > 0) {
      for (const itemElement of itemElements) {
        const $itemElement = $(itemElement);
        const titleId = $itemElement.find(titleSelector).first();
        console.log("titleId:", titleId.length);
        const url = titleId.attr("href") || "";
        console.log("url:", url);
        if (url && url.includes("jable.tv")) {
          const durationId = $itemElement.find(durationSelector).first();
          const coverId = $itemElement.find(coverSelector).first();
          const cover = coverId.attr("data-src");
          const video = coverId.attr("data-preview");
          const title = titleId.text();
          const duration = durationId.text();
          const item = {
            id: url,
            type: "url",
            title: title,
            durationText: duration,
            backdropPath: cover,
            previewUrl: video,
            link: url
          };
          console.log("item:", item);
          items.push(item);
        }
      }

      sections.push({
        id: sectionTitleText,
        type: "web",
        title: sectionTitleText,
        childItems: items,
      });
    }
  }
  console.log("sections:", sections);
  return sections;
}

async function loadDetail(link) {
  const response = await Widget.http.get(link, {
    headers: {
      "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
    },
  });
  // Get HLS URL using regex
  const hlsUrl = response.data.match(/var hlsUrl = '(.*?)';/)[1];
  if (!hlsUrl) {
    throw new Error("Unable to fetch valid HLS URL");
  }
  console.log("hlsUrl:", hlsUrl);
  const item = {
    id: link,
    type: "detail",
    videoUrl: hlsUrl,
    customHeaders: {
      "Referer": link,
      "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
    },
  };
  const sections = await parseHtml(response.data);
  const items = sections.flatMap((section) => section.childItems);
  if (items.length > 0) {
    item.childItems = items;
  }
  return item;
}
