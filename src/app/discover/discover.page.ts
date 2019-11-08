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

  pro_id: number;
  ideas: IdeaDetails;

  marked1 = true;
  marked2 = false;
  marked3 = false;
  marked4 = false;

  credentials: IdeaPayload = {
    id: 0,
    client_ID: 0,
    idea_name: '',
    idea_category: '',
    idea_description: '',
    // payment:''
  };

  confirmedPro: ConfirmedPro = {
    id: 0,
    developer_ID: 0,
    client_ID: 0,
    idea_ID: 0,
    category: '',
    isCompleted: false
  };

  ideaRequest;
  requestDeveloper;

  constructor(private router: Router,
              private navCtrl: NavController,
              private authpro: IdeaService,
              private servicesService: ServicesService) { }

  ngOnInit() {
  }

 onClick(){
    this.marked1 = false;
    this.marked2 = true;
  }

  AcceptProReq(dev_ID: number, category: string) {
    this.confirmedPro.developer_ID = dev_ID;
    this.confirmedPro.client_ID = this.servicesService.getUserDetails().id;
    this.confirmedPro.idea_ID = this.credentials.id;
    this.confirmedPro.category = category;

    this.authpro.Confirmedidea(this.confirmedPro).subscribe(
      () => {
        window.location.reload();
      }
    );

  }
}
