import { test, expect } from "@playwright/test";
import { HomePage } from "../../page_object_model/HomePage";

test("Display screen Pet Store", async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigate();

  await expect(page).toHaveTitle(/JPetStore Demo/);
  await expect(homePage.signInLink).toBeVisible();
});
