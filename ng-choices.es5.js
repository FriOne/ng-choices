import { Component, Input, NgModule, ViewChild, ViewEncapsulation } from '@angular/core';
import Choices from 'choices.js';

var ChoicesComponent = (function () {
    function ChoicesComponent() {
        this.options = {};
        this.onChange = function (_) { };
        this.onTouched = function () { };
    }
    /**
     * @return {?}
     */
    ChoicesComponent.prototype.ngOnInit = function () {
        this.options = this.options || {};
        this.options.searchFields = this.options.searchFields || ['label', 'value'];
        if (typeof this.options.searchFields === 'string') {
            this.options.searchFields = [this.options.searchFields, this.options.searchFields];
        }
        if (this.search) {
            this.options.callbackOnItemSearch = this.searchCallback;
        }
    };
    /**
     * @return {?}
     */
    ChoicesComponent.prototype.ngOnDestroy = function () {
        this.choicesRef.destroy();
        if (this.searchSubscription) {
            this.searchSubscription.unsubscribe();
        }
    };
    /**
     * @return {?}
     */
    ChoicesComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.choicesRef = new Choices(this.selectRef.nativeElement, this.options);
        this.choicesRef.setValue(this.value);
        this.selectRef.nativeElement.addEventListener('change', function (value) { return (_this.value = value); });
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
        if (this.choicesRef) {
            this.choicesRef.setValue(value);
        }
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
    /**
     * @param {?} value
     * @param {?} fn
     * @param {?} passedInput
     * @return {?}
     */
    ChoicesComponent.prototype.searchCallback = function (value, fn, passedInput) {
        if (this.searchSubscription) {
            this.searchSubscription.unsubscribe();
        }
        var _a = (this.options.searchFields), labelField = _a[0], valueField = _a[1];
        this.searchSubscription = this
            .search(value)
            .subscribe(function (results) { return fn(results, valueField, labelField); });
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
        'search': [{ type: Input },],
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
