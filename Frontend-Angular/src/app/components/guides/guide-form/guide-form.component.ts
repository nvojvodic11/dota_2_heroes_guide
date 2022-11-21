import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { CCProcessDialogComponent } from "src/app/shared-components/cc-dialogs/cc-process-dialog/cc-process-dialog";
import { DialogTypeEnum } from "src/app/shared-components/cc-dialogs/enums/dialog-type.enum";
import { BaseFormComponent } from "src/app/shared-components/utils/base-form-component";
import { FormInvalidDialogEnum } from "src/app/shared-components/utils/enums/form-invalid-dialog.enum";
import { DialogRef } from "src/app/shared-components/utils/interfaces/dialog-ref.interface";
import { DialogService } from "src/app/shared-components/utils/services/dialog.service";
import { FormService } from "src/app/shared-components/utils/services/form.service";
import { DialogRefEnum } from "../../shared/enums/dialog-ref.enum";
import { ServerResponseEnum } from "../../shared/enums/server-response.enum";
import { GuidesService } from "../services/guides.service";
import * as heroesSelect from '../../heroes/state/actions/heroes-select';
import * as heroPageAction from '../../heroes/state/actions/heroes-page-action';
import * as itemSelect from '../../items/state/actions/items-select';
import * as itemsPageAction from '../../items/state/actions/items-page-action';
import { SelectData } from "src/app/shared-components/utils/interfaces/select-data.interface";
import { takeUntil } from "rxjs";

@Component({
    templateUrl: './guide-form.component.html',
    styleUrls: ['./guide-form.component.scss']
})
export class GuideFormComponent extends BaseFormComponent implements OnInit{
    dialogRefInvalidForm: DialogRef;
    imageSrc: any;
    heroId: string;
    herosDropDown: SelectData[];
    itemsDropDown: SelectData[];

    constructor(
        private guidesService: GuidesService,
        private dialogService: DialogService,
        private formService: FormService,
        private activatedRoute: ActivatedRoute,
        private store: Store
    ){
        super();
    }

    ngOnInit(): void{
        this.formGroup = this.guidesService.createNewGuideForm();

        this.store.dispatch(heroPageAction.getAllHeroes());
        this.store.dispatch(itemsPageAction.getAllItems());
        this.store.select(heroesSelect.getAllHeroes).pipe(
            takeUntil(this.destroy$)
        ).subscribe(value => this.herosDropDown = this.guidesService.createSelectData(value, 'heroName', 'id'));
        this.store.select(itemSelect.getAllItems).pipe(
            takeUntil(this.destroy$)
        ).subscribe(value => this.itemsDropDown = this.guidesService.createSelectData(value, 'itemName', 'id'));

        this.activatedRoute.params.subscribe(value => {
            if(value[this.ID]){
                this.heroId = value[this.ID];
                this.guidesService.getGuide(value[this.ID]).subscribe(value => {
                        this.formGroup.patchValue(value);
                        this.imageSrc = value.heroImage;
                });
            }
        });

        this.dialogRefInvalidForm = {
            width: DialogRefEnum.WIDTH,
            data: {
                title: FormInvalidDialogEnum.TITLE,
                message: FormInvalidDialogEnum.MESSAGE
            }
        };
    }

    checkIfHeroIsNew(): void{
        if(!this.heroId){
            this.guidesService.addNewGuide(this.formGroup.getRawValue()).subscribe(
                response => this.handleServerSuccessResponse(response));
        }else{
            this.guidesService.updateGuide(this.formGroup.getRawValue()).subscribe(
                response => this.handleServerSuccessResponse(response));
        }
    }

    handleServerSuccessResponse(response: any): void{
        this.dialogService.close(DialogTypeEnum.PROCESSING);
        this.formService.openSuccessDialog(response[ServerResponseEnum.MESSAGE]);
    }

    submit(): void {        
        if(this.formService.checkFormValidity(this.formGroup, this.dialogRefInvalidForm)){
            this.dialogService.open(CCProcessDialogComponent, {id: DialogTypeEnum.PROCESSING});
            this.checkIfHeroIsNew();
        }
    }
}