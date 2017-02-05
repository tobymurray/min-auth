import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {

  private HEADERS = new Headers({ 'Content-Type': 'application/json' });
  private authToken = 'auth_token';
  private signedIn: boolean = false;

  constructor(private http: Http) {
    this.signedIn = !!localStorage.getItem(this.authToken);
  }

  signIn(email: string, password: string) {
    this.http.post('/api/users/sign-in', { username: email, password: password }, { headers: this.HEADERS })
      .map(response => response.json())
      .subscribe(
      next => this._signUserIn(next),
      error => console.error(error),
    );
  }

  create(username: string, email: string, password: string) {
    this.http.post('/api/users/sign-up', { username: username, email: email, password: password }, { headers: this.HEADERS })
      .map(response => response.json())
      .subscribe(
      next => this.signIn(email, password),
      error => console.error(error),
    );
  }

  signOut() {
    this.http.post('/api/users/sign-out', {}, { headers: this.HEADERS })
      .map(response => response.json())
      .subscribe(
      next => this._signUserOut(next),
      error => console.error(error),
    );
  }

  isSignedIn() {
    return this.signedIn;
  }

  _signUserIn(response) {
    localStorage.setItem(this.authToken, 'token');
    this.signedIn = true;
  }

  _signUserOut(resposne) {
    localStorage.removeItem(this.authToken);
    this.signedIn = false;
  }
}
