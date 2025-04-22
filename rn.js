/**
 * 终极优化版 Sub-Store 节点重命名脚本
 * 版本：2.0
 * 最后更新：2025-04-23
 * 优化内容：
 * 1. 完全重构的模块化架构
 * 2. 增强的匹配算法
 * 3. 改进的错误处理
 * 4. 添加性能监控
 * 5. 支持更多自定义选项
 */

// ==================== 常量定义 ====================
const COUNTRY_DATA = {
  flags: ['🇭🇰','🇲🇴','🇹🇼','🇯🇵','🇰🇷','🇸🇬','🇺🇸','🇬🇧','🇫🇷','🇩🇪','🇦🇺','🇦🇪','🇦🇫','🇦🇱','🇩🇿','🇦🇴','🇦🇷','🇦🇲','🇦🇹','🇦🇿','🇧🇭','🇧🇩','🇧🇾','🇧🇪','🇧🇿','🇧🇯','🇧🇹','🇧🇴','🇧🇦','🇧🇼','🇧🇷','🇻🇬','🇧🇳','🇧🇬','🇧🇫','🇧🇮','🇰🇭','🇨🇲','🇨🇦','🇨🇻','🇰🇾','🇨🇫','🇹🇩','🇨🇱','🇨🇴','🇰🇲','🇨🇬','🇨🇩','🇨🇷','🇭🇷','🇨🇾','🇨🇿','🇩🇰','🇩🇯','🇩🇴','🇪🇨','🇪🇬','🇸🇻','🇬🇶','🇪🇷','🇪🇪','🇪🇹','🇫🇯','🇫🇮','🇬🇦','🇬🇲','🇬🇪','🇬🇭','🇬🇷','🇬🇱','🇬🇹','🇬🇳','🇬🇾','🇭🇹','🇭🇳','🇭🇺','🇮🇸','🇮🇳','🇮🇩','🇮🇷','🇮🇶','🇮🇪','🇮🇲','🇮🇱','🇮🇹','🇨🇮','🇯🇲','🇯🇴','🇰🇿','🇰🇪','🇰🇼','🇰🇬','🇱🇦','🇱🇻','🇱🇧','🇱🇸','🇱🇷','🇱🇾','🇱🇹','🇱🇺','🇲🇰','🇲🇬','🇲🇼','🇲🇾','🇲🇻','🇲🇱','🇲🇹','🇲🇷','🇲🇺','🇲🇽','🇲🇩','🇲🇨','🇲🇳','🇲🇪','🇲🇦','🇲🇿','🇲🇲','🇳🇦','🇳🇵','🇳🇱','🇳🇿','🇳🇮','🇳🇪','🇳🇬','🇰🇵','🇳🇴','🇴🇲','🇵🇰','🇵🇦','🇵🇾','🇵🇪','🇵🇭','🇵🇹','🇵🇷','🇶🇦','🇷🇴','🇷🇺','🇷🇼','🇸🇲','🇸🇦','🇸🇳','🇷🇸','🇸🇱','🇸🇰','🇸🇮','🇸🇴','🇿🇦','🇪🇸','🇱🇰','🇸🇩','🇸🇷','🇸🇿','🇸🇪','🇨🇭','🇸🇾','🇹🇯','🇹🇿','🇹🇭','🇹🇬','🇹🇴','🇹🇹','🇹🇳','🇹🇷','🇹🇲','🇻🇮','🇺🇬','🇺🇦','🇺🇾','🇺🇿','🇻🇪','🇻🇳','🇾🇪','🇿🇲','🇿🇼','🇦🇩','🇷🇪','🇵🇱','🇬🇺','🇻🇦','🇱🇮','🇨🇼','🇸🇨','🇦🇶','🇬🇮','🇨🇺','🇫🇴','🇦🇽','🇧🇲','🇹🇱'],
  en: ['HK','MO','TW','JP','KR','SG','US','GB','FR','DE','AU','AE','AF','AL','DZ','AO','AR','AM','AT','AZ','BH','BD','BY','BE','BZ','BJ','BT','BO','BA','BW','BR','VG','BN','BG','BF','BI','KH','CM','CA','CV','KY','CF','TD','CL','CO','KM','CG','CD','CR','HR','CY','CZ','DK','DJ','DO','EC','EG','SV','GQ','ER','EE','ET','FJ','FI','GA','GM','GE','GH','GR','GL','GT','GN','GY','HT','HN','HU','IS','IN','ID','IR','IQ','IE','IM','IL','IT','CI','JM','JO','KZ','KE','KW','KG','LA','LV','LB','LS','LR','LY','LT','LU','MK','MG','MW','MY','MV','ML','MT','MR','MU','MX','MD','MC','MN','ME','MA','MZ','MM','NA','NP','NL','NZ','NI','NE','NG','KP','NO','OM','PK','PA','PY','PE','PH','PT','PR','QA','RO','RU','RW','SM','SA','SN','RS','SL','SK','SI','SO','ZA','ES','LK','SD','SR','SZ','SE','CH','SY','TJ','TZ','TH','TG','TO','TT','TN','TR','TM','VI','UG','UA','UY','UZ','VE','VN','YE','ZM','ZW','AD','RE','PL','GU','VA','LI','CW','SC','AQ','GI','CU','FO','AX','BM','TL'],
  zh: ['香港','澳门','台湾','日本','韩国','新加坡','美国','英国','法国','德国','澳大利亚','阿联酋','阿富汗','阿尔巴尼亚','阿尔及利亚','安哥拉','阿根廷','亚美尼亚','奥地利','阿塞拜疆','巴林','孟加拉国','白俄罗斯','比利时','伯利兹','贝宁','不丹','玻利维亚','波斯尼亚和黑塞哥维那','博茨瓦纳','巴西','英属维京群岛','文莱','保加利亚','布基纳法索','布隆迪','柬埔寨','喀麦隆','加拿大','佛得角','开曼群岛','中非共和国','乍得','智利','哥伦比亚','科摩罗','刚果(布)','刚果(金)','哥斯达黎加','克罗地亚','塞浦路斯','捷克','丹麦','吉布提','多米尼加共和国','厄瓜多尔','埃及','萨尔瓦多','赤道几内亚','厄立特里亚','爱沙尼亚','埃塞俄比亚','斐济','芬兰','加蓬','冈比亚','格鲁吉亚','加纳','希腊','格陵兰','危地马拉','几内亚','圭亚那','海地','洪都拉斯','匈牙利','冰岛','印度','印尼','伊朗','伊拉克','爱尔兰','马恩岛','以色列','意大利','科特迪瓦','牙买加','约旦','哈萨克斯坦','肯尼亚','科威特','吉尔吉斯斯坦','老挝','拉脱维亚','黎巴嫩','莱索托','利比里亚','利比亚','立陶宛','卢森堡','马其顿','马达加斯加','马拉维','马来','马尔代夫','马里','马耳他','毛利塔尼亚','毛里求斯','墨西哥','摩尔多瓦','摩纳哥','蒙古','黑山共和国','摩洛哥','莫桑比克','缅甸','纳米比亚','尼泊尔','荷兰','新西兰','尼加拉瓜','尼日尔','尼日利亚','朝鲜','挪威','阿曼','巴基斯坦','巴拿马','巴拉圭','秘鲁','菲律宾','葡萄牙','波多黎各','卡塔尔','罗马尼亚','俄罗斯','卢旺达','圣马力诺','沙特阿拉伯','塞内加尔','塞尔维亚','塞拉利昂','斯洛伐克','斯洛文尼亚','索马里','南非','西班牙','斯里兰卡','苏丹','苏里南','斯威士兰','瑞典','瑞士','叙利亚','塔吉克斯坦','坦桑尼亚','泰国','多哥','汤加','特立尼达和多巴哥','突尼斯','土耳其','土库曼斯坦','美属维尔京群岛','乌干达','乌克兰','乌拉圭','乌兹别克斯坦','委内瑞拉','越南','也门','赞比亚','津巴布韦','安道尔','留尼汪','波兰','关岛','梵蒂冈','列支敦士登','库拉索','塞舌尔','南极','直布罗陀','古巴','法罗群岛','奥兰群岛','百慕达','东帝汶'],
  full: ['Hong Kong','Macao','Taiwan','Japan','Korea','Singapore','United States','United Kingdom','France','Germany','Australia','Dubai','Afghanistan','Albania','Algeria','Angola','Argentina','Armenia','Austria','Azerbaijan','Bahrain','Bangladesh','Belarus','Belgium','Belize','Benin','Bhutan','Bolivia','Bosnia and Herzegovina','Botswana','Brazil','British Virgin Islands','Brunei','Bulgaria','Burkina-faso','Burundi','Cambodia','Cameroon','Canada','CapeVerde','CaymanIslands','Central African Republic','Chad','Chile','Colombia','Comoros','Congo-Brazzaville','Congo-Kinshasa','CostaRica','Croatia','Cyprus','Czech Republic','Denmark','Djibouti','Dominican Republic','Ecuador','Egypt','EISalvador','Equatorial Guinea','Eritrea','Estonia','Ethiopia','Fiji','Finland','Gabon','Gambia','Georgia','Ghana','Greece','Greenland','Guatemala','Guinea','Guyana','Haiti','Honduras','Hungary','Iceland','India','Indonesia','Iran','Iraq','Ireland','Isle of Man','Israel','Italy','Ivory Coast','Jamaica','Jordan','Kazakstan','Kenya','Kuwait','Kyrgyzstan','Laos','Latvia','Lebanon','Lesotho','Liberia','Libya','Lithuania','Luxembourg','Macedonia','Madagascar','Malawi','Malaysia','Maldives','Mali','Malta','Mauritania','Mauritius','Mexico','Moldova','Monaco','Mongolia','Montenegro','Morocco','Mozambique','Myanmar(Burma)','Namibia','Nepal','Netherlands','New Zealand','Nicaragua','Niger','Nigeria','NorthKorea','Norway','Oman','Pakistan','Panama','Paraguay','Peru','Philippines','Portugal','PuertoRico','Qatar','Romania','Russia','Rwanda','SanMarino','SaudiArabia','Senegal','Serbia','SierraLeone','Slovakia','Slovenia','Somalia','SouthAfrica','Spain','SriLanka','Sudan','Suriname','Swaziland','Sweden','Switzerland','Syria','Tajikstan','Tanzania','Thailand','Togo','Tonga','TrinidadandTobago','Tunisia','Turkey','Turkmenistan','U.S.Virgin Islands','Uganda','Ukraine','Uruguay','Uzbekistan','Venezuela','Vietnam','Yemen','Zambia','Zimbabwe','Andorra','Reunion','Poland','Guam','Vatican','Liechtensteins','Curacao','Seychelles','Antarctica','Gibraltar','Cuba','Faroe Islands','Ahvenanmaa','Bermuda','Timor-Leste']
};

