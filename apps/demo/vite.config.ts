import react from '@vitejs/plugin-react'
import { defineConfig, splitVendorChunkPlugin, UserConfigExport } from 'vite'

const devConfig: UserConfigExport = {
    plugins: [react()],
}

const prodConfig: UserConfigExport = {
    plugins: [react(), splitVendorChunkPlugin()],
}

// https://vitejs.dev/config/
export default defineConfig({
    ...(process.env.NODE_ENV === 'production' ? prodConfig : devConfig),
    build: {
        reportCompressedSize: true,
        polyfillModulePreload: true,
    },
})
