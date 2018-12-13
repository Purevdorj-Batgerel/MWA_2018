import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
    selector: 'app-user-details',
    template: `
    <p>User Details Component</p>
    {{userInfo}}
  `,
})
export class UserDetailsComponent {
    userInfo;
    constructor(dataService: DataService, route: ActivatedRoute) {
        route.params.subscribe(param => {
            this.userInfo = JSON.stringify(dataService.getUser(param.id));
            console.log(this.userInfo);
        });
    }
}
