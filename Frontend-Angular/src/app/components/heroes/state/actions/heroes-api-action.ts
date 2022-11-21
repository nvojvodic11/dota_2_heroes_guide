import { createAction, props } from "@ngrx/store";
import {Hero} from '../../interfaces/hero.interface'

export const getAllHeroesSuccessfull = createAction('[Heroes] Get all heroes successfull', props<{heroes: Hero[]}>());
export const actionFailed = createAction('[Heroes] Action failed');
