/// <reference path="_references.js" />
/// <reference path="../modules/core.js" />
/// <reference path="../modules/ajax.js" />


include("gadget.default", ["modules.core","modules.ajax"], function (core, ajax) {
    var gadget = {
        core: core,
        ajax: ajax,
        dom: $({})
    };

    gadget.init = function (dom) {
        this.dom = dom;
    };

    return gadget;
});