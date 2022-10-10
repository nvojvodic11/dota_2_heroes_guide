import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from "@ngrx/store";
import { map, mergeMap, switchMap } from "rxjs";
import { HeroesService } from "../services/heroes.service";
import * as heroesPageAction from './actions/heroes-page-action';
import * as heroesApiAction from './actions/heroes-api-action';

@Injectable({
    providedIn: 'root'
})
export class HeroesEffect {

    constructor(
        private actions$: Actions,
        private heroesService: HeroesService,
        private store: Store
    ){}

    getAllHeroesEffect$ = createEffect(
        () => this.actions$.pipe(
            ofType(heroesPageAction.getAllHeroes),
            switchMap(() => this.heroesService.getAllHeroes()
                .pipe(
                    map((result?) => {
                        result
                            ? this.store.dispatch(heroesApiAction.getAllHeroesSuccessfull({heroes: result}))
                            : this.store.dispatch(heroesApiAction.actionFailed())
                    })
                )
            )
        ), {dispatch: false}
    );

    actionFailedEffect$ = createEffect(
        () => this.actions$.pipe(
            ofType(heroesApiAction.actionFailed),
            map((result) => {
                console.log('failed');
                console.log(result);
                return result
            })
        ), {dispatch: false}
    );


}