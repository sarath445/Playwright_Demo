import { expect, test } from '@playwright/test';


test.only('ODBM test', async ({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
     await page.goto("https://www.odbm.org/en/");
     console.log(await page.title());
     await expect(page).toHaveTitle("Our Daily Bread Ministries");
     await page.locator("//span[text()='Devotionals']").hover();
      const myUtmost = await page.locator("//span[contains(text(),'My Utmost For His Highest')]");
    const allpages = context.pages();
   
  //window handling...   
const [newPage]= await Promise.all([
    context.waitForEvent('page'),
    myUtmost.click(),

]);
//wait for the new page to load completely
await newPage.waitForLoadState();
//await page.locator("//header[contains(@class,'active')]//nav[@aria-label='Menu' and contains(@class,'elementor-nav-menu--main')]/ul//span[text()='Explore']").click();
await newPage.getByRole('link', { name: 'Explore' }).click();
await newPage.locator("input.facetwp-search").fill("prayer");
await newPage.locator("input.facetwp-search").press("Enter");    //entering the search keyword.



})
    
