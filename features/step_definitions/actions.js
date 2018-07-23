"use strict";
const { Then, When, Given } = require('cucumber');
const elementHelper = require('./util/ElementHelper');
const by = elementHelper.by;
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

When(/^I wait until "([^"]*)" is( not)? present$/, (alias, notArg) => {
    const element = elementHelper.getPageObjectElement(alias);
    if (notArg) {
        return elementHelper.browser.wait(elementHelper.until.elementIsNotVisible(element), 10 * 1000);
    } else {
        return elementHelper.browser.wait(elementHelper.until.elementIsVisible(element), 10 * 1000);
    }
});

When(/^I wait "([^"]*)" seconds$/, (seconds) => {
    return elementHelper.browser.sleep(seconds * 1000);
});