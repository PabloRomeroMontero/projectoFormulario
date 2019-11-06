import {RouterModule, Routes} from '@angular/router';
import {LogComponent} from './components/log/log.component';
import {FormComponent} from './components/form/form.component';

export const APP_ROUTES: Routes = [
  { path: 'log', component: LogComponent},
  { path: 'form', component: FormComponent},
  { path: '**', component: FormComponent}
];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
