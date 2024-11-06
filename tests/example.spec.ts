import { test, expect, chromium } from "@playwright/test";

test("has title and fills the login field", async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("https://accounts.zoho.in/signin", { timeout: 60000 });

  const emailInput = page.locator("input#login_id");

  await emailInput.fill("ravindrabharathi.a@basiscloudsolutions.com");

  const button = page.locator("button#nextbtn");
  await button.click();

  const passInput = page.locator("input#password");
  await passInput.fill("");

  await button.click();

  const remaindbtn = page.locator(
    "html body div.flex-container div.container div.succfail-btns button.remind_me_later.link-btn"
  );
  await remaindbtn.click();

  const text = page.locator(
    "html body div.right div#zcontiner.content_div div#personal_space.page_head"
  );
  await expect(text).toContainText("Profile");

  // await browser.close();
});

// test("get started link", async ({ page }) => {
//   await page.goto("https://playwright.dev/");

//   // Click the get started link.
//   await page.getByRole("link", { name: "Get started" }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(
//     page.getByRole("heading", { name: "Installation" })
//   ).toBeVisible();
// });
