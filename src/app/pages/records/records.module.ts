import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule, ModalModule } from 'ng2-bootstrap';
import { RecordsComponent } from './records.component';
import { RequestsComponent } from './requests/requests.component';
import {RecordRequest} from './request_record/request_record.component'
import { RecordsRouting } from './records.routing';
import { SampleDatePickerModule } from '../components/date-picker/sample-date-picker-normal/sample-date-picker-normal.module';
import { AccordionModule } from 'ng2-bootstrap/accordion';
import { RatingModule } from 'ng2-bootstrap';


@NgModule({
  imports: [
    FormsModule,
    SampleDatePickerModule,
    DropdownModule.forRoot(),
    ModalModule.forRoot(),
    RecordsRouting,
    AccordionModule.forRoot(),
    RatingModule.forRoot()
  ],
  declarations: [
  	RecordsComponent,
  	RequestsComponent,
    RecordRequest,
  ]
})
export class RecordsModule { }