import { Component, Input } from "@angular/core";
import { BaseComponent } from "../base-component";

@Component({
    selector: 'cc-input',
    templateUrl: './cc-input.html',
    styleUrls: ['./cc-input.scss']
})

export class CCInputComponent extends BaseComponent{

    constructor(){
        super();
    }
}
