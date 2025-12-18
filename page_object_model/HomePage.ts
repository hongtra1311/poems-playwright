import { Page } from "@playwright/test";
import {
  ACADEMY_AMERICAN_POETS,
  AMERICAN_POETS_MAGAZINE,
  NATIONAL_POETRY_MONTH,
} from "../contents/homeContent";

export class HomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  get academyAmericanPoets() {
    return this.page.getByRole("link", {
      name: ACADEMY_AMERICAN_POETS,
      exact: true,
    });
  }
  get nationalPoetryMonth() {
    return this.page.getByRole("link", {
      name: NATIONAL_POETRY_MONTH,
      exact: true,
    });
  }
  get americanPoetsMagazine() {
    return this.page.getByRole("link", {
      name: AMERICAN_POETS_MAGAZINE,
      exact: true,
    });
  }

  async navigate() {
    await this.page.goto("https://poets.org/");
  }
}
