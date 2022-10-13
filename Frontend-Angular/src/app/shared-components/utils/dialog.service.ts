import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DialogRef } from "./interfaces/dialog-ref.interface";

@Injectable({
    providedIn: 'root'
})
export class DialogService {
    constructor(private dialog: MatDialog){
    }
    
    /**
     * Open dialog
     * @param dialogComponent
     * @param dialogRef - dialog options
     */
    open(dialogComponent: any, dialogRef: DialogRef): void{
        this.dialog.open(dialogComponent, dialogRef);
    }

    /**
     * Close dialog
     */
    close(): void{
        this.dialog.closeAll();
    }
}
