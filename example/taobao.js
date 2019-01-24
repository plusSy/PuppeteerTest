const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');
const iPhone = devices['iPhone 6'];

(async () => {
const browser = await puppeteer.launch({
  args: ['--no-sandbox'],
  defaultViewport: {
    isMobile: true,
    width: 375,
    height: 812
  }
});
const page = await browser.newPage();
await page.emulate(iPhone);
await page.goto('https://h5.m.taobao.com/?sprefer=sypc00');

await page.waitFor(2000);

const aCounts = await page.$$eval('a', as => {
  return as.map(e => {
    return e.href;
  });
});
console.log(aCounts);
console.log('aCountsLength', aCounts.length)

await browser.close();
})();