import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpInterceptor } from '@angular/common/http';
import { request } from 'http';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor{

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler)
  {
    let username = 'anasmarg';
    let password = 'dummy';
    let basicAuthHeaderString = 'Basic' + window.btoa(username + ':' + password);

    request = request.clone({
      setHeaders : {
        Authorization : basicAuthHeaderString
      }
    }
    )

    return next.handle(request);
  }

}
