import { test, Page } from '@playwright/test';
import { authorization, email_id, password, sapUserCreation } from './sapUserVariable';

test.describe(() => {
    test.setTimeout(800000);
    let page: Page;
    test.beforeAll(async ({browser}) =>{
        page = await browser.newPage();
        await page.goto('https://me.sap.com/home');
        await page.getByPlaceholder('E-Mail, ID, or Login Name').fill(email_id);
        await page.getByRole('button', { name: 'Continue' }).click();
        await page.waitForTimeout(10000);
        await page.getByLabel('Password').click();
        await page.getByLabel('Password').fill(password);
        await page.getByRole('button', { name: 'Sign in' }).click();
        await page.waitForTimeout(20000);
    });

    test('Sap_Suser_Authorization',async () => {
        for(const click of sapUserCreation){
            await page.goto('https://me.sap.com/userscontacts/usermanagement');
            await page.waitForTimeout(15000);
            const iframe= page.frameLocator('iframe[id="shell-component---application344094044--frame"]');
            await iframe.locator('#searchField-I').click();
            await iframe.locator('#searchField-I').fill(click.email);
            await page.waitForTimeout(15000);
            await iframe.locator('.sapUiIcon.sapMLIBImgNav').click();
            await page.waitForTimeout(6000);
            await iframe.getByRole('button', { name: 'Edit Authorizations' }).click();
            await page.waitForTimeout(3000);
            // const autho = JSON.parse(authorization);
            let autho: string[] = [];

            if (authorization.startsWith('[') && authorization.endsWith(']')) {
                autho = JSON.parse(authorization);
                if (!Array.isArray(autho)) {
                    autho = [];
                }
            }

            for (const text of autho) {
                if (text === '' || text.startsWith('$')) {
                    console.log('Authorization is Not There!');
                } else {
                    await page.waitForTimeout(6000);
                    const checkbox = iframe.locator(`//li[.//bdi[text()='${text}']]//div[contains(@class, 'sapMCb')]`);
                    await checkbox.first().click();
                    await page.waitForTimeout(2000);
                }
            }
            for(const text of autho){
                if (text === ''|| text.startsWith('$')) {  
                    console.log('Authorization is Not There!');
                }else{
                    await page.waitForTimeout(6000);
                    const checkbox = iframe.locator(`//li[.//bdi[text()='${text}']]//div[contains(@class, 'sapMCb')]`);
                    await checkbox.first().click();
                    await page.waitForTimeout(2000);
                }
            }
            await iframe.getByRole('button', { name: 'Save Authorizations' }).click();
            console.log(`**gbStart**Sap_User_Creation**splitKeyValue**${click.firstName} SUser Authorization Successful Created**gbEnd**`);
            await page.waitForTimeout(6000);
            
        }
    });
}); 

