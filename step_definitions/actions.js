"use strict";
const { Then, When, Given } = require('cucumber');
const EC = protractor.ExpectedConditions;
const elementHelper = require('./util/stepFunctions.js');
const { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(60 * 1000);

When(/^I open "([^"]*)" url$/, (url) => {
    return elementHelper.browser.get(url);
});

When(/^I click "([^"]*)"$/, (alias) => {
    return elementHelper.getPageObjectElement(alias).click();
});

When(/^I click link "([^"]*)"$/, (linktext) => {
    return elementHelper.browser.findElement(by.linkText(linktext)).click();
});

When(/^I drag "([^"]*)" to "([^"]*)"$/, (element, target) => {
    return elementHelper.browser.actions().dragAndDrop(elementHelper.getPageObjectElement(element), 
    elementHelper.getPageObjectElement(target)).mouseUp().perform();
})

When(/^I wait until "([^"]*)" is present$/, (alias) => {
    const element = elementHelper.getPageObjectElement(alias);
    return elementHelper.browser.wait(EC.presenceOf(element), 10 * 1000);
});

When(/^I wait until "([^"]*)" is clickable$/, (alias) => {
    const element = elementHelper.getPageObjectElement(alias);
    return elementHelper.browser.wait(EC.elementToBeClickable(element), 10 * 1000);
});