var WidgetMetadata = {
    id: "bangumi_charts_tmdb_v4_final",
    title: "Bangumi 热门榜单",
    description: "从Bangumi获取榜单，匹配TMDB资源。",
    author: "Autism", 
    version: "1.0.0", 
    requiredVersion: "0.0.1",
    modules: [
        {
            title: "近期热门",
            description: "按作品类型浏览近期热门内容 (固定按热度 trends 排序)",
            requiresWebView: false,
            functionName: "fetchRecentHot",
            params: [
                {
                    name: "category",
                    title: "分类",
                    type: "enumeration",
                    value: "anime",
                    enumOptions: [
                        { title: "动画", value: "anime" },
                        { title: "书籍", value: "book" },
                        { title: "音乐", value: "music" },
                        { title: "游戏", value: "game" },
                        { title: "三次元", value: "real" }
                    ]
                },
                {
                    name: "page",
                    title: "页码",
                    type: "page",
                    value: "1"
                }
            ]
        },
        {
            title: "放送/发售时段排行",
            description: "按年份、季度/全年及作品类型浏览排行",
            requiresWebView: false,
            functionName: "fetchAirtimeRanking",
            params: [
                {
                    name: "category",
                    title: "分类",
                    type: "enumeration",
                    value: "anime",
                    enumOptions: [
                        { title: "动画", value: "anime" },
                        { title: "书籍", value: "book" },
                        { title: "音乐", value: "music" },
                        { title: "游戏", value: "game" },
                        { title: "三次元", value: "real" }
                    ]
                },
                {
                    name: "year",
                    title: "年份",
                    type: "input",
                    description: "例如: 2024。留空则浏览所有年份。",
                },
                {
                    name: "month",
                    title: "月份/季度",
                    type: "enumeration",
                    value: "all",
                    description: "选择全年或特定季度对应的月份。留空则为全年。",
                    enumOptions: [
                        { title: "全年", value: "all" },
                        { title: "冬季 (1月)", value: "1" },
                        { title: "春季 (4月)", value: "4" },
                        { title: "夏季 (7月)", value: "7" },
                        { title: "秋季 (10月)", value: "10" }
                    ]
                },
                {
                    name: "sort",
                    title: "排序方式",
                    type: "enumeration",
                    value: "rank",
                    enumOptions: [
                        { title: "排名", value: "rank" },
                        { title: "热度", value: "trends" },
                        { title: "收藏数", value: "collects" },
                        { title: "发售日期", value: "date" },
                        { title: "名称", value: "title" }
                    ]
                },
                {
                    name: "page",
                    title: "页码",
                    type: "page",
                    value: "1"
                }
            ]
        }
    ]
};

