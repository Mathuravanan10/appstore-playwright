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
    
        console.log('Page Text:\n', pageText);
        await page.screenshot({ path: 'salesForce/asset1.png', fullPage: true });
        await page.waitForTimeout(2000);
        console.log(`**gbStart**salesforce_asset_url**splitKeyValue**QR Code content:${result}**gbEnd**`);
        console.log(`**gbStart**salesforce_asset_text**splitKeyValue**${pageText}**gbEnd**`);
    
      } catch (err) {
        console.error('Failed to decode QR Code:', err);
      }
    });
}); 
