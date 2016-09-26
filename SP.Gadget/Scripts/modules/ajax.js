/// <reference path="_references.js" />

include("modules.ajax", [], function () {
    // simple module defenition
    return proto(function () {
        var self = {};
        var e = new Events();
        
        this.Get = function (args) {
            var $def = $.Deferred();


            return $def.promise();
        };

        this.Post = function (args) {
            var $def = $.Deferred();

            return $def.promise();
        };

        this.Put = function (args) {
            var $def = $.Deferred();

            return $def.promise();
        };

        this.Delete = function (args) {
            var $def = $.Deferred();

            return $def.promise();
        };

    })();
});