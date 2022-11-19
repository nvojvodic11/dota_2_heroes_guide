export interface Item{
    id: number;
    itemName: string;
    itemPrice: string;
    itemDescription: string;
    itemImage: File | null;
}

export interface ItemsServerData{
    id?: number;
    item_name: string;
    item_price: string;
    item_description: string;
    image_name: File | null;
}
