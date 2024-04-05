import { Component, NgModule } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Musclepedia';

  constructor(authService: AuthService, router: Router) {
    console.log(authService.currentUser);
    authService.currentAuthStatus.pipe().subscribe(user => { user : router.navigateByUrl('home') })
  }
}
