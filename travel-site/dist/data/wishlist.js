const ATLAS_STORYLINES = [
  {
    id: 'line-gothic',
    num: '哥特',
    icon: '⛪',
    shortTitle: '暗黑哥特',
    title: '⛪ 暗黑哥特 · 黑石尖塔、皇冠白骨与吸血鬼古堡',
    color: '#8E152A',
    tagline: '深红标记 · 潮汐孤岛修道院、157米漆黑双尖塔、亚诺尔隆德纯白飞扶壁、头戴皇冠的青铜骷髅石棺、德古拉古堡与地底猩红血池。'
  },
  {
    id: 'line-fantasy',
    num: '西幻',
    icon: '🛡️',
    shortTitle: '西幻奇境',
    title: '🛡️ 西幻奇境 · 剑与魔法城邦、六棱玄武岩与中土大地',
    color: '#2457C5',
    tagline: '钴蓝标记 · 亚瑟王断崖、陨石坑正圆城墙、1375年烛火骷髅酒馆，以及巨人筑桥般的六棱玄武岩柱、两千年精灵巨杉与中土峡湾。'
  },
  {
    id: 'line-brutalist',
    num: '巨构',
    icon: '🏗️',
    shortTitle: '粗野巨构',
    title: '🏗️ 粗野巨构 · 素混凝土乌托邦、巨剑与机械内脏',
    color: '#8C8880',
    tagline: '混凝土灰标记 · 针叶林迷雾上的苏联64米射电巨碗、风雪山巅废弃飞碟、高擎33米长剑的女武神、无窗高塔与管道外翻的机械心脏。'
  },
  {
    id: 'line-ruins',
    num: '神代',
    icon: '🏛️',
    shortTitle: '神代',
    title: '🏛️ 神代 · 古文明遗迹、神庙与神话巨像',
    color: '#B87D14',
    tagline: '古金标记 · 雅典卫城帕特农大理石柱廊、火山灰封印的庞贝、史前巨石圆阵、吉尔伽美什王都乌鲁克、吉萨金字塔、孤岛摩艾石像、清莱白庙与巴厘岛神鹰巨像。'
  },
  {
    id: 'line-nature',
    num: '奇观',
    icon: '🏔️',
    shortTitle: '自然奇观',
    title: '🏔️ 自然奇观 · 极地蓝冰、荒野孤峰与天空之镜',
    color: '#0891B2',
    tagline: '冰川青标记 · 万年幽蓝冰川洞穴、黑沙白浪、冰泡竖锥与蓝冰推岸、163号公路刺向纪念碑谷孤峰、一万平方公里天空之镜与红土独石。'
  },
  {
    id: 'line-bloom',
    num: '生灵',
    icon: '🔥',
    shortTitle: '生灵祭典',
    title: '🔥 生灵祭典 · 梦幻花海、万亿生灵迁徙与烈火狂欢',
    color: '#F27CAA',
    tagline: '粉红标记 · 百万株蓝色粉蝶花丘、无边薰衣草浪、压弯森林的亿万帝王蝶、横渡马拉河的百万角马、萌羊猫岛与极夜焚烧维京战船。'
  },
  {
    id: 'line-acg',
    num: 'ACG',
    icon: '🎬',
    shortTitle: 'ACG',
    title: '🎬 ACG · 按作品切换你的 Bangumi 与游戏实景记忆',
    color: '#7C3AED',
    tagline: '鸢尾紫标记 · 直接按作品切！串联 Anitabi 精确机位原画对比与 360° 街景，把高分动画与游戏的名场面走成现实脚步。'
  }
];

