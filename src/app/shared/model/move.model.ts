import {Player} from './player.model';

export class Move {
  id: number;
  cardsPlayed: string;
  player: Player;
  created: Date;
}
