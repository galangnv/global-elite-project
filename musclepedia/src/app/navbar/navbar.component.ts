import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterLink,
    CommonModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
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
