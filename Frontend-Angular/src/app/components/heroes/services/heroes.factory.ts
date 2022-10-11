import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { HeroesComponent } from "../heroes.component";
import { Hero, HeroServerData } from "../interfaces/hero.interface";

@Injectable({
    providedIn:'root'
})

export class HeroesFactory {

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
                'imageName': hero.image_name
            });
        });

        return formatedArray;
    }
}
