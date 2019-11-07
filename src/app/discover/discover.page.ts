import { Router } from '@angular/router';
import { IdeaService } from './../ideapool/idea.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import {Idea} from '../ideapool/idea';
import { NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit, OnDestroy {
  loadedIdeas: Idea[];
  listedLoadedIdea: Idea[];
  private ideasSub: Subscription;

  constructor(private IdeasService: IdeaService,
              private router: Router,
              private navCtrl: NavController) { }

  ngOnInit() {
    this.ideasSub = this.IdeasService.ideas.subscribe(loadedIdeas => {
      this.loadedIdeas = loadedIdeas;
      this.listedLoadedIdea = this.loadedIdeas.slice(1);
    });
  }
  onLike() {
    // this.router.navigateByUrl ('/ideapool');
    this.navCtrl.navigateBack ('/ideapool');
  }

  ngOnDestroy() {
    if (this.ideasSub) {
      this.ideasSub.unsubscribe();
    }
  }

}