const SPECIAL_IDENTIFIERS = [
  { pattern: /ˣ²/, value: "2×" },
  { pattern: /ˣ³/, value: "3×" },
  { pattern: /ˣ⁴/, value: "4×" },
  { pattern: /ˣ⁵/, value: "5×" },
  { pattern: /ˣ⁶/, value: "6×" },
  { pattern: /ˣ⁷/, value: "7×" },
  { pattern: /ˣ⁸/, value: "8×" },
  { pattern: /ˣ⁹/, value: "9×" },
  { pattern: /ˣ¹⁰/, value: "10×" },
  { pattern: /IPLC/i, value: "IPLC" },
  { pattern: /IEPL/i, value: "IEPL" },
  { pattern: /核心/, value: "Kern" },
  { pattern: /边缘/, value: "Edge" },
  { pattern: /高级/, value: "Pro" },
  { pattern: /标准/, value: "Std" },
  { pattern: /实验/, value: "Exp" },
  { pattern: /商宽/, value: "Biz" },
  { pattern: /家宽/, value: "Fam" },
  { pattern: /游戏|game/i, value: "Game" },
  { pattern: /购物/, value: "Buy" },
  { pattern: /专线/, value: "Zx" },
  { pattern: /LB/, value: "LB" },
  { pattern: /cloudflare/i, value: "CF" },
  { pattern: /\budp\b/i, value: "UDP" },
  { pattern: /\bgpt\b/i, value: "GPT" },
  { pattern: /udpn\b/, value: "UDPN" }
];

