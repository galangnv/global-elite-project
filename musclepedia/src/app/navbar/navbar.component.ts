import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {

  isAuthenticated: boolean = false;

  constructor(public authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.authService.authStateListener();
    this.authService.currentAuthStatus.subscribe((authStatus) => {
      if (authStatus !== null) {
        this.isAuthenticated = true;
      } else {
        this.isAuthenticated = false;
      }
    })
  }

  logout() {
    this.authService.SignOut();
    this.router.navigateByUrl('/login');
  }

}
