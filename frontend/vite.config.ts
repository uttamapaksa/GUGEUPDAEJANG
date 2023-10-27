import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    global: 'window'
  },
  server: {
    host: true,
    port: 5173,
    https: {
       key: 'privkey.pem',
       cert: 'fullchain.pem',
     },
  },
  plugins: [react()],
})