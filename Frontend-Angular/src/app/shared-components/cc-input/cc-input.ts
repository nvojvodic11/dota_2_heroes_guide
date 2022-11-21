import { Component, forwardRef, Input, ChangeDetectionStrategy } from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { InputTypes } from "../cc-dialogs/enums/input-types.enum";
import { BaseFormComponent } from "../utils/base-form-component";

@Component({
    selector: 'cc-input',
    templateUrl: './cc-input.html',
    styleUrls: ['./cc-input.scss'],
    providers:
    [ { 
    provide: NG_VALUE_ACCESSOR,
        multi: true,
        useExisting: forwardRef(() => CCInputComponent),
    }]
})

export class CCInputComponent extends BaseFormComponent{
    @Input() label: string;
    @Input() type: 'text' | 'file' = InputTypes.TEXT;
    @Input() imageSrc: string | ArrayBuffer | null;

    constructor(){
        super();
    }

    onFileSelected(event: any) {
        const reader = new FileReader();

        if(event.target.files && event.target.files.length > 0) {
            let file = event.target.files[0];
            reader.readAsDataURL(file);
            reader.onload = () => {
                this.imageSrc = reader.result;
            };
            this.formGroup.get(this.formControlName)?.patchValue(file);
        }

      }

      public get inputTypes(): typeof InputTypes {
        return InputTypes; 
      }
    
}
