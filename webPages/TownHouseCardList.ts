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
      if(await MenuHeaderLocator.isVisible()){
        await MenuHeaderLocator.click();
      }else{
        console.log(`${MenuHeaderLocator} is not visible`);
      }
      const busyIndicator = this.page.getByText("Please wait");
      await busyIndicator.waitFor({ state: 'hidden', timeout: 60000 });
      if (menuItem.productCardListImg) {
        await this.page.waitForTimeout(2000);
        await this.page.waitForLoadState('load');
        try{
          await expect(this.page.getByRole('img', { name: menuItem.productCardListImg})).toBeVisible();
          await expect(this.page.getByRole('heading', { name: menuItem.productCardListText})).toBeVisible();
          await expect(this.page.getByRole('link', { name: 'PRINT' })).toBeVisible();
        }catch(error){
          console.log(`${error} is not visible.`);
        }
      }
      if(menuItem.PREPTIME){
        try{
          await expect(this.page.getByText('PREP TIME (MIN):')).toBeVisible();
        }catch(error){
          console.log(`${error} is not visible.`);
        }
      }
      if(menuItem.TOTALTIME){
        try{
          await expect(this.page.getByText('TOTAL TIME (MIN):')).toBeVisible();
        }catch(error){
          console.log(`${error} is not visible.`);
        }
      }
      if(menuItem.SERVINGS){
        try{
          await expect(this.page.getByText('SERVINGS')).toBeVisible();
        }catch(error){
          console.log(`${error} is not visible.`);
        }
      }
      if(menuItem.cardHeader){
        const cardHeaderName = this.page.getByRole('heading', { name: menuItem.cardHeader });
        const cardHeaderNameText =this.page.getByRole('heading', { name: menuItem.cardHeaderTwo});
        if(await cardHeaderName.isVisible()){
          console.log(`${menuItem.cardHeader} Cards Tested Successfully`);
        }else{
          console.log(`${menuItem.cardHeader} is not visible`);
        }
        if(await cardHeaderNameText.isVisible()){
          console.log(`${menuItem.cardHeaderTwo} Cards Tested Successfully`);
        }else{
          console.log(`${menuItem.cardHeaderTwo} is not visible`);
        }
          try{
            if(menuItem.textFirst){
            await expect(this.page.getByText(menuItem.textFirst)).toBeVisible();
            }
            if(menuItem.textsecound){
            await expect(this.page.getByText(menuItem.textsecound)).toBeVisible();
            }
            if(menuItem.textThird){
            await expect(this.page.getByText(menuItem.textThird)).toBeVisible();
            }
            if(menuItem.textNote){
            await expect(this.page.getByText(menuItem.textNote)).toBeVisible();
            }
            if(menuItem.textLastNode){
            await expect(this.page.getByText(menuItem.textLastNode)).toBeVisible();
            }
            if(menuItem.textFourth){
            await expect(this.page.getByText(menuItem.textFourth)).toBeVisible();
            }
            if(menuItem.textFive){
            await expect(this.page.getByText(menuItem.textFive)).toBeVisible();
            }
            if(menuItem.textSix){
            await expect(this.page.getByText(menuItem.textSix)).toBeVisible();
            }
            if(menuItem.textSeven){
            await expect(this.page.getByText(menuItem.textSeven)).toBeVisible();
            }
            if(menuItem.textEight){
            await expect(this.page.getByText(menuItem.textEight)).toBeVisible();
            }
            if(menuItem.textNine){
            await expect(this.page.getByText(menuItem.textNine)).toBeVisible();
            }
            if(menuItem.IngredientsTextTen){
              await expect(this.page.getByText(menuItem.IngredientsTextTen)).toBeVisible();
            }
          }catch(error){
            console.log(`${error} is not visible.`);
          }
      }
      const Ingredients = this.page.getByRole('link', { name: 'Nutrition Information' });
      if(await Ingredients.isVisible()){
        await this.page.getByRole('link', { name: 'Nutrition Information' }).click();
        await this.page.waitForTimeout(1000);
        await this.page.getByRole('link', { name: 'Close' }).click();
      } 
      console.log(`${menuItem.productCardList} Cards Tested Successfully.`);       
      await this.page.goto(locator, { timeout: 30000, waitUntil: 'domcontentloaded' });
    }
  }

  async cardListButton (cardListButton, locator) {
    const button = this.page.getByRole('button', { name: 'Accept Cookies' });
    if(await button.isVisible()){
     await this.page.getByRole('button', { name: 'Accept Cookies' }).click();
    }
    for(const click of cardListButton){
      try{
      await this.page.getByRole('heading', { name: click.header }).click();
      await this.page.getByText(click.text).click();
      await this.page.getByRole('link', { name: click.clickLink }).click();
      }catch(error){
        console.log(`${error} is not visible.`);
      }
      if(click.clickLink === 'Join Today'){
        const page2Promise = this.page.waitForEvent('popup');
        await this.page.waitForLoadState('load');
        try{
          await expect((await page2Promise).getByRole('heading', { name: click.expectHeader})).toBeVisible();
          await this.page.waitForTimeout(3000);
          (await page2Promise).close();
          console.log(`${click.clickLink} Cards Tested Successfully.`); 
        }catch(error){
          console.log(`${error} is not visible.`);
        }  
      }else{
        try{
          await this.page.waitForTimeout(3000);
          await expect(this.page.getByRole('heading', { name: click.expectHeader})).toBeVisible();
        }catch(error){
          console.log(`${error} is not visible.`);
        }
        await this.page.goto(locator, { timeout: 30000, waitUntil: 'domcontentloaded' });
      }    
    }
  }
  
}