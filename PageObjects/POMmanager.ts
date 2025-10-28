import { Page } from "@playwright/test";
import { Dashboard } from "./Dashboard";
import { LoginPage } from "./LoginPage";
import { CartPage } from "./CartPage";


export class POMmanager{
    readonly page;
   
    constructor(page:Page){
         this.page = page;
         global.loginpage = new LoginPage(this.page);
         global.dashboardPage = new Dashboard(this.page);
         global.pagecart = new CartPage(this.page);
    }

   }

declare global
    {
        var pagecart : CartPage;
        var loginpage: LoginPage;
        var dashboardPage: Dashboard;
    }






 // readonly loginpage;
    // readonly dashboardPage;
    // readonly pagecart;

     // getLoginpage(){
    //     return this.loginpage;
    // }

    // getDashboardpage(){
    //     return this.dashboardPage;
    // }
    // getCartpage(){
    //     return this.pagecart;
    // }