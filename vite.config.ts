import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
// import pluginChecker from 'vite-plugin-checker';

export default defineConfig({
  plugins: [
    react(),
    // pluginChecker({ typescript: true })
  ]
});