import { test, Page } from '@playwright/test';
import { salesForceTestPage } from '../salesForce/salesForceTestpage';
import { LeadDetails, Password, userName } from '../salesForce/salesForcevariable'

test.describe(() => {
  test.setTimeout(800000);
  let page: Page;
  let salesForce: salesForceTestPage;

  test.beforeAll(async ({browser}) =>{
    page = await browser.newPage();

    const URL = 'https://test.salesforce.com/';
    salesForce = new salesForceTestPage(page);
    await salesForce.salesForceLoginpage(URL, userName, Password);
  });

  test('floatingsinglelead',async () => {
    await salesForce.floatingnewlead(LeadDetails)
  });
}); 
