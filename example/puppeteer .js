const puppeteer = require('puppeteer');

// 
puppeteer.connect({
  defaultViewport: {
    browserWSEndpoint: '',
    ignoreHTTPSErrors: true,
    width: 0,
    height: 0,
    isMobile: false,
    hasTouch: false,
    slowMo: 1000
  }
})


puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']}).then(async browser => {
  const page = await browser.newPage();
  await page.goto('http://www.ocj.com.cn');
  // 其他操作
  await browser.close();
})