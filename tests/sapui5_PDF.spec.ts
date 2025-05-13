import { test, Page } from '@playwright/test';
import { pdfNumber, userName, userPassword } from './sapui5variable';
import fs from 'fs/promises';


test.describe(() => {
    test.setTimeout(0);
    let page: Page;
    test.beforeAll(async ({browser}) =>{
        page = await browser.newPage();
        await page.goto('https://me.sap.com/app/securitynotes');
        await page.waitForTimeout(4000);
        await page.getByPlaceholder('E-Mail, ID, or Login Name').fill(userName);
        await page.getByRole('button', { name: 'Continue' }).click();
        await page.waitForTimeout(8000);
        await page.getByLabel('Password').click();
        await page.getByLabel('Password').fill(userPassword);
        await page.waitForTimeout(4000);
        await page.getByRole('button', { name: 'Sign in' }).click();
        await page.waitForTimeout(20000);
    });

    test('Sapui5_PDF',async () => {
        // const lastDownloadedFile = 'last_downloaded.txt';
        // let startIndex = 0;
        // try {
        //   const lastDownloaded = await fs.readFile(lastDownloadedFile, 'utf-8');
        //   const lastIndex = pdfNumber.indexOf(lastDownloaded.trim());
        //   if (lastIndex !== -1) {
        //     startIndex = lastIndex + 1;
        //   }
        // } catch (err) {
        //   console.log('No last download record found, starting fresh...');
        // }
        
        // for ( const click of pdfNumber) {
            console.log('Downloading:', pdfNumber);
            await page.goto(`https://me.sap.com/notes/${pdfNumber}`);
            await page.waitForTimeout(10000);
            const page1Promise = page.waitForEvent('popup');
            const pdficon = page.getByRole('button', { name: 'PDF Version' });
            await page.waitForTimeout(2000);
            if(await pdficon.isVisible()){
                await pdficon.click();
                await page.waitForTimeout(4000);
                const page1 = await page1Promise;
                await page1.waitForLoadState('domcontentloaded');
                await page.waitForTimeout(8000);     
                await page1.pdf({ path: `pdf/${pdfNumber}.pdf`, format: 'A4' });
                await page1.close();
                await page.waitForTimeout(6000);
                // await fs.writeFile(lastDownloadedFile, click);
                console.log('Downloaded and saved as last:', pdfNumber);
            // }
        }
        // await fs.unlink(lastDownloadedFile);
    });
}); 
