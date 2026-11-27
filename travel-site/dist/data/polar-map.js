// Display bands are 180° tall. An odd band reverses latitude and shifts longitude by 180°.
function atlasPolarPoint(lat, lng, band, copy) {
  const flipped = Math.abs(band % 2) === 1;
  return [band * 180 + (flipped ? -lat : lat), lng + copy * 360 + (flipped ? 180 : 0)];
}

function atlasPolarWrap(value) {
  return value - 360 * Math.floor((value + 180) / 360);
}

function atlasPolarCutRing(ring) {
  const parts = [];
  let part = [ring[0]];
  for (let i = 1; i < ring.length; i++) {
    const [lng, lat] = ring[i];
    const [prevLng, prevLat] = ring[i - 1];
    const onSeam = Math.abs(lng - prevLng) < .001
      && Math.abs(atlasPolarWrap(lng)) > 179.999 && Math.abs(atlasPolarWrap(prevLng)) > 179.999;
    const onPole = Math.abs(lat) > 89.999 && Math.abs(prevLat) > 89.999 && Math.sign(lat) === Math.sign(prevLat);
    if (onSeam || onPole) {
      if (part.length > 1) parts.push(part);
      part = [];
    }
    part.push(ring[i]);
  }
  if (part.length > 1) parts.push(part);
  return parts;
}

function atlasWorldSeamOutline(geometry) {
  if (!geometry || !['Polygon','MultiPolygon'].includes(geometry.type)) return null;
  const rings = geometry.type === 'Polygon' ? geometry.coordinates : geometry.coordinates.flat();
  const outline = rings.flatMap(atlasPolarCutRing);
  const edges = lines => lines.reduce((total, line) => total + line.length - 1, 0);
  return edges(outline) < edges(rings) ? outline : null;
}

const atlasWorldSeamCache = new WeakMap();
const atlasWorldSeamEdges = new WeakMap();

function atlasBoundarySmoothFactor(zoom) {
  if (zoom < 4) return 2;
  if (zoom < 7) return .8;
  return .2;
}

function atlasWatchBoundaryDetail(map, groups) {
  let previous;
  const update = () => {
    const smoothFactor = atlasBoundarySmoothFactor(map.getZoom());
    if (smoothFactor === previous) return;
    previous = smoothFactor;
    for (const group of groups()) {
      if (!group) continue;
      group.options.smoothFactor = smoothFactor;
      group.eachLayer(area => {
        if (area.options.smoothFactor === smoothFactor) return;
        area.options.smoothFactor = smoothFactor;
        area.redraw?.();
        const edge = atlasWorldSeamEdges.get(area);
        if (edge) {
          edge.options.smoothFactor = smoothFactor;
          edge.redraw();
        }
      });
    }
  };
  update();
  map.on('zoomend', update);
}
function atlasSeamlessWorldLayer(map, data, style, onEachFeature) {
  return L.geoJSON(data, {
    smoothFactor:atlasBoundarySmoothFactor(map.getZoom()),
    style,
    onEachFeature(feature, area) {
      let outline = atlasWorldSeamCache.get(feature);
      if (outline === undefined) {
        outline = atlasWorldSeamOutline(feature.geometry);
        atlasWorldSeamCache.set(feature, outline);
      }
      if (outline) {
        const edge = L.polyline(outline.map(line => line.map(([lng, lat]) => [lat, lng])),
          {...area.options, fill:false, interactive:false});
        atlasWorldSeamEdges.set(area, edge);
        const applyAreaStyle = area.setStyle;
        area.setStyle = function(options) {
          edge.setStyle({...options, fill:false});
          return applyAreaStyle.call(this, {...options, stroke:false});
        };
        area.setStyle(area.options);
        area.on('add', () => edge.addTo(map));
        area.on('remove', () => edge.remove());
      }
      onEachFeature(feature, area);
    }
  });
}

