import { test, expect } from "../fixtures/baseFixture";
import { validSearch } from "../../data/searchData";
import { searchInput } from "../../selectors/homeSelectors";

test("@search Search valid keyword", async ({ homePage, searchPage }) => {
  // perform the search action on the already-navigated home page
  await homePage.page.fill(searchInput, validSearch);
  await homePage.page.press(searchInput, "Enter");

  // assert using the SearchPage object without additional navigation
  await expect(searchPage.theWasteLand).toBeVisible();
});
