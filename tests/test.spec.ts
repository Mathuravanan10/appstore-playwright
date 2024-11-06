import { chromium, test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { TemplateListPage } from "../pages/TemplateList";
import { LogoutPage } from "../pages/LogoutPage";

let page: any;
let loginPage: LoginPage;
let templateListPage: TemplateListPage;
let logoutPage: LogoutPage;

test.beforeAll(async () => {
  test.setTimeout(120000);

  const browser = await chromium.launch({ headless: false });
  page = await browser.newPage();

  loginPage = new LoginPage(page);
  templateListPage = new TemplateListPage(page);

  await loginPage.goto();
  await loginPage.login("c100001", "narendran", "Thanjavur@123");
  await loginPage.navigateToTemplateList();
});

test.afterAll(async () => {
  logoutPage = new LogoutPage(page);
  await logoutPage.logout();
  await page.close();
});

test("test for search in template list", async () => {
  const values = [
    "TEST_Command",
    "NSW_FS_Creation",
    "HANA_NSE_14_12_2022_12_53_54",
    "test0",
    "",
  ];
  await templateListPage.searchTemplates(values);
  await templateListPage.refresh();
  await templateListPage.paginate();
});