const RATE_REGEX = /((倍率|X|x|×)\D?((\d{1,3}\.)?\d+)\D?)|((\d{1,3}\.)?\d+)(倍|X|x|×)/;
const CLEAN_REGEX = /(套餐|到期|有效|剩余|版本|已用|过期|失联|测试|官方|网址|备用|群|TEST|客服|网站|获取|订阅|流量|机场|下次|官址|联系|邮箱|工单|学术|USE|USED|TOTAL|EXPIRE|EMAIL)/i;
const KEY_NODE_REGEX = /港|Hong|HK|新加坡|SG|Singapore|日本|Japan|JP|美国|United States|US|韩|土耳其|TR|Turkey|Korea|KR|🇸🇬|🇭🇰|🇯🇵|🇺🇸|🇰🇷|🇹🇷/i;
const KEY_NODE_FILTER = /(((1|2|3|4)\d)|(香港|Hong|HK) 0[5-9]|((新加坡|SG|Singapore|日本|Japan|JP|美国|United States|US|韩|土耳其|TR|Turkey|Korea|KR) 0[3-9]))/i;

// ==================== 核心功能 ====================

class NodeRenamer {
  constructor(arguments) {
    this.config = this.initConfig(arguments);
    this.countryMapper = this.createCountryMapper();
    this.performance = {
      startTime: Date.now(),
      nodesProcessed: 0
    };
  }

