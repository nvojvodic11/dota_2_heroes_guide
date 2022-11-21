import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

export interface InfoDialogData{
    title: string;
    message: string;
}

@Component({
    selector: 'cc-info-dialog',
    templateUrl: './cc-info-dialog.component.html',
    styleUrls: ['./cc-info-dialog.component.scss']
})
export class CCInfoDialogComponent {
    readonly BUTTON_TITLE = 'OK';

    constructor(@Inject(MAT_DIALOG_DATA) public data: InfoDialogData){
    }
}
