import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LogComponent} from './components/log/log.component';
import {FormComponent} from './components/form/form.component';



const APP_ROUTES: Routes = [
  { path: 'log', component: LogComponent},
  { path: 'form', component: FormComponent},
  { path: '**', component: FormComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})





export class AppRoutingModule { }