const ATLAS_WISHLIST_SEED = [
  // ==================== Line 01 ·【荒丘剑冢与擎天巨刃】(3) ====================
  {
    id: 'wish-georgia-didgori',
    lineId: 'line-blades', lineOrder: 1,
    name: '迪德戈里战役纪念碑（格鲁吉亚剑山）',
    country: '格鲁吉亚', region: '下卡尔特利 · 迪德戈里山（距第比利斯 45km）',
    lat: 41.7636, lng: 44.5081, zoom: 12,
    source: 'user', category: 'mega',
    aesthetics: ['剑与魔法', '巨大·无机质', '2027顺路可去'],
    work: '现实版「无限剑制 Unlimited Blade Works」· 1121年奇迹之战纪念碑',
    bgmScore: 8,
    summary: '海拔1600米高加索荒原草甸上数十把十米青铜巨剑笔直插地，中央耸立混凝土断柱',
    intro: '被旅行者称为格鲁吉亚“剑山”的迪德戈里战役纪念碑（Didgori Battle Memorial），坐落于第比利斯以西约 45 公里的高加索高山草甸之巅，纪念 1121 年“建设者”大卫四世以少胜多的传奇战役。\n苍茫狂风吹拂的山脊上，数十把高达十余米、十字剑柄的巨型青铜阔剑密密麻麻直插大地，中央矗立着撕裂天际的粗砺混凝土母柱与残缺武士躯干雕像——几乎 1:1 复刻了《Fate/stay night [UBW]》固有结界「无限剑制」与《剑风传奇》剑之丘的悲壮画面！你在 2027 亚欧非环线停靠第比利斯时，包车 1 小时即可顺访（还可同日打卡第比利斯海边的 35 米黑铜巨柱群「格鲁吉亚编年史纪念碑」）。',
    subSpots: [
      { name: '迪德戈里山脊巨剑阵列', detail: '41.7636°N, 44.5081°E · 第比利斯包车约 1 小时，阴云或黄昏逆光压迫感极强' }
    ],
    photos: [
      { wiki: ['en', 'Didgori_Battle_Memorial'], backupQuery: 'Didgori Battle Memorial Georgia swords', caption: '格鲁吉亚迪德戈里“剑山”——高山草甸上直插大地的巨型青铜阔剑阵列' }
    ]
  },
  {
    id: 'wish-lithuania-crosses',
    lineId: 'line-blades', lineOrder: 2,
    name: '希奥利艾 · 十字架山（Hill of Crosses）',
    country: '立陶宛', region: '希奥利艾县（Šiauliai）北部平原',
    lat: 56.0153, lng: 23.4167, zoom: 13,
    source: 'user', category: 'ruins',
    aesthetics: ['巨大·无机质', '剑与魔法'],
    work: '十万铁木十字架插满荒丘的抵抗与信仰碑林',
    bgmScore: null,
    summary: '波罗的海荒原孤丘上密密麻麻插满逾 10 万座铁木十字架，起风时金属念珠齐声悲鸣',
    intro: '立陶宛北部希奥利艾郊外的一座低矮荒丘上，自 1831 年反抗沙俄起义以来，一代代朝圣者与抵抗者不断在此插下十字架——即便苏联时期曾三次用推土机彻底铲平封锁，人们仍在黑夜里冒死潜回重建，如今山丘上已层层叠叠矗立着超过 10 万座大至数米、小至寸许的铁制与木雕十字架。\n当波罗的海冷风掠过荒丘，成千上万串悬挂在十字架上的金属玫瑰念珠与铁片同时碰撞出空灵清脆的金属共鸣，穿过狭窄的木阶小径仿佛置身一片由钢铁与执念生长出的异界碑林。',
    subSpots: [
      { name: 'Kryžių kalnas 主丘木阶步道', detail: '56.0153°N, 23.4167°E · 希奥利艾火车站乘巴士至 Domantai 站步行 1.5 km' }
    ],
    photos: [
      { wiki: ['en', 'Hill_of_Crosses'], backupQuery: 'Hill of Crosses Lithuania', caption: '立陶宛十字架山——逾十万座铁木十字架层叠耸立的荒原孤丘' }
    ]
  },
  {
    id: 'wish-motherland-calls',
    lineId: 'line-blades', lineOrder: 3,
    name: '伏尔加格勒 ·《祖国母亲在呼唤》巨像',
    country: '俄罗斯', region: '伏尔加格勒 · 马马耶夫岗山巅',
    lat: 48.7424, lng: 44.5370, zoom: 13,
    source: 'user', category: 'mega',
    aesthetics: ['巨大·无机质', '剑与魔法'],
    work: '85米高预应力混凝土女武神高擎33米不锈钢巨剑刺破苍穹',
    bgmScore: null,
    summary: '马马耶夫岗古战场之巅重达 8000 吨的混凝土巨像，单手高举 33 米巨型长剑呼号冲锋',
    intro: '矗立在斯大林格勒保卫战最惨烈高地「马马耶夫岗」顶端的《祖国母亲在呼唤》（The Motherland Calls，1967 年落成），总高 85 米（比自由女神像本体高近一倍）、重达 8000 吨，是全世界最高的非宗教女性雕像与结构力学奇迹：整尊粗砺灰白混凝土躯体以剧烈扭转身姿逆风迈步，仅靠自身配重自由站立在基座之上而无任何地脚螺栓固定！\n她右手高高擎起一把长达 33 米、重 14 吨的巨型氟塑料与不锈钢长剑直刺云霄，从山脚拾级走完象征战役天数的 200 级花岗岩台阶仰望巨剑划破天幕，巨物崇高感令人头皮发麻。',
    subSpots: [
      { name: '马马耶夫岗 200 级纪念阶梯与万神殿', detail: '48.7424°N, 44.5370°E · 沿中轴线拾级而上时巨剑恰好把远处的救世主大教堂遮入身后' }
    ],
    photos: [
      { wiki: ['en', 'The_Motherland_Calls'], backupQuery: 'The Motherland Calls Volgograd statue', caption: '伏尔加格勒《祖国母亲在呼唤》——高擎33米巨剑直刺天空的85米混凝土巨像' }
    ]
  },

  // ==================== Line 02 ·【黑石尖塔与皇冠白骨】(6) ====================
  {
    id: 'wish-mont-saint-michel',
    lineId: 'line-gothic', lineOrder: 1,
    name: '诺曼底 · 圣米歇尔山（Mont-Saint-Michel）',
    country: '法国', region: '诺曼底大区 · 芒什省潮汐海湾',
    lat: 48.6361, lng: -1.5115, zoom: 13,
    source: 'user', category: 'fantasy',
    aesthetics: ['西幻·巨人·矮人·精灵', '剑与魔法', '巨大·无机质'],
    work: '潮汐流沙孤岛哥特修道院 ·《Re:0》沙海孤塔与《天空之城》意象',
    bgmScore: 9,
    summary: '退潮立于无垠流沙滩中央、涨潮化作海上孤城的千年花岗岩哥特修道院尖塔',
    intro: '在诺曼底与布列塔尼交界处拥有全欧洲最大潮差（15米）的浅海沙湾中央，一座周长仅 900 米的圆锥形花岗岩孤岛拔地而起，层层叠叠的中世纪城墙簇拥着山顶直插云霄的哥特式圣米歇尔修道院与金身大天使执剑像。\n退潮时四周化作一望无际闪着银光的荒凉流沙滩（完美契合《Re:从零开始的异世界生活》第四季奥古利亚沙丘深处孤绝耸立的「普勒阿得斯监视塔（贤者之塔）」意象！）；天文大潮涌来时引桥淹没，整座山城瞬间与大陆隔绝，化作漂浮怒海之上的神圣要塞。',
    subSpots: [
      { name: '圣米歇尔山修道院回廊 & 库斯农河堤坝倒影机位', detail: '48.6361°N, 1.5115°W · 日出晨雾与蓝调时刻亮灯倒影最为魔幻' }
    ],
    photos: [
      { wiki: ['en', 'Mont-Saint-Michel'], backupQuery: 'Mont Saint Michel reflection twilight', caption: '法国诺曼底圣米歇尔山——潮汐流沙海湾中央拔地而起的哥特孤岛修道院' }
    ]
  },
  {
    id: 'wish-rouen-cathedral',
    lineId: 'line-gothic', lineOrder: 2,
    name: '诺曼底 · 鲁昂大教堂（Cathédrale de Rouen）',
    country: '法国', region: '诺曼底首府 · 鲁昂老城（距圣米歇尔山 2h）',
    lat: 49.4402, lng: 1.0950, zoom: 14,
    source: 'user', category: 'ruins',
    aesthetics: ['剑与魔法', '圣地巡礼'],
    work: '莫奈30幅光影杰作 · 狮心王理查心脏安葬处（《Fate/strange Fake》8分）& 贞德殉道城',
    bgmScore: 8,
    summary: '151米铸铁尖塔冠绝全法的火焰哥特立面，内葬狮心王理查之心，外邻圣女贞德火刑广场',
    intro: '鲁昂主教座堂拥有高达 151 米的全法国最高教堂尖塔（曾是世界最高建筑），其西立面繁复如燃烧石雕蕾丝般的晚期「火焰哥特式（Flamboyant Gothic）」雕刻令莫奈痴迷不已，在教堂对面租屋连续画下 30 余幅不同晨昏光线下的《鲁昂大教堂》组画。\n而对型月与历史迷而言这里更是双重圣地：教堂唱诗班席位下安葬着英格兰国王「狮心王理查一世」的心脏（正是你 Bangumi 打了 8 分的《Fate/strange Fake》中豪迈无双的 Saber 理查一世！）；走出教堂向西步行仅 500 米的老集市广场（Place du Vieux-Marché），便是 1431 年圣女贞德（Ruler / 黑贞）被处以火刑的殉道原址！',
    subSpots: [
      { name: '鲁昂大教堂西立面 & 狮心王理查心之墓', detail: '49.4402°N, 1.0950°E · 顺访步行 6 分钟外的贞德火刑十字架与贞德教堂' }
    ],
    photos: [
      { wiki: ['en', 'Rouen_Cathedral'], backupQuery: 'Rouen Cathedral west facade Gothic', caption: '法国鲁昂大教堂——繁复如火焰石蕾丝的哥特西立面与151米全法最高尖塔' }
    ]
  },
  {
    id: 'wish-cologne-cathedral',
    lineId: 'line-gothic', lineOrder: 3,
    name: '莱茵河畔 · 科隆大教堂（Kölner Dom）',
    country: '德国', region: '北莱茵-威斯特法伦州 · 科隆中央车站旁',
    lat: 50.9413, lng: 6.9583, zoom: 14,
    source: 'user', category: 'mega',
    aesthetics: ['巨大·无机质', '剑与魔法'],
    work: '耗时632年筑成的157米漆黑哥特双尖塔巨兽',
    bgmScore: null,
    summary: '走出火车站一抬头便遮蔽整片视野的157米漆黑石造双尖塔，哥特崇高与压迫感天花板',
    intro: '自 1248 年奠基至 1880 年竣工，整整跨越 632 年才建成的科隆大教堂，是地球上最具巨物压迫感的哥特建筑：粗糙风化呈深邃煤黑色的砂岩外墙、如无数黑色石剑簇拥直刺阴云的 157 米双尖塔，就紧贴在科隆火车站出口零距离处——走出车站大门抬起头的那一秒，整个人会被扑面而来的黑石山岳彻底震慑失语。\n教堂主祭坛内供奉着中世纪镶金嵌宝的「东方三博士圣龛」，攀登 533 级狭窄螺旋石阶登上南塔高空笼廊，脚下便是奔流的莱茵河与霍亨索伦钢铁拱桥。',
    subSpots: [
      { name: '科隆中央车站出站仰角广场 & 莱茵河东岸日落机位', detail: '50.9413°N, 6.9583°E · 黄昏隔着霍亨索伦铁桥拍摄双黑塔剪影绝佳' }
    ],
    photos: [
      { wiki: ['en', 'Cologne_Cathedral'], backupQuery: 'Cologne Cathedral black gothic spires', caption: '德国科隆大教堂——耗时六百余年建成的157米漆黑哥特双尖塔巨构' }
    ]
  },
  {
    id: 'wish-prague-monster',
    lineId: 'line-gothic', lineOrder: 4,
    name: '布拉格查理大桥与旧城哥特双塔',
    country: '捷克', region: '布拉格老城 · 伏尔塔瓦河',
    lat: 50.0865, lng: 14.4114, zoom: 13,
    source: 'bgm', category: 'acg',
    aesthetics: ['圣地巡礼', '剑与魔法'],
    work: '《MONSTER 怪物》',
    bgmScore: 8,
    summary: '浦泽直树笔下“没有名字的怪物”潜伏的百塔哥特迷城，晨雾石桥耸立30尊发黑圣徒雕像',
    intro: '浦泽直树悬疑神作《MONSTER 怪物》（Bangumi 8/10）最诡谲深邃的“三只青蛙”篇章完整展开在布拉格。破晓浓雾笼罩伏尔塔瓦河面时，建于 1357 年的哥特石桥「查理大桥」两侧 30 尊发黑的巴洛克圣徒石像在路灯下静默伫立；桥头哥特式火药塔与老城广场狰狞锋利的泰恩教堂黑尖塔刺破晨霭，整座古城宛如《血源诅咒》亚楠城的现实镜像。',
    subSpots: [
      { name: '查理大桥东侧老城桥塔 & 泰恩教堂', detail: '50.0865°N, 14.4114°E · 日出前30分钟空无一人时哥特氛围最浓烈' }
    ],
    photos: [
      { src: 'photos/wishlist/prague-monster.jpg', caption: '捷克布拉格查理大桥哥特桥塔与百塔天际线——《MONSTER》布拉格篇舞台' }
    ]
  },
  {
    id: 'wish-vienna-crypt',
    lineId: 'line-gothic', lineOrder: 5,
    name: '维也纳 · 哈布斯堡皇家墓穴（Kaisergruft）',
    country: '奥地利', region: '维也纳内城区 · 嘉布遣会教堂地宫',
    lat: 48.2056, lng: 16.3698, zoom: 15,
    source: 'user', category: 'ruins',
    aesthetics: ['消逝的文明·诸神遗迹', '2027顺路可去'],
    work: '头戴帝国皇冠的镀金青铜骷髅石棺群 · 2027维也纳站直达',
    bgmScore: null,
    summary: '埋葬149名哈布斯堡皇室成员的地下墓室，头戴神圣罗马皇冠的青铜骷髅凝视永恒',
    intro: '隐藏在维也纳市中心朴素嘉布遣会教堂地下的「皇家墓穴（Kaisergruft / Imperial Crypt）」，自 1633 年起安葬了包括 12 位皇帝、19 位皇后（含玛丽亚·特蕾莎女皇与茜茜公主）在内的 149 位哈布斯堡王朝成员。\n最震撼人心的是巴洛克大师巴尔塔萨·费迪南·莫尔锻造的巨型锡青铜华丽石棺（如查理六世石棺与特蕾莎双人巨棺）：棺角赫然装饰着**头戴神圣罗马帝国皇冠与奥地利大公冠、披着华服寿衣张口冷笑的逼真金属骷髅头**——用最极致的帝国权力徽记包裹白骨，将欧洲哥特—巴洛克「记住你终有一死（Memento Mori）」的死亡美学推向极致！你的 2027 环线原本就停靠维也纳，步行即可直达地宫！',
    subSpots: [
      { name: '玛丽亚·特蕾莎穹顶墓室 & 查理六世皇冠骷髅石棺', detail: '48.2056°N, 16.3698°E · 维也纳霍夫堡皇宫步行 5 分钟即达' }
    ],
    photos: [
      { wiki: ['en', 'Imperial_Crypt'], backupQuery: 'Kaisergruft Vienna skull crown sarcophagus', caption: '维也纳哈布斯堡皇家墓穴——头戴帝国皇冠的巴洛克青铜骷髅石棺' }
    ]
  },
  {
    id: 'wish-milan-duomo',
    lineId: 'line-gothic', lineOrder: 6,
    name: '米兰大教堂（Duomo di Milano）',
    country: '意大利', region: '伦巴第大区 · 米兰主座教堂广场',
    lat: 45.4641, lng: 9.1919, zoom: 14,
    source: 'user', category: 'mega',
    aesthetics: ['剑与魔法', '巨大·无机质'],
    work: '135座纯白大理石尖塔与飞扶壁森林 ·《黑暗之魂》亚诺尔隆德王城原型',
    bgmScore: null,
    summary: '耗时近六百年雕琢的粉白坎多利亚大理石圣殿，登顶穿梭于135座哥特尖塔与飞扶壁之间',
    intro: '与科隆大教堂的煤黑冷峻截然相反，耗时五个多世纪建成的米兰主教座堂通体采用温润晶莹的坎多利亚粉白大理石砌成，拥有多达 **135 座如剑林般刺向天空的大理石尖塔** 与超过 3400 尊雕像（包括外墙著名的剥皮圣徒「圣巴多罗买披皮雕像」）。\n它的重重飞扶壁（Flying Buttresses）与屋顶纯白石板步道，正是宫崎英高在《黑暗之魂》中设计众神之城**「亚诺尔隆德（Anor Londo）」**（银骑士张弓守卫的飞扶壁走廊！）的直接现实取景原型！一定要购票登上教堂屋顶露台，亲身走在层叠交错的白色飞扶壁与大理石尖塔森林中央。',
    subSpots: [
      { name: 'Duomo Terrazze（屋顶飞扶壁步道）& 圣巴多罗买雕像', detail: '45.4641°N, 9.1919°E · 务必买含屋顶露台（Rooftop）门票，体验漫步亚诺尔隆德' }
    ],
    photos: [
      { wiki: ['en', 'Milan_Cathedral'], backupQuery: 'Milan Cathedral rooftop spires flying buttresses', caption: '意大利米兰大教堂——135座大理石尖塔森林，宫崎英高《黑暗之魂》亚诺尔隆德原型' }
    ]
  },
  {
    id: 'wish-bran-dracula',
    lineId: 'line-gothic', lineOrder: 7,
    name: '特兰西瓦尼亚 · 布兰城堡 & 波耶纳里古堡',
    country: '罗马尼亚', region: '喀尔巴阡山脉布拉索夫 · 阿尔杰什峡谷（2027布加勒斯特顺路！）',
    lat: 45.5149, lng: 25.3672, zoom: 12,
    source: 'user', category: 'ruins',
    aesthetics: ['剑与魔法', '圣地巡礼', '2027顺路可去'],
    work: '吸血鬼《德古拉》起源 ·「穿刺公」弗拉德三世（《Fate/Apocrypha》大公本尊）',
    bgmScore: null,
    summary: '险峻喀尔巴阡岩峰上的德古拉伯爵古堡原型，溯源15世纪穿刺公弗拉德三世的血色传说',
    intro: '没错！现代流行文化中一切吸血鬼伯爵的鼻祖——爱尔兰作家斯托克 1897 年小说《德古拉（Dracula）》，其历史人物原型正是 15 世纪罗马尼亚瓦拉几亚大公 **弗拉德三世（Vlad III Dracula，「Dracula」意为龙之子，即《Fate/Apocrypha》与《FGO》的大公！）**。他曾将两万名入侵奥斯曼士兵穿刺在木桩上排成骇人的“木桩森林”，在西欧印刷品中被渲染为嗜血魔君。\n有趣的历史双城记：耸立在特兰西瓦尼亚峡谷巨岩上的「布兰城堡（Bran Castle）」是斯托克笔下德古拉城堡的**视觉外观原型**；而弗拉德三世真正盘踞统治的“真·穿刺公鹰巢”，则是西侧悬崖顶端需爬 1480 级台阶的「波耶纳里城堡废墟（Poenari Castle）」！你的 2027 环线停靠布加勒斯特时，向北进山 2.5 小时即可一并探访！',
    subSpots: [
      { name: '布兰城堡（Bran Castle · 德古拉古堡视觉原型）', detail: '45.5149°N, 25.3672°E · 布拉索夫乘车 40 分钟，晨雾森林环抱险峻塔楼' },
      { name: '波耶纳里城堡废墟（Poenari Castle · 弗拉德三世真王城）', detail: '45.3539°N, 24.6353°E · 传斯法格拉珊公路起点悬崖之巅' }
    ],
    photos: [
      { wiki: ['en', 'Bran_Castle'], backupQuery: 'Bran Castle Transylvania Romania', caption: '罗马尼亚特兰西瓦尼亚布兰城堡——吸血鬼德古拉古堡原型（溯源穿刺公弗拉德三世）' }
    ]
  },
  {
    id: 'wish-sacred-house',
    lineId: 'line-gothic', lineOrder: 8,
    name: '卡帕多奇亚 · 萨科里德之家（Sacred House）',
    country: '土耳其', region: '内夫谢希尔省于尔居普（距你2027格雷梅站仅 8km！）',
    lat: 38.6306, lng: 34.9115, zoom: 14,
    source: 'user', category: 'fantasy',
    aesthetics: ['剑与魔法', '2027顺路可去'],
    work: '250年石窟古宅改造的「吸血鬼暗黑古堡」与但丁《神曲》地底猩红血池',
    bgmScore: null,
    summary: '幽暗哥特石拱地底藏着一座猩红如鲜血的「炼狱泳池」，吐火石兽与烛台宛如吸血鬼秘殿',
    intro: '坐落于土耳其卡帕多奇亚于尔居普老城的「萨科里德之家（Sacred House）」，由设计师 Turan Gülcüoğlu 将一座 250 年历史的古希腊贵族石宅耗时多年改造成全地球最极致的暗黑哥特/炼金术美学秘境（被称为“吸血鬼酒店”）！\n最封神的地下空间「Inferno（但丁地狱水疗池）」：在凿入火山岩地底的漆黑尖拱石殿中央，整池水体由深红马赛克映衬得如粘稠鲜血般猩红，两侧石雕恶魔口吐烈焰、青铜枝形吊灯摇曳微光——而且它距离你 **2027 亚欧非环线必住的格雷梅（Göreme）只有 10 分钟车程**！',
    subSpots: [
      { name: 'Sacred House 地底猩红炼狱泳池（Inferno Pool）', detail: '38.6306°N, 34.9115°E · 土耳其卡帕多奇亚 Ürgüp 镇中心，可预订入住或晚餐参观' }
    ],
    photos: [
      { wiki: ['en', 'Ürgüp'], backupQuery: 'Ürgüp Cappadocia stone mansion', caption: '土耳其卡帕多奇亚于尔居普石窟古镇——暗黑哥特秘境「萨科里德之家」所在地' }
    ]
  },

  // ==================== Line 03 ·【地狱千手与神魔巨像】(3) ====================
  {
    id: 'wish-wat-rong-khun',
    lineId: 'line-esoteric', lineOrder: 1,
    name: '清莱 · 白庙（灵光寺 Wat Rong Khun）',
    country: '泰国', region: '泰北清莱府（Chiang Rai）',
    lat: 19.8242, lng: 99.7631, zoom: 14,
    source: 'user', category: 'ruins',
    aesthetics: ['消逝的文明·诸神遗迹', '巨大·无机质'],
    work: '地狱深渊千百苍白枯手抓挠的轮回奈何桥 + 纯白碎镜极乐佛殿',
    bgmScore: null,
    summary: '踏过下方无数绝望白手向上伸展的地狱深渊之桥，走入纯白无瑕镶满镜片的刺目佛殿',
    intro: '由泰国鬼才艺术家察霖猜（Chalermchai Kositpipat）倾尽毕生心血自 1997 年起建造的清莱白庙（灵光寺），彻底颠覆了传统金碧辉煌的泰式佛寺：整座建筑群以象征佛陀纯洁的纯白灰泥塑造，并手工镶嵌了数以百万计的碎镜片，在热带烈日下反射出近乎失真的眩目银白寒光。\n进入主殿唯一的必经之路是「轮回再生之桥」——桥下深坑中密密麻麻伸出成百上千只扭曲挣扎、托着骷髅与断碗的苍白鬼手，两侧伫立獠牙罗刹巨像，桥上严禁回头，一步跨过贪嗔痴地狱直抵彼岸极乐，视觉张力与宗教诡谲感拉满！',
    subSpots: [
      { name: '轮回奈何桥（千手地狱池）& 顺访清莱黑庙（Baan Dam）', detail: '19.8242°N, 99.7631°E · 可同日搭配清莱北郊堆满水牛角与鳄鱼皮的暗黑博物馆「黑庙」' }
    ],
    photos: [
      { wiki: ['en', 'Wat_Rong_Khun'], backupQuery: 'Wat Rong Khun White Temple hands bridge', caption: '泰国清莱白庙——跨越千百地狱枯手的轮回之桥与纯白镜片圣殿' }
    ]
  },
  {
    id: 'wish-sala-keoku',
    lineId: 'line-esoteric', lineOrder: 2,
    name: '廊开 · 萨拉鬼窟佛雕塑公园（Sala Keoku）',
    country: '泰国', region: '泰国东北廊开府（湄公河畔老挝边境）',
    lat: 17.8865, lng: 102.7824, zoom: 14,
    source: 'user', category: 'mega',
    aesthetics: ['巨大·无机质', '消逝的文明·诸神遗迹'],
    work: '200余尊粗砺素混凝土浇筑的30米七头蛇神与邪典轮回巨像林（《地狱乐》神仙乡既视感）',
    bgmScore: null,
    summary: '神秘主义萨满僧侣率信徒徒手浇筑的超现实水泥神魔林，25米七头娜迦蛇神遮天蔽日',
    intro: '坐落于泰老边境湄公河畔廊开府的「萨拉鬼窟 / 萨拉凯奥库雕塑公园（Sala Keoku）」，由老挝裔神秘主义萨满修行者 Bunleua Sulilat 于 1978 年带领并非专业工匠的信徒徒手用素混凝土浇筑而成（其本人圆寂后不腐肉身至今仍供奉在园内三层莲花塔顶！）。\n草坪上突兀耸立着超过 200 尊斑驳发黑的巨型水泥神魔雕像：高达近 30 米、鳞片狰狞张开血盆大口的「七头娜迦蛇王护佛巨像」、多面多臂持剑神明、钻入巨口才能进入的混凝土圆形「生死轮回迷城」——粗野主义水泥质感与东南亚原始神魔崇拜碰撞出宛如《地狱乐》神仙乡与《GANTZ》百鬼夜行的极致邪典震慑力！',
    subSpots: [
      { name: '七头娜迦巨佛像 & 生命之轮圆城（Wheel of Life）', detail: '17.8865°N, 102.7824°E · 隔湄公河友谊大桥对岸老挝万象还有同作者早期建的「香昆佛像公园」' }
    ],
    photos: [
      { wiki: ['en', 'Sala_Keoku'], backupQuery: 'Sala Keoku Nong Khai Naga statue', caption: '泰国廊开萨拉鬼窟雕塑公园——高达近30米的素混凝土七头娜迦蛇神巨像' }
    ]
  },
  {
    id: 'wish-bali-gwk',
    lineId: 'line-esoteric', lineOrder: 3,
    name: '巴厘岛 · 神鹰广场（Garuda Wisnu Kencana）',
    country: '印度尼西亚', region: '巴厘岛南部 · 乌鲁瓦图石灰岩高地',
    lat: -8.8104, lng: 115.1676, zoom: 14,
    source: 'user', category: 'mega',
    aesthetics: ['巨大·无机质', '消逝的文明·诸神遗迹'],
    work: '劈山切出的垂直巨石峡谷 + 121米高毗湿奴骑乘迦楼罗青铜巨像',
    bgmScore: null,
    summary: '比自由女神像还高30米的121米青铜神明巨像，矗立在人工垂直切开的石灰岩巨石峡谷尽头',
    intro: '历时 28 年耗资巨万终于在 2018 年合拢落成的巴厘岛「神鹰广场（GWK Cultural Park）」，主雕像总高达 **121 米**、翼展宽达 64 米（全世界最高纪念雕像前四，比美国自由女神像连底座还高出近 30 米！），以数千块铜与黄铜锻片拼铸出印度教主神毗湿奴骑乘神鸟迦楼罗（Garuda）振翅遮天的磅礴姿态。\n同样震撼的是通往巨像的「莲花池巨石走廊（Lotus Pond）」——直接将整座石灰岩山体像切豆腐一样垂直劈开，两侧高耸笔直、留有机械切割纹理的灰黑巨型石墙夹出一条百米大道，尽头便是直插云端的青铜神魔巨像！',
    subSpots: [
      { name: 'Lotus Pond 垂直劈山巨石走廊 & 121米毗湿奴神鹰主像', detail: '8.8104°S, 115.1676°E · 黄昏逆光或阴天站在石灰岩切谷中段仰拍巨像最具神代压迫感' }
    ],
    photos: [
      { wiki: ['en', 'Garuda_Wisnu_Kencana_statue'], backupQuery: 'Garuda Wisnu Kencana Bali statue', caption: '印尼巴厘岛神鹰广场——121米高毗湿奴骑乘迦楼罗铜像与劈山石灰岩巨壁' }
    ]
  },

  // ==================== Line 04 ·【圆墙、酒馆与阿瓦隆】(5) ====================
  {
    id: 'wish-avalon-fate',
    lineId: 'line-fantasy', lineOrder: 1,
    name: '康沃尔 · 延塔哲城堡（Tintagel）& 格拉斯顿伯里',
    country: '英国', region: '英格兰西南 · 康沃尔郡海角 & 萨默塞特郡',
    lat: 50.6635, lng: -4.7594, zoom: 9,
    source: 'user', category: 'acg',
    aesthetics: ['圣地巡礼', '剑与魔法', '西幻·巨人·矮人·精灵'],
    work: '《Fate/stay night》·《FGO 卡美洛》与亚瑟王传说',
    bgmScore: 8,
    summary: '狂风大西洋断崖上的亚瑟王诞生城「延塔哲城堡」，与阿尔托莉雅长眠的阿瓦隆圣杯山',
    intro: '英格兰西南端大西洋怒涛拍击的黑色板岩悬崖上，「延塔哲城堡（Tintagel Castle，又译廷塔杰尔城堡）」凭一道凌空钢桥横跨百米海渊连接陆地与孤岛残垣——中世纪《不列颠诸王史》记载亚瑟王在此诞生，悬崖下方退潮才能走入的海蚀巨洞名为「梅林洞」，海角顶端更伫立着仗剑迎风的镂空青铜骑士像 Gallos。\n向东北深入萨默塞特平原，晨雾缭绕的孤峰「格拉斯顿伯里圣杯山（Glastonbury Tor）」与修道院“亚瑟王墓址”，正是传说中妖精乡阿瓦隆（Avalon）的化身——也是《Fate》系列中 Saber 阿尔托莉雅放下圣剑、与士郎重逢的原野原型（完美契合你的 UK 冬季计划！）。',
    subSpots: [
      { name: '康沃尔 · 延塔哲城堡（Tintagel Castle）& 梅林海蚀洞', detail: '50.6635°N, 4.7594°W · 大西洋断崖残垣、凌空钢桥与亚瑟王青铜像' },
      { name: '格拉斯顿伯里 · 圣杯山（Glastonbury Tor）& 修道院', detail: '51.1444°N, 2.6986°W · 阿瓦隆迷雾孤塔与亚瑟王之墓铭牌' }
    ],
    photos: [
      { src: 'photos/wishlist/avalon-1.jpg', caption: '康沃尔悬崖海角上的延塔哲城堡（Tintagel Castle）——亚瑟王传说诞生地' },
      { src: 'photos/wishlist/avalon-2.jpg', caption: '萨默塞特平原晨雾中的格拉斯顿伯里圣杯山（阿瓦隆原型）' }
    ]
  },
  {
    id: 'wish-nordlingen',
    lineId: 'line-fantasy', lineOrder: 2,
    name: '巴伐利亚 · 诺德林根（Nördlingen）',
    country: '德国', region: '巴伐利亚州 · 里斯陨石坑盆地中央',
    lat: 48.8511, lng: 10.4883, zoom: 13,
    source: 'user', category: 'acg',
    aesthetics: ['圣地巡礼', '西幻·巨人·矮人·精灵', '剑与魔法'],
    work: '《进击的巨人》全系列',
    bgmScore: 9,
    summary: '建在 1500 万年前巨大陨石坑中央的完整正圆形城墙小镇，帕拉迪岛墙内世界原型',
    intro: '德国巴伐利亚浪漫之路上的诺德林根，奇迹般坐落在直径 25 公里的远古陨石撞击坑正中央——全德国唯一完整保留着 2.7 公里全封闭正圆形城墙与 5 座城门塔楼的中世纪古城，正是《进击的巨人》（S3 Part.2 与最终季你均打出 9/10）希干希纳区与三道城墙的直接原型。\n登上内含数百万颗陨石微钻碎晶的 90 米高钟楼「Daniel」，360° 俯瞰橙红瓦顶被圆形城墙紧紧环抱，仿佛城墙外下一秒就会升起超大型巨人的滚滚蒸汽。',
    subSpots: [
      { name: '圣乔治教堂丹尼尔钟楼 & 2.7km 环形城墙步道', detail: '48.8511°N, 10.4883°E · 可沿有顶城墙木廊完整绕城走一圈' }
    ],
    photos: [
      { src: 'photos/wishlist/nordlingen.jpg', caption: '德国诺德林根——陨石坑中保存完好的正圆形城墙与红顶中世纪街区' }
    ]
  },
  {
    id: 'wish-rothenburg-fantasy',
    lineId: 'line-fantasy', lineOrder: 3,
    name: '陶伯河畔罗腾堡（Rothenburg）',
    country: '德国', region: '巴伐利亚州 · 距诺德林根向北仅 70km',
    lat: 49.3770, lng: 10.1789, zoom: 13,
    source: 'bgm', category: 'fantasy',
    aesthetics: ['西幻·巨人·矮人·精灵', '剑与魔法', '圣地巡礼'],
    work: '《无职转生》(10分) ·《葬送的芙莉莲》(8分) ·《钢炼FA》(9分)',
    bgmScore: 10,
    summary: '鹅卵石分岔街角与明黄木筋小屋，一切日式西幻冒险者公会城镇的共同现实母本',
    intro: '完整定格在 15 世纪风貌的陶伯河畔罗腾堡，从鹅卵石分岔街角（Plönlein）歪斜的明黄半木结构小屋、高耸钟楼城门到铁艺招牌酒馆，几乎是你的 10/10 满分番《无职转生》阿苏拉城镇、《葬送的芙莉莲》北方城邦与《钢之炼金术师 FA》共同的现实蓝本，与南面 70 公里的诺德林根正好在浪漫之路上无缝串联。',
    subSpots: [
      { name: '普伦莱茵小广场（Plönlein）& 铁匠屋城墙', detail: '49.3746°N, 10.1806°E · 清晨与傍晚蓝调路灯亮起时完全置身异世界王都' }
    ],
    photos: [
      { src: 'photos/wishlist/rothenburg.jpg', caption: '德国陶伯河畔罗腾堡——《无职转生》《芙莉莲》式西幻城镇现实蓝本' }
    ]
  },
  {
    id: 'wish-prague-tavern',
    lineId: 'line-fantasy', lineOrder: 4,
    name: '布拉格 · 布拉班特国王中世纪酒馆',
    country: '捷克', region: '布拉格城堡山脚小城区（Malá Strana）',
    lat: 50.0886, lng: 14.4008, zoom: 15,
    source: 'user', category: 'fantasy',
    aesthetics: ['西幻·巨人·矮人·精灵', '剑与魔法'],
    work: '1375年开业至今的烛火骷髅地窖酒馆 · 真实世界 RPG 冒险者公会',
    bgmScore: null,
    summary: '营业逾 650 年的哥特石拱地窖酒馆，滴蜡烛台、头骨装饰、大扎黑啤与剑士火舞演出',
    intro: '始建于 **1375 年**（神圣罗马皇帝查理四世时代！）的「布拉班特国王酒馆（Krčma U Krále Brabantského）」，是布拉格现存最古老且从未中断营业的传奇酒馆，历史上炼金术士、刽子手、鲁道夫二世皇帝甚至莫扎特都曾在此痛饮。\n推开厚重橡木门走下阴暗的石头拱顶地窖，全馆不通现代强电照明，唯有满桌流淌蜡泪的粗蜡烛与火把摇曳，石壁与横梁上挂满骷髅头骨与盾剑，地上铺着稻草；每周二至周六夜晚还有中世纪重剑格斗、吟游诗人古乐器与吞火表演，端起陶罐大口喝捷克黑啤啃烤猪肘，百分百还原西幻勇者小队任务结束后的庆功夜！',
    subSpots: [
      { name: 'U Krále Brabantského（Thunovská 198/15）', detail: '50.0886°N, 14.4008°E · 布拉格城堡台阶下，中世纪晚宴秀（19:00场）务必提前官网预约地窖座位' }
    ],
    photos: [
      { wiki: ['cs', 'U_Krále_Brabantského'], backupQuery: 'medieval tavern candlelight skulls Prague beer', caption: '捷克布拉格1375年「布拉班特国王酒馆」——烛火与石拱地窖中的真实西幻冒险者酒馆' }
    ]
  },
  {
    id: 'wish-milford-middleearth',
    lineId: 'line-fantasy', lineOrder: 5,
    name: '南阿尔卑斯 · 米尔福德峡湾（中土世界）',
    country: '新西兰', region: '南岛西南部 · 峡湾国家公园（Fiordland）',
    lat: -44.6414, lng: 167.8974, zoom: 10,
    source: 'bgm', category: 'fantasy',
    aesthetics: ['西幻·巨人·矮人·精灵', '剑与魔法', '巨大·无机质'],
    work: '《指环王》中土世界实景 · 巨人、矮人山脉与精灵峡谷的蛮荒大地',
    bgmScore: null,
    summary: '海拔 1692 米冰川尖峰直插墨黑深海，雨后成百上千条瀑布从千米峭壁凌空坠落',
    intro: '如果欧洲古镇代表了西幻的人类城邦，新西兰南岛的「米尔福德峡湾（Milford Sound）」便是矮人山脉、迷雾森林与远古巨龙栖息的中土蛮荒大地本身。海拔 1692 米的麦特尔峰（Mitre Peak）直接从墨黑海面垂直拔起，暴雨初歇时云雾缠绕花岗岩千仞绝壁，百米飞瀑倾泻入海。',
    subSpots: [
      { name: '米尔福德峡湾游船 & 荷马隧道冰川谷', detail: '44.6414°S, 167.8974°E · 雨天或雨后初晴临时瀑布群最为壮阔' }
    ],
    photos: [
      { src: 'photos/wishlist/milford.jpg', caption: '新西兰南岛米尔福德峡湾——千米垂直冰川峭壁，中土世界西幻大地实景' }
    ]
  },

  // ==================== Line 05 ·【亿万年地质的沉默】(10) ====================
  {
    id: 'wish-giants-causeway',
    lineId: 'line-monolith', lineOrder: 0,
    name: '安特里姆海岸 · 巨人堤道（Giant\'s Causeway）',
    country: '英国', region: '北爱尔兰北海岸（与苏格兰芬加尔洞穴隔海同源！）',
    lat: 55.2408, lng: -6.5116, zoom: 13,
    source: 'user', category: 'mega',
    aesthetics: ['巨大·无机质', '西幻·巨人·矮人·精灵'],
    work: '4万根正六边形玄武岩柱阶梯直伸怒海 · 凯尔特巨人跨海筑桥传说本尊',
    bgmScore: null,
    summary: '约 40,000 根严丝合缝咬合的六棱玄武岩柱从悬崖脚下一路铺进北大西洋白浪之中',
    intro: '北爱尔兰最北端大西洋怒涛岸边的「巨人堤道（Giant\'s Causeway）」，由约 **4 万根**古新世火山熔岩匀速冷却收缩结晶出的多边形（绝大多数为精准正六边形！）玄武岩石柱紧密拼嵌成高低起伏的几何石阶，一路没入海底。\n地质与神话双重浪漫：凯尔特传说中这是爱尔兰巨人芬恩·麦克库尔（Finn McCool）为跨海迎战苏格兰巨人而铺筑的石桥——而在真实地质学上，它与隔海峡相望的下一站「苏格兰斯塔法岛·芬加尔洞穴」确系 6000 万年前同一股熔岩流塑造的孪生两端！',
    subSpots: [
      { name: 'Grand Causeway 主石阶 & 巨人管风琴岩壁（The Organ）', detail: '55.2408°N, 6.5116°W · 日出或日落低角度光线勾勒六边形石柱积水反光最震撼' }
    ],
    photos: [
      { wiki: ['en', "Giant's_Causeway"], backupQuery: 'Giants Causeway Northern Ireland hexagonal basalt', caption: '北爱尔兰巨人堤道——四万根正六边形玄武岩柱铺入北大西洋海浪' }
    ]
  },
  {
    id: 'wish-fingals-cave',
    lineId: 'line-monolith', lineOrder: 1,
    name: '内赫布里底 · 芬加尔洞穴（Fingal\'s Cave）',
    country: '英国', region: '苏格兰西海岸无人岛 · 斯塔法岛（Isle of Staffa）',
    lat: 56.4316, lng: -6.3414, zoom: 13,
    source: 'user', category: 'mega',
    aesthetics: ['巨大·无机质', '西幻·巨人·矮人·精灵'],
    work: '整座海岛由对称六棱玄武岩柱拼成的几何海蚀巨洞 · 门德尔松交响序曲诞生地',
    bgmScore: null,
    summary: '6000万年前古火山熔岩冷缩切割出刀削般整齐的六边形黑石柱群，海浪涌入巨洞轰鸣如管风琴',
    intro: '苏格兰西海岸荒凉无人岛「斯塔法岛（Staffa）」上的芬加尔洞穴，看起来根本不像自然界的产物，倒像远古泰坦巨人用精确几何模具浇筑出的黑石水下神殿：整座高 22 米、深 82 米的海蚀拱洞，从外壁、拱顶到深入海底的礁石基座，100% 由笔直对称的**六边形柱状节理玄武岩**紧密嵌合而成！\n大西洋墨绿海浪涌入六角石柱长廊撞击洞底，天然穹顶共鸣出低沉恢弘的轰鸣（盖尔语原名 Uamh-Binn 即“旋律之洞”，1829 年门德尔松乘船至此震撼写下名曲《芬加尔山洞序曲》）。',
    subSpots: [
      { name: '斯塔法岛玄武岩柱步道 & 洞口观浪台', detail: '56.4316°N, 6.3414°W · 从奥本（Oban）经马尔岛乘快艇登岛，仅风平浪静日可靠岸' }
    ],
    photos: [
      { wiki: ['en', "Fingal's_Cave"], backupQuery: 'Fingals Cave Staffa hexagonal basalt columns', caption: '苏格兰斯塔法岛芬加尔洞穴——纯天然六棱玄武岩柱构筑的几何海蚀巨洞' }
    ]
  },
  {
    id: 'wish-iceland-reynisfjara',
    lineId: 'line-monolith', lineOrder: 2,
    name: '维克镇 · 雷尼斯黑沙滩（Reynisfjara）',
    country: '冰岛', region: '冰岛南岸 · 维克（Vík í Mýrdal）',
    lat: 63.4042, lng: -19.0450, zoom: 12,
    source: 'user', category: 'mega',
    aesthetics: ['巨大·无机质'],
    work: '黑白灰三色统治的异星海岸 ·《死亡搁浅》现实镜像',
    bgmScore: null,
    summary: '火山玻璃碎屑铺就的纯黑海岸、阶梯状六棱玄武岩风琴峭壁与咆哮北大西洋的雪白疯狗浪',
    intro: '冰岛最南端维克镇旁的雷尼斯黑沙滩（Reynisfjara），是一片被彻底抽干了彩色饱和度的异星海岸：滚烫熔岩冲入冰冷海水炸裂磨碎成细腻漆黑的火山砂砾，北大西洋毫无遮挡的数米高纯白巨浪拍岸咆哮，岸边耸立着如管风琴阶梯般棱角分明的六边形玄武岩柱峭壁（Hálsanefshellir）与海中三座黑色海蚀岩柱（传说中来不及躲避日出而石化的巨魔）。阴天站在黑沙白浪之间，仿佛置身《死亡搁浅》的冥滩。',
    subSpots: [
      { name: '玄武岩风琴峭壁 & 迪霍拉里海岬拱门（Dyrhólaey）', detail: '63.4042°N, 19.0450°W · 切记远离水线警惕突袭巨浪（Sneaker Waves）' }
    ],
    photos: [
      { wiki: ['en', 'Reynisfjara'], backupQuery: 'Reynisfjara black sand beach Iceland basalt', caption: '冰岛维克雷尼斯黑沙滩——六棱玄武岩柱与北大西洋黑白巨浪' }
    ]
  },
  {
    id: 'wish-vatnajokull',
    lineId: 'line-monolith', lineOrder: 3,
    name: '瓦特纳冰川国家公园（蓝冰洞 & 钻石沙滩）',
    country: '冰岛', region: '冰岛东南部 · 瓦特纳冰原 & 杰古沙龙冰河湖',
    lat: 64.0484, lng: -16.1794, zoom: 9,
    source: 'user', category: 'mega',
    aesthetics: ['巨大·无机质'],
    work: '欧洲最大万年冰盖 · 幽蓝晶莹的冰川腹地洞穴（联动你的攀冰计划！）',
    bgmScore: null,
    summary: '深入挤尽气泡的千年高密度幽蓝冰川隧道，看透明浮冰搁浅在纯黑火山沙滩上如巨钻闪耀',
    intro: '覆盖冰岛国土 8% 的瓦特纳冰川（Vatnajökull）是极地之外全欧洲体积最大的冰盖，冰下甚至掩埋着数座活火山（名副其实的冰与火）！每年冬季（11月—3月），夏季冰川融水冲刷出的冰下暗河冻结定型，向导会带你穿戴冰爪走入千年高压挤尽空气后呈现出纯粹宝石深蓝色的天然「蓝冰洞（Crystal Ice Cave）」，头顶是宛如液态琉璃凝固般的波浪形幽蓝冰穹——还可以直接预约瓦特纳冰舌攀冰体验！\n冰川入海口的「杰古沙龙冰河湖」与旁边的「钻石冰沙滩」，更让无数晶莹剔透的碎冰块散落在纯黑沙滩上，对比绝美。',
    subSpots: [
      { name: '杰古沙龙冰河湖（Jökulsárlón）· 钻石黑沙滩 & 冬季蓝冰洞', detail: '64.0484°N, 16.1794°W · 蓝冰洞仅每年 11 月至次年 3 月低温稳固期开放' }
    ],
    photos: [
      { wiki: ['en', 'Vatnajökull'], backupQuery: 'Vatnajokull blue ice cave Jokulsarlon', caption: '冰岛瓦特纳冰川国家公园——万年冰盖腹地幽蓝剔透的天然蓝冰洞与冰河湖' }
    ]
  },
  {
    id: 'wish-faroe',
    lineId: 'line-monolith', lineOrder: 4,
    name: '北大西洋 · 法罗群岛（Faroe Islands）',
    country: '丹麦', region: '北大西洋 · 沃格岛 / 卡尔索伊岛',
    lat: 62.1077, lng: -7.4347, zoom: 9,
    source: 'user', category: 'mega',
    aesthetics: ['巨大·无机质', '西幻·巨人·矮人·精灵'],
    work: '孤悬怒海的18座火山玄武岩群岛 · 呼应《冰海战记》(8/10)',
    bgmScore: 8,
    summary: '直坠北大西洋的百米海崖穆拉瀑布与视觉悬空海面之上的奴仆之崖湖',
    intro: '孤悬于冰岛与苏格兰半途北大西洋上的法罗群岛，18 座岛屿皆为刀劈斧削般的火山玄武岩海崖，寸草不生乔木，唯有冷翠苔原、海雾与垂直劈入漆黑海面的数百米绝壁——完美呈现《冰海战记》（Bangumi 8/10）维京人眼里的世界边缘。加萨达鲁尔直落大洋的穆拉瀑布、悬海湖奴仆之崖（Trælanípa）与卡尔索伊刀锋灯塔每一处都极具压迫感。',
    subSpots: [
      { name: '加萨达鲁尔穆拉瀑布 & 奴仆之崖悬海湖', detail: '62.1077°N, 7.4347°W · 沃格岛机场驱车 15 分钟即达' }
    ],
    photos: [
      { src: 'photos/wishlist/faroe.jpg', caption: '丹麦法罗群岛——玄武岩绝壁直坠北大西洋的穆拉瀑布' }
    ]
  },
  {
    id: 'wish-greenland-ice',
    lineId: 'line-monolith', lineOrder: 5,
    name: '格陵兰岛 · 伊卢利萨特冰湾看冰山',
    country: '格陵兰', region: '北极圈内西海岸 · 迪斯科湾（Disko Bay）',
    lat: 69.2198, lng: -51.0986, zoom: 9,
    source: 'user', category: 'mega',
    aesthetics: ['巨大·无机质'],
    work: '北极百米级纯白冰山巨墙 · Ilulissat Icefjord',
    bgmScore: null,
    summary: '每天数千万吨万年冰盖轰鸣崩裂入海，乘红帆船穿行在摩天大楼尺度的漂浮冰山峡谷间',
    intro: '北极圈以北 250 公里的伊卢利萨特冰湾连接着北半球产量最惊人的雅各布港冰川，水上高度逾百米、体量堪比城市街区的巨型纯白与幽蓝冰山搁浅在迪斯科湾出口。盛夏午夜阳光将百米冰墙染成玫瑰金，乘一叶红色帆船驶入冰山脚下，是地球自然无机质巨物的终极尺度。',
    subSpots: [
      { name: 'Sermermiut 冰湾步道 & 迪斯科湾午夜阳光红帆船', detail: '69.2198°N, 51.0986°W · 6—8 月午夜阳光季或 9 月初极光季' }
    ],
    photos: [
      { src: 'photos/wishlist/greenland-ice.jpg', caption: '格陵兰岛伊卢利萨特冰湾——迪斯科湾海面上漂浮的摩天大楼级极地冰山' }
    ]
  },
  {
    id: 'wish-sayram-ice',
    lineId: 'line-monolith', lineOrder: 6,
    name: '新疆博州 · 赛里木湖冬季「冰推」与蓝冰',
    country: '中国', region: '新疆博尔塔拉蒙古自治州（天山高山湖泊）',
    lat: 44.5986, lng: 81.1775, zoom: 10,
    source: 'user', category: 'mega',
    aesthetics: ['巨大·无机质'],
    work: '大西洋最后一滴眼泪的冬春奇观 · 万顷蓝冰碎裂推岸声若风铃雷鸣',
    bgmScore: null,
    summary: '冬春冰封与初融交替之际，狂风将通透如蓝宝石的薄冰层层推涌上岸，堆起绵延数公里的琉璃碎冰墙',
    intro: '海拔 2071 米的天山明珠赛里木湖，在每年 1—3 月严冬与 3 月底—4 月初开湖期会轮番上演令人屏息的冰晶奇景：严冬冰层厚达一米，湖底气泡冻结成剔透冰泡；而每逢昼夜温差剧烈或狂风吹袭，整片湖面晶莹湛蓝的冰板相互挤压断裂，伴随着清脆如万千玻璃风铃又低沉似闷雷的轰鸣，被巨浪源源不断推涌上岸（即「赛里木湖冰推」），在雪山脚下堆叠出数米高、棱角锋利闪耀着幽蓝寒光的碎钻冰山长堤！',
    subSpots: [
      { name: '点将台 / 克勒涌珠 / S弯公路岸线冰推带', detail: '44.5986°N, 81.1775°E · 1—2月看蓝冰气泡，3月下旬至4月中旬为壮观半融冰推季' }
    ],
    photos: [
      { wiki: ['en', 'Sayram_Lake'], backupQuery: 'Sayram Lake blue ice Xinjiang winter', caption: '中国新疆赛里木湖——雪山环抱下的湛蓝高山冰湖与冰推奇观' }
    ]
  },
  {
    id: 'wish-uyuni',
    lineId: 'line-monolith', lineOrder: 7,
    name: '安第斯高原 · 乌尤尼盐沼（天空之镜）',
    country: '玻利维亚', region: '波托西省 · 海拔 3656 米高原盐原',
    lat: -20.1338, lng: -67.4891, zoom: 9,
    source: 'user', category: 'mega',
    aesthetics: ['巨大·无机质'],
    work: '10,582平方公里天地消融的无边镜面 · 无数动画「心象世界」终极原型',
    bgmScore: null,
    summary: '雨季薄水覆盖一万平方公里纯白盐壳，让人直接行走在云端与银河的对称倒影中央',
    intro: '坐落于安第斯山脉海拔 3656 米高原上的乌尤尼盐沼（Salar de Uyuni），面积逾一万平方公里，是世界最大的盐层荒原：旱季（5—10月）大地龟裂成无穷无尽的纯白多边形几何盐晶网格；而每年雨季（1—3月）盐壳上积起薄薄一层无波积水时，整片大地瞬间化作地球上最巨大的平面镜——地平线彻底消失，白云、晚霞与南半球璀璨银河在脚下 360° 无缝延伸（《东京喰种》OP1 unravel 与无数动漫终极心象空间正源于此！）。',
    subSpots: [
      { name: '乌尤尼中心镜面积水区 & 火车坟场（Cementerio de Trenes）', detail: '20.1338°S, 67.4891°W · 1月下旬至3月中旬雨季无风日镜面效果最完美' }
    ],
    photos: [
      { wiki: ['en', 'Salar_de_Uyuni'], backupQuery: 'Salar de Uyuni mirror reflection Bolivia', caption: '玻利维亚乌尤尼盐沼——一万平方公里天地边界彻底消失的「天空之镜」' }
    ]
  },
  {
    id: 'wish-uluru',
    lineId: 'line-monolith', lineOrder: 8,
    name: '红土中心 · 乌鲁鲁巨石（Uluru）',
    country: '澳大利亚', region: '北领地 · 乌鲁鲁-卡塔丘塔国家公园',
    lat: -25.3444, lng: 131.0369, zoom: 11,
    source: 'user', category: 'mega',
    aesthetics: ['巨大·无机质', '消逝的文明·诸神遗迹'],
    work: '世界中心赤红独石 · Uluru / Ayers Rock',
    bgmScore: null,
    summary: '一望无际平坦荒漠正中央骤然垂直拔起 348 米、周长 9.4 公里的世界最大单体砂岩巨构',
    intro: '在澳洲内陆百里无山参照的平坦红土荒原正中央，乌鲁鲁毫无征兆地垂直隆起 348 米（比埃菲尔铁塔更高），历经 5 亿年造山风化而独立，日落时分富含铁质的砂岩由赭红骤变为燃烧般的烈焰紫红，纯粹而沉默的原始大地巨物。',
    subSpots: [
      { name: '乌鲁鲁 10.6km 环石步道 & 日落观景台', detail: '25.3444°S, 131.0369°E · 顺访西侧 40km 的卡塔丘塔巨石阵' }
    ],
    photos: [
      { src: 'photos/wishlist/uluru.jpg', caption: '澳大利亚乌鲁鲁巨石——荒原中心燃烧般的348米单体砂岩巨构' }
    ]
  },
  {
    id: 'wish-wharariki',
    lineId: 'line-monolith', lineOrder: 9,
    name: '南岛极北 · 华拉里基海滩（Wharariki Beach）',
    country: '新西兰', region: '南岛最北端 · 黄金湾（Golden Bay）',
    lat: -40.5036, lng: 172.6761, zoom: 12,
    source: 'user', category: 'mega',
    aesthetics: ['巨大·无机质', '西幻·巨人·矮人·精灵'],
    work: '退潮黑镜沙滩与巨型海蚀双拱门 · Archway Islands',
    bgmScore: null,
    summary: '穿过流沙丘抵达南岛最北端狂风海岸，低潮镜面浅滩完美对称倒映出两座巨型海蚀双拱岩',
    intro: '全球最经典的锁屏壁纸实景地！塔斯曼海迎风面的华拉里基海滩尽头，两座如巨人劈开的巨型海蚀拱门岩岛耸立怒海之中，退潮时湿润深色沙滩化作镜面，倒映出黑色巨岩与漫天霞光。',
    subSpots: [
      { name: 'Archway Islands 低潮镜面区', detail: '40.5036°S, 172.6761°E · 务必核对低潮时刻表，低潮前后1.5小时最佳' }
    ],
    photos: [
      { src: 'photos/wishlist/wharariki.jpg', caption: '新西兰华拉里基海滩与标志性海蚀双拱巨岩' }
    ]
  },

  // ==================== Line 06 ·【混凝土乌托邦与机械内脏】(8) ====================
  {
    id: 'wish-kalyazin-rt64',
    lineId: 'line-brutalist', lineOrder: 1,
    name: '卡利亚津 · RT-64 巨型射电望远镜',
    country: '俄罗斯', region: '特维尔州 · 卡利亚津（莫斯科以北约 180km）',
    lat: 57.2231, lng: 37.9003, zoom: 13,
    source: 'user', category: 'mega',
    aesthetics: ['巨大·无机质'],
    work: '伏尔加河针叶林迷雾上方骤然升起的64米直径苏联深空巨碗（科幻BDO神图本尊！）',
    bgmScore: null,
    summary: '穿过荒凉木屋村落与松林尽头，总重3800吨、直径64米的冷战钢铁抛物面天线如外星母舰耸立天际',
    intro: '如果你见过那张在阴沉迷雾森林与木屋尽头、一口遮天蔽日的灰白钢铁大锅仰望深空的封神级科幻摄影——它的真身就是位于俄罗斯特维尔州卡利亚津郊外的「RT-64 射电天文望远镜（TNA-1500）」！\n始建于苏联晚期，反射面直径整整 **64 米**（面积超 3200 平方米）、总重逾 3800 吨、总高近 80 米，至今仍在执行脉冲星观测与深空探测器（如火星任务）通信。站在周边低矮破败的俄罗斯乡村木栅栏小路回望，庞大的旋转钢铁桁架与巨碗几乎填满半个天空，把《三体》红岸基地与苏联宇宙主义的冷峻巨物浪漫推到了极致（顺带卡利亚津水库中央还有著名的「淹没在水中的钟楼」！）',
    subSpots: [
      { name: '卡利亚津天文台村道远摄机位 & 水中钟楼', detail: '57.2231°N, 37.9003°E · 外围乡村公路用长焦镜头压缩空间感最为震撼' }
    ],
    photos: [
      { wiki: ['en', 'RT-64'], backupQuery: 'Kalyazin RT-64 radio telescope Russia', caption: '俄罗斯卡利亚津 RT-64 射电望远镜——针叶林上方耸立的64米直径深空巨碗' }
    ]
  },
  {
    id: 'wish-buzludzha',
    lineId: 'line-brutalist', lineOrder: 2,
    name: '巴尔干山巅 · 布兹卢贾飞碟纪念碑',
    country: '保加利亚', region: '中巴尔干山脉 · 希普卡山口旁',
    lat: 42.7358, lng: 25.3938, zoom: 12,
    source: 'bgm', category: 'mega',
    aesthetics: ['巨大·无机质', '2027顺路可去'],
    work: '苏联野兽派（Brutalism）混凝土飞碟巅峰 · 2027巴尔干环线正顺路',
    bgmScore: null,
    summary: '海拔 1441 米风雪山脊上废弃的直径 60 米粗砺混凝土飞碟与 70 米双子方尖塔',
    intro: '落成于 1981 年的布兹卢贾纪念碑（Buzludzha Monument），将一个直径逾 60 米的灰黑钢筋混凝土飞碟圆盘与 70 米高巨塔直接拍在荒芜狂风的巴尔干千山之巅，宛如外星母舰坠落地球的遗骸——而且恰好位于你 2027 环线保加利亚索非亚前往布加勒斯特的必经走廊上！',
    subSpots: [
      { name: 'Buzludzha 山脊观景台', detail: '42.7358°N, 25.3938°E · 卡赞勒克玫瑰谷北侧山顶自驾直达' }
    ],
    photos: [
      { src: 'photos/wishlist/buzludzha.jpg', caption: '保加利亚布兹卢贾飞碟纪念碑——风雪山巅的野兽派混凝土飞碟' }
    ]
  },
  {
    id: 'wish-naples-portuale',
    lineId: 'line-brutalist', lineOrder: 3,
    name: '那不勒斯 · 港口之家（Casa del Portuale）',
    country: '意大利', region: '那不勒斯港东侧码头区（Calata Marinella）',
    lat: 40.8427, lng: 14.2747, zoom: 15,
    source: 'user', category: 'mega',
    aesthetics: ['巨大·无机质', '2027顺路可去'],
    work: 'Aldo Loris Rossi 1980 意大利粗野主义神作 · 搁浅海港的混凝土外星战舰',
    bgmScore: null,
    summary: '螺旋车道、圆柱电梯井与层层不规则悬挑的混凝土舱体咬合矗立，宛如《EVA》第3新东京市武装大楼',
    intro: '由激进建筑鬼才阿尔多·洛里斯·罗西（Aldo Loris Rossi）于 1968—1980 年间为那不勒斯码头工人建造的「港口之家（Casa del Portuale）」，是全欧洲建筑迷心中的粗野主义（Brutalism）邪典图腾！\n整栋建筑完全摒弃了传统方盒子结构：粗壮的裸露素混凝土圆柱核心筒、外挂盘旋坡道与错落悬挑而出的异形几何悬臂楼板相互穿插咬合，如今呈半荒废苍凉状态伫立在集装箱与海港起重机之间，远看像极了一艘搁浅在工业海岸的赛博宇宙战舰或《EVA》使徒迎击要塞！更妙的是它距离你 2027 意大利线（罗马→那不勒斯）近在咫尺。',
    subSpots: [
      { name: 'Via Reggia di Portici / 码头外围仰拍位', detail: '40.8427°N, 14.2747°E · 位于那不勒斯港区，注意遵守港区通行边界在外围长焦拍摄' }
    ],
    photos: [
      { wiki: ['it', 'Casa_del_Portuale'], backupQuery: 'Casa del Portuale Napoli brutalist architecture', caption: '意大利那不勒斯港口之家（Casa del Portuale）——如搁浅战舰般的粗野主义悬挑混凝土巨构' }
    ]
  },
  {
    id: 'wish-lloyds-london',
    lineId: 'line-brutalist', lineOrder: 4,
    name: '伦敦金融城 · 劳埃德大厦（Lloyd\'s Building）',
    country: '英国', region: '伦敦金融城（1 Lime Street, City of London）',
    lat: 51.5131, lng: -0.0824, zoom: 16,
    source: 'user', category: 'mega',
    aesthetics: ['巨大·无机质'],
    work: '理查德·罗杰斯「肠子外翻主义（Bowellism）」高技派巅峰 · 赛博朋克机械心脏',
    bgmScore: null,
    summary: '将所有不锈钢通风巨管、12座全透明外挂电梯、水电管线与蓝色工程塔吊全部翻到建筑外表面！',
    intro: '由普利兹克奖得主理查德·罗杰斯设计、1986 年落成的伦敦劳埃德保险社大厦，是高技派建筑（High-Tech Architecture）最疯狂的杰作：为了给内部留出完整通透的 60 米高玻璃拱顶交易大厅，设计师把通常藏在墙体内部的“内脏”——粗大的抛光不锈钢排风管道、螺旋逃生梯、卫生间舱体、12 部英国最早的室外全透明观光电梯以及屋顶永久保留的亮蓝色清洁起重机——100% 翻出挂在混凝土主结构外侧！\n金属寒光闪烁的密集管道丛林充满《阿基拉》与《攻壳机动队》式的精密工业机械美感（联动你的 UK 冬季行即可顺访！）。',
    subSpots: [
      { name: 'Leadenhall Market 出口仰视机械管道立面', detail: '51.5131°N, 0.0824°W · 夜间蓝紫灯光投射在不锈钢巨管上赛博感爆棚' }
    ],
    photos: [
      { wiki: ['en', "Lloyd's_building"], backupQuery: 'Lloyds building London pipes architecture', caption: '英国伦敦劳埃德大厦——管道、电梯与起重机全部外翻的高技派钢铁机械巨构' }
    ]
  },
  {
    id: 'wish-33-thomas',
    lineId: 'line-brutalist', lineOrder: 5,
    name: '纽约曼哈顿 · 托马斯街 33 号（无窗大厦）',
    country: '美国', region: '纽约下曼哈顿翠贝卡（33 Thomas Street）',
    lat: 40.7165, lng: -74.0059, zoom: 16,
    source: 'user', category: 'mega',
    aesthetics: ['巨大·无机质'],
    work: '170米高全楼无一扇窗户的防核爆混凝土巨碑 ·《Control 控制》太古屋 &《黑客军团》原型',
    bgmScore: null,
    summary: '繁华曼哈顿街区中拔地而起 170 米、四面密不透风无任何窗户的瑞典花岗岩预制混凝土暗黑高塔',
    intro: '在下曼哈顿玻璃幕墙与红砖老楼簇拥的街头，托马斯街 33 号（原 AT&T 长途电话交换大楼，1974 年建成）像一块从天而降的《2001太空漫游》巨型黑石碑：整栋楼高达 **170 米**（相当于 55 层普通住宅高度），从底到顶竟然**没有一扇窗户**，唯有垂直条纹花岗岩贴面的混凝土盲墙与顶部巨大的黑色方形通风黑洞！\n它最初按核战爆发后可自给自足运转两周的防辐射堡垒标准建造（曾被调查报道指认为 NSA 监听节点 Titanpointe），更是新怪谈神作游戏《Control（控制）》中超自然机构联邦控制局总部「太古屋（The Oldest House）」的直接现实原型！',
    subSpots: [
      { name: 'Church St & Thomas St 街角对称仰拍机位', detail: '40.7165°N, 74.0059°W · 阴雨天或入夜街灯下仰望无窗巨墙压迫感窒息' }
    ],
    photos: [
      { wiki: ['en', '33_Thomas_Street'], backupQuery: '33 Thomas Street windowless building New York', caption: '纽约曼哈顿托马斯街33号——170米高全楼无一扇窗户的混凝土巨碑（《Control》太古屋原型）' }
    ]
  },
  {
    id: 'wish-marriott-marquis',
    lineId: 'line-brutalist', lineOrder: 6,
    name: '亚特兰大 · 万豪侯爵酒店中庭',
    country: '美国', region: '佐治亚州亚特兰大市中心（265 Peachtree Center Ave）',
    lat: 33.7615, lng: -84.3855, zoom: 15,
    source: 'user', category: 'mega',
    aesthetics: ['巨大·无机质'],
    work: '50层巨兽胸腔肋骨般的流线混凝土中庭深渊 ·《洛基》TVA时间变异管理局 &《饥饿游戏》取景地',
    bgmScore: null,
    summary: '抬头仰望高达 143 米的扭曲流线混凝土楼层走廊层层收束直通天窗，宛如置身外星利维坦巨兽骨架内部',
    intro: '建筑大师约翰·波特曼（John Portman）于 1985 年完成的亚特兰大万豪侯爵酒店（Atlanta Marriott Marquis），拥有全地球最超现实的室内巨构空间：走进大堂仰起头，整整 **50 层（高 143 米）** 的弧形流线混凝土内廊如远古巨鲸胸腔肋骨般一圈圈向上盘旋收束，12 部发光胶囊高速电梯沿着巨柱脊梁贯穿上下！\n正因这种无法用常理解释的复古未来主义无机质尺度，漫威剧集《洛基（Loki）》直接将其拍成了掌控多元宇宙时间线的「TVA 时间变异管理局」，《饥饿游戏》也将其选为国会区贡品中心实景地。',
    subSpots: [
      { name: '酒店大堂中央仰望天顶 & 第10/30层俯视深渊机位', detail: '33.7615°N, 84.3855°W · 住客可乘透明胶囊电梯体验直坠50层肋骨深渊的眩晕感' }
    ],
    photos: [
      { wiki: ['en', 'Atlanta_Marriott_Marquis'], backupQuery: 'Atlanta Marriott Marquis atrium interior', caption: '美国亚特兰大万豪侯爵酒店——50层巨兽肋骨般的流线混凝土中庭深渊' }
    ]
  },
  {
    id: 'wish-bigsight-madoka',
    lineId: 'line-brutalist', lineOrder: 7,
    name: '东京台场 · 有明国际展示场 Big Sight',
    country: '日本', region: '东京都江东区有明 · 临海副都心',
    lat: 35.6298, lng: 139.7942, zoom: 14,
    source: 'bgm', category: 'mega',
    aesthetics: ['巨大·无机质', '圣地巡礼'],
    work: '《魔法少女小圆》(9/10) 见泷原市巨构 & Comiket 圣殿',
    bgmScore: 9,
    summary: '四座 58 米高悬空倒置金字塔钢铁巨构，新房昭之镜头下超现实冷峻都市的缩影',
    intro: '《魔法少女小圆》（Bangumi 9/10）标志性的空旷几何未来都市「见泷原市」核心取景自东京临海副都心，尤其是四座倒金字塔悬空矗立海湾之上的「东京国际展示场（Tokyo Big Sight）」——同时也是《路人女主》伦也与英梨梨决战的全球最大同人展 Comiket 圣殿！',
    subSpots: [
      { name: 'Big Sight 会议栋正门广场', detail: '35.6298°N, 139.7942°E · 百合海鸥号东京国际展示场站直达' }
    ],
    photos: [
      { src: 'photos/wishlist/bigsight-madoka.jpg', caption: '东京有明国际展示场（Big Sight）——四座悬空倒金字塔钢铁巨构' }
    ]
  },
  {
    id: 'wish-kanazawa-u',
    lineId: 'line-brutalist', lineOrder: 8,
    name: '金泽大学角间校区跨谷连廊',
    country: '日本', region: '石川县金泽市角间町',
    lat: 36.5458, lng: 136.7088, zoom: 14,
    source: 'user', category: 'acg',
    aesthetics: ['巨大·无机质', '圣地巡礼'],
    work: '《Angel Beats! 天使的心跳！》',
    bgmScore: 8,
    summary: '森林溪谷间横跨巨型混凝土连廊桥的现代校园，SSS 死后世界战线学园原型',
    intro: '《Angel Beats!》（Bangumi 8/10）「死后世界学园」原型——石川县金泽大学角间校区依山谷而建，巨型几何混凝土连廊桥（Acanthus Interface）横跨南北校区深谷，自然科学本馆前广场完美重现音无、立华奏与仲村由理的青春与冷峻巨构空间感。',
    subSpots: [
      { name: '角间跨谷连廊桥 & 自然科学本馆广场', detail: '36.5458°N, 136.7088°E · 可与南边1小时车程的白川乡《寒蝉》同线巡礼' }
    ],
    photos: [
      { src: 'photos/wishlist/kanazawa-u.jpg', caption: '石川县金泽大学角间校区——《Angel Beats!》跨谷巨构连廊与学园原型' }
    ]
  },
  {
    id: 'wish-muralla-roja',
    lineId: 'line-brutalist', lineOrder: 9,
    name: '卡尔佩悬崖 · 西班牙红墙（La Muralla Roja）',
    country: '西班牙', region: '瓦伦西亚自治区阿利坎特省 · 卡尔佩海崖（2027西班牙顺路！）',
    lat: 38.6395, lng: 0.0442, zoom: 15,
    source: 'user', category: 'mega',
    aesthetics: ['巨大·无机质', '2027顺路可去'],
    work: 'Ricardo Bofill 1973 后现代几何迷宫堡垒 ·《纪念碑谷》与《鱿鱼游戏》阶梯原型',
    bgmScore: null,
    summary: '地中海悬崖上由绯红、蔷薇粉与天青蓝切出的立体几何迷宫阶梯，视错觉建筑巅峰',
    intro: '西班牙建筑大师里卡多·波菲尔（Ricardo Bofill）于 1973 年在地中海卡尔佩巨岩海岸旁筑起的「红墙（La Muralla Roja）」，以北非阿拉伯要塞（Kasbah）为灵感，遵循精密的希腊十字几何网格：高饱和的砖红、珊瑚粉与冷调天蓝墙面在烈日阴影切割下完全抹平了透视纵深，交错悬挑的楼梯、连廊与屋顶泳池宛如直接走入埃舍尔版画与神作《纪念碑谷（Monument Valley）》关卡！你的 2027 环线从巴塞罗那南下阿尔赫西拉斯途中即可顺访。',
    subSpots: [
      { name: 'La Muralla Roja 几何中庭阶梯 & 远眺卡尔佩巨岩（Peñón de Ifach）', detail: '38.6395°N, 0.0442°E · 属私人住宅公寓，预订内部民宿入住即可自由拍摄全部天台与阶梯' }
    ],
    photos: [
      { wiki: ['en', 'La_Muralla_Roja'], backupQuery: 'La Muralla Roja Calpe Ricardo Bofill', caption: '西班牙卡尔佩「红墙（La Muralla Roja）」——地中海悬崖上的超现实几何色彩迷宫' }
    ]
  },

  // ==================== Line 07 ·【黄沙与孤岛掩埋的诸神】(7) ====================
  {
    id: 'wish-uruk',
    lineId: 'line-ruins', lineOrder: 1,
    name: '美索不达米亚 · 乌鲁克古城遗址（Uruk）',
    country: '伊拉克', region: '穆萨纳省 · 幼发拉底河古河道荒漠',
    lat: 31.3222, lng: 45.6361, zoom: 12,
    source: 'user', category: 'ruins',
    aesthetics: ['消逝的文明·诸神遗迹', '圣地巡礼'],
    work: '《FGO 绝对魔兽战线巴比伦尼亚》',
    bgmScore: 8,
    summary: '人类第一座城市文明、英雄王吉尔伽美什王都，五千年泥砖神庙高台伫立两河荒原',
    intro: '伊拉克荒漠深处的乌鲁克（今 Warka），是距今逾 5500 年的苏美尔核心城邦、楔形文字与《吉尔伽美什史诗》诞生地，也是《FGO 巴比伦尼亚》（8/10）贤王吉尔伽美什抵抗神代终焉的城塞本尊。站在风沙吹蚀五十个世纪的安努塔庙与伊南娜神庙泥砖高台上，脚下尽是苏美尔神代的余烬。',
    subSpots: [
      { name: '埃安娜神庙区（Eanna）& 安努塔庙台基', detail: '31.3222°N, 45.6361°E · 世界文化遗产' }
    ],
    photos: [
      { src: 'photos/wishlist/uruk.jpg', caption: '伊拉克乌鲁克遗址——五千年前苏美尔城邦与吉尔伽美什王都遗存' }
    ]
  },
  {
    id: 'wish-giza-pyramids',
    lineId: 'line-ruins', lineOrder: 2,
    name: '开罗 · 吉萨大金字塔群与狮身人面像',
    country: '埃及', region: '吉萨高原（大开罗西南部 · 2027开罗站直达！）',
    lat: 29.9792, lng: 31.1342, zoom: 13,
    source: 'user', category: 'ruins',
    aesthetics: ['消逝的文明·诸神遗迹', '巨大·无机质', '2027顺路可去'],
    work: '230万块巨石堆砌的四千五百年几何神山 · 古代世界七大奇迹唯一幸存者',
    bgmScore: 8,
    summary: '撒哈拉沙漠边缘耸立了 4500 年的胡夫、哈夫拉、孟卡拉三座巨型金字塔与斯芬克斯',
    intro: '阿拉伯古谚云：“人类畏惧时间，而时间畏惧金字塔。”在现代开罗城市边缘与撒哈拉黄沙交界线上，由 230 万块平均重达 2.5 吨的巨石严丝合缝垒起原高 146.6 米的胡夫大金字塔，已沉默俯瞰人间四千五百余年（同时也是《FGO 神圣圆桌领域卡美洛》奥斯曼狄斯光辉大复合神殿与《JOJO 星尘斗士》决战地所在城市！）。你的 2027 亚欧非环线埃及开罗站即可零距离仰望！',
    subSpots: [
      { name: '九金字塔全景沙丘机位（Panorama Point）& 狮身人面像', detail: '29.9792°N, 31.1342°E · 顺访刚全面开放的旁侧巨构「大埃及博物馆 GEM」' }
    ],
    photos: [
      { wiki: ['en', 'Giza_pyramid_complex'], backupQuery: 'Giza Pyramids Egypt desert', caption: '埃及吉萨大金字塔群——撒哈拉边缘屹立四千五百年的几何巨石神山' }
    ]
  },
  {
    id: 'wish-petra',
    lineId: 'line-ruins', lineOrder: 3,
    name: '瓦迪穆萨 · 佩特拉古城与卡兹尼神殿',
    country: '约旦', region: '马安省 · 红海亚喀巴湾北侧砂岩裂谷',
    lat: 30.3285, lng: 35.4444, zoom: 13,
    source: 'bgm', category: 'ruins',
    aesthetics: ['消逝的文明·诸神遗迹', '2027顺路可去'],
    work: '千米一线天裂谷尽头整山雕凿的40米玫瑰红古神殿',
    bgmScore: null,
    summary: '穿过幽暗百米深砂岩蛇道，失落纳巴泰王国的玫瑰色整石柱式神殿骤然现身',
    intro: '步行穿过长达 1.2 公里、两侧百米赤红绝壁几乎在头顶合拢的蛇道裂谷（Al-Siq），在最后一道阳光缝隙里，直接在整座玫瑰砂岩悬崖上凿出的 40 米高卡兹尼神殿（Al-Khazneh）豁然撞入眼帘——且与你 2027 埃及西奈达哈卜站仅隔一道亚喀巴海湾！',
    subSpots: [
      { name: '蛇道裂谷（Siq）· 卡兹尼神殿 & 山顶代尔修道院', detail: '30.3285°N, 35.4444°E · 佩特拉之夜千盏烛灯点亮神殿广场' }
    ],
    photos: [
      { src: 'photos/wishlist/petra.jpg', caption: '约旦佩特拉古城卡兹尼神殿——整面玫瑰砂岩绝壁雕凿的失落文明遗迹' }
    ]
  },
  {
    id: 'wish-nemrut-gobekli',
    lineId: 'line-ruins', lineOrder: 4,
    name: '内姆鲁特山诸神巨像 & 哥贝克力石阵',
    country: '土耳其', region: '东南安纳托利亚 · 阿德亚曼 & 尚勒乌尔法',
    lat: 37.9806, lng: 38.7408, zoom: 9,
    source: 'bgm', category: 'ruins',
    aesthetics: ['消逝的文明·诸神遗迹', '2027顺路可去'],
    work: '两千米荒山之巅散落的诸神断首石像 & 距今1.2万年人类第一座神庙',
    bgmScore: null,
    summary: '字面意义上的「诸神的遗迹」：海拔 2150 米山巅两米高神明石首凝望两河日出',
    intro: '海拔 2150 米内姆鲁特山巅散落着公元前 1 世纪宙斯、阿波罗与安条克一世的巨大断首石像；向南 2.5 小时车程的哥贝克力石阵更建于公元前 9600 年（比金字塔早 7000 年！），可作为你 2027 土耳其卡帕多奇亚东延隐藏支线！',
    subSpots: [
      { name: '内姆鲁特山东西祭坛 & 哥贝克力石阵（Göbekli Tepe）', detail: '37.9806°N, 38.7408°E · 破晓金光洒满神明石首最为震撼' }
    ],
    photos: [
      { src: 'photos/wishlist/nemrut.jpg', caption: '土耳其内姆鲁特山巅散落的诸神巨大石首——名副其实的「诸神的遗迹」' }
    ]
  },
  {
    id: 'wish-parthenon',
    lineId: 'line-ruins', lineOrder: 4.5,
    name: '雅典卫城 · 帕特农神庙（Parthenon）',
    country: '希腊', region: '雅典市中心卫城山巅（2027雅典站直达！）',
    lat: 37.9715, lng: 23.7267, zoom: 15,
    source: 'user', category: 'ruins',
    aesthetics: ['消逝的文明·诸神遗迹', '2027顺路可去'],
    work: '公元前432年献给雅典娜的黄金比例多立克圣殿 · 西方古典文明之巅',
    bgmScore: null,
    summary: '耸立在雅典石灰岩陡崖之巅两千五百年的纯白彭特里克大理石柱廊，俯瞰爱琴海与全城',
    intro: '矗立在雅典海拔 150 米陡峭卫城平台最高处的帕特农神庙（建于公元前 447—前 432 年），全殿 46 根高达 10.4 米的彭特里克白大理石多立克巨柱均暗藏精妙的视觉矫正弧度（无一根绝对几何直线，却在人眼中呈现出极致挺拔神圣的黄金比例！）。历经两千五百年帝国更迭与战火洗礼，残缺的大理石三角楣与柱列在日落余晖中染成蜂蜜金色，你的 2027 亚欧非环线雅典站即可登顶朝圣！',
    subSpots: [
      { name: '雅典卫城山门·帕特农神庙 & 菲洛帕波斯山日落远眺机位', detail: '37.9715°N, 23.7267°E · 清晨 8:00 第一批入园避开烈日与人潮' }
    ],
    photos: [
      { wiki: ['en', 'Parthenon'], backupQuery: 'Parthenon Acropolis Athens sunset', caption: '希腊雅典卫城帕特农神庙——屹立两千五百年的奥林匹斯诸神圣殿' }
    ]
  },
  {
    id: 'wish-naples-jojo',
    lineId: 'line-ruins', lineOrder: 5,
    name: '庞贝古城遗址 & 那不勒斯蛋堡',
    country: '意大利', region: '坎帕尼亚大区 · 维苏威火山脚下 & 那不勒斯湾',
    lat: 40.7508, lng: 14.4869, zoom: 11,
    source: 'bgm', category: 'acg',
    aesthetics: ['消逝的文明·诸神遗迹', '圣地巡礼', '2027顺路可去'],
    work: '《JOJO的奇妙冒险 黄金之风》(8/10) & 公元79年火山灰瞬间封印的古罗马城',
    bgmScore: 8,
    summary: '被维苏威火山爆发时间冻结两千年的古罗马神庙街道，同时也是《黄金之风》镜中人死斗实景地',
    intro: '公元 79 年维苏威火山轰然喷发，六米厚的炽热火山浮石将整座繁华古罗马城市庞贝（Pompeii）的阿波罗神庙、圆形剧场、石板车辙乃至遇难者最后的姿态原封不动凝固在时间琥珀里；同时这里（悲剧诗人之家「小心恶犬」马赛克砖）与海湾边的那不勒斯蛋堡正是《JOJO 黄金之风》（8/10）护卫队旅程起点，从你 2027 罗马站乘高铁 1 小时即可顺访（还能同城打卡粗野主义港口之家）！',
    subSpots: [
      { name: '庞贝阿波罗神庙广场 & 那不勒斯蛋堡（Castel dell\'Ovo）', detail: '40.7508°N, 14.4869°E · 环维苏威小火车直达庞贝遗址大门' }
    ],
    photos: [
      { src: 'photos/wishlist/naples-jojo.jpg', caption: '那不勒斯海湾蛋堡远眺维苏威火山——毗邻庞贝古城与《JOJO 黄金之风》圣地' }
    ]
  },
  {
    id: 'wish-stonehenge',
    lineId: 'line-ruins', lineOrder: 6,
    name: '索尔兹伯里平原 · 巨石阵（Stonehenge）',
    country: '英国', region: '英格兰威尔特郡（伦敦通往延塔哲城堡/格拉斯顿伯里必经路！）',
    lat: 51.1789, lng: -1.8262, zoom: 14,
    source: 'user', category: 'ruins',
    aesthetics: ['消逝的文明·诸神遗迹', '巨大·无机质'],
    work: '新石器时代五千年未解巨石天文圆阵 · 梅林巨人搬石传说',
    bgmScore: null,
    summary: '空旷草甸上重达 25—50 吨的史前三石塔门（Trilithons）精准对齐夏至日出与冬至日落方位',
    intro: '矗立在英格兰南部索尔兹伯里空旷草甸上的史前巨石阵（建于公元前 3000—前 2000 年），外圈砂岩巨石高逾 4 米、单块重达 25 吨，内圈蓝砂岩甚至从 240 公里外的威尔士普雷塞利山脉跨越海陆运来，在中世纪传说中更被认为是大魔法师梅林借巨人之力移筑而成！\n路线惊喜：它正好卡在从伦敦向西南前往「格拉斯顿伯里」与「康沃尔延塔哲城堡」的 A303 公路正中央，一趟英格兰西南行三处神话坐标一气呵成！',
    subSpots: [
      { name: 'Stonehenge 内圈清晨/黄昏特别入场（Stone Circle Experience）', detail: '51.1789°N, 1.8262°W · 提前官网预约清晨或闭园后内圈票，可亲自走进巨石阵正中央！' }
    ],
    photos: [
      { wiki: ['en', 'Stonehenge'], backupQuery: 'Stonehenge twilight Wiltshire England', caption: '英国索尔兹伯里巨石阵——屹立五千年的史前巨石天文圆阵' }
    ]
  },
  {
    id: 'wish-york-constantine',
    lineId: 'line-ruins', lineOrder: 6.5,
    name: '约克 · 君士坦丁大帝雕像（Statue of Constantine the Great）',
    country: '英国', region: '英格兰北约克郡 · 约克大教堂南侧广场（Minster Yard）',
    lat: 53.9619, lng: -1.0817, zoom: 16,
    source: 'user', category: 'ruins',
    aesthetics: ['消逝的文明·诸神遗迹', '剑与魔法'],
    work: '公元306年古罗马艾伯拉肯（Eboracum）称帝原址 · 断剑化十字的青铜坐像',
    bgmScore: null,
    summary: '巍峨约克大教堂南耳堂前的青铜坐像，纪念公元306年在此登基的罗马皇帝君士坦丁大帝，脚下基座铭刻「以此徽记制胜」',
    intro: '矗立在英格兰约克大教堂（York Minster）南耳堂广场外的青铜坐像，纪念公元 306 年罗马帝国的传奇转折点——君士坦丁一世的父亲君士坦提乌斯一世病逝于罗马行省重镇艾伯拉肯（Eboracum，即今约克）后，驻军正是在这座大教堂脚下的罗马军团总部原址拥立年轻的君士坦丁称帝，由此开启了帝国东迁君士坦丁堡与基督教合法化的历史序幕。\n雕像由英国雕塑家菲利普·杰克逊（Philip Jackson）创作、1998 年揭幕：身披罗马军袍的君士坦丁端坐于罗马残柱基座之上，垂首凝视手中横置的断剑——剑柄与断刃恰好构成一枚十字架，呼应基座铭文 “By this sign conquer（拉丁文 In hoc signo vinces，以此徽记制胜）”；身后便是北欧规模最大的中世纪哥特式教堂约克大教堂，与广场旁保留至今的罗马军团原柱同框，历史层叠感极强。',
    subSpots: [
      { name: '君士坦丁大帝青铜坐像（Minster Yard 南广场）', detail: '53.9619°N, 1.0817°W · 约克大教堂南耳堂正前方，可同框古罗马石柱与哥特教堂南立面' },
      { name: '约克大教堂地下室（Undercroft · 罗马总部遗址）', detail: '53.9623°N, 1.0819°W · 教堂地底保留公元 1—4 世纪罗马军团巴西利卡柱基遗迹' }
    ],
    photos: [
      { wiki: ['en', 'Statue_of_Constantine_the_Great,_York'], backupQuery: 'Statue of Constantine the Great York Minster', caption: '英国英格兰约克——约克大教堂南侧广场的君士坦丁大帝青铜坐像（公元306年称帝原址）' }
    ]
  },
  {
    id: 'wish-moscow-red-square',
    lineId: 'line-ruins', lineOrder: 6.7,
    name: '莫斯科 · 红场与圣瓦西里大教堂（Red Square）',
    country: '俄罗斯', region: '莫斯科中央行政区 · 克里姆林宫东墙外（追极光路线起终点！）',
    lat: 55.7539, lng: 37.6208, zoom: 16,
    source: 'user', category: 'ruins',
    aesthetics: ['消逝的文明·诸神遗迹', '巨大·无机质'],
    work: '克里姆林宫红砖城墙、九座糖果色洋葱头圣瓦西里大教堂与百年古姆百货雪夜灯光',
    bgmScore: null,
    summary: '莫斯科心脏地带长达 330 米的石砖广场，克里姆林宫赤红塔楼、圣瓦西里九色洋葱头穹顶与冬夜漫天灯海同框',
    intro: '坐落于克里姆林宫东墙之外的红场（Red Square，俄语 Красная площадь 原意「美丽的广场」），自 15 世纪末便是莫斯科乃至整个俄罗斯帝国与苏联历史的中心舞台。广场南端耸立着伊凡雷帝于 1555—1561 年敕建的圣瓦西里升天大教堂——九座螺旋彩釉洋葱头穹顶如异界城堡般绚丽诡谲；西侧是绵延的克里姆林宫暗红砖墙、斯帕斯卡亚钟楼与黑红花岗岩砌筑的列宁墓；东侧则是三层玻璃拱顶、冬季亮起数万盏暖金串灯的古姆国家百货（GUM）。联动你的「追极光」路线起终点莫斯科，抵达首日或返程日即可漫步雪中红场与古姆溜冰场。',
    subSpots: [
      { name: '圣瓦西里大教堂北侧广场 & 斯帕斯卡亚钟楼机位', detail: '55.7525°N, 37.6231°E · 蓝调时刻或雪夜灯光下拍摄彩釉洋葱头与红墙最具压迫感' },
      { name: '古姆百货（GUM）正立面 & 冬季红场露天溜冰场', detail: '55.7547°N, 37.6215°E · 1月寒假正值莫斯科新年灯饰与集市季，夜拍氛围极佳' }
    ],
    photos: [
      { wiki: ['en', 'Red_Square'], backupQuery: 'Red Square Saint Basils Cathedral Moscow winter', caption: '俄罗斯莫斯科红场——克里姆林宫红墙、古姆灯海与圣瓦西里大教堂彩釉洋葱头穹顶' }
    ]
  },
  {
    id: 'wish-stpetersburg-hermitage',
    lineId: 'line-ruins', lineOrder: 6.8,
    name: '圣彼得堡 · 冬宫与埃尔米塔日博物馆（Winter Palace）',
    country: '俄罗斯', region: '圣彼得堡中心区 · 涅瓦河南岸宫殿广场（追极光路线必访！）',
    lat: 59.9398, lng: 30.3146, zoom: 16,
    source: 'user', category: 'ruins',
    aesthetics: ['消逝的文明·诸神遗迹', '巨大·无机质'],
    work: '世界四大博物馆之一 · 沙皇巴洛克翡翠绿金宫殿与三百万件人类文明珍藏',
    bgmScore: null,
    summary: '涅瓦河畔绵延逾两百米的翡翠绿白金巴洛克沙皇冬宫，内藏达·芬奇、伦勃朗与黄金孔雀钟等逾 300 万件馆藏',
    intro: '坐落于圣彼得堡涅瓦河南岸与宏阔宫殿广场之间的冬宫（Winter Palace），自 1762 年叶卡捷琳娜大帝迁入直至 1917 年一直是俄罗斯沙皇的冬季皇宫，如今与小埃尔米塔日、旧/新埃尔米塔日共同构成世界四大博物馆之一的国立埃尔米塔日博物馆（State Hermitage Museum）。外立面以标志性的薄荷翡翠绿配纯白科林斯石柱与屋顶青铜群像绵延两百余米；步入宫内，镀金大理石约旦阶梯、铺满孔雀石柱的孔雀石大厅、机械展翅报时的黄金孔雀钟，以及达·芬奇《柏诺瓦圣母》、伦勃朗《浪子回头》与古希腊罗马雕塑长廊令人目不暇接。联动你的「追极光」路线圣彼得堡段，建议预留至少半天至一整天沉浸慢逛，顺路步行 10 分钟即可打卡滴血救世主教堂。',
    subSpots: [
      { name: '宫殿广场亚历山大纪念柱 & 冬宫巴洛克南立面全景', detail: '59.9390°N, 30.3159°E · 穿出总参谋部凯旋门拱廊一瞬，冬宫全貌正中入画' },
      { name: '约旦阶梯（Jordan Staircase）· 孔雀钟厅 & 伦勃朗展厅', detail: '59.9398°N, 30.3146°E · 冬季 1 月淡季排队较少，注意周一闭馆' }
    ],
    photos: [
      { wiki: ['en', 'Winter_Palace'], backupQuery: 'Winter Palace Hermitage Museum Saint Petersburg', caption: '俄罗斯圣彼得堡冬宫（埃尔米塔日博物馆）——涅瓦河畔的翡翠绿金巴洛克沙皇皇宫' }
    ]
  },
  {
    id: 'wish-kyoto-kiyomizudera',
    lineId: 'line-ruins', lineOrder: 6.9,
    name: '京都 · 清水寺（Kiyomizu-dera）',
    country: '日本', region: '京都府京都市东山区 · 音羽山麓（古京都世界文化遗产）',
    lat: 34.9949, lng: 135.7850, zoom: 16,
    source: 'user', category: 'ruins',
    aesthetics: ['消逝的文明·诸神遗迹', '巨大·无机质'],
    work: '始建于778年 · 139根巨型榉木不用一根钉子悬空架起的13米国宝「清水舞台」',
    bgmScore: null,
    summary: '悬挑于音羽山断崖之上的 13 米全木榫卯悬空舞台，春樱秋枫与京都市街夕阳尽收眼底',
    intro: '始建于公元 778 年、现存本堂重建于 1633 年的京都清水寺（音羽山清水寺），是京都最负盛名的古刹与世界文化遗产。国宝级「清水舞台」完全采用传统「悬造」木构技法，由 139 根巨型榉木纵横交错咬合、不施一根铁钉便凌空支起距山谷达 13 米的广阔舞台——日语名谚「从清水舞台跳下去（清水の舞台から飛び降りる）」正源于此。自奥之院回望本堂舞台、三重塔与京都塔同框，春樱秋枫与夜间特别点灯皆为绝景；顺山道而下还可接饮千年不竭的音羽瀑布三道清泉，并沿三年坂、二年坂一路漫步至八坂塔与祇园。',
    subSpots: [
      { name: '奥之院回望清水舞台全景机位 & 仁王门·三重塔', detail: '34.9949°N, 135.7850°E · 建议清晨 6:00 开门即入园避开人潮，或赶春樱/红叶季夜间点灯' },
      { name: '音羽瀑布 & 三年坂·二年坂石阶老街', detail: '34.9970°N, 135.7808°E · 出寺顺坡漫步可串联法观寺八坂塔与祇园花见小路' }
    ],
    photos: [
      { wiki: ['en', 'Kiyomizu-dera'], backupQuery: 'Kiyomizu-dera wooden stage Kyoto autumn', caption: '日本京都清水寺——139根巨型榉木悬空架起的国宝清水舞台与音羽山林' }
    ]
  },
  {
    id: 'wish-easter-island',
    lineId: 'line-ruins', lineOrder: 7,
    name: '复活节岛 · 拉帕努伊摩艾石像群（Easter Island）',
    country: '智利', region: '东南太平洋 · 地球上最孤绝的有人岛屿（距大陆 3500km）',
    lat: -27.1258, lng: -109.2769, zoom: 11,
    source: 'user', category: 'ruins',
    aesthetics: ['消逝的文明·诸神遗迹', '巨大·无机质'],
    work: '与世隔绝太平洋孤岛上背对怒海凝望村落的 887 尊火山凝灰岩祖先巨像',
    bgmScore: null,
    summary: '距离最近大陆逾 3500 公里的火山孤岛，15 尊巨型摩艾石像一字排开伫立海崖迎接破晓金光',
    intro: '波利尼西亚人称之为“拉帕努伊（大地的肚脐）”的复活节岛，孤悬在浩瀚东南太平洋正中央，四周两千公里内茫茫无际皆是深海。公元 13—16 世纪间，岛民在拉诺拉拉库（Rano Raraku）死火山口采石场雕凿出近千尊高达数米至十余米、眉骨深陷神情肃穆的「摩艾（Moai）」巨石人像。\n东海岸「阿胡汤加里奇（Ahu Tongariki）」海啸后重立的 15 尊巨像背靠太平洋狂涛排成百米石阵迎接日出，采石场草坡上更有数百尊半埋在泥土里倾斜静默的未完成巨首，孤独神秘感举世无双。',
    subSpots: [
      { name: 'Ahu Tongariki 十五尊日出石像阵 & Rano Raraku 火山口采石场', detail: '27.1258°S, 109.2769°W · 智利圣地亚哥直飞约 5.5 小时登岛' }
    ],
    photos: [
      { wiki: ['en', 'Ahu_Tongariki'], backupQuery: 'Ahu Tongariki Moai Easter Island sunrise', caption: '智利复活节岛——孤悬太平洋海崖上迎接日出的15尊摩艾巨石人像' }
    ]
  },

  // ==================== Line 08 ·【北美荒野公路与冰川雷霆】(7) ====================
  {
    id: 'wish-banff-moraine',
    lineId: 'line-uswest', lineOrder: 1,
    name: '班夫梦莲湖 & 亚伯拉罕冰泡湖（冰竖锥）',
    country: '加拿大', region: '艾伯塔省 · 落基山脉班夫国家公园 & 冰原大道',
    lat: 51.3217, lng: -116.1860, zoom: 9,
    source: 'user', category: 'mega',
    aesthetics: ['巨大·无机质', '西幻·巨人·矮人·精灵'],
    work: '落基山夏冬双绝：十峰谷冰川绿松石湖面 + 严冬通透蓝冰下层叠耸立的白色甲烷冰泡柱',
    bgmScore: null,
    summary: '盛夏十座锯齿雪峰倒映在魔幻冰川蓝湖面；寒冬冰层内部凝结出成千上万串垂直向上的白玉冰竖锥',
    intro: '加拿大落基山脉一次囊括两种极致视觉奇观：夏秋季（6—10月），班夫国家公园十峰谷环抱的「梦莲湖（Moraine Lake）」因冰川岩粉折射出耀眼的孔雀绿松石色（旧版 20 加元纸币背面经典图案）；\n而到了 1—2 月零下三十度的隆冬，沿冰原大道向北的「亚伯拉罕湖（Abraham Lake）」与班夫园内的明尼汪卡湖，湖底释放的甲烷气泡在浮向水面途中被极寒逐层瞬间冻结，在清澈见底的幽蓝厚冰内部形成无数串垂直堆叠、宛如白玉圆锥塔与水母悬停般的「冰封气泡柱（Ice Bubbles / 冰竖锥）」！',
    subSpots: [
      { name: '班夫 · 梦莲湖碎石堆观景台（Rockpile）', detail: '51.3217°N, 116.1860°W · 6—10月开放，需乘官方接驳巴士入谷' },
      { name: '冰原大道 · 亚伯拉罕湖冰泡核心区（Preacher\'s Point）', detail: '52.2225°N, 116.4167°W · 1月中旬至2月中旬无雪吹净冰面时冰泡竖锥最通透' }
    ],
    photos: [
      { wiki: ['en', 'Moraine_Lake'], backupQuery: 'Moraine Lake Banff Valley of Ten Peaks', caption: '加拿大班夫国家公园梦莲湖——十峰谷雪山环抱的冰川绿松石湖泊' },
      { wiki: ['en', 'Abraham_Lake'], backupQuery: 'Abraham Lake frozen methane ice bubbles Alberta', caption: '落基山亚伯拉罕湖——严冬透明蓝冰内部层层垂直冻结的白色冰泡竖锥' }
    ]
  },
  {
    id: 'wish-haystack-rock',
    lineId: 'line-uswest', lineOrder: 2,
    name: '俄勒冈 · 草垛岩（Haystack Rock）',
    country: '美国', region: '俄勒冈州海岸 · 卡农海滩（Cannon Beach）',
    lat: 45.8845, lng: -123.9681, zoom: 13,
    source: 'user', category: 'mega',
    aesthetics: ['巨大·无机质'],
    work: '北美西海岸起点 · 太平洋冷雾黑镜潮滩上的72米玄武岩独石',
    bgmScore: null,
    summary: '终年翻涌的太平洋海雾与退潮深色湿沙，将 72 米黑色火山独石镜像出冷冽压迫感',
    intro: '美西纵贯公路的海雾起点：俄勒冈州卡农海滩潮间带上拔海 72 米的黑色玄武岩独石「草垛岩」，当大潮退去、天色微暗而海雾低垂时，平整湿沙将巨石与三座剑齿伴生礁完整对称反射。',
    subSpots: [
      { name: 'Cannon Beach 低潮镜面带', detail: '45.8845°N, 123.9681°W · 101号太平洋海岸公路经典地标' }
    ],
    photos: [
      { src: 'photos/wishlist/haystack-rock.jpg', caption: '美国俄勒冈草垛岩——太平洋冷雾与镜面潮滩上的72米玄武岩巨石' }
    ]
  },
  {
    id: 'wish-general-sherman',
    lineId: 'line-uswest', lineOrder: 3,
    name: '加州 · 美洲杉国家公园（谢尔曼将军树）',
    country: '美国', region: '加利福尼亚州 · 内华达山脉西坡巨杉林（Sequoia NP）',
    lat: 36.5817, lng: -118.7514, zoom: 11,
    source: 'user', category: 'fantasy',
    aesthetics: ['西幻·巨人·矮人·精灵', '巨大·无机质'],
    work: '地球现存最大单体生命 · 两千年参天巨杉森林与隧道巨木',
    bgmScore: null,
    summary: '驶入树高逾 80 米的远古巨杉秘境，仰望体积 1487 立方米的地球生命之王「谢尔曼将军树」',
    intro: '从太平洋海岸折入加州内华达山脉海拔两千米的「美洲杉国家公园（Sequoia National Park）」，整片「巨杉林（Giant Forest）」耸立着数千棵树干粗如城堡塔楼的远古巨杉——核心王者「谢尔曼将军树」高 83.8 米、底部周长逾 31 米、树龄超 2200 年，是地球现存体积最大的单体生物！汽车甚至能直接从倒伏巨木凿出的「Tunnel Log 树洞隧道」下穿行而过。',
    subSpots: [
      { name: '谢尔曼将军树步道 · 摩洛岩（Moro Rock）& 巨树汽车隧道', detail: '36.5817°N, 118.7514°W · 冬季白雪衬托赤红巨杉树干对比绝美' }
    ],
    photos: [
      { src: 'photos/wishlist/general-sherman.jpg', caption: '加州美洲杉国家公园「谢尔曼将军树」——地球现存体积最大的两千年巨杉' }
    ]
  },
  {
    id: 'wish-utah-us163',
    lineId: 'line-uswest', lineOrder: 4,
    name: '犹他州 · 163 号公路 & 纪念碑谷（阿甘点）',
    country: '美国', region: '犹他州与亚利桑那州交界 · 纳瓦霍红岩荒漠',
    lat: 37.1014, lng: -109.9908, zoom: 11,
    source: 'user', category: 'mega',
    aesthetics: ['巨大·无机质'],
    work: '美国西部公路精神图腾 ·《阿甘正传》停步回首处 &《荒野大镖客》孤峰旷野',
    bgmScore: null,
    summary: '一条笔直如剑的黑色沥青双车道刺破苍茫戈壁，尽头直指平地拔起三百米的赤红砂岩孤峰群',
    intro: '如果全世界的公路旅行只能选一个镜头，那一定是犹他州「163 号公路（U.S. Route 163）」13 英里路标处的阿甘点（Forrest Gump Point）！\n一条上下起伏却分毫不差对准地平线中心的黑灰色沥青公路，劈开荒芜赤红的科罗拉多高原荒漠，正前方三座高达 300 米、顶部刀削般平齐的赤红砂岩孤峰（Buttes & Mesas，纪念碑谷 Monument Valley）如远古神殿巨柱般拔地而起——无需任何滤镜，踩下油门的那一刻便是纯粹的西部孤独与自由史诗。',
    subSpots: [
      { name: 'US-163 Milepost 13（阿甘点）& 纪念碑谷 17 英里红土环线', detail: '37.1014°N, 109.9908°W · 日出顺光将远方红色孤峰照得通红，注意公路过往车辆安全' }
    ],
    photos: [
      { wiki: ['en', 'U.S._Route_163'], backupQuery: 'Monument Valley US Route 163 Forrest Gump Point', caption: '美国犹他州163号公路——笔直刺向纪念碑谷百米赤红孤峰的美西灵魂公路' }
    ]
  },
  {
    id: 'wish-oak-alley',
    lineId: 'line-uswest', lineOrder: 5,
    name: '路易斯安那 · 橡树庄园（Oak Alley Plantation）',
    country: '美国', region: '路易斯安那州密西西比河西岸 · 瓦谢里（新奥尔良西 1h）',
    lat: 30.0042, lng: -90.7761, zoom: 14,
    source: 'user', category: 'fantasy',
    aesthetics: ['西幻·巨人·矮人·精灵'],
    work: '28棵三百年参天古橡树交织成的240米幽深绿穹隧道 ·《荒野大镖客2》布雷斯韦特庄园原型',
    bgmScore: null,
    summary: '两排种植于18世纪初的巨型南方活栎树枝干在空中合拢成对称拱廊，尽头伫立希腊复兴式白柱庄园',
    intro: '密西西比河畔最具电影宿命感的南方古庄园：早在大宅建成的百年前（18世纪初），未知种植者便沿中轴线对称种下了两排共 **28 棵弗吉尼亚活栎树（Southern Live Oak）**；历经三百年生长，虬曲苍黑的粗壮枝干在头顶紧紧交织成一条长达 240 米的深邃绿色拱顶隧道，阳光透过垂挂的西班牙苔藓洒下斑驳光影。\n玩过《荒野大镖客：救赎 2》的人看到它的第一眼就会起鸡皮疙瘩——范德林德帮全员并排持枪踏过橡树大道火烧「布雷斯韦特庄园」的影史级名场面，正是 1:1 复刻自这里！',
    subSpots: [
      { name: '二楼阳台俯瞰 28 棵古橡树中轴对称长廊', detail: '30.0042°N, 90.7761°W · 距新奥尔良自驾约 55 分钟' }
    ],
    photos: [
      { wiki: ['en', 'Oak_Alley_Plantation'], backupQuery: 'Oak Alley Plantation trees Louisiana', caption: '路易斯安那橡树庄园——28棵三百年古栎树交织的林荫隧道（《荒野大镖客2》原型）' }
    ]
  },
  {
    id: 'wish-symmes-chapel',
    lineId: 'line-uswest', lineOrder: 6,
    name: '南卡罗来纳 · 西姆斯悬崖礼拜堂（Pretty Place）',
    country: '美国', region: '南卡罗来纳州 · 蓝岭山脉斯通山绝壁',
    lat: 35.0694, lng: -82.6586, zoom: 12,
    source: 'user', category: 'mega',
    aesthetics: ['巨大·无机质'],
    work: '蓝岭山脉海拔千米绝壁之巅三面无墙的露天木十字架礼拜堂',
    bgmScore: null,
    summary: '整座礼拜堂三面完全敞开无墙，高耸十字架背后是层层渐变的黛青远山与翻涌云海',
    intro: '横跨美国公路线的东岸破晓终点：坐落于蓝岭山脉花岗岩悬崖边缘的西姆斯礼拜堂（Pretty Place），原木屋顶下三面无墙，十字架直面一望无际的层叠山峦与翻腾云海，日出金光穿透薄雾洒满长椅时宛如天空圣殿。',
    subSpots: [
      { name: 'Pretty Place 悬崖圣坛日出机位', detail: '35.0694°N, 82.6586°W · 行前查询 YMCA Camp Greenville 官网开放时间表' }
    ],
    photos: [
      { src: 'photos/wishlist/symmes-chapel.jpg', caption: '美国南卡罗来纳西姆斯悬崖礼拜堂——三面无墙俯瞰蓝岭山脉云海' }
    ]
  },
  {
    id: 'wish-niagara-falls',
    lineId: 'line-uswest', lineOrder: 7,
    name: '美加边境 · 尼亚加拉大瀑布（Niagara Falls）',
    country: '加拿大', region: '加拿大安大略省 & 美国纽约州交界 · 马蹄瀑布',
    lat: 43.0799, lng: -79.0747, zoom: 13,
    source: 'user', category: 'mega',
    aesthetics: ['巨大·无机质'],
    work: '北美五大湖水系奔涌坠落的半圆形雷霆水幕巨渊',
    bgmScore: null,
    summary: '宽达 790 米的马蹄形断崖每秒近三千吨翡翠河水轰鸣砸入深渊，水雾冲天高达百米',
    intro: '汇集北美四大湖浩瀚水量的尼亚加拉河在美加边境骤然跌落 50 多米悬崖，其中加拿大侧宽近 800 米的半圆形「马蹄瀑布（Horseshoe Falls）」以排山倒海之势每秒倾泻数千立方米水体，轰鸣声数公里外震耳欲聋；冬季极寒冰封时两岸更结出万吨巨大冰挂，乘游船（Hornblower / 雾中少女号）直接冲进马蹄水墙风暴眼中心，感受大自然纯粹的雷霆伟力。',
    subSpots: [
      { name: '加拿大侧 Table Rock 悬崖边 & 瀑布游船风暴眼', detail: '43.0799°N, 79.0747°W · 加拿大侧可正面平视整座马蹄瀑布全景' }
    ],
    photos: [
      { wiki: ['en', 'Niagara_Falls'], backupQuery: 'Niagara Falls Horseshoe Falls aerial', caption: '美加边境尼亚加拉大瀑布——雷霆万钧倾泻入渊的马蹄形巨瀑' }
    ]
  },

  // ==================== Line 09 ·【大地色谱与万亿生灵】(5) ====================
  {
    id: 'wish-hitachi-nemophila',
    lineId: 'line-bloom', lineOrder: 1,
    name: '茨城 · 国营常陆（日立）海滨公园粉蝶花海',
    country: '日本', region: '茨城县常陆那珂市（太平洋岸 · 东京东北约 2h）',
    lat: 36.4063, lng: 140.5969, zoom: 13,
    source: 'user', category: 'fantasy',
    aesthetics: ['西幻·巨人·矮人·精灵'],
    work: '450万株琉璃唐草（粉蝶花）将整座山丘染成与天空大海无缝相接的湛蓝星球',
    bgmScore: null,
    summary: '4月下旬至5月初，整座「见晴之丘」化作纯粹澄澈的天蓝色花毯，天、海、山三界合一',
    intro: '每年春季 4 月中下旬至 5 月上旬黄金周，茨城县太平洋岸国营常陆海滨公园（又称日立海滨公园）最高的「见晴之丘」上，**530 万株**清透如婴儿蓝瞳的粉蝶花（Nemophila / 琉璃唐草）同时盛放——山丘弧线直接连向远方湛蓝的太平洋与万里无云的晴空，整幅画面只剩下深深浅浅的纯蓝；而到了 10 月深秋，同一座山丘上的数万株圆滚滚扫帚草又会整片烧成炽烈的猩红色！',
    subSpots: [
      { name: '见晴之丘（みはらしの丘）山坡步道', detail: '36.4063°N, 140.5969°E · JR 常磐线胜田站乘接驳巴士 15 分钟，开园第一时间入场避人流' }
    ],
    photos: [
      { wiki: ['ja', '国営ひたち海浜公園'], backupQuery: 'Hitachi Seaside Park blue nemophila hills', caption: '日本茨城国营常陆（日立）海滨公园——与天空大海融为一体的数百万株蓝色粉蝶花海' }
    ]
  },
  {
    id: 'wish-provence-lavender',
    lineId: 'line-bloom', lineOrder: 2,
    name: '普罗旺斯 · 瓦朗索勒薰衣草花田（Valensole）',
    country: '法国', region: '普罗旺斯-阿尔卑斯-蔚蓝海岸（距你2027尼斯站仅 2h！）',
    lat: 43.8375, lng: 5.9839, zoom: 11,
    source: 'user', category: 'fantasy',
    aesthetics: ['西幻·巨人·矮人·精灵', '2027顺路可去'],
    work: '沿丘陵起伏一直延伸至远方雪山脚下的无边深紫花浪与金色向日葵田',
    bgmScore: null,
    summary: '盛夏 6 月底至 7 月中旬，成千上万垄整齐的深紫色薰衣草波浪随南法热风翻涌香气',
    intro: '法国南部普罗旺斯高原上的瓦朗索勒（Valensole），拥有全法国面积最辽阔、地势起伏最具韵律感的薰衣草花海：每年 6 月下旬至 7 月中旬收割前，一垄垄深紫色的薰衣草田顺着丘陵弧线绵延至天际，中间常有单棵孤独古树或金黄色向日葵田撞色相间。\n超级契合点：你的 **2027 暑假亚欧非环线** 正值盛夏，且原本就途经南法「尼斯（Nice）」——从尼斯自驾向西北穿过圣十字湖大峡谷仅 2 小时即可直入紫色花海！',
    subSpots: [
      { name: 'Valensole D6 公路经典起伏花垄与孤树机位', detail: '43.8375°N, 5.9839°E · 每年 6 月 25 日—7 月 15 日为最盛花期（7月20日后陆续收割）' }
    ],
    photos: [
      { wiki: ['en', 'Valensole'], backupQuery: 'Valensole Provence lavender fields sunset', caption: '法国普罗旺斯瓦朗索勒——顺着丘陵绵延至天际的深紫色薰衣草花浪' }
    ]
  },
  {
    id: 'wish-mexico-butterflies',
    lineId: 'line-bloom', lineOrder: 3,
    name: '米却肯 · 帝王蝶生物圈保护区（蝴蝶谷）',
    country: '墨西哥', region: '米却肯州海拔 3000 米冷杉高山林（墨西哥城以西 3h）',
    lat: 19.5908, lng: -100.2647, zoom: 11,
    source: 'user', category: 'festival',
    aesthetics: ['人文祭典', '西幻·巨人·矮人·精灵'],
    work: '跨越四千公里迁徙的数亿只橙黑帝王蝶压弯整座森林 · 亡灵节归魂化身',
    bgmScore: null,
    summary: '上亿只帝王蝶密密麻麻裹满整片高耸冷杉树干，正午阳光一照瞬间万蝶齐飞遮蔽天空',
    intro: '地球昆虫界最不可思议的跨代史诗：每年秋冬，数以亿计从未去过南方的第四代北美帝王蝶（Monarch Butterfly）凭基因记忆从加拿大与美国飞越 4000 多公里，精准降落在墨西哥米却肯州海拔三千米的宗教冷杉林（El Rosario / Sierra Chincua）越冬。蝴蝶密集到将粗壮松柏树枝压弯下垂，远看整座森林变成深橙色；待正午阳光升温，亿万只蝴蝶同时振翅升空如金色暴风雪般在耳畔沙沙作响！\n由于首批蝴蝶总在 **11 月 1 日前后**准时飞抵，当地普雷佩查原住民世代坚信：**这漫天金蝶正是亡灵节归来探望人间的逝者灵魂**！',
    subSpots: [
      { name: 'El Rosario & Sierra Chincua 核心保护区步道', detail: '19.5908°N, 100.2647°W · 11月初与亡灵节同步开启，1—2月晴天正午群飞规模达顶峰' }
    ],
    photos: [
      { wiki: ['en', 'Monarch_Butterfly_Biosphere_Reserve'], backupQuery: 'Monarch Butterfly Biosphere Reserve Mexico trees', caption: '墨西哥米却肯帝王蝶保护区——数以亿计越冬帝王蝶将整片高山森林染成橙金色' }
    ]
  },
  {
    id: 'wish-serengeti-mara',
    lineId: 'line-bloom', lineOrder: 4,
    name: '马赛马拉 & 塞伦盖蒂（百万角马渡河）',
    country: '肯尼亚', region: '肯尼亚马赛马拉 & 坦桑尼亚塞伦盖蒂交界 · 马拉河',
    lat: -1.5350, lng: 35.0250, zoom: 9,
    source: 'user', category: 'festival',
    aesthetics: ['西幻·巨人·矮人·精灵'],
    work: '地球陆地最磅礴的原始生命洪流 · 百万角马斑马「天国之渡」',
    bgmScore: null,
    summary: '超过 150 万头角马与数十万斑马在漫天红尘中纵身跃入尼罗鳄潜伏的湍急马拉河',
    intro: '东非大裂谷无垠金合欢稀树草原上，每年 7—9 月逾 150 万头白须角马、30 万匹斑马与瞪羚追逐雨草北上，集结在肯坦边境陡峭浑浊的「马拉河（Mara River）」岸边。领头兽跃下的瞬间，成千上万头巨兽前赴后继冲下河岸激起漫天水花与轰鸣蹄声，与河中潜伏的巨型尼罗鳄和岸上狮群上演最赤裸、最震撼的生死搏杀（「天国之渡」）。',
    subSpots: [
      { name: 'Mara River Crossing 主渡口 & 塞伦盖蒂北部 Kogatende', detail: '1.5350°S, 35.0250°E · 每年 7 月下旬至 9 月上旬为过河高发窗口' }
    ],
    photos: [
      { wiki: ['en', 'Maasai_Mara'], backupQuery: 'wildebeest migration Mara River crossing Kenya', caption: '东非马赛马拉与塞伦盖蒂——百万角马斑马横渡马拉河的原始生命狂潮' }
    ]
  },
  {
    id: 'wish-japan-cat-island',
    lineId: 'line-bloom', lineOrder: 5,
    name: '爱媛青岛 & 宫城田代岛（日本猫岛）',
    country: '日本', region: '濑户内海爱媛县大洲市青岛 · 宫城县石卷市田代岛',
    lat: 33.7356, lng: 132.4819, zoom: 12,
    source: 'user', category: 'acg',
    aesthetics: ['圣地巡礼'],
    work: '猫口远超人口数倍的治愈孤岛 · 百猫涌上防波堤迎船与森林猫神社',
    bgmScore: null,
    summary: '一天两班小渡轮靠岸的瞬间，上百只毛色各异的海岛猫咪铺天盖地冲向码头迎接旅人',
    intro: '日本最具传奇色彩的两座“猫统治的小岛”：① 位于濑户内海伊予滩的「爱媛县·青岛」（正好可与四国香川《濑户的花嫁》顺连！），全岛常住老人仅数人，却聚居着上百只猫咪，渡轮鸣笛靠岸时满防波堤猫咪浩浩荡荡奔来的画面举世闻名；② 位于东北宫城县外海的「田代岛」，不仅有百余只亲人海岛猫与漫画猫型木屋，岛中央树林里还真正供奉着保佑渔获平安的「猫神社（美与利大明神）」！（注：青岛近年猫群老龄化，田代岛设施与渡轮班次更稳健，两处可择一登岛）。',
    subSpots: [
      { name: '濑户内海 · 爱媛青岛（JR伊予长浜站长浜港乘船35分钟）', detail: '33.7356°N, 132.4819°E · 岛上无商店无餐厅，需自备饮水并在指定投喂区守规互动' },
      { name: '东北宫城 · 田代岛猫神社（石卷港乘船45分钟）', detail: '38.2981°N, 141.4167°E · 交通与设施完善，全年适宜登岛撸猫' }
    ],
    photos: [
      { wiki: ['ja', '青島_(愛媛県)'], backupQuery: 'Aoshima cat island Ehime Japan cats', caption: '濑户内海爱媛青岛（猫岛）——防波堤与渔港小巷中成群结队的海岛猫咪' }
    ]
  },
  {
    id: 'wish-valais-sheep',
    lineId: 'line-bloom', lineOrder: 6,
    name: '采尔马特 · 瓦莱黑鼻羊与马特洪峰',
    country: '瑞士', region: '瓦莱州 · 采尔马特（Zermatt · 戈尔内格拉特高山牧场）',
    lat: 46.0207, lng: 7.7491, zoom: 12,
    source: 'user', category: 'fantasy',
    aesthetics: ['西幻·巨人·矮人·精灵'],
    work: '“全世界最可爱的羊”· 脸黑到看不见五官的蓬松卷毛精灵（《小羊肖恩》原型）',
    bgmScore: null,
    summary: '三角金字塔雪峰马特洪峰脚下的翠绿高山草甸上，成群黑脸黑耳黑袜子的白卷毛小羊悠闲散步',
    intro: '原产于瑞士西南部瓦莱州高寒山谷的「瓦莱黑鼻羊（Valais Blacknose Sheep）」，浑身披着云朵般蓬松洁白的螺旋长卷毛，唯独整张脸、双耳、双膝与四蹄像蘸了墨汁一样漆黑到完全找不到眼睛鼻子，性格还像小狗一样粘人温顺！\n每年夏季（6月中旬—9月中旬），采尔马特（Zermatt）的牧民会将约百余只黑鼻羊放到海拔两千多米、正对凌厉金字塔神山「马特洪峰（Matterhorn）」的戈尔内格拉特高山草甸（甚至官方专门为羊群配有 GPS 定位网页方便游客上山寻羊撸羊！）。',
    subSpots: [
      { name: '采尔马特 Gornergrat / Riffelberg 高山牧场（Meet the Sheep）', detail: '46.0207°N, 7.7491°E · 6月底至9月初可通过采尔马特旅游局官网实时查看羊群GPS位置' }
    ],
    photos: [
      { wiki: ['en', 'Valais_Blacknose'], backupQuery: 'Valais Blacknose sheep Zermatt Matterhorn', caption: '瑞士瓦莱州采尔马特——马特洪峰雪山草甸上的「瓦莱黑鼻羊」' }
    ]
  },
  {
    id: 'wish-fainting-goat',
    lineId: 'line-bloom', lineOrder: 7,
    name: '田纳西州 · 肌强直“晕倒羊”牧场与山羊节',
    country: '美国', region: '田纳西州马歇尔县 · 刘易斯堡（Lewisburg）',
    lat: 35.4492, lng: -86.7889, zoom: 11,
    source: 'user', category: 'festival',
    aesthetics: ['人文祭典'],
    work: '一激动或受惊就四腿笔直僵硬“装死倒地”的神奇田纳西山羊原产地',
    bgmScore: null,
    summary: '源自1880年代田纳西农场的先天性肌强直山羊，看见好吃的太兴奋也会直挺挺侧翻倒地3秒又满血复活',
    intro: '火遍全球的“田纳西晕倒羊（Tennessee Fainting Goat / Myotonic Goat）”最早于 1880 年代出现在美国田纳西州马歇尔县：它们其实根本没有失去意识（也完全不痛），而是携带一种良性的先天性肌强直基因，每当突然吃惊、甚至只是看到饲养员提着饲料桶跑来太开心激动时，腿部肌肉就会瞬间收缩僵直 3—10 秒，四条腿像木头板凳一样直挺挺啪叽侧倒在地，几秒后又若无其事爬起来继续嚼草！\n发源地田纳西州刘易斯堡更在每年 10 月第二个周末举办盛大的「山羊、音乐与晕倒羊节（Goats, Music and More Festival）」！',
    subSpots: [
      { name: '田纳西刘易斯堡 Rock Creek Park（每年10月晕倒羊节主场）', detail: '35.4492°N, 86.7889°W · 纳什维尔向南驱车约 1 小时即达' }
    ],
    photos: [
      { wiki: ['en', 'Fainting_goat'], backupQuery: 'Myotonic fainting goat Tennessee pasture', caption: '美国田纳西“晕倒羊”（Myotonic Goat）——一激动便四腿僵直倒地的神奇山羊' }
    ]
  },
  {
    id: 'wish-wuhan-onodera-coffee',
    lineId: 'line-bloom', lineOrder: 8,
    name: '武汉 · 小野寺咖啡',
    country: '中国', region: '湖北省武汉市洪山区 · 东湖植物园路52号',
    lat: 30.5445, lng: 114.4228, zoom: 15,
    source: 'user', category: 'festival',
    aesthetics: ['人文祭典'],
    work: '武汉东湖与植物园路片区独立咖啡馆打卡点',
    bgmScore: null,
    summary: '位于武汉洪山区植物园路52号、毗邻东湖风景区与武汉植物园一带的独立咖啡馆',
    intro: '坐落于湖北省武汉市洪山区植物园路 52 号的「小野寺咖啡」，紧邻东湖生态旅游风景区、中国科学院武汉植物园与大李文创村片区。适合在东湖漫步或游览武汉植物园时顺路探店小坐，出行前建议在地图或大众点评确认当日营业时间。',
    subSpots: [
      { name: '小野寺咖啡（洪山区植物园路52号）', detail: '30.5445°N, 114.4228°E · 毗邻东湖风景区与中国科学院武汉植物园，到店前可核对当日营业状态' }
    ],
    photos: []
  },

  // ==================== Line 10 ·【极夜烈火、万寿菊与迦勒底】(3) ====================
  {
    id: 'wish-shetland-uphellyaa',
    lineId: 'line-extremes', lineOrder: 1,
    name: '设得兰群岛 · 维京圣火节（Up Helly Aa）',
    country: '英国', region: '苏格兰极北 · 设得兰群岛勒威克（Lerwick）',
    lat: 60.1550, lng: -1.1450, zoom: 10,
    source: 'user', category: 'festival',
    aesthetics: ['人文祭典', '剑与魔法'],
    work: '北纬60°极夜千名维京战士高举火把焚毁龙头战船 · 联动 UK冬季 &《冰海战记》',
    bgmScore: 8,
    summary: '每年 1 月最后一个周二，近千支火把同时投向纯手工复刻的维京长船，冲天烈焰照亮北海黑夜',
    intro: '苏格兰本土以北 170 公里的设得兰群岛，每年 1 月底寒夜举行全欧洲最狂热的维京火祭 Up Helly Aa：身披锁子甲持盾斧的维京首领率千名火把队列穿过海港，最终千支火把齐投维京龙头战船，在战歌中将其化为灰烬！',
    subSpots: [
      { name: '勒威克海港火把巡游与焚船主会场', detail: '60.1550°N, 1.1450°W · 每年1月最后一个周二 19:30 点火' }
    ],
    photos: [
      { src: 'photos/wishlist/shetland-uphellyaa.jpg', caption: '苏格兰设得兰群岛维京圣火节——极夜千支火把焚烧维京龙头长船' }
    ]
  },
  {
    id: 'wish-mexico-muertos',
    lineId: 'line-extremes', lineOrder: 2,
    name: '瓦哈卡 & 瓜纳华托 · 墨西哥亡灵节',
    country: '墨西哥', region: '瓦哈卡州（Oaxaca）· 瓜纳华托山城',
    lat: 17.0614, lng: -96.7256, zoom: 10,
    source: 'user', category: 'festival',
    aesthetics: ['人文祭典', '消逝的文明·诸神遗迹'],
    work: '万寿菊花瓣引魂桥与墓园万千烛火狂欢 · Día de los Muertos',
    bgmScore: null,
    summary: '10月底至11月初，炽烈金黄的万寿菊铺满石板巷，墓园彻夜点亮烛海与骷髅盛装乐队共舞',
    intro: '每年 10 月 31 日—11 月 2 日，瓦哈卡与瓜纳华托全城搭起层叠祭坛，金黄万寿菊花瓣从街头铺进 Xoxocotlán 墓园，成千上万支蜡烛彻夜点亮，人们画着卡特里娜骷髅妆容在墓碑旁弹唱重逢（更可与北面米却肯州的亿万帝王蝶归魂谷同程串联！）。',
    subSpots: [
      { name: '瓦哈卡老城游行 & Xoxocotlán 烛光守夜墓园', detail: '17.0614°N, 96.7256°W · 10月31日—11月2日' }
    ],
    photos: [
      { src: 'photos/wishlist/mexico-muertos.jpg', caption: '墨西哥亡灵节——万寿菊花海、烛光墓园与骷髅彩绘盛典' }
    ]
  },
  {
    id: 'wish-antarctica-chaldea',
    lineId: 'line-extremes', lineOrder: 3,
    name: '南极大陆 · 菲尼斯·迦勒底极地探索',
    country: '南极洲', region: '南极半岛与内陆冰原（FGO 海拔6000m迦勒底意象）',
    lat: -65.2450, lng: -64.2500, zoom: 5,
    source: 'user', category: 'acg',
    aesthetics: ['巨大·无机质', '圣地巡礼'],
    work: '《Fate/Grand Order》人理续存保障机构·菲尼斯·迦勒底（Chaldea）',
    bgmScore: 9,
    summary: '跨越狂暴德雷克海峡登陆地球最南端的纯白无人大陆，在暴风雪与蔚蓝冰山间仰望人理星空',
    intro: '在《Fate/Grand Order》（你给 2023 纪念动画打出 9/10、巴比伦尼亚与所罗门 8/10）的世界观里，守护人类史未来的「人理续存保障机构·菲尼斯·迦勒底」便孤悬于南极大陆海拔 6000 米的暴风雪绝顶之上——无论是第 1 部仰望晴朗蓝天的终章，还是第 2 部序章踏出基地面对冻结白纸化地球的绝望与决意，南极都是型月旅人心中最浪漫的终极坐标。\n现实中从世界最南端城市乌斯怀亚登船，穿越西风带德雷克海峡，踏上天堂湾（Paradise Bay）与勒梅尔水道万年未化的纯白冰原，四周唯有企鹅、鲸群裂冰声与彻底隔绝人类文明的浩瀚寂静。',
    subSpots: [
      { name: '南极半岛天堂湾（Paradise Bay）& 勒梅尔冰山海峡登陆点', detail: '65.2450°S, 64.2500°W · 每年 11 月—次年 3 月南半球夏季破冰船航季，乌斯怀亚登船' }
    ],
    photos: [
      { wiki: ['en', 'Lemaire_Channel'], backupQuery: 'Antarctica Paradise Bay Lemaire Channel icebergs', caption: '南极大陆纯白冰原与冰山海峡——《FGO》人理续存保障机构·迦勒底所在的世界尽头' }
    ]
  },

  // ==================== Line 11 ·【坡道、旧校舍与濑户海风】(14) ====================
  {
    id: 'wish-saekano',
    lineId: 'line-acg-jp', lineOrder: 1,
    name: '高田のぞき坂 & コメダ珈琲店保谷店',
    country: '日本', region: '东京都丰岛区高田 · 西东京市保谷',
    lat: 35.7166, lng: 139.7145, zoom: 13,
    source: 'user', category: 'acg',
    aesthetics: ['圣地巡礼'],
    work: '《路人女主的养成方法》系列',
    bgmScore: 8,
    summary: '樱花坡道捡起贝雷帽的命运陡坡「窥视坂」与伦也、英梨梨推敲剧本的咖啡店原型',
    intro: '东京都丰岛区高田的极限陡坡「のぞき坂」正是伦也在樱花纷飞的坡道遇见加藤惠的起点；西东京市「コメダ珈琲店 保谷店」则是伦也与英梨梨、加藤惠反复商讨同人游戏企划的实景店（2026-11-11 重看笔记：“重看 8/10，这个8分给英梨梨”）。',
    subSpots: [
      { name: '高田のぞき坂', detail: '35.7166°N, 139.7145°E · 都电荒川线鬼子母神前站步行 4 分钟' },
      { name: 'コメダ珈琲店 保谷店', detail: '35.7478°N, 139.5677°E · 西武池袋线保谷站北口步行 6 分钟' }
    ],
    photos: [
      { src: 'photos/wishlist/saekano-1.jpg', caption: '东京高田「のぞき坂」陡坡实景——《路人女主》樱花坡道名场面原型' },
      { src: 'photos/wishlist/saekano-2.jpg', caption: 'コメダ珈琲店经典红丝绒卡座与冰与火甜点' }
    ]
  },
  {
    id: 'wish-akihabara-steinsgate',
    lineId: 'line-acg-jp', lineOrder: 2,
    name: '秋叶原 Radio 会馆 & 柳森神社',
    country: '日本', region: '东京都千代田区外神田 · 秋叶原',
    lat: 35.6980, lng: 139.7719, zoom: 15,
    source: 'bgm', category: 'acg',
    aesthetics: ['圣地巡礼'],
    work: '《命运石之门》&《命运石之门 0》',
    bgmScore: 8,
    summary: '时间机器贯穿楼顶的秋叶原 Radio 会馆与未来道具研究所后巷，世界线收束之地',
    intro: '《命运石之门》（Bangumi 8/10）将盛夏秋叶原化作时间跳跃的永恒舞台：电器街口外的 Radio 会馆、神田川万世桥旁的柳森神社（琉华子神社原型）与芳林公园分毫未变。',
    subSpots: [
      { name: '秋叶原 Radio 会馆 & 柳森神社', detail: '35.6980°N, 139.7719°E · JR 秋叶原站电器街口直达' }
    ],
    photos: [
      { src: 'photos/wishlist/akihabara-sg.jpg', caption: '东京秋叶原电器街与 Radio 会馆——《命运石之门》世界线原点' }
    ]
  },
  {
    id: 'wish-shimokita-bocchi',
    lineId: 'line-acg-jp', lineOrder: 3,
    name: '下北泽 SHELTER（结束乐队 STARRY）',
    country: '日本', region: '东京都世田谷区北泽（下北泽）',
    lat: 35.6615, lng: 139.6683, zoom: 15,
    source: 'bgm', category: 'acg',
    aesthetics: ['圣地巡礼'],
    work: '《孤独摇滚！》',
    bgmScore: 8,
    summary: '波奇酱与结束乐队驻场的地下摇滚 Livehouse「STARRY」1:1 原型',
    intro: '距离下北泽站步行 3 分钟的传奇地下 Livehouse「下北沢 SHELTER」，从红白招牌到狭窄地下阶梯被《孤独摇滚！》（8/10）1:1 复刻为 STARRY，顺路可逛本多剧场与涂鸦墙。',
    subSpots: [
      { name: '下北沢 SHELTER & 本多剧场十字路口', detail: '35.6615°N, 139.6683°E · 买一张夜场独立乐队演出票入内体验最地道' }
    ],
    photos: [
      { src: 'photos/wishlist/shimokita-bocchi.jpg', caption: '东京下北泽独立摇滚街区——《孤独摇滚！》圣地' }
    ]
  },
  {
    id: 'wish-tokyotower-revue',
    lineId: 'line-acg-jp', lineOrder: 4,
    name: '东京塔与芝公园（舞台少女摘星之塔）',
    country: '日本', region: '东京都港区芝公园',
    lat: 35.6586, lng: 139.7454, zoom: 14,
    source: 'bgm', category: 'acg',
    aesthetics: ['圣地巡礼'],
    work: '《剧场版 少女☆歌剧 Revue Starlight》',
    bgmScore: 9,
    summary: '爱城华恋与神乐光命运约定的 333 米绯红钢铁巨塔',
    intro: '在 9/10 神作《剧场版 少女☆歌剧 Revue Starlight》中贯穿全篇的「摘星之塔」——夜幕下从芝公园与赤羽桥十字路口仰望璀璨橙红钢铁巨塔，重温舞台少女的闪耀约定。',
    subSpots: [
      { name: '东京塔正下方阶梯 & 芝公园 4 号地步道', detail: '35.6586°N, 139.7454°E · 赤羽桥站出站即是经典仰角' }
    ],
    photos: [
      { src: 'photos/wishlist/tokyotower-revue.jpg', caption: '夜幕中的东京塔——9分作《少女☆歌剧 Revue Starlight》约定之塔' }
    ]
  },
  {
    id: 'wish-mahoyo',
    lineId: 'line-acg-jp', lineOrder: 5,
    name: '镰仓文学馆 & 旧岩崎邸 & 入间西洋馆',
    country: '日本', region: '神奈川镰仓 · 东京台东区 · 埼玉入间市',
    lat: 35.3119, lng: 139.5393, zoom: 12,
    source: 'user', category: 'acg',
    aesthetics: ['圣地巡礼', '剑与魔法'],
    work: '《魔法使之夜》（TYPE-MOON）',
    bgmScore: null,
    summary: '久远寺有珠与苍崎青子同居的「久远寺邸」三大国宝级近代西洋馆原型',
    intro: '三咲町森林深处的「久远寺邸」由首都圈三座近代洋馆拼合而成：神奈川「镰仓文学馆」（正门与山坡外观）、东京上野「旧岩崎邸庭园」（玄关与庭院）、埼玉入间「旧石川组制丝西洋馆」（哥特木雕大厅与二楼楼梯）。',
    subSpots: [
      { name: '镰仓文学馆（正门原型）', detail: '35.3119°N, 139.5393°E · 江之电由比滨站步行 7 分钟' },
      { name: '东京旧岩崎邸庭园 & 埼玉入间西洋馆', detail: '35.7095°N, 139.7676°E（汤岛站） / 35.8384°N, 139.3910°E（入间市站）' }
    ],
    photos: [
      { src: 'photos/wishlist/mahoyo-1.jpg', caption: '神奈川镰仓文学馆——《魔法使之夜》久远寺邸正门与山丘洋馆原型' },
      { src: 'photos/wishlist/mahoyo-2.jpg', caption: '东京旧岩崎邸庭园——久远寺邸玄关与西洋回廊原型' }
    ]
  },
  {
    id: 'wish-sakura-no-uta',
    lineId: 'line-acg-jp', lineOrder: 6,
    name: '山梨山高神代樱 & 彦根埋木舍 & 国立樱花通',
    country: '日本', region: '山梨县北杜市实相寺 · 滋贺县彦根市 · 东京都国立市',
    lat: 35.7819, lng: 138.3564, zoom: 11,
    source: 'user', category: 'acg',
    aesthetics: ['圣地巡礼'],
    work: '《樱之诗 −于樱之森上飞舞−》&『サクラノ刻』',
    bgmScore: 9,
    summary: '你给游戏与两张OST全部打出 9/10！两千年巨樱《横卧的樱》原型与夏目屋敷古宅',
    intro: '枕社殿堂级名作《樱之诗 −于樱之森上飞舞−》（游戏与 OST 均获你 9/10 高分）三大现实圣地：\n① 作中灵魂遗作名画草薙健一郎《横卧的樱（横たわる櫻）》，原型正是山梨县北杜市实相寺境内树龄逾 **2000 年**的日本第一巨樱「山高神代樱」（苍劲扭曲的巨大古干由木桩托举，背后直面南阿尔卑斯雪山，每年4月上旬满开如神迹）；② 直哉与夏目蓝居住的「夏目屋敷」原型为滋贺县彦根市的武家古宅「埋木舍」；③ 日常通学的歌木站与樱花坡道氛围则取自东京都国立市「谷保站与大学通樱花大道」。',
    subSpots: [
      { name: '山梨北杜 · 实相寺「山高神代樱」（《横卧的樱》原型）', detail: '35.7819°N, 138.3564°E · JR中央本线日野春站乘车15分钟，4月上旬盛放' },
      { name: '滋贺彦根 · 埋木舍（夏目屋敷原型）& 东京国立市谷保站', detail: '35.2783°N, 136.2536°E（彦根站旁） / 35.6812°N, 139.4466°E（JR南武线谷保站）' }
    ],
    photos: [
      { wiki: ['ja', '山高神代ザクラ'], backupQuery: 'Yamataka Jindai Sakura Yamanashi cherry blossom', caption: '山梨县树龄两千年「山高神代樱」——9分神作《樱之诗》名画《横卧的樱》原型' }
    ]
  },
  {
    id: 'wish-hakone-eva',
    lineId: 'line-acg-jp', lineOrder: 7,
    name: '箱根芦之湖与大涌谷（第3新东京市）',
    country: '日本', region: '神奈川县足柄下郡箱根町',
    lat: 35.2041, lng: 139.0256, zoom: 12,
    source: 'bgm', category: 'acg',
    aesthetics: ['圣地巡礼', '巨大·无机质'],
    work: '《新世纪福音战士》系列',
    bgmScore: 10,
    summary: 'NERV 地下都市与屋岛作战阳电子炮狙击舞台，芦之湖、仙石原与硫磺大涌谷',
    intro: '《EVA》「第3新东京市」完整构建在箱根破火山口之上：箱根汤本站、仙石原芒草草原、大涌谷滚滚硫磺蒸汽山谷与迎击第五使徒雷米尔的芦之湖山脊一应俱全。',
    subSpots: [
      { name: '箱根汤本站 · 大涌谷 · 芦之湖水上鸟居', detail: '35.2041°N, 139.0256°E · 登山电车+空中缆车+海贼船环线' }
    ],
    photos: [
      { src: 'photos/wishlist/hakone-eva.jpg', caption: '神奈川箱根芦之湖远眺富士山——《EVA》第3新东京市舞台' }
    ]
  },
  {
    id: 'wish-yurucamp',
    lineId: 'line-acg-jp', lineOrder: 8,
    name: '本栖湖浩庵露营场 & 朝雾高原',
    country: '日本', region: '山梨县身延町 · 静冈县富士宫 · 长野县信州',
    lat: 35.4728, lng: 138.5753, zoom: 10,
    source: 'user', category: 'acg',
    aesthetics: ['圣地巡礼'],
    work: '《摇曳露营△》',
    bgmScore: 8,
    summary: '志摩凛与抚子冬夜初遇的千元日钞富士山湖畔营地，串联山梨·静冈·长野',
    intro: '《摇曳露营△》（8/10）第1话凛与抚子篝火吃泡面的「本栖湖浩庵露营场」（旧版千圆纸币逆富士机位），向南串联静冈朝雾高原麓露营场，向北深入长野雾ヶ峰与高远城。',
    subSpots: [
      { name: '本栖湖浩庵露营场 & 朝雾高原麓露营场', detail: '35.4728°N, 138.5753°E · 秋冬晴朗清晨最易拍到无风逆富士' }
    ],
    photos: [
      { src: 'photos/wishlist/yurucamp.jpg', caption: '山梨本栖湖仰望白雪富士山——《摇曳露营△》第1话核心营地' }
    ]
  },
  {
    id: 'wish-grandblue',
    lineId: 'line-acg-jp', lineOrder: 9,
    name: '伊豆半岛 · 伊东与城崎海岸潜点',
    country: '日本', region: '静冈县伊东市 · 富户伊豆海洋公园',
    lat: 34.8923, lng: 139.1369, zoom: 11,
    source: 'user', category: 'acg',
    aesthetics: ['圣地巡礼'],
    work: '《碧蓝之海》',
    bgmScore: 8,
    summary: '北原伊织与潜水社「Peek a Boo」夏日舞台，联动你的 OW+AOW 潜水计划',
    intro: '《碧蓝之海》（8/10）舞台取自静冈县伊豆半岛东岸：大室山火山熔岩入海形成的城崎海岸门胁吊桥与澄澈碧蓝的「伊豆海洋公园（IOP）」潜点，可直接下海体验黑潮暖流鱼群！',
    subSpots: [
      { name: '城崎海岸门胁吊桥 & 伊豆海洋公园潜点', detail: '34.8923°N, 139.1369°E · 伊豆急行城崎海岸站步行即达' }
    ],
    photos: [
      { src: 'photos/wishlist/grandblue.jpg', caption: '静冈伊豆半岛城崎海岸——《碧蓝之海》火山断崖与碧海潜点' }
    ]
  },
  {
    id: 'wish-shiga-keion',
    lineId: 'line-acg-jp', lineOrder: 10,
    name: '滋贺 · 丰乡小学校旧校舍群',
    country: '日本', region: '滋贺县犬上郡丰乡町（琵琶湖东岸）',
    lat: 35.2043, lng: 136.2323, zoom: 14,
    source: 'user', category: 'acg',
    aesthetics: ['圣地巡礼'],
    work: '《轻音少女》全系列',
    bgmScore: 9,
    summary: '龟兔赛跑铜扶手木楼梯直通三楼「放学后茶会」轻音部音乐室 1:1 原型',
    intro: '建筑师沃里斯于 1937 年设计的纯白西式校舍「丰乡町立丰乡小学校旧校舍群」，是 9/10 神作《轻音少女》樱丘高中的 1:1 实景原型！免费对外开放，扶手上镶着龟兔铜像的木楼梯尽头便是摆满茶具与黑板涂鸦的三楼轻音部活动室。',
    subSpots: [
      { name: '旧校舍三楼音乐室（轻音部活动室）& 酬德纪念馆（周边展区）', detail: '35.2043°N, 136.2323°E · 近江铁道丰乡站步行 10 分钟' }
    ],
    photos: [
      { src: 'photos/wishlist/shiga-keion.jpg', caption: '滋贺县丰乡小学校旧校舍——9分神作《轻音少女》樱丘高中原型' }
    ]
  },
  {
    id: 'wish-kasamatsu',
    lineId: 'line-acg-jp', lineOrder: 11,
    name: '岐阜 · 笠松赛马场（小栗帽故乡）',
    country: '日本', region: '岐阜县羽岛郡笠松町',
    lat: 35.3694, lng: 136.7641, zoom: 14,
    source: 'user', category: 'acg',
    aesthetics: ['圣地巡礼'],
    work: '《赛马娘 芦毛灰姑娘》·《新时代之门》',
    bgmScore: 9,
    summary: '芦毛怪物小栗帽走向中央传说的起点马场，「不管什么时候看到oguri的故事总是会掉眼泪」',
    intro: '木曾川畔的「笠松赛马场」是传奇名驹小栗帽出道的地方马场，正门伫立小栗帽等身铜像，保留着极具昭和烟火气的沙地赛道与老看台，零距离感受铁蹄震地的热血（完美呼应你的人生 TODO「赛马」）。',
    subSpots: [
      { name: '笠松赛马场小栗帽铜像 & 终点看台', detail: '35.3694°N, 136.7641°E · 名铁笠松站步行 5 分钟' }
    ],
    photos: [
      { src: 'photos/wishlist/kasamatsu.jpg', caption: '岐阜笠松赛马场——芦毛传奇小栗帽梦开始的地方' }
    ]
  },
  {
    id: 'wish-shirakawago',
    lineId: 'line-acg-jp', lineOrder: 12,
    name: '飞驒 · 白川乡合掌村（雏见泽原型）',
    country: '日本', region: '岐阜县大野郡白川村 · 荻町',
    lat: 36.2578, lng: 136.9062, zoom: 13,
    source: 'user', category: 'acg',
    aesthetics: ['圣地巡礼'],
    work: '《寒蝉鸣泣之时》',
    bgmScore: 8,
    summary: '深山合掌造茅草屋聚落，古手神社（白川八幡神社）与荻町城迹俯瞰全景 1:1 复刻',
    intro: '《寒蝉鸣泣之时》（8/10）雏见泽村实景原型：庄川吊桥、挂满寒蝉痛绘马的白川八幡神社（古手神社）、圭一与礼奈走过的乡间分岔道，无论盛夏蝉鸣还是冬雪点灯都极具氛围。',
    subSpots: [
      { name: '荻町城迹展望台 & 白川八幡神社', detail: '36.2578°N, 136.9062°E · 高山或金泽乘高速巴士 1 小时直达' }
    ],
    photos: [
      { src: 'photos/wishlist/shirakawago.jpg', caption: '岐阜白川乡合掌造集落——《寒蝉鸣泣之时》雏见泽村原型' }
    ]
  },
  {
    id: 'wish-kobe-fate',
    lineId: 'line-acg-jp', lineOrder: 13,
    name: '神户大桥 & 北野异人馆（冬木市原型）',
    country: '日本', region: '兵库县神户市中央区 · 港岛 & 北野町',
    lat: 34.6716, lng: 135.2022, zoom: 13,
    source: 'user', category: 'acg',
    aesthetics: ['圣地巡礼', '剑与魔法'],
    work: '《Fate/Zero》·《Fate/stay night [UBW / HF]》',
    bgmScore: 8,
    summary: '横跨神户港的赤红色双层钢铁拱桥「冬木大桥」原型，连同远坂邸风见鸡之馆',
    intro: '连接新港与港岛的赤红双层钢拱桥「神户大桥」正是圣杯战争夜战核心地标「冬木大桥」，港岛北公园仰拍机位与神户北野异人馆街（远坂凛宅邸风见鸡之馆/萌黄之馆、间桐坡道荷兰坂）一步到位。',
    subSpots: [
      { name: '港岛北公园（冬木大桥仰拍位）& 北野风见鸡之馆', detail: '34.6689°N, 135.2036°E · 港口线中公园站步行 8 分钟' }
    ],
    photos: [
      { src: 'photos/wishlist/kobe-fate.jpg', caption: '兵库神户大桥——《Fate》圣杯战争冬木大桥赤红钢拱原型' }
    ]
  },
  {
    id: 'wish-seto-hanayome',
    lineId: 'line-acg-jp', lineOrder: 14,
    name: '香川 · 仁尾海滩 & 父母滨（濑户内海）',
    country: '日本', region: '香川县三丰市仁尾町 · 观音寺市（四国濑户内海岸）',
    lat: 34.1872, lng: 133.6453, zoom: 12,
    source: 'user', category: 'acg',
    aesthetics: ['圣地巡礼'],
    work: '《濑户的花嫁》TV & OVA',
    bgmScore: 7,
    summary: '永澄溺水被人鱼濑户灿救起的「三尾海滩」原型，紧邻“日本天空之镜”濑户内海落日父母滨',
    intro: '充满夏日欢笑与温柔记忆的老番《濑户的花嫁》（TV 与 OVA 你均打了 7/10），男主角满潮永澄回四国奶奶家过暑假、在第 1 话海水浴溺水被人鱼少女濑户灿救起的命运海岸「三尾海滩」，现实原型就是香川县三丰市的「仁尾阳光海滩（仁尾サンビーチ）」！附近的「曾保浦之谷」公交站与两人逛夏祭的「七宝稻荷神社」也保留着原汁原味的濑户内海渔町风情。\n更绝的是，仁尾海滩南侧紧挨着的「父母滨（父母ヶ浜）」，退潮黄昏时整片长达一公里的浅滩化作无风镜面，将濑户内海的漫天绯红晚霞与群岛剪影倒映如画，向西还能顺着四国铁道前往爱媛猫岛（青岛）！',
    subSpots: [
      { name: '仁尾阳光海滩（三尾海滩原型）& 父母滨落日天空之镜', detail: '34.1872°N, 133.6453°E · JR 诧间站乘社区巴士至父母滨/仁尾，退潮叠合日落时分绝美' },
      { name: '观音寺市 · 七宝稻荷神社', detail: '第2话与第23话永澄与濑户灿夏日祭典神社原型' }
    ],
    photos: [
      { wiki: ['ja', '父母ヶ浜'], backupQuery: 'Chichibugahama sunset mirror Kagawa Seto Inland Sea', caption: '香川县仁尾町·父母滨——《濑户的花嫁》圣地海岸与濑户内海落日天空之镜' }
    ]
  },
  {
    id: 'wish-shimonada',
    lineId: 'line-acg-jp', lineOrder: 15,
    name: '伊予 · 下滩站（濑户内海无人海边车站）',
    country: '日本', region: '爱媛县伊予市双海町（予赞线 · 紧邻猫岛青岛！）',
    lat: 33.6552, lng: 132.5892, zoom: 14,
    source: 'user', category: 'acg',
    aesthetics: ['圣地巡礼'],
    work: '《青春18车票》传奇海报站 · 孤悬碧海与落日边缘的无人木造月台',
    bgmScore: null,
    summary: '敞开式老木遮雨棚与蓝色长椅背后一步之遥便是无垠濑户内海，黄昏晚霞把整座月台染成琥珀色',
    intro: 'JR 四国予赞线上的无人小站「下滩站（下灘駅）」，曾因填海公路尚未修通前海浪直接拍打月台基石而被誉为“日本离海最近的车站”，三次登上 JR「青春18车票」纪实海报，也是《境界的彼方》等无数动画与电影中海边孤寂月台的灵感化身。\n更绝的是它的地理顺路度：从四国高松/香川《濑户的花嫁》仁尾父母滨乘予赞线向西直达下滩站，再往西坐仅 20 分钟到伊予长浜港就能直接乘船登临**爱媛猫岛（青岛）**——濑户内海黄金三连击一线贯通！',
    subSpots: [
      { name: '下滩站孤悬海景长椅 & 滩町海岸水下铁轨（千与千寻感）', detail: '33.6552°N, 132.5892°E · 松山站乘予赞线普通列车约 50 分钟，日落前1小时最佳' }
    ],
    photos: [
      { wiki: ['en', 'Shimonada_Station'], backupQuery: 'Shimonada Station Seto Inland Sea sunset', caption: '爱媛县下滩站——直面濑户内海落日的传奇无人海边月台' }
    ]
  },
  {
    id: 'wish-suwa-lake',
    lineId: 'line-acg-jp', lineOrder: 16,
    name: '信州 · 诹访湖与立石公园（糸守湖原型）',
    country: '日本', region: '长野县诹访市（新海诚故乡信州群山盆地）',
    lat: 36.0543, lng: 138.1205, zoom: 12,
    source: 'user', category: 'acg',
    aesthetics: ['圣地巡礼'],
    work: '《你的名字。》(Bangumi 7/10) 陨石湖「糸守町」原型 & 冬季神迹「御神渡」冰裂脊',
    bgmScore: 7,
    summary: '登上立石公园高台俯瞰整座圆弧形高山湖泊与沿岸万家灯火，完美复刻彗星划落糸守湖的黄昏（逢魔之时）',
    intro: '长野县出身的新海诚在《你的名字。》（Bangumi 7/10）中塑造的灵魂舞台「糸守湖」，其地理构图直接取自群山环抱的信州第一大湖「诹访湖（諏訪湖，Suwa-ko）」！傍晚时分登上湖东北侧半山腰的「立石公园」展望台，圆润的湖岸线、环湖璀璨街灯与天边紫橙渐变的“逢魔之时（かたわれ時）”霞光与电影海报分毫不差。\n此外，严冬诹访湖全面结冰时，昼夜温差会使厚冰轰鸣崩裂并向上挤压隆起一道横贯全湖数公里的冰山脊，古人敬畏地称之为建御名方神踏冰寻妻的「御神渡（おみわたり）」神迹！（且与《摇曳露营△》长野信州线紧邻）。',
    subSpots: [
      { name: '立石公园展望台（糸守湖全景机位）& 诹访大社四社巡礼', detail: '36.0543°N, 138.1205°E · JR 上诹访站步行上山约 25 分钟或乘车 7 分钟' }
    ],
    photos: [
      { wiki: ['en', 'Lake_Suwa'], backupQuery: 'Lake Suwa Tateishi Park twilight Nagano', caption: '长野县诹访湖（立石公园俯瞰）——《你的名字。》糸守湖原型' }
    ]
  },
  {
    id: 'wish-kamishikimi',
    lineId: 'line-acg-jp', lineOrder: 17,
    name: '阿苏 · 上色见熊野座神社（《萤火之森》圣地）',
    country: '日本', region: '熊本县阿苏郡高森町（九州阿苏火山南麓深林）',
    lat: 32.8364, lng: 131.1481, zoom: 14,
    source: 'user', category: 'acg',
    aesthetics: ['圣地巡礼', '剑与魔法'],
    work: '《萤火之森》与《夏目友人帐》异界森林参道 1:1 实景',
    bgmScore: null,
    summary: '参天古杉遮蔽天日的幽暗石阶两旁伫立近百座覆满厚绿青苔的石灯笼，尽头是穿透山崖的巨型风洞',
    intro: '隐藏在熊本县阿苏外轮山幽深杉木林中的「上色见熊野座神社」，是一处踏入鸟居瞬间气温骤降、仿佛真的误入妖怪与山神结界的秘境——绿川幸《萤火之森》里戴狐狸面具的银坐在石阶上等待萤的名场面便完全复刻于此！\n沿着笔直陡峭的 260 级石阶拾级而上，两侧近百座长满翠绿绒苔的古老石灯笼在林间晨雾与丁达尔光束中静默延伸；穿过神殿继续向上攀登，山崖绝壁上赫然洞开一个高宽逾 10 米的天然穿山巨洞「穿户岩（うげといわ）」，从幽暗森林仰望风洞透出的天光，神域灵气扑面而来。',
    subSpots: [
      { name: '百座青苔石灯笼参道 & 山顶巨型风洞「穿户岩」', detail: '32.8364°N, 131.1481°E · 南阿苏铁道高森站乘巴士10分钟，雨后薄雾青苔绿意最绝' }
    ],
    photos: [
      { wiki: ['ja', '上色見熊野座神社'], backupQuery: 'Kamishikimi Kumanoimasu Shrine moss lanterns Kumamoto', caption: '熊本阿苏上色见熊野座神社——《萤火之森》覆满青苔的百座石灯笼异界参道' }
    ]
  },

  // ==================== 精挑新增 · Bangumi 全媒体圣地巡礼 (16) ====================
  {
    id: 'wish-sekiro-engyoji',
    lineId: 'line-acg',
    extraLines: ['line-fantasy'],
    name: '姬路 · 书写山圆教寺 & 会津若松城',
    country: '日本', region: '兵库县姬路市书写山 · 福岛县会津若松市',
    lat: 34.8913, lng: 134.6582, zoom: 14,
    source: 'bgm', category: 'acg',
    aesthetics: ['圣地巡礼', '剑与魔法'],
    work: '《只狼：影逝二度 SEKIRO》',
    workKey: '只狼：影逝二度',
    bgmScore: 7,
    summary: '深山古杉林间悬空木构巨刹「仙峰寺」氛围原型，连同苇名一族历史故地会津鹤城',
    intro: '被誉为“西之比叡山”的千年天台宗古刹「书写山圆教寺」，深藏在兵库县姬路北郊浓密参天杉林之中：由巨大原木支柱在陡峭岩壁上凌空架起的舞台造「摩尼殿」与三之堂，庄严幽暗的修验道气场几乎 1:1 复现了《只狼：影逝二度》（Bangumi 7/10）中的「金刚山 仙峰寺」（亦是《最后的武士》实景地）！\n而在北国福岛县，覆满冬雪的赤瓦五层天守「会津若松城（鹤城）」及战国会津大名「芦名氏（葦名氏）」故地，正是作中“苇名国”与剑圣苇名一心的历史渊源本尊。',
    subSpots: [
      { name: '书写山圆教寺 · 摩尼殿与三之堂木构群', detail: '34.8913°N, 134.6582°E · 姬路站乘巴士30分钟转书写山缆车登顶' },
      { name: '福岛 · 会津若松城（鹤城 · 苇名氏故地）', detail: '37.4877°N, 139.9298°E · 全日本唯一赤瓦天守，冬季落雪极具苇名城凛冽气魄' }
    ],
    photos: [
      { wiki: ['ja', '圓教寺'], backupQuery: 'Engyoji Temple Himeji Maniden wooden', caption: '兵库姬路书写山圆教寺摩尼殿——《只狼》金刚山仙峰寺深山悬造古刹原型' },
      { wiki: ['en', 'Aizuwakamatsu_Castle'], backupQuery: 'Tsuruga Castle Aizuwakamatsu winter snow', caption: '福岛会津若松城（鹤城）——「苇名国」历史原型会津芦名氏故地' }
    ]
  },
  {
    id: 'wish-raging-loop',
    lineId: 'line-acg',
    name: '中之条 · 六合赤岩集落与奥四万水坝秘境',
    country: '日本', region: '群马县吾妻郡中之条町（上信越深山民俗聚落）',
    lat: 36.5844, lng: 138.6347, zoom: 12,
    source: 'bgm', category: 'acg',
    aesthetics: ['圣地巡礼'],
    work: '《人狼村之谜（レイジングループ）》',
    workKey: '人狼村之谜',
    bgmScore: 9,
    summary: '群山迷雾封锁的传统养蚕木造集落与水坝沉没村传说，「藤良村·休水」民俗考据地',
    intro: '在你日记里给出 9/10 高分的民俗悬疑神作《人狼村之谜（Raging Loop）》，舞台设定在群马至岐阜交界深山里浓雾锁闭、保留着「黄泉忌之宴」信仰与水坝沉村传说的「藤良村·休水集落」。\n位于群马县吾妻溪谷深处的重传建古村「六合·赤岩集落」与紧邻钴蓝水库的「奥四万湖水坝 / 八场水坝（真实沉没水底的川原汤旧村）」，完整保留了与世隔绝的山间三层木造民家、石造道祖神与峡谷夜雾氛围，走入村口瞬间梦回房石阳明骑摩托迷途入村的序幕。',
    subSpots: [
      { name: '中之条町 · 赤岩重要传统建造物群保存地区', detail: '36.5844°N, 138.6347°E · 山谷斜坡层叠古民家与汤本家住宅' },
      { name: '奥四万湖巨型水坝 & 八场水坝沉没村遗址', detail: '36.6953°N, 138.7781°E · 深山钴蓝色四万川水库与雾锁山道' }
    ],
    photos: [
      { wiki: ['ja', '赤岩_(中之条町)'], backupQuery: 'Akaiwa village Gunma traditional', caption: '群马县中之条町深山古集落——《人狼村之谜》休水村落民俗氛围原型' }
    ]
  },
  {
    id: 'wish-aobuta-shonan',
    lineId: 'line-acg',
    name: '湘南 · 七里滨海岸 & 藤泽站 & 江之岛',
    country: '日本', region: '神奈川县镰仓市七里滨 · 藤泽市（江之电沿线）',
    lat: 35.3060, lng: 139.5105, zoom: 13,
    source: 'bgm', category: 'acg',
    aesthetics: ['圣地巡礼'],
    work: '《青春猪头少年》全系列',
    workKey: '青春猪头少年',
    anitabiId: 240038,
    bgmScore: 8,
    summary: '咲太与麻衣学姐看海的七里滨沙滩、江之电镰仓高校前道口与藤泽天桥，Anitabi逾千点圣地',
    intro: '《青春猪头少年不会梦到兔女郎学姐》全系列（Bangumi 8/10，Anitabi 收录逾 1100 处实景机位！）将整条湘南海岸线拍成了青春代名词：从咲太与樱岛麻衣日常上下学的「JR/小田急藤泽站」与御所见公园（双叶理央吃可丽饼长椅），乘复古绿皮江之电一路穿行至波光粼粼的「七里滨海岸」（ED 女主们赤足漫步的浅滩与峰原高中原型七里滨高校），再到江之岛展望灯塔（同时也是《孤独摇滚！》江之岛回取景地！）。',
    subSpots: [
      { name: '七里滨海岸 & 江之电七里滨站（峰原高中前）', detail: '35.3060°N, 139.5105°E · 晴天傍晚可同时拍到江之岛与海面远方的富士山剪影' },
      { name: '藤泽站北口天桥 & 江之岛海烛展望灯塔', detail: '35.3388°N, 139.4875°E（藤泽站） / 35.2996°N, 139.4789°E（江之岛）' }
    ],
    photos: [
      { wiki: ['en', 'Shichirigahama'], backupQuery: 'Shichirigahama beach Enoshima Mount Fuji sunset', caption: '神奈川湘南七里滨海岸远眺江之岛——《青春猪头少年》核心海滨舞台' }
    ]
  },
  {
    id: 'wish-durarara-ikebukuro',
    lineId: 'line-acg',
    name: '池袋 · Sunshine 60 通 & 西口公园',
    country: '日本', region: '东京都丰岛区东池袋 · 西池袋',
    lat: 35.7297, lng: 139.7155, zoom: 15,
    source: 'bgm', category: 'acg',
    aesthetics: ['圣地巡礼'],
    work: '《无头骑士异闻录 Durarara!!》',
    workKey: '无头骑士异闻录',
    anitabiId: 2463,
    bgmScore: 8,
    summary: '塞尔提黑色机车呼啸穿过霓虹人潮、静雄拔起自动贩卖机的池袋街头群像舞台',
    intro: '成田良悟笔下最酷的东京街头都市奇谭《无头骑士异闻录》（Bangumi 8/10，Anitabi 88 处机位）：从东口人潮汹涌的「Sunshine 60 通（サンシャイン60通り）」、旧东急 Hands 前天桥、中池袋公园，到西口剧场广场「池袋西口公园」，几乎每一个十字路口、每一处地下通道出口与霓虹招牌都与动画 OP 分镜严丝合缝，入夜华灯初上戴上耳机放一首《裏切りの夕焼け》，整座池袋瞬间化作非日常剧场。',
    subSpots: [
      { name: 'Sunshine 60 通十字路口 & 旧剧场天桥夕阳机位', detail: '35.7297°N, 139.7155°E · JR 池袋站东口 35 号出口直达' },
      { name: '池袋西口公园（GLOBAL RING）', detail: '35.7302°N, 139.7092°E · 池袋站西口出站即是' }
    ],
    photos: [
      { wiki: ['ja', 'サンシャイン60通り'], backupQuery: 'Ikebukuro Sunshine 60 Street night neon Tokyo', caption: '东京丰岛区池袋 Sunshine 60 通——《无头骑士异闻录》街头群像核心舞台' }
    ]
  },
  {
    id: 'wish-jjk-shibuya',
    lineId: 'line-acg',
    name: '涩谷 · 站前全向十字路口 & 道玄坂',
    country: '日本', region: '东京都涩谷区道玄坂 · 神宫前',
    lat: 35.6595, lng: 139.7005, zoom: 15,
    source: 'bgm', category: 'acg',
    aesthetics: ['圣地巡礼'],
    work: '《咒术回战 怀玉·玉折 / 涩谷事变》',
    workKey: '咒术回战',
    anitabiId: 369304,
    bgmScore: 8,
    summary: '10月31日万圣夜「帐」降临的东京心脏，从八公口全向十字路口一路激战至副都心线地下月台',
    intro: 'MAPPA 以近乎变态的城市测绘精度，在《咒术回战 第二季·涩谷事变》（Bangumi 8/10，Anitabi 153 处机位）中将整座涩谷站立体迷宫化作决战沙盘：全球人流量最大的「涩谷全向十字路口（Scramble Crossing）」、109 大楼分岔的道玄坂、五条悟被狱门疆封印的地下五层「副都心线涩谷站月台（ヒカリエ改札口）」，以及宿傩「伏魔御厨子」瞬间夷平半径 140 米的圆山町街区，每一级扶梯转角都能在现场一一复盘！',
    subSpots: [
      { name: '涩谷 Scramble 十字路口 & SHIBUYA SKY 俯瞰「帐」全景', detail: '35.6595°N, 139.7005°E · 登上 229m 高空露台可完整俯瞰半径140米涩谷结界范围' },
      { name: '东京Metro副都心线 B5 层站台 & 道玄坂百轩店', detail: '涩谷站地下五层月台原样保留动画冷硬混凝土弧形穹顶结构' }
    ],
    photos: [
      { wiki: ['en', 'Shibuya_Crossing'], backupQuery: 'Shibuya Scramble Crossing night aerial Tokyo', caption: '东京涩谷全向十字路口夜色——《咒术回战·涩谷事变》核心战场' }
    ]
  },
  {
    id: 'wish-sao-ebisu',
    lineId: 'line-acg',
    name: '惠比寿花园广场 & 皇居和田仓喷水公园',
    country: '日本', region: '东京都涩谷区惠比寿 · 千代田区皇居外苑',
    lat: 35.6422, lng: 139.7132, zoom: 14,
    source: 'bgm', category: 'acg',
    aesthetics: ['圣地巡礼'],
    work: '《刀剑神域 第二季》&《序列之争》',
    workKey: '刀剑神域',
    anitabiId: 92382,
    bgmScore: 8,
    summary: '桐人与亚丝娜现实世界浪漫约会与《序列之争》AR 讨伐战的东京璀璨地标群',
    intro: '在《刀剑神域 II》（Bangumi 8/10）与剧场版《序列之争》（Anitabi 合计 143 处机位）中，走出虚拟浮游城艾恩葛朗特的桐人与亚丝娜穿梭于东京最具格调的现代街区：欧式红砖拱廊与巴卡拉水晶吊灯交相辉映的「惠比寿花园广场（Yebisu Garden Place）」、夜晚水幕流光溢彩的「皇居外苑·和田仓喷水公园」，以及首场 AR Boss 讨伐战降临的秋叶原 UDX 与代代木公园陆桥。',
    subSpots: [
      { name: '惠比寿花园广场（Yebisu Garden Place）红砖钟楼广场', detail: '35.6422°N, 139.7132°E · 冬季点亮世界最大级 Baccarat 水晶灯时最为浪漫' },
      { name: '皇居·和田仓喷水公园（桐人亚丝娜谈心长椅）', detail: '35.6826°N, 139.7615°E · 东京站丸之内北口步行 5 分钟，夜间灯光水景极佳' }
    ],
    photos: [
      { wiki: ['en', 'Yebisu_Garden_Place'], backupQuery: 'Yebisu Garden Place Tokyo brick plaza night', caption: '东京惠比寿花园广场——《刀剑神域》现实篇与《序列之争》取景地' }
    ]
  },
  {
    id: 'wish-dynazenon-horikiri',
    lineId: 'line-acg',
    name: '荒川 · 堀切水门与绫濑川堤岸夕阳',
    country: '日本', region: '东京都葛饰区堀切 · 江东区木场',
    lat: 35.7445, lng: 139.8268, zoom: 14,
    source: 'bgm', category: 'acg',
    aesthetics: ['圣地巡礼', '巨大·无机质'],
    work: '《SSSS.电光机王》&《SSSS.古立特》',
    workKey: 'SSSS.电光机王 / 古立特',
    anitabiId: 296367,
    bgmScore: 8,
    summary: '麻中蓬与南梦芽放学后并肩独处的钢铁水门与荒川长堤黄昏，工业巨构与青春空气感拉满',
    intro: '圆谷×扳机社青春特摄动画神作《SSSS.电光机王》（Bangumi 8/10，系列 Anitabi 158 处机位）把东京东岸下町的“水门、铁桥与高压电塔”拍出了独一无二的清冷浪漫：在葛饰区荒川与绫濑川交汇的开阔河滩上，高耸厚重的蓝色钢铁防潮水门（堀切水门 / 隅田水门）与京成线铁桥在夕阳下投出狭长剪影——正是蓬与梦芽一次次练习操控、轻声袒露心事的秘密基地！',
    subSpots: [
      { name: '堀切桥 & 荒川河岸防潮水门步道', detail: '35.7445°N, 139.8268°E · 京成本线堀切菖蒲园站步行 8 分钟，黄昏魔幻时刻绝美' },
      { name: '江东区 · 木场洲崎桥与丰洲运河步道', detail: '35.6692°N, 139.8055°E · 梦芽夜游漫步的东京湾运河桥群' }
    ],
    photos: [
      { wiki: ['ja', '堀切橋'], backupQuery: 'Arakawa River Horikiri Bridge sunset Tokyo', caption: '东京葛饰区荒川堀切桥与河岸——《SSSS.电光机王》蓬与梦芽的放学黄昏舞台' }
    ]
  },
  {
    id: 'wish-nisekoi-venus',
    lineId: 'line-acg',
    name: '神户 · 诹访山维纳斯螺旋桥（百万夜景）',
    country: '日本', region: '兵库县神户市中央区 · 诹访山公园（毗邻冬木大桥！）',
    lat: 34.6980, lng: 135.1818, zoom: 15,
    source: 'bgm', category: 'acg',
    aesthetics: ['圣地巡礼'],
    work: '《伪恋 Nisekoi》',
    workKey: '伪恋',
    anitabiId: 74628,
    bgmScore: 8,
    summary: '盘旋于神户半山腰的纯白 8 字螺旋步行桥，一条乐与桐崎千棘/小野寺俯瞰神户港百万夜景的锁爱圣地',
    intro: '新房昭之执导的高甜恋爱番《伪恋》（Bangumi 8/10，Anitabi 83 处机位）中最浪漫的高潮外景，取自神户北野异人馆后山「诹访山公园」半山腰的全长 90 米纯白 8 字形螺旋观景桥「维纳斯桥（ビーナスブリッジ）」！\n桥顶「维纳斯露台」设有专门挂同心钥匙锁的「爱之键纪念碑」，入夜后整座神户港、神户塔与远处赤红的冬木大桥（神户大桥）在脚下铺开璀璨星海，可与你的《Fate》神户巡礼同晚一气呵成！',
    subSpots: [
      { name: '维纳斯螺旋桥（Venus Bridge）& 爱之键夜景露台', detail: '34.6980°N, 135.1818°E · 从北野异人馆步行上山约 18 分钟或乘神户梦风船巴士直达' }
    ],
    photos: [
      { wiki: ['ja', 'ビーナスブリッジ'], backupQuery: 'Venus Bridge Kobe night view', caption: '兵库神户诹访山「维纳斯螺旋桥」——《伪恋》俯瞰神户港璀璨夜景圣地' }
    ]
  },
  {
    id: 'wish-charlotte-hitotsubashi',
    lineId: 'line-acg',
    name: '东京国立 · 一桥大学兼松讲堂 & 大学通',
    country: '日本', region: '东京都国立市中（紧邻《樱之诗》谷保樱花通！）',
    lat: 35.6941, lng: 139.4452, zoom: 15,
    source: 'bgm', category: 'acg',
    aesthetics: ['圣地巡礼'],
    work: '《夏洛特 Charlotte》',
    workKey: '夏洛特 Charlotte',
    anitabiId: 120925,
    bgmScore: 8,
    summary: '1927年罗马式砂岩浮雕古礼堂，乙坂有宇与友利奈绪所在的「星海学园」校园原型',
    intro: '麻枝准原创超能力青春番《夏洛特 Charlotte》（Bangumi 8/10，Anitabi 59 处机位）中庄重典雅的「星海学园」，校园实景原型正是坐落于东京都国立市的百年名校「一桥大学国立校区」：由建筑巨匠伊东忠太于 1927 年设计的国家登录有形文化财「兼松讲堂」，以红褐色砖墙搭配怪兽石雕与罗马式圆拱门廊，四周古松与秋日银杏交织。\n更巧的是，走出校门笔直延伸向南的樱花林荫大道「大学通」直抵谷保站，恰恰就是你 9 分挚爱《樱之诗》日常学园街景的同款舞台！',
    subSpots: [
      { name: '一桥大学国立校区 · 兼松讲堂 & 本馆草坪', detail: '35.6941°N, 139.4452°E · JR 中央线国立站南口沿大学通步行 6 分钟即达' }
    ],
    photos: [
      { wiki: ['ja', '兼松講堂'], backupQuery: 'Kanematsu Auditorium Hitotsubashi University Kunitachi', caption: '东京国立市一桥大学「兼松讲堂」——《夏洛特 Charlotte》星海学园古礼堂原型' }
    ]
  },
  {
    id: 'wish-eden-whitehouse',
    lineId: 'line-acg',
    name: '华盛顿 · 白宫北门广场 & 纽约归零地',
    country: '美国', region: '华盛顿哥伦比亚特区宾夕法尼亚大道 · 纽约下曼哈顿',
    lat: 38.8989, lng: -77.0365, zoom: 15,
    source: 'bgm', category: 'acg',
    aesthetics: ['圣地巡礼'],
    work: '《东之伊甸 Eden of the East》',
    workKey: '东之伊甸',
    anitabiId: 1451,
    bgmScore: 8,
    summary: '伴随绿洲乐队《Falling Down》前奏，森美咲向白宫栏杆内投硬币与失忆泷泽朗命运邂逅的原点',
    intro: '神山健治执导的平成政治悬疑浪漫经典《东之伊甸》（Bangumi 8/10，Anitabi 28 处机位），拥有日本动画史上最潇洒惊艳的开篇之一：毕业旅行来到美国华盛顿特区的森美咲在「白宫北侧宾夕法尼亚大道与拉斐特广场（Lafayette Square）」栏杆前投掷硬币，意外邂逅失去全部记忆却手握百亿日元 Selecao 手机的泷泽朗；而在剧场版终篇，故事更延伸至纽约曼哈顿下城（可与纽约无窗大厦同城打卡）！',
    subSpots: [
      { name: '白宫北立面宾夕法尼亚大道（1600 Pennsylvania Ave NW）', detail: '38.8989°N, 77.0365°W · 拉斐特公园南侧步行街正对白宫北门柱廊' },
      { name: '东京江东区 · 丰洲 LaLaport 造船厂船坞吊机', detail: '35.6548°N, 139.7918°E · 泷泽朗在日本居住的购物中心旧船坞基地实景' }
    ],
    photos: [
      { wiki: ['en', 'White_House'], backupQuery: 'White House North Portico Pennsylvania Avenue Washington', caption: '美国华盛顿白宫北门广场——《东之伊甸》第1话泷泽朗与森美咲命运相遇原点' }
    ]
  },
  {
    id: 'wish-fsf-vegas',
    lineId: 'line-acg',
    name: '拉斯维加斯 · 百乐宫喷泉 & 洛杉矶市政厅',
    country: '美国', region: '内华达州拉斯维加斯大道 · 加州洛杉矶市中心',
    lat: 36.1126, lng: -115.1743, zoom: 14,
    source: 'bgm', category: 'acg',
    aesthetics: ['圣地巡礼', '剑与魔法'],
    work: '《Fate/strange Fake》',
    workKey: 'Fate/strange Fake',
    anitabiId: 443831,
    bgmScore: 8,
    summary: '美国西部荒漠虚假圣杯战争「雪原市 Snowfield」实景：百乐宫冲天水柱与洛杉矶摩天楼夜战',
    intro: '成田良悟×TYPE-MOON 群像狂想曲《Fate/strange Fake》（《黎明低语》与 TV 版你均打出 8/10 高分，Anitabi 收录 19 处北美实景机位）将圣杯战争首次搬到了美国西部内华达州荒漠边缘的虚构新兴都市「Snowfield（雪原市）」！\n动画组亲赴美西实景取材：OP 与正片中金闪闪吉尔伽美什、恩奇都与狮心王理查一世驰骋的璀璨不夜城，1:1 复刻了拉斯维加斯大道「百乐宫酒店音乐喷泉（Fountains of Bellagio）」以及加州「洛杉矶市政厅（LA City Hall）与 Downtown LA 摩天楼群」——与美西犹他 163 号公路线无缝衔接！',
    subSpots: [
      { name: '拉斯维加斯 · 百乐宫酒店人工湖与百米音乐喷泉（Bellagio）', detail: '36.1126°N, 115.1743°W · 入夜每15分钟一场冲天水柱灯光秀，复刻吉尔伽美什赌场街景' },
      { name: '洛杉矶 · 市政厅（Los Angeles City Hall）& 银湖教堂', detail: '34.0537°N, 118.2427°W · 动画第2—3话警察局与城市天际线实景原型' }
    ],
    photos: [
      { wiki: ['en', 'Fountains_of_Bellagio'], backupQuery: 'Fountains of Bellagio Las Vegas night', caption: '美国内华达拉斯维加斯百乐宫喷泉——《Fate/strange Fake》雪原市实景原型' }
    ]
  },
  {
    id: 'wish-shana-omiya',
    lineId: 'line-acg',
    name: '大宫 · JR大宫站西口钟楼行人天桥',
    country: '日本', region: '埼玉县埼玉市大宫区（御崎市核心原型）',
    lat: 35.9063, lng: 139.6224, zoom: 15,
    source: 'bgm', category: 'acg',
    aesthetics: ['圣地巡礼'],
    work: '《灼眼的夏娜》全系列',
    workKey: '灼眼的夏娜',
    anitabiId: 18631,
    bgmScore: 8,
    summary: '封绝降临的赤红天空下，夏娜手握贽殿遮那伫立屋顶俯瞰的「御崎市站前广场」原型',
    intro: '钉宫四萌黄金时代的代表记忆《灼眼的夏娜》（第二季与 OVA 你均打出 8/10，Anitabi 13 处机位），坂井悠二与炎发灼眼的讨伐者夏娜共同守护的舞台「御崎市」，现实原型正是关东交通枢纽「埼玉市·JR 大宫站」！走出大宫站西口踏上宽阔的二层弧形高架步行平台（ペデストリアンデッキ），标志性的站前钟楼、SOGO 百货与拱门百货（ARCHE）瞬间唤醒《绯色之空》响起时的封绝战斗记忆。',
    subSpots: [
      { name: 'JR 大宫站西口二层步行天桥 & 钟楼广场', detail: '35.9063°N, 139.6224°E · 上野/池袋乘湘南新宿线或上野东京线 25 分钟直达' }
    ],
    photos: [
      { wiki: ['ja', '大宮駅_(埼玉県)'], backupQuery: 'Omiya Station West Exit pedestrian deck Saitama', caption: '埼玉市 JR 大宫站西口步行大平台——《灼眼的夏娜》御崎市实景原型' }
    ]
  },
  {
    id: 'wish-yamanosusume-hanno',
    lineId: 'line-acg',
    name: '饭能天览山 & 山梨三峠山（云海富士）',
    country: '日本', region: '埼玉县饭能市 · 山梨县富士河口湖町北侧山脊',
    lat: 35.8655, lng: 139.3080, zoom: 12,
    source: 'bgm', category: 'acg',
    aesthetics: ['圣地巡礼'],
    work: '《向山进发（ヤマノススメ）》',
    workKey: '向山进发',
    anitabiId: 86670,
    bgmScore: 7,
    summary: '雪村葵与仓上日向迈出登山第一步的饭能小城，一路登顶三峠山直面云海之上的巨型富士山',
    intro: '治愈硬核兼备的登山番《向山进发》（Bangumi 7/10，全系列在 Anitabi 收录高达 429 处实景机位！），起点位于东京西北郊绿意盎然的「埼玉县饭能市」——只需 20 分钟轻徒步即可登顶海拔 197 米的「天览山」俯瞰关东平原与远方富士山影，山下饭能河原与东饭能站处处皆是动画分镜。\n而作中最壮丽的登山路线之一「山梨县·三峠山（三ッ峠山，海拔1785m）」，山顶屏风岩绝壁在云海翻涌之上零遮挡正对整座白雪皑皑的富士山，视觉震撼力冠绝关东！',
    subSpots: [
      { name: '埼玉饭能 · 天览山展望台 & 饭能河原割岩桥', detail: '35.8655°N, 139.3080°E · 西武池袋线饭能站步行25分钟，新手零门槛圣地' },
      { name: '山梨 · 三峠山（三ッ峠山）开运山顶展望点', detail: '35.5517°N, 138.8075°E · 河口湖侧三峠登山口徒步约 70 分钟登顶看云海富士' }
    ],
    photos: [
      { wiki: ['ja', '三ツ峠'], backupQuery: 'Mitsutoge Mount Fuji view clouds Yamanashi', caption: '三峠山巅越过云海仰望巨型富士山——《向山进发》经典登山绝景' },
      { wiki: ['ja', '天覧山'], backupQuery: 'Mount Tenran Hanno Saitama view', caption: '埼玉县饭能市天览山——葵与日向迈出登山第一步的起点' }
    ]
  },
  {
    id: 'wish-natsu-tunnel-amaharashi',
    lineId: 'line-acg',
    name: '雨晴海岸 · 越中国分站 & 千叶竹冈海站',
    country: '日本', region: '富山县高冈市冰见线海岸 · 千叶县富津市内房线',
    lat: 36.8157, lng: 137.0398, zoom: 12,
    source: 'bgm', category: 'acg',
    aesthetics: ['圣地巡礼'],
    work: '《通往夏天的隧道，再见的出口》',
    workKey: '通往夏天的隧道',
    anitabiId: 362575,
    bgmScore: 7,
    summary: '隔着湛蓝富山湾遥望海拔三千米海上立山雪峰的无人海边车站，盛夏光影与时间孤寂感绝景',
    intro: '田口智久执导的奇幻青春剧场版《通往夏天的隧道，再见的出口》（Bangumi 7/10，Anitabi 69 处机位），将日本海岸铁道的清透孤独美学拍到了极致：\n① 原作轻小说故乡与电影海滨意象核心「富山县·冰见线雨晴海岸 / 越中国分站」——朱红色柴油单节列车贴着碧蓝礁石海岸驶过，海面彼端竟然直接耸立着绵延三千米的纯白「立山连峰」雪山巨墙（地球上罕见的“隔海看三千米雪山”奇观，离金泽《Angel Beats!》仅 40 分钟！）；② 动画电影中塔野薰与花城杏子在雨中并肩候车的无人小站则 1:1 取自千叶县房总半岛「JR 内房线·竹冈站」。',
    subSpots: [
      { name: '富山冰见线 · 雨晴站 / 越中国分站（海上立山连峰绝景）', detail: '36.8157°N, 137.0398°E · 冬春晴朗清晨最易拍到碧海孤岩背后的纯白立山雪墙' },
      { name: '千叶内房线 · 竹冈站（薰与杏子雨中打伞候车月台原型）', detail: '35.1977°N, 139.8266°E · 单边面海的寂静混凝土无人小站' }
    ],
    photos: [
      { wiki: ['en', 'Amaharashi_Coast'], backupQuery: 'Amaharashi Coast Tateyama Mountains sea Toyama', caption: '富山县雨晴海岸——隔着日本海遥望三千米立山连峰雪墙（《通往夏天的隧道》意象海岸）' }
    ]
  },
  {
    id: 'wish-summertime-tomogashima',
    lineId: 'line-acg',
    extraLines: ['line-ruins'],
    name: '和歌山 · 友岛（明治红砖炮台废墟无人岛）',
    country: '日本', region: '和歌山县和歌山市加太港外海 · 纪淡海峡冲之岛',
    lat: 34.2819, lng: 135.0022, zoom: 14,
    source: 'bgm', category: 'acg',
    aesthetics: ['圣地巡礼', '消逝的文明·诸神遗迹'],
    work: '《夏日重现 Summer Time Rendering》',
    workKey: '夏日重现',
    anitabiId: 228444,
    bgmScore: 7,
    summary: '乘渡轮登陆与世隔绝的森林孤岛，深山藤蔓吞噬着百年前明治红砖地下弹药库，「日都岛」1:1 真身！',
    intro: '悬疑轮回佳作《夏日重现》（Bangumi 7/10，Anitabi 58 处机位）中笼罩着“影子病”传说的孤岛「日都岛」，并非虚构，而是 100% 实景测绘自和歌山加太港乘渡轮 20 分钟才能登岸的无人岛群——「友岛（友ヶ島 / 冲之岛）」！\n岛上密林深处完好遗留着明治时代旧日本陆军修筑的「第三炮台遗址」：覆满青苔与树根的英式红砖拱门隧道、漆黑幽深的地下弹药库回廊与圆形火炮深坑，阳光从坍塌砖拱倾泻而下，兼具《天空之城》拉普达废墟美感与《夏日重现》拉满的轮回悬疑张力！',
    subSpots: [
      { name: '友岛 · 第三炮台红砖地下弹药库 & 友岛纯白灯塔', detail: '34.2819°N, 135.0022°E · 南海电铁加太站步行至加太港乘友岛汽船20分钟登岛（备好手电筒探洞！）' }
    ],
    photos: [
      { wiki: ['en', 'Tomogashima'], backupQuery: 'Tomogashima brick fortress ruins Wakayama', caption: '和歌山县无人岛「友岛」第三炮台红砖废墟——《夏日重现》日都岛 1:1 实景原型' }
    ]
  },
  {
    id: 'wish-soraoto-asakura',
    lineId: 'line-acg',
    name: '筑后川 · 朝仓杷木与耳纳连山田园（空美町）',
    country: '日本', region: '福冈县朝仓市（旧杷木町）· 浮羽市筑后川畔',
    lat: 33.3614, lng: 130.8228, zoom: 12,
    source: 'bgm', category: 'acg',
    aesthetics: ['圣地巡礼'],
    work: '《天降之物 そらのおとしもの》',
    workKey: '天降之物',
    anitabiId: 2617,
    bgmScore: 8,
    summary: '伊卡洛斯展开粉色光翼降临的九州山间温柔小镇，古早新番独有的澄澈蓝天与千年大樱树意象',
    intro: '充满欢笑与温柔泪水的老番经典《天降之物》（TV 与第二季 `f` 你均打出 8/10 高分！），樱井智树与娱乐用万能天使伊卡洛斯仰望蓝天的「空美町」，原型正是原作者水无月嵩的故乡——九州福冈县筑后川流域的「朝仓市（旧杷木町）与浮羽市（うきは）」！\n耳纳连山翠绿山脊环抱着安静的柿子果园、跨河红色铁桥、浮羽稻荷神社连绵上山的 91 座朱红鸟居俯瞰筑后平原田畴，完美定格了你日记里怀念的那份“古早温柔老番的夏日微风”。',
    subSpots: [
      { name: '朝仓市杷木町筑后川河岸 & 浮羽稻荷神社俯瞰田园机位', detail: '33.3323°N, 130.7931°E · 博多乘JR久大本线至筑后吉井/浮羽站，可与熊本阿苏《萤火之森》同游九州！' }
    ],
    photos: [
      { wiki: ['ja', 'うきは市'], backupQuery: 'Ukiha Inari Shrine torii Chikugo plain Fukuoka', caption: '九州福冈筑后川与浮羽山麓田园——《天降之物》空美町温柔原风景' }
    ]
  }
];

