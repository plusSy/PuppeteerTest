const puppeteer = require('puppeteer');

puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']}).then(async browser => {
  const page = await browser.newPage();

  await page.goto('http://www.ocj.com.cn')

  // 存储节点以便能重新连接到 Chromium
  const browserWSEndpoint = browser.wsEndpoint();
  // 从 Chromium 断开和 puppeteer 的连接
  browser.disconnect();
  
  const browserContexts = browser.browserContexts();
  console.log('browserContexts', browserContexts)

  // 使用节点来重新建立连接
  const browser2 = await puppeteer.connect({browserWSEndpoint});
  // 关闭 Chromium
  await browser2.close();
})