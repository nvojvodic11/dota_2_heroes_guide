import { createAction, props } from "@ngrx/store";
import { Item } from "../../interfaces/items.interface";

export const getAllItems = createAction('[Items] Get all items');
export const getSelectedItem = createAction('[Items] Get single item', props<{itemId: string}>());
export const addNewItem = createAction('[Items] Add new item', props<{item: Item}>());
export const updateItem = createAction('[Items] Update item', props<{itemId: string}>());
export const deleteItem = createAction('[Items] Delete item', props<{itemId: string}>());
