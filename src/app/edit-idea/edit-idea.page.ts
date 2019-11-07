import { IdeaService } from './../ideapool/idea.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Idea } from '../ideapool/idea';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-edit-idea',
  templateUrl: './edit-idea.page.html',
  styleUrls: ['./edit-idea.page.scss'],
})
export class EditIdeaPage implements OnInit, OnDestroy {
  Editform: FormGroup;
  idea: Idea;
  private ideasSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private ideaService: IdeaService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (paramMap.has('ideaId')) {
        this.navCtrl.navigateBack('/ideapool');
        return;
      }
      this.ideasSub = this.ideaService.getIdea(paramMap.get('ideaId')).subscribe(idea => {
        this.idea = idea;
      });
      this.Editform = new FormGroup({
        title: new FormControl(this.idea.title, {
          updateOn: 'blur',
          validators: [Validators.required]
        }),
        description: new FormControl(this.idea.description, {
          updateOn: 'blur',
          validators: [Validators.required, Validators.maxLength(500)]
        })
      });
    });

    // this.Editform = new FormGroup({
    //   title: new FormControl(this.idea.title, {
    //     updateOn: 'blur',
    //     validators: [Validators.required]
    //   }),
    //   description: new FormControl(this.idea.description, {
    //     updateOn: 'blur',
    //     validators: [Validators.required, Validators.maxLength(500)]
    //   })
    // });
  }
  onEditIdea() {
  if (!this.Editform.valid) {
    return;
  }
  console.log(this.Editform);
}

ngOnDestroy() {
  if (this.ideasSub) {
    this.ideasSub.unsubscribe();
  }
}
}
