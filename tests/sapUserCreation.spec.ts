import { test, Page, selectors, expect } from '@playwright/test';
import { email_id, password, sapUserCreation, user } from './sapUserVariable';

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

    test('Sap_User_Creation',async () => {
        const data = JSON.parse(user);
        const { FirstName, Lastname, Email_Name_Only } = data[0];
        for(const click of sapUserCreation){
            const [name, domain] = Email_Name_Only.split('@');
            await page.goto('https://me.sap.com/userscontacts/usermanagement');
            await page.waitForTimeout(10000);
            const iframe= page.frameLocator('iframe[id="shell-component---application344094044--frame"]');
            await iframe.getByRole('button', { name: "Request User" }).click();
            await page.waitForTimeout(6000);
            await iframe.locator('#__input0-vhi').click();
            await page.waitForTimeout(2000);
            await iframe.locator('#__list12-listUl').click();
            await iframe.getByPlaceholder("Enter First Name ...").fill(FirstName);
            await iframe.getByPlaceholder("Enter Last Name ...").fill(Lastname);
            await iframe.getByPlaceholder('Enter Email Username').fill(name);
            const mail = iframe.getByText('Duplicate Email Address');
            await page.waitForTimeout(4000);
            await iframe.locator('.sapMSltArrow').nth(0).click({ force: true });
            const dropdown = iframe.locator('.sapMSelectList');
            await page.waitForTimeout(2000);
            if(await mail.isVisible()){
                console.log(`${name} this email already there`);
                console.log(`**gbStart**sapusercreation**splitKeyValue**${name} this email already there**gbEnd**`);
                await page.waitForTimeout(2000);
            }else{
                const option = dropdown.locator('li', { hasText: `${domain}` }).nth(0);
                await option.click(); 

                const today = new Date();
                const maxDate = new Date();
                maxDate.setFullYear(today.getFullYear() + 2);
                const formattedDate = new Intl.DateTimeFormat('de-DE').format(maxDate)
                const parseDate = (dateStr: any) => {
                    const [day, month, year] = dateStr.split('.').map(Number);
                    return new Date(year, month - 1, day);
                };

                const isValidDateFormat = (date: string) => {
                    const regex = /^\d{2}\.\d{2}\.\d{4}$/; 
                    return regex.test(date);
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
                if (!isValidDateFormat(click.Date)) {
                    console.log(`Invalid date format: ${click.Date}. Please enter in DD.MM.YYYY format`);
                    console.log(`**gbStart**sapusercreation**splitKeyValue**Invalid date format: ${click.Date}. Please enter in DD.MM.YYYY format**gbEnd**`);
                    await page.waitForTimeout(2000);
                }else{
                    await page.waitForTimeout(6000);
                    await iframe.locator('#__select0-arrow').click();
                    await iframe.locator(`li:text("${click.Language}")`).click(); 
                    await iframe.getByRole('button', { name: "Submit" }).click();
                    await page.waitForTimeout(10000);
                    await expect(iframe.getByText('User was requested')).toBeVisible();
                    console.log(`**gbStart**sapusercreation**splitKeyValue**${name} SAP S-User Creation Successful**gbEnd**`);
                    await iframe.getByRole('button', { name: "OK" }).click();
                    await page.waitForTimeout(10000);
                }
            }
        }
    });
}); 

