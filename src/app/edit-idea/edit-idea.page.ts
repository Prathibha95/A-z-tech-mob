import { IdeaService } from './../ideapool/idea.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Idea } from '../ideapool/idea';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-edit-idea',
  templateUrl: './edit-idea.page.html',
  styleUrls: ['./edit-idea.page.scss'],
})
export class EditIdeaPage implements OnInit {
  Editform: FormGroup;
  idea: Idea;
  constructor(
    private route: ActivatedRoute,
    private ideaService: IdeaService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('ideaId')) {
        this.navCtrl.navigateBack('/ideapool');
        return;
      }
      this.idea = this.ideaService.getIdea(paramMap.get('ideaId'));
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
}
