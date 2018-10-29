import { Injectable } from '@angular/core';
import {CARDS} from '../model/cards';
import {Card} from '../model/card.model';
import {Big} from 'big.js';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  private cards = CARDS;
  puiss: number;

  constructor() {
    this.puiss = 123;
  }

  stringtoCards(value: string): Card[] {
    let x = new Big(value);
    const p = new Big(this.puiss);
    const cards: Card[] = [];
    while ( !x.eq(new Big('0'))) {
      const l = x.mod(p);
      x = x.minus(l);
      x = x.div(p);
      cards.push(new Card(l.toString()));
    }
    return cards;
  }

  public cardsToString(cards: Card[]): string {
    let index = 0;
    let value = new Big('0');
    const p = new Big(this.puiss);
    for (const card of cards) {
      const pow = new Big(p.pow(index));
      value = value.add(pow.times(new Big(card.str)));
      index = index + 1;
    }
    return value.toString();
    /*
            int index = 0;
        BigInteger value = BigInteger.ZERO;
        BigInteger pow;
        BigInteger puiss = new BigInteger(String.valueOf(123));
        for (Card card : cards) {
            pow = puiss.pow(index);
            value = value.add(pow.multiply(new BigInteger(card.getStringValue())));
            index++;
        }
     */
  }
}
