import eslintPluginAstro from 'eslint-plugin-astro'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  ...eslintPluginAstro.configs.recommended,
  {
    files: ['src/**/*.ts'],
    plugins: {
      tseslint,
    },
    extends: [tseslint.configs.recommended],
  },
  {
    rules: {
      'comma-dangle': ['error', 'always-multiline'],
    },
  },
  globalIgnores(['.vercel/', '.dist/', '.astro/', 'node_modules/']),
])
