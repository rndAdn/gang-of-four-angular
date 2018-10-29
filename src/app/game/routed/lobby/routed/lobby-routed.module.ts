import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GameLobbyComponent} from "./game-lobby/game-lobby.component";
import {ListGameItemComponent} from "./list-game-item/list-game-item.component";
import {ListGameWithPlayerComponent} from "./list-game-with-player/list-game-with-player.component";
import {ListOpenedGameComponent} from "./list-opened-game/list-opened-game.component";
import {SharedModule} from "../../../../shared/shared.module";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  declarations: [
    GameLobbyComponent,
    ListGameItemComponent,
    ListGameWithPlayerComponent,
    ListOpenedGameComponent
  ]
})
export class LobbyRoutedModule { }
