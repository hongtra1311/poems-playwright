import { Page } from "@playwright/test";
import { THE_WASTE_LAND } from "../contents/searchContent";

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
}
