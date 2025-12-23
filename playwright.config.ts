import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/specs",
  timeout: 30 * 1000,
  expect: {
    timeout: 10 * 1000,
  },
  use: {
    baseURL: "https://poets.org/",
    headless: true,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 10 * 1000,
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },
  retries: 2,
  reporter: [["html", { open: "never" }]],
});
