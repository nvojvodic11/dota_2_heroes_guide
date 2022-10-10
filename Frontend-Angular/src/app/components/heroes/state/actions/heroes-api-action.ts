import { createAction, props } from "@ngrx/store";
import {Hero} from '../../interfaces/hero.interface'

export const getAllHeroesSuccessfull = createAction('[Heroes] Get all heroes successfull', props<{heroes: Hero[]}>());
export const getSelectedHeroSuccessfull = createAction('[Heroes] Get selected hero succsessfull');
export const addNewHeroSuccessfull = createAction('[Heroes] Add new hero successfull');
export const updateHeroSuccessfull = createAction('[Heroes] Update hero successfull');
export const deleteHeroSuccessfull = createAction('[Hero] Delete hero successfull');
export const actionFailed = createAction('[Hero] Action failed');
