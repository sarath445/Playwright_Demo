@web
Feature: BromcomeDemoValidation

    @test1
    Scenario: Navigating to Bromcom Primary MIS page
        Given a user navigates to Bromcom application
        When user hover on Products option and select Primary MIS option
        Then user lands on Bromcom Primary MIS page successfully
        And user clicks on Book a demo button on Bromcom Primary MIS page

    @test2
    Scenario: Navigating to Bromcom service page
        Given a user navigates to Bromcom application
        When user hover on Services option and select click Bromcom AI
        Then user clicks on Book a demo button on Bromcom service page