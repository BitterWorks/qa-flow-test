# WebdriverIO containerized e2e testing template

## Start new project
1. Clone this repo
2. Run npm i
3. Start containers
```
docker-compose up -d
```

## Configuration
### Allure Reports
To see the allure reports for your project, go to `http://localhost:5050/allure-docker-service/projects/default/reports/latest/index.html`.

### .env file
Sample `.env` file:
```.env
# Comma separated browsers. i.e: firefox,MicrosoftEdge
BROWSERS=chrome
# Selenium Hub port
HUB_PORT=4444
# Name of the host
HOSTNAME=localhost
# Base url to make tests against
BASE_URL=http://localhost
```

## Run tests
```sh
npm run wdio
```

## Make tests
1. Create a user story file with params using the `.feature` extension right under the `/features/` dir:
```.feature
Feature: NavBar Title

    Scenario Outline: As a user, I can see the title of the website in the navbar.

        Given I open the browser and load the url <homepageUrl>
        Then I should see a title with text <titleText>

        Examples:
            | homepageUrl               | titleText |
            | http://localhost:37551/   | Frutapp   |
```
2. Autogenerate spec/test file for the `*.feature` file you just created (works for up to one variable per statment, if you have more than one variable use [tidy-gherkin](https://chrome.google.com/webstore/detail/tidy-gherkin/nobemmencanophcnicjhfhnjiimegjeo?hl=en-GB) instead):
```sh
npm run autogen
```
3. Modify imports:
```ts
// Change this
import { Given, Then } from "cucumber";

// To This
import { Given, Then } from "@wdio/cucumber-framework";
```
4. Add `async` keyword to arrow functions.