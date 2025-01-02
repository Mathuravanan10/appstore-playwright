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


  await page.goto('https://www.townhousecrackers.ca/en_CA/home.html');
  await page.getByRole('button', { name: 'Accept Cookies' }).click();
  await page.getByLabel('Recipes').click();
  await page.getByRole('heading', { name: 'TASTY RECIPES USING TOWN' }).click();
  await page.getByRole('img', { name: 'Townhouse Crackers arranged' }).click();
  await page.getByLabel('menu', { exact: true }).getByLabel('Sign Up').click();
  await page.getByRole('heading', { name: 'SIGN UP TO FIND OUT ABOUT NEW' }).click();
  await page.getByPlaceholder('First Name*').click();
  await page.getByPlaceholder('First Name*').fill('mathu');
  await page.getByPlaceholder('Last Name*').click();
  await page.getByPlaceholder('Last Name*').fill('ravanan');
  await page.getByPlaceholder('Email Address*', { exact: true }).click();
  await page.getByPlaceholder('Email Address*', { exact: true }).fill('mathu@gmail.com');
  await page.getByPlaceholder('Confirm Email Address*').click();
  await page.getByPlaceholder('Confirm Email Address*').fill('mathu@gmail.com');
  await page.getByLabel('Date of Birth *').fill('2024-01-01');
  await page.locator('label').filter({ hasText: 'Yes, I consent to receiving' }).click();


  await page.goto('https://www.townhousecrackers.ca/en_CA/home.html');
  await page.getByRole('button', { name: 'Accept Cookies' }).click();
  await page.getByLabel('Where To Buy').click();
  await page.getByRole('heading', { name: 'Where To Buy' }).click();
  await page.getByRole('button', { name: 'Region' }).click();
  await page.getByRole('option', { name: 'Manitoba' }).click();
  await page.getByRole('button', { name: 'Sold By' }).click();
  await page.getByRole('option', { name: 'Instacart' }).click();
  await page.getByRole('button', { name: 'Sold By' }).click();
  await page.getByRole('option', { name: 'Walmart' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Buy Now' }).nth(1).click();
  const page1 = await page1Promise;
  await page.getByRole('button', { name: 'Sold By' }).click();
  await page.getByLabel('Amazon').click();
  await page.getByRole('button', { name: 'Sold By' }).click();
  await page.getByRole('option', { name: 'Instacart' }).click();
  const page2Promise = page.waitForEvent('popup');
  await page.locator('li').filter({ hasText: 'Kellogg’s* Town House* Flatbread Crisps Italian Herb CrackersGo To AppAvailable' }).getByRole('button').click();
  const page2 = await page2Promise;
  await page2.goto('https://www.instacart.ca/products/19153466-town-house-flipsides-garlic-herb-crackers-269-g?irgwc=1&utm_source=instacart_impact&utm_medium=affiliate&utm_term=partnertype-mediapartner_adtype-TEXT_LINK_adname-Yummly%20Test%20Link&utm_campaign=partner-Skimbit%20Ltd.&utm_content=clickid-Qmgy7cQFexyKWbx0dM0W2VUDUkCSqcyoXQWSw80_campaignid-7412_partnerid-10078_adid-480950_sharedid-townhousecrackers.ca&traff_category=');
  await page.getByRole('button', { name: 'Sold By' }).click();
  await page.getByRole('option', { name: 'All Retailer' }).click();
  await page.getByRole('button', { name: 'Quick View' }).nth(2).click();
  await page.locator('#ProductTitle').click();
  await page.getByRole('button', { name: 'Show More' }).click();
  await page.getByRole('button', { name: 'Show Less' }).click();
  await page.locator('.sc-bRlCZA > div').first().click();
  await page.getByLabel('close', { exact: true }).click();
  await page.getByRole('link', { name: 'Kellogg’s* Town House* Original Crackers' }).click();
  await page.getByLabel('breadcrumbs').getByRole('link', { name: 'Home' }).click();
  await page.getByRole('link', { name: 'Kellogg’s* Town House* Flatbread Crisps Italian Herb Crackers' }).click();
  await page.getByRole('heading', { name: 'Kellogg’s* Town House*' }).click();
  await page.getByLabel('breadcrumbs').getByRole('link', { name: 'Home' }).click();

  await page.goto('https://www.townhousecrackers.ca/en_CA/home.html');
  await page.getByRole('button', { name: 'Accept Cookies' }).click();
  await page.getByLabel('Where To Buy').click();
  await page.goto('https://www.townhousecrackers.ca/en_CA/where-to-buy.html#/ON/any/products/~/~');
  await page.getByRole('button', { name: 'Region' }).click();
  await page.getByRole('option', { name: 'Alberta' }).click();
  await page.getByRole('button', { name: 'Region' }).click();
  await page.getByRole('option', { name: 'Manitoba' }).click();
  await page.getByRole('button', { name: 'Region' }).click();
  await page.getByRole('option', { name: 'Ontario' }).click();
  await page.getByRole('button', { name: 'Region' }).click();
  await page.locator('#menu-Region div').first().click();
  await page.getByRole('button', { name: 'Sold By' }).click();
  await page.getByRole('option', { name: 'Real Canadian Superstore' }).click();
  await page.getByRole('button', { name: 'Sold By' }).click();
  await page.getByRole('option', { name: 'Instacart' }).click();
  await page.getByRole('button', { name: 'Sold By' }).click();
  await page.getByRole('option', { name: 'Metro Ontario' }).click();
  await page.getByRole('button', { name: 'Sold By' }).click();
  await page.getByRole('option', { name: 'All Retailer' }).click();


  await page.goto('https://www.townhousecrackers.ca/en_CA/home.html');
  await page.getByRole('button', { name: 'Accept Cookies' }).click();
  await page.getByRole('link', { name: 'TOWN HOUSE FLIPSIDES APPLE,' }).click();
  await page.getByText('10').first().click();
  await page.getByText('10').nth(1).click();
  await page.getByText('10').nth(2).click();
  await page.getByRole('link', { name: 'CHOCOLATE DIPPED CRACKERS' }).click();
  await page.getByText('10', { exact: true }).click();
  await page.getByText('20', { exact: true }).click();
  await page.getByText('13').click();
  await page.goto('https://www.townhousecrackers.ca/en_CA/home.html');
  await page.getByRole('link', { name: 'Chipotle Cheeseburger Sliders' }).click();
  await page.getByText('20').first().click();
  await page.getByText('20').nth(1).click();
  await page.getByText('10').click();
  await page.goto('https://www.townhousecrackers.ca/en_CA/home.html');
  await page.getByRole('link', { name: 'Cold Smoked Salmon Spread' }).click();
  await page.getByText('10').click();
  await page.getByText('130').click();
  await page.getByText('14').click();
  await page.goto('https://www.townhousecrackers.ca/en_CA/home.html');
  await page.getByRole('link', { name: 'Swiss Cheese and Grape Salsa' }).click();
  await page.getByText('15').first().click();
  await page.getByText('15').nth(1).click();
  await page.getByText('32').click();
  await page.goto('https://www.townhousecrackers.ca/en_CA/home.html');
  await page.getByRole('link', { name: 'Mediterranean Dip' }).click();
  await page.getByText('10').first().click();
  await page.getByText('10').nth(1).click();
  await page.getByText('16').click();
  await page.goto('https://www.townhousecrackers.ca/en_CA/home.html');
  await page.getByRole('link', { name: 'Sun-Dried Tomato and Feta' }).click();
  await page.getByText('10').first().click();
  await page.getByText('10').nth(1).click();
  await page.getByText('20', { exact: true }).click();
  await page.goto('https://www.townhousecrackers.ca/en_CA/home.html');
  await page.getByRole('link', { name: 'Party pizzas Party pizzas' }).click();
  await page.getByText('15').click();
  await page.getByText('20', { exact: true }).click();
  await page.getByText('9').click();
  await page.goto('https://www.townhousecrackers.ca/en_CA/home.html');
  await page.getByRole('link', { name: 'Pub cheese dip Pub cheese dip' }).click();
  await page.getByText('20').first().click();
  await page.getByText('20').nth(1).click();
  await page.getByRole('link', { name: 'Avocado and Mango Salsa' }).click();
  await page.getByText('15').click();
  await page.getByText('20', { exact: true }).click();
  await page.getByRole('link', { name: 'Creamy Buffalo Chicken Dip' }).click();
  await page.getByText('20').first().click();
  await page.getByText('20').nth(1).click();
  await page.getByText('32').click();

  }
}