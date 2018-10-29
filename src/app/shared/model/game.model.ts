import {Player} from './player.model';
import {Move} from './move.model';

export class Game {

  id: number;
  nextPlayer: Player;
  created: Date;
  gameStatus: string;
  moveList: Move[];
  players: Player[];
}
