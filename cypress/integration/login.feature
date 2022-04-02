Feature: Login Feature

    Feature This feature is required for a user to log in.
    Background:
        Given A user opens the login page

    Scenario: Success Login
        When A user enter the username "standard_user"
        And A user enter the password "secret_sauce"
        And A user clicks on the login button
        Then A user will be logged in


    Scenario: Failed Login
        When A user enter the username "locked_out_user"
        And A user enter the password "secret_sauce"
        And A user clicks on the login button
        Then A user will "Epic sadface: Sorry, this user has been locked out." message


    Scenario: Incorrect Login
        When A user provides incorrect crednetials
            | username  | password     |
            | testUser  | secret_sauce |
            | testUser2 | secret_sauce |
        And A user clicks on the login button
        Then A user will "Epic sadface: Username and password do not match any user in this service" message


    Scenario: Incorrect Password
        When A user provides incorrect crednetials
            | username        | password |
            | standard_user   | test     |
            | locked_out_user | test123  |
        And A user clicks on the login button
        Then A user will "Epic sadface: Username and password do not match any user in this service" message
