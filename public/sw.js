// Service Worker for Image Caching and Optimization
const CACHE_NAME = 'image-cache-v1';
const IMAGE_CACHE_NAME = 'images-v1';

// Install event - cache critical resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // Cache critical assets if needed
      return cache.addAll([]);
    })
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME && cacheName !== IMAGE_CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - handle image caching with optimization
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Only handle image requests
  if (request.destination === 'image' || 
      /\.(png|jpg|jpeg|gif|webp|svg)$/i.test(url.pathname)) {
    
    event.respondWith(
      caches.open(IMAGE_CACHE_NAME).then(async (cache) => {
        const cached = await cache.match(request);
        
        if (cached) {
          // Return cached version immediately
          return cached;
        }

        try {
          // Fetch the image
          const response = await fetch(request);
          
          if (response.ok) {
            // Cache successful responses
            cache.put(request, response.clone());
          }
          
          return response;
        } catch (error) {
          console.warn('Image fetch failed:', error);
          
          // Return a fallback image or empty response
          return new Response(
            '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect width="400" height="300" fill="#f3f4f6"/><text x="200" y="150" text-anchor="middle" fill="#9ca3af" font-size="16">Image unavailable</text></svg>',
            { 
              headers: { 'Content-Type': 'image/svg+xml' },
              status: 200 
            }
          );
        }
      })
    );
  }
});

// Message handling for cache management
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'CLEAR_IMAGE_CACHE') {
    event.waitUntil(
      caches.delete(IMAGE_CACHE_NAME).then(() => {
        event.ports[0].postMessage({ success: true });
      })
    );
  }
});