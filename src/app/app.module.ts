import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {JwtInterceptor} from './shared/_helper/jwt.interceptor';
import {SharedModule} from './shared/shared.module';
import {AppRoutingModule} from './app.routing';
import {UserModule} from './user/user.module';
import {PlayerService} from './shared/services/player.service';
import {AuthenticationService} from './shared/services/authentication.service';
import {AlertService} from './shared/services/alert.service';
import {AuthGuard} from './shared/_guards/auth.guard';
import {GameModule} from './game/game.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { AlertComponent } from './alert/alert.component';



@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    AppRoutingModule,
    UserModule,
    GameModule
  ],
  declarations: [

    HeaderComponent,
    AppComponent,
    NotFoundComponent,
    UnderConstructionComponent,
    AlertComponent,
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    PlayerService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
