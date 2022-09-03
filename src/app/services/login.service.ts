import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  apiUrlEndPoint: string = '/generate-token';
  baseUrl: string = environment.baseUrl;

  public loginStatusSubject = new Subject<boolean>();

  constructor(private http: HttpClient) {}

  // Getting current user details
  public getCurrentUser() {
    return this.http.get(this.baseUrl.concat('/current-user'));
  }

  // Generating token
  public generateToken(loginData: any) {
    return this.http.post(this.baseUrl.concat(this.apiUrlEndPoint), loginData);
  }

  // Setting token in local storage
  public loginUser(token: any) {
    localStorage.setItem('token', token);
    return true;
  }

  // Login: user is loggedin or not
  public isLoggedIn() {
    let tokenStr = localStorage.getItem('token');
    if (tokenStr == undefined || tokenStr == '' || tokenStr == null) {
      return false;
    } else {
      return true;
    }
  }

  // Logout: remove token from local storage
  public logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    location.reload();
    return true;
  }

  // Get token
  public getToken() {
    return localStorage.getItem('token');
  }

  // Setting user details
  public setUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  // Getting user details
  public getUser() {
    let userStr = localStorage.getItem('user');
    if (userStr != null) {
      return JSON.parse(userStr);
    } else {
      this.logout();
      return null;
    }
  }

  // Get user role
  public getUserRole() {
    let user = this.getUser();
    return user.authorities[0].authority;
  }
}
