import {Component, Input, OnInit, OnDestroy } from '@angular/core';
import {User} from '../../../../../shared/model/user.model';
import {Game} from '../../../../../shared/model/game.model';
import {GameService} from '../../../../../shared/services/game.service';
import {interval, Subscription} from 'rxjs';

@Component({
  selector: 'app-list-game-with-player',
  templateUrl: './list-game-with-player.component.html',
  styleUrls: ['./list-game-with-player.component.scss']
})
export class ListGameWithPlayerComponent implements OnInit, OnDestroy {
  @Input() user: User;
  gamesWithPlayer: Game[];
  private subInner: Subscription;
  private subOuter: Subscription;

  constructor(private _gameService: GameService) { }

  ngOnInit() {
    this._gameService.getCurrentGamesByUser(this.user.id).subscribe(games => {
      this.gamesWithPlayer = games;
    });

    this.subOuter = interval(1000).subscribe(() => {
      if (this.subInner !== undefined) {
        this.subInner.unsubscribe();
      }
      this.subInner = this._gameService.getCurrentGamesByUser(this.user.id).subscribe(games => {
        const size = this.gamesWithPlayer.length;
        this.gamesWithPlayer = this.gamesWithPlayer.concat(games.slice(size));
      });
    });
  }


  creatnewGame() {
    this._gameService.createNewGame(this.user.id).subscribe();
  }

  ngOnDestroy() {
    this.subInner.unsubscribe();
    this.subOuter.unsubscribe();
  }
}
