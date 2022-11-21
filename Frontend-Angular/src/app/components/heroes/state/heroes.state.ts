import { Hero } from "../interfaces/hero.interface"

export interface HeroesState{
    heroes: Hero[]
}

// export interface State extends ApplicationState.State {
//     stateName: HeroesState
// }

export const HERO_STATE_DEFAULT: HeroesState = {
    heroes: [{
        id: 0,
        heroName: '',
        heroRole: '',
        heroPosition: '',
        heroImage: null
    }]
}
