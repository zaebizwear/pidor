const CACHE_NAME = 'babka-nina-cache-v1';
const urlsToCache = [
  'babka.html',
  'manifest.json',
  'sw.js',
  'https://cdn.tailwindcss.com',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Lobster&display=swap',
  'https://fonts.gstatic.com/s/lobster/v30/neILzCirr5bPzVsXj2bV.woff2', // Пример, может потребоваться точный URL шрифта
  'https://100biografiy.ru/wp-content/uploads/2024/07/channels4_profile-2.jpg',
  'https://zaebizwear.com/pidor/stream.jpg',
  'https://zaebizwear.com/pidor/gay.jpg',
  'https://zaebizwear.com/pidor/smile.jpg',
  'https://www.meme-arsenal.com/memes/299e198aa1e19319430c7654f15996c0.jpg',
  'https://zaebizwear.com/pidor/shrek.jpg',
  'https://www.myinstants.com/media/sounds/muzykalnyi-perdiozh.mp3',
  'https://www.myinstants.com/media/sounds/man-pooping-his-brains-out.mp3',
  'https://www.myinstants.com/media/sounds/fart-meme-sound.mp3',
  'https://www.myinstants.com/media/sounds/rec_10s_neLGvAd.mp3',
  'https://www.myinstants.com/media/sounds/fooz.mp3',
  'https://www.myinstants.com/media/sounds/09037.mp3',
  'https://zaebizwear.com/pidor/video_2025-06-19_18-44-48.mp3',
  'https://zaebizwear.com/pidor/video_2025-06-19_18-45-46.mp3',
  'https://zaebizwear.com/pidor/video_2025-06-19_18-54-53%20(online-audio-converter.com).mp3',
  'https://www.myinstants.com/media/sounds/hl2-stalker-scream.mp3',
  'https://zaebizwear.com/pidor/photo_2025-03-27_15-37-50.jpg',
  'https://avatars.mds.yandex.net/i?id=890ed37c2fe388ffbc0b78d0c3137796_l-4407893-270-images-thumbs&n=13'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
