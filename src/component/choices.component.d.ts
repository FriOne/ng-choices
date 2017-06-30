import { AfterViewInit, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { ChoicesOptions } from 'choices.js';
import { Observable } from 'rxjs/Observable';
export declare class ChoicesComponent implements OnInit, OnDestroy, AfterViewInit, ControlValueAccessor {
    search: (term: string) => Observable<any[]>;
    options: ChoicesOptions;
    selectRef: ElementRef;
    private searchSubscription;
    private choicesRef;
    private innerValue;
    private onChange;
    private onTouched;
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
    value: any;
    touch(): void;
    writeValue(value: any): void;
    registerOnChange(fn: (value: any) => void): void;
    registerOnTouched(fn: () => void): void;
    private searchCallback(value, fn, passedInput);
}
