// ============================================================================
// VtW · Seasons, Regional Patches (Japan 8 Regions / 47 Prefs), Gourmet & Souvenirs
// + Retina Chinese Basemap Coordinate Helper (WGS-84 <-> GCJ-02)
// ============================================================================

const ATLAS_SEASONS_META = [
  { id: 'spring', icon: '🌸', short: '春', label: '🌸 春 · 樱花/粉蝶/雪墙', months: [3, 4, 5], color: '#D63384' },
  { id: 'summer', icon: '🌿', short: '夏', label: '🌿 夏 · 花火/夏祭/极昼绿野', months: [6, 7, 8], color: '#15803D' },
  { id: 'autumn', icon: '🍁', short: '秋', label: '🍁 秋 · 红叶/银杏/金秋荒原', months: [9, 10, 11], color: '#C2410C' },
  { id: 'winter', icon: '❄️', short: '冬', label: '❄️ 冬 · 蓝冰/点灯/流冰/火祭', months: [12, 1, 2], color: '#0284C7' }
];

// Explicit seasonal highlights for Wishlist & Pilgrimage destinations
const ATLAS_SPOT_SEASONS = {
  // ❄️ Winter icons (12-2月 / 11-3月)
  'wish-iceland-icecave': { seasons: ['winter'], bestMonths: [11, 12, 1, 2, 3], badge: '❄️ 11–3月限定 · 万年幽蓝冰川洞穴' },
  'wish-russia-baikal': { seasons: ['winter'], bestMonths: [2, 3], badge: '❄️ 2–3月限定 · 贝加尔湖蓝冰气泡冰裂' },
  'wish-bolivia-uyuni': { seasons: ['winter'], bestMonths: [1, 2, 3], badge: '❄️ 1–3月雨季 · 无边天空之镜积水期' },
  'wish-uk-uphellyaa': { seasons: ['winter'], bestMonths: [1], badge: '❄️ 1月末周二 · 极夜焚烧维京战船火祭' },
  'wish-jp-shirakawago': { seasons: ['winter', 'autumn'], bestMonths: [1, 2, 11], badge: '❄️ 1–2月 · 合掌村厚雪童话点灯' },
  'wish-jp-hakodate': { seasons: ['winter', 'spring'], bestMonths: [12, 1, 2, 5], badge: '❄️ 冬夜百万夜景 · 🌸 5月初五棱郭樱花' },
  'wish-jp-otaru': { seasons: ['winter'], bestMonths: [2], badge: '❄️ 2月 · 小樽雪灯之路与硝子烛光' },
  'wish-jp-ashina-aizu': { seasons: ['winter', 'autumn'], bestMonths: [1, 2, 10, 11], badge: '❄️ 苇名国残雪天守 · 🍁 深秋红叶苇原' },
  'wish-bulgaria-buzludzha': { seasons: ['winter', 'summer'], bestMonths: [1, 2, 7, 8], badge: '❄️ 暴风雪冰封飞碟 · 🌿 盛夏山脊徒步' },

  // 🌸 Spring icons (3-5月)
  'wish-jp-hitachi': { seasons: ['spring', 'autumn'], bestMonths: [4, 5, 10], badge: '🌸 4月下旬 · 530万株蓝色粉蝶花海 / 🍁 10月红扫帚草' },
  'wish-jp-nishinomiya': { seasons: ['spring'], bestMonths: [4], badge: '🌸 4月上旬 · 夙川公园与北高坡道樱吹雪' },
  'wish-jp-tokyo-shinjuku': { seasons: ['spring', 'autumn'], bestMonths: [3, 4, 11], badge: '🌸 3月末新宿御苑言叶之庭春樱 · 🍁 11月神宫银杏' },
  'wish-jp-toyosato': { seasons: ['spring', 'autumn'], bestMonths: [4, 11], badge: '🌸 4月旧校舍樱花新学期 · 轻音部下午茶' },
  'wish-jp-uji': { seasons: ['spring', 'autumn'], bestMonths: [4, 11], badge: '🌸 4月宇治川樱花 · 🍁 11月大吉山红叶夜色' },
  'wish-jp-kawagoe': { seasons: ['spring', 'autumn'], bestMonths: [4, 10], badge: '🌸 新河岸川冰川神社樱花舟 · 🍁 10月川越祭' },
  'wish-jp-takehara': { seasons: ['spring', 'autumn'], bestMonths: [4, 10], badge: '🌸 安艺小京都春樱 · 🍁 10月竹原憧憬之路竹灯' },
  'wish-netherlands-giethoorn': { seasons: ['spring', 'summer'], bestMonths: [4, 5, 6], badge: '🌸 4–5月荷兰花季芦苇水道泛舟' },

  // 🌿 Summer icons (6-8月)
  'wish-france-valensole': { seasons: ['summer'], bestMonths: [6, 7], badge: '🌿 6月下旬–7月中旬 · 普罗旺斯无边紫薰衣草浪' },
  'wish-kenya-masaimara': { seasons: ['summer'], bestMonths: [7, 8, 9], badge: '🌿 7–8月 · 百万角马横渡马拉河天国之渡' },
  'wish-jp-wakayama-tomogashima': { seasons: ['summer'], bestMonths: [7, 8], badge: '🌿 7月24日夏祭花火 · 《夏日重现》日都岛海风' },
  'wish-jp-naoshima': { seasons: ['summer', 'spring'], bestMonths: [7, 8, 5], badge: '🌿 盛夏碧海防波堤黄南瓜 · 《Summer Pockets》直岛' },
  'wish-jp-kamakura': { seasons: ['summer'], bestMonths: [6, 7, 8], badge: '🌿 6月紫阳花电车 · 7–8月湘南海岸盛夏波光' },
  'wish-jp-onomichi': { seasons: ['summer', 'spring'], bestMonths: [7, 8, 4], badge: '🌿 濑户内海夏日坂道与渡轮 · 🌸 4月千光寺夜樱' },
  'wish-jp-noto-tunnel': { seasons: ['summer'], bestMonths: [7, 8], badge: '🌿 盛夏海边无人站与浦岛隧道《通往夏天的隧道》' },
  'wish-jp-goto': { seasons: ['summer'], bestMonths: [7, 8], badge: '🌿 五岛列岛翡翠果冻海与夏日星夜《元气囝仔》' },
  'wish-jp-suwa': { seasons: ['summer', 'winter'], bestMonths: [8, 1, 2], badge: '🌿 8月15日诹访湖水上花火 · ❄️ 严冬御神渡冰裂' },
  'wish-jp-chichibu': { seasons: ['summer', 'winter'], bestMonths: [8, 12], badge: '🌿 盛夏定林寺秘密基地《未闻花名》 · ❄️ 12月秩父夜祭' },
  'wish-iceland-reynisfjara': { seasons: ['summer', 'winter'], bestMonths: [6, 7, 8, 2], badge: '🌿 6–8月极昼海鹦季 · ❄️ 冬夜黑沙滩极光' },
  'wish-uk-giants-causeway': { seasons: ['summer'], bestMonths: [6, 7, 8], badge: '🌿 6–8月北大西洋长日照海岸徒步季' },
  'wish-uk-tintagel': { seasons: ['summer'], bestMonths: [6, 7, 8], badge: '🌿 盛夏康沃尔翡翠海崖与亚瑟王断桥' },
  'wish-georgia-didgori': { seasons: ['summer', 'autumn'], bestMonths: [6, 7, 8, 9], badge: '🌿 6–9月高加索高山草甸巨剑旷野（2027暑假顺路！）' },
  'wish-nz-milford': { seasons: ['winter', 'summer'], bestMonths: [12, 1, 2, 7], badge: '🌿 南半球盛夏(12–2月)峡湾百瀑齐发' },

  // 🍁 Autumn icons (9-11月)
  'wish-mexico-monarch': { seasons: ['autumn', 'winter'], bestMonths: [11, 12, 1, 2], badge: '🍁 11月初亡灵节归林 · ❄️ 1–2月亿万帝王蝶振翅' },
  'wish-jp-takayama': { seasons: ['autumn', 'spring', 'winter'], bestMonths: [10, 4, 1], badge: '🍁 10月高山秋祭红叶 · 🌸 4月春之高山祭《冰菓》' },
  'wish-jp-kyoto-fushimi': { seasons: ['autumn', 'spring'], bestMonths: [11, 4], badge: '🍁 11月东福寺千本鸟居枫红 · 🌸 4月哲学之道春樱' },
  'wish-jp-hanno': { seasons: ['autumn', 'spring'], bestMonths: [11, 4], badge: '🍁 11月天览山与饭能河原红叶轻徒步《向山进发》' },
  'wish-jp-shibuya': { seasons: ['autumn'], bestMonths: [10], badge: '🍁 10月31日万圣夜涩谷站前《咒术回战·涩谷事变》' },
  'wish-jp-hakone': { seasons: ['autumn', 'winter'], bestMonths: [11, 1], badge: '🍁 11月芦之湖红叶 · ❄️ 1月凛冬无云富士山绝景' },
  'wish-jp-minobu-yamanashi': { seasons: ['autumn', 'winter'], bestMonths: [11, 12, 1], badge: '🍁 深秋本栖湖红叶 · ❄️ 冬日凛冽星空《摇曳露营》' },
  'wish-germany-rothenburg': { seasons: ['autumn', 'winter'], bestMonths: [10, 12], badge: '🍁 10月巴伐利亚金秋 · ❄️ 12月千年圣诞集市烛光' },
  'wish-germany-cologne': { seasons: ['autumn', 'winter'], bestMonths: [10, 11, 12], badge: '🍁 深秋莱茵雾气黑尖塔 · ❄️ 12月教堂广场热红酒集市' },
  'wish-czech-kutnahora': { seasons: ['autumn'], bestMonths: [10, 11], badge: '🍁 10–11月深秋阴冷雾霭 · 哥特白骨教堂最佳氛围' },
  'wish-romania-bran': { seasons: ['autumn'], bestMonths: [10, 11], badge: '🍁 10月末万圣节喀尔巴阡山红叶迷雾《德古拉古堡》' },
  'wish-usa-monument-valley': { seasons: ['autumn', 'spring'], bestMonths: [10, 4, 5], badge: '🍁 10月 / 🌸 4–5月 · 告别酷暑的红岩孤峰黄金光影' },
  'wish-egypt-giza': { seasons: ['autumn', 'winter'], bestMonths: [11, 12, 1, 2], badge: '🍁 11–2月凉爽季 · 避开40℃沙漠酷暑探访金字塔' },
  'wish-iraq-uruk': { seasons: ['autumn', 'winter'], bestMonths: [11, 12, 1, 2], badge: '❄️ 11–2月两河流域温和季 · 探访吉尔伽美什王都' },
  'wish-thailand-whitetemple': { seasons: ['winter', 'autumn'], bestMonths: [11, 12, 1, 2], badge: '❄️ 11–2月泰北凉季晴空 · 纯白镜面千手奈何桥' }
};

