import { test, expect } from "../fixtures/baseFixture";
import { THE_WASTE_LAND_FULL_HREF } from "../../contents/searchContent";

test("@poem Read poem", async ({ homePage, poemPage }) => {
  await homePage.navigateSpecificUrl(THE_WASTE_LAND_FULL_HREF);
  await expect(poemPage.theWasteLand).toBeVisible();
  await expect(poemPage.thePoet).toBeVisible();
  await expect(poemPage.poetBornYear).toBeVisible();
  await expect(poemPage.poetDeathYear).toBeVisible();
  await expect(poemPage.latinIntro).toBeVisible();
  await expect(poemPage.italianIntro).toBeVisible();
  const lines = poemPage.linesFromFirstTitle;
  for (const line of lines) {
    await expect(line).toBeVisible();
  }
  await expect(poemPage.note).toBeVisible();
  await expect(poemPage.moreByThisPoet).toBeVisible();
  await expect(poemPage.poetIntroduce).toBeVisible();
  //   await expect(poemPage.poetIntroduceLinkText).toBeVisible();
});
