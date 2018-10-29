import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../model/user.model';
import {map} from 'rxjs/operators';
import {BehaviorSubject, Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Game} from "../model/game.model";
import {Player} from "../model/player.model";

@Injectable({
  providedIn: 'root'
})
export class PlayerService {


  URL = `${environment.apiURL}/player`;


  constructor(private _http: HttpClient) {
  }


  getPlayerById(id: string) : Observable<User>{

    return this._http.get<User>(`${this.URL}/${id}`)
      .pipe(map(user => {
        // login successful if there's a jwt token in the response

        console.log(user);
        if (user) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          const u2: User = JSON.parse(localStorage.getItem('currentUser'));
          if (u2 && u2.token) {
            user.token = u2.token;
          }
          localStorage.setItem('currentUser', JSON.stringify(user));
        }

        return user;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
}
