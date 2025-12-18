import { test as Page } from "@playwright/test";
import { HomePage } from "../../page_object_model/HomePage";
import { SearchPage } from "../../page_object_model/SearchPage";

type PtFixtures = {
  homePage: HomePage;
  searchPage: SearchPage;
};

export const test = Page.extend<PtFixtures>({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await homePage.navigate();
    await use(homePage);
  },
  searchPage: async ({ homePage }, use) => {
    const searchPage = new SearchPage(homePage.page);
    await use(searchPage);
  },
});

export { expect } from "@playwright/test";
