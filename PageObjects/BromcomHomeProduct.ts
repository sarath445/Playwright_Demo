import { expect, Page } from "@playwright/test";

export class BromcomHomeProduct {
  readonly page;
  constructor(page: Page) {
    this.page = page;
  }

  private readonly productsOption = `//a[normalize-space(text())='Products']`;
  private readonly primaryoption = `(//span[@class='text-black' and normalize-space(text())='Primary'])[1]`;
  private readonly primaryMISoption = `//a[normalize-space(text())='Primary School MIS']`;
  async bromcomPrimaryMIS() {
    await this.page.hover(this.productsOption);
    await this.page.hover(this.primaryoption);
    const URL = this.page.url();
    console.log(URL);
    expect(URL).toBe("https://bromcom.com/");

    await this.page.click(this.primaryMISoption);
    await this.page.waitForTimeout(500);
  }

  async verifyNavigationUrl() {
    console.log(await this.page.title());

    console.log("sucess");
  }
}
