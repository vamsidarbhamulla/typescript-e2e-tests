@cucumber
@smoke
Feature: Upload a File
  To upload a file to shopping cart
  as an online customer
  user should be able to check for a successful file uploaded

  Scenario: User uploads an image file successfully
    Given that Fowler wants to upload a file
    When he selects a file file1.png to upload
    Then he should see the message file1.png file uploaded successfully

  @negative
  Scenario: User uploads binary file to see the upload failed
    Given that Frank wants to upload a file
    When he selects a file file5.bin to upload
    Then he should see the message file5.bin file not uploaded


  Scenario Outline: User uploads <file> successfully
    Given that Fowler wants to upload a file
    When he selects a file <file> to upload
    Then he should see the message <file> file uploaded successfully

    Examples:
      | file     |
      | file2.jpeg |
      | file3.pdf |
      | file4.txt |