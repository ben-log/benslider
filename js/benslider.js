/**
 * 
 *     ____                  ___     __         
 *    / __ )___  ____  _____/ (_)___/ /__  _____
 *   / __  / _ \/ __ \/ ___/ / / __  / _ \/ ___/
 *  / /_/ /  __/ / / (__  ) / / /_/ /  __/ /    
 * /_____/\___/_/ /_/____/_/_/\__,_/\___/_/     
 *
 * Version: 0.0.1
 * Author: HyoGyeong Ryu
 * Repo: http://github.com/ben-log/benslider
 * 
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.Benslider = factory());
}(this, (function () { 'use strict';
    const Benslider = (function () {
        function Benslider() {
            const benslider = this;
    
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