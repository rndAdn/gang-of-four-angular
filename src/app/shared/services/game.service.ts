import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Game} from '../model/game.model';
import {environment} from '../../../environments/environment';
import {Move} from '../model/move.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  URL = `${environment.apiURL}/game`;

  constructor(private _http: HttpClient) { }

  getCurrentGamesByUser(playerId: number): Observable<Game[]> {
    return this._http.get<Game[]>(`${this.URL}/games/player/${playerId}`);
  }

  getGamesById(gameId: string, playerId: string): Observable<Game> {
    return this._http.get<Game>(`${this.URL}/${gameId}/player/${playerId}`);
  }

  createNewGame(playerId: number) {
    return this._http.post(`${this.URL}/create/user/${playerId}`, {})
      .pipe(map(user => {
      console.log('created game ', user);
    }));
  }

  getGamesWhthoutUser(playerId: number): Observable<Game[]> {
    return this._http.get<Game[]>(`${this.URL}/games/reachable/player/${playerId}`);
  }

  joinGame(gameId: number, playerId: number): Observable<Game> {
    return this._http.post<Game>(`${this.URL}/join/${gameId}/user/${playerId}`, {});
  }

  playMove(gameId: number, playerId: number, move: Move): Observable<Move> {
    console.log('service playMove called', move);
    return this._http.post<Move>(`${this.URL}/${gameId}/player/${playerId}/move`, move);
  }

}
