import { test, Page, expect } from '@playwright/test';
import { Development_User_Id, Dpt_Install_Number, email_id, password } from './sapUserVariable';

test.describe(() => {
    test.setTimeout(800000);
    let page: Page;
    test.beforeAll(async ({browser}) =>{
        page = await browser.newPage();
        await page.goto('https://me.sap.com/home');
        await page.getByPlaceholder('E-Mail, ID, or Login Name').fill(email_id);
        await page.getByRole('button', { name: 'Continue' }).click();
        await page.waitForTimeout(8000);
        await page.getByLabel('Password').click();
        await page.getByLabel('Password').fill(password);
        await page.getByRole('button', { name: 'Sign in' }).click();
        await page.waitForTimeout(20000);
    });

    test('Sap_Developer_Keys',async () => {
        await page.goto('https://me.sap.com/home');
        await page.waitForTimeout(6000);
        await page.getByText('Services & Support').click();
        // await page.locator('[id="__tab4-__group1-2"]').click();
        await page.waitForTimeout(4000);
        await page.getByRole('heading', { name: 'Request License Keys' }).click();
        await page.waitForTimeout(4000);
        await page.getByText('Developer & Object Keys (SSCR)').click();
        await page.waitForTimeout(4000);
        const iframe= page.frameLocator('iframe[id="shell-component---application100144251--frame"]');
        await iframe.getByRole('button', { name: "Register" }).click();
        await page.waitForTimeout(2000);
        await iframe.locator('#__xmlview3--textArea-inner').click();
        await iframe.locator('#__xmlview3--textArea-inner').fill(Development_User_Id);
        await page.waitForTimeout(2000);
        await iframe.locator('#__field2-I').click();
        await iframe.locator('#__field2-I').fill(Dpt_Install_Number);
        await page.waitForTimeout(2000);
        const data = iframe.getByText('No data');
        if(await data.isVisible()){
            console.log('Installation Id is not visible');
            console.log(`**gbStart**Sap_Developemnt_Keys**splitKeyValue**Installation Id is not visible**gbEnd**`);
            await page.waitForTimeout(4000);
        }else{
            await iframe.locator('#__xmlview3--table-sa-CbBg').click();
            await page.waitForTimeout(8000);
            await iframe.getByRole('button', { name: "Register" }).click();
            await page.waitForTimeout(4000);
            await page.screenshot({ path: 'pages/sap/sapUi5Img/Development_Install.png', fullPage: true });
            const element = iframe.locator('//div[contains(@id, "__text44")]');
            console.log(`**gbStart**Sap_Developemnt_Keys**splitKeyValue**${await element.textContent()}**gbEnd**`);
            console.log(await element.textContent());
            await page.waitForTimeout(4000);
        }
    });
}); 

