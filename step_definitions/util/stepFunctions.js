const TMobilePO = require('./TMobilePO.js');

class ElementHelper {

    getPageObjectElement(alias) {
        const selector = TMobilePO.elements[alias];
        return element(by.css(selector));

    }
}

module.exports = new ElementHelper();