function atlasGetSpotSeasonInfo(spot) {
  if (!spot) return null;
  if (spot.seasonInfo) return spot.seasonInfo;
  if (ATLAS_SPOT_SEASONS[spot.id]) return ATLAS_SPOT_SEASONS[spot.id];
  const txt = ((spot.name || '') + ' ' + (spot.summary || '') + ' ' + (spot.intro || '') + ' ' + (spot.work || '')).toLowerCase();
  if (/冰洞|蓝冰|流冰|极夜|雪灯|点灯|雪国/.test(txt)) return { seasons: ['winter'], bestMonths: [12, 1, 2], badge: '❄️ 冬季严寒绝景' };
  if (/粉蝶|樱花|春樱|郁金香/.test(txt)) return { seasons: ['spring'], bestMonths: [3, 4, 5], badge: '🌸 春季花见窗口' };
  if (/薰衣草|花火|夏祭|夏日|海岛|湘南|角马/.test(txt)) return { seasons: ['summer'], bestMonths: [6, 7, 8], badge: '🌿 盛夏限定风物' };
  if (/红叶|枫|万圣|亡灵节|金秋/.test(txt)) return { seasons: ['autumn'], bestMonths: [10, 11], badge: '🍁 深秋光影最佳' };
  if (spot.lineId === 'line-gothic') return { seasons: ['autumn', 'winter'], bestMonths: [10, 11, 12], badge: '🍁 秋冬阴翳雾气氛围佳' };
  if (spot.lineId === 'line-seasia-gods') return { seasons: ['winter'], bestMonths: [11, 12, 1, 2], badge: '❄️ 11–2月旱季凉爽宜行' };
  if (spot.lineId === 'line-ruins' && spot.lat < 36 && spot.lat > 18) return { seasons: ['autumn', 'winter', 'spring'], bestMonths: [11, 12, 1, 2, 3], badge: '🍁 11–3月避暑访古季' };
  if (spot.lat > 52) return { seasons: ['summer'], bestMonths: [6, 7, 8], badge: '🌿 6–8月高纬长日照季' };
  return { seasons: ['spring', 'autumn'], bestMonths: [4, 5, 10, 11], badge: '🌸🍁 春秋气候舒适' };
}

