import * as fromHeroes from './components/heroes/state/heroes.state';
import * as fromItems from './components/items/state/items.state';
import * as heroReducer from './components/heroes/state/heroes.reducer';
import * as itemReducer from './components/items/state/items.reducer';

export interface ReducersModuleState{
    heroes: fromHeroes.HeroesState;
    items: fromItems.ItemsState;
}

export const reducers = {
    heroes: heroReducer.heroesReducer,
    items: itemReducer.itemsReducer
}
