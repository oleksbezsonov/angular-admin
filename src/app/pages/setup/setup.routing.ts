import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SetupComponent } from './setup.component';
import { UsersComponent } from './userlist/users.component';
import { ImportUsersComponent } from './importusers/importusers.component';


const routes: Routes = [
  {
    path: '',
    component: SetupComponent,
    children: [
      {
        path: 'userList',
        component: UsersComponent
      },
      {
        path: 'importusers',
        component: ImportUsersComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetupRouting {}
