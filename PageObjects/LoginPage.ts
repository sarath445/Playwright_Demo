import { expect, Page, test } from "@playwright/test";
export class LoginPage{
    readonly signinButton;
    readonly userName;
    readonly passWord;
    readonly page;
    constructor(page:Page){
        this.page = page;
         this.userName =  page.locator('#userEmail');
        this.signinButton = page.locator("[value ='Login']");
        this.passWord =  page.locator('#userPassword');

        }

        async goTo(){
            await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login");
        }

    async validLogin(username:string, password:string){
        await this.userName.fill(username);
        await this.passWord.fill(password);   
        await this.signinButton.click(); 
        await this.page.waitForLoadState('networkidle');     //use this method for waiting until the network is stable
    }
}