import { expect, Page } from "@playwright/test";

export class BromcomHome{
    readonly page;
    constructor(page: Page){
        this.page = page;
        
    }

    async navigateToBromcomHome(){
        await this.page.goto("https://bromcom.com/");
    }
}