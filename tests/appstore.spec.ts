require("dotenv").config();
import test, { chromium } from "@playwright/test";
import { LoginPage } from "../appstore/LoginPage";
import { appstorePage } from "../appstore/appstorePage";

let page: any;
let login: any;

test.beforeAll("test for refresh in template list", async () => {
  const micsoftmail = process.env.id?.toString();
  const micsoftPassword = process.env.Password?.toString();
  const customerCode = process.env.code?.toString();
  const userName = process.env.username?.toString();
  const password = process.env.userPassword?.toString();
  test.setTimeout(300000);
  const browser = await chromium.launch({ headless: false });
  page = await browser.newPage();

  login = new LoginPage(page);

  await login.goto();
  await login.loginMicsoft(micsoftmail, micsoftPassword);
  await login.loginSymphony(customerCode, userName, password);
});

test("test for appstore file", async () => {
  const value = ["test1", "test2", "test3", "test4"];
  const options = ["12", "24", "48", "100"];
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
});
