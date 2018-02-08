import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule, ModalModule } from 'ng2-bootstrap';
import { SampleDatePickerModule } from '../components/date-picker/sample-date-picker-normal/sample-date-picker-normal.module';
import { StatusComponent } from './status.component';
import { StatusRouting } from './status.routing';
import { DispatchedComponent } from './dispatched/dispatched.component';
import { EnRouteComponent } from './en_route/enroute.component';
import { PendingComponent } from './pending/pending.component';
import { ScheduledComponent } from './scheduled/scheduled.component';
import { UnscheduledComponent } from './unscheduled/unscheduled.component';
import { DatepickerModule } from 'ng2-bootstrap/datepicker';
import { AccordionModule} from 'ng2-bootstrap/accordion';
import { RatingModule } from 'ng2-bootstrap';


@NgModule({
  imports: [
    FormsModule,
    SampleDatePickerModule,
    DropdownModule.forRoot(),
    ModalModule.forRoot(),
    StatusRouting,
    AccordionModule.forRoot(),
    RatingModule.forRoot(),
  ],
  declarations: [
  	StatusComponent,
  	DispatchedComponent,
    EnRouteComponent,
    PendingComponent,
    ScheduledComponent,
    UnscheduledComponent,
  ]
})
export class StatusModule { }