function atlasMatchSeason(spot, seasonFilter) {
  if (!seasonFilter || seasonFilter === 'all') return true;
  const info = atlasGetSpotSeasonInfo(spot);
  if (!info) return false;
  if (seasonFilter === 'now') {
    const m = new Date().getMonth() + 1;
    return Array.isArray(info.bestMonths) && info.bestMonths.includes(m);
  }
  return Array.isArray(info.seasons) && info.seasons.includes(seasonFilter);
}

// riben.cloud-inspired Japan 9 Regional Administrative Patches + 47 Prefectures Index
const JAPAN_REGIONS_PATCHES = [
  {
    id: 'jp-hokkaido',
    name: '北海道',
    kana: 'HOKKAIDO',
    tone: '#6f97b0',
    center: [43.35, 142.45],
    bounds: [[41.35, 139.7], [45.55, 145.8]],
    summary: '粉雪流冰、百万夜景、薰衣草花丘与广阔北国开拓史。',
    seasons: '❄️ 1–2月雪祭流冰 · 🌿 7月富良野薰衣草',
    prefs: [
      ['北海道', 43.06, 141.35, 7], ['札幌', 43.06, 141.35, 11], ['函馆', 41.77, 140.73, 12], ['小樽', 43.19, 140.99, 12], ['富良野·美瑛', 43.34, 142.38, 11]
    ]
  },
  {
    id: 'jp-tohoku',
    name: '东北地方',
    kana: 'TOHOKU · 6县',
    tone: '#7ea06f',
    center: [39.05, 140.55],
    bounds: [[36.8, 139.1], [41.5, 142.1]],
    summary: '只狼苇名原型会津若松、银山温泉煤气灯雪景、奥入濑红叶与藏王树冰。',
    seasons: '❄️ 1–2月银山温泉/树冰 · 🌸 4月下旬弘前樱花 · 🍁 10月奥入濑红叶',
    prefs: [
      ['青森县', 40.82, 140.74, 9], ['岩手县', 39.70, 141.15, 9], ['宫城县·仙台', 38.27, 140.87, 10],
      ['秋田县', 39.72, 140.10, 9], ['山形县·银山', 38.57, 140.53, 10], ['福岛县·会津', 37.49, 139.93, 10]
    ]
  },
  {
    id: 'jp-kanto',
    name: '关东地方',
    kana: 'KANTO · 1都6县',
    tone: '#c8963e',
    center: [35.85, 139.75],
    bounds: [[34.9, 138.9], [37.0, 140.9]],
    summary: '东京秋叶原/新宿/涩谷/池袋全密度圣地，镰仓江之岛海岸、秩父与茨城粉蝶花海。',
    seasons: '🌸 3月末樱花 & 4月末粉蝶花 · 🌿 夏日湘南花火 · 🍁 11月秩父高尾红叶',
    prefs: [
      ['东京都', 35.69, 139.75, 11], ['神奈川·镰仓箱根', 35.32, 139.55, 11], ['埼玉县·秩父川越', 35.99, 139.08, 10],
      ['千叶县', 35.61, 140.12, 10], ['茨城县·常陆海滨', 36.40, 140.60, 10], ['栃木县·日光', 36.75, 139.60, 10], ['群马县', 36.39, 139.06, 10]
    ]
  },
  {
    id: 'jp-chubu',
    name: '中部·北陆',
    kana: 'CHUBU & HOKURIKU · 9县',
    tone: '#c47a55',
    center: [36.25, 137.35],
    bounds: [[34.6, 135.9], [37.9, 139.1]],
    summary: '富士山摇曳露营、飞驒高山《冰菓》、白川乡《寒蝉/人狼村》、诹访湖与能登夏日海岸。',
    seasons: '❄️ 1–2月白川乡点灯/冬富士 · 🌸 4月立山雪墙 · 🍁 10–11月高山红叶',
    prefs: [
      ['岐阜县·高山白川乡', 36.15, 137.25, 10], ['山梨县·富士五湖', 35.50, 138.76, 10], ['长野县·诹访轻井泽', 36.05, 138.12, 10],
      ['静冈县·伊豆浜松', 34.97, 138.38, 10], ['爱知县·名古屋', 35.18, 136.91, 10], ['石川县·金泽能登', 36.56, 136.66, 9],
      ['富山县', 36.70, 137.21, 10], ['福井县', 36.06, 136.22, 10], ['新潟县', 37.90, 139.02, 9]
    ]
  },
  {
    id: 'jp-kansai',
    name: '近畿·关西',
    kana: 'KANSAI · 2府5县',
    tone: '#b5523f',
    center: [34.80, 135.60],
    bounds: [[33.4, 134.2], [35.8, 136.8]],
    summary: '京阿尼灵魂大本营（宇治《京吹》/京都/丰乡《轻音》/西宫《凉宫》/神户《Fate》/和歌山《夏日重现》）。',
    seasons: '🌸 3月末–4月上旬哲道夙川樱花 · 🌿 7月祇园祭/友岛海夏 · 🍁 11月京都红叶',
    prefs: [
      ['京都府·宇治', 34.95, 135.78, 11], ['大阪府', 34.69, 135.50, 11], ['兵库县·神户西宫', 34.72, 135.28, 11],
      ['滋贺县·丰乡琵琶湖', 35.20, 136.23, 10], ['奈良县', 34.69, 135.83, 11], ['和歌山县·友岛', 34.23, 135.17, 10], ['三重县·伊势', 34.50, 136.70, 10]
    ]
  },
  {
    id: 'jp-chugoku',
    name: '中国地方',
    kana: 'CHUGOKU · 5县',
    tone: '#c6a36a',
    center: [34.75, 132.75],
    bounds: [[33.9, 130.8], [35.6, 134.5]],
    summary: '尾道坂道渡轮、竹原老街《玉响》、严岛海上大鸟居与出云神话之国。',
    seasons: '🌸 4月千光寺春樱 · 🌿 盛夏濑户内跳岛骑行 · 🍁 11月宫岛红叶谷',
    prefs: [
      ['广岛县·尾道竹原', 34.40, 132.90, 10], ['冈山县·仓敷', 34.66, 133.93, 10],
      ['鸟取县', 35.50, 134.24, 10], ['岛根县·出云', 35.47, 133.05, 10], ['山口县', 34.19, 131.47, 10]
    ]
  },
  {
    id: 'jp-shikoku',
    name: '四国·濑户内',
    kana: 'SHIKOKU & SETOUCHI · 4县',
    tone: '#5e9484',
    center: [33.75, 133.55],
    bounds: [[32.7, 132.0], [34.55, 134.8]],
    summary: '直岛/男木岛/小豆岛《Summer Pockets》盛夏原型、青岛猫岛与道后温泉古汤。',
    seasons: '🌿 7–8月盛夏碧海艺术祭 · 🌸 春季濑户内温和海风',
    prefs: [
      ['香川县·直岛高松', 34.45, 133.99, 11], ['爱媛县·松山猫岛', 33.84, 132.77, 10],
      ['德岛县·鸣门', 34.07, 134.56, 10], ['高知县', 33.56, 133.53, 10]
    ]
  },
  {
    id: 'jp-kyushu',
    name: '九州地方',
    kana: 'KYUSHU · 7县',
    tone: '#b56d78',
    center: [32.75, 130.75],
    bounds: [[30.9, 128.6], [34.0, 131.9]],
    summary: '夏目友人帐人吉球磨、天降之物福冈朝仓、元气囝仔五岛列岛、阿苏火山口与别府地狱温泉。',
    seasons: '🌸 3月末九州早樱 · 🌿 夏日五岛果冻海 · 🍁 11月球磨川红叶温泉',
    prefs: [
      ['福冈县·博多朝仓', 33.59, 130.40, 10], ['熊本县·人吉阿苏', 32.21, 130.76, 10], ['长崎县·五岛列岛', 32.75, 129.87, 9],
      ['大分县·别府由布院', 33.28, 131.50, 10], ['佐贺县·唐津', 33.25, 130.30, 10], ['宫崎县·高千穗', 31.91, 131.42, 10],
      ['鹿儿岛·屋久岛', 31.56, 130.56, 9]
    ]
  },
  {
    id: 'jp-okinawa',
    name: '冲绳',
    kana: 'OKINAWA · 离岛群',
    tone: '#3d8b96',
    center: [26.35, 127.80],
    bounds: [[24.2, 123.5], [27.0, 128.4]],
    summary: '珊瑚礁翡翠离岛、首里城琉球王都、美海水族馆鲸鲨与石垣竹富岛星砂。',
    seasons: '🌿 5–10月琉球碧海潜浮 · ❄️ 1–2月八重岳日本最早寒绯樱 & 赏鲸季',
    prefs: [
      ['冲绳本岛·那霸', 26.21, 127.68, 10], ['美海水族馆·北部', 26.69, 127.88, 11],
      ['宫古岛', 24.80, 125.28, 11], ['石垣岛·竹富岛', 24.34, 124.16, 11]
    ]
  }
];

