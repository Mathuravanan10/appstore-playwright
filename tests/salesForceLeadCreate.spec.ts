import { test, Page } from '@playwright/test';
import { salesForceTestPage } from '../salesForce/salesForceTestpage';
import { checkLead, extensionLead, LeadDetails, Password, userName } from '../salesForce/salesForcevariable';

test.describe(() => {
  test.setTimeout(800000);
  let page: Page;
  let salesForce: salesForceTestPage;

  test.beforeAll(async ({browser}) =>{
    page = await browser.newPage();

    const URL = 'https://basiscloudsolutionspvtltd--dineshdev.sandbox.my.salesforce.com/';
    salesForce = new salesForceTestPage(page);
    await salesForce.salesForceLoginpage(URL, userName, Password);
  });

  test('salesForce Creation',async () => {
    if(checkLead === 'existinglead'){
      await salesForce.salesForceExtensionLead(extensionLead);
    }else{
      await salesForce.salesForceLeadCreate(LeadDetails);
      await salesForce.salesForceopportunities(LeadDetails);    
    }
  });
}); 
