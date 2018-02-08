import { Component, ViewChild, ElementRef } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';

import * as GoogleMapsLoader from 'google-maps';

@Component({
  selector: 'dispatched',
  styleUrls: ['./googleMaps.scss'],
  templateUrl: './dispatched.component.html'
})

export class DispatchedComponent{
  @ViewChild('childModal') childModal: ModalDirective;

  showChildModal(): void {
    this.childModal.show();
  }

  hideChildModal(): void {
    this.childModal.hide();
  }
  
  constructor(private _elementRef:ElementRef) {
  }

  ngAfterViewInit() {
    let el = this._elementRef.nativeElement.querySelector('.google-maps');

    // TODO: do not load this each time as we already have the library after first attempt
    GoogleMapsLoader.load((google) => {
      let map = new google.maps.Map(el, {
        center: new google.maps.LatLng(44.5403, -78.5463),
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });
      let marker1 = new google.maps.Marker({ 
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: new google.maps.LatLng(44.5403, -78.5463),
        map: map,
        title:"Hello World!"
      });
      let marker2 = new google.maps.Marker({ 
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: new google.maps.LatLng(47.5403, -70.5463),
        map: map,
        title:"Hello World!"
      });
    });
  }
}