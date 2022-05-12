To automate tests I used: https://playwright.dev/
!!! Add settings file template.ts into .gitignore !!!
use yarn or nmp

To start test:
cd src
yarn install
yarn test 

If you want to watch the test in manual mode. Remove comment from:
// await page.pause();

To run the test in headless mode:
yarn playwright test --config=playwright.config.ts

Use jenkinsfile as example pipeline CI Jenkins,
and do not forget to copy the template.ts as config file: 
into Jenkins beforehand
