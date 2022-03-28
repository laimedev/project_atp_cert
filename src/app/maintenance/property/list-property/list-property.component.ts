import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PropertyService } from '../services/property.service';
import { Router } from '@angular/router';
import { Map, tileLayer } from 'leaflet';

@Component({
  selector: 'app-list-property',
  templateUrl: './list-property.component.html',
  styleUrls: ['./list-property.component.scss']
})
export class ListPropertyComponent implements OnInit {

  listProducer: any [] = [];
  displayedColumns: string[] = ['idProperty','nameProperty', 'Address', 'Area', 'Altitude', 'Longitude', 'Wakers', 'options'];
  dataSource = new MatTableDataSource(this.listProducer);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public propertyService: PropertyService,
              public router: Router) { }

  ngOnInit(): void {
    this.propertyService.getAll().subscribe(resp => {
      console.log(resp);
      this.dataSource = resp;
    })
  }


  ngAfterViewInit(): void {
    const map = new Map('map').setView([51.505, -0.09],13);

    tileLayer('https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png', {
      maxZoom: 20,
      attribution: '<a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases" title="CyclOSM - Open Bicycle render">CyclOSM</a> | Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

  }

  verMas(element){
    console.log(element);
    this.router.navigateByUrl(`admin/property.form/${element.idProperty}`);
  }

}
