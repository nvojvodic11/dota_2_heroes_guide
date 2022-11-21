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
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule } from '@angular/material/dialog';
import { CCProcessDialogComponent } from "./cc-dialogs/cc-process-dialog/cc-process-dialog";
import { CCProcessDialogModule } from "./cc-dialogs/cc-process-dialog/cc-process-dialog.module";
import { CCInfoDialogComponent } from "./cc-dialogs/cc-info-dialog/cc-info-dialog.component";
import { CCInfoDialogModule } from "./cc-dialogs/cc-info-dialog/cc-info-dialog.module";
import { CommonModule } from '@angular/common';  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BaseComponent } from "./utils/base-component";
import {MatIconModule} from '@angular/material/icon';
import { CCSelectComponent } from "./cc-select/cc-select";
import { CCSelectModule } from "./cc-select/cc-select.module";
import { CCTextareaModule } from "./cc-textarea/cc-textarea.module";
import { CCTextareaComponent } from "./cc-textarea/cc-textarea";

@NgModule({
    declarations: [
        CCToolbarComponent,
        CCButtonComponent,
        CCTableComponent,
        CCInputComponent,
        CCProcessDialogComponent,
        CCInfoDialogComponent,
        BaseComponent,
        CCSelectComponent,
        CCTextareaComponent
    ],
    imports: [
        CCToolbarModule,
        CCButtonModule,
        BrowserModule,
        CCTableModule,
        CCInputModule,
        MatFormFieldModule,
        MatDialogModule,
        CCProcessDialogModule,
        CCInfoDialogModule,
        CommonModule,
        CCSelectModule,
        CCTextareaModule,
        FormsModule, ReactiveFormsModule,
        MatIconModule
    ],
    exports: [
        CCToolbarComponent,
        CCButtonComponent,
        CCTableComponent,
        CCInputComponent,
        CCProcessDialogComponent,
        CCInfoDialogComponent,
        BaseComponent,
        CommonModule,
        MatIconModule,
        CCSelectComponent,
        CCTextareaComponent,
        BrowserModule, FormsModule, ReactiveFormsModule
    ],
    providers: [
        {
            provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false},
        },
    ]
})

export class SharedComponentsModule {}
