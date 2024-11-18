import { Page } from "@playwright/test";
let page1: any;

export class LoginPage {
  readonly page: Page;
  pageForLogin: any;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto("https://predev.symphony4cloud.com/login");
  }

  async loginMicsoft(micsoftmail: string, micsoftPassword: string) {
    await this.page
      .getByPlaceholder("Email, phone, or Skype")
      .fill(micsoftmail);
    await this.page.getByRole("button", { name: "Next" }).click();
    await this.page.locator("#i0118").fill(micsoftPassword);
    await this.page.getByRole("button", { name: "Sign in" }).click();
    await this.page.getByRole("button", { name: "Yes" }).click();
    await this.page.goto("https://predev.symphony4cloud.com/login");
  }

  async loginMicsoftUsingWeb(micsoftmail: string, micsoftPassword: string) {
    await this.page.getByText("Email, phone, or Skype").click();
    await this.page.getByLabel("Enter your email, phone, or").fill(micsoftmail);
    await this.page.getByRole("button", { name: "Next" }).click();
    await this.page.getByText("Password", { exact: true }).click();
    await this.page.getByLabel("Enter the password for").fill(micsoftPassword);
    await this.page.getByRole("button", { name: "Sign in" }).click();
    await this.page.getByRole("button", { name: "Yes" }).click();
    const pageWaitPopup = this.page.waitForEvent("popup");
    await this.page.goto("https://predev.symphony4cloud.com/login");
    this.pageForLogin = await pageWaitPopup;

    await this.pageForLogin.getByLabel("").click();
    await this.pageForLogin.getByRole("option", { name: "c100001" }).click();
    await this.pageForLogin.getByRole("button", { name: "Sign In" }).click();
  }

  async webkitAppstore(value: string[]) {
    await this.pageForLogin
      .getByRole("button", { name: "AppStore" })
      .first()
      .click();
    await this.pageForLogin.getByText("Create New Capability").click();
    await this.pageForLogin.getByLabel("close").click();
    await this.pageForLogin
      .getByPlaceholder("Search by app name or app id")
      .click();
    await this.pageForLogin
      .getByPlaceholder("Search by app name or app id")
      .fill("");
    await this.pageForLogin.getByLabel("Go to next page").click();
    for (const options of value) {
      await this.pageForLogin.getByLabel(options).click();
      const nextOptionIndex = (value.indexOf(options) + 1) % value.length;
      const nextOption = value[nextOptionIndex];
      await this.pageForLogin.getByRole("option", { name: nextOption }).click();
      await this.pageForLogin.getByLabel("Go to next page").click();
    }
    await this.pageForLogin.close();
    await this.page.close();
  }

  async loginSymphony(
    customerCode: string,
    userName: string,
    password: string
  ) {
    await this.page.locator("#customer_code").click();
    await this.page.locator("#customer_code").fill(customerCode);
    await this.page.locator("#user_name").click();
    await this.page.locator("#user_name").fill(userName);
    await this.page.locator("#password").click();
    await this.page.locator("#password").fill(password);
    await this.page.getByRole("button", { name: "LOGIN" }).click();
  }
}
