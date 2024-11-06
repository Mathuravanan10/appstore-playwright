import { Page } from "@playwright/test";
let page1: any;

export class LoginPage {
  readonly page: Page;

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
