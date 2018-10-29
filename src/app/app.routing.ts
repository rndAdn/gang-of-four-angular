import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './user/routed/login/login.component';
import {AuthGuard} from './shared/_guards/auth.guard';
import {RegisterComponent} from './user/routed/register/register.component';
import {GameLobbyComponent} from './game/routed/lobby/routed/game-lobby/game-lobby.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {UnderConstructionComponent} from './under-construction/under-construction.component';
import {GameBoardComponent} from './game/routed/board/routed/game-board/game-board.component';


const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'player/:id/game/lobby', component: GameLobbyComponent, canActivate: [AuthGuard] },
  { path: 'player/:id', component: UnderConstructionComponent, canActivate: [AuthGuard] },
  { path: 'game/:gameId/player/:playerId', component: GameBoardComponent, canActivate: [AuthGuard] },
  { path: '404', component: NotFoundComponent},
  { path: '**', component: NotFoundComponent }

];





@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
