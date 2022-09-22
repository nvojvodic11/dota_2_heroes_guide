import { Component, Input } from "@angular/core";

@Component({
    template: ''
})

export abstract class BaseComponent{
    @Input() id: string;
    @Input() isReadOnly: boolean = false;

    constructor(){
    }
}
