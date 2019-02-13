//importScripts('https://winfieldhill.github.io/js/fetch_handler.js');

const filesToCache = [
  '/',
  '/page1.html',
  '/css/main.css',
  '/js/fetch_handler.js',
  '/js/app.js'
];

const staticCacheName = 'pages-cache-v11';

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
      console.log(cacheNames);
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

self.addEventListener('message', msg => {
  msg.source === 'service-worker' ? console.log(msg) : console.log('msg from elsewhere', msg);
});
 
// self.addEventListener('fetch', event => {
//   console.log('Fetch event for ', event.request.url);
//   event.respondWith(
//     caches.match(event.request)
//     .then(response => {
//         console.log('Found ', event.request.url, ' in cache');
//         return response ? response : fetch(event.request);
//     })
//     .then(response => {
//       console.log('Network request for ', event.request.url);
//       caches.open(staticCacheName).then(cache => {
//         cache.put(event.request.url, response.clone());
//         return response;  
//       })
//     })
//     .catch(error => {

//       // TODO 6 - Respond with custom offline page

//     })
//   );
// });
