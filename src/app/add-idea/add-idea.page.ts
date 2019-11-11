import { Router } from '@angular/router';
import { IdeaService } from './../ideapool/idea.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServicesService } from './../services.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-idea',
  templateUrl: './add-idea.page.html',
  styleUrls: ['./add-idea.page.scss'],
})
export class AddIdeaPage implements OnInit {
  form: FormGroup;
  constructor(private ideaService: IdeaService,
              private router: Router,
              private servicesServices: ServicesService,
              public toastController: ToastController
              ) {}

              async successToast() {
                const toast = await this.toastController.create({
                  message: 'Adding Your Idea...',
                  position: 'middle',
                  color: 'success',
                  duration: 2000
                });
                toast.present();
              }
              async errorToast() {
                const toast = await this.toastController.create({
                  message: 'Please Check...',
                  position: 'middle',
                  color: 'danger',
                  duration: 2000
                });
                toast.present();
              }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.maxLength(30)]
      }),
      category: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.maxLength(30)]
      }),
      content: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.maxLength(1000)]
      }),
      publishdate: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
            })
  });
  }
   addIdea(form) {
    console.log(this.form);
    const uId = this.servicesServices.currentUser._id;
    if (!this.form.valid) {
      return;
    }
    const i = form.value;
    const idea = {
      title: i.title,
      category: i.category,
      type: 'private',
      content: i.content
    };
    this.successToast();
    this.ideaService.addIdea(uId, idea).subscribe(res => {
          console.log(res);
        });
    form.reset();
    this.router.navigate(['/ideapool']);

    }
}
