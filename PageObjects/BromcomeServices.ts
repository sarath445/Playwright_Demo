import { expect, Page }  from "@playwright/test";

export class BromcomServices {
    readonly page;

    constructor(page: Page){
        this.page = page;

    }
     private readonly servicesOption = `(//a[normalize-space(text())='Services'])[1]`;
     private readonly bromAIoption = `(//span[normalize-space(text())='Bromcom AI'])[1]`;


     async bromcomServicesNavigation(){
        await this.page.hover(this.servicesOption);
        await this.page.click(this.bromAIoption);
        await this.page.waitForTimeout(500);
        
}
}