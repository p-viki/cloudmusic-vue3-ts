import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports:['vue'],
      dts:"src/auto-import.d.ts"   //  会自动生成此文件
    })],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})
