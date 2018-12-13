import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
    selector: 'app-users',
    template: `
    <div>
        <ul>
            <li *ngFor="let user of userData"><a [routerLink]="['users', user.login.uuid]">{{user.name.first}} {{user.name.last}}</a></li>
        </ul>
    </div>
  `,
})
export class UsersComponent {
    userData: any[];
    constructor(data: DataService) {
        let userData: string = window.localStorage.getItem('data');
        if (userData != null) {
            this.userData = JSON.parse(userData);
        } else {
            data.getData().subscribe(
                resp => {
                    this.userData = resp.results;
                    window.localStorage.setItem('data', JSON.stringify(resp.results));
                },
                error => {
                    console.error(error);
                }
            );
        }
    }
}
