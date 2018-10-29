import {Component, Input, OnInit} from '@angular/core';
import {Game} from '../../../../../shared/model/game.model';
import {User} from '../../../../../shared/model/user.model';
import {GameService} from '../../../../../shared/services/game.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-game-item',
  templateUrl: './list-game-item.component.html',
  styleUrls: ['./list-game-item.component.scss']
})
export class ListGameItemComponent implements OnInit {

  @Input() game: Game;
  @Input() joinable = false;
  @Input() playable = false;
  currentUser: User;

  constructor(private _gameService: GameService, private router: Router) { }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  joinGame() {
    this._gameService.joinGame(this.game.id, this.currentUser.id).subscribe(
      data => {
        this.router.navigate(['/game', data.id, 'player', this.currentUser.id]);
      }
    );

  }
}
