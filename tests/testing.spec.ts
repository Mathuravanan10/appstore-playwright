import { chromium, expect, test } from "@playwright/test";

let page: any;

test.beforeAll(async () => {
  test.setTimeout(120000);

  const browser = await chromium.launch({ headless: false });
  page = await browser.newPage();

  // login
  await page.goto("https://qa.symphony4cloud.com/login");
  await page.locator("#customer_code").click();
  await page.locator("#customer_code").fill("c100001");
  await page.locator("#user_name").click();
  await page.locator("#user_name").fill("narendran");
  await page.locator("#password").click();
  await page.locator("#password").fill("Thanjavur@123");
  await page.getByRole("button", { name: "LOGIN" }).click();
  await page.getByRole("button", { name: "Drag & Drop Drag & Drop" }).click();
  await page.getByText("Template ListAccess, view,").click();
});

test("test for search in template list", async () => {
  const values = ["test", "test1", "test2", "test3", ""];
  for (let i = 0; i < values.length; i++) {
    await page.locator("#globalSearch").click();
    await page.locator("#globalSearch").fill(values[i]);
  }
});

test("test for refresh in template list", async () => {
  await page.getByRole("button", { name: "Refresh" }).click();
});

test("test for pagination in template list", async () => {
  for (let i = 0; i < 5; i++) {
    await page.getByLabel("Go to next page").click();
  }
  const btn = await page.getByLabel("Go to next page");
  await expect(btn).toBeDisabled();
});
