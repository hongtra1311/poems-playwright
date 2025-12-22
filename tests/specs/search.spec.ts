import { test, expect } from "../fixtures/baseFixture";
import { validSearch } from "../../data/searchData";
import { searchInput } from "../../selectors/homeSelectors";
import {
  APRIL_IS_THE_CRUELLEST_MONTH_FULL_HREF,
  APRIL_IS_THE_CRUELLEST_MONTH_HREF,
  THE_WASTE_LAND_FULL_HREF,
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
  // Click on The Waste Land link and verify navigation
  await searchPage.theWasteLand.click();
  await expect(homePage.page).toHaveURL(THE_WASTE_LAND_FULL_HREF);
  // Navigate back to search results
  await homePage.page.goBack();
  // Click on April is the Cruelest Month link and verify navigation
  // test.info().annotations.push({ type: "flaky" });
  await searchPage.aprilIsTheCruelestMonth.click();
  await expect(homePage.page).toHaveURL(APRIL_IS_THE_CRUELLEST_MONTH_FULL_HREF);
});
