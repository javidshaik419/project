import { Injectable } from '@angular/core';

import {
HttpInterceptor,
HttpRequest,
HttpResponse,
HttpHandler,
HttpEvent,
HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
// import { MatSnackBar } from '@angular/material';

@Injectable(
{    providedIn: 'root'
}
)
export class HttpConfigInterceptor implements HttpInterceptor {
 constructor() { }       

intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
let reqClone;

let token = localStorage.getItem('token')



if (token) {
    // console.log("toekn is availableeeee=======>>",token)
reqClone = request.clone({ setHeaders: { 'x-access-token': token } });
} else {

reqClone = request.clone();
}





return next.handle(reqClone).pipe(catchError((error: HttpErrorResponse) => {
console.log(error,"token errorrrr=========>s");
if (error.status === 400) {

} else if (error['code'] === 401) {

    console.log("token expiredddddd")

} else if (error.status === 403) {
// this.snackBar.open(error.error.message, 'Try again!', {
// duration: 2000
// });
}
return throwError(error);
})
);
}
}