import { defineConfig ,transformWithEsbuild} from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
	  react(),

    {
      name: "treat-js-files-as-jsx",
      async transform(code, id) {
        if (!id.match(/src\/.*\.js$/)) return null;

        // Use the exposed transform from vite, instead of directly
        //         // transforming with esbuild
        return transformWithEsbuild(code, id, {
          loader: "jsx",
          jsx: "automatic",
        });
      },
    },
  ],
  optimizeDeps: {
    force: true,
    esbuildOptions: {
      loader: {
        ".js": "jsx",
      },
    },
  },
  server: {
    host: "0.0.0.0",
    port: "4000",
    watch: {
      ignored: ["node_modules"],
    },
  },
});
