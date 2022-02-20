import { Given, When, Then } from "@wdio/cucumber-framework";
import HomePage from "../pageobjects/home.page"


// As a user, I want to be able to create a fruit on the homepage
Given(/^the user is at homepage$/, async () => {
    await HomePage.open();
});
When(/^the user creates fruit with name: (.+), color: (.+) and amount: (.+)$/, async (fruitName, color, amount) => {
    await HomePage.createFruit(fruitName, amount, color);
});
Then(/^the user sees a success message$/, async () => {
    const h3 = await $("div.toast-container ul li div div h3")
    expect(await h3.getText()).toBe("Fruta creada!")
});
Then(/^the user validates fruit with name: (.+), color: (.+) and amount: (.+) exists in list$/, async (fruitname, color, amount) => {
    const list = await HomePage.fruitsList;
});