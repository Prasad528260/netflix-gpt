import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';
import { readFileSync } from 'fs';

// Plugin to copy _redirects file
const copyRedirects = () => ({
  name: 'copy-redirects',
  generateBundle() {
    this.emitFile({
      type: 'asset',
      fileName: '_redirects',
      source: readFileSync(resolve(__dirname, 'public/_redirects'), 'utf8')
    });
  }
});

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current directory.
  const env = loadEnv(mode, process.cwd(), '');
  const isProduction = env.NODE_ENV === 'production' || env.NODE_ENV === undefined;
  
  return {
    base: isProduction ? '/netflix-gpt/' : '/',
    plugins: [
      react(),
      tailwindcss(),
      copyRedirects()
    ],
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: true,
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
        },
        output: {
          manualChunks: {
            react: ['react', 'react-dom', 'react-router-dom'],
          },
          entryFileNames: 'assets/[name].[hash].js',
          chunkFileNames: 'assets/[name].[hash].js',
          assetFileNames: 'assets/[name].[hash].[ext]',
        },
      },
      // Ensure modern browser support
      target: 'es2020',
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
        },
      },
    },
    server: {
      port: 3000,
      open: true,
      host: true, // Listen on all network interfaces
    },
    preview: {
      port: 3000,
      open: true,
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
    // Add legacy browser support
    optimizeDeps: {
      esbuildOptions: {
        target: 'es2020',
      },
    },
    // Ensure proper MIME types
    esbuild: {
      target: 'es2020',
    },
  };
});
