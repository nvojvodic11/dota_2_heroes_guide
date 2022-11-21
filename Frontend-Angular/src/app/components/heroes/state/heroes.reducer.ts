import { createReducer, on } from "@ngrx/store";
import { HeroesState, HERO_STATE_DEFAULT } from "./heroes.state";
import * as HeroApiAction from './actions/heroes-api-action';

export const heroesReducer = createReducer<HeroesState>(
    HERO_STATE_DEFAULT,

    on(HeroApiAction.getAllHeroesSuccessfull, (state, action): HeroesState => {
        return {
            ...state,
            heroes: action.heroes
        }
    })
)
