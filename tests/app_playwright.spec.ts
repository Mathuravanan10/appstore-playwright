import test, { chromium } from "@playwright/test";
import { id, Password, code, username, userPassword } from "./variable";

let page: any;
let pageForLogin: any;
let browserType: string;
const appCreate = {
  appName: "test",
  codeBase: "Python",
  type: "Monolithic",
  Visibility: "Public",
  IDE: "WEB IDE",
  AppGroup: "API Testing",
  subgroup: true,
  approver: false,
};

test.beforeAll("SymphonyLogin", async ({ browserName }) => {
  test.setTimeout(300000);
  const browser = await chromium.launch({ headless: false });
  page = await browser.newPage();

  browserType = browserName;

  await page.goto("https://predev.symphony4cloud.com/login");
  if (browserType === "webkit") {
    await page.getByText("Email, phone, or Skype").click();
    await page.getByLabel("Enter your email, phone, or").fill(id);
    await page.getByRole("button", { name: "Next" }).click();
    await page.getByText("Password", { exact: true }).click();
    await page.getByLabel("Enter the password for").fill(Password);
    await page.getByRole("button", { name: "Sign in" }).click();
    await page.getByRole("button", { name: "Yes" }).click();
    const pageWaitPopup = page.waitForEvent("popup");
    await page.goto("https://predev.symphony4cloud.com/login");
    pageForLogin = await pageWaitPopup;
    await pageForLogin.getByLabel("").click();
    await pageForLogin.getByRole("option", { name: "c100001" }).click();
    await pageForLogin.getByRole("button", { name: "Sign In" }).click();
  } else {
    await page.getByPlaceholder("Email, phone, or Skype").fill(id);
    await page.getByRole("button", { name: "Next" }).click();
    await page.locator("#i0118").fill(Password);
    await page.getByRole("button", { name: "Sign in" }).click();
    await page.getByRole("button", { name: "Yes" }).click();
    await page.goto("https://predev.symphony4cloud.com/login");
    await page.locator("#customer_code").click();
    await page.locator("#customer_code").fill(code);
    await page.locator("#user_name").click();
    await page.locator("#user_name").fill(username);
    await page.locator("#password").click();
    await page.locator("#password").fill(userPassword);
    await page.getByRole("button", { name: "LOGIN" }).click();
  }
});

test("appstore", async () => {
  const value = ["test1", "test2", "test3", "test4"];
  const options = ["12", "24", "48", "100"];
  if (browserType === "webkit") {
    await pageForLogin
      .getByRole("button", { name: "AppStore" })
      .first()
      .click();
    await pageForLogin.getByText("Create New Capability").click();
    await pageForLogin.getByLabel("close").click();
    await pageForLogin.getByPlaceholder("Search by app name or app id").click();
    await pageForLogin
      .getByPlaceholder("Search by app name or app id")
      .fill("");
    await pageForLogin.getByLabel("Go to next page").click();
    for (const option of options) {
      await pageForLogin.getByLabel(option).click();
      const nextOptionIndex = (options.indexOf(option) + 1) % options.length;
      const nextOption = options[nextOptionIndex];
      await pageForLogin.getByRole("option", { name: nextOption }).click();
      await pageForLogin.getByLabel("Go to next page").click();
    }
    await pageForLogin.close();
  } else {
    const {
      appName,
      codeBase,
      type,
      Visibility,
      IDE,
      AppGroup,
      subgroup,
      approver,
    } = appCreate;
    await page.waitForTimeout(4000);
    await page
      .getByRole("button", { name: "AppStore AppStore" })
      .nth(1)
      .click();
    for (const test of value) {
      await page.getByPlaceholder("Search by app name or app id").click();
      await page.getByPlaceholder("Search by app name or app id").fill(test);
    }
    await page.getByPlaceholder("Search by app name or app id").fill("");
    for (const option of options) {
      await page.getByLabel(option).click();
      const nextOptionIndex = (options.indexOf(option) + 1) % options.length;
      const nextOption = options[nextOptionIndex];
      await page.getByRole("option", { name: nextOption }).click();
    }
    await page.getByText("Create New Capability").click();
    await page.locator("#appName").click();
    await page.locator("#appName").fill(appName);
    await page.locator("#appLanguageType").click();
    await page.getByRole("option", { name: codeBase }).click();
    await page.getByLabel("Monolithic").click();
    await page.getByRole("option", { name: type }).click();
    await page.getByLabel("Public").click();
    await page.getByRole("option", { name: Visibility }).click();
    await page.getByLabel("WEB IDE").click();
    await page.getByRole("option", { name: IDE }).click();
    await page.getByLabel("", { exact: true }).click();
    await page.getByRole("option", { name: AppGroup, exact: true }).click();
    if (subgroup) {
      await page.getByLabel("Add a sub-group?").check();
    }
    if (approver) {
      await page.getByLabel("Add approver?").check();
    }
    await page.getByLabel("close").click();
  }
});
