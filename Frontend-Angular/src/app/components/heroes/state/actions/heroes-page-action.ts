import { createAction, props } from "@ngrx/store";
import { Hero } from "../../interfaces/hero.interface";

export const getAllHeroes = createAction('[Heroes] Get all heroes');
export const getSelectedHero = createAction('[Heroes] Get single hero', props<{heroId: string}>());
export const addNewHero = createAction('[Heroes] Add new hero', props<{hero: Hero}>());
export const updateHero = createAction('[Hero] Update hero', props<{heroId: string}>());
export const deleteHero = createAction('[Hero] Delete hero', props<{heroId: string}>());
