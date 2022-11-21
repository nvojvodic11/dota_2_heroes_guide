import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from "@ngrx/store";
import { catchError, map, mergeMap, switchMap, tap } from "rxjs";
import * as itemsPageAction from './actions/items-page-action';
import * as itemsApiAction from './actions/items-api-action';
import { DialogService } from "src/app/shared-components/utils/services/dialog.service";
import { CCProcessDialogComponent } from "src/app/shared-components/cc-dialogs/cc-process-dialog/cc-process-dialog";
import { DialogRef } from "src/app/shared-components/utils/interfaces/dialog-ref.interface";
import { DialogTypeEnum } from "src/app/shared-components/cc-dialogs/enums/dialog-type.enum";
import { ItemsService } from "../services/items.service";
import { DialogRefEnum } from "../../shared/enums/dialog-ref.enum";

@Injectable({
    providedIn: 'root'
})
export class ItemsEffect {

    dialogRef: DialogRef;

    constructor(
        private actions$: Actions,
        private store: Store,
        private dialogService: DialogService,
        private itemsService: ItemsService
    ){
        this.dialogRef = {
            id: DialogTypeEnum.PROCESSING,
            width: DialogRefEnum.WIDTH,
        };
    }

    getAllItemsEffect$ = createEffect(
        () => this.actions$.pipe(
            ofType(itemsPageAction.getAllItems),
            switchMap(() => {
                return this.itemsService.getAllItems()
                .pipe(
                    map((result) => {
                        this.dialogService.close(DialogTypeEnum.PROCESSING);
                        result
                            ? this.store.dispatch(itemsApiAction.getAllItemsSuccessfull({items: result}))
                            : this.store.dispatch(itemsApiAction.actionFailed())
                    })
                );
            })
        ), {dispatch: false}
    );

    actionFailedEffect$ = createEffect(
        () => this.actions$.pipe(
            ofType(itemsApiAction.actionFailed),
            map((result) => {
                return result
            })
        ), {dispatch: false}
    );


}