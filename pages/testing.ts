import { Page, expect } from "@playwright/test";

export class testing {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;

  }

  // async goto() {
  //   // await this.page.goto("https://qa.symphony4cloud.com/login");
  //   await this.page.goto('https://www.kellanovaus.com/us/en/brands/eggo.html');
  // }

//   async login() {
//     const links = [
//       'https://www.townhousecrackers.ca/en_CA/home.html',
//       'https://www.townhousecrackers.ca/fr_CA/home.html',
//   ];

//   console.log(links.length, 'aaa');

//   for (const link of links) {
//     await this.page.waitForTimeout(3000);
//     await this.page.goto(link); 
//       const values = await this.page.evaluate(() => {
//         const items = document.querySelectorAll('.topmenu .menu-dropdown');
//         return Array.from(items).map(item => item.textContent?.trim() || '');
//     });
//     console.log(values, 'nnn');
//     await expect(this.page).toHaveURL(link);

//     for(const value of values){
//       await this.page.waitForTimeout(3000);
//       console.log(value,  'ppp');
//       await this.page.getByRole('link', { name: value }).click();
//       await this.page.waitForTimeout(3000);
//       await this.page.goto('https://www.townhousecrackers.ca/en_CA/home.html');
//     }
//   }
//   // await page.waitForTimeout(5000);
//     // await this.page.getByRole('link', { name: 'Our Brands' }).click();
//     // await this.page.waitForTimeout(3000);
//     // await expect(this.page).toHaveTitle(
//     //   "Kellanova US | Eggo Brand Page"
//     // );
   
//   }

