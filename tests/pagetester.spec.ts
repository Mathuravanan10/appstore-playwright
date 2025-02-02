import { chromium, expect, test } from "@playwright/test";
import { testingPage } from "../webPages/TownHouse";
import { productMainPageList, productMainHeaderList, productFooterList, menuPageOurFood, buyRegionButton, buySoldByButton, appCreate, cardListButton } from "../variableFiles/TownHouse";
import { testingCardPage } from "../webPages/TownHouseCardList";
import { testingHeaderPage } from "../webPages/TownHouseHeader";
import { kellanova } from "../webPages/kellanovaHomePage";
import { kellanovabody, kellanovamainpage, kellanvaImgs } from "../variableFiles/kellanova";
import { cheezitDropdown, cheezitDropdownShop, cheezitFooter, cheezitMainpage, cheezitProductPage, FooterLinks, HeaderWhereToBuy, headingpage, kellanovaHeaderLinks, searchpage, whereToBuyRegionInputData, whereToBuySoldByInputData, whereToBuyTellMeAboutInputData } from "../variableFiles/kellanovaSimple";
import { Testpage } from "../webPages/testpage";

let page: any;
let mainPage: testingPage;
let cardlist: testingCardPage;
let cardHeaderlist: testingHeaderPage;
let kellano:kellanova;

test.describe('multiple checks using steps', async () => {
  test.setTimeout(800000);

 test('Home page test',async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  page = await context.newPage();
  mainPage = new testingPage(page);

  // const locator = 'https://www.townhousecrackers.ca/en_CA/home.html';
  //  await page.goto(locator);

  // await mainPage.MainPageTest(productMainPageList, locator);
  // await mainPage.MainPageCard(productMainHeaderList, locator);
  // await mainPage.MainPageFooter(productFooterList, locator);
  });

  // await test.step("Card List Test", async () => {
  //   test.setTimeout(400000);
  //   const locator = 'https://www.townhousecrackers.ca/en_CA/home.html';
  //   await page.goto(locator);
  //   cardlist = new testingCardPage(page);
  //   await cardlist.testingCardList(productMainHeaderList, locator);
  //   await cardlist.cardListButton(cardListButton, locator)
  // });

  // await test.step("Header Page Test", async () => {
  //   test.setTimeout(500000);
  //   const locator = 'https://www.townhousecrackers.ca/en_CA/home.html';
  //   const ourFood = 'https://www.townhousecrackers.ca/en_CA/products.html';
  //   const ourFoodLink = 'https://www.townhousecrackers.ca/en_CA/products/Kellogg-s-Town-House-FlipSides-Original-Crackers-product.html';
  //   await page.goto(locator);
  //   cardHeaderlist = new testingHeaderPage(page);
  //   cardlist = new testingCardPage(page);
  //   await cardHeaderlist.testingHeaderList(menuPageOurFood, ourFood, ourFoodLink);
  //   await cardHeaderlist.testingHeaderRecipesList(cardlist, locator);
  //   await cardHeaderlist.testingHeaderSignUpList(locator, appCreate);
  //   await cardHeaderlist.testingHeaderWhereToByList(buyRegionButton, buySoldByButton);
  // });

  // await test.step("Footer Test", async () => {
  //   test.setTimeout(600000);
  //   const locator = 'https://www.townhousecrackers.ca/en_CA/home.html';
  //   await page.goto(locator);
  //   await mainPage.MainPageFooter(productFooterList, locator);
  // });

  // test("Kellanova Mainpage Test", async () => {
  //   const locator = 'https://www.kellanova.ca/en_CA/home.html';
  //   await page.goto(locator);
  //   const testpage = new Testpage(page);
  //   await mainPage.KellanovaMainPage(FooterLinks, testpage);
  //   await mainPage.kellanovaHeaderaPage(kellanovaHeaderLinks, testpage);
  //   await mainPage.HeaderWhereToByLinks(HeaderWhereToBuy, testpage, whereToBuySoldByInputData, whereToBuyTellMeAboutInputData, whereToBuyRegionInputData);
  //   await mainPage.SearchTesting()
  // });

  // await test.step("Kellanova Home page", async () => {
  //   test.setTimeout(600000);
  //   kellano = new kellanova(page);
  //   const locator = 'https://www.kellanovaus.com/us/en/home.html';
  //   await page.goto(locator);
  //   // await kellano.kellanovaHomePage(kellanovamainpage, locator);
  //   await kellano.kellanovaHomePageImgs(kellanvaImgs, locator, kellanovabody);
  // });

  test("Cheezit Home page", async () => {
    kellano = new kellanova(page);
    const locator = 'https://www.cheezit.com/en-us/home.html';
    // const locator = 'https://www.poptarts.com/en_US/home.html';
    await page.goto(locator);
    const testpage = new Testpage(page);
    // await mainPage.cheezitMainpage(testpage, cheezitMainpage, cheezitDropdown, cheezitDropdownShop); 
    await mainPage.cheezitProductPage(cheezitProductPage, testpage); 
    await mainPage.cheezitFooter(cheezitFooter,testpage);
    await mainPage.SearchTesting(searchpage, testpage);
    // await mainPage.newone(headingpage)
  });
}); 