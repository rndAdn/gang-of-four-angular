import {Component, Input, OnInit} from '@angular/core';
import {GameService} from '../../../../../shared/services/game.service';
import {interval, Subscription} from 'rxjs';
import {User} from '../../../../../shared/model/user.model';
import {Game} from '../../../../../shared/model/game.model';

@Component({
  selector: 'app-list-opened-game',
  templateUrl: './list-opened-game.component.html',
  styleUrls: ['./list-opened-game.component.scss']
})
export class ListOpenedGameComponent implements OnInit {
  @Input() user: User;
  openedGames: Game[];
  private subInner: Subscription;
  private subOuter: Subscription;

  constructor(private _gameService: GameService) { }

  ngOnInit() {
    this._gameService.getGamesWhthoutUser(this.user.id).subscribe(games => {
      this.openedGames = games;
    });

   /* this.subOuter = interval(1000).subscribe((counter) => {
      if (this.subInner !== undefined) {
        this.subInner.unsubscribe();
      }
      this.subInner = this._gameService.getGamesWhthoutUser(this.user.id).subscribe(games => {
        const size = this.openedGames.length;
        this.openedGames = this.openedGames.concat(games.slice(size));
      });
    });*/
  }


  creatnewGame() {
    this._gameService.createNewGame(this.user.id).subscribe();
  }

  ngOnDestroy() {
    if (this.subInner !== undefined) {
      this.subInner.unsubscribe();
    }
    if (this.subOuter !== undefined) {
      this.subOuter.unsubscribe();
    }
  }
}
