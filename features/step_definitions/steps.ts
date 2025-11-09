import { Given, Then, When } from "@cucumber/cucumber";
import { POMmanager } from '../../PageObjects/POMmanager';
import { chromium } from '@playwright/test';

let orderId : string;


Given("a login to Ecommerce application with {string} and {string}",{timeout:10*1000},async function(username, password){
   await loginpage.goTo();
   await loginpage.validLogin(username,password)
   
})

Then('verify {string} is displayed in the cart', async function(productName) {
    //this.pagecart = global.pagecart;
    await pagecart.getProductverification(productName);
    await pagecart.checkOutbtn();
})

When('add {string} to cart', async function (productName) {
   //this.dashboard = global.dashboardPage;      //it will give access to the dashboard page methods and properties.It is an example of
    await dashboardPage.searchProduct(productName);
    await dashboardPage.navigateCart();

  // Write code here that turns the phrase above into concrete actions
})

When('enter valid details and place the order',async function() {
    await orderPlace.countrySelection("Ind");
  // Write code here that turns the phrase above into concrete actions
})

Then('verify the success message {string}',async function(successMessage) {
      await orderPlace.verifyOrderSuccessMessage(successMessage);
  // Write code here that turns the phrase above into concrete actions
})

Then('user verify the order id is present in the order history page', async function() {
   orderId = await orderHistory.verifyOrderid();   //store orderId in a variable.
 
  // Write code here that turns the phrase above into concrete actions
})



Then('user ensures the orderid and details is present in the order summary page by clicking on the view button', async function() {
   await orderHistory.orderPageVerification(orderId);
  // Write code here that turns the phrase above into concrete actions
})







