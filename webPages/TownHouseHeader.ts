import { Page, expect, chromium } from "@playwright/test";

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
        await this.page.getByRole('link', { name: menuItem.ourFoodLink }).click();
        await this.page.waitForTimeout(2000);
        await this.page.getByTitle(menuItem.ourFoodTitleLink).click();
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
  
}