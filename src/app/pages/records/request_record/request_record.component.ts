import {Component} from '@angular/core';

@Component({
  selector: 'request_record',
  styleUrls: ['./request_record.scss'],  
  templateUrl: './request_record.html',
})
export class RecordRequest {

  public _rate1:number = 0;
  public _max1:number = 5;
  public hide_pending:string = "";
  public hide_scheduled:string = "";
  public hide_dispatched:string = "";

  public icon_accordion1:string = "ion-chevron-up";
  public icon_accordion2:string = "ion-chevron-up";
  public icon_accordion3:string = "ion-chevron-up";
  public icon_accordion4:string = "ion-chevron-up";
  
  constructor() {
  
  }
  hideItemPending() {
    this.hide_pending = "record-hide-tag";
  }
  hideItemScheduled() {
    this.hide_scheduled = "record-hide-tag";
  }
  hideItemDispatched() {
    this.hide_dispatched = "record-hide-tag";
  }
  OnAccordionClick(val)
  {
    if(val == 1)
    {
      if(this.icon_accordion1 == "ion-chevron-up")
      {
          this.icon_accordion1 = "ion-chevron-up";
      } else {
          this.icon_accordion1 = "ion-chevron-up";
      }
    } else if(val == 2)
    {
      if(this.icon_accordion2 == "ion-chevron-up")
      {
          this.icon_accordion2 = "ion-chevron-up";
      } else {
          this.icon_accordion2 = "ion-chevron-up";
      }
    } else if(val == 3)
    {
      if(this.icon_accordion3 == "ion-chevron-up")
      {
          this.icon_accordion3 = "ion-chevron-up";
      } else {
          this.icon_accordion3 = "ion-chevron-up";
      }
    } else if(val == 4)
    {
      if(this.icon_accordion4 == "ion-chevron-up")
      {
          this.icon_accordion4 = "ion-chevron-up";
      } else {
          this.icon_accordion4 = "ion-chevron-up";
      }
    } 
  }
}
