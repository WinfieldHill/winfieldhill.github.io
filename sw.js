importScripts('https://winfieldhill.github.io/js/fetch_handler.js');

const filesToCache = [
  '/',
  '/page1.html',
  '/css/main.css',
  '/js/fetch_handler.js',
  '/js/app.js'
];

const staticCacheName = 'pages-cache-v4';

self.addEventListener('install', event => {
  console.log('In sw.js file v5');
  self.skipWaiting();
  event.waitUntil(
    caches.open(staticCacheName)
    .then(cache => {
      return cache.addAll(filesToCache);
    })
  );
});
