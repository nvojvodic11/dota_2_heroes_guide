import { Component, OnInit } from "@angular/core";
import { BaseFormComponent } from "src/app/shared-components/utils/base-form-component";
import { DialogService } from "src/app/shared-components/utils/services/dialog.service";
import { DialogRef } from "src/app/shared-components/utils/interfaces/dialog-ref.interface";
import { HeroesService } from "../services/heroes.service";
import { FormService } from "src/app/shared-components/utils/services/form.service";
import { ActivatedRoute, Router } from "@angular/router";
import { DialogRefEnum } from "../../shared/enums/dialog-ref.enum";
import { ServerResponseEnum } from "../../shared/enums/server-response.enum";
import { CCProcessDialogComponent } from "src/app/shared-components/cc-dialogs/cc-process-dialog/cc-process-dialog";
import { DialogTypeEnum } from "src/app/shared-components/cc-dialogs/enums/dialog-type.enum";
import { FormInvalidDialogEnum } from "src/app/shared-components/utils/enums/form-invalid-dialog.enum";

@Component({
    selector: 'd2hg-hero-form',
    templateUrl: './hero-form.component.html',
    styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent extends BaseFormComponent implements OnInit{

    dialogRefInvalidForm: DialogRef;
    imageSrc: any;
    heroId: string;

    constructor(
        private heroService: HeroesService,
        private dialogService: DialogService,
        private formService: FormService,
        private activatedRoute: ActivatedRoute,
        private router: Router
    ){
        super();
    }

    ngOnInit(): void{
        this.formGroup = this.heroService.createNewHeroForm();
        this.activatedRoute.params.subscribe(value => {

            if(value[this.ID]){
                this.heroId = value[this.ID];
                this.heroService.getHero(value[this.ID]).subscribe(value => {
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
            this.heroService.addNewHero(this.formGroup.getRawValue()).subscribe(
                response => this.handleServerSuccessResponse(response));
        }else{
            this.heroService.updateHero(this.formGroup.getRawValue()).subscribe(
                response => this.handleServerSuccessResponse(response));
        }
    }

    handleServerSuccessResponse(response: any): void{
        this.dialogService.close(DialogTypeEnum.PROCESSING);
        this.formService.openSuccessDialog(response[ServerResponseEnum.MESSAGE]);
    }

    deleteHero(): void{
        this.dialogService.open(CCProcessDialogComponent, {id: DialogTypeEnum.PROCESSING});
        this.heroService.deleteHero(this.heroId).subscribe(response => {
            this.handleServerSuccessResponse(response);
            this.router.navigateByUrl('/heroes');
        });
    }

    submit(): void {        
        if(this.formService.checkFormValidity(this.formGroup, this.dialogRefInvalidForm)){
            this.dialogService.open(CCProcessDialogComponent, {id: DialogTypeEnum.PROCESSING});
            this.checkIfHeroIsNew();
        }
    }
}
