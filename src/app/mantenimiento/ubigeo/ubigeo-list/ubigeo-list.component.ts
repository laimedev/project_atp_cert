import { Component, OnInit } from '@angular/core';
import { UbigeoServiceService } from '../services/ubigeo-service.service';

@Component({
  selector: 'app-ubigeo-list',
  templateUrl: './ubigeo-list.component.html',
  styleUrls: ['./ubigeo-list.component.scss']
})
export class UbigeoListComponent implements OnInit {

  public data: any = [];

  constructor(public ubigeoServ: UbigeoServiceService) { }

  ngOnInit(): void {
    this.ubigeoServ.getUbigeo().subscribe((data) => {
      this.data = data
      console.log(data);
    })
  }

}