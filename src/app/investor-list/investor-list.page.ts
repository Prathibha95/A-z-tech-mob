import { IdeaService } from './../ideapool/idea.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-investor-list',
  templateUrl: './investor-list.page.html',
  styleUrls: ['./investor-list.page.scss'],
})
export class InvestorListPage implements OnInit {
  role: any;
  users: any;
  constructor(private ideaService: IdeaService) { }

  ngOnInit() {
    this.ideaService.viewAllUsers("investor")
      .subscribe(res => {
        this.users = res;
        console.log(this.users);
      });
  }

}
