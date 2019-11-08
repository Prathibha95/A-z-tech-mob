import { IdeaService } from './../ideapool/idea.service';
import { Router } from '@angular/router';
import { ServicesService } from './../services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  viewIdeas: any;
  ideas: any;
  category: any;
  
  constructor(
    private servicesService: ServicesService,
    private router: Router,
    private ideaService: IdeaService
  ) { }

  upvotes: any;
  downvotes: any;

  ngOnInit() {
    const uId = this.servicesService.currentUser._id;
    console.log(uId);

    this.ideaService.viewIdea(uId).subscribe(res => {
      console.log(res);
      // console.log( this.ideas );
      console.log(this.ideas.idea);
    });
  }

}
