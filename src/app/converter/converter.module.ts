import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConverterRoutingModule } from './converter-routing.module';
import { ConverterComponent } from './converter.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ConverterComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ConverterRoutingModule,
    FormsModule
  ]
})
export class ConverterModule { }
