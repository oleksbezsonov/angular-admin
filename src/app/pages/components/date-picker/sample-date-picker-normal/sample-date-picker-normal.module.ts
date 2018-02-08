import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { MyDatePickerModule } from '../my-date-picker/my-date-picker.module';
import { SampleDatePickerNormal } from './sample-date-picker-normal.component';

@NgModule({
  imports: [
  	CommonModule,
  	MyDatePickerModule
  ],
  declarations: [
  	SampleDatePickerNormal
  ],
  exports: [
  	SampleDatePickerNormal
  ]
})
export class SampleDatePickerModule { }