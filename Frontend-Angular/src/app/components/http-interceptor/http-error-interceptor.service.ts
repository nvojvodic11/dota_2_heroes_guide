import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {Observable, throwError } from "rxjs";
import {catchError} from "rxjs/operators";
import { CCInfoDialogComponent } from "src/app/shared-components/cc-dialogs/cc-info-dialog/cc-info-dialog.component";
import { DialogService } from "src/app/shared-components/utils/dialog.service";

@Injectable({
    providedIn: 'root'
})
export class HttpErrorInterceptor implements HttpInterceptor {
    constructor(private dialogService: DialogService){}

    intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(httpRequest).pipe(
            catchError((httpError: HttpErrorResponse) => {
                const message = this.showErrorMessage(httpError.status);
                const error = new Error(message);
                const dialogRef = {
                    data: {
                        title: 'Info',
                        message: message
                    },
                };

                this.dialogService.open(CCInfoDialogComponent, dialogRef)

                return throwError(() => error);
            })
        );
    }

    showErrorMessage(status: number): string{
        let message: string;
        
        switch(status){
            case 401:
                message = 'Unauthorized!';
            break;
            case 403:
                message = 'Forbiden!';
            break;
            case 404:
                message = 'Not found!';
            break;
            case 422:
                message = 'Invalid data provided!';
            break;
            case 500:
            case 501:
            case 502:
            case 503:
                message = 'Server error!';
            break;
            default:
                this.dialogService.close();
                message = 'There was a problem, please contact IT support!';
        }

        return message;
    }
}
