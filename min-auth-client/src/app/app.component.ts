import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  template: `
  <app-header></app-header>
  <div style="padding-top: 0.5em">
    <router-outlet></router-outlet>
  </div>
  `,
  styles: []
})
export class AppComponent {}
