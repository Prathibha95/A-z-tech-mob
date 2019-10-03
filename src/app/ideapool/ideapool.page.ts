import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-ideapool',
  templateUrl: './ideapool.page.html',
  styleUrls: ['./ideapool.page.scss'],
})
export class IdeapoolPage implements OnInit {

  constructor(private menu: MenuController) { }
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }
  openEnd() {
    this.menu.open('end');
  }
  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }
  ngOnInit() {
  }

}
