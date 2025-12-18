import {
  ACADEMY_AMERICAN_POETS_HREF,
  AMERICAN_POETS_MAGAZINE_HREF,
  HOME_TITLE,
  NATIONAL_POETRY_MONTH_HREF,
} from "../../contents/homeContent";
import { test, expect } from "../fixtures/baseFixture";

test("@smoke Display screen home page", async ({ homePage }) => {
  await expect(homePage.page).toHaveTitle(HOME_TITLE);
  await expect(homePage.academyAmericanPoets).toBeVisible();
  expect(await homePage.academyAmericanPoets.getAttribute("href")).toBe(
    ACADEMY_AMERICAN_POETS_HREF
  );
  await expect(homePage.nationalPoetryMonth).toBeVisible();
  expect(await homePage.nationalPoetryMonth.getAttribute("href")).toBe(
    NATIONAL_POETRY_MONTH_HREF
  );
  await expect(homePage.americanPoetsMagazine).toBeVisible();
  expect(await homePage.americanPoetsMagazine.getAttribute("href")).toBe(
    AMERICAN_POETS_MAGAZINE_HREF
  );
});
