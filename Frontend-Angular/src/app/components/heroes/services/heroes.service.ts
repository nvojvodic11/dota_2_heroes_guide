import { Injectable } from "@angular/core";
import {HttpClient, HttpResponse} from '@angular/common/http';
import { map, Observable } from "rxjs";
import { environment } from 'src/environments/environment';
import { Hero, HeroServerData } from "../interfaces/hero.interface";
import { HeroesFactory } from "./heroes.factory";

@Injectable({
    providedIn: 'root'
})

export class HeroesService{
    private readonly GET_ALL_HEROES_URL = `${environment.apiUrl}/allheroes`;

    constructor(
        private http: HttpClient,
        private heroesFactory: HeroesFactory
    ){}

    /**
     * Get all existing heroes
     */
    getAllHeroes(): Observable<Hero[]>{
        return this.http.get<HeroServerData[]>(this.GET_ALL_HEROES_URL).pipe(
            map(data => this.heroesFactory.formatServerData(data))
        );
    }
}
