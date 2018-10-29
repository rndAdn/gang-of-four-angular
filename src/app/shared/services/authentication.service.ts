import {EventEmitter, Injectable, Output} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { map } from 'rxjs/operators';
import {environment} from '../../../environments/environment';


import {User} from '../model/user.model';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

  URL = `${environment.apiURL}/public/users`;

  @Output() getLoggedInName: EventEmitter<User> = new EventEmitter();
  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.post<any>(`${this.URL}/login`, {  username, password } )
      .pipe(map(user => {
        let u: User;
        u = user;

        // login successful if there's a jwt token in the response
        if (u && u.token) {
          console.log('auth service login success ', u);
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(u));
          this.getLoggedInName.emit(u);
        }
        return u;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.getLoggedInName.emit(undefined);
  }


  register(user: User) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    return this.http.post(`${this.URL}/register`, JSON.stringify(user), {headers: headers});
  }
}
