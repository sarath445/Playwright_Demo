import { Given, Then, When } from "@cucumber/cucumber";
const {POmanager} = require('../../PageObjects/POmanager');
const{playwright} = require('@playwright/test');


Given("a login to Ecommerce application with {string} and {string}",async function(username, password){
   const browser = await playwright.chromium.launch();
   loginpage.goTo()
   loginpage.validLogin(username,password)
})

Then('verify {string} is displayed in the cart', async function(productName) {
    pagecart.getProductverification(productName);
   pagecart.checkOutbtn();
})

When('add {string} to cart', async function (productName) {
  const dashboardPage = this.pomanager.getDashboardpage();
  await dashboardPage.searchProduct(productName);
  await dashboardPage.navigateCart();

  // Write code here that turns the phrase above into concrete actions
})