// Curated Gourmet (🍜 美食) & Souvenirs (🎁 纪念品/伴手礼/圣地周边)
const ATLAS_GOURMET_SOUVENIRS = {
  // === 中国实测与重点城市（融合你的 Obsidian 真实红黑榜！） ===
  '中国|北京': {
    gourmet: [
      { id: 'bj-wdh', name: '豌豆黄 & 牛舌饼 & 桃酥', tag: '传统宫廷/京式糕点', price: '¥15–35', rating: '实测：夯中夯', verdict: '夯', note: '豌豆黄细腻绵密，在颐和园湖畔晒太阳配着吃绝佳；咸香牛舌饼与糖火烧也好吃（避雷：枣花酥/驴打滚偏齁甜）。' },
      { id: 'bj-lz', name: '新街口老字号卤煮火烧 + 北冰洋', tag: '老城胡同重口小吃', price: '¥38', rating: '实测：卤香浓厚', verdict: '必吃', note: '新街口地铁口老字号，卤汤醇厚，配一瓶冰镇北冰洋汽水超爽快。' },
      { id: 'bj-ky', name: '北京酥不腻烤鸭（配鲜山楂条）', tag: '京菜代表', price: '¥130/人', rating: '实测：清爽解腻', verdict: '必吃', note: '鸭皮酥脆蘸白糖，配山楂条清新软甜完美化解油脂感。' },
      { id: 'bj-tg', name: '胡同铜锅涮肉 & 西城砂锅白肉', tag: '老北京烟火气', price: '¥95/人', rating: '实测：地道京味', verdict: '必吃', note: '麻酱带韭菜花香气；西城胡同砂锅居听满屋地道京片子寒暄极有氛围。' }
    ],
    souvenirs: [
      { id: 'bj-s1', name: '稻香村零散现装点心匣（自选咸甜拼）', tag: '伴手礼名菓', where: '认准“三禾”标门店', price: '¥60–90', note: '只挑牛舌饼、桃酥、拿破仑、糖火烧，避开过甜豆沙类。' },
      { id: 'bj-s2', name: '琉璃厂东街老字号书签 / 故宫文创脊兽', tag: '人文纪念', where: '西城区琉璃厂东街', price: '¥25–80', note: '夜游琉璃厂金石笔墨铺子顺手淘件小雅物。' }
    ]
  },
  '中国|温州': {
    gourmet: [
      { id: 'wz-nmf', name: '温州肉末蘑菇汤汁糯米饭', tag: '灵魂早餐', price: '¥12–18', rating: '实测：综合直接夯！', verdict: '夯', note: '粒粒分明的糯米铺满油条碎与肉末蘑菇，底部浸润浓郁肉汤，直接封神。' },
      { id: 'wz-zzf', name: '大肠猪脏粉', tag: '温州街头宵夜/早点', price: '¥20', rating: '实测：香气十足', verdict: '必吃', note: '猪血嫩滑、大肠软糯无腥，高汤鲜香。' },
      { id: 'wz-ml', name: '欧洲城马来黄金双拼 + 咖喱鸡腿饭', tag: '侨乡南洋风味', price: '¥45', rating: '实测：香料地道', verdict: '必吃', note: '沙沙的南洋浓郁咖喱，体现温州华侨城独特饮食融合。' }
    ],
    souvenirs: [
      { id: 'wz-s1', name: '矮人松糕 / 温州鸭舌（初旭/藤桥）', tag: '地方风物', where: '五马街/市区特产店', price: '¥35–68', note: '鸭舌卤香紧实，适合路上当零食或带回宿舍分享。' }
    ]
  },
  '中国|绩溪': {
    gourmet: [
      { id: 'jx-hc', name: '徽州臭鳜鱼 & 胡适一品锅', tag: '正宗徽菜', price: '¥75/人', rating: '徽州代表名菜', verdict: '必吃', note: '蒜瓣肉质紧实咸鲜（实测避坑提醒：景区农家乐点菜务必先拍明码标价菜单，谨防18变48炒粉丝刺客！）。' },
      { id: 'jx-sjb', name: '绩溪挞粿（梅干菜鲜肉现炕）', tag: '古村干粮小吃', price: '¥6–10', rating: '酥香扎实', verdict: '必吃', note: '逛上庄村与龙川水街时趁热吃最香。' }
    ],
    souvenirs: [
      { id: 'jx-s1', name: '胡开文徽墨小墨锭 / 上庄金山时雨茶', tag: '徽州非遗', where: '县城老店（避开景区门口漫天要价摊）', price: '¥30–80', note: '胡适故乡上庄产茶清香，徽墨描金做书房镇纸很有味道。' }
    ]
  },
  '中国|南昌': {
    gourmet: [
      { id: 'nc-bf', name: '南昌拌粉 + 瓦罐肉饼汤', tag: '碳水暴击早餐', price: '¥12–16', rating: '鲜辣爽滑', verdict: '夯', note: '万寿宫/珠宝街巷口小店，猪油酱油拌米粉配醇厚瓦罐汤。' }
    ],
    souvenirs: [
      { id: 'nc-s1', name: '八大山人水墨文创 / 景德镇陶溪川手作单杯', tag: '赣北连线伴手礼', where: '青云谱 / 陶溪川夜市', price: '¥35–120', note: '赣北四日行最后一站景德镇陶溪川淘一只孤品主人杯最具纪念意义。' }
    ]
  },

  // === 日本各大片区与圣地巡礼重镇 ===
  '日本|东京': {
    gourmet: [
      { id: 'tyo-ramen', name: '秋叶原/神田 浓厚鱼介沾面 & 炸牛排', tag: 'Tabelog 3.7+ 巡礼回血餐', price: '1,300–2,200円', rating: 'Tabelog 百名店常客', verdict: '必吃', note: '暴走无线电会馆与神田明神后极度满足的碳水+油脂补给。' },
      { id: 'tyo-ikb', name: '池袋无敌家拉面 / 露西亚亭俄式红菜汤包', tag: '《无头骑士异闻录》原型名店', price: '1,200–1,800円', rating: '圣地同款', verdict: '必吃', note: '池袋西口公园旁，赛门发传单的俄式餐厅露西亚亭现实中真在营业！' },
      { id: 'tyo-monja', name: '月岛文字烧 / 下北泽汤咖喱', tag: '《孤独摇滚》下北泽散步餐', price: '1,400円', rating: 'Tabelog 3.6+', verdict: '必吃', note: '逛完下北泽 SHELTER Livehouse 顺路吃一碗北海道风味蔬菜汤咖喱。' }
    ],
    souvenirs: [
      { id: 'tyo-s1', name: '秋叶原 Radio会馆 / Animate 圣地限定亚克力与设定集', tag: 'ACGN 圣地周边', where: '秋叶原电气街口 Radio会馆', price: '1,500–5,500円（满5000免税）', note: '《命运石之门》现实原型大楼，1–10层二手手办、卡牌与原画集宝库。' },
      { id: 'tyo-s2', name: '神田明神 IT情报安全御守 & 联名绘马', tag: '圣地御朱印/御守', where: '千代田区神田明神', price: '800–1,200円', note: '程序员与二次元双重圣地，IT御守贴笔记本电脑极帅。' },
      { id: 'tyo-s3', name: 'NewYork Perfect Cheese 起司奶油脆卷', tag: '东京站断货伴手礼', where: '东京站/新宿京王百货', price: '1,296円/8枚', note: '早去免排队，咸甜车打起司白巧脆卷回国分送零差评。' }
    ]
  },
  '日本|镰仓': {
    gourmet: [
      { id: 'kmk-shirasu', name: '江之岛生吻仔鱼盖饭（生しらす丼）', tag: '湘南海岸名物', price: '1,500円', rating: 'Tabelog 3.55', verdict: '必吃', note: '《青春猪头少年》《孤独摇滚》同款江之岛参道名物（注意1–3月禁渔期仅提供熟吻仔鱼）。' },
      { id: 'kmk-tako', name: '江之岛整只现压章鱼仙贝（あさひ本店）', tag: '边走边吃', price: '500円', rating: '动画原景同款', verdict: '必吃', note: '《孤独摇滚》波奇酱在江之岛被老鹰抢走的那张超大薄脆章鱼仙贝！' }
    ],
    souvenirs: [
      { id: 'kmk-s1', name: '丰岛屋「鸽子饼干」（鳩サブレー）& 江之电铁道徽章', tag: '镰仓百年名菓', where: '镰仓站小町通本店', price: '1,220円/8枚罐装', note: '黄油香气极其纯粹，铁盒配色超复古；江之岛站还能盖印纪念章。' }
    ]
  },
  '日本|高山': {
    gourmet: [
      { id: 'tky-beef', name: '飞驒牛握寿司（三贯竹炭盐+鹌鹑蛋军舰）& 朴叶味噌烧', tag: '飞驒高山头号名物', price: '1,000–3,800円', rating: 'Tabelog 3.65 · 入口即化', verdict: '夯', note: '《冰菓》上三之町古街边走边吃，A5飞驒牛炙烤油脂香气直接封神，底下虾仙贝当盘子一并吃掉！' },
      { id: 'tky-cafe', name: 'Bagpipe 喫茶店维也纳咖啡 / 宫川朝市布丁', tag: '《冰菓》折木千反田相见原店', price: '650円', rating: '圣地满分还原', verdict: '必吃', note: '千反田说出“我很在意”的原型喫茶店，坐在同款木桌点一杯热可可或咖啡。' }
    ],
    souvenirs: [
      { id: 'tky-s1', name: '飞驒猿宝宝（さるぼぼ）&《冰菓》舞台巡礼地图印章册', tag: '飞驒传统护身符×圣地周边', where: '高山市上三之町 / 观光案内所', price: '700–1,600円', note: '《你的名字》《冰菓》双作品频繁出镜的无脸小红布偶；白川乡还可入合掌屋木雕与浊酒。' }
    ]
  },
  '日本|京都': {
    gourmet: [
      { id: 'kyo-uji', name: '宇治中村藤吉 生茶果冻竹筒芭菲 & 抹茶荞麦面', tag: '宇治百年茶铺总本山', price: '1,650円', rating: 'Tabelog 3.78（建议先取号再去爬大吉山！）', verdict: '夯', note: '微苦回甘的浓厚抹茶冻配白玉红豆，逛完《吹响吧！上低音号》宇治桥刚好叫到号。' },
      { id: 'kyo-yudofu', name: '岚山/南禅寺 汤豆腐 & 鸭川先斗町烧鸟', tag: '京料理风雅', price: '2,500–4,000円', rating: 'Tabelog 3.6+', verdict: '必吃', note: '秋夜微凉时吃一锅热腾腾昆布高汤豆腐。' }
    ],
    souvenirs: [
      { id: 'kyo-s1', name: '宇治伊藤久右卫门抹茶粉 / 小仓山庄仙贝 / 神社四季御朱印帐', tag: '京都必买手信', where: '宇治平等院表参道 / 京都伊势丹', price: '1,200–2,400円', note: '小仓山庄「山春秋」一袋集齐京都八景仙贝，轻便不易碎；宇治神社还能求兔子签。' },
      { id: 'kyo-s2', name: '《京吹》宇治观光中心限定立牌与久美子长椅纪念章', tag: '京阿尼巡礼限定', where: '京阪宇治站 / 宇治市观光中心', price: '0–1,800円', note: '官方长期联名巡礼点，有粉丝留言本与角色等身立牌。' }
    ]
  },
  '日本|和歌山': {
    gourmet: [
      { id: 'wky-shirasu', name: '加太港小岛商店 现烤蓬松鱼饼 & 鲷鱼拉面', tag: '《夏日重现》影子澪同款', price: '900–1,400円', rating: '圣地老铺', verdict: '必吃', note: '搭加太线粉红鲷鱼电车去友岛前，在码头吃一碗浓郁井出商店系和歌山豚骨酱油拉面。' }
    ],
    souvenirs: [
      { id: 'wky-s1', name: '纪州南高梅干 & 加太淡嶋神社雏人偶御守', tag: '纪州风物', where: '和歌山市加太港', price: '800–1,500円', note: '淡嶋神社摆满数万尊神秘人偶，正是《夏日重现》日都神社的原型！' }
    ]
  },
  '日本|函馆': {
    gourmet: [
      { id: 'hkd-lucky', name: 'Lucky Pierrot 小丑汉堡（中华油淋鸡汉堡）& 朝市海鲜五色丼', tag: '函馆独有灵魂快餐', price: '550–2,400円', rating: '全日本仅函馆有分店', verdict: '夯', note: '甜咸酥脆的超大块炸鸡配生菜蛋黄酱，坐在湾区总店看海港超惬意。' }
    ],
    souvenirs: [
      { id: 'hkd-s1', name: '六花亭朗姆葡萄奶油夹心饼 & 白色恋人 & 小樽北一硝子玻璃杯', tag: '北海道三大铭菓', where: '函馆金森红砖仓库 / 新千岁机场免税店', price: '1,500–2,800円', note: '六花亭马尔成奶油夹心饼保质期约10天，建议返程机场买最新鲜。' }
    ]
  },

  // === 欧洲 / 中东 / 亚欧非奇观与哥特西幻重镇 ===
  '捷克|布拉格': {
    gourmet: [
      { id: 'prg-knee', name: '捷克烤猪肘（Koleno）配皮尔森生啤（Pilsner Urquell）', tag: '波希米亚酒馆硬菜', price: '€18–25', rating: '皮脆肉烂·生啤比水便宜', verdict: '夯', note: '在1375年中世纪地窖酒馆 U Krále Brabantského 烛火骷髅头旁啃猪肘喝生啤，西幻感拉满！' },
      { id: 'prg-trd', name: '烟囱卷肉桂糖烤面包（Trdelník）', tag: '街头热甜点', price: '€4–6', rating: '秋冬暖手神器', verdict: '必吃', note: '刚从炭火转炉撸下来滚满肉桂核桃碎最香（不加冰淇淋更纯粹）。' }
    ],
    souvenirs: [
      { id: 'prg-s1', name: '库特纳霍拉人骨教堂纪念银币 & 波希米亚水晶杯 / 鼹鼠玩偶', tag: '暗黑哥特纪念', where: 'Sedlec 墓园小铺 / 布拉格老城', price: '€5–35', note: '压印皇冠骷髅徽记的黄铜/银色纪念章，暗黑哥特母题完美信物。' }
    ]
  },
  '德国|科隆': {
    gourmet: [
      { id: 'cgn-kolsch', name: '科隆细管啤酒（Kölsch 200ml无限续杯）配德式脆皮猪肘酸菜', tag: '莱茵河百年啤酒屋', price: '€2.6/杯 · 正餐€22', rating: 'Früh am Dom 教堂脚下老店', verdict: '必吃', note: '服务员端着圆盘自动续杯，直到你把杯垫盖在酒杯上才会停！' },
      { id: 'rot-snow', name: '罗滕堡雪球酥（Schneeballen）', tag: '中世纪城墙小镇名点', price: '€3.8', rating: '三百年传统油炸酥球', verdict: '必吃', note: '巴伐利亚罗滕堡街头橱窗堆满的圆球点心，原味糖霜或黑巧款最好吃。' }
    ],
    souvenirs: [
      { id: 'cgn-s1', name: '4711 原始古龙水小瓶 & 科隆黑石双尖塔金属模型', tag: '古龙水发源地', where: '科隆大教堂广场旁旗舰店', price: '€8–20', note: '世界最早古龙水（Eau de Cologne 原意就是“科隆之水”），柑橘草本味清爽便携。' }
    ]
  },
  '冰岛|维克': {
    gourmet: [
      { id: 'isl-soup', name: '冰岛火山熔岩黑面包羊肉汤 & 赫本小镇龙虾汤', tag: '极地暴风雪救命热汤', price: '€20–32', rating: '黑沙滩&蓝冰洞出洞必喝', verdict: '夯', note: '从瓦特纳蓝冰洞或黑沙滩顶着狂风出来，一碗滚烫浓郁奶油小龙虾汤瞬间满血。' }
    ],
    souvenirs: [
      { id: 'isl-s1', name: 'Lopapeysa 冰岛传统圆领提花羊毛衣 / 黑火山盐', tag: '极地实用纪念', where: '雷克雅未克手织协会 (Handknitting Assoc.)', price: '€15–180', note: '冰岛羊双层羊毛天然拒水抗狂风；嫌毛衣占包可带一小罐黑沙滩海盐。' }
    ]
  },
  '土耳其|伊斯坦布尔': {
    gourmet: [
      { id: 'ist-kebab', name: '瓦罐焖肉（Testi Kebab）+ 加拉塔大桥烤鱼卷 + 开心果巴克拉瓦', tag: '2027环线欧亚十字美食', price: '¥40–110', rating: '甜咸冲击力极强', verdict: '夯', note: '敲碎陶罐倒出滚烫羊肉；配一杯郁金香杯土耳其红茶解巴克拉瓦酥皮的蜜甜。' }
    ],
    souvenirs: [
      { id: 'ist-s1', name: 'Hafiz Mustafa 鲜切石榴开心果软糖 & 邪恶之眼（蓝眼睛）挂饰', tag: '奥斯曼百年手信', where: '独立大街/艾米诺努老店（抽真空包装）', price: '¥60–130', note: '避开大巴扎虚高散装糖，认准1864年老店鲜切双倍开心果卷。' }
    ]
  },
  '格鲁吉亚|第比利斯': {
    gourmet: [
      { id: 'geo-khinkali', name: '格鲁吉亚灌汤大包子（Khinkali）+ 船型流心芝士饼（Khachapuri）', tag: '高加索碳水与红酒天堂', price: '¥35–65', rating: '2027环线性价比之王', verdict: '夯', note: '捏住面疙瘩先吸一口滚烫黑椒牛羊肉汤，再配一杯陶罐琥珀红酒（Qvevri Wine）！' }
    ],
    souvenirs: [
      { id: 'geo-s1', name: 'Churchkhela 葡萄汁核桃蜡烛糖串 & 干桥市场苏联旧勋章/珐琅银饰', tag: '外高加索猎奇好物', where: '第比利斯干桥跳蚤市场 (Dry Bridge Market)', price: '¥15–90', note: '苏联粗野主义徽章、胶片机与手工景泰蓝银戒指（Minankari）淘货圣地！' }
    ]
  },
  '乌兹别克斯坦|撒马尔罕': {
    gourmet: [
      { id: 'uzb-plov', name: '中亚抓饭中心大锅手抓饭（Besh Qozon Plov）& 烤包子（Samsa）', tag: '丝路碳水霸主', price: '¥25–40', rating: '直径两米巨锅柴火慢焖', verdict: '夯', note: '黄胡萝卜、鹰嘴豆、葡萄干、马肉肠与肥嫩羊肉浸透羊油米粒，中午去才不会卖光！' }
    ],
    souvenirs: [
      { id: 'uzb-s1', name: '撒马尔罕桑皮纸细密画书签 & 布哈拉鹳鸟剪刀', tag: '丝路千年工艺', where: '雷吉斯坦广场旁手工作坊', price: '¥30–110', note: '轻薄不占背包空间，波斯帖木儿钴蓝釉色极美。' }
    ]
  },
  '埃及|开罗': {
    gourmet: [
      { id: 'egy-koshary', name: '埃及国民混搭饭 Koshary（Abou Tarek）& 鲜榨甘蔗芒果汁', tag: '街头平民美食', price: '¥12–20', rating: '碳水四重奏+脆炸洋葱', verdict: '必吃', note: '通心粉+米饭+扁豆+鹰嘴豆浇蒜醋辣番茄汁，饱腹又地道。' }
    ],
    souvenirs: [
      { id: 'egy-s1', name: '手绘莎草纸画（认准博物馆/正规纸坊）& 象形文字定制银卡图什坠', tag: '古典神代信物', where: '开罗扎马雷克岛文创店', price: '¥40–150', note: '避开金字塔脚下香蕉叶假莎草纸和小贩强塞纪念品。' }
    ]
  }
};

