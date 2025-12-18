import { Page } from "@playwright/test";

export class HomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  get signInLink() {
    return this.page.locator("a", { hasText: "Sign In" });
  }

  async navigate() {
    await this.page.goto(
      "https://petstore.octoperf.com/actions/Catalog.action"
    );
  }
}
