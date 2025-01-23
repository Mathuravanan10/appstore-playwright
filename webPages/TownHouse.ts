import { Page, expect } from "@playwright/test";
import { Testpage } from "./testpage";

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
        if(await MenuHeaderLocator.isVisible()){
          await MenuHeaderLocator.click();
          console.log(`${menuItem.footerLabels} Footer Tested Successfully`);
        }else{
          console.log(`${ menuItem.footerLabels} is not visible`)
        }
      }else if(menuItem.footerLableLink){
        const footerLink = this.page.getByRole('link', { name: menuItem.footerLableLink });
        if(await footerLink.isVisible()){
          await footerLink.click();
          console.log(`${menuItem.footerLableLink} Footer Tested Successfully`);
        }else{
          console.log(`${menuItem.footerLableLink} is not visible`)
        }
        if(menuItem.footerLableLink !== 'Cookie Preferences'){
          const page2Promise = this.page.waitForEvent('popup');
          await this.page.waitForLoadState('domcontentloaded');
          (await page2Promise).close();
        }
      }
      else if(menuItem.footerTop){
        const MenuHeaderLocator = this.page.getByLabel( menuItem.footerTop);
        if(await MenuHeaderLocator.isVisible()){
          await MenuHeaderLocator.click();
          console.log(`${menuItem.footerTop} Footer Tested Successfully`);
        }else{
          console.log(`${menuItem.footerTop} is not visible`)
        }
      }
      else{
        const lableList = this.page.getByLabel('footer main navigation').getByLabel(menuItem.footerLable);
        if(await lableList.isVisible()){
          await lableList.click();
          console.log(`${menuItem.footerLable} Footer Tested Successfully`);
        }else{
          console.log(`${menuItem.footerLable} is not visible`)
        }
      }
      const busyIndicator = this.page.getByText("Please wait");
      await busyIndicator.waitFor({ state: 'hidden', timeout: 60000 });
      if (menuItem.footerLableLink === 'Cookie Preferences') {
        const Reject = this.page.getByRole('button', { name: menuItem.footerCheckButton });
        if(await Reject.isVisible()){
          await Reject.click();
        }
      }
      await this.page.waitForTimeout(2000);
      await this.page.goto(locator, { timeout: 30000, waitUntil: 'domcontentloaded' });
    }
  }

  async kellanovaHeaderaPage (kellanovaHeaderLinks: any, testpage: any){  
    await testpage.acceptCookies();
    for(const click of kellanovaHeaderLinks){
      if(click.HeaderLink){
      const MenuHeaderLocator = this.page.getByRole('navigation').getByRole('link', { name: click.HeaderLink });
      if(await MenuHeaderLocator.isVisible()){
        await MenuHeaderLocator.click();
      }else{
        console.log(`${MenuHeaderLocator} is not visible`);
      }
      try{
        await expect(this.page.locator(click.HedearImg)).toBeVisible();
        await expect(this.page.getByRole('link', { name: click.HeaderRoleText, exact: true })).toBeVisible(); 
      }catch(error){
        console.log(`${error} Header is not Visible`)
      }
      const linkButton = this.page.getByRole('link', { name: 'CheezIt Brand page' });
      if(await linkButton.isVisible()){
        await linkButton.click();
      }else{
        console.log(`${linkButton} is not visible`);
      }
      const Promise = this.page.waitForEvent('popup');
      await (await Promise).getByRole('button', { name: 'Accept Cookies' }).click();
      await (await Promise).locator('#maincontent div').filter({ hasText: 'Get More Real Cheese' }).nth(3).click();
      (await Promise).close();
      }
      if(click.HeaderProductLink){
        const LinkHeader = this.page.getByRole('link', { name: click.HeaderProductLink });
        if(await LinkHeader.isVisible()){
          await LinkHeader.click();
        }else{
          console.log(`${LinkHeader} is not visible`);
        }
        try{
          await expect(this.page.locator('#skip-main-content').getByRole('img').nth(1)).toBeVisible();
          await expect(this.page.getByText(click.HeaderTextOne)).toBeVisible();
          await expect(this.page.getByText(click.HeaderTextTwo)).toBeVisible();
        }catch(error){
          console.log(`${error} Header is not Visible`)
        }
      }
      if(click.HeaderProductList){
        await this.page.getByRole('img', { name: click.HeaderProductList }).click();
        await this.page.waitForTimeout(8000);
        await this.page.waitForLoadState('load');
        try{
          await expect(this.page.getByRole('img', { name: click.HeaderProductImg })).toBeVisible();
          await expect(this.page.getByRole('heading', { name: click.HeaderProductRoleText})).toBeVisible();
          await expect(this.page.getByText(click.HeaderProductTextOne)).toBeVisible();
        }catch(error){
          console.log(`${error} Header is not Visible`)
        }
        await this.page.getByRole('link', { name: 'View SmartLabel' }).click();
        const SmartLabe = this.page.waitForEvent('popup');
        (await SmartLabe).close();
        await expect(this.page.getByText(click.HeaderProductTextTwo)).toBeVisible();
        await this.page.getByRole('button', { name: 'Region' }).click();
        await this.page.getByRole('option', { name: 'Nova Scotia' }).click();
        await this.page.getByRole('button', { name: 'Region' }).click();
        console.log(`${click.HeaderProductList} tested Successfull`)
        await this.page.goBack();
        if(click.Goback){
          await this.page.goBack();
        }
      }
    }
  }


  async KellanovaMainPage(FooterLinks: any, testpage: any) {
    await testpage.acceptCookies();
    try{
      await expect(this.page.getByRole('img', { name: 'Better Days Learn how we\'re' })).toBeVisible();
      await expect(this.page.getByText('Better Days', {exact: true }).nth(1)).toBeVisible();
      await expect(this.page.getByText('Learn how we\'re creating').nth(1)).toBeVisible();
    }catch(error){
      console.log(`${error} MainPage is not Visible`)
    }
    await this.page.getByRole('link', { name: 'LEARN MORE' }).click();
    const page1Promise = this.page.waitForEvent('popup');
    await (await page1Promise).getByRole('button', { name: 'Accept Cookies' }).click();
    await expect((await page1Promise).getByRole('heading', { name: 'Kellanova Better Days™ Promise', exact: true })).toBeVisible();
    (await page1Promise).close();
    try{
      await expect(this.page.locator('.kstl-feature-inset')).toBeVisible();
      await expect(this.page.getByText('Be the first to know')).toBeVisible();
      await expect(this.page.getByText('Sign up now to get our latest')).toBeVisible();
    }catch(error){
      console.log(`${error} MainPage is not Visible`)
    }
    await this.page.getByRole('link', { name: 'JOIN TODAY!' }).click();
    await expect(this.page.locator('#skip-main-content').getByRole('img')).toBeVisible();
    await this.page.getByRole('navigation').getByRole('link', { name: 'Where to Buy' }).click();
    await this.page.goBack();
    await this.page.getByRole('navigation').getByRole('link', { name: 'Our Brands' }).click();
    await this.page.goBack();
    await this.page.getByRole('link', { name: 'Français' }).click();
    await this.page.getByRole('link', { name: 'English' }).click();
    await expect(this.page.getByText('*© 2023, Trademark of')).toBeVisible();
    await this.page.getByRole('link', { name: '‹' }).click();
    // Footer
    for(const click of FooterLinks){
      if(click.FooterLinkContentinfo){
        await this.page.getByRole('contentinfo').getByRole('link', { name: click.FooterLinkContentinfo }).click();
        await this.page.goBack();
        console.log(`${click.FooterLinkContentinfo} Click successfully`)
      }
      if(click.FooterLink){
        await this.page.getByRole('link', { name: click.FooterLink }).click();
        if(click.FooterLink === 'Sign Up for Newsletter'){
          try{
            await expect(this.page.getByRole('heading', { name: click.LinkHeading })).toBeVisible();
            await expect(this.page.getByText(click.LinkText)).toBeVisible();
          }catch(error){
            console.log(`${error} Footer is not Visible`)
          }
          await this.page.getByLabel('*Date of Birth').fill('2010-02-12');
          await this.page.getByLabel('*Email Address').click();
          await this.page.getByLabel('*Email Address').fill('mathu@gmail.com');
          await this.page.getByLabel('*First Name').click();
          await this.page.getByLabel('*First Name').fill('mathu');
          await this.page.getByLabel('*Last Name').click();
          await this.page.getByLabel('*Last Name').fill('mathi');
          await this.page.getByLabel('*News, Promotions and Special').check();
          await this.page.goBack();
          console.log(`${click.FooterLink} Click successfully`)
        }
        if(click.FooterLink === 'Sitemap'){
          try{
            await expect(this.page.getByRole('heading', { name: click.LinkHeading })).toBeVisible();
            await this.page.goBack();
            console.log(`${click.FooterLink} Click successfully`);
          }catch(error){
            console.log(`${error} Footer is not Visible`)
          }
        }
        if(click.FooterLink === 'Terms of Use'){
          await this.page.goBack();  
          console.log(`${click.FooterLink} Click successfully`)
        }
        if(click.FooterLink === 'Accessibility'){
          try{
            await expect(this.page.getByRole('heading', { name: click.LinkHeading })).toBeVisible();
            await this.page.goBack();  
            console.log(`${click.FooterLink} Click successfully`);
          }catch(error){
            console.log(`${error} Footer is not Visible`)
          }
        }
        if(click.FooterLink === 'Privacy Notice'){
          // await this.page.getByRole('button', { name: click.cookiesButton }).click();
          await expect(this.page.getByRole('heading', { name: click.LinkHeading })).toBeVisible();  
          await this.page.goBack();  
          console.log(`${click.FooterLink} Click successfully`) 
        }
      }
      if(click.FooterTextLink === 'Cookie Preferences'){
        await this.page.getByText(click.FooterTextLink, { exact: true }).click();
        await this.page.getByRole('button', { name: click.RejectButton }).click();
        console.log(`${click.FooterTextLink} Click successfully`)
      }
      if(click.FooterTextLink === 'Contact Us'){
        await this.page.getByText(click.FooterTextLink).click();
        await this.page.waitForTimeout(4000);
        await this.page.waitForLoadState('load');
        try{
          await expect(this.page.locator('#skip-main-content').getByRole('img').first()).toBeVisible();
          await expect(this.page.getByRole('link', { name: 'View Our FAQs' })).toBeVisible();
          await expect(this.page.locator('#skip-main-content iframe').contentFrame().getByRole('heading', { name: 'Contact Us', exact: true })).toBeVisible();
          await expect(this.page.locator('#skip-main-content iframe').contentFrame().getByText('Monday - Friday 8:30 am - 4:')).toBeVisible();
          await expect(this.page.locator('#skip-main-content iframe').contentFrame().getByText('Kellanova Canada Inc. 5350')).toBeVisible();
          await expect(this.page.locator('#skip-main-content iframe').contentFrame().getByRole('heading', { name: 'Contact Us by Email' })).toBeVisible();
          await expect(this.page.locator('#skip-main-content iframe').contentFrame().getByText('If you are under 18, please')).toBeVisible();
          await this.page.goBack();    
          console.log(`${click.FooterTextLink} Click successfully`);
        }catch(error){
          console.log(`${error} Footer is not Visible`)
        }
      }
      if(click.FooterPopLink){
        await this.page.getByRole('link', { name: click.FooterPopLink }).click();
        const page1Promise = this.page.waitForEvent('popup');
        (await page1Promise).close();
        console.log(`${click.FooterPopLink} Click successfully`)
      }
    }
  }

  async SearchTesting (){
    await this.page.goto('https://www.kellanovaus.com/us/en/home.html');
    const button = this.page.getByRole('button', { name: 'Accept Cookies' });
    if(await button.isVisible()){
     await this.page.getByRole('button', { name: 'Accept Cookies' }).click();
    }
    await this.page.getByRole('button', { name: 'Search' }).click();
    await this.page.getByPlaceholder('Type Here....').click();
    await this.page.getByPlaceholder('Type Here....').fill('EGGO PANCAKES BUTTERM');
    await this.page.getByRole('button', { name: 'Search', exact: true }).click();
    await this.page.waitForTimeout(4000);
    if(await this.page.getByRole('heading', { name: 'No results for "EGGO PANCAKES' }).isVisible({ timeout: 40000 })){
      await expect(this.page.getByRole('heading', { name: 'Search Results' })).toBeVisible();
      console.log('Search element is not visible');
      await this.page.goBack();
    }else{  
      await expect(this.page.getByRole('heading', { name: 'Search Results' })).toBeVisible();
      await expect(this.page.getByRole('heading', { name: 'Results for "EGGO PANCAKES' })).toBeVisible();
      await this.page.getByRole('link', { name: 'EGGO PANCAKES BUTTERMILK' }).click();
      await expect(this.page.getByRole('img', { name: 'Kellogg\'s® Eggo® Buttermilk' })).toBeVisible();
      await expect(this.page.getByRole('heading', { name: 'Kellogg\'s® Eggo® Buttermilk' })).toBeVisible();
      await this.page.goBack();
    }
  }

  async HeaderWhereToByLinks (HeaderWhereToBuy: any, testpage: any, whereToBuySoldByInputData:string[], whereToBuyTellMeAboutInputData:string[], whereToBuyRegionInputData:string[]){
    await this.page.goto('https://www.kellanova.ca/en_CA/home.html');
    await testpage.acceptCookies();
    await this.page.getByRole('navigation').getByRole('link', { name: 'Where to Buy' }).click();
    for(const click of HeaderWhereToBuy){
      await this.page.getByRole('link', { name: click.HeaderLinks }).click();
      await this.page.waitForTimeout(4000);
      await this.page.waitForLoadState('load');
      for( const click of whereToBuySoldByInputData){
        await this.page.getByRole('button', { name: 'Sold By' }).click();
        await this.page.getByRole('option', { name: click }).click();
        console.log(`${click} Click successfully`)
      }
      for( const click of whereToBuyTellMeAboutInputData){
        await this.page.getByRole('button', { name: 'Tell me about' }).click();
        await this.page.getByRole('option', { name: click }).click();
        console.log(`${click} Click successfully`)
      }
      for( const click of whereToBuyRegionInputData){
        await this.page.getByRole('button', { name: 'Region' }).click();
        await this.page.getByRole('option', { name: click }).click();
        console.log(`${click} Click successfully`)
      }
      if(click.HeaderLinks === 'Portable Snacks'){
        await this.page.locator('li').filter({ hasText: 'Nutri-Grain* Blueberry Bars (' }).getByRole('button').nth(1).click();
        await this.page.locator('#ProductTitle').click();
        await this.page.locator('#PopupBox').getByText('(4.6) Stars').click();
        await this.page.getByRole('button', { name: 'Show More' }).click();
        await this.page.getByText('Nutri-Grain Blueberry Cereal').click();
        await this.page.getByRole('button', { name: 'Show Less' }).click();
        await this.page.getByRole('heading', { name: 'Pack Size:' }).click();
        await this.page.getByRole('button', { name: '295g' }).click();
        await this.page.getByRole('button', { name: 'Click to zoom in' }).click();
        await this.page.getByLabel('close', { exact: true }).click();
      }
      // if(click.HeaderLinks === 'Portable Snacks'){
      //   await this.page.locator('li').filter({ hasText: 'Nutri-Grain* Raspberry' }).locator('span').click();
      //   await this.page.getByRole('link', { name: 'Nutri-Grain* Blueberry Bars' }).click();
      //   await this.page.goto('https://www.kellanova.ca/en_CA/where-to-buy.html#/ON/en.nofrills.ca/products/~/~?dtr-selectedFilter={%22tags%22:%22PortableSnacks%22}');
      //   await this.page.getByRole('button', { name: 'Sold By' }).click();
      //   await this.page.locator('.sc-bjfHbI').click();
      //   await this.page.getByRole('button', { name: 'Sold By' }).click();
      //   await this.page.getByRole('option', { name: 'Metro Ontario' }).click();
      // }
      // await this.page.locator('li').filter({ hasText: 'Nutri-Grain* Raspberry' }).getByRole('button').click();
      // const page1Promise = this.page.waitForEvent('popup');
      // (await page1Promise).close();
      // await this.page.getByRole('button', { name: 'Region' }).click();
      // await this.page.getByRole('option', { name: 'Manitoba' }).click();
      // await this.page.getByRole('button', { name: 'Tell me about' }).click();
      // await this.page.getByRole('option', { name: 'All Products' }).click();
      // await this.page.locator('li').filter({ hasText: 'Cheez-It* Hot & Spicy' }).getByRole('button').nth(1).click();
      // await this.page.locator('#ProductTitle').click();
      // await this.page.getByRole('button', { name: 'Show More' }).click();
      // await this.page.getByText('Bring some heat to the table').click();
      // await this.page.getByRole('button', { name: 'Show Less' }).click();
      // await this.page.getByRole('heading', { name: 'Pack Size:' }).click();
      // await this.page.getByRole('button', { name: '200g' }).click();
      // await this.page.getByRole('button', { name: 'Click to zoom in' }).click();
      // await this.page.getByLabel('close', { exact: true }).click();
      await this.page.goBack();
      await this.page.goBack();
      await this.page.goto('https://www.kellanova.ca/en_CA/where-to-buy.html#/ON/any/categories/~/any');
      console.log(`${click.HeaderLinks} tested successful`)
    }
  }

  async cheezitMainpage (testpage, cheezitMainpage){
    await testpage.acceptCookies();
    for(const click of cheezitMainpage){
      if(click.MainHeaderexact){
        await expect(this.page.getByRole('img', { name: click.MainHeaderexact, exact: true })).toBeVisible();
        if(click.MainImg){
          await expect(this.page.getByRole('img', { name: click.MainImg })).toBeVisible();
        }
        console.log(`${click.MainHeaderexact} is Tested Successfull`)
      }
      if(click.MainHeader){
        await expect(this.page.getByRole('img', { name: click.MainHeader })).toBeVisible();
        if(click.MainImg){
          await expect(this.page.getByRole('img', { name: click.MainImg })).toBeVisible();
        }
        if(click.MainImgLocator){
          await expect(this.page.locator('.hero--alien-ufo-wrapper')).toBeVisible();
        }
        console.log(`${click.MainHeader} is Tested Successfull`)
      }
      if(click.MainHeaderLink){
        await expect(this.page.getByRole('heading', { name: click.MainHeaderLink  })).toBeVisible();
      }
      if(click.linkButton){
        await this.page.getByRole('link', { name: click.linkButton, exact: true }).click();
        await this.page.goBack();
        await this.page.getByRole('button', { name: click.CarouselNextButton }).click();
      }
      await this.page.getByRole('button', { name: click.CarouselNextButton }).click();
    }
    await this.page.getByLabel('menu', { exact: true }).getByRole('link', { name: 'Products' }).click();
    await this.page.getByRole('link', { name: 'Shop our site' }).click();
  }
}