function atlasPolarOverscroll(pixelY, northY, southY) {
  const outside = pixelY < northY ? northY - pixelY : pixelY - southY;
  if (outside < 2) return null;
  const direction = pixelY < northY ? 1 : -1;
  return direction * (L.Projection.SphericalMercator.MAX_LATITUDE + outside * 360 / (southY - northY));
}

function atlasEnablePolarAtEdge() {
  if (active !== 'atlas' || atlasMapContext !== 'home' || !$('atlasPolarMap').hidden) return;
  const world = atlasMap.getPixelWorldBounds();
  const lat = atlasPolarOverscroll(atlasMap.getPixelBounds().getCenter().y, world.min.y, world.max.y);
  if (lat === null) return;
  const {lng} = atlasMap.getCenter();
  const zoom = atlasMap.getZoom();
  atlasCloseWishSpotlight(false);
  atlasClearCountryDrill(false);
  atlasSetPolar(true, [atlasPolarWrap(lat), atlasPolarWrap(lng)]);
  // Leave the Mercator view on its valid side of the seam if the user switches back.
  atlasMap.setView([Math.sign(lat) * 80, atlasPolarWrap(lng)], zoom, {animate:false});
}

let atlasPolarMap = null;
let atlasPolarFrame = 0;
let atlasPolarVersion = '';
const atlasPolarGeometryCache = new Map();
let atlasPolarContent = null;
const atlasPolarCopies = new Map();

function atlasSchedulePolarRender() {
  if (!atlasPolarMap || $('atlasPolarMap').hidden || active !== 'atlas' || atlasPolarFrame) return;
  atlasPolarFrame = requestAnimationFrame(() => {
    atlasPolarFrame = 0;
    if (!$('atlasPolarMap').hidden && active === 'atlas') atlasRenderPolar();
  });
}

function atlasSetPolar(enabled, entry = null) {
  const host = $('atlasPolarMap');
  if (host.hidden === !enabled) return;
  host.hidden = !enabled;
  $('atlasHomeMap').hidden = enabled;
  $('atlasPolarToggle').setAttribute('aria-pressed', String(enabled));
  if (!enabled) {
    atlasMap?.invalidateSize({pan:false});
    if (active === 'atlas' && atlasMap) {
      const data = atlasCombinedFootprints();
      atlasShowMap('atlasHomeMap', 'home', data.visitedCities, data);
    }
    return;
  }
  if (!atlasPolarMap) {
    const crs = L.extend({}, L.CRS.EPSG4326, {infinite:true, wrapLng:undefined});
    const center = atlasMap.getCenter();
    atlasPolarMap = L.map(host, {crs, preferCanvas:true, minZoom:0, maxZoom:6})
      .setView(entry || [center.lat, atlasPolarWrap(center.lng)], Math.max(0, atlasMap.getZoom() - 1));
    atlasPolarMap.attributionControl.addAttribution('Natural Earth · DataV 省界');
    atlasPolarMap.on('move zoom resize', atlasSchedulePolarRender);
    atlasPolarMap.on('moveend', () => {
      const center = atlasPolarMap.getCenter();
      const lat = atlasPolarWrap(center.lat);
      const lng = atlasPolarWrap(center.lng);
      if (lat !== center.lat || lng !== center.lng) {
        atlasPolarMap.setView([lat, lng], atlasPolarMap.getZoom(), {animate:false});
      }
      atlasSchedulePolarRender();
    });
    const observer = new ResizeObserver(() => {
      if (!host.hidden && active === 'atlas') atlasPolarMap.invalidateSize({pan:false});
    });
    observer.observe(host);
  } else if (entry) {
    atlasPolarMap.setView(entry, Math.max(0, atlasMap.getZoom() - 1), {animate:false});
  }
  atlasPolarMap.invalidateSize({pan:false});
  atlasRenderPolar();
}

