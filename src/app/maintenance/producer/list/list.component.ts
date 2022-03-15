import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ProducerService } from '../services/producer.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  listProducer: any [] = [];

  displayedColumns: string[] = ['idProductor','nombreProductor', 'dni', 'sexo', 'fechaNacimiento', 'estado', 'anoIngreso', 'options'];


  dataSource = new MatTableDataSource(this.listProducer);


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
 
  constructor(private prodService: ProducerService,
              public router: Router) { }

  ngOnInit(): void {
    this.prodService.getAll().subscribe(resp => {
      console.log(resp);
      this.dataSource = resp;
    })
  }

  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  verMas(user){
    // console.log(user.idProductor)
    this.router.navigateByUrl(`admin/producer.form/${user.idProductor}`);
  }
}
