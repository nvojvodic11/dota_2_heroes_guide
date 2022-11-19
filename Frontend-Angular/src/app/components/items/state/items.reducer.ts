import { createReducer, on } from "@ngrx/store";
import { ItemsState, ITEM_STATE_DEFAULT } from "./items.state";
import * as ItemsApiAction from './actions/items-api-action';

export const itemsReducer = createReducer<ItemsState>(
    ITEM_STATE_DEFAULT,

    on(ItemsApiAction.getAllItemsSuccessfull, (state, action): ItemsState => {
        return {
            ...state,
            items: action.items
        }
    })
)
