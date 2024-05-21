import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConverterComponent } from './converter.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: ConverterComponent },
  { path: 'home', component: HomeComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConverterRoutingModule { }
