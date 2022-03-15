import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-producer',
  templateUrl: './form-producer.component.html',
  styleUrls: ['./form-producer.component.scss']
})
export class FormProducerComponent implements OnInit {

  public idDetail = this.actRouter.snapshot.paramMap.get('id');


  tipoSexo = [
    {value: 'M', name: 'Masculino'},
    {value: 'F', name: 'Femenino'}
  ]

  estadoCivil  = [
    {value: 'S', name: 'Soltero'},
    {value: 'C', name: 'Casado'},
    {value: 'V', name: 'Viudo'}
  ]

  estado  = [
    {value: 'A', name: 'Activo'},
    {value: 'I', name: 'Inactivo'},
  ]


  constructor(public actRouter: ActivatedRoute,
             public router: Router) {

    console.log( 'IDENTIFICADOR: ' , this.idDetail);

   }

  ngOnInit(): void {
  }


  cancel(){
    this.router.navigateByUrl(`admin/producer.list`);
  }

}