// --- 辅助函数 ---
async function searchTmdb(originalTitle, chineseTitle, listTitle, searchMediaType = 'tv', year = '') {
    const queries = [];
    const addedQueries = new Set();
    function addQuery(query) {
        if (query && typeof query === 'string' && query.trim()) {
            const trimmedQuery = query.trim();
            if (!addedQueries.has(trimmedQuery.toLowerCase())) {
                queries.push(trimmedQuery);
                addedQueries.add(trimmedQuery.toLowerCase());
            }
        }
    }
    addQuery(originalTitle);
    addQuery(chineseTitle);
    if (originalTitle) {
        addQuery(originalTitle.replace(/第.+[期季]$|[（(【\[].*?[】)）\]]/g, '').trim());
        addQuery(originalTitle.split(/[:：\-\s（(【\[]/)[0].trim());
    }
    if (chineseTitle) {
        addQuery(chineseTitle.replace(/第.+[期季]$|[（(【\[].*?[】)）\]]/g, '').trim());
        addQuery(chineseTitle.split(/[:：\-\s（(【\[]/)[0].trim());
    }
    addQuery(listTitle);
    if (listTitle) {
         addQuery(listTitle.replace(/第.+[期季]$|[（(【\[].*?[】)）\]]/g, '').trim());
         addQuery(listTitle.split(/[:：\-\s（(【\[]/)[0].trim());
    }
    if (queries.length === 0) { console.log("[TMDB 搜索] 没有有效的查询语句。"); return null; }
    console.log(`[TMDB 搜索] 类型: ${searchMediaType}, 年份: ${year}. 查询语句:`, JSON.stringify(queries));
    let bestOverallMatch = null;
    let highestOverallScore = -Infinity;
    const validYear = year && /^\d{4}$/.test(year) ? parseInt(year, 10) : null;
    if (validYear && (originalTitle || chineseTitle)) {
        const preciseQuerySource = originalTitle || chineseTitle;
        if (preciseQuerySource && typeof preciseQuerySource === 'string' && preciseQuerySource.trim()) {
            const preciseQuery = preciseQuerySource.trim();
            console.log(`[TMDB 搜索] 阶段 1: 使用精确年份搜索，查询: "${preciseQuery}" (年份: ${validYear})`);
            try {
                const params = { query: preciseQuery, language: "zh-CN", include_adult: false };
                if (searchMediaType === 'tv') params.first_air_date_year = validYear;
                else params.primary_release_year = validYear;
                const results = await Widget.tmdb.get(`/search/${searchMediaType}`, { params: params });
                if (results && results.results && results.results.length > 0) {
                    for (const result of results.results) {
                        const resDate = result.release_date || result.first_air_date;
                        if (resDate && resDate.startsWith(String(validYear))) {
                            let score = 10; score += (result.popularity || 0) * 0.1;
                            if (score > highestOverallScore) { highestOverallScore = score; bestOverallMatch = result; }
                        }
                    }
                    if (bestOverallMatch) { console.log(`[TMDB 搜索] 阶段 1 年份匹配成功: ID ${bestOverallMatch.id}, 标题: ${bestOverallMatch.title || bestOverallMatch.name}, 分数: ${highestOverallScore.toFixed(2)}`); }
                    else { console.log(`[TMDB 搜索] 阶段 1 "${preciseQuery}" 未找到严格的年份匹配项。`); }
                }
            } catch (e) { console.error(`[TMDB 搜索] 阶段 1 错误，查询 "${preciseQuery}":`, e.message); }
        }
    }
    console.log("[TMDB 搜索] 阶段 2: 对所有查询词进行更广泛的搜索和评分。");
    for (const query of queries) {
        console.log(`[TMDB 搜索] 阶段 2 尝试查询: "${query}"`);
        try {
            const params = { query: query, language: "zh-CN", include_adult: false };
            const results = await Widget.tmdb.get(`/search/${searchMediaType}`, { params: params });
            if (results && results.results && results.results.length > 0) {
                for (const result of results.results) {
                    let currentScore = 0;
                    const resultTitle = (result.title || result.name || "").toLowerCase();
                    const resultOriginalTitle = (result.original_title || result.original_name || "").toLowerCase();
                    const queryLower = query.toLowerCase();
                    if (resultTitle === queryLower || resultOriginalTitle === queryLower) currentScore += 15;
                    else if (resultTitle.includes(queryLower) || resultOriginalTitle.includes(queryLower)) currentScore += 7;
                    else {
                        const queryWords = queryLower.split(/\s+/).filter(w => w.length > 1);
                        const titleWords = resultTitle.split(/\s+/);
                        if (queryWords.length > 0) {
                            let commonWords = 0; queryWords.forEach(qw => { if (titleWords.includes(qw)) commonWords++; });
                            currentScore += (commonWords / queryWords.length) * 5;
                        } else { currentScore -= 2; }
                    }
                    let yearBonus = 0;
                    if (validYear) {
                        const resDate = result.release_date || result.first_air_date;
                        if (resDate && /^\d{4}/.test(resDate)) {
                            const resYear = parseInt(resDate.substring(0, 4), 10);
                            const yearDiff = Math.abs(resYear - validYear);
                            if (yearDiff === 0) yearBonus = 5; else if (yearDiff === 1) yearBonus = 2; else if (yearDiff > 3) yearBonus = - (yearDiff * 2);
                        } else { yearBonus = -1; }
                    } else { yearBonus = 1; }
                    currentScore += yearBonus;
                    if (result.original_language === 'ja' && (searchMediaType === 'tv' || searchMediaType === 'movie')) currentScore += 2;
                    currentScore += Math.log10((result.popularity || 0) + 0.1) * 2;
                    if (currentScore > highestOverallScore) { highestOverallScore = currentScore; bestOverallMatch = result; }
                }
            }
        } catch (e) {
            console.error(`[TMDB 搜索] 阶段 2 错误，查询 "${query}":`, e.message);
            if (String(e.message).includes("401") || String(e.message).includes("403")) { console.error("[TMDB 搜索] 认证错误。中止当前条目的 TMDB 搜索。"); return null; }
        }
    }
    if (bestOverallMatch && highestOverallScore > 5) { console.log(`[TMDB 搜索] 最佳匹配: ID ${bestOverallMatch.id}, 标题: ${bestOverallMatch.title || bestOverallMatch.name}, 分数: ${highestOverallScore.toFixed(2)}`); return bestOverallMatch; }
    else { const reason = bestOverallMatch ? `分数 ${highestOverallScore.toFixed(2)} 过低` : "没有结果"; console.log(`[TMDB 搜索] 未找到满意的 TMDB 匹配项 (${reason})，针对 BGM:${originalTitle}/${chineseTitle} 的所有尝试均失败。`); return null; }
}

function getInfoFromBox($, labelText) {
    let value = ''; const listItems = $('#infobox li');
    for (let i = 0; i < listItems.length; i++) {
        const liElement = listItems.eq(i); const tipSpan = liElement.find('span.tip').first();
        if (tipSpan.text().trim() === labelText) { value = liElement.clone().children('span.tip').remove().end().text().trim(); return value; }
    } return value;
}

function parseDate(dateStr) {
    if (!dateStr || typeof dateStr !== 'string') return ''; dateStr = dateStr.trim(); let match;
    match = dateStr.match(/^(\d{4})年(\d{1,2})月(\d{1,2})日/); if (match) return `${match[1]}-${String(match[2]).padStart(2, '0')}-${String(match[3]).padStart(2, '0')}`;
    match = dateStr.match(/^(\d{4})年(\d{1,2})月(?!日)/); if (match) return `${match[1]}-${String(match[2]).padStart(2, '0')}-01`;
    match = dateStr.match(/^(\d{4})年(冬|春|夏|秋)/); if (match) { let month = '01'; if (match[2] === '春') month = '04'; else if (match[2] === '夏') month = '07'; else if (match[2] === '秋') month = '10'; return `${match[1]}-${month}-01`; }
    match = dateStr.match(/^(\d{4})年(?![\d月春夏秋冬])/); if (match) return `${match[1]}-01-01`;
    match = dateStr.match(/^(\d{4})[-/](\d{1,2})[-/](\d{1,2})/); if (match) return `${match[1]}-${String(match[2]).padStart(2, '0')}-${String(match[3]).padStart(2, '0')}`;
    match = dateStr.match(/^(\d{4})[-/](\d{1,2})(?!.*[-/])/); if (match) return `${match[1]}-${String(match[2]).padStart(2, '0')}-01`;
    match = dateStr.match(/^(\d{4})$/); if (match) return `${match[1]}-01-01`; return '';
}

function parseBangumiListItems(htmlContent) {
    const $ = Widget.html.load(htmlContent); const pendingItems = [];
    $('ul#browserItemList li.item').each((index, element) => {
        const $item = $(element); let subjectId = $item.attr('id');
        if (subjectId && subjectId.startsWith('item_')) { subjectId = subjectId.substring(5); }
        else { console.warn("[列表解析] 无法解析条目 ID:", $item.find('h3 a.l').text() || $item.html().substring(0, 100)); return; }
        const titleElement = $item.find('div.inner > h3 > a.l'); const title = titleElement.text().trim();
        const detailLink = titleElement.attr('href');
        if (!detailLink || typeof detailLink !== 'string' || !detailLink.trim()) { console.warn(`[列表解析] ${title} (ID: ${subjectId}) 没有有效的详情链接。`); return; }
        const fullDetailLink = `https://bgm.tv${detailLink}`;
        let listCoverUrl = $item.find('a.subjectCover img.cover').attr('src');
        if (listCoverUrl && typeof listCoverUrl === 'string' && listCoverUrl.startsWith('//')) { listCoverUrl = 'https:' + listCoverUrl; }
        else if (!listCoverUrl) { listCoverUrl = ''; }
        const rating = $item.find('div.inner > p.rateInfo > small.fade').text().trim();
        const infoTextFromList = $item.find('div.inner > p.info.tip').text().trim();
        pendingItems.push({ id: subjectId, titleFromList: title, detailLink: fullDetailLink, coverFromList: listCoverUrl, ratingFromList: rating || "0", infoTextFromList: infoTextFromList });
    }); return pendingItems;
}

async function fetchItemDetails(pendingItem, categoryHint) {
    console.log(`[BGM 详情] 处理中: "${pendingItem.titleFromList}" (BGM ID: ${pendingItem.id})`);
    try {
        const response = await Widget.http.get(pendingItem.detailLink, { headers: { "User-Agent": "Mozilla/5.0 FW/1.0", "Referer": "https://bgm.tv/", "Accept-Language": "zh-CN,zh;q=0.9" } });
        const detailHtml = response.data; if (!detailHtml) { console.warn(`[BGM 详情] ${pendingItem.detailLink} 的 HTML 响应为空。`); return null; }
        const $ = Widget.html.load(detailHtml);
        const originalTitleFromDetail = $('h1.nameSingle > a').first().text().trim();
        const chineseTitleFromDetail = getInfoFromBox($, "中文名:");
        const displayTitle = chineseTitleFromDetail || originalTitleFromDetail || pendingItem.titleFromList;

        let posterPathFromBgm = $('#bangumiInfo .infobox a.thickbox.cover').attr('href') || $('#bangumiInfo .infobox img.cover').attr('src') || pendingItem.coverFromList || '';
        if (posterPathFromBgm && posterPathFromBgm.startsWith('//')) { posterPathFromBgm = 'https:' + posterPathFromBgm; }
        // 如果 posterPathFromBgm 是来自 Bangumi 的完整 URL，尝试提取路径部分，以保持一致性
        if (posterPathFromBgm.startsWith('https:')) {
            try { const urlParts = new URL(posterPathFromBgm); posterPathFromBgm = urlParts.pathname; } // 例如：/pic/cover/l/xx/xx/xxxxx.jpg
            catch (e) { /* 如果不是有效URL，则保留原始值 */ }
        }

        let releaseDateStr = getInfoFromBox($, "放送开始:") || getInfoFromBox($, "上映年度:") || getInfoFromBox($, "发售日期:") || getInfoFromBox($, "发行日期:");
        let releaseDate = parseDate(releaseDateStr);
        if (!releaseDate && pendingItem.infoTextFromList) { const match = pendingItem.infoTextFromList.match(/(\d{4}年\d{1,2}月\d{1,2}日|\d{4}年\d{1,2}月|\d{4}年[春夏秋冬]|\d{4}年)/); if (match && match[0]) releaseDate = parseDate(match[0]); }
        const yearForTmdbSearch = releaseDate ? releaseDate.substring(0, 4) : '';
        let bgmMediaTypeDisplay = ($('h1.nameSingle small.grey').first().text().trim() || "").toLowerCase();
        let determinedMediaTypeForWidget = ''; let tmdbSearchTypeForApi = '';
        if (categoryHint === 'anime' || categoryHint === 'real') {
            if (bgmMediaTypeDisplay.includes('movie') || bgmMediaTypeDisplay.includes('剧场版') || bgmMediaTypeDisplay.includes('映画')) { determinedMediaTypeForWidget = 'movie'; tmdbSearchTypeForApi = 'movie'; }
            else { determinedMediaTypeForWidget = 'tv'; tmdbSearchTypeForApi = 'tv'; }
        } else { determinedMediaTypeForWidget = categoryHint; }
        const ratingFromDetail = $('#panelInterestWrapper .global_rating .number').text().trim();
        const finalRating = ratingFromDetail || pendingItem.ratingFromList || "0";

        // 默认项目结构，主要用于 'link' 类型或 TMDB 匹配失败时的回退
        let baseItem = {
            id: String(pendingItem.id), type: "link", title: displayTitle,
            posterPath: posterPathFromBgm, // 使用可能已提取路径的 Bangumi 海报图
            backdropPath: '', // Bangumi 'link' 类型条目通常没有单独的背景图
            releaseDate: releaseDate, mediaType: determinedMediaTypeForWidget, rating: finalRating,
            description: "", // 'link' 类型参照 "正常日志" 行为设为空
            genreTitle: null, // 'link' 类型参照 "正常日志" 行为设为 null
            link: pendingItem.detailLink, // 'link' 类型，此链接指向 Bangumi 详情页
        };

        if (tmdbSearchTypeForApi) {
            const tmdbData = await searchTmdb(originalTitleFromDetail, chineseTitleFromDetail, pendingItem.titleFromList, tmdbSearchTypeForApi, yearForTmdbSearch);
            if (tmdbData && tmdbData.id) {
                console.log(`[TMDB 匹配] 成功: (BGM: "${displayTitle}") -> (TMDB: "${tmdbData.title || tmdbData.name}", ID: ${tmdbData.id})`);
                baseItem.id = String(tmdbData.id); baseItem.type = "tmdb";
                baseItem.title = (tmdbData.title || tmdbData.name || displayTitle).trim();
                if (tmdbData.poster_path) { baseItem.posterPath = tmdbData.poster_path; } // TMDB 相对路径
                else { baseItem.posterPath = posterPathFromBgm; } // 回退到 Bangumi 提取路径的海报
                if (tmdbData.backdrop_path) { baseItem.backdropPath = tmdbData.backdrop_path; } // TMDB 相对路径
                else { baseItem.backdropPath = ''; }
                baseItem.releaseDate = parseDate(tmdbData.release_date || tmdbData.first_air_date) || releaseDate;
                baseItem.rating = tmdbData.vote_average ? tmdbData.vote_average.toFixed(1) : finalRating;
                baseItem.mediaType = tmdbSearchTypeForApi;
                // --- 关键修改: 强制这些字段匹配 "正常日志" 中 type "tmdb" 的结构 ---
                baseItem.description = ""; baseItem.genreTitle = null; baseItem.link = null;

                // 为简化对象结构以匹配 "正常日志"，暂时禁用获取 TMDB 详细信息（如特定类型或翻译标题）
                // 如果需要恢复 TMDB 标题翻译等功能，可以取消下面代码块的注释，并逐步测试其影响
                /*
                try {
                    const tmdbDetailParams = { language: "zh-CN", append_to_response: "translations" }; // 已移除 'genres'
                    const tmdbDetail = await Widget.tmdb.get(`/${tmdbSearchTypeForApi}/${tmdbData.id}`, { params: tmdbDetailParams });
                    if (tmdbDetail) {
                        // const mainTitleIsChinese = tmdbDetail.original_language !== 'zh' && (tmdbDetail.title || tmdbDetail.name); // 示例：检查主标题是否已是中文
                        let translatedTitle = '';
                        if (tmdbDetail.translations?.translations) {
                            const zhTranslation = tmdbDetail.translations.translations.find(t => t.iso_639_1 === 'zh' && t.iso_3166_1 === 'CN');
                            if (zhTranslation?.data && (zhTranslation.data.title || zhTranslation.data.name)) {
                                translatedTitle = (zhTranslation.data.title || zhTranslation.data.name).trim();
                            }
                        }
                        if (translatedTitle && translatedTitle !== baseItem.title) { baseItem.title = translatedTitle; }
                    }
                } catch (e) { console.warn(`[TMDB 详情] 获取 TMDB ID ${tmdbData.id} 的详细信息失败:`, e.message); }
                */
            } else {
                console.log(`[TMDB 匹配] 失败: (BGM: "${displayTitle}")。回退到 'link' 类型。`);
                // baseItem 保持为 'link' 类型, description/genreTitle/link 已按 'link' 类型设置
            }
        } else {
            console.log(`[TMDB 搜索] 已跳过非影视内容 (BGM: "${displayTitle}")。回退到 'link' 类型。`);
            // baseItem 保持为 'link' 类型
        }

        // 最终确保 type: "tmdb" 的条目严格遵守 problematic 字段的 nil/empty 状态
        if (baseItem.type === "tmdb") {
            baseItem.description = "";
            baseItem.genreTitle = null;
            baseItem.link = null;
        }

        console.log(`[最终条目] ID: ${baseItem.id}, 类型: ${baseItem.type}, 标题: "${baseItem.title}", 描述: "${baseItem.description}", 类型标题: ${baseItem.genreTitle}, 链接: ${baseItem.link}`);
        return baseItem;
    } catch (error) {
        console.error(`[BGM 详情] 严重错误，处理 ${pendingItem.id} 失败:`, error.message, error.stack);
        return null;
    }
}

async function processBangumiPage(url, categoryHint) {
    console.log(`获取列表: ${url}`); let response;
    try { response = await Widget.http.get(url, { headers: { "User-Agent": "Mozilla/5.0 FW/1.0", "Referer": `https://bgm.tv/`, "Accept-Language": "zh-CN,zh;q=0.9" } }); }
    catch (e) { console.error(`[列表获取] ${url} HTTP 请求失败:`, e.message); throw new Error(`请求列表页失败: ${e.message}`); }
    if (!response || !response.data) { console.error(`[列表获取] ${url} 响应为空。`); throw new Error("未能获取到列表页数据"); }
    const pendingItems = parseBangumiListItems(response.data);
    if (pendingItems.length === 0) { console.log("[列表解析] 未解析到任何条目。"); return []; }
    console.log(`[列表解析] 解析到 ${pendingItems.length} 个条目。开始获取详情...`);
    const results = [];
    for (const item of pendingItems) {
        console.log(`--- 处理队列条目: ${item.titleFromList} ---`);
        const detailedItem = await fetchItemDetails(item, categoryHint);
        if (detailedItem) { results.push(detailedItem); }
        else { console.warn(`[详情获取] ${item.titleFromList} 获取失败，已跳过。`); }
    }
    console.log(`处理完成。返回 ${results.length} 个有效条目。`); return results;
}

async function fetchRecentHot(params = {}) {
    const category = params.category || "anime"; const page = params.page || 1;
    const url = `https://bgm.tv/${category}/browser/?sort=trends&page=${page}`;
    try { return await processBangumiPage(url, category); }
    catch (error) { console.error(`fetchRecentHot (${category}, P${page}) 错误:`, error.message); throw error; }
}

async function fetchAirtimeRanking(params = {}) {
    const category = params.category || "anime"; const year = params.year || "";
    let month = params.month || "all"; const sort = params.sort || "rank"; const page = params.page || 1;
    let url;
    if (year && /^\d{4}$/.test(year)) {
        let airtimePath = `airtime/${year}`;
        if (month && month !== "all" && /^\d{1,2}$/.test(month)) { airtimePath += `/${month}`; }
        url = `https://bgm.tv/${category}/browser/${airtimePath}?sort=${sort}&page=${page}`;
    } else { url = `https://bgm.tv/${category}/browser/?sort=${sort}&page=${page}`; }
    try { return await processBangumiPage(url, category); }
    catch (error) { console.error(`fetchAirtimeRanking (${category}, Y${year} M${month} S${sort} P${page}) 错误:`, error.message); throw error; }
}