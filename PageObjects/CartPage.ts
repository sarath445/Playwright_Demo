import { expect, Page } from "@playwright/test";


export class CartPage{
   readonly page;
   readonly checkOut;
    constructor(page:Page){
      this.page = page;
      this.checkOut = page.getByRole("button",{name:"Checkout"});

      }

      async getProductverification(productName:string){
          const productLocator = this.page.getByText(productName);
          expect(productLocator).toBeVisible();
        
       }
      async checkOutbtn(){
        await this.checkOut.click();
      }
}
 