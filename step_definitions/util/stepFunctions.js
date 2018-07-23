const TMobilePO = require('./TMobilePO.js');
const webdriver = require("selenium-webdriver");

class ElementHelper {

    constructor() {
        this.browser = this.createDriver();
    }

    createDriver() {
        const driver = new webdriver.Builder()
            .usingServer('http://localhost:4444/wd/hub')
            .withCapabilities(webdriver.Capabilities.chrome())
            .build();
        driver.manage().timeouts().implicitlyWait(20000);
        driver.manage().window().maximize();
        return driver;
    }

    getPageObjectElement(alias) {
        const selector = TMobilePO.elements[alias];
        return element(by.css(selector));

    }
}

module.exports = new ElementHelper();