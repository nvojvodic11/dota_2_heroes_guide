import {Component, Input, OnInit} from '@angular/core';
import { TableData } from 'src/app/shared-components/interfaces/tableData';
import { BaseComponent } from '../base-component';

@Component({
    selector: 'cc-table',
    templateUrl: './cc-table.html',
    styleUrls: ['./cc-table.scss']
})

export class CCTableComponent extends BaseComponent implements OnInit{
    @Input() displayedColumns: TableData[];
    @Input() dataSource: any;

    tableHeaders: string[] = [];

    constructor(){
        super();
    }

    ngOnInit(): void {
        this.displayedColumns.map((column) => 
            this.tableHeaders.push(column.columnDef)
        );
    }
}
