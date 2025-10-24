import { expect, test } from "@playwright/test";
import { text } from "stream/consumers";

test.only('First CLient Test', async ({browser})=>{
   
    const context = await browser.newContext();
    const page = await context.newPage();
     const products = page.locator(".card-body");
     const productName = 'ZARA COAT 3';         //specific product which we want.
     const email = "qazwsx@gmail.com";
     const confirmMsg = " Thankyou for the order.";
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.locator('#userEmail').fill('qazwsx@gmail.com');
    await page.locator('#userPassword').fill('Sobhs@123');
    await page.locator("[value ='Login']").click();
    await page.waitForLoadState('networkidle');     //use this method for waiting until the network is stable
    //await page.locator(".card-body b").first().waitFor();
    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles);
    const counts = await products.count();
    //searching the productname then iterate and click.
    for(let i = 0; i<counts; ++i){
        if(await products.nth(i).locator("b").textContent()===productName){
            //add to cart
            await products.nth(i).locator("text=Add to Cart").click();
            break;
        }
}
 await page.getByRole('button', { name: '   Cart' }).click();
 //await page.locator("div li").first().waitFor();
 await page.waitForSelector("h3:has-text('ZARA COAT 3')");
 await expect(page.locator("h3:has-text('ZARA COAT 3')")).toBeVisible();
 await page.locator("text=Checkout").click();
 await page.locator("//input[@placeholder='Select Country']").pressSequentially("ind",{delay:100}); 
 const dropdown = page.locator(".ta-results");
 await dropdown.waitFor();
 const optionsCount = await dropdown.locator("button").count();
 for(let i =0; i<optionsCount; ++i){
    const text = await dropdown.locator("button").nth(i).textContent();
    if(text?.trim() ==="India"){
        await dropdown.locator("button").nth(i).click();
        break;
    }
 }
 await expect(page.locator(".user__name [type='text']").first()).toHaveText(email);  //verification of the text on the screen.
 await page.locator(".action__submit ").click();
 await expect(page.locator(".hero-primary")).toHaveText(confirmMsg);
 const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
 console.log(orderId);
 await page.getByRole('button',{name:'ORDERS'}).click();
 await page.locator("tbody").waitFor();
 //picking table id in orders and verify it after place the order.
 const rows = await page.locator("tbody tr");  
 for(let i=0; i<await rows.count(); ++i){
    const rowOrderId = await rows.nth(i).locator("th").textContent();   //getting all the text of the orders and store in a variable.
    if(rowOrderId&&orderId?.includes(rowOrderId)){
        await rows.nth(i).locator("button").first().click();
        break;
    }
 }
 const orderDetails = await page.locator(".col-text.-main").textContent();
 expect(orderId===orderDetails).toBeTruthy();

//  const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
//  expect(bool).toBeTruthy();
 await page.pause();

})