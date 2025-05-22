// service-worker mínimo: passa todas as requisições adiante
self.addEventListener('fetch', event => {
  event.respondWith(fetch(event.request));
});
