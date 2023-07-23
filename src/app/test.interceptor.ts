import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError } from 'rxjs';

@Injectable()
export class TestInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token = localStorage.getItem("token");
    let newrequest = request.clone({
      headers: request.headers.set("Authentication", "Bearer" + token)
    });
    return next.handle(newrequest).pipe(catchError((err: HttpErrorResponse) => {
      console.log(err);
      return of();
    }));
  }
}
