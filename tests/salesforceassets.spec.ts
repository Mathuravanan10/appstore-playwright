import { test, Page } from '@playwright/test';
import { PNG } from 'pngjs';
import jsQR from 'jsqr';
import { id, Password, userName } from '../salesForce/salesForcevariable';

async function decodeQRCodeWithJsQR(buffer: Buffer): Promise<string | null> {
  const png = PNG.sync.read(buffer);
  const code = jsQR(
    new Uint8ClampedArray(png.data),
    png.width,
    png.height
  );

  return code?.data || null;
}

test.describe(() => {
    test.setTimeout(800000);
    let page: Page;
    test.beforeAll(async ({browser}) =>{
      page = await browser.newPage();
      await page.goto('https://test.salesforce.com/');
      await page.getByLabel('Username').fill(userName);
      await page.waitForTimeout(3000);
      await page.getByLabel('Password').fill(Password);
      await page.waitForTimeout(3000);
      await page.getByRole('button', { name: 'Log In to Sandbox' }).click();
    });

    test('QRCode_scan',async () => {
      await page.waitForTimeout(8000);
      await page.goto(`https://basiscloudsolutionspvtltd--infusedev.sandbox.lightning.force.com/lightning/r/Asset/${id}/view`);
      await page.waitForTimeout(8000);
    
      const qrElement = page.locator('lightning-card img');
      const buffer = await qrElement.screenshot();
    
      try {
        const result = await decodeQRCodeWithJsQR(buffer);   
        console.log('QR Code content:', result);
        await page.goto(`${result}`);
        await page.waitForTimeout(6000);
        const pageText = await page.locator('body').innerText();
        await page.screenshot({ path: 'salesForce/asset1.png', fullPage: true });
        await page.waitForTimeout(2000);
        // 1. Remove unwanted JSON-like patterns
        const cleanedText = pageText?.replace(/({.*?})/gs, '') || '';
    
        // 2. Normalize text (remove extra newlines)
        const normalizedText = cleanedText.replace(/\n{2,}/g, '\n').trim();
      
        // 3. Smart split based on keywords
        const sections = normalizedText.split('\n').map(line => line.trim());
      
        // Helper function to find value after label
        const findValue = (label: string) => {
          const idx = sections.findIndex(line => line.toLowerCase().includes(label.toLowerCase()));
          return idx !== -1 && idx + 1 < sections.length ? sections[idx + 1] : '-';
        };
      
        const name = findValue('Customer Information');
        const email = findValue('Email');
        const phone = findValue('Phone');
        const assetId = findValue('Asset ID');
        const issueObserved = findValue('Service History');
        const caseOrigin = findValue('Case Origin');
        const caseStatus = findValue('Case SLA Status');
        const createdDate = findValue('Issue Created Date');
      
        // Now Format the final output
        const customerInfo = `
      Infuse Kitchen Services
            
      -------------------------------
      Customer Information
      -------------------------------
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Asset ID: ${assetId}
      
      -------------------------------
      Service History
      -------------------------------
      Issue Observed: ${issueObserved}
      Case Origin: ${caseOrigin}
      Case SLA Status: ${caseStatus}
      Issue Created Date: ${createdDate}
      
      -------------------------------
      Contact
      -------------------------------
      Infuse Kitchen Services
      No. 4 MaduvanKarai, 4th Street, MKN Road, Alandur, Chennai 600016
      +91 98407 55481 / 044-48586910
      Email: infuse@infuseilan.com
      
      © 2025 Infuse Kitchen Services. All rights reserved.
      `;
        console.log(`**gbStart**salesforce_asset_url**splitKeyValue**QR Code content:${result}**gbEnd**`);
        console.log(`**gbStart**salesforce_asset_text**splitKeyValue**${customerInfo}**gbEnd**`);
    
      } catch (err) {
        console.error('Failed to decode QR Code:', err);
      }
    });
}); 
