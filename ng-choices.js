import { Component, Input, NgModule, ViewChild, ViewEncapsulation } from '@angular/core';
import Choices from 'choices.js';

class ChoicesComponent {
    constructor() {
        this.onChange = (_) => { };
        this.onTouched = () => { };
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.choicesRef.destroy();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.choicesRef = new Choices(this.selectRef.nativeElement, this.options);
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
