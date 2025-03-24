import { test, Page } from '@playwright/test';
import { salesForceTestPage } from '../salesForce/salesForceTestpage';
import { checkLead, LeadDetails, Password, userName, pdfName } from '../salesForce/salesForcevariable'

test.describe(() => {
  test.setTimeout(800000);
  let page: Page;
  let salesForce: salesForceTestPage;

  test.beforeAll(async ({browser}) =>{
    page = await browser.newPage();

    const URL = 'https://basiscloudsolutionspvtltd--demoasset.sandbox.my.salesforce.com/?ec=301&startURL=%2Fvisualforce%2Fsession%3Furl%3Dhttps%253A%252F%252Fbasiscloudsolutionspvtltd--demoasset.sandbox.my.salesforce-setup.com%252Flightning%252Fsetup%252FObjectManager%252Fhome';
    salesForce = new salesForceTestPage(page);
    await salesForce.salesForceLoginpage(URL, userName, Password);
  });

  test('salesForce Creation',async () => {
    if(checkLead === 'existinglead'){
      await salesForce.newLead(LeadDetails);
      await salesForce.opportunities(LeadDetails,pdfName);
    }else{
      await salesForce.opportunities(LeadDetails,pdfName); 
    }
   
  });
}); 
