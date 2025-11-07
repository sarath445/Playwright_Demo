import { expect, Page } from "@playwright/test";
export class OrderPlacePage{
    readonly page;
   // readonly countryOption;
    constructor(page:Page){
        this.page = page; 
    }
    
    async countrySelection(country:string){
        const countryOption = this.page.getByPlaceholder("Select Country"); 
        await countryOption.pressSequentially(country);
        await this.page.getByRole("button",{name:country}).nth(1).click();
        await this.page.getByText("PLACE ORDER").click();
       
    }
    async verifyOrderSuccessMessage(successMessage:string){
         await expect(this.page.getByText(successMessage)).toBeVisible();
    }

}

//  await page.getByPlaceholder("Select Country").pressSequentially("ind");
//     await page.getByRole("button",{name:"India"}).nth(1).click();
//     await page.getByText("PLACE ORDER").click();
//     await expect(page.getByText("Thankyou for the order.")).toBeVisible();