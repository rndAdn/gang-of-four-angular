import {User} from './user.model';

export class Player {
  id: number;
  userName: string;
  turn: number;
  cardLeft: number;
  profilePicture: string;
  hand: string;

  constructor(user: User) {
    this.id = user.id;
    this.userName = user.username;
    this.profilePicture = user.profilePicture;
  }
}
