import { expect, Page } from "@playwright/test";

export class salesForceTestPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async salesForceLoginpage(URL: string,userName: string, Password: string) {
    await this.page.goto(URL);
    await this.page.getByLabel('Username').click();
    await this.page.getByLabel('Username').fill(userName);
    await this.page.waitForTimeout(3000);
    await this.page.getByLabel('Password').click();
    await this.page.getByLabel('Password').fill(Password);
    await this.page.getByRole('button', { name: 'Log In to Sandbox' }).click();  
    await this.page.waitForTimeout(10000);
    await this.page.getByRole('button', { name: 'App Launcher' }).click();
    await this.page.getByRole('option', { name: 'Sales', exact: true }).click();
    await this.page.waitForTimeout(10000);
    await this.page.getByRole('link', { name: 'Leads', exact: true }).click();
    await this.page.waitForTimeout(8000);
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

  async newLead (LeadDetails: any){
    // demo account newlead
    const {Salutation, lastName, company, phone, email, product, quantity, status} = LeadDetails;
    await this.page.getByRole('button', { name: 'New' }).click();
    await this.page.waitForTimeout(6000);
    await this.page.getByRole('combobox', { name: 'Salutation' }).click();
    await this.page.getByRole('option', { name: Salutation }).locator('span').nth(1).click();
    await this.page.waitForTimeout(3000);
    await this.page.getByPlaceholder('Last Name').click();
    await this.page.getByPlaceholder('Last Name').fill(lastName);
    await this.page.waitForTimeout(3000);
    await this.page.getByRole('combobox', { name: 'Lead Status' }).click();
    await this.page.getByRole('option', { name: status }).locator('span').nth(1).click();
    await this.page.waitForTimeout(3000);
    await this.page.getByRole('option', { name: product }).click();
    await this.page.waitForTimeout(2000);
    await this.page.getByLabel('*Product').getByRole('button', { name: 'Move to Chosen Move selection' }).click();
    await this.page.waitForTimeout(3000);
    await this.page.getByRole('option', { name: quantity }).click();
    await this.page.waitForTimeout(2000);
    await this.page.getByLabel('Quantity').getByRole('button', { name: 'Move to Chosen Move selection' }).click();
    await this.page.waitForTimeout(3000);
    await this.page.getByRole('textbox', { name: 'Phone' }).click();
    await this.page.getByRole('textbox', { name: 'Phone' }).fill(phone);
    await this.page.waitForTimeout(3000);
    await this.page.getByRole('textbox', { name: 'Email' }).click();
    await this.page.getByRole('textbox', { name: 'Email' }).fill(email);
    await this.page.waitForTimeout(3000);
    await this.page.getByLabel('*Company').click();
    await this.page.getByLabel('*Company').fill(company);
    await this.page.waitForTimeout(4000);
    // await this.page.getByRole('button', { name: 'Cancel and close' }).click();
    await this.page.getByRole('button', { name: 'Save', exact: true }).click();
    await this.page.waitForTimeout(3000);
    console.log(`**gbStart**salesforce_newlead**splitKeyValue**SalesForce NewLead ${lastName} is created successfully**gbEnd**`);
    await this.page.waitForTimeout(2000);

  }

