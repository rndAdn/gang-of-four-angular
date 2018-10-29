import {Component, Input, OnInit} from '@angular/core';
import {Player} from '../../../../../shared/model/player.model';
import {Card} from '../../../../../shared/model/card.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-opponent-board',
  templateUrl: './opponent-board.component.html',
  styleUrls: ['./opponent-board.component.scss']
})
export class OpponentBoardComponent implements OnInit {

  @Input() opponentObservable: Observable<Player>;
  @Input() nextPlayerIdObservable: Observable<number>;
  nextPlayerId: number;
  opponent: Player;
  cards: Card[] = [];
  @Input() rorate: boolean;

  constructor() { }

  ngOnInit() {
    this.opponentObservable.subscribe(player => {
      this.opponent = player;
      if (this.cards.length !== player.cardLeft) {
        let i: number;
        const num = 0;
        this.cards = [];
        for (i = num; i < this.opponent.cardLeft; i++) {
          this.cards.push(new Card('000'));
        }
      }
    });

    this.nextPlayerIdObservable.subscribe(playerId => {
      this.nextPlayerId = playerId;
    });
  }


}
