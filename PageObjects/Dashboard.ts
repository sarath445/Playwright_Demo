import { Page } from "@playwright/test";

export class Dashboard{
   readonly productTitle;
   readonly products;
   readonly cart;
   readonly page;
    constructor(page:Page){
        this.page = page;
        this.productTitle = page.locator(".card-body b");
        this.products = page.locator(".card-body");
        this.cart = page.getByRole("listitem").getByRole("button",{name:"Cart"});
    }

    async searchProduct(productName:string){
         const titles = await this.productTitle.allTextContents();
         console.log(titles);
         const counts = await this.products.count();
    //searching the productname then iterate and click.
    for(let i = 0; i<counts; ++i){
        if(await this.products.nth(i).locator("b").textContent()===productName){
            //add to cart
            await this.products.nth(i).locator("text=Add to Cart").click();
            break;
        }
}
    }

    async navigateCart(){
        await this.cart.click();

    }
}