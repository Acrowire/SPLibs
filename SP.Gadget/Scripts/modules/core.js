/// <reference path="_references.js" />

include("modules.core", [], function () {
    // simple module defenition
    return proto(function () {
        this.init = function (dom) {
            this.Dom = $(dom);
        }
    })();
});