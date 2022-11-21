import { Component, forwardRef, Input } from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { BaseFormComponent } from "../utils/base-form-component";
import { SelectData } from "../utils/interfaces/select-data.interface";

@Component({
    selector: 'cc-select',
    templateUrl: './cc-select.html',
    styleUrls: ['./cc-select.scss'],
    providers:
    [{ 
        provide: NG_VALUE_ACCESSOR,
        multi: true,
        useExisting: forwardRef(() => CCSelectComponent),
    }]
})
export class CCSelectComponent extends BaseFormComponent{
    @Input() data: SelectData[];
    @Input() label: string;
    @Input() multiple: boolean;

}
