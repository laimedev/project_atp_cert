import { Component, OnInit, Input } from '@angular/core';

import { Map, marker, polygon, tileLayer } from 'leaflet';
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


  @Input() lat;
  @Input() long;

  constructor(public router: Router) { }

  ngOnInit(): void {
    console.log('DATOS ENVIADOS');
    console.log(this.lat);
    console.log(this.long);
  }


  ngAfterViewInit(): void {
    const map = new Map('map').setView([ this.latitude , this.longitude ], this.sizeMap);
    tileLayer('https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png', {
      maxZoom: 20,
    }).addTo(map);


    const latLngs: [number, number] [] = [
      [-11.04637, -77.0427934],
      [-12.03337, -73.0427634],
      [-10.04037, -72.0427034],
      [-9.04037, -72.0427034]
    ];

    polygon(latLngs, { color: 'orange'}).addTo(map);
    
    const markerItem =  marker([this.latitude , this.longitude ]).addTo(map).bindPopup("Sede Lima Centro - Amazonas Trading SAC").openPopup();
    map.fitBounds(latLngs );
  }


  regresar(){
    this.router.navigateByUrl(`admin/property.list`);
  }





}
