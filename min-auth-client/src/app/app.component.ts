import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  template: `
  <app-header></app-header>
  <h1>
    {{title}}
  </h1>
  <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'app works!';
}
