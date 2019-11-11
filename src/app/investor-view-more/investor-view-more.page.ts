import { ServicesService } from './../services.service';
import { IdeaService } from './../ideapool/idea.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-investor-view-more',
  templateUrl: './investor-view-more.page.html',
  styleUrls: ['./investor-view-more.page.scss'],
})
export class InvestorViewMorePage implements OnInit {
  ideas: any;
  idea_id: any;
  rId;
  req_button;
  len: any;
  send_request: any;

  idea = {
    title: '',
    content: '',
    category: '',
    type: '',
    username: '',
    user: ''
  };
  professional = {
    email: '',
    name: '',
    country: '',
    imageURL: '',
    fname: '',
    lname: '',
  };

  constructor(
    private router: Router,
    private ideaService: IdeaService,
    public toastController: ToastController,
    private route: ActivatedRoute,
    private servicesService: ServicesService
  ) { }
  upvotes: any;
  downvotes: any;

  async successToast() {
    const toast = await this.toastController.create({
      message: 'Here Your Idea...',
      position: 'middle',
      color: 'tertiary',
      duration: 2000
    });
    toast.present();
  }

  async sendReqValid() {
    const toast = await this.toastController.create({
      message: 'Sending Request...',
      position: 'middle',
      color: 'success',
      duration: 2000
    });
    toast.present();
  }
  ngOnInit() {

    this.send_request = true;
    this.route.queryParams.subscribe (params => {
    this.idea_id = params['idea_id'];
    this.send_request = params['send_request'];
    });
    const uId = this.servicesService.currentUser._id;
    // console.log(this.idea_id);
    this.ideaService.viewIdeaById(this.idea_id).subscribe(res => {
    const i = res;
    console.log(i);
    this.idea.title = i.title;
    this.idea.category = i.category;
    this.idea.content = i.content;
    this.idea.user = i.user;
    this.idea.username = i.username;
    this.idea.type = i.type;
    this.rId = this.idea.user;
    console.log(this.idea.content);
    });
    this.servicesService.userProfile(uId).subscribe(res => {
      console.log(uId);
      const users = res;
      console.log(users);
      this.professional.imageURL = users.imageURL;
      this.professional.name = users.firstName + ' ' + users.lastName;
    });
    this.successToast();
    const iId = this.idea_id;
    console.log(iId);
  }

  sendRequest(tId, iId, ideaname) {
    const fId = this.servicesService.currentUser._id;
    const fname = this.servicesService.currentUser.firstName;
    const lname = this.servicesService.currentUser.lastName;

    const request = {
      username : fname + ' ' + lname,
      'ideaname' : ideaname
    };

    this.servicesService.sendRequest(fId, tId, iId, request)
    .subscribe(res => {
      const response = res;
      console.log(response);
      if (response.success) {
        this.sendReqValid(); }
    });
  }

  requestStatus(iId) {
    console.log(iId);
    const uId = this.servicesService.currentUser._id;
    this.req_button = false;
    console.log(this.req_button);

    this.servicesService.requestStatus(uId, iId)
    .subscribe(res => {
      const response = res;
      console.log(response);

      const keys = Object.keys(response);
      this.len = keys.length;
      console.log(this.len);

      if (this.len === 0) {
          this.req_button = true;
          console.log(this.req_button);
      }
    });

  }
}
