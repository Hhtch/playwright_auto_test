import { PlaywrightTestConfig } from '@playwright/test';
//"test": "playwright test --config=playwright.config.ts"
const config: PlaywrightTestConfig = {
  // Look for test files in the "tests" directory, relative to this configuration file
  testDir: 'tests/',

  // Each test is given 30 seconds
  timeout: 30000,

  // Forbid test.only on CI
  forbidOnly: !!process.env.CI,

  // Two retries for each test
  retries: 0,

  // Limit the number of workers on CI, use default locally
  workers: 1,

  use: {
    // Configure browser and context here
  },

  testMatch: '*.spec.ts', 
};
export default config;