import { ToastController } from '@ionic/angular';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { IdeaService } from '../ideapool/idea.service';

@Component({
  selector: 'app-edit-idea-form',
  templateUrl: './edit-idea-form.page.html',
  styleUrls: ['./edit-idea-form.page.scss'],
})
export class EditIdeaFormPage implements OnInit {
  form;
  idea_id: any;
  idea = {
    title: '',
    content: '',
    category: '',
  };


  @Input() content;
  constructor(
    private ideaService: IdeaService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private toastController: ToastController,
    private router: Router
  ) {
    this.form = fb.group({
      content: [this.content, Validators.required]
    });
  }

  async successToast() {
    const toast = await this.toastController.create({
      message: 'Idea Editted!',
      position: 'middle',
      color: 'tertiary',
      duration: 2000
    });
    toast.present();
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.idea_id = params['idea_id'];
    });
    this.ideaService.viewIdeaById(this.idea_id).subscribe( res => {
      const i = res;
      console.log(i);
      this.idea.title = i.title;
      this.idea.content = i.content;
      this.idea.category = i.category;
    });
    const iId = this.idea_id;
    console.log(iId);
  }
  editIdea(form) {
    const i = form.value;
    const idea = {
      content: i.content,
      title: i.title,
      category: i.category
    };
    console.log(idea);
    this.ideaService.editIdea(this.idea_id, idea).subscribe(res => {
      if (res.success) {
        this.successToast();
      }
    });
    form.reset();
  }

}
