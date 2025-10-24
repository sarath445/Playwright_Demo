import { expect, test } from "@playwright/test";

test("Calendar validations", async({page})=>{

    const monthNumber = 8;
    const monthDate = "23";
    const year = "2026";
    const expectedList = [monthNumber,monthDate,year];
    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
    await page.locator(".react-date-picker__inputGroup").click();
    await page.locator(".react-calendar__navigation__label").click();
    await page.locator(".react-calendar__navigation__label").click();
    await page.getByText(year).click();
    await page.locator(".react-calendar__tile").nth(monthNumber-1).click();
    await page.locator("//abbr[contains(text(),'"+monthDate+"')]").click();
    const inputs = await page.locator(".react-date-picker__inputGroup__input");

    for(let i=0; i<expectedList.length; ++i){
        const value = await inputs.nth(i).inputValue();
        expect(value).toEqual(expectedList[i]);

    }

})