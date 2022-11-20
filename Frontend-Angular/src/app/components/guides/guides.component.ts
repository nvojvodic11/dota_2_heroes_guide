import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable, takeUntil } from "rxjs";
import { BaseComponent } from "src/app/shared-components/utils/base-component";
import { FilterValue } from "src/app/shared-components/utils/interfaces/filter-value.intrerface";
import { TableData } from "src/app/shared-components/utils/interfaces/table-data.interface";
import { DialogService } from "src/app/shared-components/utils/services/dialog.service";
import { Hero } from "../heroes/interfaces/hero.interface";
import * as heroesPageAction from '../heroes/state/actions/heroes-page-action';
import * as heroesSelect from '../heroes/state/actions/heroes-select';

@Component({
    selector: 'd2hg-guides',
    templateUrl: './guides.component.html',
    styleUrls: ['./guides.component.scss']
})
export class GuidesComponent extends BaseComponent implements OnInit{
    heroesTableColumns: TableData[];
    data$: Observable<Hero[]>;
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

    ngOnInit(): void {
        this.getRowData = this.getRowData.bind(this);
        this.heroesTableColumns = this.createColumns();

        this.store.dispatch(heroesPageAction.getAllHeroes());
        this.data$ = this.store.select(heroesSelect.getAllHeroes).pipe(
            takeUntil(this.destroy$)
        );
    }

    navigate(): void {
        this.router.navigateByUrl('/add/new/guide')
    }

    getRowData(row: Hero): void{
        this.router.navigateByUrl(`/add/new/guide/${row.id}`)
    }

    createColumns(): TableData[] {
        const columns = [
            {
                columnDef: 'heroName',
                columnName: 'Hero Name',
                cell: (hero: Hero) => `${hero.heroName}`
            },
            {
                columnDef: 'heroRole',
                columnName: 'Hero Role',
                cell: (hero: Hero) => `${hero.heroRole}`
            },
            {
                columnDef: 'heroPosition',
                columnName: 'Hero Position',
                cell: (hero: Hero) => `${hero.heroPosition}`
            },
            {
                columnDef: 'imageName',
                columnName: 'Image',
                cell: (hero: Hero) => `${hero.heroImage}`
            },
        ];

        return columns;
    };
}