import test, { chromium, expect } from "@playwright/test";
import { testing } from "../pages/testing";
import { testingPage } from "../pages/kelloges";

test.describe("SAP Hana Sales Order Tests", () => {
  let page: any;
  let browser: any;
  let loginPage:any;
  let login:any;

  test.beforeAll(async () => {
    test.setTimeout(120000); 
    browser = await chromium.launch({ headless: false }); 
    const context = await browser.newContext();
    page = await context.newPage();

    loginPage = new testing(page);
    login = new testingPage(page)

    // await page.goto(
    //   'https://www.pringles.com/be/nl/home.html'
    // );

    // await page.getByRole('button', { name: 'Accept Cookies' }).click();
  });

  test("Create a Sales Order", async () => {
    // await page.goto('https://www.pringles.com/centraleurope/en/gaming-2023.html');
    // await page.goto('https://www.pringles.com/at/promotions.html');
    // await page.goto('https://www.pringles.com/ie/home.html');
    // await page.goto('https://www.pringles.com/lt/home.html');
    // await page.goto('https://www.pringles.com/it/home.html');
    // await page.goto('https://www.pringles.com/tr/home.html');


    // await page.getByLabel('klik om te zoeken').click();
    // await page.getByPlaceholder('Zoeken').fill('appstore');
    // await page.getByPlaceholder('Zoeken').fill('');
    // await page.getByRole('contentinfo').getByRole('paragraph').nth(1).click();
    // await page.getByLabel('klik om Land/streek te').click();
    // await page.getByRole('link', { name: 'Promotions' }).click();
    // await page.goto('https://www.pringles.com/centraleurope/en/promotions.html');
    // await expect(page).toHaveTitle(
    //   "Competitions & Offers - Chance to Win Prizes - Pringles EU"
    // );
    // await loginPage.goto();
     test.setTimeout(400000);
    await loginPage.login();
    // await login.kollgesLogin()
  });

  test.afterAll(async () => {
    await browser.close();
  });
});


// import test, { chromium, expect } from "@playwright/test";


// test('testing', async ():Promise<any> => {
//     const browser = await chromium.launch({ headless: false });
//     const page = await browser.newPage();
//         await page.goto('https://www.kellanovaus.com/us/en/brands/eggo.html');

//         // Extract text content using page.evaluate
//         const values = await page.evaluate(() => {
//             const items = document.querySelectorAll('.nav-list .track');
//             return Array.from(items).map(item => item.textContent);
//         });
    
//         console.log(values,'ppp'); 
//         return values
   
//     await browser.close();

// });



// import test, { chromium, expect } from "@playwright/test";
 
// test('testing', async (): Promise<any> => {
//     const browser = await chromium.launch({ headless: false });
//     const page = await browser.newPage();
//     const links = [
//         'https://www.pringles.com/uk/home.html',
//         'https://www.pringles.com/tr/home.html',
//         'https://www.pringles.com/be/nl/home.html',
//         'https://www.pringles.com/dk/home.htm', 
//         'https://www.pringles.com/mt/home.html'
//     ];
 
//     console.log(links.length, 'aaa');
 
//     for (const link of links) {
//         console.log(link, 'mmm');
//         await page.waitForTimeout(3000);
//         await page.goto(link); 
       

//         const values = await page.evaluate(() => {
//             const items = document.querySelectorAll('.KSTLNav .mThree');
//             return Array.from(items).map(item => item.textContent?.trim() || '');
//         });
        
//         console.log(values, 'ppp');
//         await expect(page).toHaveURL(link);
        
//     }
//     // await page.waitForTimeout(5000);
//     await browser.close();
// });

