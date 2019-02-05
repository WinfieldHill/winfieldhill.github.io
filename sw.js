importScripts('https://winfieldhill.github.io/js/fetch_js_handler.js');

const filesToCache = [
  '/',
  '/css/main.css',
  '/js/fetch_js_handler.js',
  '/js/app.js'
];

const staticCacheName = 'pages-cache-v1';

self.addEventListener('install', event => {
  console.log('In sw.js file v5');
  event.waitUntil(
    caches.open(staticCacheName)
    .then(cache => {
      return cache.addAll(filesToCache);
    })
  );
});
