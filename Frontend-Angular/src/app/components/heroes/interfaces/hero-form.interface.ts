import { FormControl } from "@angular/forms";

export interface HeroForm {
    id: FormControl<string>;
    heroName: FormControl<string>;
    heroRole: FormControl<string>;
    heroPosition: FormControl<string>;
    heroImage: FormControl<File | null | string>;
}
