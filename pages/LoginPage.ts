import { Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto("https://qa.symphony4cloud.com/login");
  }

  async login(customerCode: string, userName: string, password: string) {
    await this.page.locator("#customer_code").click();
    await this.page.locator("#customer_code").fill(customerCode);
    await this.page.locator("#user_name").click();
    await this.page.locator("#user_name").fill(userName);
    await this.page.locator("#password").click();
    await this.page.locator("#password").fill(password);
    await this.page.getByRole("button", { name: "LOGIN" }).click();
  }

  async navigateToTemplateList() {
    await this.page
      .getByRole("button", { name: "Drag & Drop Drag & Drop" })
      .click();
    await this.page.getByText("Template ListAccess, view,").click();
  }
}
