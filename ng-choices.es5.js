import { Component, Input, NgModule, ViewChild, ViewEncapsulation } from '@angular/core';
import Choices from 'choices.js';

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
        { type: Component, args: [{
                    selector: 'choices',
                    template: '<select #select></select>',
                    encapsulation: ViewEncapsulation.None,
                },] },
    ];
    /**
     * @nocollapse
     */
    ChoicesComponent.ctorParameters = function () { return []; };
    ChoicesComponent.propDecorators = {
        'options': [{ type: Input },],
        'selectRef': [{ type: ViewChild, args: ['select',] },],
    };
    return ChoicesComponent;
}());

var ChoicesModule = (function () {
    function ChoicesModule() {
    }
    ChoicesModule.decorators = [
        { type: NgModule, args: [{
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

export { ChoicesComponent, ChoicesModule };
//# sourceMappingURL=ng-choices.es5.js.map