  async opportunities(LeadDetails: any, pdfName: string){
    // demo account opportunities
    const {email, lastName, firstName} = LeadDetails;
    await this.page.getByPlaceholder('Search this list...').click();
    await this.page.getByPlaceholder('Search this list...').fill(email);
    await this.page.getByPlaceholder('Search this list...').press('Enter');
    await this.page.waitForTimeout(6000);
    const seacrh = this.page.getByRole('heading', { name: 'Nothing to see here' });
    if(await seacrh.isVisible()){
      console.log('Nothing to see here please give the crt email id');
      console.log(`**gbStart**salesforce_newlead_PDF**splitKeyValue**Nothing to see here please give the correct email id.**gbEnd**`);
      await this.page.waitForTimeout(2000);
    }else{
      if(firstName.startsWith('$') || firstName === ''){
        await this.page.getByRole('link', { name: `${lastName}` }).first().click();
        await this.page.waitForTimeout(4000);
      }else{
        await this.page.getByRole('link', { name: `${firstName} ${lastName}` }).first().click();
        await this.page.waitForTimeout(4000);
      }
      await this.page.getByRole('tab', { name: 'Details' }).click();
      const qualifiedText = await this.page.locator('lightning-formatted-text[data-output-element-id="output-field"]').nth(3).textContent();
      console.log(qualifiedText, 'ppp');
      if(qualifiedText === 'Open' || qualifiedText === 'Unqualified'){
        await this.page.waitForTimeout(3000);
        const editlead = this.page.getByRole('button', { name: 'Edit Lead Status' });
        await editlead.click();
        await this.page.waitForTimeout(3000);
        await this.page.getByRole('combobox', { name: 'Lead Status' }).click();
        await this.page.waitForTimeout(3000);
        const statusLead = this.page.locator('lightning-base-combobox-item[data-value="Contacted"]');
        const isVisible = await statusLead.isVisible();
        if (isVisible) {
          await statusLead.click();
        } else {
          console.log('Click Element not found!');
        }
        const commit = this.page.getByLabel('*Comments');
        const commitIsvisible = await commit.isVisible();
        if(commitIsvisible){
          await commit.click();
          await commit.fill('yes');
          await this.page.waitForTimeout(2000);
        }else{
          console.log('Commit input not found!');
        }
        await this.page.getByRole('button', { name: 'Save' }).click();
        await this.page.waitForTimeout(4000);
        await this.page.getByRole('button', { name: 'Edit Lead Status' }).click();
        await this.page.getByRole('combobox', { name: 'Lead Status' }).click();
        await this.page.waitForTimeout(2000);
        const opation = this.page.getByRole('option', { name: 'Qualified', exact: true }).locator('span').nth(1);
        await opation.click();
        await this.page.getByRole('button', { name: 'Save' }).click();
        await this.page.waitForTimeout(6000);
      } else if(qualifiedText === 'Contacted'){
        await this.page.waitForTimeout(3000);
        await this.page.getByRole('button', { name: 'Edit Lead Status' }).click();
        await this.page.getByRole('combobox', { name: 'Lead Status' }).click();
        await this.page.waitForTimeout(2000);
        const opation = this.page.getByRole('option', { name: 'Qualified', exact: true }).locator('span').nth(1);
        await opation.click();
        await this.page.getByRole('button', { name: 'Save' }).click();
        await this.page.waitForTimeout(6000);
      }
      await this.page.waitForTimeout(10000);
      await this.page.getByRole('link', { name: 'Opportunities' }).click();
      await this.page.waitForTimeout(3000);
      await this.page.reload();
      await this.page.waitForTimeout(3000);
      await this.page.getByRole('button', { name: 'Select a List View:' }).click();
      await this.page.getByRole('option', { name: 'All Opportunities' }).click();
      await this.page.waitForTimeout(2000);
      await this.page.getByPlaceholder('Search this list...').click();
      await this.page.getByPlaceholder('Search this list...').fill(email);
      await this.page.getByPlaceholder('Search this list...').press('Enter');
      await this.page.waitForTimeout(4000);
      const seacrhs = this.page.getByRole('heading', { name: 'Nothing to see here' });
      if(await seacrhs.isVisible()){
        console.log('Nothing to see here please give the correct  email id');
        console.log(`**gbStart**salesforce_newlead_PDF**splitKeyValue**Nothing to see here please give the correct email id.**gbEnd**`);
        await this.page.waitForTimeout(2000);
      }else{
        await this.page.waitForTimeout(4000);
        const need = this.page.getByText('Needs Analysis').first();
        if(await need.isVisible()){
          if(firstName.startsWith('$') || firstName === ''){
            await this.page.getByRole('rowheader', { name: `${lastName} Edit` }).getByRole('link').click();
            await this.page.waitForTimeout(6000);
          }else{
            try {
              const name = this.page.getByRole('rowheader', { name: `${firstName}${lastName} Edit` }).getByRole('link');
              await name.waitFor({ state: 'visible', timeout: 3000 });
              await name.click();
            } catch (error) {
              const fallbackName = this.page.getByRole('rowheader', { name: `${lastName} Edit` }).getByRole('link');
              await fallbackName.waitFor({ state: 'visible', timeout: 3000 });
              await fallbackName.click();
            }
            await this.page.waitForTimeout(6000);
          }
          await this.page.getByRole('button', { name: 'Show actions for this object' }).click();
          await this.page.waitForTimeout(4000);
          await this.page.getByRole('menuitem', { name: 'New Quote' }).click();
          await this.page.waitForTimeout(4000);
          await this.page.getByLabel('*Quote Name').click();
          await this.page.getByLabel('*Quote Name').fill(pdfName);
          await this.page.waitForTimeout(4000);
          await this.page.getByRole('button', { name: 'Save' }).click();
          await this.page.waitForTimeout(4000);
          await this.page.getByRole('link', { name: pdfName }).first().click();
          await this.page.getByRole('button', { name: 'Create PDF' }).click();
          await this.page.waitForTimeout(4000);
          await this.page.getByRole('heading', { name: 'PDF Preview' }).click();
          await this.page.getByRole('button', { name: 'Save to Quote' }).click();
          await this.page.waitForTimeout(4000);
          // await this.page.getByRole('button', { name: 'Cancel and close' }).click();
          const listItem = this.page.locator('li.forceContentVirtualRelatedListStencil').first();
          const fileName = (await listItem.textContent())?.trim() || 'No file name found';
          await this.page.waitForTimeout(4000);
          console.log(`File Name: ${fileName.trim()}`); 
          console.log(`**gbStart**salesforce_newlead_PDF**splitKeyValue**SalesForce NewLead ${lastName} is PDF created successfully**gbEnd**`);
          await this.page.waitForTimeout(2000);
        }else{
          await this.page.waitForTimeout(4000);
          if(firstName.startsWith('$') || firstName === ''){
            await this.page.getByRole('rowheader', { name: `${lastName} Edit` }).getByRole('link').click();
            await this.page.waitForTimeout(6000);
          }else{
            try {
              const name = this.page.getByRole('rowheader', { name: `${firstName}${lastName} Edit` }).getByRole('link');
              await name.waitFor({ state: 'visible', timeout: 3000 });
              await name.click();
            } catch (error) {
              const fallbackName = this.page.getByRole('rowheader', { name: `${lastName} Edit` }).getByRole('link');
              await fallbackName.waitFor({ state: 'visible', timeout: 3000 });
              await fallbackName.click();
            } 
            await this.page.waitForTimeout(6000);
          }
          await this.page.getByRole('button', { name: 'Edit Stage' }).click();
          await this.page.waitForTimeout(4000);
          await this.page.getByRole('combobox', { name: 'Stage' }).click();
          await this.page.waitForTimeout(4000);
          const status = this.page.locator('lightning-base-combobox-item[data-value="Needs Analysis"]');
          await status.click();
          await this.page.waitForTimeout(4000);
          const commits = this.page.getByLabel('*Comments');
          const commitIsvisibles = await commits.isVisible();
          if(commitIsvisibles){
            await commits.click();
            await commits.fill('yes');
            await this.page.waitForTimeout(2000);
          }else{
            console.log('Commit input not found!');
          }
          await this.page.getByRole('button', { name: 'Save' }).click();
          await this.page.waitForTimeout(4000);
          await this.page.getByRole('button', { name: 'Show actions for this object' }).click();
          await this.page.waitForTimeout(4000);
          await this.page.getByRole('menuitem', { name: 'New Quote' }).click();
          await this.page.waitForTimeout(6000);
          await this.page.getByLabel('*Quote Name').click();
          await this.page.getByLabel('*Quote Name').fill(pdfName);
          await this.page.waitForTimeout(4000);
          await this.page.getByRole('button', { name: 'Save' }).click();
          await this.page.waitForTimeout(6000);
          await this.page.getByRole('link', { name: pdfName }).first().click();
          await this.page.getByRole('button', { name: 'Create PDF' }).click();
          await this.page.waitForTimeout(6000);
          await this.page.getByRole('heading', { name: 'PDF Preview' }).click();
          await this.page.getByRole('button', { name: 'Save to Quote' }).click();
          await this.page.waitForTimeout(4000);
          // await this.page.getByRole('button', { name: 'Cancel and close' }).click();
          const listItem = this.page.locator('li.forceContentVirtualRelatedListStencil').first();
          const fileName = (await listItem.textContent())?.trim() || 'No file name found';
          await this.page.waitForTimeout(4000);
          console.log(`File Name: ${fileName.trim()}`); 
          console.log(`**gbStart**salesforce_newlead_PDF**splitKeyValue**SalesForce NewLead ${lastName} is PDF created successfully**gbEnd**`);
          await this.page.waitForTimeout(2000);
        }
      }
    }
  }
  async floatingnewlead (LeadDetails: any){
    const {Salutation, lastName, company, phone, email, product, status} = LeadDetails;
    await this.page.getByRole('button', { name: 'New' }).click();
    await this.page.waitForTimeout(6000);
    await this.page.getByRole('combobox', { name: 'Salutation' }).click();
    await this.page.getByRole('option', { name: Salutation }).locator('span').nth(1).click();
    await this.page.waitForTimeout(3000);
    await this.page.getByPlaceholder('Last Name').click();
    await this.page.getByPlaceholder('Last Name').fill(lastName);
    await this.page.waitForTimeout(3000);
    await this.page.getByRole('combobox', { name: 'Product Category' }).click();
    await this.page.getByRole('option', { name: product }).locator('span').nth(1).click();
    await this.page.getByRole('combobox', { name: 'Lead Status' }).click();
    await this.page.getByRole('option', { name: status }).locator('span').nth(1).click();
    await this.page.getByLabel('*Phone').click();
    await this.page.getByLabel('*Phone').fill(phone);
    await this.page.getByLabel('*Email').click();
    await this.page.getByLabel('*Email').fill(email);
    await this.page.getByLabel('*Company').click();
    await this.page.getByLabel('*Company').fill(company);
    await this.page.waitForTimeout(4000);
    // await this.page.getByRole('button', { name: 'Cancel and close' }).click();
    await this.page.getByRole('button', { name: 'Save', exact: true }).click();
    await this.page.waitForTimeout(3000);
    console.log(`**gbStart**salesforce_newlead**splitKeyValue**SalesForce NewLead ${lastName} is created successfully**gbEnd**`);
    await this.page.waitForTimeout(2000);
  }

