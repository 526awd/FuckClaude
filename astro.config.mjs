import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'server', 
  adapter: cloudflare({
    // 1. 强行在适配器代理中开启 Node 兼容
    platformProxy: {
      enabled: true,
      configPath: 'wrangler.toml', // 确保指向你的配置文件
    },
  }),
  integrations: [sitemap()],
  vite: {
    // 2. 告诉 Vite 插件，这个项目在 Cloudflare 运行时已经具备了 nodejs_compat
    plugins: [
      {
        name: 'force-nodejs-compat',
        configResolved(config) {
          // 强行把相关的兼容环境标记注入到 Vite 内部的 Cloudflare 插件配置中
          const cfPlugin = config.plugins.find(p => p.name === 'cloudflare-vite-plugin');
          if (cfPlugin) {
            // 强制让它认为已经开启了兼容
            config.define = {
              ...config.define,
              'process.env.NEXT_TELEMETRY_DISABLED': '1'
            };
          }
        }
      }
    ],
    build: {
      rollupOptions: {
        // 确保这些模块被外部化，不参与硬打包
        external: ['node:fs', 'node:util', 'node:zlib', 'node:stream', 'node:assert', 'node:buffer', 'fs', 'util', 'zlib', 'stream', 'assert', 'buffer'],
      },
    },
  },
});
