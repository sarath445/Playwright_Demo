import { expect, test } from "@playwright/test";
import { text } from "stream/consumers";
import { POMmanager } from "../PageObjects/POmanager";

test.only('First CLient Test', async ({page})=>{
   
    // const context = await browser.newContext();
    // const page = await context.newPage();
    new POMmanager(page);
     const products = page.locator(".card-body");
     const productName = 'ZARA COAT 3';         //specific product which we want.
     const email = "qazwsx@gmail.com";
     const passsword = "Sobhs@123"
     const confirmMsg = " Thankyou for the order.";
    
    //  const loginpage = pomanager.getLoginpage();
    //  const dashboardPage = pomanager.getDashboardpage();
    //  const pagecart = pomanager.getCartpage();
     
      await loginpage.goTo();
      await loginpage.validLogin(email, passsword);
      await dashboardPage.searchProduct(productName);
      await dashboardPage.navigateCart();
      await pagecart.getProductverification(productName);
      await pagecart.checkOutbtn();


    
    
    //await page.locator(".card-body b").first().waitFor();
   
 //await page.locator("div li").first().waitFor();
//  await page.waitForSelector("h3:has-text('ZARA COAT 3')");
//  await expect(page.locator("h3:has-text('ZARA COAT 3')")).toBeVisible();
//  await page.locator("text=Checkout").click();
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
 expect(orderDetails).toBe(orderId);

//  const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
//  expect(bool).toBeTruthy();
 await page.pause();

})