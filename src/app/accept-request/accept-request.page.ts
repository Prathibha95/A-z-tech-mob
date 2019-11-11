import { ServicesService } from './../services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accept-request',
  templateUrl: './accept-request.page.html',
  styleUrls: ['./accept-request.page.scss'],
})
export class AcceptRequestPage implements OnInit {
requests = []
  constructor(
    private servicesService: ServicesService
  ) { }

  ngOnInit() {
    const email = this.servicesService.currentUser.user.email;
    this.servicesService.getAllRequests(email)
      .subscribe(res=>{
        this.requests = res.json().request;
      })
  }

}
