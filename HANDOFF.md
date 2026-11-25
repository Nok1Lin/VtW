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
| `travel-site/dist/data/seasons_gourmet.js` | **新增**：季节 Tag、日本 8 大地方片区 + 都道府县、美食/纪念品数据、WGS-84→GCJ-02 坐标转换 |
| `riben.cloud_files/style.css` | 参考站 https://riben.cloud/ 的 CSS 源码（只作 UI 参考，未引用） |

## 3. 本轮改动（参考 riben.cloud）

### ✅ 已完成（仅 `VtW.html`）
1. **底图改成清晰的中文**
   - 新增 `zh_g`（Google 中文 `hl=zh-CN&scale=2`，512px 高清瓦片，WGS-84）作为默认底图；2.6 秒加载不出来时自动切到 `zh_amap`（高德中文 `scale=2`，中国大陆为 GCJ-02 坐标，通过 `atlasMapCoord()` 对齐）。
   - `zoomSnap:.25` → `zoomSnap:1, zoomDelta:1`：瓦片只在整数缩放级别显示，不会被 CSS 拉伸，文字因此不再模糊。
   - 标签描边从 `-webkit-text-stroke` 改为 8 个方向的 `text-shadow` 白边，小字号中文更锐利。
   - 去掉 CartoDB（在 `file://` 下会出现 `API KEY REQUIRED` 水印）。
2. **主题线 = 节点 Tag**：去掉悬浮的大洲胶囊，改成节点按主题着色 + 内联 `[哥特]` 小标签 + 图例色块（点击可筛选）。
3. **片状渐进下钻（函数已写好）**：`atlasRenderJapanPatches` / `atlasFocusJapanRegion`（日本 8 大地方色块 + 片区标签）、`atlasDrillIntoChinaProv`（放大中国后，点击某个省份即放大该省并打开单省手账）。中国省份图层的点击事件、鼠标悬停高亮都已接好。
4. **季节快筛条**：`atlasRenderMapQuickBar`（🌸春 / 🌿夏 / 🍁秋 / ❄️冬 / 📅当月最美 + 片状快切预设）。
5. **美食 & 纪念品手账**：`atlasRenderRegionSheet`、`atlasGoodieCardHtml`、`atlasGoodiesSectionsHtml`、`atlasJumpBarHtml`、`atlasCollectGoodies`（夯/必吃/避雷徽章、价格、已吃/已入打勾、Google 地图搜附近店铺、自定义新增表单）。
6. 相关 CSS（`.atlas-map-quickbar`、`.season-chip`、`.jp-region-chip`、`.vtw-jump-bar`、`.goodie-*` 等）、`#atlasMapQuickBar` 容器、`seasons_gourmet.js` 引用。

### ⏳ 未完成（下一步接线）
在 `VtW.html` 中：
- `atlasRenderHome()`：调用 `atlasRenderMapQuickBar(data)`；当 `atlasLastSheet?.type==='region'` 时重新渲染区域手账，不要被 `atlasRenderPlaceInfo` 覆盖。
- `atlasDrillIntoCountry()` 末尾：日本时调用 `atlasRenderJapanPatches(lonOffset)`；调用 `atlasRenderRegionSheet({kind:'country',a3,nameZh,nameEn})` 和 `atlasRenderMapQuickBar()`。
- `atlasClearCountryDrill()`：清空 `atlasSubPatchLayer`，把 `atlasActiveSubPatch` 设为 `null`，刷新快筛条。
- `atlasRefreshStyleSnapshot()` / `atlasWorldCountryStyleBase()`：主题或季节筛选打开时，给有匹配心愿点的国家铺上主题色；`atlasChinaProvinceStyleBase()` 高亮当前选中的省份。
- `atlasFilterCities()` 和 `atlasShowMap()` 的 `activeWishes`：加上 `atlasMatchSeason(w, atlasSeasonFilter)`。
- `atlasShowMap()`：图钉、心愿点、路线和城市边界都改用 `atlasMapCoord()` / `atlasWrapGeometryForBasemap()`，这样高德底图下的坐标才能对齐。
- `atlasRenderPlaceInfo()`：设置 `atlasLastSheet={type:'place',place}`，在顶部插入 `atlasJumpBarHtml`，在底部插入 `atlasGoodiesSectionsHtml(atlasGetPlaceGoodies(place)...)`。
- `atlasRenderWishSpotlight()` / 心愿卡片：显示 `atlasSeasonBadge(spot)`。
- 事件处理：`[data-season-pick]`、`[data-jp-region]`、`[data-jp-region-back]`、`[data-cn-prov]`、`[data-pref-jump]`（`name|lat|lng|zoom` → `flyTo`）、`[data-patch-preset]`、`[data-goodie-toggle]`（`state.doneGoodieIds`）、`[data-vtw-jump]`（scrollIntoView），以及 `#atlasAddGoodieForm` 的提交（`state.customGoodies[key].gourmet|souvenirs`，然后 `persist()` + `atlasRerenderSheet()`）。
- 全部完成后，把 CSS / HTML / JS 同步到 `travel-site/dist/index.html`（脚本路径用 `data/seasons_gourmet.js`）。

### 🗒️ 待讨论：记账 / 预算账本（暂不改 `#budget`）
1. 每次旅行建独立账本，还是一个全局流水池 + Trip 标签？
2. 行前预算和旅途中实际记账，放在同一屏还是分开？
3. 多币种（CNY/JPY/EUR/USD/中亚货币）、支付方式、家庭赞助还是个人自费、退税标记？
4. 每一笔账是否可以绑定到城市 / 美食 / 纪念品词条（比如打勾「已入」时顺手记下金额）？

## 4. 注意事项
- 两个入口文件必须保持同步。
- 用户数据保存在 `localStorage` 中（`state` + `persist()`），底图选择存在 `vtw_basemap` 键。
- 部分底图（Google）在国内网络下可能加载不出来，这时会自动降级到高德。
