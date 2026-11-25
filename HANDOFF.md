# VtW · Visit the World — 交接说明 (HANDOFF)

> 最后更新：2026-11-25

## 1. 项目目的

**VtW (Visit the World)** 是一个个人的「世界足迹 + 圣地巡礼 + 旅行规划」单页 Web 应用：

- 🗺️ **足迹地图**：在 Leaflet 世界地图上点亮已去的国家、中国省份和城市行政区边界，并显示 2027 暑假亚欧非环线计划路线。
- ✦ **想去圣地 / 奇观心愿单**：动画圣地巡礼（接入 Anitabi 原画机位、Bangumi 评分）+ 8 条主题线（哥特 / 西幻 / 巨构 / 神代 / 诸神 / 奇观 / 生灵 / 圣地），每条主题用一种颜色作为节点 Tag 显示在地图上。
- 📖 **城市攻略 / Obsidian 日记归档**、行程编排、装备清单、预算等子页面。
- 直接在 **Microsoft Edge** 中用 `file:///` 打开即可运行，不需要构建步骤。

## 2. 文件结构

| 路径 | 作用 |
|---|---|
| `VtW.html` | **主入口**（本地 `file://` 打开），HTML + CSS + JS 都在这一个文件里 |
| `travel-site/dist/index.html` | 部署用副本，内容应与 `VtW.html` 一致，**只有资源路径前缀不同**（这里用 `data/...`，主入口用 `travel-site/dist/data/...`） |
| `travel-site/dist/data/wishlist.js` | 心愿圣地数据集 + 8 条主题线 `ATLAS_STORYLINES`（含配色） |
| `travel-site/dist/data/seasons_gourmet.js` | **新增**：季节 Tag、日本 9 大地方 / 中国 7 大区 / 美国 7 大区配置、全球菜系/语言/宗教圈层分类、美食/纪念品数据、WGS-84→GCJ-02 坐标转换 |
| `travel-site/dist/data/japan-prefectures.js` | **新增**：基于国土数値情報简化的日本 47 都道府县真实行政轮廓 GeoJSON |
| `travel-site/dist/data/us-states.js` | **新增**：美国 50 州 + 华盛顿特区 GeoJSON（7 大片区） |
| `docs/` | 使用说明与城市攻略索引文档（`docs/使用说明.md`、`docs/城市攻略索引.md`） |
| `README.md` | 项目总览与目录说明 |
| `references/riben.cloud_files/style.css` | 参考站 https://riben.cloud/ 的 CSS 源码（只作 UI 参考，未引用） |

## 3. 本轮改动（参考 riben.cloud）

### ✅ 已完成（`VtW.html` 与 `travel-site/dist/index.html` 已同步）
1. **底图改成清晰的中文 + 菜系 / 语言 / 宗教世界专题视图**
   - 新增 `zh_g`（Google 中文 `hl=zh-CN&scale=2`，512px 高清瓦片，WGS-84）作为默认底图；2.6 秒加载不出来时自动切到 `zh_amap`（高德中文 `scale=2`，中国大陆为 GCJ-02 坐标，通过 `atlasMapCoord()` / `atlasWrapGeometryForBasemap()` 对齐图钉、心愿点、路线和城市边界）。
   - 底图栏新增 **🍜 菜系**、**🗣️ 语言**、**🛐 宗教** 三个世界着色维度按钮，点击即按国家铺染文化/饮食/语言/宗教圈层色彩，并在地图左下角显示可单选高亮的交互式图例卡（`#atlasOverlayLegend`）与文字说明。
   - `zoomSnap:.25` → `zoomSnap:1, zoomDelta:1`：瓦片只在整数缩放级别显示，文字锐利；标签描边改为 8 向 `text-shadow` 白边；去掉 CartoDB。
2. **紧凑节点 + 纯色主题标记 + 国家底色铺染**：去掉节点文字前方的 `[哥特]` 等内联 Tag 与悬浮大洲胶囊，节点缩小为紧凑圆点/小头像（9px / 20px / 宏观 7.5px），仅保留主题色与底部图例色块；主题或季节筛选打开时，有匹配心愿点的国家同步铺染主题色。
3. **riben.cloud 式 Lock-On 分区上色（日本 / 中国 / 美国）**：
   - 未下钻时保持全球足迹底色；点击锁入（Lock-On）**日本**（9 大地方 × 47 都道府县）、**中国**（7 大片区 × 34 省级行政区）或**美国**（7 大片区 × 51 州/特区）时，底图自动屏蔽单调底色，呈现高饱和分区着色、米白内界线与深炭黑带色点胶囊标签；悬停整区联动高亮，点击片区放大并淡化其余区，再点击单省/县/州进一步放大聚焦。
4. **侧边栏「我的路线」可展开菜单**：点击「我的路线」可展开/收起，内含「🧭 亚欧非环线」、全部规划中路线（`state.travelTrips`）及「📋 全部路线 / 新建」，并在新建/编辑路线保存后同步刷新导航。
5. **季节快筛条与美食 / 纪念品手账**：`atlasRenderMapQuickBar`、季节徽章、`atlasRenderRegionSheet`、`atlasRenderPlaceInfo`（跳转条 + 美食/纪念品 + 打卡与自定义新增表单）及全套 DOM 事件均已接线。
6. **性能优化**：
   - `atlasThemeColorCache`、`atlasContinentCache`、`atlasCountryToA3()` / `atlasCountryA3Cache` 缓存，且 `atlasWorldCountryStyleBase()` 改为 O(1) `Set`/`Map` 查询；
   - `atlasCombinedFootprints()` 与 `atlasComputeStats()` 按 `atlasDataRev` 记忆化缓存（`persist()` / 导入 / 重置时失效）；
   - `layoutMajorCityLabels()` 跳过无变化的 `classList` DOM 操作，地图 `zoomend moveend` 使用 `requestAnimationFrame` 合批并在宏观视角跳过隐藏的心愿标签排布；
   - `#atlasSearchInput` 增加 120ms 防抖。
7. **双端同步**：`VtW.html` 已完整同步至 `travel-site/dist/index.html`（静态资源路径前缀保留差异）。

### 🗒️ 待讨论：记账 / 预算账本（暂不改 `#budget`）
1. 每次旅行建独立账本，还是一个全局流水池 + Trip 标签？
2. 行前预算和旅途中实际记账，放在同一屏还是分开？
3. 多币种（CNY/JPY/EUR/USD/中亚货币）、支付方式、家庭赞助还是个人自费、退税标记？
4. 每一笔账是否可以绑定到城市 / 美食 / 纪念品词条（比如打勾「已入」时顺手记下金额）？

## 4. 注意事项
- 两个入口文件必须保持同步。
- 用户数据保存在 `localStorage` 中（`state` + `persist()`），底图选择存在 `vtw_basemap` 键。
- 部分底图（Google）在国内网络下可能加载不出来，这时会自动降级到高德。
