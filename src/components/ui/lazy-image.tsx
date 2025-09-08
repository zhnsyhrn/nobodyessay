import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { imagePreloader } from '@/utils/imagePreloader';
import { Skeleton } from '@/components/ui/skeleton';
import { 
  getOptimalImagePath, 
  generateImageSrcSet, 
  generateSizesAttribute,
  generateLQIP,
  ImagePerformanceMonitor,
  getOptimalQuality,
  type ImageVariant 
} from '@/utils/imageOptimization';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  preload?: boolean;
  placeholderSrc?: string;
  blurUp?: boolean;
  priority?: boolean;
  variants?: ImageVariant[];
  sizes?: string;
  quality?: number;
  onLoad?: () => void;
  onError?: () => void;
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = '',
  preload = false,
  placeholderSrc,
  blurUp = true,
  priority = false,
  variants,
  sizes,
  quality,
  onLoad,
  onError,
  ...props
}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [inView, setInView] = useState(preload || priority);
  const [placeholderLoaded, setPlaceholderLoaded] = useState(false);
  const [fullImageLoaded, setFullImageLoaded] = useState(false);
  const [optimizedSrc, setOptimizedSrc] = useState(src);
  const [srcSet, setSrcSet] = useState<string>('');
  
  const imgRef = useRef<HTMLImageElement>(null);
  const placeholderRef = useRef<HTMLImageElement>(null);
  const performanceMonitor = ImagePerformanceMonitor.getInstance();

  // Initialize optimized image source and srcset
  useEffect(() => {
    const initializeImage = async () => {
      try {
        const optimized = await getOptimalImagePath(src);
        setOptimizedSrc(optimized);
        
        if (variants && variants.length > 0) {
          const generatedSrcSet = generateImageSrcSet(src, variants);
          setSrcSet(generatedSrcSet);
        }
      } catch (error) {
        console.warn('Failed to optimize image:', error);
        setOptimizedSrc(src);
      }
    };
    
    initializeImage();
  }, [src, variants]);

  // Setup intersection observer for lazy loading
  useEffect(() => {
    if (priority || preload) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '100px', // Increased margin for better preloading
        threshold: 0.1
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [priority, preload]);

  // Load placeholder image
  useEffect(() => {
    if (!inView) return;
    
    const lqipSrc = placeholderSrc || (blurUp ? generateLQIP(src) : undefined);
    if (!lqipSrc) return;
    
    const img = new Image();
    img.onload = () => setPlaceholderLoaded(true);
    img.onerror = () => {
      // Fallback to skeleton if LQIP fails
      setPlaceholderLoaded(false);
    };
    img.src = lqipSrc;
  }, [inView, placeholderSrc, blurUp, src]);

  // Load main image with performance monitoring
  useEffect(() => {
    if (!inView || !optimizedSrc) return;
    
    // Start performance tracking
    performanceMonitor.startTracking(optimizedSrc);
    
    const img = new Image();
    
    img.onload = () => {
      performanceMonitor.endTracking(optimizedSrc);
      setFullImageLoaded(true);
      setLoading(false);
      onLoad?.();
    };
    
    img.onerror = () => {
      performanceMonitor.endTracking(optimizedSrc);
      // Try fallback to original source if optimized fails
      if (optimizedSrc !== src) {
        setOptimizedSrc(src);
        return;
      }
      setError(true);
      setLoading(false);
      onError?.();
    };

    // Set responsive attributes
    if (srcSet) {
      img.srcset = srcSet;
    }
    if (sizes) {
      img.sizes = sizes;
    }

    // Use preloader if available, otherwise load directly
    if (preload) {
      imagePreloader.preload(optimizedSrc, { 
        priority: priority ? 'high' : 'low',
        timeout: priority ? 5000 : 10000 
      })
        .then(() => {
          performanceMonitor.endTracking(optimizedSrc);
          setFullImageLoaded(true);
          setLoading(false);
          onLoad?.();
        })
        .catch(() => {
          performanceMonitor.endTracking(optimizedSrc);
          if (optimizedSrc !== src) {
            setOptimizedSrc(src);
            return;
          }
          setError(true);
          setLoading(false);
          onError?.();
        });
    } else {
      img.src = optimizedSrc;
    }
  }, [inView, optimizedSrc, src, srcSet, sizes, preload, priority, onLoad, onError, performanceMonitor]);

  if (error) {
    return (
      <div 
        className={cn(
          "flex items-center justify-center bg-muted text-muted-foreground rounded-md",
          className
        )}
        {...props}
      >
        <div className="text-center p-4">
          <div className="text-2xl mb-2">📷</div>
          <span className="text-sm">Image unavailable</span>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("relative overflow-hidden", className)} {...props}>
      {/* Loading skeleton with shimmer effect */}
      {loading && !placeholderLoaded && (
        <Skeleton className="absolute inset-0 w-full h-full animate-pulse" />
      )}
      
      {/* Placeholder/LQIP */}
      {((placeholderSrc && placeholderLoaded) || (blurUp && placeholderLoaded)) && !fullImageLoaded && (
        <img
          ref={placeholderRef}
          src={placeholderSrc || generateLQIP(src)}
          alt={`${alt} (loading)`}
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-all duration-300",
            blurUp && "filter blur-sm scale-105",
            "animate-pulse"
          )}
          loading="eager"
        />
      )}
      
      {/* Main image */}
      {inView && (
        <img
          ref={imgRef}
          src={optimizedSrc}
          srcSet={srcSet || undefined}
          sizes={sizes || undefined}
          alt={alt}
          className={cn(
            "w-full h-full object-cover transition-all duration-500 ease-out",
            fullImageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
          )}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "low"}
          decoding={priority ? "sync" : "async"}
          onLoad={() => {
            setFullImageLoaded(true);
            setLoading(false);
            onLoad?.();
          }}
          onError={() => {
            setError(true);
            setLoading(false);
            onError?.();
          }}
          {...props}
        />
      )}
      
      {/* Loading progress indicator for slow connections */}
      {loading && inView && (
        <div className="absolute bottom-2 right-2">
          <div className="w-6 h-6 border-2 border-primary/30 border-t-primary rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
};

export { LazyImage };