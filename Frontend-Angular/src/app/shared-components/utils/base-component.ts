import { Component, Input, OnDestroy } from "@angular/core";
import { ReplaySubject } from "rxjs";

@Component({
    template: ''
})
export class BaseComponent implements OnDestroy{
    @Input() id: string;
    @Input() isReadOnly = false;

    destroy$: ReplaySubject<boolean> = new ReplaySubject(1);

    constructor(){}

    ngOnDestroy(): void {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
}
