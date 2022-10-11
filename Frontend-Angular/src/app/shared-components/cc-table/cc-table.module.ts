import { NgModule } from "@angular/core";
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
    imports: [
        MatTableModule,
        MatPaginatorModule
    ],
    declarations: [],
    exports: [
        MatTableModule,
        MatPaginatorModule
    ]
})

export class CCTableModule {}
