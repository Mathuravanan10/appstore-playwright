import { test, Page, selectors, expect } from '@playwright/test';
import { email_id, obj_Install_Number, ObjectKeys, password } from './sapUserVariable';

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

    test('Sap_Object_Keys',async () => {
        for(const click of ObjectKeys){
            await page.goto('https://me.sap.com/home');
            await page.waitForTimeout(4000);
            await page.locator('[id="__tab4-__group1-2"]').click();
            await page.waitForTimeout(2000);
            await page.getByRole('heading', { name: 'Request License Keys' }).click();
            await page.waitForTimeout(2000);
            await page.getByText('Developer & Object Keys (SSCR)').click();
            await page.waitForTimeout(4000);
            const iframe= page.frameLocator('iframe[id="shell-component---application100144251--frame"]');
            await iframe.locator('#__item3-content').click();
            await page.waitForTimeout(2000);
            await iframe.getByRole('button', { name: "Register" }).click();
            await page.waitForTimeout(2000);
            await iframe.locator('#__xmlview4--object-inner').click();
            await iframe.locator('#__xmlview4--object-inner').fill(click.object_Id);
            await page.waitForTimeout(2000);
            await iframe.locator('#__xmlview4--release-inner').click();
            await iframe.locator('#__xmlview4--release-inner').fill(click.Basis_Release);
            await page.waitForTimeout(2000);
            await iframe.locator('#__xmlview4--id-inner').click(),
            await iframe.locator('#__xmlview4--id-inner').fill(click.Program_ID);
            await page.waitForTimeout(2000);
            await iframe.locator('#__xmlview4--type-inner').click();
            await iframe.locator('#__xmlview4--type-inner').fill(click.Type);
            await page.waitForTimeout(2000);
            await iframe.locator('#__xmlview4--name-inner').click();
            await iframe.locator('#__xmlview4--name-inner').fill(click.Object_Name);
            await page.waitForTimeout(2000);
            await iframe.locator('#__field4-I').click();
            await iframe.locator('#__field4-I').fill(obj_Install_Number);
            await page.waitForTimeout(2000);
            await iframe.locator('#__xmlview4--table-sa-CbBg').click();
            await page.waitForTimeout(8000);
            await iframe.getByRole('button', { name: "Register" }).click();
            await page.waitForTimeout(4000);
            await page.screenshot({ path: 'pages/sap/sapUi5Img/Object_Keys.png', fullPage: true });
            const element = iframe.locator('//div[contains(@id, "__text85")]');
            console.log(`**gbStart**Sap_Developemnt_Keys**splitKeyValue**${await element.textContent()}**gbEnd**`);
            console.log(await element.textContent());
            await page.waitForTimeout(8000);
        }
    });
}); 

