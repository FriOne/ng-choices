import { Component, Input, NgModule, ViewChild, ViewEncapsulation } from '@angular/core';
import Choices from 'choices.js';

class ChoicesComponent {
    constructor() {
        this.options = {};
        this.onChange = (_) => { };
        this.onTouched = () => { };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.options = this.options || {};
        this.options.searchFields = this.options.searchFields || ['label', 'value'];
        if (typeof this.options.searchFields === 'string') {
            this.options.searchFields = [this.options.searchFields, this.options.searchFields];
        }
        if (this.search) {
            this.options.callbackOnItemSearch = this.searchCallback;
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.choicesRef.destroy();
        if (this.searchSubscription) {
            this.searchSubscription.unsubscribe();
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.choicesRef = new Choices(this.selectRef.nativeElement, this.options);
        this.choicesRef.setValue(this.value);
        this.selectRef.nativeElement.addEventListener('change', (value) => (this.value = value));
    }
    /**
     * @return {?}
     */
    get value() {
        return this.innerValue;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        if (this.innerValue !== value) {
            this.innerValue = value;
            this.onChange(value);
        }
    }
    /**
     * @return {?}
     */
    touch() {
        this.onTouched();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.innerValue = value;
        if (this.choicesRef) {
            this.choicesRef.setValue(value);
        }
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} value
     * @param {?} fn
     * @param {?} passedInput
     * @return {?}
     */
    searchCallback(value, fn, passedInput) {
        if (this.searchSubscription) {
            this.searchSubscription.unsubscribe();
        }
        const [labelField, valueField] = (this.options.searchFields);
        this.searchSubscription = this
            .search(value)
            .subscribe(results => fn(results, valueField, labelField));
    }
    ;
}
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
ChoicesComponent.ctorParameters = () => [];
ChoicesComponent.propDecorators = {
    'search': [{ type: Input },],
    'options': [{ type: Input },],
    'selectRef': [{ type: ViewChild, args: ['select',] },],
};

class ChoicesModule {
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
ChoicesModule.ctorParameters = () => [];

/**
 * Generated bundle index. Do not edit.
 */

export { ChoicesComponent, ChoicesModule };
//# sourceMappingURL=ng-choices.js.map
