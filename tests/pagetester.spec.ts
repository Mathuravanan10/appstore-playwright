import { chromium, test } from "@playwright/test";
import { testingPage } from "../webPages/TownHouse";
import { productMainPageList, productMainHeaderList, productFooterList, menuPageOurFood } from "../variableFiles/TownHouse";
import { testingCardPage } from "../webPages/TownHouseCardList";
import { testingHeaderPage } from "../webPages/TownHouseHeader";

let page: any;
let mainPage: testingPage;
let cardlist: testingCardPage;
let cardHeaderlist: testingHeaderPage;

test('multiple checks using steps', async ({ page }) => {
 await test.step('Home page test',async () => {
  test.setTimeout(200000);

  const browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  mainPage = new testingPage(page);

  const locator = 'https://www.townhousecrackers.ca/en_CA/home.html';
   await page.goto(locator);

  await mainPage.MainPageTest(productMainPageList, locator);
  await mainPage.MainPageCard(productMainHeaderList, locator);
  await mainPage.MainPageFooter(productFooterList, locator);
  });

  await test.step("Card List Test", async () => {
    test.setTimeout(200000);
    const locator = 'https://www.townhousecrackers.ca/en_CA/home.html';
    await page.goto(locator);
    cardlist = new testingCardPage(page);
    await cardlist.testingCardList(productMainHeaderList, locator);
  });

  // await test.step("Header Page Test", async () => {
  //   test.setTimeout(120000);
  //   const locator = 'https://www.townhousecrackers.ca/en_CA/home.html';
  //   const ourFood = 'https://www.townhousecrackers.ca/en_CA/products.html';
  //   const ourFoodLink = 'https://www.townhousecrackers.ca/en_CA/products/Kellogg-s-Town-House-FlipSides-Original-Crackers-product.html';
  //   await page.goto(locator);
  //   cardHeaderlist = new testingHeaderPage(page);
  //   cardlist = new testingCardPage(page);
  //   // await cardHeaderlist.testingHeaderList(menuPageOurFood, locator, ourFood, ourFoodLink);
  //   await cardHeaderlist.testingHeaderRecipesList(cardlist, locator);
  //   await cardHeaderlist.testingHeaderSignUpList(cardlist, locator);
  // });
});