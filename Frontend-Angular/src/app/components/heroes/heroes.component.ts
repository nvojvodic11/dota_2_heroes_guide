import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import * as heroesPageAction from './state/actions/heroes-page-action';
import * as heroesSelect from './state/actions/heroes-select';

@Component({
    selector: 'd2hg-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit{
    
    constructor(private store: Store){
        
    }

    ngOnInit(): void {
        this.store.dispatch(heroesPageAction.getAllHeroes());
    }
}