  initConfig(args) {
    return {
      inputType: args.in || "",
      outputType: args.out || "zh",
      separator: args.fgf ? decodeURI(args.fgf) : " ",
      numSeparator: args.sn ? decodeURI(args.sn) : " ",
      prefix: args.name ? decodeURI(args.name) : "",
      prefixFirst: !!args.nf,
      keepUnmatched: !!args.nm,
      addFlag: !!args.flag,
      cleanSingleNum: !!args.one,
      blockQUIC: args.blockquic,
      reservedKeys: args.blkey ? decodeURI(args.blkey).split("+") : [],
      keepSpecial: !!args.blgd,
      keepRate: !!args.bl,
      filterLowRate: !!args.nx,
      filterHighRate: !!args.blnx,
      specialSort: !!args.blpx,
      cleanNames: !!args.clear,
      filterKeyNodes: !!args.key,
      debugMode: !!args.debug
    };
  }

  createCountryMapper() {
    const mapper = new Map();
    const outputData = COUNTRY_DATA[this.getOutputType()];
    
    // 获取输入数据源
    const inputTypes = this.config.inputType 
      ? [this.config.inputType]
      : ['zh', 'flags', 'full', 'en'];
    
    // 构建映射关系
    inputTypes.forEach(type => {
      const inputData = COUNTRY_DATA[type];
      if (inputData) {
        inputData.forEach((value, index) => {
          if (outputData[index]) {
            mapper.set(value, outputData[index]);
          }
        });
      }
    });
    
    return mapper;
  }

  getOutputType() {
    switch(this.config.outputType) {
      case 'cn': case 'zh': return 'zh';
      case 'us': case 'en': return 'en';
      case 'quan': return 'full';
      case 'gq': case 'flag': return 'flags';
      default: return 'zh';
    }
  }

  process(proxies) {
    try {
      this.log("开始处理节点列表");
      
      // 预处理过滤
      proxies = this.preFilter(proxies);
      
      // 处理每个节点
      proxies.forEach(proxy => {
        this.processNode(proxy);
        this.performance.nodesProcessed++;
      });
      
      // 后处理
      proxies = this.postProcess(proxies);
      
      this.log(`处理完成，共处理 ${this.performance.nodesProcessed} 个节点，耗时 ${Date.now() - this.performance.startTime}ms`);
      return proxies;
    } catch (error) {
      console.error(`节点处理出错: ${error.message}`);
      return proxies; // 出错时返回原始节点
    }
  }