function atlasPolarRoutes(data) {
  const lines = [];
  for (const route of atlasPlannedRoutes(data)) {
    const add = (from, to, mode) => {
      const nearby = {...to, lng:Number(from.lng) + atlasPolarWrap(Number(to.lng) - Number(from.lng))};
      const points = trLegacyCurve(from, nearby).points;
      lines.push({points, route, dashArray:mode === 'air' ? '6 5' : mode === 'ferry' ? '2 4' : null});
    };
    for (const leg of route.extraLegs || []) {
      if (atlasPoints(leg.from) && atlasPoints(leg.to)) add(leg.from, leg.to, leg.mode || 'air');
    }
    for (let i = 1; i < route.stops.length; i++) {
      const from = route.stops[i - 1], to = route.stops[i];
      add(from, to, route.isLoop ? mapSegmentMode(from, to) : 'land');
    }
  }
  return lines;
}

function atlasPolarGeometry(detail) {
  if (atlasPolarGeometryCache.has(detail)) return atlasPolarGeometryCache.get(detail);
  const tolerance = detail === 0 ? .5 : .09;
  const simplifyRing = ring => {
    const closed = ring[0];
    let previous = closed;
    const result = [closed];
    for (let i = 1; i < ring.length - 1; i++) {
      const point = ring[i];
      const [lng, lat] = point;
      if (Math.abs(lng) < 179.999 && Math.abs(lat) < 89.999
        && Math.hypot(lng - previous[0], lat - previous[1]) < tolerance) continue;
      result.push(point);
      previous = point;
    }
    return result.length >= 3 ? [...result, closed] : ring;
  };
  const simplify = source => source.features.filter(f => f.geometry).map(feature => {
    if (detail === 2) return feature;
    const {type, coordinates} = feature.geometry;
    const simplified = type === 'Polygon' ? coordinates.map(simplifyRing)
      : coordinates.map(polygon => polygon.map(simplifyRing));
    return {...feature, geometry:{type, coordinates:simplified}};
  });
  const world = simplify(ATLAS_WORLD_GEOJSON);
  const provinces = simplify(CHINA_PROVINCES);
  const outlines = new Map();
  for (const {properties, geometry} of world) {
    const outline = atlasWorldSeamOutline(geometry);
    if (outline) outlines.set(properties, outline);
  }
  const geometry = {world, provinces, outlines};
  atlasPolarGeometryCache.set(detail, geometry);
  return geometry;
}

function atlasPolarCopy(band, copy, stops, routes, visits, snapshot, {world, provinces, outlines}, smoothFactor) {
  const group = L.layerGroup();
  const transform = ([lng, lat]) => atlasPolarPoint(lat, lng, band, copy).reverse();
  const mapGeometry = coordinates => typeof coordinates[0] === 'number'
    ? transform(coordinates) : coordinates.map(mapGeometry);
  const mapFeature = feature => ({
    ...feature,
    geometry:{type:feature.geometry.type, coordinates:mapGeometry(feature.geometry.coordinates)}
  });
  const countryStyle = f => atlasWorldCountryStyleBase(f, true);
  L.geoJSON(world.map(mapFeature), {
    smoothFactor,
    style:f => outlines.has(f.properties) ? {...countryStyle(f), stroke:false} : countryStyle(f),
    onEachFeature:(f, layer) => layer.bindTooltip(esc(f.properties.NAME_ZH || f.properties.ADMIN), {sticky:true})
  }).addTo(group);
  for (const [properties, coordinates] of outlines) {
    L.geoJSON(mapFeature({type:'Feature', properties, geometry:{type:'MultiLineString', coordinates}}),
      {smoothFactor, style:{...countryStyle({properties}), fill:false, interactive:false}}).addTo(group);
  }
  L.geoJSON(provinces.map(mapFeature), {
    smoothFactor,
    style:atlasChinaProvinceStyleBase,
    interactive:false
  }).addTo(group);
  for (const visit of visits) {
    const f = mapFeature({type:'Feature', properties:{}, geometry:visit.boundary});
    L.geoJSON(f, {smoothFactor:.25, style:{color:snapshot.cityVis, weight:1, fillOpacity:.48}})
      .bindTooltip(esc(visit.name)).addTo(group);
  }
  for (const {points, route, dashArray} of routes) {
    L.polyline(points.map(([lat, lng]) => atlasPolarPoint(lat, lng, band, copy)),
      {color:route.color, weight:2, dashArray})
      .bindTooltip(esc(route.shortTitle)).on('click', () => atlasOpenRouteDetail(route.id)).addTo(group);
  }
  for (const stop of stops) {
    if (!atlasPoints(stop)) continue;
    const fillColor = stop.isWish ? (atlasGetStoryline(stop.lineId)?.color || '#7A5AF8')
      : stop.visited ? snapshot.cityVis : snapshot.planDot;
    L.circleMarker(atlasPolarPoint(stop.lat, stop.lng, band, copy),
      {radius:stop.isWish ? 3 : 4, color:'#fff', weight:1, fillColor, fillOpacity:1})
      .bindTooltip(esc(stop.name)).on('click', () => {
        atlasSetPolar(false);
        atlasSelectPlace(stop.id);
      }).addTo(group);
  }
  return group;
}

