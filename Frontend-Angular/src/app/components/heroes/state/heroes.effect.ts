import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from "@ngrx/store";
import { catchError, map, mergeMap, switchMap, tap } from "rxjs";
import { HeroesService } from "../services/heroes.service";
import * as heroesPageAction from './actions/heroes-page-action';
import * as heroesApiAction from './actions/heroes-api-action';
import { DialogService } from "src/app/shared-components/utils/services/dialog.service";
import { CCProcessDialogComponent } from "src/app/shared-components/cc-dialogs/cc-process-dialog/cc-process-dialog";
import { Router } from "@angular/router";
import { DialogRef } from "src/app/shared-components/utils/interfaces/dialog-ref.interface";
import { DialogTypeEnum } from "src/app/shared-components/cc-dialogs/enums/dialog-type.enum";
import { DialogRefEnum } from "../../shared/enums/dialog-ref.enum";

@Injectable({
    providedIn: 'root'
})
export class HeroesEffect {

    dialogRef: DialogRef;

    constructor(
        private actions$: Actions,
        private heroesService: HeroesService,
        private store: Store,
        private dialogService: DialogService
    ){
        this.dialogRef = {
            id: DialogTypeEnum.PROCESSING,
            width: DialogRefEnum.WIDTH,
        };
    }

    getAllHeroesEffect$ = createEffect(
        () => this.actions$.pipe(
            ofType(heroesPageAction.getAllHeroes),
            switchMap(() => {
                
                this.dialogService.open(CCProcessDialogComponent, this.dialogRef, );

                return this.heroesService.getAllHeroes()
                .pipe(
                    map((result) => {
                        this.dialogService.close(DialogTypeEnum.PROCESSING);
                        result
                            ? this.store.dispatch(heroesApiAction.getAllHeroesSuccessfull({heroes: result}))
                            : this.store.dispatch(heroesApiAction.actionFailed())
                    })
                );
            })
        ), {dispatch: false}
    );

    actionFailedEffect$ = createEffect(
        () => this.actions$.pipe(
            ofType(heroesApiAction.actionFailed),
            map((result) => {
                return result
            })
        ), {dispatch: false}
    );


}