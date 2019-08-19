// importScripts('/cache-polyfill.js');


self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('noticia').then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html',
       '/noticias.json',
       /*
       '/index.html?homescreen=1',
       '/?homescreen=1',
       '/styles/main.css',
       '/scripts/main.min.js',
       '/sounds/airhorn.mp3'
       */
     ]);
   })
 );
});