import { NgModule } from "@angular/core";
import { MatSelectModule } from "@angular/material/select";
import { MatOptionModule } from "@angular/material/core";

@NgModule({
    imports: [MatSelectModule, MatOptionModule],
    declarations: [],
    exports: [MatSelectModule, MatOptionModule],
    providers: []
})
export class CCSelectModule{}