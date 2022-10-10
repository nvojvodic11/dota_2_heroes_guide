import { createFeatureSelector, createSelector } from "@ngrx/store";
import { HeroesState } from "../heroes.state";

export const STATE_NAME = 'heroes';
const FEATURE_STATE = createFeatureSelector<HeroesState>(STATE_NAME);

export const getAllHeroes = createSelector(FEATURE_STATE, state => state.heroes);
