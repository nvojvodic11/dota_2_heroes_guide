import {Component, Input, OnInit, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, takeUntil } from 'rxjs';
import { TableData } from 'src/app/shared-components/interfaces/tableData';
import { BaseComponent } from '../base-component';

@Component({
    selector: 'cc-table',
    templateUrl: './cc-table.html',
    styleUrls: ['./cc-table.scss']
})

export class CCTableComponent extends BaseComponent implements OnInit{
    @Input() displayedColumns: TableData[];
    @Input() tableData: Observable<any>;
    @Input() pageSizeOptions: Array<number> = [10, 15, 20];
    
    @ViewChild(MatPaginator) paginator: MatPaginator;

    dataSource: MatTableDataSource<any>;
    tableHeaders: string[] = [];

    constructor(){
        super();
    }

    ngOnInit(): void {
        this.displayedColumns.map((column) => 
            this.tableHeaders.push(column.columnDef)
        );
        this.tableData.pipe(
            takeUntil(this.destroy$)
        ).subscribe(value => {
            this.dataSource = new MatTableDataSource(value);
            this.dataSource.paginator = this.paginator;
        });
    }
}
