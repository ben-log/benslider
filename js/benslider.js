(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.Benslider = factory());
}(this, (function () { 'use strict';
    var Benslider = (function () {
        function Benslider() {
            var benslider = this;
    
            // Init
            benslider.init();
    
            // Return app instance
            return benslider;
        }
    
        Benslider.prototype.constructor = Benslider;
        Benslider.prototype.init = function() {
            console.log('Initializing Benslider');
        }

        return Benslider;
    }());
    return Benslider;
})));