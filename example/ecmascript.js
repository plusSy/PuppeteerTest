const URL = 'http://es6.ruanyifeng.com/';

const puppeteer = require('puppeteer');
const fs = require('fs');

fs.mkdirSync('../export/es6-pdf');

(async () => {
  let browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});

  let page = await browser.newPage();

  await page.goto(URL);
  await page.waitFor(5000); // 等待五秒,确保页面加载完毕

  // 获取左侧导航的所有链接地址和名字
  let aTags = await page.evaluate(() =>{
    let eleArr = [...document.querySelectorAll('#sidebar ol li a')];
    return eleArr.map(a => {
      return {
        href: a.href.trim(),
        name: a.text
      }
    });
  });

  // 现将本页保存,并关闭本页
  console.log(`正在保存: 0.${aTags[0].name}`);
  await page.pdf({path: `../export/es6-pdf/0.${aTags[0].name}.pdf`});

  // 遍历节点数组,逐个打开保存(此处不保存第一页)

  for (let i = 1; i < aTags.length; i++) {
    let a = aTags[i];
    console.log(`正在保存: ${i}.${a.name}`);

    page = await browser.newPage();
    await page.goto(a.href);
    await page.waitFor(5000);
    await page.pdf({path: `../export/es6-pdf/${i}.${a.name}.pdf`})
  }

  browser.close();

})()