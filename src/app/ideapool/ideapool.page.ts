import { IdeaService } from './idea.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Idea } from '../ideapool/idea';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-ideapool',
  templateUrl: './ideapool.page.html',
  styleUrls: ['./ideapool.page.scss'],
})
export class IdeapoolPage implements OnInit, OnDestroy {
loadedIdeas: Idea[];
private ideaSub: Subscription;

  constructor(private ideaService: IdeaService) { }

  ngOnInit() {
    this.ideaSub = this.ideaService.ideas.subscribe(ideas => {
      this.loadedIdeas = ideas;
    });
  }
  ngOnDestroy() {
    if (this.ideaSub) {
      this.ideaSub.unsubscribe();
        }
  }

}
