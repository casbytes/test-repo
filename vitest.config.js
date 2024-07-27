import { defineConfig } from "vite";

export default defineConfig({
  test: {
    include: ["**/**.test.{js,ts,jsx,tsx,mjs,cjs,cts,mts}"],
    environment: "node",
    restoreMocks: true,
  },
});
