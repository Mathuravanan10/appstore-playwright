import { Page, expect, chromium } from "@playwright/test";

export class kelloges {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;

  }

async kollgesLogin() {
  //   const links = ['https://www.kelloggs.com/me/en/home.html'];
  //   const classNames = [
  //     'class-one', 'class-two', 'class-three', 
  //     'class-four', 'class-five', 'class-six'
  //   ];
   
  //   for (const link of links) {
  //     console.log(`Navigating to: ${link}`);
  //     await this.page.goto(link, { timeout: 30000, waitUntil: 'domcontentloaded' });
   
  //     // Handle busy indicator if present
  //     try {
  //       const busyIndicator = this.page.getByText("Please wait");
  //       await busyIndicator.waitFor({ state: 'hidden', timeout: 60000 });
  //     } catch (error) {
  //       console.log("No busy indicator found, continuing...");
  //     }
   
  //     // Add class names dynamically
  //     await this.page.evaluate(({ selector, classes }) => {
  //       const elements = document.querySelectorAll(selector);
  //       elements.forEach((element, index) => {
  //         if (index < classes.length) {
  //           element.classList.add(classes[index]);
  //         }
  //       });
  //     }, { selector: 'span.cta-text', classes: classNames });
   
  //     // Process elements one by one
  //     for (const className of classNames) {
  //       console.log(`Processing class: ${className}`);
   
  //       // Click the current element with the specific class name
  //       const clickableElement = this.page.locator(`span.cta-text.${className}`);
  //       console.log(clickableElement, 'iii')
  //       // if (await clickableElement.isVisible()) {
  //       //   await clickableElement.click();
  //       //   await this.page.waitForLoadState('domcontentloaded');
  //       //   console.log(`Clicked and navigated for class: ${className}`);
  //       // } else {
  //       //   console.log(`Element with class ${className} not found or not visible.`);
  //       //   continue;
  //       // }
   
  //       // Fetch and print the updated classes or page elements after navigation
  //       const updatedClassNames = await this.page.evaluate(() => {
  //         return Array.from(document.querySelectorAll('span.cta-text'))
  //           .map((el) => el.className);
  //       });
   
  //       console.log(`Updated class names after navigation:`, updatedClassNames);
   
  //       // Optionally, navigate back to the original page to continue processing
  //       await this.page.goBack({ waitUntil: 'domcontentloaded' });
  //     }
  //   }
  // const browser = await chromium.launch();
  // const page = await browser.newPage();
 
  // Navigate to the target page
  // await this.page.goto('https://www.townhousecrackers.ca/fr_CA/home.html');
 
  // // Extract all href values from <a> tags
  // const hrefs = await this.page.$$eval('a', links =>
  //   links.map(link => link.href)
  // );
 
  // console.log('Extracted hrefs:', hrefs);
 
  // await browser.close();
  await page.goto('https://www.townhousecrackers.ca/en_CA/home.html');
  await page.getByRole('button', { name: 'Accept Cookies' }).click();
  await page.getByLabel('menu', { exact: true }).getByLabel('Our Food').click();
  await page.getByRole('img', { name: 'Town House Crackers closeup' }).click();
  await page.getByRole('heading', { name: 'Our Foods' }).click();
  await page.getByRole('link', { name: 'Kellogg’s* Town House* Original Crackers Image Kellogg’s* Town House* Original' }).click();
  await page.getByRole('img', { name: 'Kellogg’s* Town House*' }).click();
  await page.getByRole('heading', { name: 'Kellogg’s* Town House*' }).click();
  await page.getByRole('heading', { name: 'Where To Buy' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByTitle('Buy Now at Wholesale Club').click();
  const page1 = await page1Promise;
  await page1.goto('https://www.wholesaleclub.ca/en/town-house-oven-baked-crackers-light-and-buttery-f/p/21107403_EA');
  await page1.getByRole('heading', { name: 'Town House Oven Baked' }).click();
  const page2Promise = page.waitForEvent('popup');
  await page.getByTitle('Buy Now at Amazon').click();
  const page2 = await page2Promise;
  const page3Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'View SmartLabel' }).click();
  const page3 = await page3Promise;
  await page3.getByText('Kellogg’s* Town House*').click();
  await page.goto('https://www.townhousecrackers.ca/en_CA/products.html');
  await page.getByRole('link', { name: 'Kellogg’s* Town House* FlipSides* Original Crackers Image Kellogg’s* Town House' }).click();
  await page.getByRole('img', { name: 'Kellogg’s* Town House*' }).click();
  await page.getByRole('heading', { name: 'Kellogg’s* Town House*' }).click();
  await page.goto('https://www.townhousecrackers.ca/en_CA/products.html');
  await page.getByRole('link', { name: 'Town House* Flatbread Crisps Italian Herb Crackers Image Town House* Flatbread' }).click();
  await page.getByRole('img', { name: 'Town House* Flatbread Crisps' }).click();
  await page.getByRole('heading', { name: 'Town House* Flatbread Crisps' }).click();
  await page.goto('https://www.townhousecrackers.ca/en_CA/products.html');
  await page.getByRole('link', { name: 'Town House* Flatbread Crisps Italian Herb Crackers Image Town House* Flatbread' }).click();
  await page.getByRole('img', { name: 'Town House* Flatbread Crisps' }).click();
  await page.getByRole('heading', { name: 'Town House* Flatbread Crisps' }).click();
  await page.getByRole('heading', { name: 'Town House* Flatbread Crisps' }).click();
  await page.goto('https://www.townhousecrackers.ca/en_CA/products.html');
  await page.getByRole('link', { name: 'Town House* Flatbread Crisps Sea Salt & Olive Oil Crackers Image Town House*' }).click();
  await page.getByRole('img', { name: 'Town House* Flatbread Crisps Sea Salt & Olive Oil Crackers' }).click();
  await page.getByRole('heading', { name: 'Town House* Flatbread Crisps' }).click();
  await page.getByLabel('click to see where to buy').click();
  await page.goto('https://www.townhousecrackers.ca/en_CA/products.html');
  await page.getByRole('link', { name: 'Town House* Pita Sea Salt' }).click();
  await page.getByRole('img', { name: 'Town House* Pita Sea Salt' }).click();
  await page.getByRole('heading', { name: 'Town House* Pita Sea Salt' }).click();
  await page.getByLabel('click to see where to buy').click();
  await page.goto('https://www.townhousecrackers.ca/en_CA/products.html');
  await page.getByRole('link', { name: 'Town House* Pita Mediterranean Herb Crackers Image Town House* Pita' }).click();
  await page.getByRole('img', { name: 'Town House* Pita Mediterranean Herb Crackers' }).click();
  await page.getByRole('heading', { name: 'Town House* Pita' }).click();
  await page.getByLabel('click to see where to buy').click();


  await page.goto('https://www.townhousecrackers.ca/en_CA/products.html');
  await page.getByRole('button', { name: 'Accept Cookies' }).click();
  await page.getByRole('link', { name: 'Kellogg’s* Town House* Original Crackers Image Kellogg’s* Town House* Original' }).click();
  await page.getByRole('heading', { name: 'Where To Buy' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByTitle('Buy Now at Wholesale Club').click();
  const page1 = await page1Promise;
  await page1.goto('https://www.wholesaleclub.ca/en/town-house-oven-baked-crackers-light-and-buttery-f/p/21107403_EA');
  await page1.getByRole('img', { name: 'Town House Oven Baked' }).click();
  await page1.getByRole('heading', { name: 'Town House Oven Baked' }).click();
  const page2Promise = page.waitForEvent('popup');
  await page.getByTitle('Buy Now at Valu-Mart').click();
  const page2 = await page2Promise;
  await page2.goto('https://www.valumart.ca/en/town-house-oven-baked-crackers-light-and-buttery-f/p/21107403_EA');
  await page2.locator('#site-layout').click();
  await page2.getByRole('heading', { name: 'Town House Oven Baked' }).click();
  const page3Promise = page.waitForEvent('popup');
  await page.getByTitle('Buy Now at Zehrs').click();
  const page3 = await page3Promise;
  await page3.goto('https://www.zehrs.ca/en/town-house-oven-baked-crackers-light-and-buttery-f/p/21107403_EA');
  await page3.getByRole('img', { name: 'Town House Oven Baked' }).click();
  await page3.getByRole('heading', { name: 'Town House Oven Baked' }).click();
  const page4Promise = page.waitForEvent('popup');
  await page.getByTitle('Buy Now at Fortinos').click();
  const page4 = await page4Promise;
  await page4.goto('https://www.fortinos.ca/en/town-house-oven-baked-crackers-light-and-buttery-f/p/21107403_EA');
  await page4.locator('#site-layout').click();
  await page4.getByRole('heading', { name: 'Town House Oven Baked' }).click();
  const page5Promise = page.waitForEvent('popup');
  await page.getByTitle('Buy Now at Amazon').click();
  const page5 = await page5Promise;
  await page5.getByRole('heading', { name: 'Kellogg\'s Town House Original' }).locator('#productTitle').click();
  const page6Promise = page.waitForEvent('popup');
  await page.getByTitle('Buy Now at Walmart').click();
  const page6 = await page6Promise;
  await page6.getByLabel('Close dialogue').click();
  await page6.getByLabel('Close dialogue').click();
  const page7Promise = page.waitForEvent('popup');
  await page.getByTitle('Buy Now at Real Canadian').click();
  const page7 = await page7Promise;
  await page7.goto('https://www.realcanadiansuperstore.ca/en/town-house-oven-baked-crackers-light-and-buttery-f/p/21107403_EA');
  await page7.getByRole('img', { name: 'Town House Oven Baked' }).click();
  await page7.getByRole('heading', { name: 'Town House Oven Baked' }).click();
  const page8Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Go To App' }).click();
  const page8 = await page8Promise;
  await page8.goto('https://www.instacart.ca/products/19153410-keebler-town-house-original-light-and-buttery-flavour-oven-baked-crackers?irgwc=1&utm_source=instacart_impact&utm_medium=affiliate&utm_term=partnertype-mediapartner_adtype-TEXT_LINK_adname-Yummly%20Test%20Link&utm_campaign=partner-Skimbit%20Ltd.&utm_content=clickid-y8YxayQA%3AxyKWbx0dM0W2VUDUkCSvm04ZQ-7yk0_campaignid-7412_partnerid-10078_adid-480950_sharedid-townhousecrackers.ca&traff_category=');
  await page8.getByRole('img', { name: 'Keebler Original Light And' }).first().click();
  await page8.locator('div').filter({ hasText: /^Town House Original Cracker\$4\.99391 g1Add to cart$/ }).getByRole('heading').click();
  await page.getByRole('button', { name: 'Region' }).click();
  await page.getByRole('option', { name: 'Quebec' }).click();
  await page.getByRole('button', { name: 'Region' }).click();
  await page.getByRole('option', { name: 'Prince Edward Island' }).click();
  await page.getByRole('button', { name: 'Region' }).click();
  await page.getByRole('option', { name: 'Ontario' }).click();
  const page9Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Powered By Dotter' }).click();
  const page9 = await page9Promise;
  await page9.getByRole('heading', { name: 'Welcome to Dotter' }).click();

  }
}