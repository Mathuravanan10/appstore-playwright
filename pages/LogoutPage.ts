import { Page } from "@playwright/test";

export class LogoutPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async logout() {
    await this.page.getByRole("button", { name: "N", exact: true }).click();
    await this.page.getByRole("menuitem", { name: "Log Out" }).click();
  }
}
