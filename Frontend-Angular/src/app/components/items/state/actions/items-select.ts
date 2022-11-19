import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ItemsState } from "../items.state";


export const STATE_NAME = 'items';
const FEATURE_STATE = createFeatureSelector<ItemsState>(STATE_NAME);

export const getAllItems = createSelector(FEATURE_STATE, state => state.items);
