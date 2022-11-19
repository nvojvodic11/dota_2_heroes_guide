import { Component, Input } from "@angular/core";
import { CCInfoDialogComponent } from "../cc-dialogs/cc-info-dialog/cc-info-dialog.component";
import { BaseFormComponent } from "../utils/base-form-component";
import { DialogService } from "../utils/services/dialog.service";
import { DialogRef } from "../utils/interfaces/dialog-ref.interface";

@Component({
    selector: 'cc-submit-button',
    templateUrl: './cc-submit-button.html',
    styleUrls: ['./cc-submit-button.scss']
})
export class CCSubmitButtonComponent extends BaseFormComponent{
    @Input() onSubmit: (params?: any) => void;
    @Input() title: string;
    @Input() isRaised: boolean;

    dialogRef: DialogRef;

    constructor(private dialogService: DialogService){
        super();

        this.dialogRef = {
            width: '300px',
            data: {
                title: 'Info',
                message: 'Please check all fields again!'
            }
        };

        this.onSubmit = (): void =>{

            if(!this.formGroup?.valid){
                this.formGroup.markAllAsTouched();
                this.dialogService.open(CCInfoDialogComponent, this.dialogRef);
            }
        }
    }
}
