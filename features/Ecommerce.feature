Feature: Ecommerce validation

   Scenario: placing the order
      Given a login to Ecommerce application with "qazwsx@gmail.com" and "Sobhs@123"
      When  add "zara coat 3" to cart
      Then verify "zara coat 3" is displayed in the cart
      #When enter valid details and place the order
      #Then verify order is present in the the order history page

   