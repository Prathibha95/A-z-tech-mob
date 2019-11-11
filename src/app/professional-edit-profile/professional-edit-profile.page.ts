import { ToastController } from '@ionic/angular';
import { ServicesService } from './../services.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-professional-edit-profile',
  templateUrl: './professional-edit-profile.page.html',
  styleUrls: ['./professional-edit-profile.page.scss'],
})
export class ProfessionalEditProfilePage implements OnInit {
  form;
  @Input() fname;
  @Input() lname; 

  editStage = false;
  users: any;
  uId: any;
  selectedFile: File = null;
  url = "";
  imageView = false;

  professional = {
    email: '',
    name: '',
    country: '',
    imageURL: '',
    fname: '',
    lname: '',
  };
  constructor(private servicesService: ServicesService,
              private fb: FormBuilder,
              private toastController: ToastController,
              private route: ActivatedRoute) {

    this.form = fb.group({
      // fname: new FormControl( Validators.required),
      // lname: new FormControl( Validators.required),
      fname: [this.fname, Validators.required],
      lname: [this.lname, Validators.required]
    });
  }

  async presentValid() {
    const toast = await this.toastController.create({
      message: 'Profile Edit successfully...',
      position: 'middle',
      color: 'success',
      duration: 2000
    });
    toast.present();
  }

  ngOnInit() {

    this.route.queryParams.subscribe (params => {
      this.uId = params['uId'];
      });

    const _id = this.servicesService.currentUser._id;
    this.servicesService.userProfile(_id).subscribe(res => {
      console.log(_id);
      const users = res;
      console.log(users);
      this.professional.email = users.email;
      this.professional.imageURL = users.imageURL;
      this.professional.fname = users.firstName;
      this.professional.lname = users.lastName;
      this.professional.name = users.firstName + ' ' + users.lastName;
    });

  }

  updateProfile(form) {
    this.editStage = false;
    console.log(form.value);
    const _id = this.servicesService.currentUser._id;
    const f = form.value;

    const user = {
      firstName: f.fname,
      lastName: f.lname,
    };
    this.servicesService.editProfile(_id, user)
      .subscribe(res => {
        console.log(res);
        if (res.success) {
          this.presentValid();
        }
      });
}


editProfile() {
  this.editStage = true;
  this.form.patchValue({
    fname: this.fname,
    lname: this.lname,
  });
}
        updateImage() {
          const uId = this.servicesService.currentUser._id;
          console.log(uId);
          this.servicesService.uploadImage(this.selectedFile, uId)
            .subscribe( res => {
              const response = res;
              console.log(response);
              this.professional.imageURL = response.imageURL;
            });
        }

        onFileSelected(event) {
          if (event.target.files && event.target.files[0]) {
                const reader = new FileReader();
                reader.readAsDataURL(event.target.files[0]);
                reader.onload = (event) => {
                  this.url = event.target['result'];
                };
                this.imageView = true;
                this.selectedFile = event.target.files[0];
                  }
                }
}
