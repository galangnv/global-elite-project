import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  { 
    path: 'home',
    component: HOME_COMPONENT_HERE,
  },
  {
    path: 'login',
    component: LOGIN_COMPONENT_HERE,
  }
];
