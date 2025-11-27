import { Given, Then, When } from "@cucumber/cucumber"; 

Given('a user navigates to Bromcom application', async function() {
    await bromcomHome.navigateToBromcomHome();
  // Write code here that turns the phrase above into concrete actions
})
When('user hover on Products option and select Primary MIS option', async function() {
    await bromcomHomeProduct.bromcomPrimaryMIS();
  // Write code here that turns the phrase above into concrete actions
})

Then('user lands on Bromcom Primary MIS page successfully', async function() {
    await bromcomHomeProduct.verifyNavigationUrl();
  // Write code here that turns the phrase above into concrete actions
})
