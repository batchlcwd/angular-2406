import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastMessageService } from '../services/toast-message.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private _toast: ToastMessageService) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('going to request to server:');

    return next.handle(request).pipe(
      // response ane par:
      catchError((error: HttpErrorResponse) => {
        console.error('API Error:', error);

        if (error.status == 0) {
          this._toast.error('Your backend is down');
        }

        // Optionally: Show toast, redirect, or rethrow
        // this.toastr.error(error.message);

        if (error.error) {
          console.log(error);

          if (error.error.message.includes('Unauthorized')) {
            console.log('May be Token expired , trying to refresh');
          } else if (
            (error.error.message as string).includes(
              'Cannot delete or update a parent row'
            )
          ) {
            this._toast.error(
              'Error !! Reference of this alreay exists. First delete that.'
            );
          } else if (error.error.message.includes('JWT expired')) {
            console.log('Token expired trying to refresh token...');
          } else {
            this._toast.error(error.error.message);
          }
        } else {
          this._toast.error(error.message);
        }
        return throwError(() => error);
      })
    );
  }
}
