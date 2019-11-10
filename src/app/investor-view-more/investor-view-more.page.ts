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

  idea = {
    title: '',
    content: '',
    category: '',
    type: '',
    username: '',
    user: ''
  };


  constructor(
    private router: Router,
    private ideaService: IdeaService,
    public toastController: ToastController,
    private route: ActivatedRoute,
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
  ngOnInit() {

    this.route.queryParams.subscribe (params => {
    this.idea_id = params['idea_id'];
    });

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
    this.successToast();
    const iId = this.idea_id;
    console.log(iId);
  }

}
