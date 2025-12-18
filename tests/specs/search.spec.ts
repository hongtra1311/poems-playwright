import { test, expect } from "@playwright/test";
import searchData from "../../data/searchData.json";

test("Search valid keyword", async ({ page }) => {
  await page.goto("https://petstore.octoperf.com/actions/Catalog.action");
  await page.fill('input[name="keyword"]', searchData.validKeyword);
  await page.click('input[type="submit"]');

  await expect(page.locator("text=Bulldog")).toBeVisible();
});
