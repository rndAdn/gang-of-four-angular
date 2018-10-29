import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BoardRoutedModule} from "./routed/board-routed.module";

@NgModule({
  imports: [
    CommonModule,
    BoardRoutedModule
  ],
  declarations: []
})
export class BoardModule { }
