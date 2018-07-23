@all
Feature: Mobile Store

    @store
    Scenario Outline: User can search for the most popular phone of a certain manufacturer and view its page
        Given I open "https://www.t-mobile.com/" url
        When I click link "PHONES"
        And I click "Filter Button"
        And I wait until "<Manufacturer> Checkbox" is clickable
        And I click "<Manufacturer> Checkbox"
        And I click "First Search Result"
        Then Page title should contain "<Phone Name>"

        Examples:
            | Manufacturer | Phone Name        |
            | Apple        | Apple iPhone X    |
            | LG           | LG G7 ThinQ       |
            | Samsung      | Samsung Galaxy S9 |
