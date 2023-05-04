import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
import { resolve } from 'path';
import pxtorem from 'postcss-pxtorem';
import AutoImport from './config/auto-import';

export default defineConfig({
  plugins: [
    vue(),
    Components({
      dirs: ['src/components', 'src/layouts'],
      resolvers: [VantResolver()],
    }),
    AutoImport,
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, './src'),
      },
      {
        find: 'assets',
        replacement: resolve(__dirname, './src/assets'),
      },
    ],
  },
  css: {
    postcss: {
      plugins: [
        pxtorem({
          rootValue({ file }) {
            return file.indexOf('vant') !== -1 ? 37.5 : 39;
          },
          propList: ['*'],
        }),
      ],
    },
  },
});
