import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { TableData } from "src/app/shared-components/utils/interfaces/table-data.interface";
import { DialogService } from "src/app/shared-components/utils/services/dialog.service";
import { FilterValue } from "src/app/shared-components/utils/interfaces/filter-value.intrerface";
import { Router } from "@angular/router";
import { BaseComponent } from "src/app/shared-components/utils/base-component";
import { takeUntil } from "rxjs";
import * as itemsPageAction from './state/actions/items-page-action';
import * as ItemsSelect from './state/actions/items-select';
import { Item } from "./interfaces/items.interface";

@Component({
    selector: 'd2hg-items',
    templateUrl: './items.component.html',
    styleUrls: ['./items.component.scss']
})
export class ItemsComponent extends BaseComponent implements OnInit{
    itemsTableColumns: TableData[];
    data$: any;
    filterValue: FilterValue = {
        showGlobalFilter: true,
        showColumnFilter: false,
        sort: {
            columnName: '',
            direction: ''
        }
    };
    
    constructor(
        private store: Store,
        private dialogService: DialogService,
        public router: Router    
    ){
        super();
    }

    ngOnInit(): void{
        this.getRowData = this.getRowData.bind(this);

        this.itemsTableColumns = this.createColumns();

        this.store.dispatch(itemsPageAction.getAllItems());
        this.data$ = this.store.select(ItemsSelect.getAllItems).pipe(
            takeUntil(this.destroy$)
        );
    }

    navigate(): void {
        this.router.navigateByUrl('/add/new/item')
    }

    getRowData(row: Item): void{
        this.router.navigateByUrl(`/add/new/item/${row.id}`)
    }

    createColumns(): TableData[] {
        const columns = [
            {
                columnDef: 'itemName',
                columnName: 'Item Name',
                cell: (item: Item) => `${item.itemName}`
            },
            {
                columnDef: 'itemPrice',
                columnName: 'Item Price',
                cell: (item: Item) => `${item.itemPrice}`
            },
            {
                columnDef: 'itemDescription',
                columnName: 'Item Description',
                cell: (item: Item) => `${item.itemDescription}`
            },
            {
                columnDef: 'itemImage',
                columnName: 'Image',
                cell: (item: Item) => `${item.itemImage}`
            },
        ];

        return columns;
    };
}
