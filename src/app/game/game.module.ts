import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GameRoutedModule} from './routed/game-routed.module';

@NgModule({
  imports: [
    CommonModule,
    GameRoutedModule,
  ],
  declarations: []
})
export class GameModule { }
