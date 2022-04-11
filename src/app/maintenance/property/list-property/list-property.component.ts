import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PropertyService } from '../services/property.service';
import { Router } from '@angular/router';
import { element } from 'protractor';

@Component({
  selector: 'app-list-property',
  templateUrl: './list-property.component.html',
  styleUrls: ['./list-property.component.scss']
})
export class ListPropertyComponent implements OnInit {

  listProducer: any [] = [];
  displayedColumns: string[] = ['idProperty','nameProperty', 'Address', 'Area', 'Altitude', 'Latitud' ,'Longitude', 'Wakers', 'options'];
  dataSource = new MatTableDataSource(this.listProducer);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  public latitude;
  public longitude;



  @Output()lat = new EventEmitter<String>();
  @Output()long = new EventEmitter<String>();


  constructor(public propertyService: PropertyService,
              public router: Router) { }

  ngOnInit(): void {
    this.propertyService.getAll().subscribe(resp => {
      console.log(resp);
      this.dataSource = resp;
    })
  }


  

  verMas(element){
    console.log(element);
    this.router.navigate([`admin/property.form/${element.idProperty}` +  element.Longitude + element.Latitud]);
    // this.lat.emit(element.idProperty)
    // this.long.emit(element.Longitude)
  }

}
