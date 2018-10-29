import {Component, OnInit, OnDestroy, EventEmitter} from '@angular/core';
import {Game} from '../../../../../shared/model/game.model';
import {GameService} from '../../../../../shared/services/game.service';
import {ActivatedRoute} from '@angular/router';
import {interval, Observable, Subject, Subscription} from 'rxjs';
import {CardsService} from '../../../../../shared/services/cards.service';
import {Player} from '../../../../../shared/model/player.model';
import {Move} from '../../../../../shared/model/move.model';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent implements OnInit, OnDestroy {

  currentGame: Game;


  private subInner: Subscription;
  private subOuter: Subscription;

  player1: Subject<Player> = new Subject<Player>();
  opponent2: Subject<Player> = new Subject<Player>();
  opponent3: Subject<Player> = new Subject<Player>();
  opponent4: Subject<Player> = new Subject<Player>();
  nextPlayerId: Subject<number> = new Subject<number>();
  lastMove: Subject<Move> = new Subject<Move>();


  winner: Player;



  constructor(private _gameService: GameService, private route: ActivatedRoute, private _cardService: CardsService) {
  }

  ngOnInit() {
    this._gameService.getGamesById(this.route.snapshot.paramMap.get('gameId'), this.route.snapshot.paramMap.get('playerId'))
      .subscribe(_game => {
        this.currentGame = _game;
        this.setPlayer();
        this.checkIfFinish(_game);
      });

    this.subOuter = interval(500).subscribe(() => {
      if (this.subInner !== undefined) {
        this.subInner.unsubscribe();
      }
      this.subInner = this._gameService.getGamesById(this.route.snapshot.paramMap.get('gameId'),
        this.route.snapshot.paramMap.get('playerId')).subscribe(_game => {
          this.currentGame = _game;
          this.setPlayer();
          this.checkIfFinish(_game);

        });
    });
  }

  checkIfFinish(_game : Game){
    if (_game.gameStatus === 'FINISHED') {
      this.winner = this.currentGame.moveList[this.currentGame.moveList.length - 1].player;
      this.subInner.unsubscribe();
      this.subOuter.unsubscribe();
    }
  }

  setPlayer() {
    const userId = +this.route.snapshot.paramMap.get('playerId');
    let i: number;
    const num = 0;
    const n = this.currentGame.players.length;
    let turn: number;
    for (i = num; i < n; i++) {
      if (this.currentGame.players[i].id === userId) {
        turn = this.currentGame.players[i].turn;
        this.player1.next(this.currentGame.players[i]);
      }
    }
    turn = turn % 4 + 1;
    for (i = num; i < n; i++) {
      if (this.currentGame.players[i].turn === turn) {
        this.opponent2.next(this.currentGame.players[i]);
      }
    }
    turn = turn % 4 + 1;
    for (i = num; i < n; i++) {
      if (this.currentGame.players[i].turn === turn) {
        this.opponent3.next(this.currentGame.players[i]);
      }
    }
    turn = turn % 4 + 1;
    for (i = num; i < n; i++) {
      if (this.currentGame.players[i].turn === turn) {
        this.opponent4.next(this.currentGame.players[i]);
      }
    }

    if (this.currentGame.moveList) {
      this.lastMove.next(this.currentGame.moveList[this.currentGame.moveList.length - 1]);
    } else {
      this.lastMove.next(undefined);
    }

    this.nextPlayerId.next(this.currentGame.nextPlayer.id);

  }


  getPlayer1(): Observable<Player> {
    return this.player1.asObservable();
  }

  getPlayer2(): Observable<Player> {
    return this.opponent2.asObservable();
  }

  getPlayer3(): Observable<Player> {
    return this.opponent3.asObservable();
  }

  getPlayer4(): Observable<Player> {
    return this.opponent4.asObservable();
  }

  getLastMove(): Observable<Move> {
    return this.lastMove.asObservable();
  }


  ngOnDestroy() {
    this.subInner.unsubscribe();
    this.subOuter.unsubscribe();
  }


}
