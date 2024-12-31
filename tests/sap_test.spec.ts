import test, { chromium } from "@playwright/test";

test.describe("SAP Hana Sales Order Tests", () => {

let page: any;
let browser: any;


test.beforeAll("SapLogin", async ({ browserName }) => {
  test.setTimeout(300000);
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();

  await page.goto('https://my415865.s4hana.cloud.sap/ui#Launchpad-openFLPPage?pageId=SAP_SD_PGT_SALES_MGR_OVR_PC&spaceId=SAP_BR_SALES_MANAGER');
  await page.getByPlaceholder('Email or User Name').click();
  await page.getByPlaceholder('Email or User Name').fill('naren@basiscloudsolutions.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('N@renbcs2024');
  await page.getByRole('button', { name: 'Continue' }).click();
 
});

test("sap_test", async () => {
  test.setTimeout(200000);
  await page.goto('https://my415865.s4hana.cloud.sap/ui#Launchpad-openFLPPage?pageId=SAP_SD_PGT_SALES_MGR_OVR_PC&spaceId=SAP_BR_SALES_MANAGER');
  await page.getByLabel('Sales Management').getByTitle('More').click();
  await page.getByRole('menuitem', { name: 'Sales Planning and Analytics' }).click();
  await page.getByLabel('Create Sales Orders Tile').click();
  await page.locator('[id="APD_\\:\\:SalesOrderType-inner-vhi"]').click();
  await page.getByText('Standard Order (OR)').click();
  await page.getByLabel('Sales Organization').click();
  await page.getByRole('gridcell', { name: 'BCS sales org' }).click();
  await page.getByLabel('Distribution Channel').click();
  await page.locator('[id="__wrapper65-com\\.sap\\.gateway\\.srvd\\.c_salesordermanage_sd\\.v0001\\.CreateWithSalesOrderType\\:\\:DistributionChannel\\:\\:Popover\\:\\:qualifier\\:\\:\\:\\:SuggestTable-0"]').click();
  await page.getByLabel('Division').click();
  await page.getByText('Mobile').click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByLabel('Sold-to Party').click();
  await page.getByLabel('Sold-to Party').fill('Z');
  await page.locator('[id="__wrapper70-cus\\.sd\\.salesorderv2\\.manage\\:\\:SalesOrderManageObjectPage--fe\\:\\:FormContainer\\:\\:OrderData\\:\\:FieldValueHelp\\:\\:SoldToParty\\:\\:Popover\\:\\:qualifier\\:\\:\\:\\:SuggestTable-0"]').click();
  await page.getByLabel('Customer Reference').click();
  await page.getByLabel('Customer Reference').fill('test');
  await page.getByRole('textbox', { name: 'Product' }).click();
  await page.getByRole('textbox', { name: 'Product' }).fill('Sample');
  await page.locator('[id="__wrapper79-cus\\.sd\\.salesorderv2\\.manage\\:\\:SalesOrderManageObjectPage--fe\\:\\:table\\:\\:_Item\\:\\:LineItem\\:\\:TableValueHelp\\:\\:_Item\\:\\:Product\\:\\:Popover\\:\\:qualifier\\:\\:\\:\\:SuggestTable-0"]').click();
  await page.locator('[aria-describedby="__text134"]').click();
  await page.locator('[aria-describedby="__text134"]').fill("1");
  await page.locator('[aria-describedby="__text134"]').press('Enter');
  await page.getByLabel('Details', { exact: true }).click();
  await page.getByLabel('Storage Location').click();
  await page.locator('[id="__wrapper121-cus\\.sd\\.salesorderv2\\.manage\\:\\:SalesOrderItemObjectPage--fe\\:\\:FormContainer\\:\\:ShippingInfo\\:\\:FieldValueHelp\\:\\:_Item\\:\\:StorageLocation\\:\\:Popover\\:\\:qualifier\\:\\:\\:\\:SuggestTable-0"]').click();
  await page.getByRole('button', { name: 'Prices', exact: true }).click();
  await page.locator('[id="cus\\.sd\\.salesorderv2\\.manage\\:\\:SalesOrderItemObjectPage--fe\\:\\:table\\:\\:_ItemPricingElement\\:\\:LineItem\\:\\:DataFieldForAction\\:\\:com\\.sap\\.gateway\\.srvd\\.c_salesordermanage_sd\\.v0001\\.CreatePricingElement\\:\\:com\\.sap\\.gateway\\.srvd\\.c_salesordermanage_sd\\.v0001\\.SalesOrderItemType"]').click();
  await page.getByText('Z Price').click();
  await page.locator('[id="fe\\:\\:APD_\\:\\:com\\.sap\\.gateway\\.srvd\\.c_salesordermanage_sd\\.v0001\\.CreatePricingElement-footer"]').getByRole('button', { name: 'Create' }).click();
const temp = page.locator('[id="__field40-__clone316-__clone360-inner-inner"]');
await temp.dblclick();
await temp.fill('100,00');

  await page.getByLabel('Apply').click();
  // await page.getByLabel('Cancel').click();
  // await page.getByRole('button', { name: 'Discard' }).click();
});
test.afterAll(async () => {
  await browser.close();
});
})