// Normalize all 96 destinations into the 7+1 Theme Line architecture + attach exact workKey & Anitabi subjectID
(() => {
  const ENRICH_MAP = {
    // 1. 🛡️ 西幻奇境线 (line-fantasy)
    'wish-avalon-fate':        { lineId: 'line-fantasy', extraLines: ['line-acg'], workKey: 'Fate / stay night & Zero', anitabiId: 95225 },
    'wish-nordlingen':         { lineId: 'line-fantasy', extraLines: ['line-acg'], workKey: '进击的巨人', anitabiId: 55770 },
    'wish-rothenburg-fantasy': { lineId: 'line-fantasy', extraLines: ['line-acg'], workKey: '无职转生' },
    'wish-prague-tavern':      { lineId: 'line-fantasy' },
    'wish-milford-middleearth':{ lineId: 'line-fantasy' },
    'wish-giants-causeway':    { lineId: 'line-fantasy' },
    'wish-fingals-cave':       { lineId: 'line-fantasy' },
    'wish-faroe':              { lineId: 'line-fantasy', extraLines: ['line-acg'], workKey: '冰海战记', anitabiId: 240386 },
    'wish-general-sherman':    { lineId: 'line-fantasy' },
    'wish-oak-alley':          { lineId: 'line-fantasy' },

    // 2. ⛪ 暗黑哥特线 (line-gothic)
    'wish-mont-saint-michel':  { lineId: 'line-gothic', extraLines: ['line-acg'], workKey: 'Re:从零开始的异世界生活', anitabiId: 278826 },
    'wish-rouen-cathedral':    { lineId: 'line-gothic', extraLines: ['line-acg'], workKey: 'Fate/strange Fake' },
    'wish-cologne-cathedral':  { lineId: 'line-gothic' },
    'wish-prague-monster':     { lineId: 'line-gothic', extraLines: ['line-acg'], workKey: 'MONSTER 怪物', anitabiId: 1959 },
    'wish-vienna-crypt':       { lineId: 'line-gothic' },
    'wish-milan-duomo':        { lineId: 'line-gothic' },
    'wish-bran-dracula':       { lineId: 'line-gothic' },
    'wish-sacred-house':       { lineId: 'line-gothic' },
    'wish-lithuania-crosses':  { lineId: 'line-gothic' },

    // 3. 🏗️ 粗野巨构线 (line-brutalist)
    'wish-georgia-didgori':    { lineId: 'line-brutalist', extraLines: ['line-acg'], workKey: 'Fate / stay night & Zero' },
    'wish-motherland-calls':   { lineId: 'line-brutalist' },
    'wish-kalyazin-rt64':      { lineId: 'line-brutalist' },
    'wish-buzludzha':          { lineId: 'line-brutalist' },
    'wish-naples-portuale':    { lineId: 'line-brutalist' },
    'wish-lloyds-london':      { lineId: 'line-brutalist' },
    'wish-33-thomas':          { lineId: 'line-brutalist' },
    'wish-marriott-marquis':   { lineId: 'line-brutalist' },
    'wish-muralla-roja':       { lineId: 'line-brutalist' },
    'wish-bigsight-madoka':    { lineId: 'line-brutalist', extraLines: ['line-acg'], workKey: '魔法少女小圆', anitabiId: 9717 },

    // 4. 🏛️ 神代线 (line-ruins)
    'wish-parthenon':          { lineId: 'line-ruins' },
    'wish-naples-jojo':        { lineId: 'line-ruins', extraLines: ['line-acg'], workKey: 'JOJO的奇妙冒险', anitabiId: 235128 },
    'wish-stonehenge':         { lineId: 'line-ruins' },
    'wish-york-constantine':   { lineId: 'line-ruins', extraLines: ['line-gothic'] },
    'wish-moscow-red-square':  { lineId: 'line-ruins', extraLines: ['line-gothic'] },
    'wish-stpetersburg-hermitage': { lineId: 'line-ruins' },
    'wish-kyoto-kiyomizudera': { lineId: 'line-ruins' },
    'wish-uruk':               { lineId: 'line-ruins', extraLines: ['line-acg'], workKey: 'Fate/Grand Order', anitabiId: 109378 },
    'wish-giza-pyramids':      { lineId: 'line-ruins', extraLines: ['line-acg'], workKey: 'JOJO的奇妙冒险', anitabiId: 85631 },
    'wish-petra':              { lineId: 'line-ruins' },
    'wish-nemrut-gobekli':     { lineId: 'line-ruins' },
    'wish-easter-island':      { lineId: 'line-ruins' },
    'wish-wat-rong-khun':      { lineId: 'line-ruins' },
    'wish-sala-keoku':         { lineId: 'line-ruins' },
    'wish-bali-gwk':           { lineId: 'line-ruins' },

    // 5. 🏔️ 自然奇观线 (line-nature)
    'wish-iceland-reynisfjara':{ lineId: 'line-nature' },
    'wish-vatnajokull':        { lineId: 'line-nature' },
    'wish-greenland-ice':      { lineId: 'line-nature' },
    'wish-sayram-ice':         { lineId: 'line-nature' },
    'wish-uyuni':              { lineId: 'line-nature' },
    'wish-uluru':              { lineId: 'line-nature' },
    'wish-wharariki':          { lineId: 'line-nature' },
    'wish-banff-moraine':      { lineId: 'line-nature' },
    'wish-haystack-rock':      { lineId: 'line-nature' },
    'wish-utah-us163':         { lineId: 'line-nature' },
    'wish-symmes-chapel':      { lineId: 'line-nature' },
    'wish-niagara-falls':      { lineId: 'line-nature' },
    'wish-antarctica-chaldea': { lineId: 'line-nature', extraLines: ['line-acg'], workKey: 'Fate/Grand Order' },

    // 6. 🔥 生灵祭典线 (line-bloom)
    'wish-hitachi-nemophila':  { lineId: 'line-bloom', extraLines: ['line-acg'], workKey: '葬送的芙莉莲', anitabiId: 400602 },
    'wish-provence-lavender':  { lineId: 'line-bloom' },
    'wish-mexico-butterflies': { lineId: 'line-bloom' },
    'wish-serengeti-mara':     { lineId: 'line-bloom' },
    'wish-japan-cat-island':   { lineId: 'line-bloom' },
    'wish-valais-sheep':       { lineId: 'line-bloom' },
    'wish-fainting-goat':      { lineId: 'line-bloom' },
    'wish-shetland-uphellyaa': { lineId: 'line-bloom', extraLines: ['line-acg'], workKey: '冰海战记' },
    'wish-mexico-muertos':     { lineId: 'line-bloom' },
    'wish-wuhan-onodera-coffee': { lineId: 'line-bloom' },

    // 7. 🎬 圣地巡礼 (line-acg)
    'wish-kanazawa-u':         { lineId: 'line-acg', extraLines: ['line-brutalist'], workKey: 'Angel Beats!', anitabiId: 1851 },
    'wish-saekano':            { lineId: 'line-acg', workKey: '路人女主的养成方法', anitabiId: 100403 },
    'wish-akihabara-steinsgate':{ lineId: 'line-acg', workKey: '命运石之门', anitabiId: 10380 },
    'wish-shimokita-bocchi':   { lineId: 'line-acg', workKey: '孤独摇滚！', anitabiId: 328609 },
    'wish-tokyotower-revue':   { lineId: 'line-acg', workKey: '少女☆歌剧 Revue Starlight', anitabiId: 214265 },
    'wish-mahoyo':             { lineId: 'line-acg', workKey: '魔法使之夜' },
    'wish-sakura-no-uta':      { lineId: 'line-acg', workKey: '樱之诗 / 樱之刻' },
    'wish-hakone-eva':         { lineId: 'line-acg', workKey: '新世纪福音战士 EVA', anitabiId: 265 },
    'wish-yurucamp':           { lineId: 'line-acg', workKey: '摇曳露营△', anitabiId: 207195 },
    'wish-grandblue':          { lineId: 'line-acg', workKey: '碧蓝之海', anitabiId: 235130 },
    'wish-shiga-keion':        { lineId: 'line-acg', workKey: '轻音少女', anitabiId: 1424 },
    'wish-kasamatsu':          { lineId: 'line-acg', workKey: '赛马娘', anitabiId: 509297 },
    'wish-shirakawago':        { lineId: 'line-acg', workKey: '寒蝉鸣泣之时', anitabiId: 289 },
    'wish-kobe-fate':          { lineId: 'line-acg', workKey: 'Fate / stay night & Zero', anitabiId: 95225 },
    'wish-seto-hanayome':      { lineId: 'line-acg', workKey: '濑户的花嫁', anitabiId: 805 },
    'wish-shimonada':          { lineId: 'line-acg', workKey: '下滩海站 (青春18)' },
    'wish-suwa-lake':          { lineId: 'line-acg', workKey: '你的名字。', anitabiId: 160209 },
    'wish-kamishikimi':        { lineId: 'line-acg', workKey: '萤火之森' }
  };
  for (const item of ATLAS_WISHLIST_SEED) {
    const patch = ENRICH_MAP[item.id];
    if (patch) Object.assign(item, patch);
  }
})();
