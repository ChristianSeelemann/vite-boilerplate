import { defineConfig } from 'vite';
import reactrefresh from '@vitejs/plugin-react-refresh';

export default defineConfig({
  plugins: [reactrefresh()],
  build: {
    outDir: 'dist/app',
  },
});
