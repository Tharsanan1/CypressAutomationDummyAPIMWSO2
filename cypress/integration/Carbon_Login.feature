Feature: Carbon application login functionality

  @focus
  Scenario: Login with valid credentials.
    When I navigate to "$:CARBON_APPLICATION_LOGIN_PAGE_URL:$"
    And I enter usename as "$:VALID_USERNAME_CARBON_APP_1:$"
    And I enter password as "$:VALID_PASSWORD_CARBON_APP_1:$"
    And I click Sign-in button
    Then I land on "$:CARBON_APP_HOME_PAGE_URL:$"

  @focus
  Scenario: Try to login without enterning username and password
    When I navigate to "$:CARBON_APPLICATION_LOGIN_PAGE_URL:$"
    And I click Sign-in button
    Then I see a warning box with content "$:EMPTY_USERNAME_AND_PASSWORD_WARNING_MESSAGE:$"

  @focus
  Scenario: Try to login without enterning password
    When I navigate to "$:CARBON_APPLICATION_LOGIN_PAGE_URL:$"
    And I enter password as "$:VALID_PASSWORD_CARBON_APP_1:$"
    And I click Sign-in button
    Then I see a warning box with content "$:EMPTY_PASSWORD_WARNING_MESSAGE:$"

  @focus
  Scenario: Try to login without enterning username and password
    When I navigate to "$:CARBON_APPLICATION_LOGIN_PAGE_URL:$"
    And I enter usename as "$:VALID_USERNAME_CARBON_APP_1:$"
    And I click Sign-in button
    Then I see a warning box with content "$:EMPTY_USERNAME_AND_PASSWORD_WARNING_MESSAGE:$"

  @focus
  Scenario: Try to login with invalid credentials
    When I navigate to "$:CARBON_APPLICATION_LOGIN_PAGE_URL:$"
    And I enter usename as "$:INVALID_USERNAME_CARBON_APP_1:$"
    And I enter password as "$:INVALID_PASSWORD_CARBON_APP_1:$"
    And I click Sign-in button
    Then I see a warning box with content "$:INVALID_CREDENTIALS_WARNING_MESSAGE:$"