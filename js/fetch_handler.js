'use strict';

console.log('fetch_handler.js was run');   
  
self.addEventListener('fetch', event => {
  console.log('Fetch event for ', event.request.url);
  event.respondWith(
    caches.match(event.request)
    .then(response => {
        console.log('Found ', event.request.url, ' in cache');
        return response ? response fetch(event.request);
    })
    .then(response => {
      console.log('Network request for ', event.request.url);
      caches.open('pages-cache-v8').then(cache => {
        cache.put(event.request.url, response.clone());
        return response;  
      })
    })
    .catch(error => {

      // TODO 6 - Respond with custom offline page

    })
  );
});
