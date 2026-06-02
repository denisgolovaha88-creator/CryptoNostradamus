const CACHE = 'nostradamus-v2';

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE).then(cache => {
      return cache.addAll([
        './'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match('./'))
  );
});

self.addEventListener('push', event => {

  const data = event.data
    ? event.data.json()
    : {
        title: 'Крипто Нострадамус',
        body: 'Новое пророчество готово'
      };

  event.waitUntil(
    self.registration.showNotification(
      data.title,
      {
        body: data.body,
        icon: 'icon-192.png',
        badge: 'icon-192.png'
      }
    )
  );

});

self.addEventListener('notificationclick', event => {

  event.notification.close();

  event.waitUntil(
    clients.openWindow('./')
  );

});
