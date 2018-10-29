import {Component, Input, OnInit} from '@angular/core';
import {Card} from '../../../../../shared/model/card.model';
import {Player} from '../../../../../shared/model/player.model';
import {Observable} from 'rxjs';
import {CardsService} from '../../../../../shared/services/cards.service';
import {Move} from '../../../../../shared/model/move.model';

@Component({
  selector: 'app-last-move-board',
  templateUrl: './last-move-board.component.html',
  styleUrls: ['./last-move-board.component.scss']
})
export class LastMoveBoardComponent implements OnInit {

  @Input() moveObserver: Observable<Move>;
  cards: Card[] = [];
  move: Move;
  constructor(private _cardService: CardsService) { }

  ngOnInit() {
    this.moveObserver.subscribe( move => {
      if(move) {
        if (!this.move || this.move.id !== move.id) {
          this.move = move;
          this.cards = this._cardService.stringtoCards(move.cardsPlayed);

        }
      }
    });


  }

}
