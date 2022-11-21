import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {Observable, throwError } from "rxjs";
import {catchError} from "rxjs/operators";
import { CCInfoDialogComponent } from "src/app/shared-components/cc-dialogs/cc-info-dialog/cc-info-dialog.component";
import { DialogTypeEnum } from "src/app/shared-components/cc-dialogs/enums/dialog-type.enum";
import { HttpInterceptorMessages } from "src/app/shared-components/utils/enums/http-interceptor-messages.enum";
import { DialogService } from "src/app/shared-components/utils/services/dialog.service";

@Injectable({
    providedIn: 'root'
})
export class HttpErrorInterceptor implements HttpInterceptor {
    INFO = 'Info';

    constructor(private dialogService: DialogService){}

    intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(httpRequest).pipe(
            catchError((httpError: HttpErrorResponse) => {
                const message = this.showErrorMessage(httpError.status);
                const error = new Error(message);
                const dialogRef = {
                    data: {
                        title: this.INFO,
                        message: message
                    },
                };

                try {
                    this.dialogService.close(DialogTypeEnum.PROCESSING);
                } catch (error) {
                }

                this.dialogService.open(CCInfoDialogComponent, dialogRef)

                return throwError(() => error);
            })
        );
    }

    showErrorMessage(status: number): string{
        let message: string;
        
        switch(status){
            case 401:
                message = HttpInterceptorMessages.UNAUTHORIZED;
            break;
            case 403:
                message = HttpInterceptorMessages.FORBIDEN;
            break;
            case 404:
                message = HttpInterceptorMessages.NOT_FOUND;
            break;
            case 422:
                message = HttpInterceptorMessages.INVALID_DATA;
            break;
            case 500:
            case 501:
            case 502:
            case 503:
                message = HttpInterceptorMessages.CONTACT_SUPPORT;
            break;
            default:
                message = HttpInterceptorMessages.CONTACT_SUPPORT;
        }

        return message;
    }
}
