import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { DialogRefEnum } from "src/app/components/shared/enums/dialog-ref.enum";
import { CCInfoDialogComponent } from "../../cc-dialogs/cc-info-dialog/cc-info-dialog.component";
import { DialogRef } from "../interfaces/dialog-ref.interface";
import { DialogService } from "./dialog.service";

@Injectable({
    providedIn: 'root'
})
export class FormService{
    SUCCESS = 'Success';

    constructor(private dialogService: DialogService){
    }

    checkFormValidity(formGroup: FormGroup, dialogRef: DialogRef): boolean{
        let returnValue = true;

        if(!formGroup?.valid){
            formGroup.markAllAsTouched();
            returnValue = false;
            this.dialogService.open(CCInfoDialogComponent, dialogRef);
        }

        return returnValue;
    }

    openSuccessDialog(message: string, width?: string): void{
        const dialogRefSucces = {
            width: width ? width : DialogRefEnum.WIDTH,
            data: {
                title: this.SUCCESS,
                message: message
            }
        }
        this.dialogService.open(CCInfoDialogComponent, dialogRefSucces);
    }
}
