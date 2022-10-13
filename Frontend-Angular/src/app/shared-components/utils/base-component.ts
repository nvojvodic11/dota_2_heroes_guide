import { Component, Input, OnDestroy } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ReplaySubject } from "rxjs";

@Component({
    template: ''
})

export abstract class BaseComponent implements OnDestroy{
    @Input() id: string;
    @Input() isReadOnly = false;
    @Input() formGroup: FormGroup;

    destroy$: ReplaySubject<boolean> = new ReplaySubject(1);
    
    constructor(){
    }

    ngOnDestroy(): void {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
}
