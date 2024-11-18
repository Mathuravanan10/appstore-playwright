import test, { chromium } from "@playwright/test";
import { LoginPage } from "../appstore/LoginPage";
import { appstorePage } from "../appstore/appstorePage";
import { id, Password, code, username, userPassword } from "./variable";

let page: any;
let login: any;
let browserType: string;

test.beforeAll("SymphonyLogin", async ({ browserName }) => {
  test.setTimeout(300000);
  const browser = await chromium.launch({ headless: false });
  page = await browser.newPage();

  login = new LoginPage(page);
  browserType = browserName;

  await login.goto();
  if (browserType === "webkit") {
    await login.loginMicsoftUsingWeb(id, Password);
  } else {
    await login.loginMicsoft(id, Password);
    await login.loginSymphony(code, username, userPassword);
  }
});

test("appstore", async () => {
  const value = ["test1", "test2", "test3", "test4"];
  const options = ["12", "24", "48", "100"];
  if (browserType === "webkit") {
    await login.webkitAppstore(options);
  } else {
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
    const appstorePages = new appstorePage(page);
    await appstorePages.appstoreSearch(value);
    await appstorePages.appstorePagenation(options);
    await appstorePages.appstoreCreateCapability(appCreate);
  }
});
