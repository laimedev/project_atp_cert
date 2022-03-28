import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PropertyService } from '../services/property.service';
import { Router } from '@angular/router';

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


  verMas(element){
    console.log(element);
    this.router.navigateByUrl(`admin/property.form/${element.idProperty}`);
  }

}
