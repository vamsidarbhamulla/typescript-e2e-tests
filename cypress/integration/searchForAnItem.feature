@cucumber
@smoke
Feature: Search for an item
  To check an item price and add them to shopping cart
  as an online customer
  user should be able to search for an item

  Scenario: Search available product from navigation-menu
    Given that Sarah wants to buy Converse
    When she searches for Converse using the navigation menu
    Then she should see the list of Converse with prices available for sale

  @negative
  Scenario: Search unavailable product from navigation-menu
    Given that Saran wants to buy books
    When she searches for books using the navigation menu
    Then she should see the message of no products were found


  Scenario Outline: Search available <item> with a keyword
    Given that Sarah wants to buy an item
    When she searches for <item> using the navigation menu
    Then she should see the list of <item> with prices available for sale

    Examples:
      | item     |
      | camera  |
      | speaker |
      | watch |