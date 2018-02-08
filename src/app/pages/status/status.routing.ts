import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StatusComponent } from './status.component';
import { DispatchedComponent } from './dispatched/dispatched.component';
import { EnRouteComponent } from './en_route/enroute.component';
import { PendingComponent } from './pending/pending.component';
import { ScheduledComponent } from './scheduled/scheduled.component';
import { UnscheduledComponent } from './unscheduled/unscheduled.component';

const routes: Routes = [
  {
    path: '',
    component: StatusComponent,    
    children: [
      {
        path: 'unscheduled',
        component: UnscheduledComponent
      },
      {
        path: 'scheduled',
        component: ScheduledComponent
      },
      {
        path: 'dispatched',
        component: DispatchedComponent
      },
      {
        path: 'enroute',
        component: EnRouteComponent
      },
      {
        path: 'pending',
        component: PendingComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatusRouting {}
