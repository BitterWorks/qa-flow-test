Feature: NavBar Title

    Scenario Outline: As a user, I can see the title of the website in the navbar.

        Given I open the browser and load the url <homepageUrl>
        Then I should see a title with text <titleText>

        Examples:
            | homepageUrl               | titleText |
            | http://localhost:37551/   | Frutapp   |