/**
 * Image optimization utilities for enhanced performance
 */

export interface ImageVariant {
  width: number;
  height?: number;
  quality?: number;
  format?: 'webp' | 'jpeg' | 'png';
}

export interface ResponsiveImageConfig {
  src: string;
  alt: string;
  variants?: ImageVariant[];
  placeholder?: string;
  priority?: boolean;
  loading?: 'lazy' | 'eager';
}

/**
 * Generate WebP equivalent of image path
 */
export const getWebPPath = (imagePath: string): string => {
  const extension = imagePath.split('.').pop()?.toLowerCase();
  if (extension && ['jpg', 'jpeg', 'png'].includes(extension)) {
    return imagePath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  }
  return imagePath;
};

/**
 * Generate multiple image sizes for responsive loading
 */
export const generateImageSrcSet = (basePath: string, variants: ImageVariant[]): string => {
  return variants
    .map(variant => {
      const webpPath = getWebPPath(basePath);
      const sizeVariant = variant.width ? `_${variant.width}w` : '';
      const imagePath = webpPath.replace(/\.(webp|jpg|jpeg|png)$/i, `${sizeVariant}.$1`);
      return `${imagePath} ${variant.width}w`;
    })
    .join(', ');
};

/**
 * Generate sizes attribute for responsive images
 */
export const generateSizesAttribute = (breakpoints: Array<{ condition: string; size: string }>): string => {
  return breakpoints
    .map(bp => `${bp.condition} ${bp.size}`)
    .join(', ');
};

/**
 * Create ultra-low quality placeholder (LQIP)
 */
export const generateLQIP = (imagePath: string): string => {
  // In a real scenario, this would generate a base64 encoded tiny version
  // For now, we'll use a small blurred version
  const extension = imagePath.split('.').pop()?.toLowerCase();
  return imagePath.replace(/\.(jpg|jpeg|png|webp)$/i, '_lqip.$1');
};

/**
 * Check if WebP is supported
 */
export const supportsWebP = (): Promise<boolean> => {
  return new Promise((resolve) => {
    const webP = new Image();
    webP.onload = webP.onerror = () => {
      resolve(webP.height === 2);
    };
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  });
};

/**
 * Get optimal image format based on browser support
 */
export const getOptimalImagePath = async (imagePath: string): Promise<string> => {
  const webPSupported = await supportsWebP();
  return webPSupported ? getWebPPath(imagePath) : imagePath;
};

/**
 * Performance metrics for image loading
 */
export class ImagePerformanceMonitor {
  private static instance: ImagePerformanceMonitor;
  private metrics: Map<string, { startTime: number; endTime?: number; size?: number }> = new Map();

  static getInstance(): ImagePerformanceMonitor {
    if (!ImagePerformanceMonitor.instance) {
      ImagePerformanceMonitor.instance = new ImagePerformanceMonitor();
    }
    return ImagePerformanceMonitor.instance;
  }

  startTracking(src: string, size?: number): void {
    this.metrics.set(src, { 
      startTime: performance.now(),
      size 
    });
  }

  endTracking(src: string): number | null {
    const metric = this.metrics.get(src);
    if (metric && !metric.endTime) {
      metric.endTime = performance.now();
      const loadTime = metric.endTime - metric.startTime;
      
      // Report to performance API if available
      if ('reportError' in window) {
        console.log(`Image load time for ${src}: ${loadTime.toFixed(2)}ms`);
      }
      
      return loadTime;
    }
    return null;
  }

  getAverageLoadTime(): number {
    const completedMetrics = Array.from(this.metrics.values())
      .filter(metric => metric.endTime);
    
    if (completedMetrics.length === 0) return 0;
    
    const totalTime = completedMetrics.reduce(
      (sum, metric) => sum + (metric.endTime! - metric.startTime), 
      0
    );
    
    return totalTime / completedMetrics.length;
  }

  getStats(): { total: number; completed: number; averageLoadTime: number } {
    const total = this.metrics.size;
    const completed = Array.from(this.metrics.values()).filter(m => m.endTime).length;
    const averageLoadTime = this.getAverageLoadTime();
    
    return { total, completed, averageLoadTime };
  }
}

/**
 * Bandwidth detection for adaptive loading
 */
export const getConnectionSpeed = (): 'slow' | 'fast' => {
  // @ts-ignore - navigator.connection is not in TypeScript types
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  
  if (connection) {
    const { effectiveType, downlink } = connection;
    
    // Consider slow connection if effective type is 2g/slow-2g or downlink < 1.5 Mbps
    if (['slow-2g', '2g'].includes(effectiveType) || downlink < 1.5) {
      return 'slow';
    }
  }
  
  return 'fast';
};

/**
 * Get optimal image quality based on connection speed
 */
export const getOptimalQuality = (): number => {
  const connectionSpeed = getConnectionSpeed();
  return connectionSpeed === 'slow' ? 60 : 85;
};