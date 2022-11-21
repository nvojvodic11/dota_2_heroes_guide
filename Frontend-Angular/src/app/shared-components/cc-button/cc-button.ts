import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { BaseFormComponent } from "../utils/base-form-component";

@Component({
    selector: 'cc-button',
    templateUrl: './cc-button.html',
    styleUrls: ['./cc-button.scss']
})

export class CCButtonComponent extends BaseFormComponent{
    @Input() title: string;
    @Input() isRaised = false;
    @Input() color: 'primary' | 'accent' | 'warn' = 'primary';
    
    constructor(){
        super();
    }

}
