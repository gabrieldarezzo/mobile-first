const CACHE_NAME = 'NOTICIA_19_08';


var urlsToCache = [
  '/',
  '/script.js',
  '/noticias.json'
];


this.addEventListener("install", event => {

  console.log('Instalando versão 1');
  this.skipWaiting();

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
        
    })
  )
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});