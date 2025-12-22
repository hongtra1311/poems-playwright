import { test as Page } from "@playwright/test";
import { HomePage } from "../../page_object_model/HomePage";
import { SearchPage } from "../../page_object_model/SearchPage";
import { PoemPage } from "../../page_object_model/PoemPage";

type PtFixtures = {
  homePage: HomePage;
  searchPage: SearchPage;
  poemPage: PoemPage;
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
  poemPage: async ({ homePage }, use) => {
    const poemPage = new PoemPage(homePage.page);
    await use(poemPage);
  },
});

export { expect } from "@playwright/test";
