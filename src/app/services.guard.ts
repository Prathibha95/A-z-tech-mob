import { ServicesService } from './services.service';
import { Injectable } from '@angular/core';
import { UrlSegment, CanLoad, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesGuard implements CanLoad {
  constructor(private servicesServices: ServicesService, private router: Router ) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]
    ): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.servicesServices.userIsAuthenticated) {
      this.router.navigateByUrl('/login');
    }
    return this.servicesServices.userIsAuthenticated;
  }

}
