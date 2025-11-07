import { expect, Page } from "@playwright/test";
import { promises } from "dns";
export class OrderHistoryPage{
    readonly page;
    constructor(page:Page){
        this.page = page;
    }

    async verifyOrderid(): Promise<string>{
        const orderIdText = await this.page.locator(".em-spacer-1 .ng-star-inserted").textContent();
        const orderId = orderIdText?.trim() || "";    //printing the order id.
        console.log("Order ID after placing order:", orderId);
        return orderId;
    }

    async orderPageVerification(orderId: string): Promise<void>{
        await this.page.getByRole('button',{name: 'ORDERS'}).click();

        //let input = "| tfytgy7 |";
        let replacedOrderId = orderId.replace(/\||\s/g, "");
        console.log(replacedOrderId); // Output: tfytgy7


        const viewBtn = `//th[text()='${replacedOrderId}']/parent::tr/td/button[text()='View']`
        //   const orders = this.page.locator("tbody tr th"); // adjust selector if different
        //   const rows = await orders.count();
        //   for(let i=0; i<rows; ++i){
        //     const rowOrderId = (await orders.nth(i).locator("th").textContent());   //getting all the text of the orders and store in a variable.
        //      if(rowOrderId&&orderId?.includes(rowOrderId)){
        //          await orders.nth(i).locator("button").first().click();
        //         //break;
        //      }
        // }
        await this.page.locator(viewBtn).click();
        
        const orderDetails = await this.page.locator(".col-text.-main").textContent();
        expect(orderDetails).toBe(replacedOrderId);


    }
    
}
