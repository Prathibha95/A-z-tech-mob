import { IdeaService } from './../ideapool/idea.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-edit-idea',
  templateUrl: './edit-idea.page.html',
  styleUrls: ['./edit-idea.page.scss'],
})
export class EditIdeaPage implements OnInit {
form;
content: any;
idea_id : any;
  ideas: any;

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
    private toastController: ToastController,
    private route: ActivatedRoute
  ) { }


  async successToast() {
    const toast = await this.toastController.create({
      message: 'Loading Idea Editting!',
      position: 'middle',
      color: 'tertiary',
      duration: 2000
    });
    toast.present();
  }

  async deleteToast() {
    const toast = await this.toastController.create({
      message: 'Idea deleted successfully!',
      position: 'middle',
      color: 'danger',
      duration: 2000
    });
    toast.present();
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.idea_id = params['idea_id'];
    });
    this.ideaService.viewIdeaById(this.idea_id).subscribe(res => {
      const i = res;
      console.log(i);
      this.idea.title = i.title;
      this.idea.content = i.content;
      this.idea.category = i.category;
      this.idea.type = i.type;
});
    this.successToast();
    const iId = this.idea_id;
    console.log(iId);

  }
  deleteIdea() {
    this.ideaService.deleteIdea(this.idea_id).subscribe(res => {
      if (res.success) {
        this.deleteToast();
      }
    });
    this.router.navigate(['/ideapool']);
  }

}
