import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from "@ngrx/store";
import { catchError, map, mergeMap, switchMap, tap } from "rxjs";
import { HeroesService } from "../services/heroes.service";
import * as heroesPageAction from './actions/heroes-page-action';
import * as heroesApiAction from './actions/heroes-api-action';
import { DialogService } from "src/app/shared-components/utils/dialog.service";
import { CCProcessDialogComponent } from "src/app/shared-components/cc-dialogs/cc-process-dialog/cc-process-dialog";

@Injectable({
    providedIn: 'root'
})
export class HeroesEffect {

    constructor(
        private actions$: Actions,
        private heroesService: HeroesService,
        private store: Store,
        private dialogService: DialogService
    ){}

    getAllHeroesEffect$ = createEffect(
        () => this.actions$.pipe(
            ofType(heroesPageAction.getAllHeroes),
            switchMap(() => {
                const dialogRef = {
                    width: '300px',
                };
        
                this.dialogService.open(CCProcessDialogComponent, dialogRef);

                return this.heroesService.getAllHeroes()
                .pipe(
                    map((result) => {
                        this.dialogService.close();
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