importScripts('https://winfieldhill.github.io/js/fetch_js_handler.js');

const filesToCache = [
   'index.html'
   '/css/main.css',
   '/js/app.js'
];

const staticCacheName = 'pages-cache-v1';

self.addEventListener('install', event => {
  console.log('Attempting to install service worker and cache static assets!');
  event.waitUntil(
    caches.open(staticCacheName)
    .then(cache => {
      return cache.addAll(filesToCache);
    })
  );
});
