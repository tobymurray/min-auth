import { Router } from '@angular/router';
import { Component } from '@angular/core';

import { UserService } from './../shared/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private userService: UserService, private router: Router) { }

  isSignedIn() {
    return this.userService.isSignedIn();
  }

  signOut() {
    this.userService.signOut();
    this.router.navigateByUrl("/");
  }

}
