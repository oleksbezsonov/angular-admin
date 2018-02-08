import { LocalDataSource } from 'ng2-smart-table';
import { NgUploaderOptions } from 'ngx-uploader';
import { Component, NgZone, Inject } from '@angular/core';

@Component({
  selector: 'importusers',
  styleUrls: ['./importusers.scss'],
  templateUrl: './importusers.html',
})
export class ImportUsersComponent {    

  public icon_accordion1:string = "ion-chevron-up";
  public icon_accordion2:string = "ion-chevron-up";

  options: NgUploaderOptions;
  response: any;
  hasBaseDropZoneOver: boolean;

  constructor(@Inject(NgZone) private zone: NgZone) {
    
    this.options = new NgUploaderOptions({
      url: 'http://api.ngx-uploader.com/upload',
      autoUpload: true,
      calculateSpeed: true
    });
  }

  handleUpload(data: any) {
    setTimeout(() => {
      this.zone.run(() => {
        this.response = data;
        if (data && data.response) {
          this.response = JSON.parse(data.response);
        }
      });
    });
  }

  fileOverBase(e: boolean) {
    this.hasBaseDropZoneOver = e;
  }

    source: LocalDataSource = new LocalDataSource();

    query: string = '';

    settings = {
      add: {
          addButtonContent: '<i class="ion-ios-plus-outline"></i>',
          createButtonContent: '<i class="ion-checkmark"></i>',
          cancelButtonContent: '<i class="ion-close"></i>',
      },
      edit: {
          editButtonContent: '<i class="ion-edit"></i>',
          saveButtonContent: '<i class="ion-checkmark"></i>',
          cancelButtonContent: '<i class="ion-close"></i>',
      },
      delete: {
          deleteButtonContent: '<i class="ion-trash-a"></i>',
          confirmDelete: true
      },
      columns: {
        name: {
          title: 'Name',
          type: 'string'
        },
        username: {
          title: 'Username',
          type: 'string'
        },
        email: {
          title: 'E-mail',
          type: 'string'
        },
        title: {
          title: 'Title',
          type: 'string'
        },
        phone: {
          title: 'Phone',
          type: 'string'
        },
        password: {
          title: 'Password',
          type: 'string'
        },
        address: {
          title: 'Address',
          type: 'string'
        },
        city: {
          title: 'City',
          type: 'string'
        },
        state: {
          title: 'State',
          type: 'string'
        }
      }
    };

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
    }
  }
}