import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { HeroesComponent } from "../heroes.component";
import { Hero, HeroServerData } from "../interfaces/hero.interface";

@Injectable({
    providedIn:'root'
})

export class HeroesFactory {

    HERO = 'hero';

    /**
     * Set data coming from server in corresponding format
     */
    formatServerData(dataToFormat: HeroServerData[]): Hero[]{
        const formatedArray: Hero[] = [];

        dataToFormat.map((hero: HeroServerData) => {
            formatedArray.push({
                'id': hero.id,
                'heroName': hero.hero_name,
                'heroRole': hero.hero_role,
                'heroPosition': hero.hero_position,
                'heroImage': hero.image_name
            });
        });

        return formatedArray;
    }

    /**
     * Set data coming from server in corresponding format for single hero
     * @param dataToFormat 
     * @returns 
     */
    formatSingleHeroData(dataToFormat: HeroServerData): Hero{
        return{
            'id': dataToFormat[this.HERO].id,
            'heroName': dataToFormat[this.HERO].hero_name,
            'heroRole': dataToFormat[this.HERO].hero_role,
            'heroPosition': dataToFormat[this.HERO].hero_position,
            'heroImage': dataToFormat[this.HERO].image_name
        }
    }
}
