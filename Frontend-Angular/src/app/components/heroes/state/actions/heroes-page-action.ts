import { createAction, props } from "@ngrx/store";

export const getAllHeroes = createAction('[Heroes] Get all heroes');
export const getSelectedHero = createAction('[Heroes] Get single hero', props<{heroId: string}>());
export const addNewHero = createAction('[Heroes] Add new hero');
export const updateHero = createAction('[Hero] Update hero', props<{heroId: string}>());
export const deleteHero = createAction('[Hero] Delete hero', props<{heroId: string}>());
