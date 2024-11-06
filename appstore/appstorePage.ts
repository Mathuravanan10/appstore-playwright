import { expect, Page } from "@playwright/test";
import isEmpty from "lodash/isEmpty";

export class appstorePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async appstorePagenation(options: string[]) {
    for (const option of options) {
      await this.page.getByLabel(option).click();
      const nextOptionIndex = (options.indexOf(option) + 1) % options.length;
      const nextOption = options[nextOptionIndex];
      await this.page.getByRole("option", { name: nextOption }).click();
      if (!isEmpty(nextOption)) {
        await expect(this.page).toHaveTitle(
          "Best SAP Consulting Services and Solutions - Zero Cloud Transformation | symphony4cloud"
        );
      }
    }
  }

  async appstoreSearch(values: string[]) {
    await this.page.waitForTimeout(4000);
    await this.page
      .getByRole("button", { name: "AppStore AppStore" })
      .nth(1)
      .click();

    for (const test of values) {
      await this.page.getByPlaceholder("Search by app name or app id").click();
      await this.page
        .getByPlaceholder("Search by app name or app id")
        .fill(test);

      if (!isEmpty(test)) {
        await expect(this.page).toHaveTitle(
          "Best SAP Consulting Services and Solutions - Zero Cloud Transformation | symphony4cloud"
        );
      } else {
        await this.page.getByText("No apps found!").waitFor();
      }
    }
  }

  async appstoreCreateCapability(appCreate: any) {
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
    await this.page.getByText("Create New Capability").click();
    await this.page.locator("#appName").click();
    await this.page.locator("#appName").fill(appName);
    await this.page.locator("#appLanguageType").click();
    await this.page.getByRole("option", { name: codeBase }).click();
    await this.page.getByLabel("Monolithic").click();
    await this.page.getByRole("option", { name: type }).click();
    await this.page.getByLabel("Public").click();
    await this.page.getByRole("option", { name: Visibility }).click();
    await this.page.getByLabel("WEB IDE").click();
    await this.page.getByRole("option", { name: IDE }).click();
    await this.page.getByLabel("", { exact: true }).click();
    await this.page
      .getByRole("option", { name: AppGroup, exact: true })
      .click();
    if (subgroup) {
      await this.page.getByLabel("Add a sub-group?").check();
    }
    if (approver) {
      await this.page.getByLabel("Add approver?").check();
    }
    await this.page.getByRole("button", { name: "Create" }).click();
  }
}
