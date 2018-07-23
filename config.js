"use strict";

const path = require('path');
const yargs = require('yargs').argv;

exports.config = {
    allScriptsTimeout: 200000,
    getPageTimeout: 200000,
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: [path.resolve('./features/*.feature')],
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    ignoreUncaughtExceptions: true,
    browser: 'chrome',
    disableChecks: true,
    cucumberOpts: {
        require: [path.resolve('./step_definitions/*.js')],
        ignoreUncaughtExceptions: true,
        format: 'json:./reports/report.json',
        tags: yargs.tag || '@all'
    },
    onPrepare: () => {
        browser.manage().window().maximize();
    }
};