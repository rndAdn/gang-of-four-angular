import { Component, OnInit } from '@angular/core';

import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {PlayerService} from '../shared/services/player.service';
import {User} from '../shared/model/user.model';
import {AuthenticationService} from "../shared/services/authentication.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentUser: User;

  constructor(private router: Router, private userService: PlayerService, private _authenticationService: AuthenticationService) {

  }

  ngOnInit() {
     //this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this._authenticationService.getLoggedInName.subscribe(user => this.currentUser = user);
  }
  onLogout() {
    this._authenticationService.logout();
    console.log('logout');
    this.router.navigate(['/login']);
  }

  goToLobby() {
    this.router.navigate(['/player', this.currentUser.id, 'game', 'lobby']);
  }


}
