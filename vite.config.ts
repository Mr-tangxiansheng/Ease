import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath } from "url";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { getEnvConfig } from "./.env-config";

// https://vitejs.dev/config/
export default defineConfig((configEnv) => {
  const viteEnv = loadEnv(configEnv.mode, process.cwd()); // 获取环境变量
  const rootPath = fileURLToPath(new URL("./", import.meta.url)); // 获取根目录
  const srcPath = `${rootPath}src`;
  const envConfig = getEnvConfig(viteEnv); // 获取环境变量配置
  return {
    base: viteEnv.VITE_BASE_URL, //设置打包路径
    plugins: [
      // 插件
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver(), IconsResolver({ prefix: "Icon" })],
      }),
      Components({
        resolvers: [
          ElementPlusResolver({ importStyle: "sass" }),
          IconsResolver({ enabledCollections: ["ep"] }),
        ],
      }),
      Icons({ autoInstall: true }),
    ],
    resolve: {
      alias: {
        "@": srcPath, // 设置 `@` 指向 `src` 目录
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "./src/styles/scss/index.scss" as *;`,
        },
      },
    },
    server: {
      host: "0.0.0.0", // 服务启动的ip地址
      port: 3000, // 服务启动端口号
      open: true, // 自动打开浏览器
      proxy: {
        // 代理
        "/api": {
          target: envConfig.url,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, "api"),
        },
      },
    },
  };
});
