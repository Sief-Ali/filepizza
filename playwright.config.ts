import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './tests/e2e',
  workers: 1, // Run tests serially to avoid WebRTC port conflicts
  webServer: {
    command: 'PORT=3030 node .next/standalone/server.js',
    url: 'http://localhost:3030',
    timeout: 120 * 1000,
    reuseExistingServer: true,
  },
  use: {
    baseURL: 'http://localhost:3030',
  },
})
