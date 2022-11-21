import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CCInfoDialogComponent } from "src/app/shared-components/cc-dialogs/cc-info-dialog/cc-info-dialog.component";
import { CCProcessDialogComponent } from "src/app/shared-components/cc-dialogs/cc-process-dialog/cc-process-dialog";
import { DialogTypeEnum } from "src/app/shared-components/cc-dialogs/enums/dialog-type.enum";
import { BaseFormComponent } from "src/app/shared-components/utils/base-form-component";
import { FormInvalidDialogEnum } from "src/app/shared-components/utils/enums/form-invalid-dialog.enum";
import { DialogRef } from "src/app/shared-components/utils/interfaces/dialog-ref.interface";
import { DialogService } from "src/app/shared-components/utils/services/dialog.service";
import { FormService } from "src/app/shared-components/utils/services/form.service";
import { DialogRefEnum } from "../../shared/enums/dialog-ref.enum";
import { ServerResponseEnum } from "../../shared/enums/server-response.enum";
import { ItemsService } from "../services/items.service";

@Component({
    selector: 'd2hg-item-form',
    templateUrl: './item-form.component.html',
    styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent extends BaseFormComponent implements OnInit{
    imageSrc: any;
    dialogRefInvalidForm: DialogRef;
    itemId: string;

    constructor(
        private itemsService: ItemsService,
        private formService: FormService,
        private dialogService: DialogService,
        private activatedRoute: ActivatedRoute){
        super();
    }

    ngOnInit(): void {
        this.formGroup = this.itemsService.createNewItemForm();
        this.activatedRoute.params.subscribe(param => {
            if(param[this.ID]){
                this.itemId = param[this.ID];
                this.itemsService.getItem(this.itemId).subscribe( value => {
                        this.formGroup.patchValue(value);
                        this.imageSrc = value.itemImage
                    });
            }
        });

        this.dialogRefInvalidForm = {
            width: DialogRefEnum.WIDTH,
            data: {
                title: FormInvalidDialogEnum.TITLE,
                message: FormInvalidDialogEnum.MESSAGE
            }
        }
    }

    checkIfItemIsNew(): void{
        if(!this.itemId){
            this.itemsService.addNewItem(this.formGroup.getRawValue()).subscribe(
                response => this.handleServerSuccessResponse(response)
            );
        }else{
            this.itemsService.updateItem(this.formGroup.getRawValue()).subscribe(
                response => this.handleServerSuccessResponse(response)
            );
        }
    }

    handleServerSuccessResponse(response: any){
        this.dialogService.close(DialogTypeEnum.PROCESSING);
        this.formService.openSuccessDialog(response[ServerResponseEnum.MESSAGE])
    };

    submit(): void{
        if(this.formService.checkFormValidity(this.formGroup, this.dialogRefInvalidForm)){
            this.dialogService.open(CCProcessDialogComponent, {id: DialogTypeEnum.PROCESSING});
            this.checkIfItemIsNew();
        }
    }
}