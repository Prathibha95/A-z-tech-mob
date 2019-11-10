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

  ideas: any;
  idealist: any;
  idealistreverse: any;
  professional = {
    email: '',
    name: '',
    country: '',
    imageURL: '',
    fname: '',
    lname: '',
  };
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
      this.ideas = res;
      this.idealist = this.ideas.idea;
      this.idealistreverse = this.idealist.reverse();
      console.log(this.ideas);
    });
    this.servicesService.userProfile(uId).subscribe(res => {
      console.log(uId);
      const users = res;
      console.log(users);
      this.professional.imageURL = users.imageURL;
      this.professional.name = users.firstName + ' ' + users.lastName;
    });
  }
  editIdea(ideaID) {
    this.router.navigate(['/edit-idea'], { queryParams: { idea_id: ideaID } });
  }
}
