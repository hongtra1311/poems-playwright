import { Page } from "@playwright/test";
import {
  APRIL_IS_THE_CRUELLEST_MONTH,
  APRIL_IS_THE_CRUELLEST_MONTH_SUMMARY,
  NO_RESULT,
  THE_WASTE_LAND,
  THE_WASTE_LAND_SUMMARY,
} from "../contents/searchContent";

export class SearchPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  get theWasteLand() {
    return this.page.getByRole("link", {
      name: THE_WASTE_LAND,
      exact: true,
    });
  }
  get theWasteLandDescription() {
    return this.page.getByText(THE_WASTE_LAND_SUMMARY, { exact: false });
  }

  get aprilIsTheCruelestMonth() {
    return this.page.getByRole("link", {
      name: APRIL_IS_THE_CRUELLEST_MONTH,
      exact: true,
    });
  }

  get aprilIsTheCruelestMonthDescription() {
    return this.page.getByText(APRIL_IS_THE_CRUELLEST_MONTH_SUMMARY, {
      exact: false,
    });
  }

  get noResult() {
    return this.page.getByText(NO_RESULT, { exact: false });
  }
}
