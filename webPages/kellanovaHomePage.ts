import { Page, expect, chromium, selectors } from "@playwright/test";
import { Testpage } from "./testpage";
import { css, xpath } from 'playwright-ui5'

export class kellanova {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async kellanovaHomePage(kellanovamainpage:any, locator:string) {
    const testpage = new Testpage(this.page);
    await testpage.acceptCookies();
    for(const click of kellanovamainpage){
      if(click.kellanovaheading){
        await expect(this.page.getByRole('heading', { name: click.kellanovaheading})).toBeVisible();
        await expect(this.page.getByRole('heading', { name: click.kellanovaheading2})).toBeVisible();
        await expect(this.page.getByRole('img', { name: click.kellanovaimg })).toBeVisible();
        await this.page.goto(locator, { timeout: 30000, waitUntil: 'domcontentloaded' });
        console.log(click.kellanovaLink, 'lll');
      }else{
        if(click.kellanovaLinkBuy){
          await this.page.getByRole('link', { name: click.kellanovaLinkBuy, exact: true }).click();
          await this.page.goto(locator, { timeout: 30000, waitUntil: 'domcontentloaded' });
        }
        else if(click.kellanovaLinkUs){
          await this.page.locator('header').getByRole('link', { name: click.kellanovaLinkUs }).click();
          await this.page.goto(locator, { timeout: 30000, waitUntil: 'domcontentloaded' });
        }
        else{
          await this.page.getByRole('link', { name: click.kellanovaLink }).click();
          if(click.kellanovaimg){
            await expect(this.page.getByRole('img', { name: click.kellanovaimg })).toBeVisible();
            await expect(this.page.getByRole('heading', { name: click.kellanovaHeading, exact: true })).toBeVisible();
          }
          if(click.kellanovaText){
          await expect(this.page.getByText(click.kellanovaText)).toBeVisible();
          }
          await this.page.waitForTimeout(2000);
          await this.page.goto(locator, { timeout: 30000, waitUntil: 'domcontentloaded' });
        }
      }
    }
  }

  async kellanovaHomePageImgs(kellanvaImgs:any, locator:string, kellanovabody: any) {
   const testpage = new Testpage(this.page);
    await testpage.acceptCookies();
    for(const click of kellanvaImgs){
      await expect(this.page.getByRole('img', { name: click })).toBeVisible();
      console.log(click, 'kkk');
    }
    await expect(this.page.getByRole('heading', { name: 'Munch more with these money' })).toBeVisible();;
    await expect(this.page.getByRole('img', { name: 'Crackers with olives and' })).toBeVisible();
    for(const click of kellanovabody){
    await this.page.getByRole('link', { name: click.kellanovaLink }).click();
    await expect(this.page.getByRole('img', { name: click.kellanovaimg })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: click.kellanovaHeading, exact: true })).toBeVisible();
    if(click.kellanovaText){
     await expect(this.page.getByText(click.kellanovaText)).toBeVisible();
    }
    await this.page.goto(locator, { timeout: 30000, waitUntil: 'domcontentloaded' });
    await this.page.waitForTimeout(2000);
    }
  }

  async kellanovaHeadingPart(testpage, productDetails){
    await testpage.acceptCookies();
    for(const click of productDetails){
      if(click.headerName){
        await testpage.roleLink(click.headerName);
      }
      if(click.productName){
        await this.page.waitForTimeout(4000);
        await testpage.roleLink(click.productName);
      }
      await this.page.waitForTimeout(2000);
      await expect(this.page.locator('h1')).toBeVisible();
      if(click.productHeader){
        await expect(this.page.getByRole('heading', { name: click.productHeader })).toBeVisible();
      }
      if(click.productImg){
        await expect(this.page.getByRole('link', { name: click.productImg })).toBeVisible();
      }
      if(click.productHeader2){
        await expect(this.page.getByRole('heading', { name: click.productHeader2 })).toBeVisible();
      }
      if(click.productText){
        await expect(this.page.getByText(click.productText)).toBeVisible();
      }
      if(click.productH2Text){
        await expect(this.page.locator('h2').filter({ hasText: click.productH2Text })).toBeVisible();
      }
      if(click.productText2){
        await expect(this.page.getByText(click.productText2)).toBeVisible();
      }
      if(click.productDetailLink){
        await this.page.getByRole('link', { name: click.productDetailLink }).click();
      }
      await this.page.waitForTimeout(4000);
      await expect(this.page.getByRole('img', { name: click.productDetailImg })).toBeVisible();
      await expect(this.page.getByRole('heading', { name: click.productDetailHeader })).toBeVisible();
      await expect(this.page.getByText(click.productDetailText)).toBeVisible();
      await expect(this.page.getByRole('button', { name: click.productDetailReview })).toBeVisible();
      if(click.goBack){
        await this.page.goBack();
      }
      if(click.productDetailBuy){
        await this.page.getByLabel(click.productDetailBuy).click();
        await this.page.waitForTimeout(10000);
        await expect(this.page.getByLabel('Shop from other retailers').locator('img').first()).toBeVisible();
        await expect(this.page.getByLabel('Shop from other retailers').locator('img').nth(1)).toBeVisible();
        await expect(this.page.getByLabel(click.productDetailBuyHedaer)).toBeVisible();
        await this.page.getByLabel(click.productDetailclose).click();
      }
      if(click.productDetailNut){
        await expect(this.page.getByRole('heading', { name: click.productDetailNut })).toBeVisible();
        await expect(this.page.getByRole('heading', { name: click.productDetailIng })).toBeVisible();
        await expect(this.page.getByText(click.productDeatilIngText)).toBeVisible();
        await expect(this.page.getByText(click.productDetailTextFor)).toBeVisible();
        // await this.page.getByRole('link', { name: click.productDetailButton }).click();
        await testpage.roleLink(click.productDetailButton);
        const page1Promise = this.page.waitForEvent('popup');
        await this.page.waitForTimeout(2000);
        (await page1Promise).close();
        await this.page.goBack();
      }
      if(click.productNextText){
        await expect(this.page.getByText(click.productNextText).first()).toBeVisible();
        await expect(this.page.getByRole('heading', { name: click.productNextHeader })).toBeVisible();
        await this.page.getByRole('link', { name: click.productNextButton }).first().click();
        await this.page.waitForTimeout(2000);
        await this.page.goBack();
        await expect(this.page.getByText(click.productNextText).nth(1)).toBeVisible();
        await expect(this.page.getByRole('heading', { name: click.productNextHeader2 })).toBeVisible();
        await this.page.getByRole('link', { name: click.productNextButton }).nth(1).click();
        await this.page.waitForTimeout(2000);
        await this.page.goBack();
      }
    }
  }

   async sapI5(){
      await selectors.register('ui5-css', css);
      await selectors.register('ui5-xpath', xpath);
      await this.page.goto('https://my415865.s4hana.cloud.sap/ui#/Shell-home');
      await this.page.getByPlaceholder('Email or User Name').click();
      await this.page.getByPlaceholder('Email or User Name').fill('naren@basiscloudsolutions.com');
      await this.page.getByPlaceholder('Password').click();
      await this.page.getByPlaceholder('Password').fill('N@renbcs2024');
      await this.page.getByRole('button', { name: 'Continue' }).click();
      await this.page.waitForTimeout(8000);
      this.page.locator(`ui5-xpath=//span[@id='__header0-9-expandIcon']//span[1]`).click;
      this.page.locator(`(//div[@class='sapMImageContent sapMTcInnerMarker'])[2]`).click;
      await this.page.waitForTimeout(8000);
   }
}