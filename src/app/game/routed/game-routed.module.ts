import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {RouterModule} from '@angular/router';
import {LobbyModule} from "./lobby/lobby.module";
import {BoardModule} from "./board/board.module";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    LobbyModule,
    BoardModule
  ],
  declarations: [

   ]
})
export class GameRoutedModule { }
