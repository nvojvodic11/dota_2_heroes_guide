import { Component, Input } from "@angular/core";
import { BaseComponent } from "../utils/base-component";

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
