import { Injectable } from "@angular/core";
import {HttpClient, HttpResponse} from '@angular/common/http';
import { Observable } from "rxjs";
import { environment } from 'src/environments/environment';
import { Hero } from "../interfaces/hero.interface";
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
        const data = this.http.get<Hero[]>(this.GET_ALL_HEROES_URL);
        const formatedData = this.heroesFactory.formatServerData(data);
        
        return formatedData;
    }
}