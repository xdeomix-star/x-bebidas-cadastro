/* Service worker do Balcão X: guarda a casca do aplicativo para abrir rápido.
   As chamadas ao servidor da planilha NUNCA são guardadas. */
var CACHE = 'balcao-x-v3';
var ARQUIVOS = ['./', 'index.html', 'jsQR.js', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png'];
self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(ARQUIVOS) }).then(function () { return self.skipWaiting() }));
});
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (ks) {
    return Promise.all(ks.filter(function (k) { return k !== CACHE }).map(function (k) { return caches.delete(k) }));
  }).then(function () { return self.clients.claim() }));
});
self.addEventListener('fetch', function (e) {
  var u = new URL(e.request.url);
  if (e.request.method !== 'GET' || u.origin !== self.location.origin) return;   // planilha/Google: direto na rede
  e.respondWith(
    fetch(e.request).then(function (r) {
      var copia = r.clone(); caches.open(CACHE).then(function (c) { c.put(e.request, copia) }); return r;
    }).catch(function () { return caches.match(e.request).then(function (r) { return r || caches.match('index.html') }) })
  );
});
