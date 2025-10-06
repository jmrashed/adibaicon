const CACHE_NAME = 'adibaicon-v2.0.0';
const urlsToCache = [
  '/',
  '/css/adibaIcon.css',
  '/font/adibaIcon.woff2',
  '/font/adibaIcon.woff',
  '/icons.html',
  '/doc.html'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});