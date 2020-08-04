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

    function getDocument() {
        var doc = typeof document !== 'undefined' ? document : {};
        return doc;
    }

    const Utils = (function() {
        function Utils() {
            const utils = this;
            return utils;
        }

        // $.extend({}, objA, objB);
        Utils.prototype.extend = function(out) {
            out = out || {};

            for (var i = 1; i < arguments.length; i++) {
                if (!arguments[i])
                continue;

                for (var key in arguments[i]) {
                if (arguments[i].hasOwnProperty(key))
                    out[key] = arguments[i][key];
                }
            }
            return out;
        };

        return Utils;
    }());

    const defaultOptions = {
        init: true,
        width: null,
        height: null
    };

    const Benslider = (function () {
        function Benslider() {
            const benslider = this;
            let el;
            let params;

            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            if (args.length === 1 && args[0].constructor && args[0].constructor === Object) {
                params = args[0];
            } else {
                el = args[0];
                params = args[1];
            }

            if (!params) params = {};
            params = utils.extend({}, defaultOptions, params);
            if (el && !params.el) params.el = el;

            benslider.params = params;
            benslider.initialized = false;

            // Init
            if (benslider.params.init) {
                benslider.init();
            }

            // Return app instance
            return benslider;
        }

        // Use utils
        const utils = new Utils();

        Benslider.prototype.constructor = Benslider;

        Benslider.prototype.init = function() {
            const benslider = this;
            let document = getDocument();
            if (benslider.initialized) return;
            try {
                if (!document.querySelector(benslider.params.el)) {
                    throw new ReferenceError("Initialized failed: \'" + benslider.params.el + "\' is not founded.");
                }
                benslider.initialized = true;
                console.info('Ready to Benslider, options: \n', benslider.params);
            } catch(e) {
                console.error(e);
            }
        }

        return Benslider;
    }());

    return Benslider;
})));