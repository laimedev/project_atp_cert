import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../services/guard/auth.guard';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ListComponent } from './producer/list/list.component';
import { FormProducerComponent } from './producer/form-producer/form-producer.component';
import { VpnRequestComponent } from './redes/vpn/vpn-request/vpn-request.component';
import { VpnFormComponent } from './redes/vpn/vpn-form/vpn-form.component';


const routes: Routes = [
  {
    path: 'admin', canActivate: [AuthGuard], children: [
      { path: 'producer.list', component: ListComponent },
      { path: 'producer.form/:id', component: FormProducerComponent },
      { path: 'vpn.request', component: VpnRequestComponent },
      { path: 'vpn.form', component: VpnFormComponent },
      { path: '', component: HeaderComponent, outlet: 'header' },
      { path: '', component: SidebarComponent, outlet: 'sidebar' }
    ]
  },
];


@NgModule({
  // declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]

})
export class MaintenanceRoutingModule { }
