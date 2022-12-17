
import { User_Point } from './../models/user_point';
import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as auth from 'firebase/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { ApiUsuarioService } from './api.usuario';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any; // Save logged in user data
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  public usuario: User_Point = <User_Point>{};

  constructor(
    public afs: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone, // NgZone service to remove outside scope warning
    public cadastrar: ApiUsuarioService,

  ) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('currentUser'))
    );
    this.currentUser = this.currentUserSubject.asObservable();

  }



  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  // Returns true when user is looged in and email is verified
  /* get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    let teste = user !== null && user.emailVerified !== false ? true : false;
    console.log('teste', teste);
    console.log('user.emailVerified', user.emailVerified);
    console.log('user', user);
    return user !== null && user.emailVerified !== false ? true : false;
  } */

  // Sign in with email/password
  SignIn(email: string, password: string) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {

        if (result.user.emailVerified) {
          this.ngZone.run(() => {
            this.router.navigate(['dashboard']);
          });
          this.SetUserData(result.user);
          localStorage.setItem('currentUser', JSON.stringify(result.user));
          this.currentUserSubject.next(result.user);
        } else {
          return JSON.stringify(result.user.emailVerified);
          // window.alert('E-mail não verificado');
        }


      })
      .catch((error) => {
        window.alert(error.message);
      });
  }


  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['/authentication/signin']);
    return of({ success: false });
  }

  // Sign up with email/password
  SignUp(email: string, password: string, displayName: string) {
    this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        /* Call the SendVerificationMail() function when new user sign
         up and returns promise */
        this.SendVerificationMail();
        this.SetUserData(result.user);
        this.updateProfile(displayName);
        /* localStorage.setItem('currentUser', JSON.stringify(result.user));
        this.currentUserSubject.next(result.user); */
        this.router.navigate(['/dashboard/main']);
      })
      .catch((error) => {

        const code = error.code;
        const credential = error.credential;

        console.log({ error })
        if (code === 'auth/email-already-in-use') {
          // Get other Auth providers user has used before (e.g google.com)
          this.afAuth.fetchSignInMethodsForEmail(email).then(result => {
            console.log(result)
            const provider = this.getAuthProvider(result[0]);
            // Log in the user with other provider used before
            this.AuthLogin(provider).then(result => {
              this.afAuth.authState.pipe(take(1)).subscribe(user => {
                if (user) {
                  user.linkWithCredential(credential).then(() => {
                    console.log('Credential linked successfully: ', credential);
                  });
                }
              });
            });
          });
        }
      });
  }

  updateProfile(name: string) {
    this.afAuth.currentUser.then((user: firebase.User) => {
      user.updateProfile({ displayName: name });
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);
    });
  }

  // Send email verification when new user sign up
  SendVerificationMail() {
    this.afAuth.currentUser
      .then((u: any) => u.sendEmailVerification())
      .then(() => {
        this.router.navigate(['/authentication/verify-email-address']);
      });
  }

  // Reset Forgot password
  ForgotPassword(passwordResetEmail: string) {
    this.afAuth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('E-mail de redefinição de senha enviado, verifique sua caixa de entrada.');
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  getAuthProvider(provider: string) {
    return new this.GoogleAuth();
  }

  // Sign in with Google
  GoogleAuth() {
    this.AuthLogin(new auth.GoogleAuthProvider()).then((res: any) => {
      this.router.navigate(['/dashboard/main']);
    });
  }

  // Auth logic to run auth providers
  AuthLogin(provider: any) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        this.SetUserData(result.user);
        localStorage.setItem('currentUser', JSON.stringify(result.user));
        this.currentUserSubject.next(result.user);
        this.usuario.uid = result.user.uid;
        this.usuario.email = result.user.email;
        this.usuario.nome = result.user.displayName;
        console.log('cadastrarUserPoint');
        this.cadastrar.cadastrarUserPoint(this.usuario).subscribe(response => console.log(response));
      })

      .catch((error) => {
        window.alert(error);
      });
  }

 
  /* Setting up user data when sign in with username/password, 
  sign up with username/password and sign in with social auth  
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    };
    return userRef.set(userData, {
      merge: true,
    });
  }




}
