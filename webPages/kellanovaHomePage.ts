import { Page, expect, chromium } from "@playwright/test";
import { Testpage } from "./testpage";

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

  async kellanovaHeadingPart(){
    await page.getByRole('link', { name: 'Our Brands' }).click();
  await page.getByRole('link', { name: 'Austin' }).click();
  await page.locator('h1').click();
  await page.getByRole('heading', { name: 'Conveniently packaged to fit' }).click();
  await page.getByRole('link', { name: 'Austin crackers' }).click();
  await page.locator('h2').filter({ hasText: 'Austin®' }).click();
  await page.getByRole('link', { name: 'Austin Cheese Crackers with Cheddar Cheese Image Austin Cheese Crackers with' }).click();
  await page.getByRole('img', { name: 'Austin Cheese Crackers with' }).click();
  await page.getByRole('heading', { name: 'Austin Cheese Crackers with' }).click();
  await page.getByRole('button', { name: '2.0 out of 5 stars, average' }).click();
  await page.getByText('Sandwich Crackers, Cheese').click();
  await page.goto('https://www.kellanovaus.com/us/en/brands/austin.html#');
  await page.getByRole('link', { name: 'Austin Toasty Crackers with' }).click();
  await page.getByRole('img', { name: 'Austin Toasty Crackers with' }).click();
  await page.getByRole('heading', { name: 'Austin Toasty Crackers with' }).click();
  await page.getByRole('button', { name: '2.2 out of 5 stars, average' }).click();
  await page.getByText('Baked peanut butter sandwich').click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'View SmartLabel' }).click();
  const page1 = await page1Promise;
  await page1.getByText('Austin® Toasty Crackers with').click();
  await page.getByRole('heading', { name: 'Nutrition' }).click();
  await page.goto('https://www.kellanovaus.com/us/en/brands/austin.html#');
  await page.getByRole('link', { name: 'Austin Cheese Crackers with Peanut Butter Image Austin Cheese Crackers with' }).click();
  await page.getByRole('img', { name: 'Austin Cheese Crackers with' }).click();
  await page.getByRole('heading', { name: 'Austin Cheese Crackers with' }).click();
  await page.getByRole('button', { name: '2.1 out of 5 stars, average' }).click();
  await page.getByLabel('click to see where to buy').click();
  await page.getByLabel('Shop Austin® Cheese Crackers').click();
  await page.getByRole('heading', { name: 'Nutrition' }).click();
  await page.getByRole('heading', { name: 'Want it. Need it. Cheez-It®' }).click();
  await page.getByRole('heading', { name: 'Endless flavors to #' }).click();
  await page.getByRole('link', { name: 'View Brand' }).first().click();
  await page.locator('h1').click();
  await page.goto('https://www.kellanovaus.com/us/en/brands/austin.html#');
  await page.getByRole('link', { name: 'View Brand' }).nth(1).click();
  await page.locator('h1').click();
  }
  }