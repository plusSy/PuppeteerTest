const URL = 'https://m.autohome.com.cn/';

const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');
const iPhone = devices['iPhone X'];
const fs = require('fs');

fs.mkdirSync('../export/performance');

(async () => {
  let browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  let page = await browser.newPage();
  await page.emulate(iPhone);

  await page.tracing.start({path: '../export/performance/trace.json'});
  await page.goto(URL);
  await page.tracing.stop();

  browser.close();
})();