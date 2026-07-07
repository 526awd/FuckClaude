import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'server',              // 建议切换为 server 模式，如果是纯静态请使用 'static'
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
  integrations: [sitemap()],
  vite: {
    build: {
      rollupOptions: {
        // 关键：显式告诉打包器，这些 node 模块由 Cloudflare 运行时或外部处理
        external: ['node:fs', 'node:util', 'node:zlib', 'node:stream', 'node:assert', 'node:buffer'],
      },
    },
  },
});
