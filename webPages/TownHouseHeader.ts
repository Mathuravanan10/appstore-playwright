import { Page, expect, chromium } from "@playwright/test";
import { testingCardPage } from "./TownHouseCardList";
import { productMainHeaderList } from "../variableFiles/TownHouse";

export class testingHeaderPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async testingHeaderList(menuPageOurFood, ourFood, ourFoodLink) {
    const button = this.page.getByRole('button', { name: 'Accept Cookies' });
    if(await button.isVisible()){
     await this.page.getByRole('button', { name: 'Accept Cookies' }).click();
    }
    for (const menuItem of menuPageOurFood) {
     if(menuItem.productMenuLabel){
        await this.page.getByLabel('menu', { exact: true }).getByLabel(menuItem.productMenuLabel).click();
        await this.page.waitForTimeout(2000);
        expect(this.page.getByRole('img', { name: menuItem.productMenuImg })).toBeVisible();
        expect(this.page.getByRole('heading', { name: menuItem.productMenuText })).toBeVisible();
        console.log(menuItem.productMenuLabel, 'Headers Testing Now');
     }else if(menuItem.ourFoodTitleLink){
        if(menuItem.ourFoodLink){
            await this.page.getByRole('link', { name: menuItem.ourFoodLink }).click();
        }
        await this.page.waitForTimeout(2000);
        await this.page.getByTitle(menuItem.ourFoodTitleLink).click();
        const page2Promise = this.page.waitForEvent('popup');
        await this.page.waitForLoadState('domcontentloaded');
        (await page2Promise).close();
        await this.page.goto(ourFoodLink, { timeout: 30000, waitUntil: 'domcontentloaded' });
        console.log(menuItem.ourFoodTitleLink, 'Headers Testing Now');
        if(menuItem.ourFoodButtonLink){
          await this.page.getByRole('button', { name: 'Region' }).click();
          await this.page.getByRole('option', { name: 'Quebec' }).click();
          await this.page.getByRole('link', { name: menuItem.ourFoodButtonLink }).click();
          await this.page.waitForTimeout(2000);
          console.log(menuItem.ourFoodButtonLink, 'Headers Testing Now');
        }
     }
     else{
        await this.page.getByRole('link', { name: menuItem.ourFoodLink }).click();
        await this.page.waitForTimeout(2000);
        await this.page.waitForLoadState('domcontentloaded');
        await expect(this.page.getByRole('img', { name: menuItem.ourFoodImg })).toBeVisible();
        await expect(this.page.getByRole('heading', { name: menuItem.ourFoodHeader })).toBeVisible();
        await expect(this.page.getByRole('link', { name: 'View SmartLabel' })).toBeVisible();
        if(menuItem.ourFoodButton){
          await expect(this.page.getByLabel(menuItem.ourFoodButton)).toBeVisible();
        }
      const busyIndicator = this.page.getByText("Please wait");
      await busyIndicator.waitFor({ state: 'hidden', timeout: 60000 });
      console.log(menuItem.ourFoodLink, 'Headers Testing Now');
      await this.page.goto(ourFood, { timeout: 30000, waitUntil: 'domcontentloaded' });
     }
    }
  }

  async testingHeaderRecipesList(cardlist:any, locator:string) {
    const button = this.page.getByRole('button', { name: 'Accept Cookies' });
    if(await button.isVisible()){
     await this.page.getByRole('button', { name: 'Accept Cookies' }).click();
    }
    await this.page.getByLabel('Recipes').click();
    await this.page.getByRole('heading', { name: 'TASTY RECIPES USING TOWN' }).click();
    await this.page.getByRole('img', { name: 'Townhouse Crackers arranged' }).click();
    await cardlist.testingCardList(productMainHeaderList, locator);
  }

  async testingHeaderSignUpList(locator:string, appCreate) {
    const {firstName, LastName, Email, confirmEmail, DOB}=appCreate
    const button = this.page.getByRole('button', { name: 'Accept Cookies' });
    if(await button.isVisible()){
     await this.page.getByRole('button', { name: 'Accept Cookies' }).click();
    }
    await this.page.getByLabel('menu', { exact: true }).getByLabel('Sign Up').click();
    await this.page.getByRole('heading', { name: 'SIGN UP TO FIND OUT ABOUT NEW' }).click();
    await this.page.getByPlaceholder('First Name*').click();
    await this.page.getByPlaceholder('First Name*').fill(firstName);
    await this.page.getByPlaceholder('Last Name*').click();
    await this.page.getByPlaceholder('Last Name*').fill(LastName);
    await this.page.getByPlaceholder('Email Address*', { exact: true }).click();
    await this.page.getByPlaceholder('Email Address*', { exact: true }).fill(Email);
    await this.page.getByPlaceholder('Confirm Email Address*').click();
    await this.page.getByPlaceholder('Confirm Email Address*').fill(confirmEmail);
    await this.page.getByLabel('Date of Birth *').fill(DOB);
    await this.page.locator('label').filter({ hasText: 'Yes, I consent to receiving' }).click();
    await this.page.waitForTimeout(2000);
  }

  async testingHeaderWhereToByList(buyRegionButton:any, buySoldByButton:any) {
      const button = this.page.getByRole('button', { name: 'Accept Cookies' });
      if(await button.isVisible()){
        await this.page.getByRole('button', { name: 'Accept Cookies' }).click();
      }
      await this.page.getByLabel('Where To Buy').click();
      await expect(this.page.getByRole('heading', { name: 'Where To Buy' })).toBeVisible();
      for(const option of buyRegionButton){
        await this.page.getByRole('button', { name: 'Region' }).click();
        await this.page.getByRole('option', { name: option }).click(); 
        await this.page.waitForTimeout(2000);
      }
      for(const option of buySoldByButton){
        await this.page.getByRole('button', { name: 'Sold By' }).click();
        await this.page.getByRole('option', { name: option }).click(); 
        await this.page.waitForTimeout(2000);
      }
      await this.page.getByRole('button', { name: 'Quick View' }).nth(2).click();
      await this.page.locator('#ProductTitle').click();
      await this.page.getByRole('button', { name: 'Show More' }).click();
      await this.page.waitForTimeout(2000);
      await this.page.getByRole('button', { name: 'Show Less' }).click();
      await this.page.getByLabel('close', { exact: true }).click();
      await this.page.getByRole('link', { name: 'Kellogg’s* Town House* Flatbread Crisps Italian Herb Crackers' }).click();
      await this.page.waitForTimeout(2000);
      await this.page.getByRole('heading', { name: 'Kellogg’s* Town House*' }).click();
      await this.page.getByLabel('breadcrumbs').getByRole('link', { name: 'Home' }).click();
  }
  
}