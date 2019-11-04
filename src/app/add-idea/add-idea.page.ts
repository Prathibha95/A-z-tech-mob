import { AddComponent } from './add/add.component';
import { Idea } from './../ideapool/idea';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { IdeaService } from '../ideapool/idea.service';

@Component({
  selector: 'app-add-idea',
  templateUrl: './add-idea.page.html',
  styleUrls: ['./add-idea.page.scss'],
})
export class AddIdeaPage implements OnInit {
  idea: Idea;
  @Input() selectedIdea: Idea;
  @Input () selectedMode: 'select' | 'random';
  @ViewChild('f', { static: true }) form: NgForm;

  constructor(private route: ActivatedRoute,
              private navCtrl: NavController,
              private modalCtrl: ModalController,
              private ideas: IdeaService ) { }

  ngOnInit() {
    this.route.paramMap.subscribe( paramMap => {
      if ( !paramMap.has('ideaId')) {
        this.navCtrl.navigateBack('/ideapool');
        return;
      }
    });
  }
   onAddIdea() {
    // console.log(this.form);
    // this.navCtrl.navigateBack('/ideapool');
      this.modalCtrl.create({component: AddComponent,
                             componentProps: {selectedIdea: this.ideas}
                            })
      .then(modalEl => {
        modalEl.present();
      });

      if (!this.form.valid) {
        return;
      }
      this.modalCtrl.dismiss({ addingData: {
        // tslint:disable-next-line: no-string-literal
        Title: this.form.value['title'],
        // tslint:disable-next-line: no-string-literal
        Field: this.form.value['field'],
        // tslint:disable-next-line: no-string-literal
        Description: this.form.value['description'],
        // tslint:disable-next-line: no-string-literal
        PublishDate: this.form.value['publishdate']

      }}, 'confirm');
  }
  onCancleAdd() {
    this.modalCtrl.dismiss(null, 'cancle');
  }
}
