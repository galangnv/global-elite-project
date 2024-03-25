import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { guardGuard } from './shared/services/guard.guard';
import { RegisterComponent } from './register/register.component';


export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
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
