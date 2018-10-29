import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserRoutedModule} from './routed/user-routed.module';

@NgModule({
  imports: [
    CommonModule,
    UserRoutedModule
  ],
  declarations: []
})
export class UserModule { }
