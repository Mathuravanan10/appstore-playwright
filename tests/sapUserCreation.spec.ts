import { test, Page, selectors, expect } from '@playwright/test';
import { authorization, email_id, password, sapUserCreation } from './sapUserVariable';

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

    test('Sap_User_Creation',async () => {
        for(const click of sapUserCreation){
            await page.goto('https://me.sap.com/userscontacts/usermanagement');
            await page.waitForTimeout(10000);
            const iframe= page.frameLocator('iframe[id="shell-component---application344094044--frame"]');
            await iframe.getByRole('button', { name: "Request User" }).click();
            await page.waitForTimeout(6000);
            await iframe.locator('#__input0-vhi').click();
            await page.waitForTimeout(2000);
            await iframe.locator('#__list12-listUl').click();
            await iframe.getByPlaceholder("Enter First Name ...").fill(click.firstName);
            await iframe.getByPlaceholder("Enter Last Name ...").fill(click.LastName);
            await iframe.getByPlaceholder('Enter Email Username').fill(click.email);
            await page.waitForTimeout(4000);
            await iframe.locator('.sapMSltArrow').nth(0).click({ force: true });
            const dropdown = iframe.locator('.sapMSelectList');
            const option = dropdown.locator('li', { hasText: `${click.emailpathu}` }).nth(0);
            await option.click(); 

            const today = new Date();
            const maxDate = new Date();
            maxDate.setFullYear(today.getFullYear() + 2);
            const formattedDate = new Intl.DateTimeFormat('de-DE').format(maxDate)
            const parseDate = (dateStr: any) => {
                const [day, month, year] = dateStr.split('.').map(Number);
                return new Date(year, month - 1, day);
            };
            
            const userDate = parseDate(click.Date);
            const maxDateObj = parseDate(formattedDate);
            if(userDate < maxDateObj){
              await iframe.locator('#__picker0-inner').click();
              await iframe.locator('#__picker0-inner').fill(click.Date);
              await page.waitForTimeout(4000);
            }else{
                await iframe.locator('#__picker0-inner').click();
                await iframe.locator('#__picker0-inner').fill(formattedDate);
                await page.waitForTimeout(4000);
            }  
            await page.waitForTimeout(6000);
            await iframe.locator('#__select0-arrow').click();
            await iframe.locator(`li:text("${click.Language}")`).click(); 
            await iframe.getByRole('button', { name: "Submit" }).click();
            await page.waitForTimeout(10000);
            await expect(iframe.getByText('User was requested')).toBeVisible();
            console.log(`**gbStart**sapusercreation**splitKeyValue**${click.email} SAP User Creation Successful**gbEnd**`);
            await iframe.getByRole('button', { name: "OK" }).click();
            await page.waitForTimeout(10000);
            await iframe.locator('#searchField-I').click();
            await iframe.locator('#searchField-I').fill(click.email);
            await page.waitForTimeout(15000);
            const icon = iframe.locator('#__item25-__clone0-imgNav');
            if(await icon.isVisible()){
                await page.waitForTimeout(2000);
                await icon.click();
            }else{
                await page.waitForTimeout(2000);
                await iframe.locator('#__item25-__clone0_cell1').click();
            }
            await page.waitForTimeout(6000);
            await iframe.locator('#__button75-inner').click();
            await page.waitForTimeout(3000);
            for(const text of authorization){
                if (text === '') {
                    console.log('Authorization is Not There!');
                }else{
                    await page.waitForTimeout(6000);
                    const checkbox = iframe.locator(`//li[.//bdi[text()='${text}']]//div[contains(@class, 'sapMCb')]`);
                    await checkbox.first().click();
                    await page.waitForTimeout(2000);
                }
            }
            await iframe.locator('#__button76').click();
            console.log(`**gbStart**Sap_User_Creation**splitKeyValue**${click.firstName} User is Successful Created**gbEnd**`);
            await page.waitForTimeout(6000);
            
        }
    });
}); 