async login() {
  const links = [
    'https://www.townhousecrackers.ca/en_CA/home.html',
    'https://www.townhousecrackers.ca/fr_CA/home.html',
  ];
   let cardLinks:any;

  for (const link of links) {
      console.log(`Navigating to: ${link}`);
      await this.page.goto(link, { timeout: 30000, waitUntil: 'domcontentloaded' });

      const productDetailsList = [
        {
            productMenuLabel: "Our Food",
            productImgCode: 'Town House Crackers closeup',
        },
        {
            productName: "CARR'S® TABLE WATER® CRACKED",
            productMenuLabel: "Recipes",
            productImgCode: 'Townhouse Crackers arranged',
            productId: '00059290575927'
        },
      ];

      try {
        const busyIndicator = this.page.getByText("Please wait");
        await busyIndicator.waitFor({ state: 'hidden', timeout: 60000 });
    } catch (error) {
        console.log("No busy indicator found, continuing...");
    }

    // await this.page.evaluate(({ selector, classes }: { selector: string; classes: string[] }) => {
    //   const elements = document.querySelectorAll(selector); 
    //   elements.forEach((element, index) => {
    //     if (index < classes.length) {
    //       element.classList.add(classes[index]); 
    //     }
    //   });
    // },{ selector: 'span.cta-text',classes: classNames});
    // const button = this.page.locator('button:has-text("Accept Cookies")');
    // if (await button.isVisible()) {
    //   await this.page.getByRole('button', { name: 'Accept Cookies' }).click();
    //   console.log("The 'Accept Cookies' button is visible and clicked.");
    // } else {
    //   console.log("The 'Accept Cookies' button is not visible.");
    // }
    // await this.page.getByRole('button', { name: 'Accept Cookies' }).click();


      const headerMenu = await this.page.evaluate(() => {
        const items = document.querySelectorAll('.topmenu .menu-dropdown');
        return Array.from(items).map(item => item.textContent?.trim() || '');
      });

      cardLinks = await this.page.evaluate(() => {
        const items = document.querySelectorAll('.recipe-list-item .recipe-list-description');
        return Array.from(items).map(item => item.textContent?.trim() || '');
      });

      const cardButtom = await this.page.evaluate(() => {
        const items = document.querySelectorAll('.recipe-list-item .button-cta');
        return Array.from(items).map(item => item.textContent?.trim() || '');
      });

      // const getelements = await this.page.evaluate(() => {
      //   const items = document.querySelectorAll('.caption .subTitle-h1-text');
      //   return Array.from(items).map(item => item.textContent?.trim() || '');
      // });

      // const getelements2 = await this.page.evaluate(() => {
      //   const items = document.querySelectorAll('.caption .title-border');
      //   return Array.from(items).map(item => item.textContent?.trim() || '');
      // });

      const footerItems = await this.page.evaluate(() => {
        const items = document.querySelectorAll('.footer-nav--main .track');
        return Array.from(items).map(item => item.textContent?.trim() || '');
        });

        const footerLinks = await this.page.evaluate(() => {
          const items = document.querySelectorAll('.footer-nav--secondary .track');
          return Array.from(items).map(item => item.textContent?.trim() || '');
          });

      // const updatedClasses = await this.page.evaluate((classNames) => {
      //   let result: string[] = []; 
      //   for (const newClass of classNames){
      //     const spans = document.querySelectorAll(`.caption .${newClass}`);
      //     const texts = Array.from(spans).map(item => item.textContent?.trim() || '');
      //     result = result.concat(texts); 
      //   } 
      //   return result; 
      // }, classNames);

      const elementsWithNewline = headerMenu.filter(item => item.includes('\n'));

      if(cardButtom){
        cardLinks = cardLinks.concat(cardButtom); 
      }

      // if(footerLinks){
      //   footerItems = footerItems.concat(footerLinks)
      // }

      console.log(headerMenu,"up cl");
      console.log(cardButtom, 'aaa');
      console.log(footerItems,"up cl");
      console.log(cardLinks, 'sss');
      console.log(footerLinks, 'vvv');

          
      // const updated = await this.page.evaluate(() => {
      //   return Array.from(document.querySelectorAll('span.cta-text')).map(el => el.className);
      // });
      await expect(this.page).toHaveURL(link);

      for (const menuItem of headerMenu) {
        console.log(`Processing menu item: ${menuItem}`);
        // const temp = menuItem.split("\n")[0];
        const footerLocator = this.page.locator('.topmenu').getByLabel(menuItem, { exact: true });
        await footerLocator.click();
        const busyIndicator = this.page.getByText("Please wait");
        await busyIndicator.waitFor({ state: 'hidden', timeout: 60000 });
        // await this.page.waitForTimeout(4000);
        await this.page.goto(link, { timeout: 30000, waitUntil: 'domcontentloaded' });
      }

      const signup = 'Sign Up Now!\nSign up now to get our latest food news, tasty recipes and offers delivered to your inbox!\nJoin Today';
      const buy = 'Where to Buy\nRunning low on Town House* Crackers?\nFind it at your favourite store.\nShop Now';
      const watch = `S'inscrire\nInscrivez-vous pour recevoir les dernières nouveautés, de délicieuses recettes et des offres dans votre boîte de réception !\nINSCRIVEZ-VOUS DÈS AUJOURD’HUI`;
      const watcjlist = 'Où acheter\nVous n’avez plus des craquelins Town House* ? Trouvez-les dans votre magasin préféré !\nMagasinez maintenant';

      for (const cardLink of cardLinks) {
        console.log(`Processing temp item: ${cardLink}`);
        if(cardLink != signup && cardLink != buy && watch != cardLink && watcjlist != cardLink){
          const footerLocator = this.page.getByRole('link', { name: cardLink });
          await footerLocator.click();
          const busyIndicator = this.page.getByText("Please wait");
          await busyIndicator.waitFor({ state: 'hidden', timeout: 60000 });
          // await this.page.waitForTimeout(4000);
          await this.page.goto(link, { timeout: 30000, waitUntil: 'domcontentloaded' });
        }
      }

      for (const footerItem of footerItems) {
        console.log(`Processing temp item: ${footerItem}`);
        const footerLocator = this.page.locator('.footer-nav--main').getByLabel(footerItem);
        await footerLocator.click();
        const busyIndicator = this.page.getByText("Please wait");
        await busyIndicator.waitFor({ state: 'hidden', timeout: 60000 });
        // await this.page.waitForTimeout(4000);
        await this.page.goto(link, { timeout: 30000, waitUntil: 'domcontentloaded' });
      }

      // for (const footer of footerLinks) {
      //   console.log(`Processing temp item: ${footer}`);
      //   const footerLocator = this.page.getByRole('link', { name: footer });
      //   await footerLocator.click();
      //   if(footer === 'Cookie Preferences'){
      //     await this.page.getByRole("button", { name: "Reject All" }).click();
      //   }
      //   const busyIndicator = this.page.getByText("Please wait");
      //   await busyIndicator.waitFor({ state: 'hidden', timeout: 60000 });
      //   // await this.page.waitForTimeout(4000);
      //   await this.page.goto(link, { timeout: 30000, waitUntil: 'domcontentloaded' });
      // }
      await this.page.getByLabel('back to top').click();
      await this.page.waitForTimeout(2000);
    // // await this.page.locator('.class-two').click();
    // // await this.page.waitForTimeout(5000);

    // for (const elements of getelements) {
    //   await this.page.getByRole('link', { name: elements }).click();
    //   await this.page.waitForTimeout(5000);
    //   await this.page.goto(link, { timeout: 30000, waitUntil: 'domcontentloaded' });
    // }

    // for (const elements of getelements2) {
    //   await this.page.getByLabel(elements).click();     
    //   await this.page.waitForTimeout(5000);
    //   await this.page.goto(link, { timeout: 30000, waitUntil: 'domcontentloaded' });
    // }
  }
} 

}

