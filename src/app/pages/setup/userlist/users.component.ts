import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDirective } from 'ng2-bootstrap';

@Component({
  selector: 'users',
  templateUrl: './users.component.html'
})

export class UsersComponent{
  @ViewChild('childModal') childModal: ModalDirective;

  constructor(private router: Router){}

  showChildModal(): void {
    this.childModal.show();
  }

  hideChildModal(): void {
    this.childModal.hide();
  }

  onImportUser(): void {
  	this.router.navigate(['/pages/setup/importusers']);
  }
}