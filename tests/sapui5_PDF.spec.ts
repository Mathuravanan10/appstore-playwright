import { test, Page } from '@playwright/test';
import { pdfNumber, userName, userPassword } from './sapui5variable';


test.describe(() => {
    test.setTimeout(800000);
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
        for(const click of pdfNumber){
            console.log(click, 'ppp')
            await page.goto(`https://me.sap.com/notes/${click}`);
            await page.waitForTimeout(10000);
            const page1Promise = page.waitForEvent('popup');
            await page.getByRole('button', { name: 'PDF Version' }).click();
            await page.waitForTimeout(4000);
            const page1 = await page1Promise;
            await page1.waitForLoadState('domcontentloaded');
            await page.waitForTimeout(8000);
            await page1.pdf({ path: `pdf/${click}F.pdf`, format: 'A4' });
            await page1.close();
            await page.waitForTimeout(6000);
        }
    });
}); 
