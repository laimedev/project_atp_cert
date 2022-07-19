import { Component, OnInit } from '@angular/core';
import { CivilServiceService } from '../services/civil-service.service';

@Component({
  selector: 'app-civil-list',
  templateUrl: './civil-list.component.html',
  styleUrls: ['./civil-list.component.scss']
})
export class CivilListComponent implements OnInit {

  public data: any = [];

  constructor(public genderServ: CivilServiceService) { }

  ngOnInit(): void {
    this.genderServ.getCivil().subscribe((data) => {
      this.data = data
      console.log(data);
    })
  }

}
