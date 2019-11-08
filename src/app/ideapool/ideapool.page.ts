import { ServicesService } from './../services.service';
import { Router } from '@angular/router';
import { IdeaService } from './idea.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-ideapool',
  templateUrl: './ideapool.page.html',
  styleUrls: ['./ideapool.page.scss'],
})
export class IdeapoolPage implements OnInit {
viewIdeas: any;
ideas: any;
category: any;
  public fieldOptions = [
    { value: 'Information Technology', displayValue: 'Information Technology' },
    { value: 'Health', displayValue: 'Health' },
    { value: 'Marketing', displayValue: 'Marketing'},
 ];

  constructor(private ideaService: IdeaService,
              private router: Router,
              private servicesService: ServicesService) { }

              upvotes: any;
              downvotes: any;
  ngOnInit() {
  }

  getCategory(category) {
    console.log(category);
    this.ideaService.categoryView(category)
    .subscribe(res =>  {
      this.ideas = res;
      console.log(this.ideas);
    });
  }

}
