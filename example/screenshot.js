const URL = 'https://m.autohome.com.cn/';

const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');

const iPhone = devices['iPhone X'];

const fs = require('fs');

fs.mkdirSync('../export/screenshots');

(async () => {
  let browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    headless: false // 无头模式
  });

  let page = await browser.newPage();
  await page.emulate(iPhone);
  await page.goto(URL);
  await page.waitFor(3000);
  await page.screenshot({
    path: '../export/screenshots/1.png'
  });

  
  await page.tap('body > section.wrapper > section.recommend-auto.fn-mt > div:nth-child(2) > div.brand.activate > a:nth-child(1)');
  await page.waitFor(3000);
  await page.screenshot({
    path: '../export/screenshots/2.png'
  });

  await page.tap('body > section > div.abc > section.findercar-brandcore > ul:nth-child(2) > li:nth-child(1) > a');
  await page.waitFor(3000);
  await page.screenshot({
    path: '../export/screenshots/3.png'
  });
  
  await page.tap('body > section.summary-console > a');
  await page.waitFor(3000);
  await page.screenshot({
    path: '../export/screenshots/4.png'
  });

  await page.type('body > section > section:nth-child(1) > section > dl.form-dl > dd:nth-child(2) > p.textcard.finish > input', '测试人员', {delay: 200});
  await page.type('#userPhone', '13333333333', {delay: 200});
  await page.screenshot({
    path: '../export/screenshots/5.png'
  });

  await page.tap('body > section > section:nth-child(1) > section > div.linkcont.js-linkbtn > a');
  await page.waitFor(3000);
  await page.screenshot({
    path: '../export/screenshots/6.png'
  });

  browser.close();
})()