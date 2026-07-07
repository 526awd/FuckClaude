import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'server', 
  adapter: cloudflare({
    // 强制告诉 Astro 你的 wrangler.toml 在哪里
    configPath: 'wrangler.toml', 
    platformProxy: {
      enabled: true,
    },
  }),
  integrations: [sitemap()],
  vite: {
    // 强制：直接在 Vite 构建阶段欺骗/绕过 Cloudflare 插件的强校验
    define: {
      'process.env.MINIFLARE': 'true', 
    },
    build: {
      rollupOptions: {
        // 强制将所有 node 模块移出打包范围
        external: [
          'node:fs', 'node:util', 'node:zlib', 'node:stream', 'node:assert', 'node:buffer',
          'fs', 'util', 'zlib', 'stream', 'assert', 'buffer'
        ],
      },
    },
  },
});
