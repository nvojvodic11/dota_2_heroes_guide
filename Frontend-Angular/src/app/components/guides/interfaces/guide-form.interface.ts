import { FormControl } from "@angular/forms";

export interface GuideForm {
    id: FormControl<string>;
    heroName: FormControl<string>;
    heroRole: FormControl<string>;
    heroPosition: FormControl<string>;
    heroImage: FormControl<File | null | string>;
    goodWith: FormControl<any>;
    counterHeros: FormControl<any>;
    counterItems: FormControl<any>;
    fullBuild: FormControl<any>;
}
