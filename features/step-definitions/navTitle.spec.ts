import { Given, Then } from "@wdio/cucumber-framework";

// As a user, I can see the title of the website in the navbar.
Given(/^I open the browser and load the url (.*)$/, async (homepageUrl) => {
    await browser.url(homepageUrl);
    await browser.maximizeWindow();
});

Then(/^I should see a title with text (.*)$/, async (titleText) => {
    const header = await $('#navTitle');
    expect(await header.getText()).toEqual(titleText);
});