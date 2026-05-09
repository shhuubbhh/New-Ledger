import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: {
      entry: "server",
    },
  },
  vite: {
    build: {
      // Source maps consume a lot of memory during builds.
      sourcemap: false,

      // Only affects warnings, but keeps logs cleaner.
      chunkSizeWarningLimit: 2000,

      // Let Rollup split heavy dependencies into separate chunks.
      rollupOptions: {
        output: {
          manualChunks: {
            privy: ["@privy-io/react-auth"],
            react: ["react", "react-dom"],
            tanstack: [
              "@tanstack/react-query",
              "@tanstack/react-router",
              "@tanstack/react-start",
            ],
          },
        },
      },
    },
  },
});
