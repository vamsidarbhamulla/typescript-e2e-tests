@cucumber
@smoke
Feature: Contact
  To Contact customer support
  as an online customer
  user should be able to find contact information

  @dataTable
  Scenario: User should see contact information
    Given that Carla wants to contact team
    When she open the contact menu option
    Then she should see the contact information
      | contactType |      contactValue|
      | Address      | Moon Street , 446 Jupiter, JP 44600 |
      | Email        | zakra@demos.com\nfirst.last@demos.com |
      | Phone        | Call : +(123) 456-7890\nCall : +977 123-456789 |
      | Time         | Monday - Saturday : 9AM - 6 PM\nSunday : Closed|

  Scenario: User should send send a message to contact team
    Given that Kayla wants to send a message to contact team
    When she open the contact menu option
    Then she should be able to submit the message
