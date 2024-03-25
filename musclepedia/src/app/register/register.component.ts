import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  public username = '';
  public password = '';
  public password2 = '';

  constructor(private authService: AuthService, private router: Router){}

  public register() {
    if (this.password !== this.password2) {
      console.log("ERROR: PASSWORDS DO NOT MATCH");
      this.password = '';
      this.password2 = '';
    } else {
      this.authService.registerFirebase(this.username, this.password)
      .pipe()
      .subscribe({
        next: (user) => {
          console.log(user.user);
          this.router.navigateByUrl('/home');
        },
        error: (err) => {
          console.warn(err);
        }
      })
    }
  }
}
