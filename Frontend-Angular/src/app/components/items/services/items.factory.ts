import { Injectable } from "@angular/core";
import { Item, ItemsServerData } from "../interfaces/items.interface";

@Injectable({
    providedIn:'root'
})

export class ItemsFactory {

    ITEM = 'item';

    /**
     * Set data coming from server in corresponding format
     */
    formatServerData(dataToFormat: ItemsServerData[]): Item[]{
        const formatedArray: Item[] = [];

        dataToFormat.map((item: ItemsServerData) => {
            formatedArray.push({
                'id': item.id,
                'itemName': item.item_name,
                'itemPrice': item.item_price,
                'itemDescription': item.item_description,
                'itemImage': item.image_name
            });
        });

        return formatedArray;
    }

    /**
     * Set data coming from server in corresponding format for single item
     * @param dataToFormat 
     * @returns 
     */
    formatSingleItemData(dataToFormat: ItemsServerData): Item{
        return{
            'id': dataToFormat.id,
            'itemName': dataToFormat.item_name,
            'itemPrice': dataToFormat.item_price,
            'itemDescription': dataToFormat.item_description,
            'itemImage': dataToFormat.image_name
        }
    }
}
