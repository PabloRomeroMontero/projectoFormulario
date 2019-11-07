import {Component, NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DataComponent} from './components/data/data.component';
import {TemplateComponent} from './components/template/template.component';



const APP_ROUTES: Routes = [
  { path: 'data', component: DataComponent},
  { path: 'template', component: TemplateComponent},
  { path: '**', component: TemplateComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})





export class AppRoutingModule { }
