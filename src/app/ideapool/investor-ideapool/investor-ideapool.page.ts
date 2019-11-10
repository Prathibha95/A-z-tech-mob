import { IdeaService } from './../idea.service';
import { Component, OnInit } from '@angular/core';
import { ServicesService } from './../../services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-investor-ideapool',
  templateUrl: './investor-ideapool.page.html',
  styleUrls: ['./investor-ideapool.page.scss'],
})
export class InvestorIdeapoolPage implements OnInit {
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
              private servicesService: ServicesService
              ) { }

  ngOnInit() {
    this.ideaService.ideas.subscribe(res => {
        this.viewIdeas = res;
        console.log(this.viewIdeas);
      }
      );
  }
  getCategory(category) {
    console.log(category);
    this.ideaService.categoryView(category)
    .subscribe(res =>  {
      this.ideas = res;
      console.log(this.ideas);
    });
  }
  viewIdea(ideaID) {
    this.router.navigate(['investor-view-more'], { queryParams: { idea_id: ideaID } });
  }
}
