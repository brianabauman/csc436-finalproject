import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;
  userID: string;
  loggedIn: boolean;

  constructor(private firebaseAuth: AngularFireAuth,
             private router: Router) {
    this.user = firebaseAuth.authState;
    this.loggedIn = false;
  }

  login(email: string, password: string) {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then((userCred) => {
        console.log("login successful, uid: " + userCred.user.uid);
        this.loggedIn = true;
        this.userID = userCred.user.uid;
        this.router.navigate(['home']);
      })
      .catch(err => {
        this.loggedIn = false;
        alert("Login error: " + err.message);
      });
  }

  logout() {
    this.firebaseAuth
      .auth
      .signOut();
    this.loggedIn = false;
    this.userID = "";
    this.router.navigate(['login']);
  }
  
  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  register(email: string, password: string) {
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCred) => {
        console.log("registration successful, uid: " + userCred.user.uid);
        this.loggedIn = true;
        this.userID = userCred.user.uid;
        this.router.navigate(['home']);
      })
      .catch(err => {
        this.loggedIn = false;
        alert("Registration error: " + err.message);
      });
  }
}