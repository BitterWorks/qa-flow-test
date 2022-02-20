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
To see the allure reports for your project, run .

### .env file
Sample `.env` file:
```.env
# Comma separated browsers. i.e: firefox,MicrosoftEdge
BROWSERS=chrome
# Frontend url in our system
BASE_URL=http://localhost:3000/
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
2. Autogenerate spec/test file for the `*.feature` file you just created (works for up to one variable per statment. This will only work for one variable per statement (TODO: PR to extension). If you have more than one variable use [tidy-gherkin](https://chrome.google.com/webstore/detail/tidy-gherkin/nobemmencanophcnicjhfhnjiimegjeo?hl=en-GB) instead):
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

If using **tidy-gherkin**, remove the `this.` keyword from the statement, import those statements and change functions to `async` functions:
```ts
// Go from this
this.Given(/^the user is at homepage$/, function (){
});
this.When(/^the user creates fruit with name: (.+), color: (.+) and amount: (.+)$/, function (fruitName, color, amount){
});
this.Then(/^the user sees a success message$/, function (){
});
this.Then(/^the user validates fruit with name: (.+), color: (.+) and amount: (.+) exists in list$/, function (fruitname, color, amount){
});

// To this
import { Given, Then, When } from "@wdio/cucumber-framework";

Given(/^the user is at homepage$/, async () => {
});
When(/^the user creates fruit with name: (.+), color: (.+) and amount: (.+)$/, async (fruitName, color, amount) => {
});
Then(/^the user sees a success message$/, async () => {
});
Then(/^the user validates fruit with name: (.+), color: (.+) and amount: (.+) exists in list$/, async (fruitname, color, amount) => {
});
```