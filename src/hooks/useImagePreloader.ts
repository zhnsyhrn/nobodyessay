import { useEffect, useRef } from 'react';
import { imagePreloader, preloadNextImages } from '@/utils/imagePreloader';

interface UseImagePreloaderOptions {
  priority?: 'high' | 'low' | 'auto';
  crossOrigin?: 'anonymous' | 'use-credentials';
  timeout?: number;
}

/**
 * Hook for preloading images with React lifecycle management
 */
export const useImagePreloader = (
  sources: string | string[],
  options: UseImagePreloaderOptions = {}
) => {
  const preloadedRef = useRef(new Set<string>());

  useEffect(() => {
    const sourcesToPreload = Array.isArray(sources) ? sources : [sources];
    const newSources = sourcesToPreload.filter(src => !preloadedRef.current.has(src));

    if (newSources.length === 0) return;

    // Mark as being preloaded
    newSources.forEach(src => preloadedRef.current.add(src));

    // Preload images
    const preloadPromises = newSources.map(src => 
      imagePreloader.preload(src, options).catch(error => {
        console.warn(`Failed to preload image: ${src}`, error);
        return null;
      })
    );

    Promise.allSettled(preloadPromises);

    // Cleanup function
    return () => {
      // Note: We don't remove from cache on unmount as other components might need the images
    };
  }, [sources, options.priority, options.crossOrigin, options.timeout]);
};

/**
 * Hook for carousel/sequence image preloading
 */
export const useCarouselPreloader = (
  images: string[],
  currentIndex: number,
  preloadCount: number = 2
) => {
  useEffect(() => {
    if (images.length === 0) return;

    // Preload next images in sequence
    preloadNextImages(currentIndex, images, preloadCount);
  }, [currentIndex, images, preloadCount]);
};

/**
 * Hook for viewport-based image preloading
 */
export const useViewportPreloader = (
  images: string[],
  rootMargin: string = '100px'
) => {
  const observerRef = useRef<IntersectionObserver>();

  useEffect(() => {
    if (!('IntersectionObserver' in window) || images.length === 0) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0', 10);
            
            // Preload current and next few images
            if (images[index]) {
              imagePreloader.preload(images[index], { priority: 'high' });
            }
            
            // Preload next images
            for (let i = 1; i <= 2 && images[index + i]; i++) {
              imagePreloader.preload(images[index + i], { priority: 'low' });
            }
          }
        });
      },
      { rootMargin }
    );

    return () => {
      observerRef.current?.disconnect();
    };
  }, [images, rootMargin]);

  return observerRef.current;
};