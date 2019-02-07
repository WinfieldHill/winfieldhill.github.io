importScripts('https://winfieldhill.github.io/js/fetch_handler.js');

const filesToCache = [
  '/',
  '/page1.html',
  '/css/main.css',
  '/js/fetch_handler.js',
  '/js/app.js'
];

const staticCacheName = 'pages-cache-v6';

self.addEventListener('install', event => { 
  self.skipWaiting();
  
  console.log('In sw.js file v5');
  
  self.skipWaiting();
  event.waitUntil(
    caches.open(staticCacheName)
    .then(cache => {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          // Return true if you want to remove this cache,
          // but remember that caches are shared across
          // the whole origin
          if (cacheName !== staticCacheName) {
            return true; 
          };
        }).map(function(cacheName) {
          return caches.delete(cacheName);
        })
      );
    })
  );
});
