export interface Guide{
    id?: string;
    heroName: string;
    heroRole: string;
    heroPosition: string;
    heroImage: string;
    goodWith: Array<string | number>;
    counterHeroes: Array<string | number>;
    counterItems: Array<string | number>;
    fullBuild: Array<string | number>;
}
