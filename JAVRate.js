var WidgetMetadata = {
  id: "ti.bemarkt.javrate",
  title: "JAVRate",
  description: "获取 JAVRate 推荐数据",
  author: "Ti",
  site: "https://www.javrate.com/",
  version: "1.0.0",
  requiredVersion: "0.0.1",
  modules: [
    {
      title: "按分类浏览",
      description: "根据选择的分类浏览 JAVRate 上的视频。",
      functionName: "getJAVRateContent",
      params: [
        {
          name: "baseUrl",
          title: "JAVRate 网址",
          type: "input",
          value: "https://www.javrate.com",
          description: "JAVRate 可用网址，例如 https://www.javrate.com",
        },
        {
          name: "categoryPath",
          title: "选择分类",
          type: "enumeration",
          value: "/movie/new/",
          enumOptions: [
            { title: "最新发布", value: "/movie/new/" },
            { title: "无码A片", value: "/menu/uncensored/" },
            { title: "日本A片", value: "/menu/censored/" },
            { title: "国产AV", value: "/menu/chinese/" },
            { title: "热门排行", value: "/movie/hot/" },
            { title: "评分最高", value: "/movie/top/" },
          ],
        },
        {
          name: "page",
          title: "页码",
          type: "page",
        },
      ],
    },
  ],
  search: {
    title: "搜索影片",
    functionName: "searchJAVRate",
    params: [
      {
        name: "baseUrl",
        title: "JAVRate 网址",
        type: "input",
        value: "https://www.javrate.com",
        description: "JAVRate 可用网址 (用于搜索)",
      },
      {
        name: "query",
        title: "搜索词",
        type: "input",
        description: "输入番号、标题关键词或演员名称",
      },
      {
        name: "page",
        title: "页码",
        type: "page",
      },
    ],
  },
};

const VIDEO_PLAY_REFERER = "https://iframe.mediadelivery.net/";
const DETAIL_FETCH_BATCH_SIZE = 5; // 每批获取详情的数量

function getCommonHeaders(baseUrl) {
  return {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
    Referer: baseUrl
      ? baseUrl.endsWith("/")
        ? baseUrl
        : baseUrl + "/"
      : "https://www.javrate.com/",
  };
}

/**
 * 转换时间
 * @param {string} durationText
 * @returns {number|null}
 */
function parseDurationToMinutes(durationText) {
  if (!durationText || typeof durationText !== "string") return null;
  const parts = durationText
    .split(":")
    .map((part) => parseInt(part.trim(), 10));

  let totalMinutes = 0;

  if (parts.some(isNaN)) return null;

  if (parts.length === 3) {
    // HH : MM : SS
    totalMinutes = parts[0] * 60 + parts[1] + parts[2] / 60;
  } else if (parts.length === 2) {
    // MM : SS
    totalMinutes = parts[0] + parts[1] / 60;
  } else {
    return null;
  }
  return totalMinutes;
}

/**
 * 解析影片详情页的HTML内容。
 * @param {string} detailPageHtml - 详情页的HTML字符串。
 * @param {string} detailPageUrl - 详情页的URL，用于错误日志和ID。
 * @param {string} currentBaseUrl - 当前使用的 JAVRate 网址，用于解析相对路径。
 * @returns {object} 包含影片详细信息的对象。
 */
