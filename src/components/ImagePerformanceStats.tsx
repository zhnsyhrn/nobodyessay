/**
 * Development component to display image loading performance stats
 * Only visible in development mode
 */

import React from 'react';
import { useImagePerformance } from '@/hooks/useImagePerformance';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ImagePerformanceStats: React.FC = () => {
  const { stats, connectionSpeed, shouldReduceQuality } = useImagePerformance();

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <Card className="fixed bottom-4 right-4 w-64 z-50 bg-background/95 backdrop-blur-sm border shadow-lg">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">Image Performance</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex justify-between text-xs">
          <span>Images loaded:</span>
          <span>{stats.completed}/{stats.total}</span>
        </div>
        
        <div className="flex justify-between text-xs">
          <span>Avg load time:</span>
          <span>{stats.averageLoadTime.toFixed(0)}ms</span>
        </div>
        
        <div className="flex justify-between items-center text-xs">
          <span>Connection:</span>
          <Badge 
            variant={connectionSpeed === 'fast' ? 'default' : 'secondary'}
            className="text-xs px-1 py-0"
          >
            {connectionSpeed}
          </Badge>
        </div>
        
        {shouldReduceQuality && (
          <Badge variant="outline" className="text-xs w-full justify-center">
            Quality reduced
          </Badge>
        )}
      </CardContent>
    </Card>
  );
};

export default ImagePerformanceStats;