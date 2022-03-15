import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaintenanceRoutingModule } from './maintenance-routing.module';
import { ListComponent } from './producer/list/list.component';
import { FormProducerComponent } from './producer/form-producer/form-producer.component';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { UtilsModule } from '../utils/utils.module';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    ListComponent,
    FormProducerComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MatTableModule,
    MatTabsModule,
    MaintenanceRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    UtilsModule,
    MatNativeDateModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule
  ]
})
export class MaintenanceModule { }
