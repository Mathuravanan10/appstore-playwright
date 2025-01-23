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
     await this.page.getByRole('link', { name: Link  }).click();  
  }
  async ByText(Text:any) {
    await expect(this.page.getByText(Text)).toBeVisible({ timeout: 40000 });
  }
}