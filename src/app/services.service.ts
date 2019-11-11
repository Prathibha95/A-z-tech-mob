import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../environments/environment';
import {map} from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

export interface UserDetails {
  id: number;
  first_name: string;
  last_name: string;
  user_type: string;
  email: string;
  password: string;
  gender: string;
  contact_no: string;
  isActivated: boolean;
  exp: number;
  iat: number;
}

interface TokenResponse {
  token: string;
}

export interface TokenPayload {
  id: number;
  first_name: string;
  last_name: string;
  user_type: string;
  email: string;
  password: string;
  gender: string;
  contact_no: string;
  isActivated: boolean;
}


@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private _userIsAuthenticated = true;
  private _userId = 'prathibha';
  authToken: any;
  userId: any;

  helper = new JwtHelperService();

get userIsAuthenticated() {
  return this._userIsAuthenticated;
}

private token: string;
  constructor(private http: HttpClient) { }

  private saveToken(token: string): void {
    localStorage.setItem('token', token);
    this.token = token;
  }

  public getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('token');
    }
    return this.token;
  }

  get currentUser() {
    const token = localStorage.getItem('token');
    if (!token) {
      return null;
    }
    return this.helper.decodeToken(token);
  }
  public getUserDetails(): UserDetails {
    const token = this.getToken();
    let payload;
    if (token) {
      payload = token.split('.')[1];
      payload = window.atob(payload);
      return JSON.parse(payload);
    } else {
      return null;
    }
  }

  public isLoggedIn(): boolean {
    const user = this.getUserDetails();
    if (user) {
      return user.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }


 loginUser(user) {
  //  console.log( "CCCCCCCC" );
   return this.http.post(environment.url + '/authenticate', user).pipe(map((res:any) => res));
  }

  logout() {
    this._userIsAuthenticated = false;
  }

  registerUser(user) {
    return this.http.post(environment.url + '/register', user).pipe(map((res: any) => res));
  }

  userProfile(uId) {
    return this.http.get(environment.url + '/userProfile/' + uId).pipe(map((res: any) => res));
}

uploadImage(selectedFile: File, uId) {
  const fd = new FormData();
  fd.append('image', selectedFile, selectedFile.name);
  return this.http.post(environment.url + '/userImageUpload/' + uId, fd).pipe(map((res: any) => res));
}

editProfile(uId, user) {
  return this.http.put(environment.url + '/editProfile/' + uId, user).pipe(map((res: any) => res));
}

sendRequest(fId, tId, iId, request) {
  return this.http.post(environment.url + '/sendRequest/' + fId + '/' + tId + '/' + iId, request).pipe(map((res: any) => res));
}

requestStatus(uId, iId) {
  return this.http.get(environment.url + '/requeststatus/' + uId + '/' + iId).pipe(map((res: any) => res));
}

viewRequest(uId){
  return this.http.get(environment.url + '/viewRequest/' + uId).pipe(map((res: any) => res));
}

setStatus(uId, rId, statu) {
  return this.http.put(environment.url + '/status/' + uId + '/' + rId, statu).pipe(map((res: any) => res));
}
getProfessionalProfile(uId) {
  return this.http.get(environment.url + '/userProfile/' + uId).pipe(map((res: any) => res));
}
getAllRequests(email) {
  return this.http.post('https://guarded-beyond-19031.herokuapp.com/viewAllRequests', { 'investor': email }).pipe(map((res: any) => res));
}
}

