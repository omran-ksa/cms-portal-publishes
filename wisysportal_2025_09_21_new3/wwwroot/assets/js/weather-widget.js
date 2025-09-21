/* Weather Widget – native geolocation prompt on first visit; cookies + reverse geocode; robust fallbacks */
(function () {
    'use strict';

    try {
        // Run-once guard
        if (window.__KC_WEATHER_WIDGET_INIT__) return;
        window.__KC_WEATHER_WIDGET_INIT__ = true;

        // ------------- Utilities (scoped)
        function log(msg, obj) { try { console.log('[Weather]', msg, obj ?? ''); } catch (_) { } }

        function setCookie(name, value, maxAgeSec) {
            try { document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${maxAgeSec}`; }
            catch (e) { log('setCookie fail', e); }
        }
        function getCookie(name) {
            try {
                const m = document.cookie.match(new RegExp(
                    '(?:^|; )' + name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1') + '=([^;]*)'
                ));
                return m ? decodeURIComponent(m[1]) : null;
            } catch (e) { log('getCookie fail', e); return null; }
        }
        function safeGetLS(key, ttlMs) {
            try {
                const raw = localStorage.getItem(key);
                if (!raw) return null;
                const obj = JSON.parse(raw);
                if ((Date.now() - (obj.t || 0)) < ttlMs) return obj;
            } catch (e) { log('safeGetLS fail', e); }
            return null;
        }
        function safeSetLS(key, obj) {
            try { localStorage.setItem(key, JSON.stringify(obj)); }
            catch (e) { log('safeSetLS fail', e); }
        }
        function iconFor(code) {
            try {
                // AccuWeather icon codes mapping
                if ([1, 2, 30].includes(code)) return 'fa-sun'; // Sunny/Mostly Sunny/Hot
                if ([3, 4, 5, 6].includes(code)) return 'fa-cloud-sun'; // Partly Sunny/Intermittent Clouds/Hazy Sunshine/Mostly Cloudy
                if ([7, 8, 11, 19, 20, 21, 23, 24, 25, 26, 27, 28].includes(code)) return 'fa-cloud'; // Cloudy/Dreary/Fog/Flurries/etc
                if ([12, 13, 14, 18, 39, 40].includes(code)) return 'fa-cloud-showers-heavy'; // Showers/Rain
                if ([15, 16, 17, 22, 29, 43, 44].includes(code)) return 'fa-cloud-bolt'; // Thunderstorms
                if ([19, 20, 21, 22, 23, 24, 25, 26, 31, 32, 33, 34, 35, 36, 37, 38, 41, 42].includes(code)) return 'fa-snowflake'; // Snow/Ice/Cold
            } catch (e) { log('iconFor fail', e); }
            return 'fa-cloud-sun';
        }
        function isSecure() {
            try {
                return window.isSecureContext || location.protocol === 'https:' ||
                    location.hostname === 'localhost' || location.hostname === '127.0.0.1';
            } catch (e) { log('isSecure fail', e); return false; }
        }

        // Server API calls (secure - no exposed API key)
        function fetchWeather(lat, lon, lang = 'en') {
            try {
                const url = `/api/v1.0/services/weather?lat=${lat}&lon=${lon}&lang=${lang}`;
                return fetch(url)
                    .then(r => r.json())
                    .then(json => {
                        try {
                            if (json && json.success) {
                                return {
                                    temp: Math.round(json.temp || 0),
                                    code: json.code || 1,
                                    location: json.location || ''
                                };
                            }
                            throw new Error('Invalid weather response');
                        } catch (e) { log('fetchWeather parse fail', e); return { temp: 0, code: 1, location: '' }; }
                    })
                    .catch(e => { log('fetchWeather network fail', e); return { temp: 0, code: 1, location: '' }; });
            } catch (e) { log('fetchWeather build fail', e); return Promise.resolve({ temp: 0, code: 1, location: '' }); }
        }

        function fetchWeatherByCity(cityName, lang = 'en') {
            try {
                const url = `/api/v1.0/services/weather?city=${encodeURIComponent(cityName)}&lang=${lang}`;
                return fetch(url)
                    .then(r => r.json())
                    .then(json => {
                        try {
                            if (json && json.success) {
                                return {
                                    temp: Math.round(json.temp || 0),
                                    code: json.code || 1,
                                    location: json.location || cityName
                                };
                            }
                            throw new Error('Invalid weather response');
                        } catch (e) { log('fetchWeatherByCity parse fail', e); return { temp: 0, code: 1, location: cityName }; }
                    })
                    .catch(e => { log('fetchWeatherByCity network fail', e); return { temp: 0, code: 1, location: cityName }; });
            } catch (e) { log('fetchWeatherByCity build fail', e); return Promise.resolve({ temp: 0, code: 1, location: cityName }); }
        }

        // Nominatim reverse geocode (kept as backup for localized place names)
        function fetchPlace(lat, lon, isAr) {
            try {
                const lang = isAr ? 'ar' : 'en';
                const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}` +
                    `&zoom=10&accept-language=${lang}`;
                return fetch(url, { headers: { 'Accept': 'application/json' } })
                    .then(r => r.json())
                    .then(j => {
                        try {
                            const a = (j && j.address) || {};
                            const city = a.city || a.town || a.village || a.suburb || a.county || a.state || j.name || '';
                            const country = a.country || '';
                            const cc = (a.country_code || '').toUpperCase();
                            const label = city && country ? `${city} - ${country}`
                                : city && cc ? `${city} - ${cc}`
                                    : city || country || (isAr ? 'موقعك' : 'Your location');
                            return { placeAr: isAr ? label : null, placeEn: !isAr ? label : null, fallbackLabel: label };
                        } catch (e) { log('fetchPlace parse fail', e); return { placeAr: isAr ? 'موقعك' : null, placeEn: !isAr ? 'Your location' : null, fallbackLabel: null }; }
                    })
                    .catch(e => { log('fetchPlace network fail', e); return { placeAr: isAr ? 'موقعك' : null, placeEn: !isAr ? 'Your location' : null, fallbackLabel: null }; });
            } catch (e) {
                log('fetchPlace build fail', e);
                return Promise.resolve({ placeAr: isAr ? 'موقعك' : null, placeEn: !isAr ? 'Your location' : null, fallbackLabel: null });
            }
        }

        function askGeolocation(timeoutMs) {
            try {
                return new Promise((resolve, reject) => {
                    try {
                        if (!navigator.geolocation) return reject({ code: 'UNSUPPORTED' });
                        const opts = { enableHighAccuracy: false, timeout: timeoutMs, maximumAge: 5 * 60 * 1000 };
                        // This is what triggers the native permission popup
                        navigator.geolocation.getCurrentPosition(resolve, reject, opts);
                    } catch (e) { log('geolocation call fail', e); reject(e); }
                });
            } catch (e) { log('askGeolocation fail', e); return Promise.reject(e); }
        }

        // ------------- Main
        function init(el) {
            try {
                if (!el) return;

                const IS_AR = (el.getAttribute('data-is-ar') || 'false') === 'true';
                const LANG = IS_AR ? 'ar' : 'en';

                // Fallback cities
                const CITIES = {
                    riyadh: { key: 'riyadh', cityName: 'Riyadh', nameAr: 'الرياض - السعودية', nameEn: 'Riyadh - KSA' },
                    amman: { key: 'amman', cityName: 'Amman', nameAr: 'عمّان - الأردن', nameEn: 'Amman - Jordan' },
                    jeddah: { key: 'jeddah', cityName: 'Jeddah', nameAr: 'جدة - السعودية', nameEn: 'Jeddah - KSA' },
                    dammam: { key: 'dammam', cityName: 'Dammam', nameAr: 'الدمّام - السعودية', nameEn: 'Dammam - KSA' },
                    dubai: { key: 'dubai', cityName: 'Dubai', nameAr: 'دبي - الإمارات', nameEn: 'Dubai - UAE' },
                    cairo: { key: 'cairo', cityName: 'Cairo', nameAr: 'القاهرة - مصر', nameEn: 'Cairo - Egypt' }
                };

                // Determine fallback city (data-city > ?city= > riyadh)
                const urlCity = new URLSearchParams(location.search).get('city')?.toLowerCase().trim();
                const dataCity = (el.getAttribute('data-city') || '').toLowerCase().trim();
                const chosenKey = (CITIES[dataCity]?.key) || (CITIES[urlCity]?.key) || 'riyadh';
                const FALLBACK_CITY = CITIES[chosenKey];

                // UI refs
                const placeEl = el.querySelector('.kc-weather__place');
                const tempEl = el.querySelector('.kc-weather__temp');
                const iconEl = el.querySelector('i');

                // Config
                const WEATHER_TTL_MS = 15 * 60 * 1000;
                const GEO_GOOD_FOR_MS = 7 * 24 * 60 * 60 * 1000;
                const GEO_DECLINE_MS = 24 * 60 * 60 * 1000;

                const GEO_COOKIE = 'kc_geo';               // "lat,lon"
                const GEO_TS_COOKIE = 'kc_geo_ts';            // unix ms
                const GEO_DECLINED_COOKIE = 'kc_geo_declined_ts';   // unix ms

                function cacheKey(lat, lon, cityKey) {
                    try {
                        return lat != null && lon != null
                            ? `kc_weather_cache_v8_server_${(+lat).toFixed(2)}_${(+lon).toFixed(2)}_${LANG}`
                            : `kc_weather_cache_v8_server_${cityKey}_${LANG}`;
                    } catch (e) { log('cacheKey fail', e); return `kc_weather_cache_v8_server_${cityKey || 'x'}_${LANG}`; }
                }

                function paint(data) {
                    try {
                        placeEl.textContent = IS_AR ? (data.placeAr || CITIES.riyadh.nameAr)
                            : (data.placeEn || CITIES.riyadh.nameEn);
                        tempEl.textContent = String(data.temp);
                        iconEl.className = 'fa-solid ' + iconFor(Number(data.code));
                    } catch (e) { log('paint fail', e); }
                }

                function renderWithCoords(lat, lon) {
                    try {
                        const key = cacheKey(lat, lon, '');
                        const saved = safeGetLS(key, WEATHER_TTL_MS);
                        if (saved) { paint(saved); return; }

                        // Weather from server API + reverse geocode in parallel
                        Promise.all([fetchWeather(lat, lon, LANG), fetchPlace(lat, lon, IS_AR)])
                            .then(([weatherResult, place]) => {
                                try {
                                    // Use server API location if available, otherwise fallback to Nominatim
                                    let labelAr, labelEn;

                                    if (weatherResult.location) {
                                        labelAr = IS_AR ? weatherResult.location : null;
                                        labelEn = !IS_AR ? weatherResult.location : null;
                                    } else {
                                        labelAr = place.placeAr || (place.fallbackLabel && IS_AR ? place.fallbackLabel : 'موقعك');
                                        labelEn = place.placeEn || (place.fallbackLabel && !IS_AR ? place.fallbackLabel : 'Your location');
                                    }

                                    const payload = {
                                        temp: weatherResult.temp,
                                        code: weatherResult.code,
                                        placeAr: labelAr || 'موقعك',
                                        placeEn: labelEn || 'Your location',
                                        t: Date.now()
                                    };
                                    safeSetLS(key, payload);
                                    paint(payload);
                                } catch (e) { log('renderWithCoords compose fail', e); renderFallback(); }
                            })
                            .catch(e => { log('renderWithCoords promise fail', e); renderFallback(); });
                    } catch (e) { log('renderWithCoords fail', e); renderFallback(); }
                }

                function renderFallback() {
                    try {
                        const key = cacheKey(null, null, FALLBACK_CITY.key);
                        const saved = safeGetLS(key, WEATHER_TTL_MS);
                        if (saved) { paint(saved); return; }

                        fetchWeatherByCity(FALLBACK_CITY.cityName, LANG)
                            .then(weatherResult => {
                                try {
                                    const payload = {
                                        temp: weatherResult.temp,
                                        code: weatherResult.code,
                                        placeAr: FALLBACK_CITY.nameAr,
                                        placeEn: FALLBACK_CITY.nameEn,
                                        t: Date.now()
                                    };
                                    safeSetLS(key, payload);
                                    paint(payload);
                                } catch (e) { log('renderFallback compose fail', e); paint({ temp: '--', code: 1, placeAr: CITIES.riyadh.nameAr, placeEn: CITIES.riyadh.nameEn }); }
                            })
                            .catch(e => { log('renderFallback fetch fail', e); paint({ temp: '--', code: 1, placeAr: CITIES.riyadh.nameAr, placeEn: CITIES.riyadh.nameEn }); });
                    } catch (e) { log('renderFallback fail', e); paint({ temp: '--', code: 1, placeAr: CITIES.riyadh.nameAr, placeEn: CITIES.riyadh.nameEn }); }
                }

                // ===== Flow: prompt on first visit (secure contexts), else cookies/fallback
                const now = Date.now();
                const savedLatLon = getCookie(GEO_COOKIE);
                const savedGeoTs = Number(getCookie(GEO_TS_COOKIE) || 0);
                const declinedTs = Number(getCookie(GEO_DECLINED_COOKIE) || 0);
                const haveFreshGeo = !!(savedLatLon && (now - savedGeoTs) < GEO_GOOD_FOR_MS);
                const recentlyDecl = !!(declinedTs && (now - declinedTs) < GEO_DECLINE_MS);

                if (haveFreshGeo) {
                    try {
                        const parts = savedLatLon.split(',');
                        const lat = Number(parts[0]), lon = Number(parts[1]);
                        renderWithCoords(lat, lon);
                        return;
                    } catch (e) { log('parse savedLatLon fail', e); /* fallthrough */ }
                }

                if (recentlyDecl) {
                    renderFallback();
                    return;
                }

                if (isSecure()) {
                    askGeolocation(5000)
                        .then(pos => {
                            try {
                                const lat = pos.coords.latitude, lon = pos.coords.longitude;
                                setCookie(GEO_COOKIE, `${lat},${lon}`, Math.floor(GEO_GOOD_FOR_MS / 1000));
                                setCookie(GEO_TS_COOKIE, String(Date.now()), Math.floor(GEO_GOOD_FOR_MS / 1000));
                                renderWithCoords(lat, lon);
                            } catch (e) { log('geo success handle fail', e); renderFallback(); }
                        })
                        .catch(e => {
                            log('geolocation denied/err', e);
                            setCookie(GEO_DECLINED_COOKIE, String(Date.now()), Math.floor(GEO_DECLINE_MS / 1000));
                            renderFallback();
                        });
                } else {
                    log('non-secure context: skipping prompt');
                    renderFallback();
                }
            } catch (e) { log('init fail', e); }
        }

        // ------------- Boot
        function initAll() {
            try {
                document.querySelectorAll('.kc-weather').forEach((el) => {
                    if (el.__KC_WEATHER_INIT__) return; // حارس لكل عنصر
                    el.__KC_WEATHER_INIT__ = true;
                    init(el); // موجودة فوق كما هي
                });
            } catch (e) {
                try { console.log('[Weather] initAll fail', e); } catch (_) { }
            }
        }

        document.addEventListener('DOMContentLoaded', initAll);

    } catch (e) {
        try { console.log('[Weather] top-level failure', e); } catch (_) { }
    }
})();