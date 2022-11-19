import { FormControl } from "@angular/forms";

export interface ItemForm {
    id: FormControl<string>;
    itemName: FormControl<string>;
    itemPrice: FormControl<string>;
    itemDescription: FormControl<string>;
    itemImage: FormControl<File | null | string>;
}
