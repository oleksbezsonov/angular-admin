import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';
import { NgaModule } from '../../theme/nga.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule, ModalModule } from 'ng2-bootstrap';
import { SetupComponent } from './setup.component';
import { UsersComponent } from './userlist/users.component';
import { ImportUsersComponent } from './importusers/importusers.component';
import { SetupRouting } from './setup.routing';
import { SampleDatePickerModule } from '../components/date-picker/sample-date-picker-normal/sample-date-picker-normal.module';
import { AccordionModule } from 'ng2-bootstrap/accordion';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgUploaderModule } from 'ngx-uploader';


@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    NgaModule,
    SampleDatePickerModule,
    DropdownModule.forRoot(),
    ModalModule.forRoot(),
    SetupRouting,
    AccordionModule.forRoot(),
    Ng2SmartTableModule,
    NgUploaderModule
  ],
  declarations: [
  	SetupComponent,
  	UsersComponent,
    ImportUsersComponent
  ]
})
export class SetupModule { }