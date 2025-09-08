import React, { useState, useEffect, useRef } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  preload?: boolean;
  placeholderSrc?: string; // Low-quality placeholder for progressive loading
  blurUp?: boolean; // Enable blur-up technique
  priority?: boolean; // High priority loading for critical images
  onLoad?: () => void;
  onError?: () => void;
}

export const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = '',
  preload = false,
  placeholderSrc,
  blurUp = true,
  priority = false,
  onLoad,
  onError
}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [inView, setInView] = useState(preload || priority);
  const [placeholderLoaded, setPlaceholderLoaded] = useState(false);
  const [fullImageLoaded, setFullImageLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const placeholderRef = useRef<HTMLImageElement>(null);

  // Create low-quality placeholder URL if not provided
  const getLowQualityPlaceholder = (originalSrc: string) => {
    if (placeholderSrc) return placeholderSrc;
    // For uploaded images, we could generate a smaller version
    // For now, we'll use a data URL for a tiny blurred placeholder
    return "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3Crect width='1' height='1' fill='%23f3f4f6'/%3E%3C/svg%3E";
  };

  // Enhanced Intersection Observer for better performance
  useEffect(() => {
    if (preload || priority) return; // Skip observer for critical images

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          // Preload next images when current comes into view
          const nextImages = entry.target.parentElement?.nextElementSibling?.querySelectorAll('img[data-src]');
          nextImages?.forEach((img, index) => {
            if (index < 2) { // Preload next 2 images
              const dataSrc = img.getAttribute('data-src');
              if (dataSrc) {
                const preloadImg = new Image();
                preloadImg.src = dataSrc;
              }
            }
          });
          observer.disconnect();
        }
      },
      { 
        rootMargin: priority ? '200px' : '100px', // Larger margin for priority images
        threshold: [0, 0.1, 0.25] // Multiple thresholds for better tracking
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [preload, priority]);

  // Handle placeholder image load
  useEffect(() => {
    if (!inView || !placeholderSrc) return;

    const img = new Image();
    img.onload = () => setPlaceholderLoaded(true);
    img.src = getLowQualityPlaceholder(src);
  }, [inView, placeholderSrc, src]);

  const handleFullImageLoad = () => {
    setFullImageLoaded(true);
    setLoading(false);
    onLoad?.();
  };

  const handleError = () => {
    setLoading(false);
    setError(true);
    onError?.();
  };

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
      {/* Loading skeleton */}
      {loading && !placeholderLoaded && (
        <Skeleton className="absolute inset-0 w-full h-full" />
      )}
      
      {/* Low-quality placeholder with blur effect */}
      {placeholderSrc && placeholderLoaded && !fullImageLoaded && (
        <img
          ref={placeholderRef}
          src={getLowQualityPlaceholder(src)}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover ${
            blurUp ? 'filter blur-sm scale-105' : ''
          } transition-all duration-300`}
          aria-hidden="true"
        />
      )}
      
      {/* Error state */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted text-muted-foreground text-sm">
          Failed to load image
        </div>
      )}
      
      {/* Main image */}
      {inView && (
        <img
          src={src}
          alt={alt}
          data-src={src} // For preloading detection
          className={`w-full h-full object-cover transition-all duration-500 ${
            fullImageLoaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
          onLoad={handleFullImageLoad}
          onError={handleError}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          fetchPriority={priority ? 'high' : 'auto'}
        />
      )}
    </div>
  );
};