
Feature: Log in

Scenario: Register User
    Given The user goes to the main page
    When The user clicks on the Signup-Login button
    Then The login page is opened
    And  The New User Signup! is visible
    When The user enter name and email address
    And The user clicks on the Signup button
    Then The ENTER ACCOUNT INFORMATION is visible
    When The user fills details: Title, Name, Email, Password, Date of birth
    And The user fills details: First name, Last name, Address, Country, State, City, Zipcode, Mobile Number
    And The user clicks on the Create Account button
    Then The ACCOUNT CREATED! is visible
    When The user clicks Continue button
    Then The Logged in as username is visible

Scenario: Login User with correct email and password    
    Given The user goes to the main page
    When The user clicks on the Signup-Login button
    Then The login page is opened
    And  The Login to your account is visible
    When The user enter correct email and correct password
    And The user clicks on the Login button
    Then The Logged in as username is visible

Scenario: Login User with incorrect email and password    
    Given The user goes to the main page
    When The user clicks on the Signup-Login button
    Then The login page is opened
    And  The user enter incorrect email and incorrect password
    And The user clicks on the Login button
    Then The notification about incorrect email is displayed

Scenario: Logout User
    Given The user goes to the main page
    When The user clicks on the Signup-Login button
    Then The login page is opened
    And  The Login to your account is visible
    When The user enter correct email and correct password
    And The user clicks on the Login button
    Then The Logged in as username is visible
    When The user clicks on the Logout button
    Then The user is logged out

Scenario: Register User with existing email
    Given The user goes to the main page
    When The user clicks on the Signup-Login button
    Then The login page is opened
    And  The New User Signup! is visible
    When The user enter name and exist email address
    And The user clicks on the Signup button
    Then The notification about existing email is displayed






 