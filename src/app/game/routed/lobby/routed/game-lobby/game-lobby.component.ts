import { Component, OnInit } from '@angular/core';
import {User} from '../../../../../shared/model/user.model';
import {PlayerService} from '../../../../../shared/services/player.service';
import {GameService} from '../../../../../shared/services/game.service';
import {CARDS} from '../../../../../shared/model/cards';

@Component({
  selector: 'app-game-lobby',
  templateUrl: './game-lobby.component.html',
  styleUrls: ['./game-lobby.component.scss']
})
export class GameLobbyComponent implements OnInit {

  currentUser: User;
  cards = CARDS;

  constructor(private userService: PlayerService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    console.log('GameLobbyComponent', this.currentUser);
    userService.getPlayerById(String(this.currentUser.id)).subscribe();
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
  }

}
