import { Page } from "@playwright/test";
import {
  ITALIAN_INTRO,
  LATIN_INTRO,
  LINES_OF_FIRST_TITLE,
  MORE_BY_THIS_POET,
  note,
  POET_INTRODUCE,
  POET_INTRODUCE_LINK_TEXT,
  THE_WASTE_LAND,
  THE_WASTE_LAND_AUTHOR,
} from "../contents/poemDetailContent";

export class PoemPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  get theWasteLand() {
    return this.page.getByRole("heading", {
      name: THE_WASTE_LAND,
      exact: true,
    });
  }

  get thePoet() {
    return this.page.getByRole("link", {
      name: THE_WASTE_LAND_AUTHOR,
      exact: true,
    });
  }

  get poetBornYear() {
    return this.page.getByText("1888 – ", { exact: true });
  }

  get poetDeathYear() {
    return this.page.getByText("1965", { exact: true });
  }

  get latinIntro() {
    return this.page.getByText(LATIN_INTRO, { exact: false });
  }

  get italianIntro() {
    return this.page.getByText(ITALIAN_INTRO, { exact: false });
  }

  get linesFromFirstTitle() {
    const lineList = LINES_OF_FIRST_TITLE.map((line) =>
      this.page.getByText(line, { exact: false })
    );
    return lineList;
  }

  get note() {
    return this.page.getByText(note, { exact: false });
  }

  get moreByThisPoet() {
    return this.page.getByText(MORE_BY_THIS_POET, { exact: false });
  }

  get poetIntroduce() {
    return this.page.getByText(POET_INTRODUCE, { exact: false });
  }

  get poetIntroduceLinkText() {
    return this.page.getByRole("link", {
      name: POET_INTRODUCE_LINK_TEXT,
      exact: true,
    });
  }
}
