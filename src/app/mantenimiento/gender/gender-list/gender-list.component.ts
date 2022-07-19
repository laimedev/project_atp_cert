import { Component, OnInit } from '@angular/core';
import { GenderServiceService } from '../gender-service.service';

@Component({
  selector: 'app-gender-list',
  templateUrl: './gender-list.component.html',
  styleUrls: ['./gender-list.component.scss']
})
export class GenderListComponent implements OnInit {

public data: any = [];

  constructor(public genderServ: GenderServiceService) { }

  ngOnInit(): void {
    this.genderServ.getGender().subscribe((data) => {
      this.data = data
      console.log(data);
    })
  }

}
