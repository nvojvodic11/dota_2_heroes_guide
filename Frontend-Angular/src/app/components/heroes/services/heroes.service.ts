import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import { map, Observable } from "rxjs";
import { environment } from 'src/environments/environment';
import { Hero, HeroServerData } from "../interfaces/hero.interface";
import { HeroesFactory } from "./heroes.factory";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { HeroForm } from "../interfaces/hero-form.interface";

@Injectable({
    providedIn: 'root'
})
export class HeroesService{
    private readonly GET_ALL_HEROES_URL = `${environment.apiUrl}/allheroes`;
    private readonly ADD_NEW_HERO_URL = `${environment.apiUrl}/addhero`;
    private readonly GET_HERO_URL = `${environment.apiUrl}/get-hero/{id}`
    private readonly UPDATE_HERO_URL = `${environment.apiUrl}/edithero/{id}`;

    constructor(
        private http: HttpClient,
        private heroesFactory: HeroesFactory,
        private formBuilder: FormBuilder
    ){}

    /**
     * Get all existing heroes
     */
    getAllHeroes(): Observable<Hero[]>{
        return this.http.get<HeroServerData[]>(this.GET_ALL_HEROES_URL).pipe(
            map(data => this.heroesFactory.formatServerData(data))
        );
    }

    /**
     * Add new hero to database
     * @param hero - new hero object
     * @returns 
     */

    addNewHero(hero: Hero){
        return this.http.post(this.ADD_NEW_HERO_URL, hero)
    }

    /**
     * Get selected hero data
     * @param id
     * @returns 
     */
    getHero(id: string): Observable<Hero>{
        const url = this.GET_HERO_URL.replace('{id}', id);
        return this.http.get<HeroServerData>(url).pipe(
            map(value => this.heroesFactory.formatSingleHeroData(value))
        );
    }

    /**
     * Update hero
     * @param hero
     * @returns 
     */

    updateHero(hero: Hero){
        const url = this.UPDATE_HERO_URL.replace('{id}', hero.id.toString());
        return this.http.post(url, hero)
    }

    /**
     * Create new form group for adding new hero
     * @returns empty form group
     */
    createNewHeroForm(): FormGroup<HeroForm>{
        return this.formBuilder.group({
            id: [''],
            heroName: ['', Validators.required],
            heroRole: ['', Validators.required],
            heroPosition: ['', Validators.required],
            heroImage: [null]
        }) as FormGroup<HeroForm>;
    }
}
