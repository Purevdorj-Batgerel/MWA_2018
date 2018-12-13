import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
import { UserDetailsComponent } from './userDetails.component';
import { CheckUserExistsGuard } from '../check-user-exists.guard';

@NgModule({
  declarations: [
    UsersComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: UsersComponent },
      { path: 'users/:id', component: UserDetailsComponent, canActivate: [CheckUserExistsGuard] }
    ])
  ],
  providers: [],
  bootstrap: [UsersComponent]
})
export class UsersModule { }
