import { IdeaService } from './../idea.service';
import { Component, OnInit } from '@angular/core';
import { Idea} from '../../ideapool/idea';
import { ModalController } from '@ionic/angular';
import { InvestComponent } from '../../ideapool/investor-ideapool/invest/invest.component';

@Component({
  selector: 'app-investor-ideapool',
  templateUrl: './investor-ideapool.page.html',
  styleUrls: ['./investor-ideapool.page.scss'],
})
export class InvestorIdeapoolPage implements OnInit {
  loadedIdeas: Idea[];
  idea: Idea;

  constructor(private ideaService: IdeaService,
              private modalCtrl: ModalController
              ) { }

  ngOnInit() {
    this.loadedIdeas = this.ideaService.ideas;
  }
  onInvestIdea() {
    this.modalCtrl.create({component: InvestComponent,
                          componentProps: {selectedIdea: this.idea }
                          })
                          .then(modalEl => {
                            modalEl.present();
    });
  }
}
