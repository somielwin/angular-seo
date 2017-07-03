"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var Ang4SeoPage = (function () {
    function Ang4SeoPage() {
    }
    Ang4SeoPage.prototype.navigateTo = function () {
        return protractor_1.browser.get('/');
    };
    Ang4SeoPage.prototype.getParagraphText = function () {
        return protractor_1.element(protractor_1.by.css('app-root h1')).getText();
    };
    return Ang4SeoPage;
}());
exports.Ang4SeoPage = Ang4SeoPage;
//# sourceMappingURL=app.po.js.map