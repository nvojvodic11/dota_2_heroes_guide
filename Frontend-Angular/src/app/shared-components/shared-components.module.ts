import { NgModule } from "@angular/core";
import { CCToolbarComponent } from "./cc-toolbar/cc-toolbar";
import { CCToolbarModule } from "./cc-toolbar/cc-toolbar.module";
import { CCButtonModule } from "./cc-button/cc-button.module";
import { CCButtonComponent } from "./cc-button/cc-button";
import { BrowserModule } from '@angular/platform-browser';
import { CCTableComponent } from "./cc-table/cc-table";
import { CCTableModule } from "./cc-table/cc-table.module";
import { CCInputComponent } from "./cc-input/cc-input";
import { CCInputModule } from "./cc-input/cc-input.module";
import { MatFormFieldModule  } from "@angular/material/form-field";
@NgModule({
    declarations: [
        CCToolbarComponent,
        CCButtonComponent,
        CCTableComponent,
        CCInputComponent,
    ],
    imports: [
        CCToolbarModule,
        CCButtonModule,
        BrowserModule,
        CCTableModule,
        CCInputModule,
        MatFormFieldModule
    ],
    exports: [
        CCToolbarComponent,
        CCButtonComponent,
        CCTableComponent,
        CCInputComponent,
    ]
})

export class SharedComponentsModule {}