  preFilter(proxies) {
    if (!(this.config.cleanNames || this.config.filterLowRate || 
         this.config.filterHighRate || this.config.filterKeyNodes)) {
      return proxies;
    }
    
    return proxies.filter(proxy => {
      const name = proxy.name;
      
      if (this.config.cleanNames && CLEAN_REGEX.test(name)) {
        return false;
      }
      
      if (this.config.filterLowRate && this.hasLowRate(name)) {
        return false;
      }
      
      if (this.config.filterHighRate && !this.hasHighRate(name)) {
        return false;
      }
      
      if (this.config.filterKeyNodes && !(KEY_NODE_REGEX.test(name) && /2|4|6|7/i.test(name))) {
        return false;
      }
      
      return true;
    });
  }

  processNode(proxy) {
    const originalName = proxy.name;
    let processedName = originalName;
    
    // 处理保留关键词
    const reservedParts = this.processReservedKeywords(originalName);
    
    // 处理特殊标识
    const specialIdentifiers = this.config.keepSpecial 
      ? this.extractSpecialIdentifiers(originalName) 
      : [];
    
    // 处理倍率标识
    const rateIdentifier = this.config.keepRate 
      ? this.extractRateIdentifier(originalName) 
      : "";
    
    // 处理QUIC设置
    this.processQUIC(proxy);
    
    // 查找匹配的国家/地区
    const matchedCountry = this.findMatchedCountry(originalName);
    
    // 构建新名称
    if (matchedCountry) {
      processedName = this.buildNewName(
        matchedCountry, 
        reservedParts, 
        specialIdentifiers, 
        rateIdentifier
      );
    } else if (this.config.keepUnmatched) {
      processedName = this.config.prefix + this.config.separator + originalName;
    } else {
      processedName = null;
    }
    
    proxy.name = processedName;
  }

  processReservedKeywords(originalName) {
    if (!this.config.reservedKeys.length) return [];
    
    const result = [];
    this.config.reservedKeys.forEach(key => {
      if (key.includes(">")) {
        const [oldKey, newKey] = key.split(">");
        if (originalName.includes(oldKey)) {
          result.push(newKey || oldKey);
        }
      } else if (originalName.includes(key)) {
        result.push(key);
      }
    });
    
    return result;
  }

  extractSpecialIdentifiers(name) {
    return SPECIAL_IDENTIFIERS
      .filter(item => item.pattern.test(name))
      .map(item => item.value);
  }

  extractRateIdentifier(name) {
    const match = name.match(RATE_REGEX);
    if (match) {
      const rateValue = match[0].match(/(\d[\d.]*)/)[0];
      return rateValue !== "1" ? rateValue + "×" : "";
    }
    return "";
  }

  processQUIC(proxy) {
    if (this.config.blockQUIC) {
      proxy["block-quic"] = this.config.blockQUIC === "on" ? "on" : "off";
    } else {
      delete proxy["block-quic"];
    }
  }

  findMatchedCountry(name) {
    for (const [key, value] of this.countryMapper) {
      if (name.includes(key)) {
        return value;
      }
    }
    return null;
  }

  buildNewName(country, reservedParts, specialIdentifiers, rateIdentifier) {
    const parts = [];
    
    // 添加前缀
    if (this.config.prefixFirst && this.config.prefix) {
      parts.push(this.config.prefix);
    }
    
    // 添加国旗
    if (this.config.addFlag) {
      const flagIndex = COUNTRY_DATA[this.getOutputType()].indexOf(country);
      if (flagIndex !== -1) {
        const flag = COUNTRY_DATA.flags[flagIndex];
        parts.push(flag === "🇹🇼" ? "🇨🇳" : flag);
      }
    }
    
    // 添加非前置前缀
    if (!this.config.prefixFirst && this.config.prefix) {
      parts.push(this.config.prefix);
    }
    
    // 添加国家/地区
    parts.push(country);
    
    // 添加保留部分
    if (reservedParts.length) {
      parts.push(...reservedParts);
    }
    
    // 添加倍率标识
    if (rateIdentifier) {
      parts.push(rateIdentifier);
    }
    
    // 添加特殊标识
    if (specialIdentifiers.length) {
      parts.push(...specialIdentifiers);
    }
    
    return parts.join(this.config.separator);
  }

