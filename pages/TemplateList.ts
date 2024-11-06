import { Page, expect } from "@playwright/test";
import isEmpty from "lodash/isEmpty";

export class TemplateListPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async searchTemplates(values: string[]) {
    for (let value of values) {
      await this.page.locator("#globalSearch").click();
      await this.page.locator("#globalSearch").fill(value);
      if (!isEmpty(value)) {
        await expect(this.page).toHaveTitle(
          "Best SAP Consulting Services and Solutions - Zero Cloud Transformation | symphony4cloud"
        );
      } else {
        const button = await this.page.getByLabel("Go to next page");
        await expect(button).toBeDisabled();
      }
    }
  }

  async refresh() {
    await this.page.getByRole("button", { name: "Refresh" }).click();
    await expect(this.page).toHaveTitle(
      "Best SAP Consulting Services and Solutions - Zero Cloud Transformation | symphony4cloud"
    );
  }

  async paginate() {
    for (let i = 0; i < 5; i++) {
      await this.page.getByLabel("Go to next page").click();
    }
    const btn = await this.page.getByLabel("Go to next page");
    await expect(btn).toBeDisabled();
  }
}
