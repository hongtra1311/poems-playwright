import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/specs",
  timeout: 30 * 1000,
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 5000,
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },
  reporter: [["html", { open: "never" }]],
});
