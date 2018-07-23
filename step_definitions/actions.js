"use strict";
const { Then, When, Given } = require('cucumber');
const EC = protractor.ExpectedConditions;
const elementHelper = require('./util/stepFunctions.js');
const { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(60 * 1000);

When(/^I open "([^"]*)" url$/, (url) => {
    return browser.get(url);
});

When(/^I click "([^"]*)"$/, (alias) => {
    return elementHelper.getPageObjectElement(alias).click();
});

When(/^I click link "([^"]*)"$/, (linktext) => {
    return element(by.linkText(linktext)).click();
});

When(/^I drag "([^"]*)" to "([^"]*)"$/, (element, target) => {
    return browser.actions().dragAndDrop(elementHelper.getPageObjectElement(element), elementHelper.getPageObjectElement(target)).mouseUp().perform();
})

When(/^I wait until "([^"]*)" is present$/, (alias) => {
    const element = elementHelper.getPageObjectElement(alias);
    return browser.wait(EC.presenceOf(element), 10 * 1000);
});

When(/^I wait until "([^"]*)" is clickable$/, (alias) => {
    const element = elementHelper.getPageObjectElement(alias);
    return browser.wait(EC.elementToBeClickable(element), 10 * 1000);
});