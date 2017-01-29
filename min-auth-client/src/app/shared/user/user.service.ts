import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  private authToken = 'auth_token';
  private signedIn: boolean = false;

  constructor(private http: Http) {
    this.signedIn = !!localStorage.getItem(this.authToken);
  }

  signIn(email: string, password: string) {
    // This would be where we call out to the server to authenticate
    // We'll use 'token' as a placeholder for now
    localStorage.setItem(this.authToken, 'token');
    this.signedIn = true;
  }

  create(username: string, email: string, password: string) {
    // Obviously this is not what this function will ultimately do
    this.signIn(email, password);
  }

  signOut() {
    localStorage.removeItem(this.authToken);
    this.signedIn = false;
  }

  isSignedIn() {
    return this.signedIn;
  }
}
