const CACHE_NAME = 'v1_cache';
const urlsToCache = [
  '/',
  '/styles/main.css',
  '/script/main.js'
  // 다른 캐싱할 자원들을 여기에 추가
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      const cachePromises = urlsToCache.map(urlToCache => {
        return fetch(urlToCache, { mode: 'no-cors' }).then(response => {
          // 성공적인 응답만 캐시합니다.
          if (!response.ok && response.type !== 'opaque') {
            throw new Error(`Failed to fetch ${urlToCache}, status: ${response.status}`);
          }
          return cache.put(urlToCache, response);
        }).catch(error => {
          console.error(`Caching of ${urlToCache} failed: ${error}`);
        });
      });
      return Promise.all(cachePromises);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      // 캐시된 응답이 있으면 반환, 없으면 네트워크 요청을 수행합니다.
      return response || fetch(event.request);
    })
  );
});

self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          // 화이트리스트에 없는 캐시는 제거합니다.
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
