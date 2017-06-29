import { AfterViewInit, ElementRef, OnDestroy } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { ChoicesOptions } from 'choices.js';
export declare class ChoicesComponent implements OnDestroy, AfterViewInit, ControlValueAccessor {
    options: ChoicesOptions;
    selectRef: ElementRef;
    private choicesRef;
    private innerValue;
    private onChange;
    private onTouched;
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
    value: any;
    touch(): void;
    writeValue(value: any): void;
    registerOnChange(fn: (value: any) => void): void;
    registerOnTouched(fn: () => void): void;
}
