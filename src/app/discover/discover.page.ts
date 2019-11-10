import { ServicesService } from './../services.service';
import { Router } from '@angular/router';
import { IdeaService, IdeaPayload, IdeaDetails, ConfirmedPro } from './../ideapool/idea.service';
import { Component, OnInit } from '@angular/core';
import {Idea} from '../ideapool/idea';
import { NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {


  constructor(private router: Router,
              private navCtrl: NavController,
              private authpro: IdeaService,
              private servicesService: ServicesService) { }

  ngOnInit() {
  }
}
