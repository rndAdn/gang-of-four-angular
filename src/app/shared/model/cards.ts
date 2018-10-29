import {Card} from './card.model';

const values = [1, 2, 2, 4 , 5 , 6 , 7 , 8 , 9 , 10];

export const CARDS: Array<{strValue: string, card: Card}> = [];
const colors = ['G', 'Y', 'R'];
const tmp = [1, 2];

for ( const value of values) {
  for ( const color of colors) {
    for ( const t of tmp) {
      CARDS.push({strValue: value.toString().concat(color.toString()), card: new Card(value, color)});
    }
  }
}
CARDS.push({strValue: '11G', card: new Card(11, 'G')});
CARDS.push({strValue: '11Y', card: new Card(11, 'Y')});
CARDS.push({strValue: '12G', card: new Card(12, 'R')});
CARDS.push({strValue: '1M', card: new Card(1, 'M')});
