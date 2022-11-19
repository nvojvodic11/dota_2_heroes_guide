import { createAction, props } from "@ngrx/store";
import { Item } from "../../interfaces/items.interface";

export const getAllItemsSuccessfull = createAction('[Items] Get all items successfull', props<{items: Item[]}>());
export const getSelectediItemSuccessfull = createAction('[Items] Get selected item succsessfull');
export const addNewItemSuccessfull = createAction('[Items] Add new item successfull');
export const updateItemSuccessfull = createAction('[Items] Update item successfull');
export const deleteItemSuccessfull = createAction('[Items] Delete item successfull');
export const actionFailed = createAction('[Items] Action failed');