  postProcess(proxies) {
    // 过滤掉被标记为null的节点
    proxies = proxies.filter(proxy => proxy.name !== null);
    
    // 节点编号处理
    proxies = this.processNumbering(proxies);
    
    // 清理单节点编号
    if (this.config.cleanSingleNum) {
      proxies = this.cleanSingleNumbering(proxies);
    }
    
    // 特殊排序
    if (this.config.specialSort) {
      proxies = this.specialSort(proxies);
    }
    
    // 关键节点过滤
    if (this.config.filterKeyNodes) {
      proxies = this.filterKeyNodes(proxies);
    }
    
    return proxies;
  }

  processNumbering(proxies) {
    const grouped = new Map();
    
    proxies.forEach(proxy => {
      const baseName = proxy.name.replace(new RegExp(`${this.config.numSeparator}\\d+$`), "");
      
      if (!grouped.has(baseName)) {
        grouped.set(baseName, []);
      }
      grouped.get(baseName).push(proxy);
    });
    
    const result = [];
    
    grouped.forEach((group, baseName) => {
      group.forEach((proxy, index) => {
        proxy.name = `${baseName}${this.config.numSeparator}${(index + 1).toString().padStart(2, "0")}`;
        result.push(proxy);
      });
    });
    
    return result;
  }

  cleanSingleNumbering(proxies) {
    const nameCounts = new Map();
    
    // 统计每个基础名称出现的次数
    proxies.forEach(proxy => {
      const baseName = proxy.name.replace(new RegExp(`${this.config.numSeparator}\\d+$`), "");
      nameCounts.set(baseName, (nameCounts.get(baseName) || 0) + 1);
    });
    
    // 清理单节点的编号
    return proxies.map(proxy => {
      const baseName = proxy.name.replace(new RegExp(`${this.config.numSeparator}\\d+$`), "");
      if (nameCounts.get(baseName) === 1 && proxy.name.endsWith("01")) {
        proxy.name = baseName;
      }
      return proxy;
    });
  }

  specialSort(proxies) {
    const withSpecial = [];
    const withoutSpecial = [];
    
    proxies.forEach(proxy => {
      const hasSpecial = SPECIAL_IDENTIFIERS.some(item => item.pattern.test(proxy.name));
      if (hasSpecial) {
        withSpecial.push(proxy);
      } else {
        withoutSpecial.push(proxy);
      }
    });
    
    // 对含特殊标识的节点进行排序
    withSpecial.sort((a, b) => {
      const aIndex = SPECIAL_IDENTIFIERS.findIndex(item => item.pattern.test(a.name));
      const bIndex = SPECIAL_IDENTIFIERS.findIndex(item => item.pattern.test(b.name));
      return aIndex - bIndex || a.name.localeCompare(b.name);
    });
    
    return [...withoutSpecial, ...withSpecial];
  }

  filterKeyNodes(proxies) {
    return proxies.filter(proxy => !KEY_NODE_FILTER.test(proxy.name));
  }

  hasLowRate(name) {
    return /(高倍|(?!1)(0\.|\d)+(x|倍)|ˣ²|ˣ³|ˣ⁴|ˣ⁵|ˣ¹⁰)/i.test(name);
  }

  hasHighRate(name) {
    return /(高倍|(?!1)2+(x|倍)|ˣ²|ˣ³|ˣ⁴|ˣ⁵|ˣ¹⁰)/i.test(name);
  }

  log(message) {
    if (this.config.debugMode) {
      console.log(`[NodeRenamer] ${message}`);
    }
  }
}

// ==================== 主入口 ====================
function operator(proxies) {
  const renamer = new NodeRenamer($arguments || {});
  return renamer.process(proxies);
}
