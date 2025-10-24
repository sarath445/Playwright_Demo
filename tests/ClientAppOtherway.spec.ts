import { expect, test } from "@playwright/test";


test.only("playwright test case", async({page})=>{
    //  const context = await browser.newContext();
    // const page = await context.newPage();
     const products = page.locator(".card-body");
     const productName = 'ZARA COAT 3';         //specific product which we want.
     const email = "qazwsx@gmail.com";
     const confirmMsg = " Thankyou for the order.";
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.getByPlaceholder("email@example.com").fill("qazwsx@gmail.com");
    await page.getByPlaceholder("enter your passsword").fill("Sobhs@123");
    await page.getByRole("button",{name:"Login"}).click();  
    await page.waitForLoadState('networkidle'); 
    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles);
    await page.locator(".card-body").filter({hasText:"ADIDAS ORIGINAL"}).getByRole("button",{name:" Add To Cart"}).click();
    await page.getByRole("listitem").getByRole("button",{name:"Cart"}).click();
    
    await expect(page.getByText("ADIDAS ORIGINAL")).toBeVisible();
    await page.getByRole("button",{name:"Checkout"}).click();
    await page.getByPlaceholder("Select Country").pressSequentially("ind");
    await page.getByRole("button",{name:"India"}).nth(1).click();
    await page.getByText("PLACE ORDER").click();
    await expect(page.getByText("Thankyou for the order.")).toBeVisible();

})