  async floatingopportunities(LeadDetails: any, pdfName: string){
    const {email, lastName, firstName} = LeadDetails;
    await this.page.getByRole('link', { name: 'Opportunities' }).click();
    await this.page.waitForTimeout(3000);
    await this.page.getByRole('button', { name: 'Select a List View:' }).click();
    await this.page.waitForTimeout(3000);
    await this.page.getByRole('option', { name: 'All Opportunities' }).click();
    await this.page.waitForTimeout(4000);
    await this.page.getByPlaceholder('Search this list...').click();
    await this.page.getByPlaceholder('Search this list...').fill(firstName);
    await this.page.getByPlaceholder('Search this list...').press('Enter');
    await this.page.waitForTimeout(4000);
    const seacrhs = this.page.getByRole('heading', { name: 'Nothing to see here' });
    if(await seacrhs.isVisible()){
      console.log('Nothing to see here please give the correct  email id');
      console.log(`**gbStart**salesforce_newlead_PDF**splitKeyValue**Nothing to see here your account is not Opportunities there.please give the correct account id.**gbEnd**`);
      await this.page.waitForTimeout(2000);
    }else{
      await this.page.waitForTimeout(4000);
      const need = this.page.getByText('Qualification').first();
      if(await need.isVisible()){
        if(firstName.startsWith('$') || firstName === ''){
          await this.page.getByRole('rowheader', { name: `${lastName} Edit` }).getByRole('link').click();
          await this.page.waitForTimeout(6000);
        }else{
          try {
            const name = this.page.getByRole('rowheader', { name: `${firstName}${lastName} Edit` }).getByRole('link');
            await name.waitFor({ state: 'visible', timeout: 3000 });
            await name.click();
          } catch (error) {
            const fallbackName = this.page.getByRole('rowheader', { name: `${lastName} Edit` }).getByRole('link');
            await fallbackName.waitFor({ state: 'visible', timeout: 3000 });
            await fallbackName.click();
          }
          await this.page.waitForTimeout(6000);
        }
        await this.page.getByRole('button', { name: 'Edit Stage' }).click();
        await this.page.waitForTimeout(4000);
        await this.page.getByRole('combobox', { name: 'Stage' }).click();
        await this.page.waitForTimeout(4000);
        const status = this.page.locator('lightning-base-combobox-item[data-value="Needs Analysis"]');
        await status.click();
        await this.page.waitForTimeout(4000);
        const commits = this.page.getByLabel('*Comments');
        const commitIsvisibles = await commits.isVisible();
        if(commitIsvisibles){
          await commits.click();
          await commits.fill('yes');
          await this.page.waitForTimeout(2000);
        }else{
          console.log('Commit input not found!');
        }
        await this.page.getByRole('button', { name: 'Save' }).click();
        await this.page.waitForTimeout(4000);
        await this.page.getByRole('button', { name: 'Show actions for this object' }).click();
        await this.page.waitForTimeout(4000);
        await this.page.getByRole('menuitem', { name: 'New Quote' }).click();
        await this.page.waitForTimeout(4000);
        await this.page.getByLabel('*Quote Name').click();
        await this.page.getByLabel('*Quote Name').fill(pdfName);
        await this.page.waitForTimeout(4000);
        await this.page.getByRole('button', { name: 'Save' }).click();
        await this.page.waitForTimeout(4000);
        console.log(`**gbStart**salesforce_newlead_PDF**splitKeyValue**Your Quotes create successfully.Url:${this.page.url()}**gbEnd**`);
        await this.page.getByRole('link', { name: pdfName }).first().click();
        await this.page.waitForTimeout(4000);
        await this.page.getByRole('button', { name: 'Show more actions' }).click();
        await this.page.waitForTimeout(4000);
        await this.page.getByRole('menuitem', { name: 'Generate quote' }).click();
        await this.page.waitForTimeout(4000);
        // await this.page.getByRole('button', { name: 'Create PDF' }).click();
        // await this.page.waitForTimeout(4000);
        // await this.page.getByRole('heading', { name: 'PDF Preview' }).click();
        // await this.page.getByRole('button', { name: 'Save to Quote' }).click();
        // await this.page.waitForTimeout(4000);
        // await this.page.getByRole('button', { name: 'Cancel and close' }).click();
        // const listItem = this.page.locator('li.forceContentVirtualRelatedListStencil').first();
        // const fileName = (await listItem.textContent())?.trim() || 'No file name found';
        // await this.page.waitForTimeout(4000);
        // console.log(`File Name: ${fileName.trim()}`); 
        // console.log(`**gbStart**salesforce_newlead_PDF**splitKeyValue**SalesForce NewLead ${fileName.trim()} is PDF created successfully**gbEnd**`);
        console.log(`**gbStart**salesforce_newlead_PDF**splitKeyValue**PDF created Url:${this.page.url()}**gbEnd**`);
        await this.page.waitForTimeout(2000);
      }else{
        console.log(`**gbStart**salesforce_newlead_PDF**splitKeyValue**${firstName}${lastName} account is not Qualification.**gbEnd**`);
        expect(this.page.getByText('Qualification').first()).toBeVisible();
        await this.page.waitForTimeout(2000);
      }
    }
  }
}