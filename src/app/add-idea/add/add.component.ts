import { Component, OnInit, Input } from '@angular/core';
import { Idea } from '../../ideapool/idea';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
@Input() selectedIdea: Idea;

  constructor() { }

  ngOnInit() {}

}
