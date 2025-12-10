import { Given, setDefaultTimeout, Then, When } from "@cucumber/cucumber"; 

Given('a user navigates to Bromcom application', async function() {
    await bromcomHome.navigateToBromcomHome();
  // Write code here that turns the phrase above into concrete actions
})
When('user hover on Products option and select Primary MIS option', async function() {
    await bromcomHomeProduct.bromcomPrimaryMIS();
  // Write code here that turns the phrase above into concrete actions
})

Then('user lands on Bromcom Primary MIS page successfully',{timeout:10*1000}, async function() {
    await bromcomHomeProduct.verifyNavigationTitle();
  // Write code here that turns the phrase above into concrete actions
})

Then('user clicks on Book a demo button on Bromcom Primary MIS page',{timeout:10*1000}, async function() {
    await bromcomHomeProduct.bookDemoBromcom();
  // Write code here that turns the phrase above into concrete actions
})

When('user hover on Services option and select click Bromcom AI', async function() {
  // Write code here that turns the phrase above into concrete actions
  await bromcomHome.navigateToBromcomHome();
  await bromcomServices.bromcomServicesNavigation();

  
})

Then('user clicks on Book a demo button on Bromcom service page', async function() {
  await bromcomHomeProduct.bookDemoBromcom();
  // Write code here that turns the phrase above into concrete actions
})
