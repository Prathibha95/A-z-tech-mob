import { Idea } from '../../idea';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-invest',
  templateUrl: './invest.component.html',
  styleUrls: ['./invest.component.scss'],
})
export class InvestComponent implements OnInit {
  @Input() selectedIdea: Idea;

  constructor() { }

  ngOnInit() {}

}
