import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    "process.env": {}
},
build: {
  // Set the directory for assets
  assetsDir: 'assets',

  // Customize the filename pattern for assets
  rollupOptions: {
    input: {
        main: 'Frontend/index.html',
        vectorSlide: 'Frontend/src/assets/vectorslides.svg',
        format: 'Frontend/src/assets/formats.svg',
        circle: 'Frontend/src/assets/circles-arrows.svg'
      },
    output: {
      assetFileNames: (assetInfo) => {
        if (/\.(png|jpe?g|gif|svg|webp)$/.test(assetInfo.name)) {
          // Use the original filename without hashing
          return 'assets/[name].[ext]';
        }
        // For other assets, you can apply a different rule
        return 'assets/[name]-[hash][extname]';
      },
    },
  },
},
  plugins: [react()],
})
