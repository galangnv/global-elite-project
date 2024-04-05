import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { defer, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser = this.auth.currentUser;
  private authStatusSub = new BehaviorSubject(this.currentUser);
  currentAuthStatus = this.authStatusSub.asObservable();

  constructor(
    public auth: Auth,
    public router: Router
    ) {
      this.authStateListener();
  }

  loginToFirebase(username: string, password: string) {
    const res = () => signInWithEmailAndPassword(this.auth, username, password)
    return defer(res);
  }

  // Returns true when user is logged in and email is verified
  authStateListener() {
    this.auth.onAuthStateChanged((cred) => {
      if (cred) {
        this.authStatusSub.next(cred);
      } else {
        this.authStatusSub.next(null);
      }
    })
  }

  SignOut() {
    return this.auth.signOut().then(() => {
      localStorage.clear();
      this.router.navigate(['login']);
    })
  }
}
