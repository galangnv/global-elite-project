import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { guardGuard } from './shared/services/guard.guard';


export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    canActivate: [guardGuard],
    children: [
      { 
        path: 'home',
        component: HomeComponent
        
      },
      {
        path: 'about',
        component: AboutComponent
      }
    ]
  },
];
