Feature: Carbon application add user to user store functionality.

    @focus
    Scenario: Add user with valid user name.
        Given I am logged into carbon application with default user credentials
        And I click on carbon side bar "Main > User and Roles > Add" button
        And I click on add new user button
        And I create a random text with "Alphabetics Numbers" length 8 and store it on "USERNAME_TEMP"
        And I create a random text with "Alphabetics Numbers" length 8 and store it on "PASSWORD_TEMP"
        And I enter username as "$:USERNAME_TEMP:$"
        And I enter password as "$:PASSWORD_TEMP:$"
        And I enter confirm password as "$:PASSWORD_TEMP:$"
        And I click next button
        Then I land on "$:CARBON_APP_USER_ADD_STEP_TWO_URL:$"

    @focus
    Scenario: Add user with invalid user name.
        Given I am logged into carbon application with default user credentials
        And I click on carbon side bar "Main > User and Roles > Add" button
        And I click on add new user button
        And I create a random text with "Alphabetics Numbers Spaces" length 8 and store it on "USERNAME_TEMP"
        And I create a random text with "Alphabetics Numbers" length 8 and store it on "PASSWORD_TEMP"
        And I enter username as "$:USERNAME_TEMP:$"
        And I enter password as "$:PASSWORD_TEMP:$"
        And I enter confirm password as "$:PASSWORD_TEMP:$"
        And I click next button
        Then I see a warning box with content "$:PATTER_POLICY_VIOLATED_WARNING_MESSAGE:$"

    @focus
    Scenario: Add user with very small user name.
        Given I am logged into carbon application with default user credentials
        And I click on carbon side bar "Main > User and Roles > Add" button
        And I click on add new user button
        And I create a random text with "Alphabetics Numbers" length 1 and store it on "USERNAME_TEMP"
        And I create a random text with "Alphabetics Numbers" length 8 and store it on "PASSWORD_TEMP"
        And I enter username as "$:USERNAME_TEMP:$"
        And I enter password as "$:PASSWORD_TEMP:$"
        And I enter confirm password as "$:PASSWORD_TEMP:$"
        And I click next button
        Then I see a warning box with content "$:PATTER_POLICY_VIOLATED_WARNING_MESSAGE:$"
