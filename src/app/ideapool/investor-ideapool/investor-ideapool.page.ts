import { IdeaService } from './../idea.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Idea} from '../../ideapool/idea';
import { ModalController } from '@ionic/angular';
import { InvestComponent } from '../../ideapool/investor-ideapool/invest/invest.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-investor-ideapool',
  templateUrl: './investor-ideapool.page.html',
  styleUrls: ['./investor-ideapool.page.scss'],
})
export class InvestorIdeapoolPage implements OnInit, OnDestroy {
  loadedIdeas: Idea[];
  idea: Idea;
  private ideaSub: Subscription;

  constructor(private ideaService: IdeaService,
              private modalCtrl: ModalController
              ) { }

  ngOnInit() {
    this.ideaSub = this.ideaService.ideas.subscribe(ideas => {
      this.loadedIdeas = ideas;
    });
  }
  onInvestIdea() {
    this.modalCtrl.create({component: InvestComponent,
                          componentProps: {selectedIdea: this.idea }
                          })
                          .then(modalEl => {
                            modalEl.present();
    });
  }

  ngOnDestroy() {
    if (this.ideaSub) {
      this.ideaSub.unsubscribe();
        }
  }
}
