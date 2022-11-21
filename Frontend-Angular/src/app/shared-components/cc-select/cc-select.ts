import { Component, forwardRef, Input, OnInit } from "@angular/core";
import { FormControl, NG_VALUE_ACCESSOR } from "@angular/forms";
import { BaseFormComponent } from "../utils/base-form-component";
import { SelectData } from "../utils/interfaces/select-data.interface";

@Component({
    selector: 'cc-select',
    templateUrl: './cc-select.html',
    styleUrls: ['./cc-select.scss'],
    providers:
    [{ 
        provide: NG_VALUE_ACCESSOR,
        multi: true,
        useExisting: forwardRef(() => CCSelectComponent),
    }]
})
export class CCSelectComponent extends BaseFormComponent implements OnInit{
    @Input() data: SelectData[];
    @Input() label: string;
    
    toppings = new FormControl('');
    toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

    ngOnInit(): void{
    }
}
