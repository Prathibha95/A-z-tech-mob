import { IdeaService } from './idea.service';
import { Component, OnInit } from '@angular/core';
import { Idea } from '../ideapool/idea';


@Component({
  selector: 'app-ideapool',
  templateUrl: './ideapool.page.html',
  styleUrls: ['./ideapool.page.scss'],
})
export class IdeapoolPage implements OnInit {
loadedIdeas: Idea[];

  constructor(private ideaService: IdeaService) { }

  ngOnInit() {
    this.loadedIdeas = this.ideaService.ideas;
  }

}
