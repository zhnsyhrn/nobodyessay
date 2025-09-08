/**
 * Hook for monitoring image loading performance and providing adaptive loading strategies
 */

import { useState, useEffect, useCallback } from 'react';
import { ImagePerformanceMonitor, getConnectionSpeed } from '@/utils/imageOptimization';

interface UseImagePerformanceReturn {
  stats: {
    total: number;
    completed: number;
    averageLoadTime: number;
  };
  connectionSpeed: 'slow' | 'fast';
  shouldReduceQuality: boolean;
  trackImageLoad: (src: string) => void;
  reportLoadComplete: (src: string) => void;
}

export const useImagePerformance = (): UseImagePerformanceReturn => {
  const [stats, setStats] = useState({ total: 0, completed: 0, averageLoadTime: 0 });
  const [connectionSpeed, setConnectionSpeed] = useState<'slow' | 'fast'>('fast');
  const [shouldReduceQuality, setShouldReduceQuality] = useState(false);

  const performanceMonitor = ImagePerformanceMonitor.getInstance();

  // Update stats periodically
  useEffect(() => {
    const updateStats = () => {
      const currentStats = performanceMonitor.getStats();
      setStats(currentStats);
      
      // Adapt quality based on performance
      const avgLoadTime = currentStats.averageLoadTime;
      setShouldReduceQuality(avgLoadTime > 3000 || connectionSpeed === 'slow');
    };

    updateStats();
    const interval = setInterval(updateStats, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, [connectionSpeed, performanceMonitor]);

  // Monitor connection speed
  useEffect(() => {
    const updateConnectionSpeed = () => {
      setConnectionSpeed(getConnectionSpeed());
    };

    updateConnectionSpeed();
    
    // Listen for connection changes
    const handleConnectionChange = () => {
      updateConnectionSpeed();
    };

    // @ts-ignore - navigator.connection is not in TypeScript types
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    if (connection) {
      connection.addEventListener('change', handleConnectionChange);
      return () => connection.removeEventListener('change', handleConnectionChange);
    }
  }, []);

  const trackImageLoad = useCallback((src: string) => {
    performanceMonitor.startTracking(src);
  }, [performanceMonitor]);

  const reportLoadComplete = useCallback((src: string) => {
    performanceMonitor.endTracking(src);
  }, [performanceMonitor]);

  return {
    stats,
    connectionSpeed,
    shouldReduceQuality,
    trackImageLoad,
    reportLoadComplete,
  };
};