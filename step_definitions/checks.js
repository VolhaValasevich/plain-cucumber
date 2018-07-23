"use strict";
const {Then, When, Given} = require('cucumber');
const expect = require('chai').expect;
const elementHelper = require('./util/stepFunctions.js');

Then(/^Text of "([^"]*)" should( not)? contain "([^"]*)"$/, async (alias, notArg, textToContain) => {
    let element = elementHelper.getPageObjectElement(alias);
    let elementText = await element.getText();
    if (notArg) {
        return expect(elementText.indexOf(textToContain)).to.equal(-1);
    } else {
        return expect(elementText.indexOf(textToContain)).to.not.equal(-1);
    }
});

Then(/^Text of "([^"]*)" should( not)? equal "([^"]*)"$/, async (alias, notArg, text) => {
    let element = elementHelper.getPageObjectElement(alias);
    let elementText = await element.getText();
    if (notArg) {
        return expect(elementText).to.not.equal(text);
    } else {
        return expect(elementText).to.equal(text);
    }
});

Then(/^Page title should( not)? contain "([^"]*)"$/, async (notArg, text) => {
    let pageTitle = await elementHelper.browser.getTitle();
    if (notArg) {
        return expect(pageTitle.indexOf(text)).to.equal(-1);
    }
    else {
        return expect(pageTitle.indexOf(text)).to.not.equal(-1);
    }
});