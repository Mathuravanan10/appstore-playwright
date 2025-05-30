import { test, Page, expect } from '@playwright/test';
import { password, url, username, quoteName, discount } from './discountVariable';
 
test.describe(() => {
    test.setTimeout(800000);
    let page: Page;
    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage();
    });
 
    test("floating_quotes_discount", async () => {
        try {
            await page.goto(url);
            await page.waitForTimeout(5000);
            await page.getByRole('textbox', { name: 'Username' }).click();
            await page.getByRole('textbox', { name: 'Username' }).fill(username);
            await page.waitForTimeout(2000);
            await page.getByRole('textbox', { name: 'Password' }).click();
            await page.getByRole('textbox', { name: 'Password' }).fill(password);
            await page.waitForTimeout(2000);
            await page.getByRole('button', { name: 'Log In to Sandbox' }).click();
            await page.waitForTimeout(10000);
            await page.getByRole('button', { name: 'App Launcher' }).click();
            await page.waitForTimeout(2000);
            await page.getByRole('option', { name: 'Sales', exact: true }).click();
            await page.waitForTimeout(2000);
            await page.getByRole('link', { name: 'Quotes' }).click();
            await page.waitForTimeout(2000);
            await page.getByRole('searchbox', { name: 'Search this list...' }).click();
            await page.getByRole('searchbox', { name: 'Search this list...' }).fill(`${quoteName}`);
            await page.getByRole('searchbox', { name: 'Search this list...' }).press('Enter');
            await page.waitForTimeout(3000)
            await page.getByRole('link', { name: `${quoteName}`, exact: true }).click();
            await page.waitForTimeout(4000);
            await page.getByRole('button', { name: 'Edit Discount' }).click();
            await page.waitForTimeout(2000);
            await page.getByRole('textbox', { name: 'Discount' }).click();
            await page.waitForTimeout(3000);
            await page.getByRole('textbox', { name: 'Discount' }).fill(`${discount}`);
            await page.waitForTimeout(2000);
            await page.getByRole('button', { name: 'Save' }).click();
            await page.waitForTimeout(4000);
            await page.getByRole('button', { name: 'Submit for Approval' }).click();
            await page.waitForTimeout(4000);
            await page.getByRole('button', { name: 'Submit' }).click();
            await page.waitForTimeout(4000);
            await page.getByRole('button', { name: 'Notifications' }).click();
            await page.waitForTimeout(3000);
            await page.getByRole('link', { name: new RegExp(`Vijayakumar Palani is requesting approval for quote Quote Name: ${quoteName}`) }).first().click();
            await page.waitForTimeout(3000);
            await page.getByRole('button', { name: 'Approve' }).click();
            await page.waitForTimeout(3000);
            await page.getByRole('button', { name: 'Approve' }).click();
            await page.waitForTimeout(5000);
            await page.getByRole('link', { name: `${quoteName}`, exact: true }).click();
            await page.waitForTimeout(2000);
            await page.evaluate(() => window.scrollBy(0, 500));
            const valueElement = page.locator('lightning-formatted-text[data-output-element-id="output-field"]').nth(5);
            const text = await valueElement.textContent();
            console.log('TotalPriceWithDiscount:', text?.trim());
            const adddiscount = text?.trim();
            await page.waitForTimeout(2000);
            const totalPrice = await page.locator('lightning-formatted-text[data-output-element-id="output-field"]').nth(9).textContent();
            console.log('GrandTotalWithDiscoun:', totalPrice);
            console.log(`**gbStart**salesforce_quote_discount**splitKeyValue**SalesForce ${quoteName} Quotes Discount added Total Price:${totalPrice} and Total Price With Discount:${adddiscount}. URL:${page.url()}**gbEnd**`);
            await page.waitForTimeout(2000);
        } catch (error) {
            console.error('Test failed:', error);
        }
    });
});