function atlasRenderPolar(data = atlasCombinedFootprints()) {
  if (!atlasPolarMap || $('atlasPolarMap').hidden || active !== 'atlas') return;
  const zoom = atlasPolarMap.getZoom();
  const detail = zoom <= 2 ? 0 : zoom < 5 ? 1 : 2;
  const pins = $('atlasTogglePins').checked, routesOn = $('atlasToggleRoutes').checked;
  const wishes = $('atlasToggleWish').checked;
  const version = [atlasDataRev, atlasLayerMode, atlasMapOverlay, atlasOverlayFilter, atlasWishTheme,
    atlasSeasonFilter, $('atlasToggleRegions').checked, pins, routesOn, wishes, detail].join('|');
  if (version !== atlasPolarVersion) {
    for (const group of atlasPolarCopies.values()) group.remove();
    atlasPolarCopies.clear();
    atlasPolarContent = null;
    atlasPolarVersion = version;
  }
  const bounds = atlasPolarMap.getBounds().pad(.1);
  const wanted = new Set();
  const cells = [];
  for (let band = Math.floor((bounds.getSouth() + 90) / 180); band <= Math.floor((bounds.getNorth() + 90) / 180); band++) {
    const shift = Math.abs(band % 2) * 180;
    for (let copy = Math.floor((bounds.getWest() + 180 - shift) / 360); copy <= Math.floor((bounds.getEast() + 180 - shift) / 360); copy++) {
      const key = `${band}:${copy}`;
      wanted.add(key);
      if (!atlasPolarCopies.has(key)) cells.push({band, copy, key});
    }
  }
  for (const [key, group] of atlasPolarCopies) {
    if (wanted.has(key)) continue;
    group.remove();
    atlasPolarCopies.delete(key);
  }
  if (!cells.length) return;
  if (!atlasPolarContent) {
    const snapshot = atlasStyleSnapshot || atlasRefreshStyleSnapshot(data);
    const stops = [
      ...(pins && snapshot.showVisited ? data.visitedCities : []),
      ...(pins && snapshot.showPlanned ? data.plannedCities : []),
      ...(wishes && (atlasLayerMode === 'all' || atlasLayerMode === 'wish') ? data.wishSpots.filter(w =>
        atlasMatchWishTheme(w, atlasWishTheme) && (typeof atlasMatchSeason !== 'function' || atlasMatchSeason(w, atlasSeasonFilter))) : [])
    ];
    const routes = routesOn && snapshot.showPlanned ? atlasPolarRoutes(data) : [];
    const visits = atlasLayerMode === 'visited' ? data.visitedCities.filter(stop => stop.boundary) : [];
    atlasPolarContent = {stops, routes, visits, snapshot};
  }
  const {stops, routes, visits, snapshot} = atlasPolarContent;
  const geometry = atlasPolarGeometry(detail);
  const smoothFactor = [2, .8, .2][detail];
  for (const {band, copy, key} of cells) {
    atlasPolarCopies.set(key, atlasPolarCopy(band, copy, stops, routes, visits, snapshot, geometry, smoothFactor).addTo(atlasPolarMap));
  }
}
