/// <reference path="_references.js" />
/// <reference path="gadget/default.js" />

/*
    this is the loader for an instance of a gadget
    The web part loads, the page loads, and the gadget is loaded. 
    This function scopes it to specfic part of the dom, and 1 scope
    This will keep every instance of a gadget seperate from each other
*/
(function (dom) {
    var $gadget = $(dom).find(".gadget");
    var gadgetProto = $gadget.attr("data-gadget");

    include("gadget.instance", [ gadgetProto ], function (gadget) {
        gadget.init($gadget);
    });

})(document);