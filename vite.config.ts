
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    include: ['zod'], // Ensure zod is explicitly included in optimization
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/], // Include all node_modules for commonjs conversion
    },
    rollupOptions: {
      external: [],
      // Add output configuration to prevent the zod resolution error
      output: {
        manualChunks: {
          vendor: ['zod', 'react', 'react-dom'],
        },
      }
    }
  }
}));
