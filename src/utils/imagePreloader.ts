/**
 * Image preloader utility for Phase 2 optimization
 * Handles intelligent image preloading and caching
 */

interface PreloadOptions {
  priority?: 'high' | 'low' | 'auto';
  crossOrigin?: 'anonymous' | 'use-credentials';
  timeout?: number;
}

class ImagePreloader {
  private cache = new Map<string, Promise<HTMLImageElement>>();
  private loadingQueue: Array<{ src: string; options?: PreloadOptions }> = [];
  private isProcessing = false;

  /**
   * Preload a single image
   */
  preload(src: string, options: PreloadOptions = {}): Promise<HTMLImageElement> {
    // Return cached promise if already loading/loaded
    if (this.cache.has(src)) {
      return this.cache.get(src)!;
    }

    const promise = this.loadImage(src, options);
    this.cache.set(src, promise);

    return promise;
  }

  /**
   * Preload multiple images with queue management
   */
  preloadBatch(sources: Array<{ src: string; options?: PreloadOptions }>): Promise<HTMLImageElement[]> {
    const promises = sources.map(({ src, options }) => this.preload(src, options));
    return Promise.all(promises);
  }

  /**
   * Preload next images in sequence (for carousels)
   */
  preloadSequence(currentIndex: number, sources: string[], count: number = 2): void {
    const nextSources = sources
      .slice(currentIndex + 1, currentIndex + 1 + count)
      .map(src => ({ src, options: { priority: 'low' as const } }));

    if (nextSources.length > 0) {
      this.addToQueue(nextSources);
    }
  }

  /**
   * Load image with proper error handling and timeout
   */
  private loadImage(src: string, options: PreloadOptions = {}): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      const timeout = options.timeout || 10000; // 10s default timeout

      // Set up timeout
      const timeoutId = setTimeout(() => {
        reject(new Error(`Image load timeout: ${src}`));
      }, timeout);

      img.onload = () => {
        clearTimeout(timeoutId);
        resolve(img);
      };

      img.onerror = () => {
        clearTimeout(timeoutId);
        reject(new Error(`Failed to load image: ${src}`));
      };

      // Apply options
      if (options.crossOrigin) {
        img.crossOrigin = options.crossOrigin;
      }

      // Set loading priority for supported browsers
      if ('loading' in img && options.priority) {
        (img as any).loading = options.priority === 'high' ? 'eager' : 'lazy';
      }

      // Set fetch priority for supported browsers
      if ('fetchPriority' in img && options.priority) {
        (img as any).fetchPriority = options.priority;
      }

      img.src = src;
    });
  }

  /**
   * Add images to loading queue
   */
  private addToQueue(sources: Array<{ src: string; options?: PreloadOptions }>): void {
    this.loadingQueue.push(...sources);
    this.processQueue();
  }

  /**
   * Process loading queue with concurrency control
   */
  private async processQueue(): Promise<void> {
    if (this.isProcessing || this.loadingQueue.length === 0) return;

    this.isProcessing = true;
    const maxConcurrent = 3; // Limit concurrent loads

    while (this.loadingQueue.length > 0) {
      const batch = this.loadingQueue.splice(0, maxConcurrent);
      
      try {
        await Promise.allSettled(
          batch.map(({ src, options }) => this.preload(src, options))
        );
      } catch (error) {
        console.warn('Batch preload error:', error);
      }
    }

    this.isProcessing = false;
  }

  /**
   * Clear cache and reset state
   */
  clear(): void {
    this.cache.clear();
    this.loadingQueue = [];
    this.isProcessing = false;
  }

  /**
   * Get cache stats for debugging
   */
  getStats(): { cacheSize: number; queueSize: number; isProcessing: boolean } {
    return {
      cacheSize: this.cache.size,
      queueSize: this.loadingQueue.length,
      isProcessing: this.isProcessing
    };
  }
}

// Export singleton instance
export const imagePreloader = new ImagePreloader();

// Convenience functions
export const preloadImage = (src: string, options?: PreloadOptions) => 
  imagePreloader.preload(src, options);

export const preloadImages = (sources: Array<{ src: string; options?: PreloadOptions }>) => 
  imagePreloader.preloadBatch(sources);

export const preloadNextImages = (currentIndex: number, sources: string[], count?: number) => 
  imagePreloader.preloadSequence(currentIndex, sources, count);