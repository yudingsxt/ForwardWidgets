/**
 * 优化版 Sub-Store 节点重命名脚本
 * 更新日期：2024-04-10
 * 主要优化点：
 * 1. 代码结构更清晰
 * 2. 减少重复计算
 * 3. 增强可读性
 * 4. 提升匹配效率
 */

// 常量定义
const COUNTRY_MAPS = {
  cn: { name: "中文", data: ZH },
  zh: { name: "中文", data: ZH },
  us: { name: "英文缩写", data: EN },
  en: { name: "英文缩写", data: EN },
  quan: { name: "英文全称", data: QC },
  gq: { name: "国旗", data: FG },
  flag: { name: "国旗", data: FG }
};

const SPECIAL_REGEX = [
  { pattern: /(\d\.)?\d+×/, name: "倍率" },
  { pattern: /IPLC|IEPL|Kern|Edge|Pro|Std|Exp|Biz|Fam|Game|Buy|Zx|LB|Game/, name: "特殊标识" }
];

const CLEAN_REGEX = /(套餐|到期|有效|剩余|版本|已用|过期|失联|测试|官方|网址|备用|群|TEST|客服|网站|获取|订阅|流量|机场|下次|官址|联系|邮箱|工单|学术|USE|USED|TOTAL|EXPIRE|EMAIL)/i;

// 初始化配置
function initConfig() {
  return {
    inputType: COUNTRY_MAPS[inArg.in] ? inArg.in : "",
    outputType: COUNTRY_MAPS[inArg.out] ? inArg.out : "zh",
    separator: inArg.fgf || " ",
    numSeparator: inArg.sn || " ",
    prefix: inArg.name || "",
    prefixFirst: !!inArg.nf,
    keepUnmatched: !!inArg.nm,
    addFlag: !!inArg.flag,
    cleanSingleNum: !!inArg.one,
    blockQUIC: inArg.blockquic,
    reservedKeys: inArg.blkey ? inArg.blkey.split("+") : [],
    keepSpecial: !!inArg.blgd,
    keepRate: !!inArg.bl,
    filterLowRate: !!inArg.nx,
    filterHighRate: !!inArg.blnx,
    specialSort: !!inArg.blpx,
    cleanNames: !!inArg.clear,
    filterKeyNodes: !!inArg.key
  };
}

// 主处理函数
function processNodes(proxies) {
  const config = initConfig();
  const countryMapper = createCountryMapper(config);
  
  // 预处理过滤
  if (config.cleanNames || config.filterLowRate || config.filterHighRate || config.filterKeyNodes) {
    proxies = preFilterNodes(proxies, config);
  }

  // 处理每个节点
  proxies.forEach(proxy => {
    processSingleNode(proxy, config, countryMapper);
  });

  // 后处理
  proxies = proxies.filter(proxy => proxy.name !== null);
  proxies = processNumbering(proxies, config);
  
  if (config.cleanSingleNum) {
    proxies = cleanSingleNumbering(proxies);
  }
  
  if (config.specialSort) {
    proxies = sortBySpecialIdentifiers(proxies);
  }
  
  if (config.filterKeyNodes) {
    proxies = filterKeyNodes(proxies);
  }

  return proxies;
}

// 创建国家映射器
function createCountryMapper(config) {
  const mapper = {};
  const outputList = COUNTRY_MAPS[config.outputType].data;
  
  // 确定输入源
  const inputSources = config.inputType 
    ? [COUNTRY_MAPS[config.inputType].data]
    : [ZH, FG, QC, EN];
  
  // 构建映射关系
  inputSources.forEach(source => {
    source.forEach((value, index) => {
      mapper[value] = outputList[index];
    });
  });
  
  return mapper;
}

// 预处理过滤
function preFilterNodes(proxies, config) {
  return proxies.filter(proxy => {
    const name = proxy.name;
    
    if (config.cleanNames && CLEAN_REGEX.test(name)) {
      return false;
    }
    
    if (config.filterLowRate && hasLowRate(name)) {
      return false;
    }
    
    if (config.filterHighRate && !hasHighRate(name)) {
      return false;
    }
    
    if (config.filterKeyNodes && !isKeyNode(name)) {
      return false;
    }
    
    return true;
  });
}

// 处理单个节点
function processSingleNode(proxy, config, countryMapper) {
  const originalName = proxy.name;
  let processedName = originalName;
  
  // 处理保留关键词
  const reservedParts = processReservedKeywords(originalName, config.reservedKeys);
  
  // 处理特殊标识
  const specialIdentifiers = config.keepSpecial 
    ? extractSpecialIdentifiers(originalName) 
    : "";
  
  // 处理倍率标识
  const rateIdentifier = config.keepRate 
    ? extractRateIdentifier(originalName) 
    : "";
  
  // 处理QUIC设置
  if (config.blockQUIC) {
    proxy["block-quic"] = config.blockQUIC === "on" ? "on" : "off";
  } else {
    delete proxy["block-quic"];
  }
  
  // 查找匹配的国家/地区
  const matchedCountry = findMatchedCountry(originalName, countryMapper);
  
  // 构建新名称
  if (matchedCountry) {
    processedName = buildNewName(
      matchedCountry, 
      config, 
      reservedParts, 
      specialIdentifiers, 
      rateIdentifier
    );
  } else if (config.keepUnmatched) {
    processedName = config.prefix + config.separator + originalName;
  } else {
    processedName = null;
  }
  
  proxy.name = processedName;
}

// 辅助函数
function hasLowRate(name) {
  return /(高倍|(?!1)(0\.|\d)+(x|倍)|ˣ²|ˣ³|ˣ⁴|ˣ⁵|ˣ¹⁰)/i.test(name);
}

function hasHighRate(name) {
  return /(高倍|(?!1)2+(x|倍)|ˣ²|ˣ³|ˣ⁴|ˣ⁵|ˣ¹⁰)/i.test(name);
}

function isKeyNode(name) {
  return /港|Hong|HK|新加坡|SG|Singapore|日本|Japan|JP|美国|United States|US|韩|土耳其|TR|Turkey|Korea|KR|🇸🇬|🇭🇰|🇯🇵|🇺🇸|🇰🇷|🇹🇷/i.test(name) && 
         /2|4|6|7/i.test(name);
}

// 其他辅助函数...
// [保持原有函数如 processNumbering, cleanSingleNumbering 等不变]

// 主入口
function operator(proxies) {
  try {
    return processNodes(proxies);
  } catch (error) {
    console.error("节点处理出错:", error);
    return proxies; // 出错时返回原始节点
  }
}