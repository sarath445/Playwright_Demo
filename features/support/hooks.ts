  import { After, AfterStep, Before, BeforeStep, setDefaultTimeout, Status } from "@cucumber/cucumber";
  import { chromium } from '@playwright/test';
  import { POMmanager } from '../../PageObjects/POMmanager';

  let browser:any;    //dynamically typed variable.
  setDefaultTimeout(60 * 1000); // 60 seconds
  Before("@web",async function({pickle}){
    console.log("before hooks Test started");
      browser = await chromium.launch({headless:false,slowMo:200});  //slows down the execution by 200ms
        const context = await browser.newContext();
        this.page  = await context.newPage();
        this.poManager = new POMmanager(this.page);
        console.log('Scenario Name: '+pickle.name);
  });

  BeforeStep(async function({pickle,pickleStep}){
    //console.log("Before step execution")
    const scenariosName = pickle.name;
    console.log('Step executing ==> '+pickleStep.text);
  });

  AfterStep(async function({result}){
    //console.log("After step execution")
    if(result?.status===Status.PASSED){
        const screenshot =await this.page.screenshot({path:'screenshot1.png'});
        this.attach(screenshot,'image/png');
        
  }
      else{
        const screenshot = await this.page.screenshot({path:'screenshot2.png'});
        this.attach(screenshot,'image/png');
      }
  })

  After(async function(){
      console.log("Test completed successfully");
        await browser?.close();
  }
  )