import { Component, OnInit, Input } from '@angular/core';

import { Map, marker, tileLayer } from 'leaflet';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-property',
  templateUrl: './form-property.component.html',
  styleUrls: ['./form-property.component.scss']
})
export class FormPropertyComponent implements OnInit {



  @Input() latitude: any  = '-12.046374';
  @Input() longitude: any = '-77.0427934';
  sizeMap:  number = 18;

  constructor(public router: Router) { }

  ngOnInit(): void {
  }


  ngAfterViewInit(): void {
    const map = new Map('map').setView([ this.latitude , this.longitude ], this.sizeMap);
    tileLayer('https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png', {
      maxZoom: 20,
      // attribution: '<a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases" title="CyclOSM - Open Bicycle render">CyclOSM</a> | Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    const markerItem =  marker([this.latitude , this.longitude ]).addTo(map).bindPopup("Sede Lima Centro - Amazonas Trading SAC").openPopup();
    map.fitBounds([
      [markerItem.getLatLng().lat, markerItem.getLatLng().lng]
    ]);
  }


  regresar(){
    this.router.navigateByUrl(`admin/property.list`);
  }

}
