import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { TableData } from "src/app/shared-components/interfaces/tableData";
import { Hero } from "./interfaces/hero.interface";
import * as heroesPageAction from './state/actions/heroes-page-action';
import * as heroesSelect from './state/actions/heroes-select';

@Component({
    selector: 'd2hg-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit{

    heroesTableColumns: TableData[];
    data$: any;
    
    constructor(private store: Store){
        this.heroesTableColumns = this.createColumns();
        store.dispatch(heroesPageAction.getAllHeroes());
        store.select(heroesSelect.getAllHeroes).subscribe(val => this.data$ = val);
    }

    ngOnInit(): void {
    }

    createColumns(): TableData[] {
        const columns = [
            {
                columnDef: 'id',
                columnName: 'id',
                cell: (hero: Hero) => `${hero.id}`
            },
            {
                columnDef: 'hero_name',
                columnName: 'Hero Name',
                cell: (hero: Hero) => `${hero.heroName}`
            },
            {
                columnDef: 'hero_role',
                columnName: 'Hero Role',
                cell: (hero: Hero) => `${hero.heroRole}`
            },
            {
                columnDef: 'hero_position',
                columnName: 'Hero Position',
                cell: (hero: Hero) => `${hero.heroPosition}`
            },
            {
                columnDef: 'image_name',
                columnName: 'Image',
                cell: (hero: Hero) => `${hero.imageName}`
            },
        ];

        return columns;
    }
}
