import { Given, Then, When } from "@cucumber/cucumber";
import { POMmanager } from '../../PageObjects/POMmanager';
import { chromium } from '@playwright/test';


Given("a login to Ecommerce application with {string} and {string}",{timeout:10*1000},async function(username, password){
   const browser = await chromium.launch({headless:false,slowMo:200});
   const context = await browser.newContext();
   const page  = await context.newPage();
   this.poManager = new POMmanager(page);
   loginpage.goTo();
   loginpage.validLogin(username,password)
   
})

Then('verify {string} is displayed in the cart', async function(productName) {
    this.pagecart = global.pagecart;
    await pagecart.getProductverification(productName);
    await pagecart.checkOutbtn();
})

When('add {string} to cart', async function (productName) {
   this.dashboard = global.dashboardPage;      //it will give access to the dashboard page methods and properties.It is an example of
    await this.dashboard.searchProduct(productName);
    await this.dashboard.navigateCart();

  // Write code here that turns the phrase above into concrete actions
})