// Country-level fallback goodies so almost any destination shows authentic local flavor!
const ATLAS_COUNTRY_GOODIES_FALLBACK = {
  '日本': {
    gourmet: [
      { id: 'jp-fb-1', name: '当地商店街老铺定食 / 车站便当（駅弁）', tag: '日本铁道旅情', price: '1,100–1,600円', rating: 'Tabelog 3.5+ 搜附近名店', verdict: '必吃', note: '每座新干线与地方线车站都有使用本县食材的限定駅弁，巡礼途中在车窗看风景吃最对味。' }
    ],
    souvenirs: [
      { id: 'jp-fb-2', name: '当地神社寺院御朱印 / 观光案内所圣地巡礼纪念章', tag: '零负重手账收藏', where: '各站观光案内所 / 神社授与所', price: '300–500円', note: '随身带一本御朱印帐+集章本，把走过的每一处动画原型印记盖进本子里。' }
    ]
  },
  '法国': {
    gourmet: [{ id: 'fr-fb-1', name: '圣米歇尔山舒芙蕾厚蛋卷 / 布列塔尼荞麦可丽饼配苹果酒', tag: '诺曼底风味', price: '€16–32', rating: '百年驿站传统', verdict: '必吃', note: '咸味荞麦可丽饼（Galette）配微醺干型苹果西打（Cidre Brut）性价比极高。' }],
    souvenirs: [{ id: 'fr-fb-2', name: '诺曼底海盐黄油饼干铁盒 & 哥特彩绘玻璃书签', tag: '法式伴手礼', where: '教堂文创店 / Monoprix 超市', price: '€6–15', note: '超市采购黄油饼干价格仅为景区1/3。' }]
  },
  '英国': {
    gourmet: [{ id: 'uk-fb-1', name: '康沃尔现烤肉馅饼（Cornish Pasty）& 苏格兰高地羊杂布丁配泥煤威士忌', tag: '不列颠海崖热食', price: '£7–22', rating: '抗海风高热量', verdict: '必吃', note: '在亚瑟王断崖或爱丁堡古巷顶风走完，来一只滚烫酥皮胡椒牛肉馅饼超顶饱。' }],
    souvenirs: [{ id: 'uk-fb-2', name: '苏格兰格纹纯羊毛围巾 & 博物馆路易斯西洋棋复刻棋子', tag: '西幻中世纪风物', where: '爱丁堡皇家英里 / 大英博物馆商店', price: '£15–45', note: '12世纪海象牙狂战士棋子复刻摆件，西幻迷狂喜。' }]
  },
  '希腊': {
    gourmet: [{ id: 'gr-fb-1', name: '炭烤猪肉皮塔卷（Gyros Pita）& 卫城夜景露台羊排配菲达奶酪沙拉', tag: '爱琴海阳光风味', price: '€4.5–22', rating: '街头神级快餐', verdict: '夯', note: '4欧一个塞满烤肉、薯条和酸奶黄瓜酱（Tzatziki）的Pita卷，穷游神物！' }],
    souvenirs: [{ id: 'gr-fb-2', name: '古希腊猫头鹰四德拉克马复刻银币 & 克里特特级初榨橄榄油皂', tag: '雅典娜智慧信物', where: '雅典卫城博物馆商店', price: '€5–25', note: '雅典娜圣鸟小猫头鹰浮雕古币，小巧精致极富神代气息。' }]
  },
  '意大利': {
    gourmet: [{ id: 'it-fb-1', name: '那不勒斯木柴窑烤玛格丽特披萨 & 手工开心果 Gelato', tag: '庞贝顺路发源地朝圣', price: '€6–12', rating: '百年老店 L’Antica Pizzeria da Michele', verdict: '夯', note: '去庞贝火山古城必经那不勒斯，6欧元一张刚出炉焦边水牛芝士披萨直接封神！' }],
    souvenirs: [{ id: 'it-fb-2', name: '阿马尔菲柠檬酒小瓶（Limoncello）& 庞贝马赛克复刻杯垫', tag: '南意阳光手信', where: '索伦托/庞贝文创店', price: '€6–16', note: '马赛克瓷砖画“小心恶犬（Cave Canem）”杯垫既幽默又有两千年历史感。' }]
  },
  '泰国': {
    gourmet: [{ id: 'th-fb-1', name: '泰北咖喱金面（Khao Soi）& 蝶豆花芒果糯米饭', tag: '清莱/清迈灵魂面食', price: '¥12–22', rating: '椰香浓汤配脆炸蛋面', verdict: '夯', note: '清莱白庙旁就能吃到超水准泰北金面，加酸菜、红葱头和青柠汁绝配。' }],
    souvenirs: [{ id: 'th-fb-2', name: '清莱白庙许愿银菩提叶 / 泰北小菠萝干与青草膏', tag: '东南亚手信', where: '清莱白庙 / 夜市', price: '¥15–40', note: '清莱产迷你小菠萝清甜爆汁，果干便携好带。' }]
  }
};

