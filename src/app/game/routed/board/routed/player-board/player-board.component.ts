import {Component, Input, OnInit} from '@angular/core';
import {Card} from '../../../../../shared/model/card.model';
import {CardsService} from '../../../../../shared/services/cards.service';
import {User} from '../../../../../shared/model/user.model';
import {Player} from '../../../../../shared/model/player.model';
import {Observable, Observer} from 'rxjs';
import {Move} from '../../../../../shared/model/move.model';
import {GameService} from '../../../../../shared/services/game.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-player-board',
  templateUrl: './player-board.component.html',
  styleUrls: ['./player-board.component.scss']
})
export class PlayerBoardComponent implements OnInit {

  selectedCard: Card[];
  @Input() currentplayerObserver: Observable<Player>;
  @Input() nextPlayerIdObservable: Observable<number>;
  nextPlayerId: number;
  currentplayer: Player;
  cards: Card[] = [];
  gameId: number;
  constructor(private _cardService: CardsService, private _gameService: GameService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.currentplayerObserver.subscribe( player => {
      this.currentplayer = player;
      const cards: Card[] = this._cardService.stringtoCards(this.currentplayer.hand);
      if (this.cards.length !== cards.length) {
        this.cards = cards;
      }
    });
    this.gameId = +this.route.snapshot.paramMap.get('gameId');

    this.nextPlayerIdObservable.subscribe(playerId => {
      this.nextPlayerId = playerId;
    });
  }

  playCards() {
    const cardToPlay: Card[] = this.getSelectedCards();
    if (cardToPlay.length == 0) {
      return;
    }
    const value = this._cardService.cardsToString(cardToPlay);
    const move: Move = new Move();
    move.player = this.currentplayer;
    move.cardsPlayed = value;

    this._gameService.playMove(this.gameId, this.currentplayer.id, move).subscribe(data => {
      console.log(data);
    },
      error => {
      console.log('error', error);
      });

  }

  passTurn() {
    const move: Move = new Move();
    move.player = this.currentplayer;
    move.cardsPlayed = '0';

    this._gameService.playMove(this.gameId, this.currentplayer.id, move).subscribe(data => {
        console.log(data);
      },
      error => {
        console.log('error', error);
      });

  }

  getSelectedCards(): Card[] {
    this.selectedCard = [];
    for (const card of this.cards) {
      if (card.toggled) {
        this.selectedCard.push(card);
      }
    }
    return this.selectedCard;

  }
}
