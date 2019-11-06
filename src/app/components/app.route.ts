import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {FormComponent} from './form/form.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'form', component: FormComponent}
];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
