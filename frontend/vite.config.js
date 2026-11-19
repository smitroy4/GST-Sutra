import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Dev server runs on port 5173. The Spring Boot backend (localhost:8080)
// allows CORS only from http://localhost:5173.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    strictPort: true,
  },
});
