import test from "@playwright/test";

test('demo test', async ({page})=>{
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
const[newPage]=await Promise.all([
    page.waitForEvent('popup'),
await page.click(`//a[.='OrangeHRM, Inc']`)
])
await newPage.screenshot({path:'screenshot/orangehrm.png'})
await page.bringToFront()
await page.pause()

})