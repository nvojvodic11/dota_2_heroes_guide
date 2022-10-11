import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {Observable, throwError } from "rxjs";
import {catchError} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class HttpErrorInterceptor implements HttpInterceptor {
    intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(httpRequest).pipe(
            catchError((httpError: HttpErrorResponse) => {
                const message = this.showErrorMessage(httpError.status);
                const error = new Error(message);

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
                message = 'Server error';
            break;
            default:
                message = 'There was problem, please contact IT support';
        }

        return message;
    }
}
