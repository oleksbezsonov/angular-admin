import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecordsComponent } from './records.component';
import { RequestsComponent } from './requests/requests.component';
import {RecordRequest} from './request_record/request_record.component'


const routes: Routes = [
  {
    path: '',
    component: RecordsComponent,    
    children: [
      {
        path: 'requests',
        component: RequestsComponent
      },
      {
        path: 'requests_record',
        component: RecordRequest
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecordsRouting {}
