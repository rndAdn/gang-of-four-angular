import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../../../../shared/shared.module";
import {RouterModule} from "@angular/router";
import {GameBoardComponent} from "./game-board/game-board.component";
import {CardComponent} from "./card/card.component";
import {PlayerBoardComponent} from "./player-board/player-board.component";
import {OpponentBoardComponent} from "./opponent-board/opponent-board.component";
import {LastMoveBoardComponent} from "./last-move-board/last-move-board.component";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
  ],
  declarations: [
    GameBoardComponent,
    CardComponent,
    PlayerBoardComponent,
    OpponentBoardComponent,
    LastMoveBoardComponent
  ]
})
export class BoardRoutedModule { }
