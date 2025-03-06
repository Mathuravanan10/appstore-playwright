import { Page, expect, chromium } from "@playwright/test";

export class kelloges {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;

  }

async kollgesLogin() {
  await this.page.waitForLoadState('domcontentloaded');
    const links = ['https://www.kelloggs.com/me/en/home.html'];
    const classNames = [
      'class-one', 'class-two', 'class-three', 
      'class-four', 'class-five', 'class-six'
    ];
   
    for (const link of links) {
      console.log(`Navigating to: ${link}`);
      await this.page.goto(link, { timeout: 30000, waitUntil: 'domcontentloaded' });
   
      // Handle busy indicator if present
      try {
        const busyIndicator = this.page.getByText("Please wait");
        await busyIndicator.waitFor({ state: 'hidden', timeout: 60000 });
      } catch (error) {
        console.log("No busy indicator found, continuing...");
      }
   
      // Add class names dynamically
      await this.page.evaluate(({ selector, classes }) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((element, index) => {
          if (index < classes.length) {
            element.classList.add(classes[index]);
          }
        });
      }, { selector: 'span.cta-text', classes: classNames });
   
      // Process elements one by one
      for (const className of classNames) {
        console.log(`Processing class: ${className}`);
   
        // Click the current element with the specific class name
        const clickableElement = this.page.locator(`span.cta-text.${className}`);
        console.log(clickableElement, 'iii')
        // if (await clickableElement.isVisible()) {
        //   await clickableElement.click();
        //   await this.page.waitForLoadState('domcontentloaded');
        //   console.log(`Clicked and navigated for class: ${className}`);
        // } else {
        //   console.log(`Element with class ${className} not found or not visible.`);
        //   continue;
        // }
   
        // Fetch and print the updated classes or page elements after navigation
        const updatedClassNames = await this.page.evaluate(() => {
          return Array.from(document.querySelectorAll('span.cta-text'))
            .map((el) => el.className);
        });
   
        console.log(`Updated class names after navigation:`, updatedClassNames);
   
        // Optionally, navigate back to the original page to continue processing
        await this.page.goBack({ waitUntil: 'domcontentloaded' });
      }
    }
  const browser = await chromium.launch();
  const page = await browser.newPage();
 
  Navigate to the target page
  await this.page.goto('https://www.townhousecrackers.ca/fr_CA/home.html');
 
  // Extract all href values from <a> tags
  const hrefs = await this.page.$$eval('a', links =>
    links.map(link => link.href)
  );
 
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


  await page.goto('https://www.townhousecrackers.ca/en_CA/home.html');
  await page.getByRole('button', { name: 'Accept Cookies' }).click();
  await page.getByLabel('menu', { exact: true }).getByLabel('Our Food').click();
  await page.getByRole('link', { name: 'Kellogg’s* Town House* Original Crackers Image Kellogg’s* Town House* Original' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByTitle('Buy Now at Wholesale Club').click();
  const page1 = await page1Promise;
  await page1.goto('https://www.wholesaleclub.ca/en/town-house-oven-baked-crackers-light-and-buttery-f/p/21107403_EA');
  await page1.locator('#site-layout').click();
  await page1.locator('#site-layout').click();
  const page2Promise = page.waitForEvent('popup');
  await page.getByTitle('Buy Now at Zehrs').click();
  const page2 = await page2Promise;
  await page2.goto('https://www.zehrs.ca/en/town-house-oven-baked-crackers-light-and-buttery-f/p/21107403_EA');
  await page2.getByRole('img', { name: 'Town House Oven Baked' }).click();
  await page2.getByRole('heading', { name: 'Town House Oven Baked' }).click();
  const page3Promise = page.waitForEvent('popup');
  await page.getByTitle('Buy Now at Amazon').click();
  const page3 = await page3Promise;
  await page3.getByRole('heading', { name: 'Kellogg\'s Town House Original' }).locator('#productTitle').click();
  const page4Promise = page.waitForEvent('popup');
  await page.getByTitle('Buy Now at Walmart').click();
  const page4 = await page4Promise;
  await page4.getByLabel('Close dialogue').click();
  await page4.getByLabel('Close dialogue').click();
  await page4.getByRole('link', { name: 'Walmart Homepage' }).click();
  await page4.getByLabel('Close dialogue').click();
  const page5Promise = page.waitForEvent('popup');
  await page.getByTitle('Buy Now at Real Canadian').click();
  const page5 = await page5Promise;
  await page5.goto('https://www.realcanadiansuperstore.ca/en/town-house-oven-baked-crackers-light-and-buttery-f/p/21107403_EA');
  await page5.getByRole('img', { name: 'Town House Oven Baked' }).click();
  await page5.getByRole('heading', { name: 'Town House Oven Baked' }).click();


  await page.goto('https://www.kellanovaus.com/us/en/home.html');
  await page.getByRole('button', { name: 'OK', exact: true }).click();
  await page.getByRole('heading', { name: 'Welcome to Kellanova' }).click();
  await page.getByRole('img', { name: 'Pringles, Club and Cheez IT' }).click();
  await page.getByRole('heading', { name: 'Check out our brands' }).click();
  await page.getByRole('link', { name: 'Our Brands' }).click();
  await page.goto('https://www.kellanovaus.com/us/en/home.html');
  await page.getByRole('link', { name: 'New Products' }).click();
  await page.getByRole('link', { name: 'Special Offers' }).click();
  await page.goto('https://www.kellanovaus.com/us/en/home.html');
  await page.getByRole('link', { name: 'Where To Buy', exact: true }).click();
  await page.getByLabel('Close the shop now shopping').click();
  await page.locator('header').getByRole('link', { name: 'Contact Us' }).click();
  await page.goto('https://www.kellanovaus.com/us/en/home.html');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByPlaceholder('Type Here....').fill('');
  await page.getByLabel('Close Search').click();


  await page.goto('https://www.kellanovaus.com/us/en/home.html');
  await page.getByRole('button', { name: 'OK', exact: true }).click();
  await page.getByRole('img', { name: 'cheez-it logo' }).click();
  await page.getByRole('img', { name: 'pringles logo' }).click();
  await page.getByRole('img', { name: 'club crackers logo' }).click();
  await page.getByRole('img', { name: 'club crackers logo' }).click();
  await page.getByRole('img', { name: 'RKT logo' }).click();
  await page.getByRole('img', { name: 'townhouse logo' }).click();
  await page.getByRole('img', { name: 'poptart logo' }).click();
  await page.getByRole('img', { name: 'rxbar logo' }).click();
  await page.getByRole('img', { name: 'moringstar farms logo' }).click();
  await page.getByRole('img', { name: 'eggo logo' }).click();
  await page.getByRole('link', { name: 'View all products arrow' }).click();
  await page.goto('https://www.kellanovaus.com/us/en/home.html');
  await page.getByRole('heading', { name: 'Munch more with these money' }).click();
  await page.getByRole('img', { name: 'Crackers with olives and' }).click();
  await page.getByRole('link', { name: 'Save Now' }).click();
  await page.getByRole('img', { name: 'waffle' }).click();
  await page.getByRole('heading', { name: 'Coupons', exact: true }).click();
  await page.getByText('Featured brand: Club® Crackers').click();
  await page.getByRole('link', { name: 'lady eating a chip' }).click();
  await page.getByRole('link', { name: '?Man holding Pringles can' }).click();

  await page.goto('https://www.kellanovaus.com/us/en/home.html');
  await page.getByRole('button', { name: 'OK', exact: true }).click();
  await page.getByRole('link', { name: 'View all products arrow' }).click();
  await page.getByRole('heading', { name: 'Our Brands' }).click();
  await page.getByRole('img', { name: 'Packshots of Kellanova brands' }).click();
  await page.getByText('Kellanova strives to provide').click();
  await page.goto('https://www.kellanovaus.com/us/en/home.html');

  await page.goto('https://www.kellanovaus.com/us/en/home.html');
  await page.getByRole('button', { name: 'OK', exact: true }).click();
  await page.getByRole('link', { name: 'clubcrackers' }).click();
  await page.locator('h1').click();
  await page.getByRole('link', { name: 'Austin crackers' }).click();
  await page.goto('https://www.kellanovaus.com/us/en/home.html');
  await page.getByRole('link', { name: 'Time to get cooking with' }).click();
  await page.getByRole('heading', { name: 'Recipes with the brands you' }).click();
  await page.getByRole('link', { name: 'Where to buy your snacking' }).click();
  await page.getByRole('heading', { name: 'Where to buy' }).click();


  await page.goto('https://www.kellanovaus.com/us/en/home.html');
  await page.getByRole('link', { name: 'Our Brands' }).click();
  await page.getByRole('button', { name: 'OK', exact: true }).click();
  await page.getByText('Kellanova strives to provide').click();
  await page.getByRole('link', { name: 'Austin' }).click();
  await page.goto('https://www.kellanovaus.com/us/en/our-brands.html');
  await page.getByRole('link', { name: 'Carr\'s' }).click();
  await page.goto('https://www.kellanovaus.com/us/en/our-brands.html');
  await page.getByRole('link', { name: 'Cheez-It' }).click();
  await page.goto('https://www.kellanovaus.com/us/en/home.html');
  await page.getByRole('link', { name: 'New Products' }).click();
  await page.getByRole('heading', { name: 'Here’s what’s NEW from' }).click();
  await page.getByRole('img', { name: 'td-italian-herb%402x' }).click();
  await page.getByRole('heading', { name: 'Toasteds® Flatbreads Italian' }).click();
  await page.getByRole('link', { name: 'View Product' }).first().click();
  await page.goto('https://www.kellanovaus.com/us/en/new-products.html');
  await page.getByRole('heading', { name: 'Toasteds® Flatbreads Sea Salt' }).click();
  await page.getByRole('link', { name: 'View Product' }).nth(1).click();
  await page.goto('https://www.kellanovaus.com/us/en/home.html');
  await page.getByRole('link', { name: 'Special Offers' }).click();
  await page.getByRole('heading', { name: 'Special Offers For You & Yours' }).click();
  await page.getByRole('img', { name: 'Woman peaking around the' }).click();
  await page.getByText('Celebrate and share the love').click();
  await page.getByRole('heading', { name: 'Current Promotions' }).click();
  await page.getByRole('link', { name: 'Where To Buy' }).click();
  await page.getByLabel('Close the shop now shopping').click();
  await page.locator('header').getByRole('link', { name: 'Contact Us' }).click();
  await page.getByRole('heading', { name: 'Contact Us' }).click();


  await page.goto('https://www.kellanovaus.com/us/en/home.html');
  await page.getByRole('button', { name: 'OK', exact: true }).click();
  await page.getByRole('link', { name: 'Our Brands' }).click();
  await page.getByRole('link', { name: 'Austin' }).click();
  await page.locator('h1').click();
  await page.getByRole('heading', { name: 'Conveniently packaged to fit' }).click();
  await page.getByRole('link', { name: 'Austin crackers' }).click();
  await page.locator('h2').filter({ hasText: 'Austin®' }).click();
  await page.getByRole('link', { name: 'Austin Cheese Crackers with Cheddar Cheese Image Austin Cheese Crackers with' }).click();
  await page.getByRole('img', { name: 'Austin Cheese Crackers with' }).click();
  await page.getByRole('heading', { name: 'Austin Cheese Crackers with' }).click();
  await page.getByRole('button', { name: '2.0 out of 5 stars, average' }).click();
  await page.getByText('Sandwich Crackers, Cheese').click();
  await page.goto('https://www.kellanovaus.com/us/en/brands/austin.html#');
  await page.getByRole('link', { name: 'Austin Toasty Crackers with' }).click();
  await page.getByRole('img', { name: 'Austin Toasty Crackers with' }).click();
  await page.getByRole('heading', { name: 'Austin Toasty Crackers with' }).click();
  await page.getByRole('button', { name: '2.2 out of 5 stars, average' }).click();
  await page.getByText('Baked peanut butter sandwich').click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'View SmartLabel' }).click();
  const page1 = await page1Promise;
  await page1.getByText('Austin® Toasty Crackers with').click();
  await page.getByRole('heading', { name: 'Nutrition' }).click();
  await page.goto('https://www.kellanovaus.com/us/en/brands/austin.html#');
  await page.getByRole('link', { name: 'Austin Cheese Crackers with Peanut Butter Image Austin Cheese Crackers with' }).click();
  await page.getByRole('img', { name: 'Austin Cheese Crackers with' }).click();
  await page.getByRole('heading', { name: 'Austin Cheese Crackers with' }).click();
  await page.getByRole('button', { name: '2.1 out of 5 stars, average' }).click();
  await page.getByLabel('click to see where to buy').click();
  await page.getByLabel('Shop Austin® Cheese Crackers').click();
  await page.getByRole('heading', { name: 'Nutrition' }).click();
  await page.getByRole('heading', { name: 'Want it. Need it. Cheez-It®' }).click();
  await page.getByRole('heading', { name: 'Endless flavors to #' }).click();
  await page.getByRole('link', { name: 'View Brand' }).first().click();
  await page.locator('h1').click();
  await page.goto('https://www.kellanovaus.com/us/en/brands/austin.html#');
  await page.getByRole('link', { name: 'View Brand' }).nth(1).click();
  await page.locator('h1').click();
  await page.goto('https://www.kellanovaus.com/us/en/brands/austin.html#');

  await page.goto('https://www.townhousecrackers.ca/en_CA/home.html');
  await page.getByRole('button', { name: 'Accept Cookies' }).click();
  await page.getByRole('link', { name: 'CRANBERRY AND PISTACHIO' }).click();
  await page.getByText('1. In small saucepan combine').click();
  await page.getByText('2. In small mixing bowl beat').click();
  await page.getByText('3. Spoon cream cheese mixture').click();
  await page.getByText('*NOTE: Soften in microwave at').click();
  await page.getByText('**NOTE: To toast nuts spread').click();
  await page.getByRole('heading', { name: 'Directions' }).click();
  await page.getByRole('heading', { name: 'Ingredients' }).click();
  await page.getByText('/2 cup').first().click();
  await page.getByText('dried cranberries', { exact: true }).click();
  await page.getByText('Kellogg\'s® Town House®').click();
  await page.getByText('/2 cup white grape juice').click();
  await page.getByText('/2 cup dried cranberries').click();
  await page.getByText('tablespoons honey').click();
  await page.getByText('1 package (225 g) cream').click();
  await page.getByText('1/2 cup chopped pistachio').click();
  await page.getByText('tablespoons chopped fresh parsley').click();
  await page.getByText('/8 teaspoon salt').click();
  await page.getByText('/8 teaspoon pepper').click();


  await page.goto('https://www.townhousecrackers.ca/en_CA/home.html');
  await page.getByRole('button', { name: 'Accept Cookies' }).click();
  await page.getByRole('heading', { name: 'Sign Up Now!' }).click();
  await page.getByText('Sign up now to get our latest').click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Join Today' }).click();
  const page1 = await page1Promise;
  await page.getByRole('heading', { name: 'Where to Buy' }).click();
  await page.getByText('Running low on Town House*').click();
  await page.getByRole('link', { name: 'Shop Now' }).click();


  await page.goto('https://www.kellanova.ca/en_CA/home.html');
  await page.getByRole('button', { name: 'Accept Cookies' }).click();
  await page.getByRole('navigation').getByRole('link', { name: 'Our Brands' }).click();
  await page.locator('.kstl-feature-inset').click();
  await page.getByRole('link', { name: 'Brands', exact: true }).click();
  await page.goto('https://www.kellanova.ca/en_CA/home.html');
  await page.getByRole('img', { name: 'Better Days Learn how we\'re' }).click();
  await page.getByText('Better Days', { exact: true }).first().click();
  await page.getByText('Learn how we\'re creating').first().click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'LEARN MORE' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('button', { name: 'Accept Cookies' }).click();
  await page1.getByRole('heading', { name: 'Kellanova Better Days™ Promise', exact: true }).click();
  await page.locator('.kstl-feature-inset').click();
  await page.getByText('Be the first to know').click();
  await page.getByText('Sign up now to get our latest').click();
  await page.getByRole('link', { name: 'JOIN TODAY!' }).click();
  await page.locator('#skip-main-content').getByRole('img').click();
  await page.getByRole('navigation').getByRole('link', { name: 'Where to Buy' }).click();
  await page.locator('#skip-main-content').getByRole('img').first().click();
  await page.locator('#skip-main-content').getByText('Where to Buy').click();
  await page.locator('.content_wrapper > div > div:nth-child(2) > .grid').first().click();
  await page.goto('https://www.kellanova.ca/en_CA/where-to-buy.html#/ON/any/categories/~/any');
  await page.getByRole('banner').getByRole('link', { name: 'Our Brands' }).click();


  await page.goto('https://www.kellanova.ca/en_CA/home.html');
  await page.getByRole('button', { name: 'Accept Cookies' }).click();
  await page.getByRole('navigation').getByRole('link', { name: 'Our Brands' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'CheezIt Brand page' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('button', { name: 'Accept Cookies' }).click();
  await page1.locator('#maincontent div').filter({ hasText: 'Get More Real Cheese' }).nth(3).click();
  await page.getByRole('link', { name: 'Eggo Brand page' }).click();
  await page.locator('#skip-main-content').getByRole('img').first().click();
  await page.getByText('A great tasting, warm part of').click();
  await page.getByText('Our products').click();
  await page.getByRole('img', { name: 'Kellogg\'s* Eggo* Thick & Fluffy Strawberry Delight Waffles' }).click();
  await page.getByRole('img', { name: 'Eggo T&F Strawberry EN' }).click();
  await page.getByRole('heading', { name: 'Kellogg\'s* Eggo* Thick &' }).click();
  await page.getByText('Mornings just got sweeter').click();
  const page2Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'View SmartLabel' }).click();
  const page2 = await page2Promise;
  await page.getByText('Purchase This Product Online').click();
  await page.getByLabel('Metro Ontario').click();
  const page3Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Buy Now' }).click();
  const page3 = await page3Promise;
  await page.getByLabel('Instacart').click();
  const page4Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Go To App' }).click();
  const page4 = await page4Promise;
  await page4.goto('https://www.instacart.ca/products/28874250-kellogg-s-eggo-strawberry-delight-frozen-waffle-330-g?irgwc=1&utm_source=instacart_impact&utm_medium=affiliate&utm_term=partnertype-mediapartner_adtype-TEXT_LINK_adname-Yummly%20Test%20Link&utm_campaign=partner-Skimbit%20Ltd.&utm_content=clickid-zRtVXFVjzxyKRFbUfFVAl2mQUksxx3V8ZQ-7yk0_campaignid-7412_partnerid-10078_adid-480950_sharedid-kellanova.ca&traff_category=');
  await page.getByRole('button', { name: 'Region' }).click();
  await page.getByRole('option', { name: 'Nova Scotia' }).click();
  await page.getByRole('button', { name: 'Region' }).click();
  await page.getByRole('option', { name: 'Ontario' }).click();
  await page.goto('https://www.kellanova.ca/en_CA/our-brands.html');
  await page.getByRole('link', { name: 'Kelloggs Town House Brand page' }).click();



  await page.goto('https://www.kellanova.ca/en_CA/home.html');
  await page.getByRole('button', { name: 'Accept Cookies' }).click();
  await page.getByRole('contentinfo').getByRole('link', { name: 'Our Brands' }).click();
  await page.goto('https://www.kellanova.ca/en_CA/home.html');
  await page.getByRole('contentinfo').getByRole('link', { name: 'Where to Buy' }).click();
  await page.locator('.kstl-image-wrapper > .kstl-responsive-image > img').first().click();
  await page.getByRole('link', { name: 'Sign Up for Newsletter' }).click();
  await page.getByRole('heading', { name: 'Be the first to know' }).click();
  await page.getByText('Sign up now to get our latest').click();
  await page.getByLabel('*Date of Birth').fill('2010-02-12');
  await page.getByLabel('*Email Address').click();
  await page.getByLabel('*Email Address').fill('mathu@gmail.com');
  await page.getByLabel('*First Name').click();
  await page.getByLabel('*First Name').fill('mathu');
  await page.getByLabel('*Last Name').click();
  await page.getByLabel('*Last Name').fill('mathi');
  await page.getByLabel('*News, Promotions and Special').check();
  await page.goto('https://www.kellanova.ca/en_CA/where-to-buy.html#/ON/any/categories/~/any');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Charitable Partners' }).click();
  const page1 = await page1Promise;
  const page2Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Careers' }).click();
  const page2 = await page2Promise;
  const page3Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Out of Home' }).click();
  const page3 = await page3Promise;
  await page.getByRole('link', { name: 'Sitemap' }).click();
  await page.getByRole('heading', { name: 'Sitemap' }).click();
  const page4Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Modern Slavery Report' }).click();
  const page4 = await page4Promise;
  await page.getByText('Cookie Preferences', { exact: true }).click();
  await page.getByRole('button', { name: 'Reject All' }).click();
  await page.getByText('Contact Us').click();
  await page.locator('#skip-main-content').getByRole('img').first().click();
  await page.getByRole('link', { name: 'View Our FAQs' }).click();
  await page.goto('https://www.kellanova.ca/en_CA/contact-us.html');
  await page.locator('#skip-main-content iframe').contentFrame().getByRole('heading', { name: 'Contact Us', exact: true }).click();
  await page.locator('#skip-main-content iframe').contentFrame().getByText('Monday - Friday 8:30 am - 4:').click();
  await page.locator('#skip-main-content iframe').contentFrame().getByText('Kellanova Canada Inc. 5350').click();
  await page.locator('#skip-main-content iframe').contentFrame().getByRole('heading', { name: 'Contact Us by Email' }).click();
  await page.locator('#skip-main-content iframe').contentFrame().getByText('If you are under 18, please').click();
  await page.goto('https://www.kellanova.ca/en_CA/where-to-buy.html#/ON/any/categories/~/any');
  await page.getByRole('link', { name: 'Terms of Use' }).click();
  await page.goto('https://www.kellanova.ca/en_CA/where-to-buy.html#/ON/any/categories/~/any');
  await page.getByRole('link', { name: 'Accessibility' }).click();
  await page.getByRole('heading', { name: 'Accessibility' }).click();
  await page.getByRole('link', { name: 'Privacy Notice' }).click();
  await page.goto('https://www.kellanova.com/us/en/privacy-notice.html');
  await page.getByRole('button', { name: 'Accept Cookies' }).click();
  await page.getByRole('heading', { name: 'Kellanova Consumer Privacy' }).click();
  await page.goto('https://www.kellanova.ca/en_CA/home.html');

  await page.getByRole('link', { name: 'open search overlay' }).click();
  await page.getByPlaceholder('Search', { exact: true }).click();
  await page.getByPlaceholder('Search', { exact: true }).fill('mathu');
  await page.getByPlaceholder('Search', { exact: true }).press('Enter');
  await page.getByText('Results 0 - 0 of').first().click();
  await page.getByRole('link', { name: 'search' }).click();



  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByPlaceholder('Type Here....').click();
  await page.getByPlaceholder('Type Here....').fill('https://www.kellanovaus.com/us/en/home.html');
  await page.getByRole('button', { name: 'Search', exact: true }).click();
  await page.getByRole('heading', { name: 'Search Results' }).click();
  await page.getByRole('heading', { name: 'Results for "EGGO PANCAKES' }).click();
  await page.getByRole('link', { name: 'EGGO PANCAKES BUTTERMILK' }).click();
  await page.getByRole('img', { name: 'Kellogg\'s® Eggo® Buttermilk' }).click();
  await page.getByRole('heading', { name: 'Kellogg\'s® Eggo® Buttermilk' }).click();
  await page.getByPlaceholder('of 1 Page').click();
  await page.locator('div').filter({ hasText: 'News Investors Careers Our' }).first().click();
  await page.goto('https://www.kellanovaus.com/us/en/home.html');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByPlaceholder('Type Here....').click();
  await page.getByPlaceholder('Type Here....').fill('EGGO PANCAKES BUTTERMILK');
  await page.getByRole('button', { name: 'Search', exact: true }).click();
  await page.getByRole('heading', { name: 'No results for "EGGO PANCAKES' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByPlaceholder('Type Here....').click();
  await page.getByPlaceholder('Type Here....').fill('eggo pancakes ');
  await page.locator('#search').click();
  await page.getByPlaceholder('Type Here....').fill('eggo pancakes but');
  await page.getByPlaceholder('Type Here....').fill('eggo pancakes butter');
  await page.getByRole('button', { name: 'Search', exact: true }).click();
  await page.getByText('Type your search and press').click();
  await page.getByRole('button', { name: 'Search', exact: true }).click();
  await page.getByRole('button', { name: 'Search', exact: true }).click();
  await page.getByLabel('Close Search').click();


  await page.goto('https://www.kellanova.ca/en_CA/home.html');
  await page.getByRole('button', { name: 'Accept Cookies' }).click();
  await page.getByRole('navigation').getByRole('link', { name: 'Our Brands' }).click();
  await page.getByRole('link', { name: 'Eggo Brand page' }).click();
  await page.getByRole('img', { name: 'Kellogg\'s* Eggo* Eggoji' }).click();
  await page.getByRole('img', { name: 'Eggoji EN' }).click();
  await page.getByRole('heading', { name: 'Kellogg\'s* Eggo* Eggoji Original Waffles', exact: true }).click();
  await page.getByText('Express yourself in the').click();
  await page.getByRole('link', { name: 'Send a question' }).click();
  await page.goto('https://www.kellanova.ca/en_CA/products/kellogg-eggo-waffles-eggoji-original.html');
  await page.getByRole('button', { name: 'Region' }).click();
  await page.getByRole('option', { name: 'Nova Scotia' }).click();
  await page.getByRole('button', { name: 'Region' }).click();
  await page.getByRole('option', { name: 'Ontario' }).click();
  await page.goto('https://www.kellanova.ca/en_CA/brands/eggo-consumer-brand.html');
  await page.getByRole('img', { name: 'Kellogg\'s* Eggo* Original Whole Grain Waffles' }).click();
  await page.getByRole('img', { name: 'Wholegrain original EN' }).click();
  await page.getByRole('heading', { name: 'Kellogg\'s* Eggo* Original Whole Grain Waffles', exact: true }).click();
  await page.getByText('Our Kellogg\'s* Eggo* waffles').click();
  await page.goto('https://www.kellanova.ca/en_CA/brands/eggo-consumer-brand.html');
  await page.getByRole('img', { name: 'Kellogg\'s* Eggo* Waffles' }).click();
  await page.getByRole('img', { name: 'Buttermilk waffles EN' }).click();
  await page.getByRole('heading', { name: 'Kellogg\'s* Eggo* Waffles' }).click();
  await page.getByText('Wake up with this tasty').click();
  await page.getByRole('button', { name: 'Select Pack Size' }).click();
  await page.getByRole('option', { name: '280g' }).click();
  await page.goto('https://www.kellanova.ca/en_CA/brands/eggo-consumer-brand.html');
  await page.getByRole('img', { name: 'Kellogg\'s* Eggo* Chocolatey Chip Waffles' }).click();
  await page.getByRole('img', { name: 'Choc Chip EN' }).click();
  await page.getByRole('heading', { name: 'Kellogg\'s* Eggo* Chocolatey' }).click();
  await page.getByText('Get a sweet start to your').click();
  await page.goto('https://www.kellanova.ca/en_CA/brands/eggo-consumer-brand.html');
  await page.getByRole('img', { name: 'Kellogg\'s* Eggo* Waffles' }).click();
  await page.getByRole('img', { name: 'Buttermilk waffles EN' }).click();
  await page.getByRole('heading', { name: 'Kellogg\'s* Eggo* Waffles' }).click();
  await page.getByText('Wake up with this tasty').click();
  await page.getByText('Kellogg\'s* Eggo* Chocolatey Chip Waffles').click();
  await page.getByRole('img', { name: 'Choc Chip EN' }).click();
  await page.getByRole('heading', { name: 'Kellogg\'s* Eggo* Chocolatey Chip Waffles', exact: true }).click();
  await page.getByText('Get a sweet start to your').click();


  await page.goto('https://www.kellanova.ca/en_CA/home.html');
  await page.getByRole('button', { name: 'Accept Cookies' }).click();
  await page.getByRole('navigation').getByRole('link', { name: 'Our Brands' }).click();
  await page.getByRole('link', { name: 'Kelloggs Town House Brand page' }).click();
  await page.locator('#skip-main-content').getByRole('img').first().click();
  await page.getByText('With Kellogg’s* Town House*').click();
  await page.getByText('Our products').click();
  await page.getByRole('img', { name: 'Town House* Pita Mediterranean Herb Crackers' }).click();
  await page.getByRole('img', { name: '00064100150102_C1L1_en' }).click();
  await page.getByRole('img', { name: 'Town House* Flatbread Crisps Italian Herb Crackers' }).click();
  await page.getByRole('img', { name: '00064100148864_A1L1_en' }).click();
  await page.getByRole('img', { name: 'Town House* Pita Mediterranean Herb Crackers' }).click();
  await page.getByRole('img', { name: '00064100150102_C1L1_en' }).click();
  await page.goto('https://www.kellanova.ca/en_CA/brands/kelloggs-s-town-house.html');
  await page.getByRole('img', { name: 'Kellogg’s* Town House* Original Crackers' }).click();
  await page.getByRole('img', { name: 'TH Original - EN' }).click();

  await page.goto('https://www.kellanova.ca/en_CA/home.html');
  await page.getByRole('button', { name: 'Accept Cookies' }).click();
  await page.getByRole('navigation').getByRole('link', { name: 'Our Brands' }).click();
  await page.getByRole('link', { name: 'Nutrigrain Brand page' }).click();
  await page.locator('.kstl-image-wrapper > .kstl-responsive-image > img').first().click();
  await page.getByText('Delicious soft-baked goodness').click();
  await page.getByText('Our products').click();
  await page.getByRole('img', { name: 'Nutri-Grain* Raspberry Cereal' }).click();
  await page.getByRole('img', { name: 'NG Raspberry' }).click();
  await page.getByRole('img', { name: 'Nutri-Grain* Raspberry Cereal' }).click();
  await page.getByRole('img', { name: 'NG Raspberry' }).click();
  await page.getByRole('img', { name: 'Nutri-Grain* Strawberry' }).click();
  await page.getByRole('img', { name: 'NG Strawberry' }).click();
  await page.getByRole('img', { name: 'Nutri-Grain* Apple Cinnamon' }).click();
  await page.getByRole('img', { name: 'NG Apple Cinnamon' }).click();
  await page.goto('https://www.kellanova.ca/en_CA/brands/nutri-grain-consumer-brand.html');
  await page.getByRole('img', { name: 'Nutri-Grain* Strawberry' }).click();
  await page.getByRole('img', { name: 'NG Strawberry' }).click();


  await page.goto('https://www.kellanova.ca/en_CA/home.html');
  await page.getByRole('button', { name: 'Accept Cookies' }).click();
  await page.getByRole('navigation').getByRole('link', { name: 'Our Brands' }).click();
  await page.getByRole('link', { name: 'Pop-Tarts Brand page' }).click();
  await page.locator('#skip-main-content').getByRole('img').first().click();
  await page.getByText('Add a little fun to your').click();
  await page.getByRole('img', { name: 'Pop-Tarts* Bites Mini Pastries Frosted Blueberry Flavour' }).click();
  await page.getByRole('img', { name: 'PT Bites blueberry' }).click();
  await page.getByRole('img', { name: 'Pop-Tarts* Bites Mini Pastries Frosted Blueberry Flavour' }).click();
  await page.getByRole('img', { name: 'PT Bites blueberry' }).click();
  await page.getByRole('img', { name: 'Pop-Tarts* Bites Mini Pastries Frosted Cinnamon Roll' }).click();
  await page.getByRole('img', { name: '00064100148390_A1L1' }).click();
  await page.getByRole('img', { name: 'Pop-Tarts* Frosted Raspberry' }).click();
  await page.getByRole('img', { name: 'Prod_Img-' }).click();
  await page.goto('https://www.kellanova.ca/en_CA/brands/pop-tarts-consumer-brand.html');


  await page.getByRole('button', { name: 'Accept Cookies' }).click();
  await page.getByRole('navigation').getByRole('link', { name: 'Our Brands' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Pringles Brand page' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('button', { name: 'Accept Cookies' }).click();
  await page1.getByRole('heading', { name: 'Perfect flavour in every bite' }).click();
  await page.getByRole('link', { name: 'Rice Krispies Brand page' }).click();
  await page.locator('.kstl-image-wrapper > .kstl-responsive-image > img').first().click();
  await page.getByText('Rice Krispies Squares* Bars').click();
  await page.getByRole('img', { name: 'Rice Krispies Squares* Original Bars' }).click();
  await page.getByRole('img', { name: 'RKSB Original 8ct 176g' }).click();
  await page.getByRole('img', { name: 'Rice Krispies Squares* Homestyle Original Bars' }).click();
  await page.getByRole('img', { name: 'RKSB Homestyle Original' }).click();
  await page.getByRole('img', { name: 'Rice Krispies Squares* Chocolate Chip Cookie Dough Flavour Bars' }).click();
  await page.getByRole('img', { name: '00064100147492_A1L1' }).click();
  await page.getByRole('img', { name: 'Kellogg\'s® Rice Krispies' }).click();
  await page.getByRole('img', { name: '00064100148307_A1L1-1280x1280' }).click();
  await page.goto('https://www.kellanova.ca/en_CA/home.html');
  await page.getByRole('navigation').getByRole('link', { name: 'Our Brands' }).click();
  await page.getByRole('link', { name: 'Special K Brand page' }).click();
  await page.locator('.kstl-image-wrapper > .kstl-responsive-image > img').first().click();
  await page.getByText('Real Ingredients. Real').click();
  await page.getByRole('img', { name: 'Special K* Blueberry Flavour' }).click();
  await page.getByRole('img', { name: 'Prod_Img-' }).click();
  await page.getByRole('img', { name: 'Special K* Nuts & Grain Dark' }).click();
  await page.getByRole('img', { name: '00064100113312_A1L1' }).click();
  await page.getByRole('img', { name: 'Special K* Nuts & Grain Cranberries & Almonds Bars' }).click();
  await page.getByRole('img', { name: '00064100113343_A1L1' }).click();
  await page.getByRole('img', { name: 'Special K* Nuts & Grain Cranberries & Almonds Bars' }).click();
  await page.getByRole('img', { name: '00064100113343_A1L1' }).click();

  await page.getByRole('link', { name: 'Portable Snacks' }).click();
  await page.getByRole('link', { name: 'Crackers' }).click();
  await page.getByRole('link', { name: 'Chips' }).click();
  await page.getByRole('link', { name: 'Waffles & Pancakes' }).click();

  await page.goto('https://www.kellanova.ca/en_CA/home.html');
  await page.getByRole('button', { name: 'Accept Cookies' }).click();
  await page.getByRole('navigation').getByRole('link', { name: 'Where to Buy' }).click();
  await page.getByRole('link', { name: 'Portable Snacks' }).click();
  await page.getByRole('button', { name: 'Sold By' }).click();
  await page.getByRole('option', { name: 'Zehrs' }).click();
  await page.getByRole('button', { name: 'Sold By' }).click();
  await page.getByRole('option', { name: 'All Retailer' }).click();
  await page.locator('li').filter({ hasText: 'Nutri-Grain* Blueberry Bars (' }).getByRole('button').nth(1).click();
  await page.locator('#ProductTitle').click();
  await page.locator('#PopupBox').getByText('(4.6) Stars').click();
  await page.getByRole('button', { name: 'Show More' }).click();
  await page.getByText('Nutri-Grain Blueberry Cereal').click();
  await page.getByRole('button', { name: 'Show Less' }).click();
  await page.getByRole('heading', { name: 'Pack Size:' }).click();
  await page.getByRole('button', { name: '295g' }).click();
  await page.getByRole('button', { name: 'Click to zoom in' }).click();
  await page.getByLabel('close', { exact: true }).click();
  await page.getByRole('button', { name: 'Sold By' }).click();
  await page.getByRole('option', { name: 'Instacart' }).click();
  await page.getByRole('button', { name: 'Tell me about' }).click();
  await page.getByRole('option', { name: 'All Products' }).click();



  await page.getByRole('link', { name: 'Portable Snacks' }).click();
  await page.getByRole('button', { name: 'Tell me about' }).click();
  await page.getByRole('option', { name: 'Crackers' }).click();
  await page.getByRole('button', { name: 'Tell me about' }).click();
  await page.getByRole('option', { name: 'Chips' }).click();
  await page.getByRole('button', { name: 'Tell me about' }).click();
  await page.getByRole('option', { name: 'Waffles & Pancakes' }).click();
  await page.getByRole('button', { name: 'Tell me about' }).click();
  await page.getByRole('option', { name: 'All Products' }).click();
  await page.getByRole('button', { name: 'Region' }).click();
  await page.getByRole('option', { name: 'Alberta' }).click();
  await page.getByRole('button', { name: 'Region' }).click();
  await page.getByRole('option', { name: 'British Columbia' }).click();
  await page.getByRole('button', { name: 'Region' }).click();
  await page.getByRole('option', { name: 'Manitoba' }).click();
  await page.getByRole('button', { name: 'Region' }).click();
  await page.getByRole('option', { name: 'New Brunswick' }).click();
  await page.getByRole('button', { name: 'Region' }).click();
  await page.getByRole('option', { name: 'Newfoundland and Labrador' }).click();
  await page.getByRole('button', { name: 'Region' }).click();
  await page.getByRole('option', { name: 'Nova Scotia' }).click();
  await page.getByRole('button', { name: 'Region' }).click();
  await page.getByRole('option', { name: 'Prince Edward Island' }).click();
  await page.getByRole('button', { name: 'Region' }).click();
  await page.getByRole('option', { name: 'Quebec' }).click();
  await page.getByRole('button', { name: 'Region' }).click();
  await page.getByRole('option', { name: 'Saskatchewan' }).click();
  await page.getByRole('button', { name: 'Region' }).click();
  await page.getByRole('option', { name: 'Northwest Territories' }).click();
  await page.getByRole('button', { name: 'Region' }).click();
  await page.getByRole('option', { name: 'Yukon' }).click();
  await page.getByRole('img', { name: 'TH flipsides - EN' }).click();

  await page.locator('#container-508a319186 div').filter({ hasText: 'CHECK OUT OUR CHEEZ-IT®' }).nth(4).click();
  await page.getByText('CHECK OUT OUR', { exact: true }).click();
  await page.getByText('CHEEZ-IT®', { exact: true }).click();
  await page.getByText('PRODUCTS', { exact: true }).click();
  await page.getByRole('heading', { name: 'Our Snack Crackers' }).click();
  await page.getByLabel('Close Modal').click();

  await page.getByRole('button', { name: 'OK', exact: true }).click();
  await page.getByRole('img', { name: 'Want it. Need it. Cheez-it.', exact: true }).click();
  await page.getByRole('img', { name: 'A shirtless man covered in' }).click();
  await page.getByRole('button', { name: 'Carousel Next Slide' }).click();
  await page.getByRole('heading', { name: 'Cheesy, Thin & Crispy' }).click();
  await page.locator('.hero--alien-ufo-wrapper').click();
  await page.getByRole('button', { name: 'Carousel Next Slide' }).click();
  await page.getByRole('img', { name: 'Cheez-It Puffd White Cheddar' }).click();
  await page.getByRole('img', { name: 'Cheesy, airy, puffy.' }).click();
  await page.getByRole('link', { name: 'Check It Out', exact: true }).click();
  await page.getByText('Cheez-It® PUFF\'d®', { exact: true }).click();
  await page.getByText('Cheesy, Airy & Puffy Snacks').click();
  await page.getByRole('button', { name: 'Carousel Next Slide' }).click();
  await page.getByRole('button', { name: 'Carousel Next Slide' }).click();
  await page.getByLabel('Close Modal').click();
  await page.getByRole('button', { name: 'Carousel Previous Slide' }).click();
  await page.getByRole('button', { name: 'Carousel Previous Slide' }).click();
  await page.getByRole('heading', { name: 'Our Products' }).click();


  await page.getByRole('button', { name: 'OK', exact: true }).click();
  await page.getByLabel('menu', { exact: true }).getByRole('link', { name: 'Products' }).click();
  await page.getByRole('link', { name: 'Shop our site' }).click();
  await page.getByRole('link', { name: 'Original & Flavors' }).click();
  await page.getByLabel('menu', { exact: true }).getByRole('link', { name: 'Products' }).click();
  await page.getByRole('link', { name: `Puff\'d`, exact: true }).click();
  await page.getByRole('link', { name: 'Snap\'d' }).click();
  await page.getByRole('link', { name: 'Grooves' }).click();
  await page.getByRole('link', { name: 'Duoz' }).click();
  await page.getByRole('link', { name: 'Snack Mix' }).click();
  await page.getByRole('link', { name: 'Snack Packs' }).click();
  await page.getByRole('link', { name: 'Our Impact' }).click();
  await page.getByLabel('menu', { exact: true }).getByRole('link', { name: 'Recipes' }).click();
  await page.getByRole('link', { name: 'SHOP ALL', exact: true }).click();
  await page.getByRole('link', { name: 'Eat it' }).click();
  await page.getByRole('link', { name: 'Wear It' }).click();

  await page.getByLabel('menu', { exact: true }).getByRole('link', { name: 'Our Story' }).click();


  await page.goto('https://www.cheezit.com/en-us/home.html');
  await page.getByRole('button', { name: 'OK', exact: true }).click();
  await page.getByLabel('Close Modal').click();
  await page.getByRole('heading', { name: 'Our Products' }).click();
  await page.getByRole('link', { name: 'Cheez-It crackers snack bowl' }).click();
  await page.getByRole('img', { name: 'Cheez-It Baked Snack Crackers' }).click();
  await page.getByRole('heading', { name: 'Cheesy, Crunchy, Satisfaction.' }).click();
  await page.getByRole('link', { name: 'Cheez-It® Original Snack' }).click();
  await page.locator('section').filter({ hasText: 'Baked Snack Crackers Cheez-It' }).locator('img').first().click();
  await page.getByRole('heading', { name: 'Cheez-It® Original Snack' }).click();
  await page.getByText('The one. The only. The').click();
  await page.getByRole('heading', { name: 'Nutrition' }).click();
  await page.getByRole('heading', { name: 'Ingredients' }).click();
  await page.getByText('Ingredients: Enriched flour (').click();
  await page.getByText('For full nutrition').click();
  await page.locator('#container-22d6269fad').getByRole('link', { name: 'Where To Buy', exact: true }).click();
  await page.getByLabel('Shop from other retailers').locator('img').first().click();
  await page.getByLabel('Shop from other retailers').locator('img').nth(1).click();
  await page.getByLabel('Shop Cheez-It® Original Snack').click();
  await page.getByLabel('Close the shop now shopping').click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'View SmartLabel' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('button', { name: 'OK', exact: true }).click();


  await page.getByRole('link', { name: 'Check Out Our Promos and' }).click();
  await page.getByText('CURRENT', { exact: true }).click();
  await page.getByText('PROMOTIONS', { exact: true }).click();
  await page.locator('.section--in-viewport > .content_wrapper').click();
  await page.goto('https://www.cheezit.com/en-us/home.html');
  await page.getByRole('link', { name: 'Three Cheez-It boxes on a red' }).click();
  await page.locator('#ps-lightbox-background').click();
  await page.getByRole('link', { name: 'Three Cheez-It boxes on a red' }).click();


  await page.goto('https://www.cheezit.com/en-us/home.html');
  await page.getByRole('button', { name: 'OK', exact: true }).click();
  await page.getByLabel('Close Modal').click();
  await page.getByRole('link', { name: 'Shop All', exact: true }).click();//
  await page.getByRole('heading', { name: 'Welcome to Cheez-It®' }).click();
  await page.getByText('New Flavors & Merch Have').click();
  await page.locator('.pagebuilder-slide-wrapper').first().click();
  await page.getByLabel('All Products').getByText('All Products').click();
  await page.locator('#shopify-section-ci-cta div').filter({ hasText: 'WANT IT WANT IT WANT IT WANT' }).nth(1).click();
  await page.goto('https://www.cheezit.com/en-us/home.html');
  await page.getByRole('link', { name: 'Home' }).click();//
  await page.getByLabel('footer main navigation').getByRole('link', { name: 'Products' }).click();//
  await page.goto('https://www.cheezit.com/en-us/home.html');
  await page.getByRole('link', { name: 'Where To Buy', exact: true }).click(); //
  await page.getByLabel('Close the shop now shopping').click();
  await page.getByRole('link', { name: 'Promotions', exact: true }).click(); //
  await page.locator('.section--in-viewport > .content_wrapper').click();
  await page.getByRole('link', { name: 'Videos' }).click();//
  await page.locator('section').filter({ hasText: 'Videos' }).locator('div').first().click();
  await page.getByRole('link', { name: 'FAQ' }).click();//
  await page.locator('#container-ab915426f7 div').filter({ hasText: 'Frequently Asked Questions' }).nth(2).click();
  await page.getByLabel('footer main navigation').getByRole('link', { name: 'Recipes' }).click();//
  await page.getByRole('heading', { name: 'Recipes' }).locator('span').click();
  await page.locator('.section--in-viewport > .content_wrapper').first().click();
  await page.goto('https://www.cheezit.com/en-us/home.html');
  await page.getByLabel('footer main navigation').getByRole('link', { name: 'Cheez-It® Bowl' }).click();//
  await page.getByRole('img', { name: 'Cheez-It Citrus Bowl Logo' }).click();
  await page.getByRole('link', { name: 'Contact Us' }).click();//
  await page.getByRole('heading', { name: 'Contact Us' }).click();
  await page.getByRole('link', { name: 'Site Map' }).click();//
  await page.goto('https://www.cheezit.com/en-us/sitemap.html');
  await page.getByRole('heading', { name: 'Cheez-It® Site Map' }).click();
  await page.getByLabel('Back To Top').click();

  await page.getByRole('link', { name: 'Facebook' }).click();


  await page.goto('https://www.cheezit.com/en-us/home.html');
  await page.getByRole('button', { name: 'OK', exact: true }).click();
  await page.getByLabel('Close Modal').click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Facebook' }).click();
  const page1 = await page1Promise;
  await page1.getByLabel('Close').click();
  await page1.getByText('I love cheez it\'s but theres').click();
  await page.getByLabel('footer secondary navigation').getByText('Cookie Preferences').click();
  await page.getByRole('button', { name: 'Reject All' }).click();
  await page.getByRole('link', { name: 'Shipping & Returns' }).click();
  await page.getByRole('heading', { name: 'Shipping & Returns' }).click();
  await page.getByText('Do you offer free shipping?').click();
  const page2Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Privacy Notice' }).click();
  const page2 = await page2Promise;
  const page3Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'US Privacy' }).click();
  const page3 = await page3Promise;
  const page4Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Terms of Use' }).click();
  const page4 = await page4Promise;
  const page5Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Your Privacy Choices' }).click();
  const page5 = await page5Promise;
  const page6Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Accessibility' }).click();
  const page6 = await page6Promise;

  await page.goto('https://www.cheezit.com/en-us/home.html');
  await page.getByRole('button', { name: 'OK', exact: true }).click();
  await page.getByRole('link', { name: 'Our Impact' }).click();
  await page.getByRole('heading', { name: 'Our Impact' }).click();
  await page.locator('.section--in-viewport > .content_wrapper').first().click();
  await page.getByLabel('Close Modal').click();
  await page.getByText('At Cheez-It®, we’re dedicated').click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Cheez-it grooves, orginal,' }).click();
  const page1 = await page1Promise;
  await page.getByRole('link', { name: 'Accurate Box Company' }).click();
  await page.getByLabel('Close the mobile video player').click();
  await page.goto('https://www.cheezit.com/en-us/home.html');
  await page.getByLabel('menu', { exact: true }).getByRole('link', { name: 'Recipes' }).click();
  await page.getByRole('heading', { name: 'Recipes' }).locator('span').click();
  await page.goto('https://www.cheezit.com/en-us/home.html');
  await page.getByLabel('menu', { exact: true }).getByRole('link', { name: 'Cheez-It® Bowl' }).click();
  await page.getByRole('img', { name: 'Cheez-It Citrus Bowl Logo' }).click();
  await page.getByRole('heading', { name: 'Congrats to the 2024 Cheez-It' }).click();
  await page.getByText('As the cheeziest sponsor of').click();
  await page.getByRole('link', { name: 'Shop Cheez-It® Football Swag' }).click();
  await page.goto('https://www.cheezit.com/en-us/cheezitbowl.html');
  const page2Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Cheez-It Citrus Bowl Trophies' }).click();
  const page2 = await page2Promise;
  await page.goto('https://www.cheezit.com/en-us/home.html');
  await page.getByRole('link', { name: 'En español' }).click();
  await page.getByRole('link', { name: 'In English' }).click();
  await page.getByRole('link', { name: ' Where to buy' }).click();
  await page.getByLabel('Shop Cheez-It® Original Snack').click();
  await page.locator('.ps-product-image > div > img').click();
  await page.getByLabel('Close the shop now shopping').click();
  await page.getByRole('link', { name: ' Promotions' }).click();
  await page.locator('.section--in-viewport > .content_wrapper').click();
  await page.goto('https://www.cheezit.com/en-us/home.html');
  await page.getByLabel('Sign In / Sign Up / My Account').click();
  await page.getByText('Customer Login').click();
  await page.getByRole('heading', { name: 'New Customers' }).click();
  await page.getByRole('link', { name: 'Country Selector' }).click();
  await page.getByRole('heading', { name: 'Country Selector' }).click();


  await page.goto('https://www.cheezit.com/en-us/home.html');
  await page.getByRole('button', { name: 'OK', exact: true }).click();
  await page.getByRole('link', { name: 'Shop', exact: true }).click();
  await page.getByRole('button', { name: 'QuickView Cheez-It® Smoked' }).click();
  await page.locator('#modal-content-83 iframe').contentFrame().getByText('Cheez-It® Smoked Bundle', { exact: true }).click();
  await page.locator('#modal-content-83 iframe').contentFrame().getByText('For the snacking adventurer,').click();
  await page.locator('#modal-content-83 iframe').contentFrame().getByText('$').click();
  await page.locator('#modal-content-83 iframe').contentFrame().getByLabel('Quantity Increment').click();
  await page.locator('#modal-content-83 iframe').contentFrame().getByLabel('Quantity Increment').click();
  await page.locator('#modal-content-83 iframe').contentFrame().getByLabel('Quantity Decrement').click();
  await page.locator('#modal-content-83 iframe').contentFrame().getByLabel('Quantity Decrement').click();
  await page.getByRole('dialog').click();
  await page.locator('#modal-content-83 iframe').contentFrame().getByText('Cheez-It® Smoked Bundle For').click();
  await page.getByRole('button', { name: '' }).click();
  await page.locator('[id="\\31 "]').getByRole('button', { name: 'Add to Cart' }).click();
  await page.getByRole('img', { name: 'Cheez-It® Smoked Bundle' }).click();
  await page.getByLabel('Exit fullscreen').click();
  await page.getByRole('heading', { name: 'Cheez-It® Smoked Bundle' }).locator('span').click();
  await page.getByText('For the snacking adventurer,').click();
  await page.getByLabel('Add to Cart').click();
  await page.goto('https://shop.cheezit.com/shop.html');
  await page.locator('[id="\\32 "]').getByRole('button', { name: 'Add to Cart' }).click();
  await page.locator('div').filter({ hasText: /^Your Cart$/ }).click();
  await page.getByText('Your order is eligible for').click();
  await page.getByTitle('ILTHY® for Cheez-It™ Club Football', { exact: true }).click();
  await page.getByRole('link', { name: ' My Cart 1 items' }).click();
  await page.getByText('Summary').click();
  await page.getByRole('button', { name: 'Checkout' }).click();
  await page.getByText('Checkout', { exact: true }).click();
  await page.getByRole('textbox', { name: '* Email Address Email Address' }).click();
  await page.getByRole('textbox', { name: '* Email Address Email Address' }).fill('mathura');
  await page.getByText('Shipping Address').click();
  await page.getByRole('textbox', { name: '* First Name' }).click();
  await page.getByRole('textbox', { name: '* Last Name' }).click();
  await page.getByRole('textbox', { name: '* First Name' }).click();
  await page.getByRole('textbox', { name: '* First Name' }).fill('mm');
  await page.getByPlaceholder('Company (Optional)').click();
  await page.getByPlaceholder('Company (Optional)').fill('gg');
  await page.getByPlaceholder('Street Address: Line 1').click();
  await page.getByPlaceholder('Street Address: Line 1').fill('jj');
  await page.locator('#co-shipping-form').click();
  await page.locator('select[name="region_id"]').selectOption('18');
  await page.getByPlaceholder('Zip/Postal Code').click();
  await page.getByPlaceholder('Zip/Postal Code').fill('88');
  await page.getByPlaceholder('Phone Number').click();
  await page.getByPlaceholder('Phone Number').fill('6667889962');
  await page.getByText('Shipping Methods').click();
  await page.locator('span').filter({ hasText: 'Order Summary' }).click();
  await page.getByRole('dialog').click();
  await page.getByRole('link', { name: '< Back to Shopping' }).click();

  await page.goto('https://www.cheezit.com/en-us/home.html');
  await page.getByRole('button', { name: 'OK', exact: true }).click();
  await page.getByLabel('Close Modal').click();
  await page.getByRole('link', { name: ' Cart' }).click();
  await page.locator('#maincontent').getByText('You have no items in your').click();
  await page.goto('https://www.cheezit.com/en-us/home.html');
  await page.getByRole('link', { name: 'Shop', exact: true }).click();
  await page.locator('[id="\\31 "]').getByRole('button', { name: 'Add to Cart' }).click();
  await page.getByLabel('Add to Cart').click();
  await page.goto('https://shop.cheezit.com/shop.html');
  await page.locator('li').filter({ hasText: 'Cheez-It® Smoked Bundle $11.' }).getByRole('button').nth(1).click();
  await page.getByLabel('Quantity Increment').click();
  await page.getByLabel('Add to Cart').click();
  await page.goto('https://shop.cheezit.com/shop.html');
  await page.locator('[id="\\32 "]').getByRole('button', { name: 'Add to Cart' }).click();
  await page.getByRole('link', { name: 'Remove' }).click();
  await page.getByRole('button', { name: 'OK', exact: true }).click();
  await page.getByText('You have no items in your').click();
  await page.getByRole('button', { name: 'Close' }).click();

  await page.goto('https://www.cheezit.com/en-us/home.html');
  await page.getByRole('button', { name: 'OK', exact: true }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByPlaceholder('Type Here…').click();
  await page.getByPlaceholder('Type Here…').fill('cheezit');
  await page.getByPlaceholder('Type Here…').press('ArrowDown');
  await page.getByPlaceholder('Type Here…').fill('cheez');
  await page.getByPlaceholder('Type Here…').press('ArrowDown');
  await page.getByRole('button', { name: 'Cheez-It® Baked Snack' }).press('Enter');
  await page.getByRole('heading', { name: 'Results for "Cheez-It® Baked' }).click();
  await page.getByRole('link', { name: 'Cheez-It® Baked Snack' }).click();
  await page.goto('https://www.cheezit.com/en-us/search-results.html?#q=Cheez-It%C2%AE%20Baked%20Snack%20Crackers%20|%20Cheez-It%C2%AE');
  await page.getByPlaceholder('Type Here…').click();
  await page.getByPlaceholder('Type Here…').press('ArrowRight');
  await page.getByPlaceholder('Type Here…').press('ArrowRight');
  await page.getByPlaceholder('Type Here…').press('ArrowRight');
  await page.getByPlaceholder('Type Here…').press('ArrowRight');
  await page.getByPlaceholder('Type Here…').press('ArrowRight');
  await page.getByPlaceholder('Type Here…').press('ArrowRight');
  await page.getByPlaceholder('Type Here…').press('ArrowRight');
  await page.getByPlaceholder('Type Here…').press('ArrowRight');
  await page.getByPlaceholder('Type Here…').press('ArrowRight');
  await page.getByPlaceholder('Type Here…').press('ArrowRight');
  await page.getByPlaceholder('Type Here…').press('ArrowRight');
  await page.getByPlaceholder('Type Here…').press('ArrowRight');
  await page.getByPlaceholder('Type Here…').press('ArrowRight');
  await page.getByPlaceholder('Type Here…').press('ArrowRight');
  await page.getByPlaceholder('Type Here…').press('ArrowRight');
  await page.getByPlaceholder('Type Here…').press('ArrowRight');
  await page.getByPlaceholder('Type Here…').press('ArrowRight');
  await page.getByPlaceholder('Type Here…').press('ArrowRight');
  await page.getByPlaceholder('Type Here…').press('ArrowRight');
  await page.getByPlaceholder('Type Here…').press('ArrowRight');
  await page.getByPlaceholder('Type Here…').press('ArrowRight');
  await page.getByPlaceholder('Type Here…').press('ArrowRight');
  await page.getByPlaceholder('Type Here…').press('ArrowRight');
  await page.getByPlaceholder('Type Here…').press('ArrowRight');
  await page.getByPlaceholder('Type Here…').press('ArrowRight');
  await page.getByPlaceholder('Type Here…').press('ArrowRight');
  await page.getByPlaceholder('Type Here…').press('ArrowRight');
  await page.getByPlaceholder('Type Here…').press('ArrowRight');
  await page.getByPlaceholder('Type Here…').press('ArrowRight');
  await page.getByPlaceholder('Type Here…').press('ArrowRight');
  await page.getByPlaceholder('Type Here…').press('ArrowRight');
  await page.getByPlaceholder('Type Here…').press('ArrowRight');
  await page.getByTitle('Search').click();
  await page.getByRole('heading', { name: 'No results found' }).click();

  await page.goto('https://www.cheezit.com/en-us/home.html');
  await page.getByRole('button', { name: 'OK', exact: true }).click();
  await page.getByLabel('Close Modal').click();
  await page.getByLabel('menu', { exact: true }).getByRole('link', { name: 'Recipes' }).click();
  await page.getByPlaceholder('Find a recipe').click();
  await page.getByPlaceholder('Find a recipe').fill('chee');
  await page.getByPlaceholder('Find a recipe').press('ArrowDown');
  await page.getByRole('button', { name: 'Cheez-It® Apple Pie' }).press('Enter');
  await page.getByRole('link', { name: 'Cheez-It® Apple Pie Cheez-It' }).click();
  await page.getByRole('img', { name: 'Cheez-It&reg; Apple Pie' }).click();
  await page.getByRole('heading', { name: 'Cheez-It® Apple Pie' }).click();
  await page.getByText('Experience the ultimate').click();
  await page.getByText('PREP TIME (MIN):').click();
  await page.getByText('TOTAL TIME (MIN):').click();
  await page.getByText('SERVINGS 10 to').click();


  await page.goto('https://ayiimlmxf.accounts.cloud.sap/saml2/idp/sso/ayiimlmxf.accounts.ondemand.com');
  await page.getByPlaceholder('Email or User Name').click();
  await page.getByPlaceholder('Email or User Name').fill('naren@basiscloudsolutions.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('N@renbcs2024');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('button', { name: 'More', exact: true }).click();
  await page.getByRole('menuitem', { name: 'Sales Management' }).click();
  await page.getByLabel('Sales Management').getByTitle('More').click();
  await page.getByRole('menuitem', { name: 'Sales Planning and Analytics' }).click();
  await page.getByLabel('Create Sales Orders Tile').click();
  await page.locator('[id="APD_\\:\\:SalesOrderType-inner-vhi"]').click();
  await page.getByText('Standard Order (OR)').click();
  await page.locator('[id="APD_\\:\\:SalesOrganization-inner-vhi"]').click();
  await page.locator('[id="com\\.sap\\.gateway\\.srvd\\.c_salesordermanage_sd\\.v0001\\.CreateWithSalesOrderType\\:\\:SalesOrganization\\:\\:Dialog\\:\\:qualifier\\:\\:\\:\\:Table-innerTable-rows-row1-col1"]').click();
  await page.locator('[id="APD_\\:\\:DistributionChannel-inner-vhi"]').click();
  await page.locator('[id="__wrapper66-__clone911-__clone915"]').click();
  await page.locator('[id="APD_\\:\\:OrganizationDivision-inner-vhi"]').click();
  await page.locator('[id="com\\.sap\\.gateway\\.srvd\\.c_salesordermanage_sd\\.v0001\\.CreateWithSalesOrderType\\:\\:OrganizationDivision\\:\\:Dialog\\:\\:qualifier\\:\\:\\:\\:Table-innerTable-rows-row0-col1"]').click();
  await page.locator('[id="fe\\:\\:APD_\\:\\:com\\.sap\\.gateway\\.srvd\\.c_salesordermanage_sd\\.v0001\\.CreateWithSalesOrderType-header-BarPH"]').click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.locator('[id="cus\\.sd\\.salesorderv2\\.manage\\:\\:SalesOrderManageObjectPage--fe\\:\\:FormContainer\\:\\:OrderData\\:\\:FormElement\\:\\:DataField\\:\\:SoldToParty\\:\\:Field-edit-inner-vhi"]').click();
  await page.getByText('Z test company').click();
  await page.getByLabel('Customer Reference').click();
  await page.getByLabel('Customer Reference').fill('Test');
  await page.locator('[id="__field1-__clone679-__clone739-inner-vhi"]').click();
  await page.getByText('Sample Material').click();
  await page.locator('[id="__field3-__clone681-__clone740-inner-inner"]').click();
  await page.locator('[id="__field3-__clone681-__clone740-inner-inner"]').fill('1');
  await page.locator('[id="__field3-__clone681-__clone740-inner-inner"]').press('Enter');
  await page.getByLabel('Details', { exact: true }).click();
  await page.locator('[id="cus\\.sd\\.salesorderv2\\.manage\\:\\:SalesOrderItemObjectPage--fe\\:\\:FormContainer\\:\\:ShippingInfo\\:\\:FormElement\\:\\:DataField\\:\\:StorageLocation\\:\\:Field-edit-inner-vhi"]').click();
  await page.getByText('raw material').click();
  await page.locator('[id="cus\\.sd\\.salesorderv2\\.manage\\:\\:SalesOrderItemObjectPage--fe\\:\\:ObjectPage-anchBar-cus\\.sd\\.salesorderv2\\.manage\\:\\:SalesOrderItemObjectPage--fe\\:\\:FacetSection\\:\\:SalesOrderItemPricesSection-anchor-text"]').getByText('Prices').click();
  await page.locator('[id="cus\\.sd\\.salesorderv2\\.manage\\:\\:SalesOrderItemObjectPage--fe\\:\\:table\\:\\:_ItemPricingElement\\:\\:LineItem\\:\\:DataFieldForAction\\:\\:com\\.sap\\.gateway\\.srvd\\.c_salesordermanage_sd\\.v0001\\.CreatePricingElement\\:\\:com\\.sap\\.gateway\\.srvd\\.c_salesordermanage_sd\\.v0001\\.SalesOrderItemType"]').click();
  await page.getByRole('form', { name: 'Create' }).getByLabel('Show Value Help').click();
  await page.getByText('Z Price').click();
  await page.getByLabel('Footer actions').getByRole('button', { name: 'Create' }).click();
  await page.locator('[id="__field39-__clone1160-__clone1246-inner-inner"]').click();
  // await page.locator('[id="__field39-__clone1160-__clone1246-inner-inner"]').press('ArrowRight');
  await page.locator('[id="__field39-__clone1160-__clone1246-inner-inner"]').fill('100,00');
  await page.getByRole('toolbar', { name: 'Price Elements' }).click();
  await page.getByLabel('Apply').click();
  await page.getByLabel('Create', { exact: true }).click();
  await page.locator('[id="__text512"]').click();
  await page.getByRole('button', { name: 'Close' }).click();


  import { test, expect, Page, selectors } from '@playwright/test';
import { create } from 'domain';
import { css, xpath } from 'playwright-ui5'
// import { xpath} from 'playwright-ui5'


let page: Page;
test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    // await selectors.register('ui5', css)
    // await selectors.register('ui5', xpath);
    await selectors.register('ui5-css', css);
    await selectors.register('ui5-xpath', xpath);

    await page.goto('https://my415865.s4hana.cloud.sap/ui#Shell-home');
    await page.getByPlaceholder('Email or User Name').fill('naren@basiscloudsolutions.com');
    await page.getByPlaceholder('Password').fill('N@renbcs2024');
    await page.locator("//button[@form='logOnForm']").click();
    await page.waitForTimeout(8000);
});
test.afterAll('teardown', async () => {
    await page.goto('https://my415865.s4hana.cloud.sap/ui#Launchpad-openFLPPage?pageId=SAP_SD_PGT_SALES_MGR_OVR_PC&spaceId=SAP_BR_SALES_MANAGER');
    await page.locator('ui5-xpath=//sap.m.Avatar[@id="userActionsMenuHeaderButton"]').click();
    await page.locator('ui5-css=sap.m.StandardListItem[title="Sign Out"]').click();
    await page.locator('ui5-css=sap.m.Button[text="OK"]').click();
})



async function findAndClickOptionByText(page, searchText, listSelector, maxScrolls = 50, waitTime = 1000) {
    let isTextFound = false;
    let scrollCount = 0;

    while (!isTextFound && scrollCount < maxScrolls) {
        // Wait for a moment before starting the check
        await page.waitForTimeout(waitTime);

        // Locate items within the list
        const items = await page.locator(`ui5-css=sap.m.IconTabFilter[text="${searchText}"]`);
        // Get the count of items found
        const itemCount = await items.count();
        console.log(`Items found: ${itemCount}`);

        for (let i = 0; i < itemCount; i++) {
            // Access each item
            const item = items.nth(i);
            const itemText = await item.innerText();

            if (itemText.trim() === searchText) {
                console.log(`Found the text: "${searchText}". Clicking the item.`);
                await item.scrollIntoViewIfNeeded(); // Ensure it's visible before clicking
                await item.click();
                isTextFound = true;
                break;
            }
        }

        if (!isTextFound) {
            // If text is not found, scroll the list down
            console.log('Text not found in current view. Scrolling...');
            const hasScrolled = await page.evaluate((listSelector) => {
                const list = document.querySelector(listSelector);
                if (list) {
                    const previousScrollTop = list.scrollTop;
                    list.scrollTop += list.clientHeight; // Scroll down by the height of the visible area
                    return list.scrollTop !== previousScrollTop; // Check if scrolling is still possible
                }
                return false;
            }, listSelector);

            if (!hasScrolled) {
                console.error('Reached the end of the list but text was not found.');
                break;
            }

            scrollCount++;
        }
    }

    if (!isTextFound) {
        console.error(`Could not find the text "${searchText}" in the list after ${scrollCount} scrolls.`);
    }
}

test('sales_order', async ({ }) => {
    test.setTimeout(500000);
    const searchText = 'Sales Planning and Analytics';
    const searchCategory = 'Sales Management';
    const itemvisiblity = await page.locator(`ui5-css=sap.m.IconTabFilter[text="${searchCategory}"]`).isVisible();
    console.log(itemvisiblity)
    if (itemvisiblity == true) {
        const parentLocator = page.locator(`ui5-css=sap.m.IconTabFilter[text="${searchCategory}"]`);
        await parentLocator.locator('ui5-css=sap.ui.core.Icon').click();
        await page.waitForTimeout(2000);
        await page.locator(`ui5-css=sap.m.IconTabFilter[text="${searchText}"]`).click();
        // await page.locator(`ui5-css=sap.m.IconTabFilter[text="${searchCategory}"]:has(sap.ui.core.Icon)`).click();        
    }
    else {
        await page.waitForTimeout(5000);
        await page.locator('ui5-xpath=//sap.m.IconTabFilter[@id="__header0-overflow"]').click();
        await page.waitForTimeout(2000);
        await page.waitForSelector('#__popover0-popover-cont'); // Wait for the list to load
        await findAndClickOptionByText(page, searchText, '#__popover0-popover-cont');
    }

    //create sales order part1
    await page.locator('ui5-css=sap.m.Text[text="Create Sales Orders"]').click();
    await page.waitForTimeout(8000);
    await page.locator('ui5-xpath=//sap.ui.core.Icon[@id="APD_::SalesOrderType-inner-vhi"]').waitFor({ state: 'visible' });
    await page.locator('ui5-xpath=//sap.ui.core.Icon[@id="APD_::SalesOrderType-inner-vhi"]').click();
    await page.locator('ui5-css=sap.m.Text[text="Standard Order (OR)"]').click();
    await page.locator('ui5-xpath=//sap.ui.core.Icon[@id="APD_::SalesOrganization-inner-vhi"]').click();
    await page.locator('ui5-css=sap.m.Text[text="BCSO"]').click();
    await page.locator('ui5-xpath=//sap.ui.core.Icon[@id="APD_::DistributionChannel-inner-vhi"]').click();
    await page.locator('ui5-css=sap.m.Text[text="EX"]').click();
    await page.locator('ui5-xpath=//sap.ui.core.Icon[@id="APD_::OrganizationDivision-inner-vhi"]').click();
    await page.locator('ui5-css=sap.m.Text[text="MO"]').click();
    await page.locator('ui5-xpath=//sap.m.Button[@id="fe::APD_::com.sap.gateway.srvd.c_salesordermanage_sd.v0001.CreateWithSalesOrderType::Action::Ok"]').click();

    //create sales order part2---general info
    await page.waitForTimeout(3000);
    await page.locator('ui5-xpath=//sap.ui.core.Icon[@id="cus.sd.salesorderv2.manage::SalesOrderManageObjectPage--fe::FormContainer::OrderData::FormElement::DataField::SoldToParty::Field-edit-inner-vhi"]').click();
    await page.locator('ui5-css=sap.m.Text[text="1000017"]').click();
    await page.waitForTimeout(3000);
    await page.locator('ui5-xpath=//sap.m.Input[@id="cus.sd.salesorderv2.manage::SalesOrderManageObjectPage--fe::FormContainer::OrderData::FormElement::DataField::PurchaseOrderByCustomer::Field-edit"]').click();
    await page.keyboard.type('sample order');


    //create sales order part2---items info
    await page.locator('ui5-xpath=//sap.m.Button[@id="cus.sd.salesorderv2.manage::SalesOrderManageObjectPage--fe::ObjectPage-anchBar-cus.sd.salesorderv2.manage::SalesOrderManageObjectPage--fe::FacetSection::SalesOrderItems-anchor"]').click();
    await page.waitForTimeout(3000);
    const creationRow = await page.locator(`ui5-xpath=//sap.ui.table.CreationRow[@id="cus.sd.salesorderv2.manage::SalesOrderManageObjectPage--fe::table::_Item::LineItem::CreationRow-inner"]`);
    const product = await creationRow.locator(`ui5-css=sap.ui.mdc.field.FieldInput`).nth(0);
    await product.locator('ui5-css=sap.ui.core.Icon').click();
    const materialcode = 'Sample Material';
    await page.waitForTimeout(3000);
    await page.locator(`ui5-css=sap.m.Text[text="${materialcode}"]`).click();
    await creationRow.locator(`ui5-css=sap.ui.mdc.field.FieldInput`).nth(1).click();
    await page.keyboard.type('1');
    await page.waitForTimeout(2000);
    await page.locator('ui5-xpath=//sap.m.Button[@id="cus.sd.salesorderv2.manage::SalesOrderManageObjectPage--fe::table::_Item::LineItem::CreationRow-inner-applyBtn"]').click();
    //create sales order part3---storageinfo
    await page.waitForTimeout(3000);
    await page.locator(`ui5-css=sap.ui.table.RowAction:has(sap.ui.core.Icon)`).nth(0).click();
    const storageInfo = await page.locator(`ui5-xpath=//sap.ui.mdc.field.FieldInput[@id="cus.sd.salesorderv2.manage::SalesOrderItemObjectPage--fe::FormContainer::ShippingInfo::FormElement::DataField::StorageLocation::Field-edit-inner"]`).scrollIntoViewIfNeeded();
    console.log('storage info', storageInfo);
    await page.waitForTimeout(2000);
    await page.locator('ui5-xpath=//sap.ui.core.Icon[@id="cus.sd.salesorderv2.manage::SalesOrderItemObjectPage--fe::FormContainer::ShippingInfo::FormElement::DataField::StorageLocation::Field-edit-inner-vhi"]').click();
    const storageLoc = 'RMSL';
    await page.locator(`ui5-css=sap.m.Text[text="${storageLoc}"]`).click();
    await page.waitForTimeout(2000);
    //create sales order part4---price info  
    await page.locator('ui5-xpath=//sap.m.Button[@id="cus.sd.salesorderv2.manage::SalesOrderItemObjectPage--fe::ObjectPage-anchBar-cus.sd.salesorderv2.manage::SalesOrderItemObjectPage--fe::FacetSection::SalesOrderItemPricesSection-anchor-internalSplitBtn-textButton"]').click();
    await page.locator('ui5-xpath=//sap.m.Button[@id="cus.sd.salesorderv2.manage::SalesOrderItemObjectPage--fe::table::_ItemPricingElement::LineItem::DataFieldForAction::com.sap.gateway.srvd.c_salesordermanage_sd.v0001.CreatePricingElement::com.sap.gateway.srvd.c_salesordermanage_sd.v0001.SalesOrderItemType"]').click();
    await page.locator('ui5-xpath=//sap.ui.mdc.field.FieldInput[@id="APD_::ConditionType-inner"]').click();
    await page.locator('ui5-xpath=//sap.ui.core.Icon[@id="APD_::ConditionType-inner-vhi"]').click();
    await page.waitForTimeout(3000);
    const price_table = page.locator(`ui5-xpath=//sap.ui.table.Table[@id="com.sap.gateway.srvd.c_salesordermanage_sd.v0001.CreatePricingElement::ConditionType::Dialog::qualifier::::Table-innerTable"]`);
    const rows = price_table.locator('ui5-css=sap.ui.table.Row');

    // Loop through the rows
    const rowCount = await rows.count();
    console.log(`Total rows: ${rowCount}`);

    for (let i = 0; i < rowCount; i++) {
        const row = rows.nth(i);

        // Wait for the row to be visible
        await row.waitFor({ state: 'visible', timeout: 5000 }); // Add timeout for additional safety
        console.log(`Processing row ${i + 1}`);

        // Read text from the row
        const rowText = await row.textContent();
        await page.waitForTimeout(3000);
        console.log(`Row ${i + 1} text: ${rowText}`);

        if (rowText === 'ZZBPZ Price') {
            // Wait for the target element inside the row
            const textElement = row.locator('ui5-css=sap.m.Text').nth(1);
            await textElement.waitFor({ state: 'visible', timeout: 9000 });

            // Click the element
            await textElement.click();
            console.log(`Clicked on 'ZZBPZ Price' in row ${i + 1}`);

            // Exit the loop after clicking
            break;
        }
    }
    await page.locator('ui5-xpath=//sap.m.Button[@id="fe::APD_::com.sap.gateway.srvd.c_salesordermanage_sd.v0001.CreatePricingElement::Action::Ok"]').click();
    await page.waitForTimeout(2000);
    const pricetable = await page.locator('ui5-xpath=//sap.ui.mdc.Table[@id="cus.sd.salesorderv2.manage::SalesOrderItemObjectPage--fe::table::_ItemPricingElement::LineItem"]');
    const pricerow = await pricetable.locator(`ui5-xpath=//sap.m.ColumnListItem[last()]`);
    // const pricerow = await page.locator(`ui5-css=sap.m.ColumnListItem`).nth(4);
    // console.log(pricerow);
    await page.waitForTimeout(3000);
    await pricerow.locator(`ui5-css=sap.ui.mdc.field.FieldInput`).nth(0).click();
    await page.keyboard.press('Control+A');
    await page.keyboard.press('Backspace');
    await page.keyboard.type('100');
    await page.waitForTimeout(2000);
    await page.locator('ui5-xpath=//sap.m.Button[@id="cus.sd.salesorderv2.manage::SalesOrderItemObjectPage--fe::FooterBar::StandardAction::Apply"]').click();
    await page.locator('ui5-xpath=//sap.m.Button[@id="cus.sd.salesorderv2.manage::SalesOrderManageObjectPage--fe::FooterBar::StandardAction::Save"]').click();
    const orderparent = await page.locator('ui5-xpath=//sap.m.VBox').nth(0);
    await page.waitForTimeout(8000);
    const ordernumber = await orderparent.locator(`ui5-xpath=//sap.m.Title`).textContent();
    console.log('order created:', ordernumber);
    await page.waitForTimeout(3000);
})
  }

    // const sales = await page.locator(`ui5-css=sap.m.IconTabFilter[text="${sales_order}"]`);
    // console.log(`${sales} is work`);
    // await sales.locator('ui5-css=sap.ui.core.Icon').click();
    // const Analytics = await page.locator(`ui5-css=sap.m.IconTabFilter[text="${sales_planning}"]`);
    // await Analytics.click();
    // await page.waitForTimeout(2000);
    // await page.locator('ui5-css=sap.m.Text[text="Create Sales Orders"]').nth(1).click();
    // await page.waitForTimeout(10000);
    // await page.locator('ui5-xpath=//sap.ui.core.Icon[@id="APD_::SalesOrderType-inner-vhi"]').click();
    // await page.locator('ui5-css=sap.m.Text[text="Standard Order (OR)"]').click();
    // await page.locator('ui5-xpath=//sap.ui.core.Icon[@id="APD_::SalesOrganization-inner-vhi"]').click();
    // await page.locator('ui5-css=sap.m.Text[text="BCSO"]').click();
    // await page.locator('ui5-xpath=//sap.ui.core.Icon[@id="APD_::DistributionChannel-inner-vhi"]').click();
    // await page.locator('ui5-css=sap.m.Text[text="EX"]').click();
    // await page.locator('ui5-xpath=//sap.ui.core.Icon[@id="APD_::OrganizationDivision-inner-vhi"]').click();
    // await page.locator('ui5-css=sap.m.Text[text="MO"]').click();
    // await page.locator('ui5-xpath=//sap.m.Button[@id="fe::APD_::com.sap.gateway.srvd.c_salesordermanage_sd.v0001.CreateWithSalesOrderType::Action::Ok"]').click();
    // await page.waitForTimeout(8000);
    // await page.locator('ui5-xpath=//sap.ui.core.Icon[@id="cus.sd.salesorderv2.manage::SalesOrderManageObjectPage--fe::FormContainer::OrderData::FormElement::DataField::SoldToParty::Field-edit-inner-vhi"]').click();
    // await page.locator('ui5-css=sap.m.Text[text="Z test company"]').click();
    // const input = page.locator('ui5-xpath=//sap.m.Input[@id="cus.sd.salesorderv2.manage::SalesOrderManageObjectPage--fe::FormContainer::OrderData::FormElement::DataField::PurchaseOrderByCustomer::Field-edit"]');
    // await input.click(); 
    // await input.pressSequentially('Test');
    // const creationRow = await page.locator(`ui5-xpath=//sap.ui.table.CreationRow[@id="cus.sd.salesorderv2.manage::SalesOrderManageObjectPage--fe::table::_Item::LineItem::CreationRow-inner"]`);
    // const product = await creationRow.locator(`ui5-css=sap.ui.mdc.field.FieldInput`).nth(0);
    // await product.locator('ui5-css=sap.ui.core.Icon').click();
    // await page.locator('ui5-css=sap.m.Text[text="Sample Material"]').click();
    // const nextinput = creationRow.locator(`ui5-css=sap.ui.mdc.field.FieldInput`).nth(1);
    // await nextinput.click();
    // await nextinput.press('1');
    // await nextinput.press('Enter');
    // await page.waitForTimeout(2000);
    // await page.locator(`ui5-css=sap.ui.table.RowAction:has(sap.ui.core.Icon)`).nth(0).click();
    // await page.waitForTimeout(6000);
    // await page.locator('ui5-xpath=//sap.ui.core.Icon[@id="cus.sd.salesorderv2.manage::SalesOrderItemObjectPage--fe::FormContainer::ShippingInfo::FormElement::DataField::StorageLocation::Field-edit-inner-vhi"]').click();
    // await page.locator('ui5-css=sap.m.Text[text="raw material"]').click();
    // await page.locator('ui5-xpath=//sap.m.IconTabFilter[@id="cus.sd.salesorderv2.manage::SalesOrderItemObjectPage--fe::ObjectPage-anchBar-cus.sd.salesorderv2.manage::SalesOrderItemObjectPage--fe::FacetSection::SalesOrderItemPricesSection-anchor"]').click();
    // await page.locator('ui5-xpath=//sap.m.Button[@id="cus.sd.salesorderv2.manage::SalesOrderItemObjectPage--fe::table::_ItemPricingElement::LineItem::DataFieldForAction::com.sap.gateway.srvd.c_salesordermanage_sd.v0001.CreatePricingElement::com.sap.gateway.srvd.c_salesordermanage_sd.v0001.SalesOrderItemType"]').click();
    // await page.locator('ui5-xpath=//sap.ui.mdc.field.FieldInput[@id="APD_::ConditionType-inner"]').click();
    // await page.locator('ui5-xpath=//sap.ui.core.Icon[@id="APD_::ConditionType-inner-vhi"]').click();  
    // await page.waitForTimeout(2000);
    // await expect(page.getByText('Select: Condition Type')).toBeVisible();
    // const ZZBPprice = page.locator('ui5-xpath=//sap.ui.table.Row[@id="com.sap.gateway.srvd.c_salesordermanage_sd.v0001.CreatePricingElement::ConditionType::Dialog::qualifier::::Table-innerTable-rows-row2"]');
    // const zprice = page.locator('ui5-xpath=//sap.m.VBox[@id="com.sap.gateway.srvd.c_salesordermanage_sd.v0001.CreatePricingElement::ConditionType::Dialog::qualifier::-TB"]');
    // const ZZBPclick = await zprice.locator('ui5-css=sap.m.Text[text="ZZBP"]');
    // await ZZBPclick.waitFor({ state: 'visible' });
    // // if(ZZBPclick.isVisible()){
    // //   console.log('ZZBP is visible');
    // //   await ZZBPclick.click();
    // //   await page.waitForTimeout(10000);
    // // }else{
    // //   console.log('ZZBP is not visble');
    // // }
    // const tempLocator = page.locator('#com\\.sap\\.gateway\\.srvd\\.c_salesordermanage_sd\\.v0001\\.CreatePricingElement\\:\\:ConditionType\\:\\:Dialog\\:\\:qualifier\\:\\:\\:\\:Table-innerTable-rows-row2-col0');

    // // Get the text content
    // const tempText = await tempLocator.textContent();    
    // // Click the locator instead of the text content
    // await tempLocator.click();
    // await page.waitForTimeout(10000);

    // // const zpriceclick = await ZZBPprice.locator('ui5-css=sap.m.Text[text="Z Price"]');
    // // if(zpriceclick.isVisible()){
    // //   console.log('Z price is visible');
    // //   await zpriceclick.click();
    // //   await page.waitForTimeout(10000);
    // // }else{
    // //   console.log('z price is not visble');
    // // }
    // // const fullprice = await page.locator('ui5-xpath=//sap.ui.table.Row[@id="com.sap.gateway.srvd.c_salesordermanage_sd.v0001.CreatePricingElement::ConditionType::Dialog::qualifier::::Table-innerTable-rows-row2"]');
    // // if(fullprice.isVisible()){
    // //   console.log('Z price is visible');
    // //   await fullprice.click();
    // //   await page.waitForTimeout(10000);
    // // }else{
    // //   console.log('z price is not visble');
    // // }
    // await page.locator('ui5-xpath=//sap.m.Button[@id="fe::APD_::com.sap.gateway.srvd.c_salesordermanage_sd.v0001.CreatePricingElement::Action::Ok"]').click();
    // const priceinput = await page.locator('ui5-xpath=//sap.ui.mdc.Table[@id="cus.sd.salesorderv2.manage::SalesOrderItemObjectPage--fe::table::_ItemPricingElement::LineItem"]');
    // const pricerow = await priceinput.locator(`ui5-xpath=//sap.m.ColumnListItem[last()]`);
    // await pricerow.locator(`ui5-css=sap.ui.mdc.field.FieldInput`).nth(0).click();
    // await page.keyboard.press('Control+A');
    // await page.keyboard.press('Backspace');
    // await page.keyboard.type('100');    
    // await page.locator('ui5-xpath=//sap.m.Button[@id="cus.sd.salesorderv2.manage::SalesOrderItemObjectPage--fe::FooterBar::StandardAction::Apply"]').click();
    // await page.waitForTimeout(2000);
    // await page.locator('ui5-xpath=//sap.m.Button[@id="cus.sd.salesorderv2.manage::SalesOrderManageObjectPage--fe::FooterBar::StandardAction::Save"]').click();
    // await page.waitForTimeout(8000);
    // page.locator('sap.m.Dialog id="__dialog107"');
    // const success = await page.locator('ui5-xpath=//sap.m.List[@id="__list46"]');
    // const listItem = success.locator('ui5-xpath=//sap.m.MessageListItem').nth(0); // Get first item
    // const text = await listItem.textContent();
    // console.log(`${text} is Done`);    
    // await page.waitForTimeout(8000);
    // // page.locator('sap.m.Button id="__button802"');
    // // await page.getByText('Standard Order 211 has been').click();
    // await page.locator('ui5-css=sap.m.Button[text="Close"]').click();
    // const ordernum = await page.locator('ui5-xpath=//sap.m.FlexBox[@id="__box13"]').nth(0);
    // await page.waitForTimeout(8000);
    // const ordernumber = await ordernum.locator(`ui5-xpath=//sap.m.Title`).textContent();
    // console.log(ordernumber, 'create sales order is Done');
    // await page.waitForTimeout(2000);

    await page.goto('https://basiscloudsolutionspvtltd--vishnudev.sandbox.my.salesforce.com/');
    await page.getByLabel('Username').fill('vijayakumarp@basiscloudsolutions.com.vishnudev');
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill('Vishnudev@21 ');
    await page.getByRole('button', { name: 'Log In to Sandbox' }).click();
    await page.goto('https://basiscloudsolutionspvtltd--vishnudev.sandbox.lightning.force.com/lightning/page/home');
    await page.getByRole('button', { name: 'App Launcher' }).click();
    await page.getByRole('option', { name: 'Sales', exact: true }).click();
    await page.getByRole('link', { name: 'Leads' }).click();
    await page.getByRole('button', { name: 'New' }).click();
    await page.getByRole('combobox', { name: 'Salutation' }).click();
    await page.getByRole('option', { name: 'Mr.' }).locator('span').nth(1).click();
    await page.getByPlaceholder('First Name').click();
    await page.getByPlaceholder('First Name').fill('mathu');
    await page.getByPlaceholder('Last Name').click();
    await page.getByPlaceholder('Last Name').fill('nbvc');
    await page.getByLabel('*Company').click();
    await page.getByLabel('*Company').fill('bcs');
    await page.getByLabel('*Phone').click();
    await page.getByLabel('*Phone').fill('2345678909');
    await page.getByLabel('*Email').click();
    await page.getByLabel('*Email').fill('mathu@gmail.com');
    await page.getByRole('combobox', { name: 'Product' }).click();
    await page.getByRole('option', { name: 'Alum Crystals' }).locator('span').nth(1).click();
    await page.getByRole('combobox', { name: 'States' }).click();
    await page.getByRole('option', { name: 'TamilNadu' }).locator('span').nth(1).click();
    await page.getByRole('button', { name: 'Cancel and close' }).click();
    await page.getByRole('link', { name: 'Opportunities' }).click();
    await page.getByRole('button', { name: 'Select a List View:' }).click();
    await page.getByRole('option', { name: 'My Opportunities' }).click();
    await page.getByText('VanessaWood Edit Opportunity').click();
    await page.getByRole('link', { name: 'Leads' }).click();
    await page.getByRole('link', { name: 'Preethi', exact: true }).click();
    await page.getByRole('link', { name: 'Leads' }).click();
    await page.getByRole('link', { name: 'Caroline Howard' }).click();
    await page.getByTitle('More New Event Actions').nth(1).click();
    const page1Promise = page.waitForEvent('popup');
}