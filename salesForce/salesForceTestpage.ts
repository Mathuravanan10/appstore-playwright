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
      await this.page.locator('lightning-base-combobox-item[data-value="Contacted"]').click();
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
      const text = this.page.getByText(`${click.lastName} ${click.product} Edit`);
      if(await text.isVisible()){
        console.log(`**gbStart**Opportunities_Check**splitKeyValue**${click.lastName} ${click.product} create successful**gbEnd**`);
      }else{
        console.log(`**gbStart**Opportunities_Check**splitKeyValue**Opportunities Not Created**gbEnd**`);
      }
    }
  }
}