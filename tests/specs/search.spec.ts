import { test, expect } from "../fixtures/baseFixture";
import { validSearch } from "../../data/searchData";
import { searchInput } from "../../selectors/homeSelectors";
import {
  APRIL_IS_THE_CRUELLEST_MONTH_HREF,
  THE_WASTE_LAND_HREF,
} from "../../contents/searchContent";

test("@search Search valid keyword", async ({ homePage, searchPage }) => {
  await homePage.page.fill(searchInput, validSearch);
  await homePage.page.press(searchInput, "Enter");
  await expect(searchPage.theWasteLand).toBeVisible();
  expect(await searchPage.theWasteLand.getAttribute("href")).toBe(
    THE_WASTE_LAND_HREF
  );
  await expect(searchPage.theWasteLandDescription).toBeVisible();
  expect(searchPage.aprilIsTheCruelestMonth).toBeVisible();
  expect(await searchPage.aprilIsTheCruelestMonth.getAttribute("href")).toBe(
    APRIL_IS_THE_CRUELLEST_MONTH_HREF
  );
  await expect(searchPage.aprilIsTheCruelestMonthDescription).toBeVisible();
});
