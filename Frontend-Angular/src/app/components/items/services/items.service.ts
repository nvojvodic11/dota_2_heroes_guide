import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import { map, Observable, tap } from "rxjs";
import { environment } from 'src/environments/environment';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ItemsFactory } from "./items.factory";
import { Item, ItemsServerData } from "../interfaces/items.interface";
import { ItemForm } from "../interfaces/items-form.interface";

@Injectable({
    providedIn: 'root'
})
export class ItemsService{
    private readonly GET_ALL_ITEMS_URL = `${environment.apiUrl}/items`;
    private readonly ADD_NEW_ITEM_URL = `${environment.apiUrl}/additem`;
    private readonly GET_ITEM_URL = `${environment.apiUrl}/get-item/{id}`
    private readonly UPDATE_ITEM_URL = `${environment.apiUrl}/editItem/{id}`;
    private readonly DELETE_ITEM_URL = `${environment.apiUrl}/deleteItem/{id}`;

    constructor(
        private http: HttpClient,
        private itemsFactory: ItemsFactory,
        private formBuilder: FormBuilder,

    ){}

    /**
     * Get all existing items
     */
    getAllItems(): Observable<Item[]>{
        return this.http.get<ItemsServerData[]>(this.GET_ALL_ITEMS_URL).pipe(
            map(data => this.itemsFactory.formatServerData(data))
        );
    }

    /**
     * Add new item to database
     * @param item - new item object
     * @returns 
     */

    addNewItem(item: Item){
        return this.http.post(this.ADD_NEW_ITEM_URL, item);
    }

    /**
     * Get selected item data
     * @param id
     * @returns 
     */
    getItem(id: string): Observable<Item>{
        const url = this.GET_ITEM_URL.replace('{id}', id);
        return this.http.get<ItemsServerData>(url).pipe(
            map(value => this.itemsFactory.formatSingleItemData(value))
        );
    }

    /**
     * Update item
     * @param item
     * @returns 
     */

    updateItem(item: Item){
        const url = this.UPDATE_ITEM_URL.replace('{id}', item.id.toString());
        return this.http.put(url, item);
    }

    /**
     * Delete selected item
     * @param itemId
     * @returns 
     */
     deleteItem(itemId: string): Observable<any>{
        const url = this.DELETE_ITEM_URL.replace('{id}', itemId.toString());
        return this.http.delete<any>(url);
    }

    /**
     * Create new form group for adding new hero
     * @returns empty form group
     */
    createNewItemForm(): FormGroup<ItemForm>{
        return this.formBuilder.group({
            id: [''],
            itemName: ['', Validators.required],
            itemPrice: ['', Validators.required],
            itemDescription: ['', Validators.required],
            itemImage: [null]
        }) as FormGroup<ItemForm>;
    }
}
