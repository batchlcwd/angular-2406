import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  filter,
  Observable,
  switchMap,
  throwError,
} from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  // ✅ Flag to prevent multiple refresh calls at same time
  private isRefreshing = false;
  // ✅ Stores the new token for pending requests while refresh is happening

  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(
    null
  );

  constructor(private _authService: AuthService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this._authService.getLocalToken();
    console.log('adding token to header ', token);

    let clonedReq = req;

    if (token) clonedReq = this.addTokenHeader(req, token);

    return next.handle(clonedReq).pipe(
      catchError((error) => {
        // error:

        console.log(error);
        console.log('error in JwtInterceptor');

        if (error instanceof HttpErrorResponse && error.status === 401) {
          console.log('trying to refresh token');
          // token ko refresh karn chahie
          return this.handle401Error(clonedReq, next);
        }

        return throwError(() => error);
      })
    );
  }
  handle401Error(
    clonedReq: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // ✅ If we are already refreshing the token, wait for it to complete

    if (!this.isRefreshing) {
      //call refresh token api

      //////////

      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);

      return this._authService.refreshToken().pipe(
        switchMap((response: any) => {
          console.log('refresh token ' + response);
          this.isRefreshing = false;
          this.refreshTokenSubject.next(response.token);
          return next.handle(this.addTokenHeader(clonedReq, response.token));
        }),
        catchError((error) => {
          this.isRefreshing = false;
          this._authService.logout();
          console.error('Refresh token failed', error);
          return throwError(() => error);
        })
      );
    } else {
      // ✅ If refresh already in progress → wait for it to finish
      return this.refreshTokenSubject.pipe(
        filter((token) => token != null),
        switchMap((token) => next.handle(this.addTokenHeader(clonedReq, token)))
      );
    }
  }

  // add autherization token
  addTokenHeader(req: HttpRequest<any>, token: string) {
    return req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`),
    });
  }
}
