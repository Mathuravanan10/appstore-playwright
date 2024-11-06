import { test, expect, chromium } from "@playwright/test";

test("has title and fills the login field", async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("https://www.zoho.com/people/logout.html");
  const button = page.locator(
    ".zgh-utilities > div:nth-child(3) > a:nth-child(1)"
  );
  await button.click();

  const emailInput = page.locator("input#login_id");
  await emailInput.fill("mathuravanan.s@basiscloudsolutions.com");

  const nextbutton = page.locator("button#nextbtn");
  await nextbutton.click();

  const passbuttom = page.locator("#password");
  await passbuttom.fill("");

  const signbuttom = page.locator("#nextbtn");
  await signbuttom.click();

  const remaindbtn = page.locator(
    "html body div.flex-container div.container div.succfail-btns button.remind_me_later.link-btn"
  );
  await remaindbtn.click();

  const vald = page.locator("#ZPAtt_Dash_CurrDayTHrs");
  console.log(vald);

  //   if (vald.)
  const checkout = page.locator(
    "#ZPAtt_dashboard_dayCont > div.anots > button"
  );
  await checkout.click();

  //   const bday = page.locator(
  //     "#zp_d_wrow > div:nth-child(2) > div > div.dash-head.hicon.IC-drag > h3"
  //   );
  //   await expect(bday).toHaveText("Birthday");

  // Close the browser
  // await browser.close();
});
