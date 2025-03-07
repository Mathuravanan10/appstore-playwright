import { Page } from "@playwright/test";

export class salesForceTestPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async salesForceLoginpage(URL: string,userName: string, Password: string) {
    await this.page.goto(URL);
    await this.page.getByLabel('Username').click();
    await this.page.getByLabel('Username').fill(userName);
    await this.page.getByLabel('Password').click();
    await this.page.getByLabel('Password').fill(Password);
    await this.page.getByRole('button', { name: 'Log In to Sandbox' }).click();  
  }

  async salesForceLeadCreate(LeadDetails: any) {
    await this.page.waitForTimeout(8000);
    for(const click of LeadDetails){
      await this.page.getByRole('button', { name: 'App Launcher' }).click();
      await this.page.getByRole('option', { name: 'Sales', exact: true }).click();
      await this.page.waitForTimeout(3000);
      await this.page.getByRole('link', { name: 'Leads' }).click();
      await this.page.waitForTimeout(3000);
      await this.page.getByRole('button', { name: 'New' }).click();
      await this.page.getByRole('combobox', { name: 'Salutation' }).click();
      await this.page.getByRole('option', { name: click.Salutation }).locator('span').nth(1).click();
      await this.page.getByPlaceholder('First Name').click();
      await this.page.getByPlaceholder('First Name').fill(click.firstName);
      await this.page.getByPlaceholder('Last Name').click();
      await this.page.getByPlaceholder('Last Name').fill(click.lastName);
      await this.page.getByLabel('*Company').click();
      await this.page.getByLabel('*Company').fill(click.company);
      await this.page.getByRole('textbox', { name: 'Phone' }).click();
      await this.page.getByRole('textbox', { name: 'Phone' }).fill(click.phone);
      await this.page.waitForTimeout(2000);
      await this.page.getByRole('textbox', { name: 'Email' }).click();
      await this.page.getByRole('textbox', { name: 'Email' }).fill(click.email);
      await this.page.waitForTimeout(2000);
      await this.page.getByRole('option', { name: click.product }).click();
      await this.page.getByRole('button', { name: 'Move to Chosen Move selection' }).click();
      await this.page.waitForTimeout(2000);
      await this.page.getByRole('combobox', { name: 'Quantity' }).click();
      await this.page.waitForTimeout(2000);
      await this.page.getByRole('option', { name: click.quantity }).locator('span').nth(1).click();
      await this.page.waitForTimeout(2000);
      await this.page.getByRole('textbox', { name: 'City' }).click();
      await this.page.getByRole('textbox', { name: 'City' }).fill(click.states);
      await this.page.waitForTimeout(2000);
      await this.page.getByText('Chosen', { exact: true }).click();
      await this.page.getByRole('button', { name: 'Save', exact: true }).click();
      await this.page.waitForTimeout(10000);
    }
  }

  async salesForceopportunities(LeadDetails: any) {
    await this.page.waitForTimeout(8000);
    for(const click of LeadDetails){
      await this.page.getByLabel('Search', { exact: true }).click();
      await this.page.getByPlaceholder('Search...').fill(`${click.firstName} ${click.lastName}`);
      await this.page.getByPlaceholder('Search...').press('Enter');
      await this.page.getByRole('heading', { name: `${click.firstName} ${click.lastName}` }).getByRole('link').click();
      await this.page.getByRole('tab', { name: 'Details' }).click();
      await this.page.getByRole('button', { name: 'Edit Lead Status' }).click();
      await this.page.getByRole('combobox', { name: 'Lead Status' }).click();
      const statusLead = this.page.locator('lightning-base-combobox-item[data-value="Contacted"]');
      const isVisible = await statusLead.isVisible();
      if (isVisible) {
        await statusLead.click();
      } else {
        console.error('Click Element not found!');
      }
      await this.page.getByRole('button', { name: 'Save' }).click();
      await this.page.waitForTimeout(2000);
      await this.page.getByRole('button', { name: 'Edit Lead Status' }).click();
      await this.page.getByRole('combobox', { name: 'Lead Status' }).click();
      const opation = this.page.getByRole('option', { name: 'Qualified', exact: true }).locator('span').nth(1);
      await opation.click();
      await this.page.getByRole('button', { name: 'Save' }).click();
      await this.page.waitForTimeout(2000);
      await this.page.getByRole('link', { name: 'Opportunities' }).click();
      await this.page.waitForTimeout(3000);
      await this.page.getByRole('button', { name: 'Select a List View:' }).click();
      await this.page.getByRole('option', { name: 'My Opportunities' }).click();
      await this.page.waitForTimeout(2000);
      await this.page.screenshot({ path: 'salesForce/salesForceImg/salesForceNewLead.png', fullPage: true });
      await this.page.waitForTimeout(2000);
      const text = this.page.getByText(`${click.lastName} ${click.product} Edit`);
      if(await text.isVisible()){
        console.log(`**gbStart**Opportunities_Check**splitKeyValue**${click.lastName} ${click.product} opportunities create successful**gbEnd**`);
      }else{
        console.log(`**gbStart**Opportunities_Check**splitKeyValue**Opportunities Not Created**gbEnd**`);
      }
    }
  }

  async salesForceExtensionLead (extensionLead: any) {
    for(const click of extensionLead){
      await this.page.getByRole('link', { name: 'Leads' }).click();
      await this.page.getByPlaceholder('Search this list...').click();
      await this.page.getByPlaceholder('Search this list...').fill(click.email);
      await this.page.getByPlaceholder('Search this list...').press('Enter');
      const nameClick =  this.page.getByText(`${click.firstName} ${click.lastName} Locked Name:`);
      await nameClick.click();
      await nameClick.click();
      await this.page.getByRole('tab', { name: 'Details' }).click();
      await this.page.getByRole('button', { name: 'Edit Lead Status' }).click();
      await this.page.getByRole('combobox', { name: 'Lead Status' }).click();
      const statusLead = this.page.locator('lightning-base-combobox-item[data-value="Contacted"]');
      const isVisible = await statusLead.isVisible();
      if (isVisible) {
        await statusLead.click();
      } else {
        console.error('Click Element not found!');
      }
      await this.page.getByRole('button', { name: 'Save' }).click();
      await this.page.waitForTimeout(2000);
      await this.page.getByRole('button', { name: 'Edit Lead Status' }).click();
      await this.page.getByRole('combobox', { name: 'Lead Status' }).click();
      const opation = this.page.getByRole('option', { name: 'Qualified', exact: true }).locator('span').nth(1);
      await opation.click();
      await this.page.getByRole('button', { name: 'Save' }).click();
      await this.page.waitForTimeout(2000);
      await this.page.getByRole('link', { name: 'Opportunities' }).click();
      await this.page.waitForTimeout(3000);
      await this.page.getByRole('button', { name: 'Select a List View:' }).click();
      await this.page.getByRole('option', { name: 'My Opportunities' }).click();
      await this.page.waitForTimeout(2000);
      await this.page.screenshot({ path: 'salesForce/salesForceImg/salesForce.png', fullPage: true });
      await this.page.waitForTimeout(2000);
      console.log(`**gbStart**Opportunities_Check**splitKeyValue**${click.firstName} ${click.lastName} opportunities create successful**gbEnd**`);
    }
  }

  async salesForceCreateNewLead (extensionLead: any) {
    // for(const click of extensionLead){
      await this.page.getByRole('button', { name: 'App Launcher' }).click();
      await this.page.getByRole('option', { name: 'Sales', exact: true }).click();
      await this.page.getByRole('link', { name: 'Leads' }).click();
      await this.page.getByRole('button', { name: 'New' }).click();
      await this.page.getByRole('combobox', { name: 'Salutation' }).click();
      await this.page.getByRole('option', { name: 'Mr.' }).locator('span').nth(1).click();
      await this.page.getByPlaceholder('First Name').click();
      await this.page.getByPlaceholder('First Name').fill('mathu');
      await this.page.getByPlaceholder('Last Name').click();
      await this.page.getByPlaceholder('Last Name').fill('nbvc');
      await this.page.getByLabel('*Company').click();
      await this.page.getByLabel('*Company').fill('bcs');
      await this.page.getByLabel('*Phone').click();
      await this.page.getByLabel('*Phone').fill('2345678909');
      await this.page.getByLabel('*Email').click();
      await this.page.getByLabel('*Email').fill('mathu@gmail.com');
      await this.page.getByRole('combobox', { name: 'Product' }).click();
      await this.page.getByRole('option', { name: 'Alum Crystals' }).locator('span').nth(1).click();
      await this.page.getByRole('combobox', { name: 'States' }).click();
      await this.page.getByRole('option', { name: 'TamilNadu' }).locator('span').nth(1).click();
      await this.page.getByRole('button', { name: 'Cancel and close' }).click();
      await this.page.getByRole('link', { name: 'Opportunities' }).click();
      await this.page.getByRole('button', { name: 'Select a List View:' }).click();
      await this.page.getByRole('option', { name: 'My Opportunities' }).click();
      await this.page.getByText('VanessaWood Edit Opportunity').click();
      await this.page.getByRole('link', { name: 'Leads' }).click();
      await this.page.getByRole('link', { name: 'Preethi', exact: true }).click();
      await this.page.getByRole('link', { name: 'Leads' }).click();
      await this.page.getByRole('link', { name: 'Caroline Howard' }).click();
    // }
  }
}