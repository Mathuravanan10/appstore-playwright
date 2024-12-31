import { Page, expect, chromium } from "@playwright/test";

export class testingCardPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async testingCardList(productMainHeaderList:any, locator:string) {
    const button = this.page.getByRole('button', { name: 'Accept Cookies' });
    if(await button.isVisible()){
     await this.page.getByRole('button', { name: 'Accept Cookies' }).click();
    }
    for (const menuItem of productMainHeaderList) {
      const MenuHeaderLocator = this.page.getByRole('link', { name: menuItem.productCardList });
      await MenuHeaderLocator.click();
      const busyIndicator = this.page.getByText("Please wait");
      await busyIndicator.waitFor({ state: 'hidden', timeout: 60000 });
      if (menuItem.productCardListImg) {
        await this.page.waitForTimeout(2000);
        await expect(this.page.getByRole('img', { name: menuItem.productCardListImg})).toBeVisible();
        await expect(this.page.getByRole('heading', { name: menuItem.productCardListText})).toBeVisible();
        await expect(this.page.getByRole('link', { name: 'PRINT' })).toBeVisible();
      }
      const Ingredients = this.page.getByRole('link', { name: 'Nutrition Information' });
      if(await Ingredients.isVisible()){
        await this.page.getByRole('link', { name: 'Nutrition Information' }).click();
        await this.page.waitForTimeout(1000);
        await this.page.getByRole('link', { name: 'Close' }).click();
      } 
      console.log(`${menuItem.productCardList} Tested Successfully.`);       
      await this.page.goto(locator, { timeout: 30000, waitUntil: 'domcontentloaded' });
    }
  }
  
}