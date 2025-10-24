import { Page } from "@playwright/test";
import { Dashboard } from "./Dashboard";
import { LoginPage } from "./LoginPage";
import { CartPage } from "./cartPage";


export class POMmanager{
    readonly page;
    // readonly loginpage;
    // readonly dashboardPage;
    // readonly pagecart;
    constructor(page:Page){
         this.page = page;
         global.loginpage = new LoginPage(this.page);
         global.dashboardPage = new Dashboard(this.page);
         global.pagecart = new CartPage(this.page);
    }

    // getLoginpage(){
    //     return this.loginpage;
    // }

    // getDashboardpage(){
    //     return this.dashboardPage;
    // }
    // getCartpage(){
    //     return this.pagecart;
    // }

    
}

declare global
    {
        var pagecart : CartPage;
        var loginpage: LoginPage;
        var dashboardPage: Dashboard;
    }