const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
  const page = await browser.newPage();
  await page.goto('http://www.ocj.com.cn/');
  await page.screenshot({path: '../export/OCJ-homepage.png'});

  await browser.close();
})();