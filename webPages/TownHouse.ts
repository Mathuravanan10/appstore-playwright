import { Page, expect } from "@playwright/test";

export class testingPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

async MainPageTest(productMainPageList: any, locator:string) {
  const button = this.page.getByRole('button', { name: 'Accept Cookies' });
   if(await button.isVisible()){
    await this.page.getByRole('button', { name: 'Accept Cookies' }).click();
   }
    for (const menuItem of productMainPageList) {
      if(menuItem.productMenuLink){
        const MenuHeaderLocator = this.page.getByRole('link', { name: menuItem.productMenuLink });
        await MenuHeaderLocator.click();
        await this.page.waitForTimeout(2000);
      }else{
        const MenuLocator = this.page.getByLabel('menu', { exact: true }).getByLabel(menuItem.productMenuLabel);
        await MenuLocator.click();
      }
      const busyIndicator = this.page.getByText("Please wait");
      await busyIndicator.waitFor({ state: 'hidden', timeout: 60000 });
      if (menuItem.productMenuLabel) {
        await expect(this.page.getByLabel('Townhouse Crackers_brand logo')).toBeVisible();
        await this.page.waitForTimeout(2000);
        console.log(`${menuItem.productMenuLabel} Header Tested Successfully`);
        await this.page.goto(locator, { timeout: 30000, waitUntil: 'domcontentloaded' });
      }
    }
  }

  async MainPageCard(productMainHeaderList:any, locator:string) {
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
          await this.page.waitForLoadState('domcontentloaded');
          await expect(this.page.getByRole('img', { name: menuItem.productCardListImg})).toBeVisible();
          await this.page.waitForTimeout(2000);
        }
        console.log(`${menuItem.productCardList} Card List Tested Successfully`);
        await this.page.goto(locator, { timeout: 30000, waitUntil: 'domcontentloaded' });
      }
  }

  async MainPageFooter(productFooterList:any, locator:string) {
    const button = this.page.getByRole('button', { name: 'Accept Cookies' });
    if(await button.isVisible()){
     await this.page.getByRole('button', { name: 'Accept Cookies' }).click();
    }
    for (const menuItem of productFooterList) {
        if(menuItem.footerLabels){
          const MenuHeaderLocator = this.page.getByLabel( menuItem.footerLabels);
          await MenuHeaderLocator.click();
          console.log(`${menuItem.footerLabels} Footer Tested Successfully`);
        }else if(menuItem.footerLableLink){
          const footerLink = this.page.getByRole('link', { name: menuItem.footerLableLink });
          await footerLink.click();
          console.log(`${menuItem.footerLableLink} Footer Tested Successfully`);
        }
        else if(menuItem.footerTop){
          const MenuHeaderLocator = this.page.getByLabel( menuItem.footerTop);
          await MenuHeaderLocator.click();
          console.log(`${menuItem.footerTop} Footer Tested Successfully`);
        }
        else{
          const lableList = this.page.getByLabel('footer main navigation').getByLabel(menuItem.footerLable);
          await lableList.click();
          console.log(`${menuItem.footerLable} Footer Tested Successfully`);
        }
        const busyIndicator = this.page.getByText("Please wait");
        await busyIndicator.waitFor({ state: 'hidden', timeout: 60000 });
        if (menuItem.footerLable === 'Cookie Preferences') {
            await this.page.getByRole('button', { name: 'Reject All' }).click();
            await this.page.waitForTimeout(2000);
        }
        await this.page.waitForTimeout(2000);
        await this.page.goto(locator, { timeout: 30000, waitUntil: 'domcontentloaded' });
      }
  }
}