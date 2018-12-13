import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>App Component</h1>
    <a [routerLink]="['/']">Home</a>&nbsp;
    <a [routerLink]="['users']">Users</a>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent { }
