import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { HeroesComponent } from "../heroes.component";
import { Hero } from "../interfaces/hero.interface";

@Injectable({
    providedIn:'root'
})

export class HeroesFactory {

    /**
     * Set data coming from server in coresponding format
     */
    formatServerData(dataToFormat: Observable<any>): Observable<Hero[]>{
        return dataToFormat.pipe( 
            map(heroesArray => {
                let formatedArray = [];

                for(let hero of heroesArray){
                    formatedArray.push({
                        'id': hero.id,
                        'heroName': hero.hero_name,
                        'heroRole': hero.hero_role,
                        'heroPosition': hero.hero_position,
                        'imageName': hero.image_name
                    });
                }

                return formatedArray;
            })
        );
    }
}