import { Component, forwardRef, Input } from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { BaseFormComponent } from "../utils/base-form-component";

@Component({
    selector: 'cc-textarea',
    templateUrl: './cc-textarea.html',
    styleUrls: ['./cc-textarea.scss'],
    providers:
    [ { 
    provide: NG_VALUE_ACCESSOR,
        multi: true,
        useExisting: forwardRef(() => CCTextareaComponent),
    }]
})
export class CCTextareaComponent extends BaseFormComponent{
    @Input() label: string;
}
