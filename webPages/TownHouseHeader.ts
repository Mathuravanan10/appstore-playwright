import { Page, expect, chromium } from "@playwright/test";
import { testingCardPage } from "./TownHouseCardList";
import { productMainHeaderList } from "../variableFiles/TownHouse";

export class testingHeaderPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async testingHeaderList(menuPageOurFood, locator, ourFood, ourFoodLink) {
    const button = this.page.getByRole('button', { name: 'Accept Cookies' });
    if(await button.isVisible()){
     await this.page.getByRole('button', { name: 'Accept Cookies' }).click();
    }
    for (const menuItem of menuPageOurFood) {
      console.log(menuItem.ourFoodLink, menuItem.productMenuLabel, locator, 'ooo');
     if(menuItem.productMenuLabel){
        await this.page.getByLabel('menu', { exact: true }).getByLabel(menuItem.productMenuLabel).click();
        await this.page.waitForTimeout(2000);
        expect(this.page.getByRole('img', { name: menuItem.productMenuImg })).toBeVisible();
        expect(this.page.getByRole('heading', { name: menuItem.productMenuText })).toBeVisible();
     }else if(menuItem.ourFoodTitleLink){
        if(menuItem.ourFoodLink){
            await this.page.getByRole('link', { name: menuItem.ourFoodLink }).click();
        }
        await this.page.waitForTimeout(2000);
        await this.page.getByTitle(menuItem.ourFoodTitleLink).click();
        if(menuItem.ourFoodButtonLink){
            await this.page.getByRole('button', { name: 'Region' }).click();
            await this.page.getByRole('option', { name: 'Quebec' }).click();
            await this.page.getByRole('link', { name: menuItem.ourFoodButtonLink }).click();
            expect(this.page.getByRole('heading', { name: menuItem.ourFoodButtonHeader })).toBeVisible();
            await this.page.waitForTimeout(2000);
        }
        await this.page.goto(ourFoodLink, { timeout: 30000, waitUntil: 'domcontentloaded' });
     }
     else{
        await this.page.getByRole('link', { name: menuItem.ourFoodLink }).click();
        await this.page.waitForTimeout(2000);
        await expect(this.page.getByRole('img', { name: menuItem.ourFoodImg })).toBeVisible();
        await expect(this.page.getByRole('heading', { name: menuItem.ourFoodHeader })).toBeVisible();
        await expect(this.page.getByRole('link', { name: 'View SmartLabel' })).toBeVisible();
        if(menuItem.ourFoodButton){
            await expect(this.page.getByLabel(menuItem.ourFoodButton)).toBeVisible();
        }
        const busyIndicator = this.page.getByText("Please wait");
      await busyIndicator.waitFor({ state: 'hidden', timeout: 60000 });
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

  async testingHeaderSignUpList(cardlist:any, locator:string) {
    const button = this.page.getByRole('button', { name: 'Accept Cookies' });
    if(await button.isVisible()){
     await this.page.getByRole('button', { name: 'Accept Cookies' }).click();
    }
    await this.page.getByLabel('menu', { exact: true }).getByLabel('Sign Up').click();
    await this.page.getByRole('heading', { name: 'SIGN UP TO FIND OUT ABOUT NEW' }).click();
    await this.page.getByPlaceholder('First Name*').click();
    await this.page.getByPlaceholder('First Name*').fill('mathu');
    await this.page.getByPlaceholder('Last Name*').click();
    await this.page.getByPlaceholder('Last Name*').fill('ravanan');
    await this.page.getByPlaceholder('Email Address*', { exact: true }).click();
    await this.page.getByPlaceholder('Email Address*', { exact: true }).fill('mathu@gmail.com');
    await this.page.getByPlaceholder('Confirm Email Address*').click();
    await this.page.getByPlaceholder('Confirm Email Address*').fill('mathu@gmail.com');
    await this.page.getByLabel('Date of Birth *').fill('2024-01-01');
    await this.page.locator('label').filter({ hasText: 'Yes, I consent to receiving' }).click();
    await this.page.waitForTimeout(2000);
    }
  
}