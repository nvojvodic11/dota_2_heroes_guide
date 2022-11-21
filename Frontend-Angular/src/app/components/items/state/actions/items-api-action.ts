import { createAction, props } from "@ngrx/store";
import { Item } from "../../interfaces/items.interface";

export const getAllItemsSuccessfull = createAction('[Items] Get all items successfull', props<{items: Item[]}>());
export const actionFailed = createAction('[Items] Action failed');
