import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  template: `
  <app-header></app-header>
  <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {}
