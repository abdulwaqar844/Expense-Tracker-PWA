console.log("Regisgtered")
var CACHE_NAME = 'Website Cache';
var urlsToCache = [
    "/static/js/bundle.js",
    "/static/js/1.chunk.js",
    "/manifest.json",
    "/favicon.ico",
    "/logo192.png",
    "/style.css",
    "/index.html",
    "/",
    "/static/js/main.chunk.js",
    "/static/css/main.a09912d6.chunk.css",
    "/static/js/0.chunk.js"
];

self.addEventListener('install', function (event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});
self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request)
            .then(function (response) {
                // Cache hit - return response
                if (response) {
                    
                    return response;
                }
                return fetch(event.request);
            }
            )
    );
});