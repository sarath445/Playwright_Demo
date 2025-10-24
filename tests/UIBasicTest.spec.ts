import { expect, test } from '@playwright/test';
import path from 'path';


test('First playwright test', async ({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    const userName = page.locator('#username');
    const signIn = page.locator("[type='submit']");
    const titles = page.locator(".card-body a");
      await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
      console.log(await page.title());
      //css   type and fill are do same thing
      await userName.fill('rahulshettyacademy');
      await page.locator("[type='password']").fill('learning');
      await signIn.click();
      //wait until this locator shown up page
     //  console.log(await page.locator("[style='block']").textContent());
     //  await expect(page.locator("[style*='block']")).toContainText("Incorrect");
      console.log(await titles.nth(0).textContent());     //finding the ist index
     const allTitles =  await titles.allTextContents();
     console.log(allTitles);


});

test('Page playwright test', async({page})=>{
     await page.goto("https://www.google.com/?zx=1758704463379&no_sw_cr=1");
     //get title - assertion
     console.log(await page.title());
     await expect(page).toHaveTitle("Google");

});

test.only('UI controls', async({page})=>{
     await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
     const userName = page.locator('#username');
     const signIn = page.locator("[value='Sign In']");
     const documentLink  = page.locator("[href*='documents-request']");
     const dropDown = page.locator("select.form-control");
     await dropDown.selectOption("Teacher");
     await page.locator(".radiotextsty").last().click();
     await page.locator("#okayBtn").click();
     console.log(await page.locator(".radiotextsty").last().isChecked());
     expect(page.locator(".radiotextsty").last()).toBeChecked();
     await page.locator("#terms").click();
     expect(await page.locator("#terms")).toBeChecked();
     await page.locator("#terms").uncheck();
     expect(await page.locator("#terms").isChecked()).toBeFalsy();
     await expect(documentLink).toHaveAttribute("class", "blinkingText");
     await page.pause();

})