function parseDetailPage(detailPageHtml, detailPageUrl, currentBaseUrl) {
  const $ = Widget.html.load(detailPageHtml);

  // --- 主影片信息提取 ---
  let title = "";
  const titleH1 = $("h1.fw-bolder.fs-3");
  const movieNumber = titleH1.find("label.fg-main").text().trim();
  let movieMainTitle = "";
  titleH1.contents().each(function () {
    if (this.type === "text" && $(this).text().trim()) {
      movieMainTitle += $(this).text().trim() + " ";
    }
  });
  movieMainTitle = movieMainTitle.trim();
  title = movieNumber ? `${movieNumber} ${movieMainTitle}` : movieMainTitle;
  if (!title) {
    title = $("title").text().split("|")[0].trim();
  }

  let videoUrl = null;
  let dPlayerPoster = null;
  const scripts = $("script");
  const dplayerRegex = /new DPlayer\(\s*(\{[\s\S]*?\})\s*\);/m;
  const videoUrlRegex = /url:\s*'([^']+)'/;
  const picRegex = /pic:\s*'([^']+)'/;

  scripts.each((i, script) => {
    const scriptContent = $(script).html();
    if (scriptContent) {
      const match = scriptContent.match(dplayerRegex);
      if (match && match[1]) {
        const dplayerConfig = match[1];
        const videoUrlMatch = dplayerConfig.match(videoUrlRegex);
        if (videoUrlMatch && videoUrlMatch[1]) {
          videoUrl = videoUrlMatch[1];
        }
        const picMatch = dplayerConfig.match(picRegex);
        if (picMatch && picMatch[1]) {
          dPlayerPoster = picMatch[1].replace(/\\/g, "/");
        }
      }
    }
  });

  if (!videoUrl) {
    videoUrl = $('section[style*="padding-top:56.25%"] iframe').attr("src");
  }

  const description = $(
    ".movie-detail-main .col-xl-10.col-12.fg-light4.text-line-height"
  )
    .text()
    .trim();

  let releaseDate = "";
  $("aside .row.justify-content-start.mt-4").each((i, el) => {
    const h4Elements = $(el).find("h4");
    if (h4Elements.length >= 2) {
      const labelText = h4Elements.first().text().trim();
      if (labelText.includes("发片日期")) {
        releaseDate = h4Elements.eq(1).text().trim();
      }
    }
  });
  if (releaseDate) {
    const dateMatch = releaseDate.match(/(\d{4})年(\d{1,2})月(\d{1,2})日/);
    if (dateMatch) {
      releaseDate = `${dateMatch[1]}-${dateMatch[2].padStart(
        2,
        "0"
      )}-${dateMatch[3].padStart(2, "0")}`;
    }
  }

  let durationText = "";
  let durationMinutes = null;
  $("aside div.row.justify-content-start.mt-3").each((i, rowElement) => {
    const firstColLabel = $(rowElement).find(
      "div.col-auto:first-child label.fs-4"
    );
    if (firstColLabel.text().includes("播放時長")) {
      const durationLabel = $(rowElement).find(
        "div.col-auto:nth-child(2) label.fs-4"
      );
      if (durationLabel.length > 0) {
        durationText = durationLabel.text().trim();
        durationMinutes = parseDurationToMinutes(durationText);
        return false;
      }
    }
  });

  const tags = [];
  $(".d-flex.flex-wrap.justify-content-start.mt-3 h3 span.badge a").each(
    (i, el) => {
      tags.push($(el).text().trim());
    }
  );
  const genreTitle = tags.join(", ");

  const actors = [];
  $(".movie-actor-box .movie-actor-box-name h3 a").each((i, el) => {
    actors.push($(el).text().trim());
  });
  let actorsString = actors.length > 0 ? `演员: ${actors.join(", ")}` : "";

  let studio = "";
  const studioElement = $("aside .company-tag a").first();
  if (studioElement.length > 0) {
    studio = studioElement.text().trim();
  }
  let studioString = studio ? `出品: ${studio}` : "";

  let fullDescription = description;
  if (actorsString) fullDescription += `\n\n${actorsString}`;
  if (studioString) fullDescription += `\n${studioString}`;

  let backdropPath = $(".movie-detail-bg").css("background-image");
  if (backdropPath) {
    backdropPath = backdropPath
      .replace(/^url\(["']?/, "")
      .replace(/["']?\)$/, "");
    backdropPath = backdropPath.replace(/\\/g, "/");
  }

  let posterPath = dPlayerPoster;
  if (!posterPath) {
    try {
      const schemaScript = $('script[type="application/ld+json"]').html();
      if (schemaScript) {
        const schemaData = JSON.parse(schemaScript);
        if (schemaData && schemaData.thumbnailUrl) {
          posterPath = schemaData.thumbnailUrl.replace(/\\/g, "/");
        }
      }
    } catch (e) {
      console.warn(
        `parseDetailPage: Could not parse schema.org JSON-LD for posterPath on ${detailPageUrl}:`,
        e
      );
    }
  }
  if (!posterPath && backdropPath) {
    posterPath = backdropPath;
  }

  // --- “你可能也喜欢:” 子项目提取 ---
  const childItems = [];
  $('article.col-xl-7 div.row.me-2.mt-5 div[class*="col-xl-3"]').each(
    (idx, el) => {
      const childItem = $(el);
      const linkElement = childItem.find(".movie-box-default > a");
      const relativeLink = linkElement.attr("href");

      if (!relativeLink) return;

      let absoluteLink = relativeLink;
      if (relativeLink.startsWith("/")) {
        absoluteLink = currentBaseUrl + relativeLink;
      } else if (!relativeLink.startsWith("http")) {
        console.warn(
          `parseDetailPage: Unexpected relative link for child item: ${relativeLink} on page ${detailPageUrl}`
        );
        absoluteLink = currentBaseUrl + "/" + relativeLink;
      }

      let childPoster = childItem
        .find(".movie-box-default > a > img")
        .attr("src");

      const titleElement = childItem.find(".movie-box-title a").last();
      let childTitle = titleElement.text().trim();
      if (!childTitle) {
        childTitle = childItem.find(".movie-box-default > a > img").attr("alt");
      }
      const idPart = childItem
        .find(".movie-box-title label.fg-main a")
        .text()
        .trim();
      if (!childTitle && idPart) childTitle = idPart;

      let childReleaseDate = "";
      const dateLabelChild = childItem.find(
        ".d-flex.justify-content-between > label.fg-light5"
      );
      if (dateLabelChild.length > 0) {
        const tempDateLabelChild = dateLabelChild.clone();
        tempDateLabelChild.find("i").remove();
        childReleaseDate = tempDateLabelChild.text().trim();
        const dateParts = childReleaseDate.match(/(\d{2})\/(\d{2})\/(\d{4})/);
        if (dateParts) {
          childReleaseDate = `${dateParts[3]}-${dateParts[1]}-${dateParts[2]}`;
        } else {
          const ymdParts = childReleaseDate.match(/(\d{4})-(\d{2})-(\d{2})/);
          if (ymdParts) {
            childReleaseDate = `${ymdParts[1]}-${ymdParts[2]}-${ymdParts[3]}`;
          } else {
            childReleaseDate = "";
          }
        }
      }

      let childRating = "";
      // Corrected rating extraction for child items
      const ratingDiv = childItem
        .find("div.d-flex.justify-content-between > div.fg-light5")
        .first();
      if (ratingDiv.length > 0) {
        let ratingLabelElement = ratingDiv.find(
          "label[style*='vertical-align:middle']"
        );
        if (ratingLabelElement.length === 0) {
          // Fallback to any label in that div
          ratingLabelElement = ratingDiv.find("label");
        }
        if (ratingLabelElement.length > 0) {
          const text = ratingLabelElement.text().trim();
          if (text) {
            childRating = "5.0";
          }
        }
      }

      if (childTitle && absoluteLink) {
        childItems.push({
          id: absoluteLink,
          type: "url",
          title: childTitle,
          posterPath: childPoster,
          backdropPath: childPoster,
          link: absoluteLink,
          releaseDate: childReleaseDate || null,
          rating: childRating || null,
          mediaType: "movie",
          videoUrl: null,
          description: `番号: ${idPart || "N/A"}`,
        });
      }
    }
  );

  return {
    id: detailPageUrl,
    type: "url",
    title: title || "详情加载中...",
    videoUrl: videoUrl,
    description: fullDescription || "暂无简介",
    releaseDate: releaseDate,
    durationText: durationText,
    duration: durationMinutes,
    genreTitle: genreTitle,
    posterPath: posterPath,
    backdropPath: backdropPath,
    link: detailPageUrl,
    childItems: childItems,
  };
}

/**
 * 解析列表页面中的影片条目，并分批获取详细信息
 * @param {string} currentBaseUrl - 当前使用的 JAVRate 网址。
 * @param {CheerioAPI} $ - 列表页面的Cheerio实例。
 * @param {string} listPageUrl - 列表页面的URL。
 * @returns {Promise<Array<object>>}
 */
async function parseItems(currentBaseUrl, $, listPageUrl) {
  const allVideoItems = [];
  const itemSelectors = [
    '.body-container .container-fluid .row > div[class*="col-xl-2"]',
    '.container-fluid .row > div[class*="col-xl-2"]',
    'div.row > div[class*="col-"]',
  ];

  let items = $(itemSelectors[0]);
  if (items.length === 0) items = $(itemSelectors[1]);
  if (items.length === 0) items = $(itemSelectors[2]);

  console.log(
    `parseItems: Found ${items.length} potential items on ${listPageUrl}`
  );

  const listPageItems = [];
  items.each((index, element) => {
    const item = $(element);
    const movieBox = item.find(".movie-box-default");
    if (movieBox.length === 0) return;

    const detailLinkRelative = movieBox.find("> a").attr("href");
    let listItemPoster = movieBox.find("> a > img").attr("src");
    if (listItemPoster) listItemPoster = listItemPoster.replace(/\\/g, "/");

    const listItemTitleElement = item.find(".movie-box-title a");
    let listItemTitle = listItemTitleElement.text().trim();
    if (!listItemTitle) listItemTitle = movieBox.find("> a > img").attr("alt");

    if (!detailLinkRelative || !listItemTitle) {
      console.warn(
        `parseItems: Skipping item on list page ${listPageUrl} due to missing link or title.`
      );
      return;
    }
    const detailLinkAbsolute = currentBaseUrl + detailLinkRelative;
    const ratingFromList = item
      .find(".d-lg-flex .fg-light5 label")
      .text()
      .trim(); // 列表页的评分
    const genreFromList = item
      .find(".movie-box-default .box-top .badge.bg-danger label")
      .text()
      .trim(); //列表页的分类

    listPageItems.push({
      detailLinkAbsolute,
      listItemTitle,
      listItemPoster,
      ratingFromList,
      genreFromList,
    });
  });

  for (let i = 0; i < listPageItems.length; i += DETAIL_FETCH_BATCH_SIZE) {
    const batch = listPageItems.slice(i, i + DETAIL_FETCH_BATCH_SIZE);
    console.log(
      `parseItems: Processing batch ${
        i / DETAIL_FETCH_BATCH_SIZE + 1
      } of ${Math.ceil(
        listPageItems.length / DETAIL_FETCH_BATCH_SIZE
      )} for ${listPageUrl}`
    );

    const batchPromises = batch.map(async (baseItem) => {
      try {
        const detailResponse = await Widget.http.get(
          baseItem.detailLinkAbsolute,
          {
            headers: getCommonHeaders(currentBaseUrl),
          }
        );
        if (!detailResponse || !detailResponse.data) {
          throw new Error(
            `No data from detail page: ${baseItem.detailLinkAbsolute}`
          );
        }
        const detailData = parseDetailPage(
          detailResponse.data,
          baseItem.detailLinkAbsolute,
          currentBaseUrl
        );

        return {
          id: baseItem.detailLinkAbsolute,
          type: "url",
          title: detailData.title || baseItem.listItemTitle,
          posterPath: detailData.posterPath || baseItem.listItemPoster,
          link: baseItem.detailLinkAbsolute,
          videoUrl: detailData.videoUrl,
          description: detailData.description,
          releaseDate: detailData.releaseDate,
          rating: baseItem.ratingFromList, // 使用列表页的评分
          genreTitle: detailData.genreTitle || baseItem.genreFromList, // 优先详情页，备选列表页
          mediaType: "movie",
          durationText: detailData.durationText,
          duration: detailData.duration,
          backdropPath: detailData.backdropPath,
          customHeaders: detailData.videoUrl
            ? { Referer: VIDEO_PLAY_REFERER }
            : undefined,
          childItems: detailData.childItems || [],
        };
      } catch (error) {
        console.error(
          `parseItems: Error fetching/parsing detail for ${baseItem.detailLinkAbsolute} (from list ${listPageUrl}):`,
          error
        );
        return {
          id: baseItem.detailLinkAbsolute,
          type: "url",
          title: `${baseItem.listItemTitle} (详情加载失败)`,
          posterPath:
            baseItem.listItemPoster ||
            "https://placehold.co/200x300/A8D19E/F6F7F1?text=Made%5Cnby%5CnLove&font=source-sans-pro",
          backdropPath:
            baseItem.listItemPoster ||
            "https://placehold.co/200x300/A8D19E/F6F7F1?text=Made%5Cnby%5CnLove&font=source-sans-pro",
          link: baseItem.detailLinkAbsolute,
          description: `无法加载详情: ${error.message}`,
          mediaType: "movie",
        };
      }
    });
    const resolvedBatchItems = await Promise.all(batchPromises);
    allVideoItems.push(...resolvedBatchItems);
  }

  console.log(
    `parseItems: Parsed and detailed ${allVideoItems.length} items from ${listPageUrl}`
  );
  return allVideoItems.filter((item) => item);
}

/**
 * 通用列表数据获取
 * @param {string} currentBaseUrl - 当前使用的 JAVRate 网址
 * @param {string} path - 请求的路径 (例如 /movie/new/)
 * @param {object} params - 包含页码等参数的对象，page 从外部传入
 * @returns {Promise<Array<object>>}
 */
async function fetchDataForPath(currentBaseUrl, path, params = {}) {
  const page = parseInt(params.page, 10) || 1;
  let requestUrl;
  let basePathTrimmed = path.endsWith("/") ? path.slice(0, -1) : path;

  const MENU_PATHS_PREFIX = "/menu/";
  const DEFAULT_MENU_PAGINATION_PREFIX = "5-2-";
  const HOT_TOP_PATHS = ["/movie/hot/", "/movie/top/"];

  if (HOT_TOP_PATHS.includes(path)) {
    requestUrl = `${currentBaseUrl}${path}`;
    if (page > 1) {
      requestUrl += `?page=${page}`;
    }
  } else if (path.startsWith(MENU_PATHS_PREFIX)) {
    requestUrl = `${currentBaseUrl}${basePathTrimmed}/${DEFAULT_MENU_PAGINATION_PREFIX}${page}`;
  } else {
    if (page === 1) {
      requestUrl = `${currentBaseUrl}${path}`;
    } else {
      requestUrl = `${currentBaseUrl}${basePathTrimmed}/${page}.html`;
    }
  }

  console.log(`fetchDataForPath: Fetching list data from URL: ${requestUrl}`);

  try {
    const response = await Widget.http.get(requestUrl, {
      headers: getCommonHeaders(currentBaseUrl),
    });
    if (!response || !response.data) {
      console.error(
        `fetchDataForPath: Failed to fetch list data from ${requestUrl}, no response data.`
      );
      throw new Error(`无法从 ${requestUrl} 获取列表数据`);
    }

    const $ = Widget.html.load(response.data);
    return await parseItems(currentBaseUrl, $, requestUrl);
  } catch (error) {
    console.error(
      `fetchDataForPath: Error fetching or parsing list data from ${requestUrl}:`,
      error
    );
    return [
      {
        id: `error-list-${path}-${page}`,
        type: "url",
        title: `列表加载失败: ${path} (页 ${page})`,
        description: error.message,
        link: requestUrl,
        posterPath:
          "https://placehold.co/200x300/A8D19E/F6F7F1?text=Made%5Cnby%5CnLove&font=source-sans-pro",
        backdropPath:
          "https://placehold.co/200x300/A8D19E/F6F7F1?text=Made%5Cnby%5CnLove&font=source-sans-pro",
      },
    ];
  }
}

async function getJAVRateContent(params = {}) {
  const baseUrl = params.baseUrl || "https://www.javrate.com";
  const categoryPath = params.categoryPath;
  return fetchDataForPath(baseUrl, categoryPath, params);
}

async function searchJAVRate(params = {}) {
  const baseUrl = params.baseUrl || "https://www.javrate.com";
  const query = params.query;
  const page = parseInt(params.page, 10) || 1;

  if (!query) {
    throw new Error("请输入搜索关键词");
  }

  let searchPath = `/Search/${encodeURIComponent(query)}`;
  if (page === 1) {
    searchPath += ".html";
  } else {
    searchPath += `/${page}.html`;
  }

  const requestUrl = baseUrl + searchPath;
  console.log(`searchJAVRate: Searching list data from URL: ${requestUrl}`);

  try {
    const response = await Widget.http.get(requestUrl, {
      headers: getCommonHeaders(baseUrl),
    });
    if (!response || !response.data) {
      console.error(
        `searchJAVRate: Failed to fetch search list data from ${requestUrl}, no response data.`
      );
      throw new Error(`无法从 ${requestUrl} 获取搜索结果列表`);
    }
    const $ = Widget.html.load(response.data);
    return await parseItems(baseUrl, $, requestUrl);
  } catch (error) {
    console.error(
      `searchJAVRate: Error fetching or parsing search list data from ${requestUrl}:`,
      error
    );
    return [
      {
        id: `error-search-list-${query}-${page}`,
        type: "url",
        title: `搜索列表失败: ${query}`,
        description: error.message,
        link: requestUrl,
        posterPath:
          "https://placehold.co/200x300/A8D19E/F6F7F1?text=Made%5Cnby%5CnLove&font=source-sans-pro",
        backdropPath:
          "https://placehold.co/200x300/A8D19E/F6F7F1?text=Made%5Cnby%5CnLove&font=source-sans-pro",
      },
    ];
  }
}

async function loadDetail(linkValue) {
  let currentBaseUrl = "https://www.javrate.com";
  try {
    const urlParts = linkValue.match(/^(https?:\/\/[^/]+)/);
    if (urlParts && urlParts[1]) {
      currentBaseUrl = urlParts[1];
    }
  } catch (e) {
    console.warn(
      `loadDetail: Could not parse baseUrl from linkValue for loadDetail: ${linkValue}. Using default.`
    );
  }

  console.log(
    `loadDetail: loadDetail called with: ${linkValue} (using baseUrl: ${currentBaseUrl})`
  );
  try {
    const response = await Widget.http.get(linkValue, {
      headers: getCommonHeaders(currentBaseUrl),
    });
    if (!response || !response.data) {
      throw new Error("无法加载详情页面: " + linkValue);
    }
    const detailData = parseDetailPage(
      response.data,
      linkValue,
      currentBaseUrl
    );

    return {
      id: linkValue,
      type: "url",
      title: detailData.title,
      videoUrl: detailData.videoUrl,
      description: detailData.description,
      releaseDate: detailData.releaseDate,
      durationText: detailData.durationText,
      duration: detailData.duration,
      genreTitle: detailData.genreTitle,
      posterPath: detailData.posterPath,
      backdropPath: detailData.backdropPath,
      link: detailData.link,
      customHeaders: detailData.videoUrl
        ? { Referer: VIDEO_PLAY_REFERER }
        : undefined,
      childItems: detailData.childItems || [],
    };
  } catch (error) {
    console.error(`loadDetail: Error in loadDetail for ${linkValue}:`, error);
    return {
      id: linkValue,
      type: "url",
      title: "加载详情失败",
      description: error.message,
      link: linkValue,
      posterPath:
        "https://placehold.co/200x300/A8D19E/F6F7F1?text=Made%5Cnby%5CnLove&font=source-sans-pro",
      backdropPath:
        "https://placehold.co/200x300/A8D19E/F6F7F1?text=Made%5Cnby%5CnLove&font=source-sans-pro",
    };
  }
}
