import { Item } from "../interfaces/items.interface"

export interface ItemsState{
    items: Item[]
}

// export interface State extends ApplicationState.State {
//     stateName: ItemsState
// }

export const ITEM_STATE_DEFAULT: ItemsState = {
    items: [{
        id: 0,
        itemName: '',
        itemPrice: '',
        itemDescription: '',
        itemImage: null,
    }]
}