function atlasGetPlaceGoodies(place) {
  if (!place) return { gourmet: [], souvenirs: [], matchedScope: '' };
  const country = place.country || '';
  const name = place.name || '';
  const region = place.region || '';
  let base = null, scope = '';
  const exactKey = `${country}|${name}`;
  if (ATLAS_GOURMET_SOUVENIRS[exactKey]) {
    base = ATLAS_GOURMET_SOUVENIRS[exactKey];
    scope = name;
  } else {
    for (const [k, val] of Object.entries(ATLAS_GOURMET_SOUVENIRS)) {
      const [kc, kn] = k.split('|');
      if (kc === country && (name.includes(kn) || kn.includes(name) || region.includes(kn) || (place.intro || '').includes(kn))) {
        base = val;
        scope = kn;
        break;
      }
    }
    if (!base && ATLAS_COUNTRY_GOODIES_FALLBACK[country]) {
      base = ATLAS_COUNTRY_GOODIES_FALLBACK[country];
      scope = country + '通用';
    }
  }
  const customStore = (typeof state !== 'undefined' && state?.customGoodies && state.customGoodies[exactKey]) || { gourmet: [], souvenirs: [] };
  return {
    gourmet: [...(customStore.gourmet || []), ...(base?.gourmet || [])],
    souvenirs: [...(customStore.souvenirs || []), ...(base?.souvenirs || [])],
    matchedScope: scope || name
  };
}

