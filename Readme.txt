To automate tests I used: https://playwright.dev/
!!! Add settings file template.ts into .gitignore !!!

If you want to watch the test in manual mode. Remove comment from:
// await page.pause();

Use jenkinsfile as example pipeline CI Jenkins,
and do not forget to copy the template.ts as config file: 
into Jenkins beforehand