import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Image optimization settings for Phase 2
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg', '**/*.webp'],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          // Organize assets by type
          if (assetInfo.name) {
            const extType = assetInfo.name.split('.').pop();
            if (/png|jpe?g|svg|gif|tiff|bmp|ico|webp/i.test(extType || '')) {
              return 'assets/images/[name]-[hash][extname]';
            }
            if (/css/i.test(extType || '')) {
              return 'assets/css/[name]-[hash][extname]';
            }
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
    // Optimize images during build
    assetsInlineLimit: 4096, // Inline assets smaller than 4kb
  },
  // Performance optimizations
  optimizeDeps: {
    include: ['react', 'react-dom'],
    exclude: ['@vite/client', '@vite/env'],
  },
}));
