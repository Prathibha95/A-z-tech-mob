import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private _userIsAuthenticated = true;
  private _userId = 'prathibha';
  authToken: any;
  user: any;

get userIsAuthenticated() {
  return this._userIsAuthenticated;
}

get userId() {
  return this._userId;
}
  constructor(private http: HttpClient) { }

 loginUser(user) {
  //  console.log( "CCCCCCCC" );
   return this.http.post(environment.url + '/authenticate', user).pipe(map((res:any) => res));
  }

  logout() {
    this._userIsAuthenticated = false;
  }

  registerUser(user) {
    return this.http.post(environment.url + '/register', user);
  }

}
