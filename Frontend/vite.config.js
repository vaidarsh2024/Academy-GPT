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
