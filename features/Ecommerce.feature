Feature: Ecommerce validation

  Scenario: Placing an order and verifying in order history
    Given a login to Ecommerce application with "qazwsx@gmail.com" and "Sobhs@123"
    When add "ZARA COAT 3" to cart
    Then verify "ZARA COAT 3" is displayed in the cart
    When enter valid details and place the order
    Then verify the success message "Thankyou for the order."
    Then user verify the order id is present in the order history page
    Then user ensures the orderid and details is present in the order summary page by clicking on the view button
    # Then verify order is present in the order history page
