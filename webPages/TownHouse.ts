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

  async SearchTesting (searchpage, testpage){
    // await this.page.goto('https://www.kellanovaus.com/us/en/home.html');
    await testpage.acceptCookies();
    for(const click of searchpage){
      await this.page.getByRole('button', { name: 'Search' }).click();
      await this.page.getByPlaceholder('Type Here…').click();
      await this.page.getByPlaceholder('Type Here…').fill(click.searchName);
      await this.page.getByRole('button', { name: 'Search', exact: true }).click();
      await this.page.waitForTimeout(4000);
      if(await this.page.getByRole('heading', { name: click.searchNoData }).isVisible({ timeout: 40000 })){
        await expect(this.page.getByRole('heading', { name: click.expectSearch })).toBeVisible();
        console.log('Search element is not visible');
        await this.page.goBack();
      }else{  
        if(click.expectSearch){
        await expect(this.page.getByRole('heading', { name: click.expectSearch })).toBeVisible();
        }
        if(click.searchHeading){
        await expect(this.page.getByRole('heading', { name: click.searchHeading })).toBeVisible();
        }
        if(click.searchLink){
        await this.page.getByRole('link', { name: click.searchLink }).click();
        }
        if(click.searchiImg){
        await expect(this.page.getByRole('img', { name: click.searchiImg })).toBeVisible();
        }
        await this.page.goBack();
      }
    }
    await this.page.goBack();
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

  async cheezitMainpage (testpage, cheezitMainpage, cheezitDropdown, cheezitDropdownShop){
    await testpage.acceptCookies();
    for(const click of cheezitMainpage){
      if(click.MainHeaderexact){
        await expect(this.page.getByRole('img', { name: click.MainHeaderexact, exact: true })).toBeVisible();
        if(click.MainImg){
          await expect(this.page.getByRole('img', { name: click.MainImg })).toBeVisible();
        }
        console.log(`${click.MainHeaderexact} is Tested Successfull`);
      }
      if(click.MainHeader){
        await expect(this.page.getByRole('img', { name: click.MainHeader })).toBeVisible();
        if(click.MainImg){
          await expect(this.page.getByRole('img', { name: click.MainImg })).toBeVisible();
        }
        if(click.MainImgLocator){
          await expect(this.page.locator('.hero--alien-ufo-wrapper')).toBeVisible();
        }
        console.log(`${click.MainHeader} is Tested Successfull`);
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
    for (const click of cheezitDropdown) {
      const menu = this.page.getByLabel('menu', { exact: true });
      await menu.hover({ force: true });
      const dropdownItem = this.page.getByRole('link', { name: click, exact: true });
      await dropdownItem.waitFor({ state: 'visible' });
      await dropdownItem.click();
      await this.page.waitForLoadState('domcontentloaded');
      await this.page.goBack();
      console.log(`${click} is tested successfully`);
    }
    for(const click of cheezitDropdownShop){
      await this.page.getByLabel('menu', { exact: true }).click();
      if(click === 'SHOP ALL'){
       await this.page.getByRole('link', { name: click, exact: true }).click();
      }else{
       await this.page.getByRole('link', { name: click }).click();
      }
      await this.page.waitForTimeout(1000);
      await this.page.goBack();
      console.log(`${click} is tested successfully`);
    }

    await testpage.roleLink('Our Impact');
    // await this.page.getByRole('link', { name:  }).click();
    await expect(this.page.getByRole('heading', { name: 'Our Impact' })).toBeVisible();
    await expect(this.page.locator('.section--in-viewport > .content_wrapper').first()).toBeVisible();
    await expect(this.page.getByText('At Cheez-It®, we’re dedicated')).toBeVisible();
    await testpage.roleLink('Cheez-it grooves, orginal,' );
    // await this.page.getByRole('link', { name: 'Cheez-it grooves, orginal,' }).click();
    const page1Promise = this.page.waitForEvent('popup');
    await this.page.waitForTimeout(4000);
    (await page1Promise).close();
    await testpage.roleLink('Accurate Box Company');
    // await this.page.getByRole('link', { name: 'Accurate Box Company' }).click();
    await this.page.getByLabel('Close the mobile video player').click();
    await this.page.goBack();
    await this.page.getByLabel('menu', { exact: true }).getByRole('link', { name: 'Recipes' }).click();
    await this.page.getByRole('heading', { name: 'Recipes' }).locator('span').click();
    await this.page.waitForTimeout(2000);
    await this.page.goBack();
    await this.page.getByLabel('menu', { exact: true }).getByRole('link', { name: 'Cheez-It® Bowl' }).click();
    await expect(this.page.getByRole('img', { name: 'Cheez-It Citrus Bowl Logo' })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Congrats to the 2024 Cheez-It' })).toBeVisible();
    await expect(this.page.getByText('As the cheeziest sponsor of')).toBeVisible();
    await this.page.getByRole('link', { name: 'Shop Cheez-It® Football Swag' }).click();
    await this.page.waitForTimeout(2000);
    await this.page.goBack();
    await this.page.getByRole('link', { name: 'Cheez-It Citrus Bowl Trophies' }).click();
    const page2Promise = this.page.waitForEvent('popup');
    await this.page.waitForTimeout(4000);
    (await page2Promise).close();
    await this.page.goBack();
    await this.page.getByRole('link', { name: 'En español' }).click();
    await this.page.getByRole('link', { name: 'In English' }).click();
    // await this.page.getByRole('link', { name: ' Where to buy' }).click();
    // await this.page.waitForTimeout(8000);
    // await expect(this.page.getByLabel('Shop Cheez-It® Original Snack')).toBeVisible();
    // await expect(this.page.locator('.ps-product-image > div > img')).toBeVisible();
    // await this.page.getByLabel('Close the shop now shopping').click();
    await this.page.getByRole('link', { name: ' Promotions' }).click();
    await expect(this.page.locator('.section--in-viewport > .content_wrapper')).toBeVisible();
    await this.page.goBack();
    await this.page.getByLabel('Sign In / Sign Up / My Account').click();
    await expect(this.page.getByText('Customer Login')).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'New Customers' })).toBeVisible();
    await this.page.goBack();
    await this.page.getByRole('link', { name: 'Country Selector' }).click();
    await expect(this.page.getByRole('heading', { name: 'Country Selector' })).toBeVisible();
    await this.page.goBack();

    await this.page.waitForTimeout(4000);
    await this.page.getByRole('link', { name: 'SHOP ALL', exact: true }).click();
    await this.page.getByRole('button', { name: 'QuickView Cheez-It® Smoked' }).click();
    await this.page.getByRole('button', { name: 'QuickView Cheez-It® Smoked' }).click();
    await this.page.waitForTimeout(6000);
    try{
      await expect(this.page.locator('#modal-content-83 iframe').contentFrame().getByText('Cheez-It® Smoked Bundle', { exact: true })).toBeVisible();
      await expect(this.page.locator('#modal-content-83 iframe').contentFrame().getByText('For the snacking adventurer,')).toBeVisible();
      await expect(this.page.locator('#modal-content-83 iframe').contentFrame().getByText('$')).toBeVisible();
      await this.page.locator('#modal-content-83 iframe').contentFrame().getByLabel('Quantity Increment').click();
      await this.page.locator('#modal-content-83 iframe').contentFrame().getByLabel('Quantity Increment').click();
      await this.page.locator('#modal-content-83 iframe').contentFrame().getByLabel('Quantity Decrement').click();
      await this.page.locator('#modal-content-83 iframe').contentFrame().getByLabel('Quantity Decrement').click();
    }catch(error){
      console.log(`${error} Shop card is not Visible`)
    }
    // await page.getByRole('dialog').click();
    // await page.locator('#modal-content-83 iframe').contentFrame().getByText('Cheez-It® Smoked Bundle For').click();
    await this.page.getByRole('button', { name: '' }).click();
    await this.page.locator('[id="\\31 "]').getByRole('button', { name: 'Add to Cart' }).click();
    await expect(this.page.getByRole('img', { name: 'Cheez-It® Smoked Bundle' })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Cheez-It® Smoked Bundle' }).locator('span')).toBeVisible();
    await expect(this.page.getByText('For the snacking adventurer,')).toBeVisible();
    await this.page.getByLabel('Add to Cart').click();
    await this.page.goBack();
    await this.page.locator('[id="\\32 "]').getByRole('button', { name: 'Add to Cart' }).click();
    await this.page.locator('div').filter({ hasText: /^Your Cart$/ }).click();
    await expect(this.page.getByText('Your order is eligible for')).toBeVisible();
    await expect(this.page.getByTitle('ILTHY® for Cheez-It™ Club Football', { exact: true })).toBeVisible();
    await expect(this.page.getByRole('link', { name: ' My Cart 1 items' })).toBeVisible();
    await this.page.getByText('Summary').click();
    await this.page.getByRole('button', { name: 'Checkout' }).click();
    await this.page.getByText('Checkout', { exact: true }).click();
    await this.page.getByRole('textbox', { name: '* Email Address Email Address' }).click();
    await this.page.getByRole('textbox', { name: '* Email Address Email Address' }).fill('mathura');
    await this.page.getByText('Shipping Address').click();
    await this.page.getByRole('textbox', { name: '* First Name' }).click();
    await this.page.getByRole('textbox', { name: '* Last Name' }).click();
    await this.page.getByRole('textbox', { name: '* First Name' }).click();
    await this.page.getByRole('textbox', { name: '* First Name' }).fill('mm');
    await this.page.getByPlaceholder('Company (Optional)').click();
    await this.page.getByPlaceholder('Company (Optional)').fill('gg');
    await this.page.getByPlaceholder('Street Address: Line 1').click();
    await this.page.getByPlaceholder('Street Address: Line 1').fill('jj');
    await this.page.locator('#co-shipping-form').click();
    await this.page.locator('select[name="region_id"]').selectOption('18');
    await this.page.getByPlaceholder('Zip/Postal Code').click();
    await this.page.getByPlaceholder('Zip/Postal Code').fill('88');
    await this.page.getByPlaceholder('Phone Number').click();
    await this.page.getByPlaceholder('Phone Number').fill('6667889962');
    await this.page.getByText('Shipping Methods').click();
    await this.page.locator('span').filter({ hasText: 'Order Summary' }).click();
    await this.page.getByRole('dialog').click();
    await this.page.getByRole('link', { name: '< Back to Shopping' }).click();
    
    await this.page.waitForTimeout(4000);
    await this.page.getByRole('link',{ name: ' My Cart' }).click();
    const items = this.page.locator('#maincontent').getByText('You have no items in your');
    if(await items.isVisible()){
      await this.page.goBack();
    }else{
      const remove = this.page.getByRole('link', { name: 'Remove' });
      if(await remove.isVisible()){
        await remove.click();
        await this.page.getByRole('button', { name: 'OK', exact: true }).click();
        await expect(this.page.getByText('You have no items in your')).toBeVisible();
        await this.page.getByRole('button', { name: 'Close' }).click();
      }else{
        console.log(`remove button is not visible`)
      }
    }
  }

  async cheezitProductPage(cheezitProductPage, testpage){
    await testpage.acceptCookies();
    for (const click of cheezitProductPage){
      const close = this.page.getByLabel('Close Modal');
      if(await close.isVisible()){
        await close.click();
      }
      if(click.mainpageHeader){
       await expect(this.page.getByRole('heading', { name: click.mainpageHeader})).toBeVisible();
      }
      if(click.mainpageClick){
        await testpage.roleLink(click.mainpageClick);
        await expect(this.page.getByRole('img', { name: click.cardImg })).toBeVisible();
        await expect(this.page.getByRole('heading', { name: click.cardMainHeader })).toBeVisible();
      }
      if(click.cardClick){
        if(click.cardClick === 'Cheez-It® Snack Mix'){
          await testpage.roleLinkExact(click.cardClick);
        }else{
          await testpage.roleLink(click.cardClick);
        }
        try{
          await expect(this.page.locator('section').filter({ hasText: click.cardSectionImg }).locator('img').first()).toBeVisible();
          await expect(this.page.getByRole('heading', { name: click.cardProductHeader })).toBeVisible();
          await expect(this.page.getByText(click.cardProductText)).toBeVisible();
          if(click.cardProductFirstHeader){
            await expect(this.page.getByRole('heading', { name:  click.cardProductFirstHeader})).toBeVisible();
            await expect(this.page.getByRole('heading', { name:  click.cardProductSecoundHeader})).toBeVisible();
            await expect(this.page.getByText(click.cardProductFirstText)).toBeVisible();
            await expect(this.page.getByText(click.cardProductSecoundText)).toBeVisible();
          }
        }catch(error){
          console.log(`${error} cardpage is not Visible`);
        }
      }
      if(click.cardProductLink){   
        await testpage.whereToBuyLocatorLink(click.cardProductLink)
        await this.page.waitForTimeout(20000);
        await this.page.waitForLoadState('load');
        await this.page.waitForLoadState('domcontentloaded');
        try{
          await expect(this.page.getByLabel(click.cardProductWhereToBuyFirstImg).locator('img').first()).toBeVisible();
          await expect(this.page.getByLabel(click.cardProductWhereToBuySecoundImg).locator('img').nth(1)).toBeVisible();
          await expect(this.page.getByLabel(click.cardProductLabel)).toBeVisible();
          await this.page.getByLabel(click.cardProductClose).click();
        }catch(error){
          console.log(`${error} cardpage is not Visible`)
        }
      }
      if(click.cardProductViewButton){
        await testpage.roleLink(click.cardProductViewButton);
        const page1Promise = this.page.waitForEvent('popup');
        // (await page1Promise).getByRole('button', { name: 'OK', exact: true }).click();
        (await page1Promise).close();
        await this.page.goBack();
      }else{
        await this.page.goBack();
      }
      if(click.Goback){
        await this.page.goBack();
      }
     }
  };

  async cheezitFooter(cheezitFooter,testpage){
    await testpage.acceptCookies();
    const close = this.page.getByLabel('Close Modal');
    await this.page.waitForTimeout(5000);
    if(await close.isVisible()){
      await close.click();
    }
    for (const click of cheezitFooter){
      if(click.footerLinkExact){
        await testpage.roleLinkExact(click.footerLinkExact);
        if(click.footerLinkExact === 'Shop All'){
          await this.page.waitForTimeout(4000);
          await expect(this.page.getByRole('heading', { name: 'Welcome to Cheez-It®' })).toBeVisible();
          await expect(this.page.getByText('New Flavors & Merch Have')).toBeVisible();
          await expect(this.page.getByLabel('All Products').getByText('All Products')).toBeVisible();
          await expect(this.page.locator('#shopify-section-ci-cta div').filter({ hasText: 'WANT IT WANT IT WANT IT WANT' }).nth(1)).toBeVisible();
        }
        if(click.footerLinkExact === 'Where To Buy'){
          await this.page.waitForTimeout(6000);
          const close = this.page.getByLabel('Close the shop now shopping');
          if(await close.isVisible()){
            await close.click()
          }
        }
        if(click.footerLinkExact === 'Promotions'){
          await this.page.waitForTimeout(6000);
          await expect(this.page.locator('.section--in-viewport > .content_wrapper')).toBeVisible();
        }
      }
      if(click.footerLink){
        await testpage.roleLink(click.footerLink);
        if(click.footerLink === 'Videos'){
          await this.page.waitForTimeout(2000);
          await expect(this.page.locator('section').filter({ hasText: 'Videos' }).locator('div').first()).toBeVisible();
        }
        if(click.footerLink === 'FAQ'){
          await this.page.waitForTimeout(2000);
          await expect(this.page.locator('#container-ab915426f7 div').filter({ hasText: 'Frequently Asked Questions' }).nth(2)).toBeVisible();
        }
        if(click.footerLink === 'Contact Us'){
          await this.page.waitForTimeout(2000);
          await expect(this.page.getByRole('heading', { name: click.footerLink })).toBeVisible();
        }
        if(click.footerLink === 'Site Map'){
          await this.page.waitForTimeout(2000);
          await expect(this.page.getByRole('heading', { name: 'Cheez-It® Site Map' })).toBeVisible();
        }
        if(click.footerLink === 'Shipping & Returns'){
          await expect(this.page.getByRole('heading', { name: 'Shipping & Returns' })).toBeVisible();
          await expect(this.page.getByText('Do you offer free shipping?')).toBeVisible();
        }
      }
      if(click.footerLabelLink){
        const menue = this.page.getByLabel('footer main navigation').getByRole('link', { name: click.footerLabelLink });
        await this.page.waitForTimeout(4000); 
        if(await menue.isVisible()){
         await menue.click();
         console.log(`${click.footerLabelLink} Click Tested Successfully`);
        }else{
          console.log(`${click.footerLabelLink} is not visible`);
        }
        if(click.footerLabelLink === 'Recipes'){
          await this.page.waitForTimeout(2000);
          await expect(this.page.getByRole('heading', { name: 'Recipes' }).locator('span')).toBeVisible();
          await expect(this.page.locator('.section--in-viewport > .content_wrapper').first()).toBeVisible();
        }
        if(click.footerLabelLink === 'Cheez-It® Bowl'){
          await this.page.waitForTimeout(2000); 
          await this.page.getByRole('img', { name: 'Cheez-It Citrus Bowl Logo' }).click();
        }
      }
      if(click.footerLableText){
        const cookies =  this.page.getByLabel('footer secondary navigation').getByText(click.footerLableText);
        if(await cookies.isVisible()){
         await cookies.click();
        }else{
          console.log(`${cookies} is not visible`);
        }
        await this.page.getByRole('button', { name: click.button }).click();
      }
      if(click.Goback){
        await this.page.goBack();
      }  
      if(click.closeTab){
        const page2Promise = this.page.waitForEvent('popup');
        await this.page.waitForLoadState('domcontentloaded');
        (await page2Promise).close();
      } 
    }
  }

  async newone (headingpage: any){
    for (const click of headingpage){
     const menu = this.page.getByLabel('menu', { exact: true }).getByRole('link', { name: click.menuLink });
     if(await menu.isVisible()){
      await menu.click();
      }else{
        console.log(`${menu} is not visible`);
     }
    }
  }
}