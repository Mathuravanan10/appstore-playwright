import { Page, expect, chromium } from "@playwright/test";

export class Testpage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async acceptCookies() {
    const buttonOk = this.page.getByRole('button', { name: 'OK', exact: true });
    const button = this.page.getByRole('button', { name: 'Accept Cookies' });
    if(await button.isVisible()){
     await this.page.getByRole('button', { name: 'Accept Cookies' }).click();
    }
    
    if(await buttonOk.isVisible()){
     await this.page.getByRole('button', { name: 'OK', exact: true }).click();
    }
  }

  async exportImage(image:any) {
    await expect(this.page.getByRole('img', { name: image })).toBeVisible({ timeout: 40000 });
  }
  
  async roleHeadingExact(heading:any) {
    await expect(this.page.getByRole('heading', { name: heading, exact: true })).toBeVisible({ timeout: 40000 });
  }

  async roleLink(Link:any) { 
    const cardLink = this.page.getByRole('link', { name: Link });
    if(await cardLink.isVisible()){
      await cardLink.click();
      console.log(`${Link} Click Tested Successfully`);
    }else{
      console.log(`${Link} is not visible`);
    }  
  }

  async roleLinkExact(Link:any) { 
    const cardLink = this.page.getByRole('link', { name: Link, exact: true });
    if(await cardLink.isVisible()){
      await cardLink.click();
      console.log(`${Link} Click Tested Successfully`);
    }else{
      console.log(`${Link} is not visible`);
    }
  }

  async whereToBuyLocatorLink(Link: any){
    const whereToBuy = this.page.locator('#container-22d6269fad').getByRole('link', { name: Link, exact: true  });
    if(await whereToBuy.isVisible()){
      await whereToBuy.click();
      console.log(`${Link} Click Tested Successfully`);
    }else{
      console.log(`${Link} is not visible`);
    }      
  }

  async ByText(Text:any) {
    await expect(this.page.getByText(Text)).toBeVisible({ timeout: 40000 });
  }
}