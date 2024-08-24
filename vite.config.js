import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      '@api/v1': fileURLToPath(new URL('./api/v1', import.meta.url)),
    },
  },
  test: {
    // vitest-specific config if needed
  },
});
