import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current directory.
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    // This ensures the base is correctly set for both dev and prod
    base: env.NODE_ENV === 'production' ? '/netflix-gpt/' : '/',
    plugins: [
      react(),
      tailwindcss()
    ],
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: true,
      // This helps with routing in production
      rollupOptions: {
        output: {
          manualChunks: {
            react: ['react', 'react-dom', 'react-router-dom'],
          },
        },
      },
    },
    server: {
      port: 3000,
      open: true,
      // This helps with SPA routing in development
      historyApiFallback: true,
    },
    // This helps with resolving paths
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  };
});
