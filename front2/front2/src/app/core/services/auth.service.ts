import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { delay, map } from 'rxjs/operators';
import * as jwt_decode from 'jwt-decode';
import * as moment from 'moment';

import { environment } from '../../../environments/environment';
import { of, EMPTY } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    currentUser : any;
    constructor(private http: HttpClient,
        @Inject('LOCALSTORAGE') private localStorage: Storage) {
    }

    login(email: string, password: string) {
       return this.http.post(environment.api + 'login', {username: email, password});
    }

    getAllCient() {
        return this.http.get(environment.api + 'clients');
     }

     getAllStock() {
        return this.http.get(environment.api + 'stock');
     }
     removeStock(request: any) {
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type': 'application/json',
            }),
            body: JSON.stringify(request), 
          };
        return this.http.delete(environment.api + 'stock', httpOptions);
     }
     addStock(request: any) {
        return this.http.post(environment.api + 'stock', request);
     }
    logout(): void {
        // clear token remove user from local storage to log user out
        this.localStorage.removeItem('currentUser');
    }

    getCurrentUser(): any {
        // TODO: Enable after implementation
        // return JSON.parse(this.localStorage.getItem('currentUser'));
        return this.currentUser;
    }

    setCurrentUser(data: any): any {
        console.log("setCurrentUser:", data);
        
         this.currentUser = {
            token: 'aisdnaksjdn,axmnczm',
            isAdmin: (data.role == 'admin' ? true : false),
            email: data.email,
            id: data.id,
            alias: data.email.split('@')[0],
            expiration: moment().add(1, 'days').toDate(),
            fullName: data.fullName
            };
         localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
    }

    passwordResetRequest(email: string) {
        return of(true).pipe(delay(1000));
    }

    changePassword(email: string, currentPwd: string, newPwd: string) {
        return of(true).pipe(delay(1000));
    }

    passwordReset(email: string, token: string, password: string, confirmPassword: string): any {
        return of(true).pipe(delay(1000));
    }
}
