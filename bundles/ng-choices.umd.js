(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('choices.js')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', 'choices.js'], factory) :
	(factory((global.ngChoices = global.ngChoices || {}),global.ng.core,global.Choices));
}(this, (function (exports,_angular_core,Choices) { 'use strict';

Choices = 'default' in Choices ? Choices['default'] : Choices;

var ChoicesComponent = (function () {
    function ChoicesComponent() {
        this.onChange = function (_) { };
        this.onTouched = function () { };
    }
    /**
     * @return {?}
     */
    ChoicesComponent.prototype.ngOnDestroy = function () {
        this.choicesRef.destroy();
    };
    /**
     * @return {?}
     */
    ChoicesComponent.prototype.ngAfterViewInit = function () {
        this.choicesRef = new Choices(this.selectRef.nativeElement, this.options);
    };
    Object.defineProperty(ChoicesComponent.prototype, "value", {
        /**
         * @return {?}
         */
        get: function () {
            return this.innerValue;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            if (this.innerValue !== value) {
                this.innerValue = value;
                this.onChange(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ChoicesComponent.prototype.touch = function () {
        this.onTouched();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ChoicesComponent.prototype.writeValue = function (value) {
        this.innerValue = value;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ChoicesComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ChoicesComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    ChoicesComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'choices',
                    template: '<select #select></select>',
                    encapsulation: _angular_core.ViewEncapsulation.None,
                },] },
    ];
    /**
     * @nocollapse
     */
    ChoicesComponent.ctorParameters = function () { return []; };
    ChoicesComponent.propDecorators = {
        'options': [{ type: _angular_core.Input },],
        'selectRef': [{ type: _angular_core.ViewChild, args: ['select',] },],
    };
    return ChoicesComponent;
}());

var ChoicesModule = (function () {
    function ChoicesModule() {
    }
    ChoicesModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    declarations: [ChoicesComponent],
                    exports: [ChoicesComponent],
                },] },
    ];
    /**
     * @nocollapse
     */
    ChoicesModule.ctorParameters = function () { return []; };
    return ChoicesModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

exports.ChoicesComponent = ChoicesComponent;
exports.ChoicesModule = ChoicesModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-choices.umd.js.map
