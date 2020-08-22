import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router, ROUTES } from '@angular/router';

declare var ng: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated
})
export class ContactComponent implements OnInit {
  map = {
    zoom: 17,
    center: {lat: 43.808883, lng: -79.252736},
    options: google.maps.MapOptions = {
      mapTypeId: 'hybrid',
      zoomControl: true,
      scrollwheel: false,
      disableDoubleClickZoom: true,
      maxZoom: 20,
      minZoom: 12,
    },
  };
  marker = {
    position: {
    lat: 43.808883,
    lng: -79.252736,
    },
    label: {
      color: 'black',
      text: 'A',
    },
    title: 'Scottfield Auto Centre',
  };

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.map);
  }

}
