import { test, expect } from "../fixtures/baseFixture";
import { validSearch } from "../../data/searchData";
import {
  APRIL_IS_THE_CRUELLEST_MONTH_HREF,
  THE_WASTE_LAND_HREF,
} from "../../contents/searchContent";

test("@search Search valid keyword", async ({ homePage, searchPage }) => {
  await homePage.searchFor(validSearch);
  await expect(searchPage.theWasteLand).toBeVisible();
  expect(await searchPage.theWasteLand.getAttribute("href")).toBe(
    THE_WASTE_LAND_HREF
  );
  await expect(searchPage.theWasteLandDescription).toBeVisible();
  await expect(searchPage.aprilIsTheCruelestMonth).toBeVisible();
  expect(await searchPage.aprilIsTheCruelestMonth.getAttribute("href")).toBe(
    APRIL_IS_THE_CRUELLEST_MONTH_HREF
  );
  await expect(searchPage.aprilIsTheCruelestMonthDescription).toBeVisible();
  // Click on The Waste Land link and verify navigation
  await searchPage.theWasteLand.click();
  await expect(homePage.page.url()).toContain(THE_WASTE_LAND_HREF);
  // Navigate back to search results
  await homePage.page.goBack();
  // Click on April is the Cruelest Month link and verify navigation
  await searchPage.aprilIsTheCruelestMonth.click();
  await expect(homePage.page.url()).toContain(
    APRIL_IS_THE_CRUELLEST_MONTH_HREF
  );
});

test("@search Search invalid keyword", async ({ homePage, searchPage }) => {
  await homePage.searchFor("invalidsearchtermxyz");
  await expect(searchPage.noResult).toBeVisible();
});
