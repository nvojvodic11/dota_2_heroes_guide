export interface Hero{
    id: number;
    heroName: string;
    heroRole: string;
    heroPosition: string;
    heroImage: File | null | string;
}

export interface HeroServerData{
    id?: number;
    hero_name: string;
    hero_role: string;
    hero_position: string;
    image_name: File | null;
}
