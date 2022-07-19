import { Component, OnInit } from '@angular/core';
import { InstructionServiceService } from '../services/instruction-service.service';

@Component({
  selector: 'app-instruction-list',
  templateUrl: './instruction-list.component.html',
  styleUrls: ['./instruction-list.component.scss']
})
export class InstructionListComponent implements OnInit {

  public data: any = [];

  constructor(public instructionServ: InstructionServiceService) { }

  ngOnInit(): void {
    this.instructionServ.getInstruction().subscribe((data) => {
      this.data = data
      console.log(data);
    })
  }

}