import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnproductivaRoutingModule } from './unproductiva-routing.module';
import { AreaListComponent } from './area/area-list/area-list.component';
import { AreaFormComponent } from './area/area-form/area-form.component';
import { CultivoListComponent } from './cultivo/cultivo-list/cultivo-list.component';
import { CultivoFormComponent } from './cultivo/cultivo-form/cultivo-form.component';
import { PendienteListComponent } from './pendiente/pendiente-list/pendiente-list.component';
import { PendienteFormComponent } from './pendiente/pendiente-form/pendiente-form.component';
import { ProductoListComponent } from './producto/producto-list/producto-list.component';
import { ProductoFormComponent } from './producto/producto-form/producto-form.component';
import { ProductorFormComponent } from './productor/productor-form/productor-form.component';
import { ProductorListComponent } from './productor/productor-list/productor-list.component';
import { PropiedadListComponent } from './propiedad/propiedad-list/propiedad-list.component';
import { PropiedadFormComponent } from './propiedad/propiedad-form/propiedad-form.component';
import { TipoareaListComponent } from './tipoarea/tipoarea-list/tipoarea-list.component';
import { TipoareaFormComponent } from './tipoarea/tipoarea-form/tipoarea-form.component';
import { VariedadListComponent } from './variedad/variedad-list/variedad-list.component';
import { VariedadFormComponent } from './variedad/variedad-form/variedad-form.component';



@NgModule({
  declarations: [
    AreaListComponent,
    AreaFormComponent,
    CultivoListComponent,
    CultivoFormComponent,
    PendienteListComponent,
    PendienteFormComponent,
    ProductoListComponent,
    ProductoFormComponent,
    ProductorFormComponent,
    ProductorListComponent,
    PropiedadListComponent,
    PropiedadFormComponent,
    TipoareaListComponent,
    TipoareaFormComponent,
    VariedadListComponent,
    VariedadFormComponent
  ],
  imports: [
    CommonModule,
    UnproductivaRoutingModule
  ]
})
export class UnproductivaModule { }
