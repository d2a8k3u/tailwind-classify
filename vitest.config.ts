import { fileURLToPath } from 'node:url';
import { configDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      provider: 'v8',
      reporter: ['cobertura', 'html', 'text'],
      include: ['src/**/*'],
      exclude: [...configDefaults.exclude],
    },
    environment: 'jsdom',
    exclude: [...configDefaults.exclude],
    root: fileURLToPath(new URL('./', import.meta.url)),
  },
});
