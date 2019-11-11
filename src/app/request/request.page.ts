import { Router } from '@angular/router';
import { ServicesService } from './../services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request',
  templateUrl: './request.page.html',
  styleUrls: ['./request.page.scss'],
})
export class RequestPage implements OnInit {
  requests: any;
  investorname: any;
  rId: any;


  constructor(
    private servicesService: ServicesService,
    private router: Router
  ) { }

  profile = {
    email: '',
    name: '',
    country: '',
    imageURL: '',
    fname: '',
    lname: ''
  };

  ngOnInit() {
    const uId = this.servicesService.currentUser._id;

    this.servicesService.viewRequest(uId)
    .subscribe(res => {
      this.requests = res;
      console.log(this.requests);
    });
  }
  reqstatus(status: string, rId) {
    const uId = this.servicesService.currentUser._id;
    const statu = {
           status
        };
    this.servicesService.setStatus(uId, rId, statu)
       .subscribe(res => {
         console.log(res);
    });
    // window.location.reload();
  }
  editIdea(ideaID) {
    this.router.navigate(['/edit-idea'], { queryParams: { idea_id: ideaID } });
  }

  investorProfile(uId, investor) {
    this.investorname = investor;
    this.rId = uId;
    console.log(this.rId + 'rId');
    this.servicesService.getProfessionalProfile(this.rId)
      .subscribe(res => {
        const user = res;
        this.profile.email = user.email;
        this.profile.name = user.firstName + ' ' + user.lastName;
        this.profile.country = user.country;
        this.profile.imageURL = user.imageURL;
        this.profile.fname =  user.firstName;
        this.profile.lname = user.lastName;

      });
  }

}
