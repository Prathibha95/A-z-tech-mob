import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private _userIsAuthenticated = true;
  private _userId = 'prathibha';

get userIsAuthenticated() {
  return this._userIsAuthenticated;
}

get userId() {
  return this._userId;
}

  constructor() { }
  login() {
    this._userIsAuthenticated = true;
  }
  logout() {
    this._userIsAuthenticated = false;
  }
}