// Standard WGS-84 -> GCJ-02 coordinate transform (for Mainland China alignment on Gaode Retina Chinese tiles)
function atlasIsInMainlandChina(lat, lng) {
  if (lng < 73.33 || lng > 135.05 || lat < 18.15 || lat > 53.55) return false;
  // Exclude Japan / Korea / Okinawa / Philippines / Hong Kong / Macau rough boxes
  if (lng > 122.9 && lat < 40.0) return false; // Korea & Japan
  if (lng > 119.8 && lat < 25.5) return false; // Taiwan uses WGS-84 on global maps
  return true;
}
function atlasWgsToGcj(lat, lng) {
  lat = Number(lat); lng = Number(lng);
  if (!Number.isFinite(lat) || !Number.isFinite(lng) || !atlasIsInMainlandChina(lat, lng)) return [lat, lng];
  const a = 6378245.0, ee = 0.00669342162296594323, pi = Math.PI;
  const x = lng - 105.0, y = lat - 35.0;
  let dLat = -100.0 + 2.0 * x + 3.0 * y + 0.2 * y * y + 0.1 * x * y + 0.2 * Math.sqrt(Math.abs(x));
  dLat += (20.0 * Math.sin(6.0 * x * pi) + 20.0 * Math.sin(2.0 * x * pi)) * 2.0 / 3.0;
  dLat += (20.0 * Math.sin(y * pi) + 40.0 * Math.sin(y / 3.0 * pi)) * 2.0 / 3.0;
  dLat += (160.0 * Math.sin(y / 12.0 * pi) + 320 * Math.sin(y * pi / 30.0)) * 2.0 / 3.0;
  let dLng = 300.0 + x + 2.0 * y + 0.1 * x * x + 0.1 * x * y + 0.1 * Math.sqrt(Math.abs(x));
  dLng += (20.0 * Math.sin(6.0 * x * pi) + 20.0 * Math.sin(2.0 * x * pi)) * 2.0 / 3.0;
  dLng += (20.0 * Math.sin(x * pi) + 40.0 * Math.sin(x / 3.0 * pi)) * 2.0 / 3.0;
  dLng += (150.0 * Math.sin(x / 12.0 * pi) + 300.0 * Math.sin(x / 30.0 * pi)) * 2.0 / 3.0;
  const radLat = lat / 180.0 * pi;
  let magic = Math.sin(radLat);
  magic = 1 - ee * magic * magic;
  const sqrtMagic = Math.sqrt(magic);
  dLat = (dLat * 180.0) / ((a * (1 - ee)) / (magic * sqrtMagic) * pi);
  dLng = (dLng * 180.0) / (a / sqrtMagic * Math.cos(radLat) * pi);
  return [lat + dLat, lng + dLng];
}
