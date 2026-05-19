// Service Worker — Network Only
// بيجيب دايماً من النت، لو مفيش نت بيطلع خطأ
 
self.addEventListener('install', e => {
  self.skipWaiting();
});
 
self.addEventListener('activate', e => {
  // امسح أي كاش قديم
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});
 
self.addEventListener('fetch', e => {
  // Network Only — من النت فقط، بدون كاش
  e.respondWith(fetch(e.request));
});
 
