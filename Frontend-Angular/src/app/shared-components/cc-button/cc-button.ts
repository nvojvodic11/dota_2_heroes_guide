import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { BaseComponent } from "../utils/base-component";

@Component({
    selector: 'cc-button',
    templateUrl: './cc-button.html',
    styleUrls: ['./cc-button.scss']
})

export class CCButtonComponent extends BaseComponent{
    @Input() title: string;
    @Input() isRaised = false;
    @Input() onClick: () => void;
    @Input() color: 'primary' | 'accent' | 'warn' = 'primary';
    
    constructor(){
        super();
    }

}
