import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, takeUntil } from 'rxjs';
import { TableData } from 'src/app/shared-components/utils/interfaces/table-data.interface';
import { BaseComponent } from '../utils/base-component';
import { FilterValue } from '../utils/interfaces/filter-value.intrerface';
import {MatSort} from '@angular/material/sort';
import { Hero } from 'src/app/components/heroes/interfaces/hero.interface';

@Component({
    selector: 'cc-table',
    templateUrl: './cc-table.html',
    styleUrls: ['./cc-table.scss']
})

export class CCTableComponent extends BaseComponent implements OnInit{
    @Input() displayedColumns: TableData[];
    @Input() tableData: Observable<any>;
    @Input() pageSizeOptions: Array<number> = [10, 15, 20];
    @Input() filterValue: FilterValue = {
        showGlobalFilter: false,
        showColumnFilter: false,
        sort: {
            columnName: '',
            direction: ''
        }
    };
    
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    dataSource: MatTableDataSource<any>;
    tableHeaders: string[] = [];
    globalDataArray: [];

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
            this.dataSource.sort = this.sort;
            this.globalDataArray = value;
        });
    }

    applyFilter(event: Event): void {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
          this.dataSource.paginator.firstPage();
        }
    }

      applyFilterForSinlgeColumn(event: Event, columnName: string): void {
        const columnFilterValue = (event.target as HTMLInputElement).value;
        const arrayToFilter = this.globalDataArray;

        const filteredArray = arrayToFilter.filter(
            (column: any) => column[columnName].toLowerCase().includes(columnFilterValue)
        );
        this.dataSource.data = filteredArray;

        if (this.dataSource.paginator) {
          this.dataSource.paginator.firstPage();
        }
    }
}
