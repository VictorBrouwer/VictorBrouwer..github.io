import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { copyFileSync, existsSync } from 'fs';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  buildEnd() {
    const cnameSource = resolve('CNAME'); // Path to the CNAME file in your root directory
    const cnameTarget = resolve('dist', 'CNAME'); // Path to the CNAME file in the build output directory

    if (existsSync(cnameSource)) {
      try {
        copyFileSync(cnameSource, cnameTarget);
        console.log('CNAME file successfully copied to dist!');
      } catch (error) {
        console.error('Failed to copy CNAME file:', error);
      }
    } else {
      console.warn('CNAME file does not exist. Skipping copy step.');
    }
  },
});
