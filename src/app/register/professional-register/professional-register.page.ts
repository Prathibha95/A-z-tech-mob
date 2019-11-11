import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from './../../services.service';
import { PasswordValidator } from 'src/app/auth/auth.page';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-professional-register',
  templateUrl: './professional-register.page.html',
  styleUrls: ['./professional-register.page.scss'],
})

export class ProfessionalRegisterPage implements OnInit {
  form;
  has: boolean = false;
  regErr: boolean;

//   public fieldOptions = [
//     { value: 'agriculture', displayValue: 'Agriculure' },
//     { value: 'education', displayValue: 'Education' },
//     { value: 'engineering', displayValue: 'Engineering'},
//     { value: 'it', displayValue: 'Information Technology' },
//     { value: 'medical', displayValue: 'Medical' },
//     { value: 'textile', displayValue: 'Textile' },
//     { value: 'transport', displayValue: 'Transport'},
//  ];
  constructor(private servicesService: ServicesService,
              private router: Router,
              private fb: FormBuilder,
              public toastController: ToastController
              ) {
                this.form = fb.group({
                  firstName: ['', Validators.required],
                  lastName: ['', Validators.required],
                  email: ['', [
                    Validators.required,
                    Validators.email
                  ]],
                  password: ['', [
                    Validators.required,
                    Validators.minLength(8)
                  ]],
                  cpassword: ['', [
                    Validators.required,
                    PasswordValidator('password')
                  ]]
                });
              }
  ngOnInit() {
   }

   async successToast() {
    const toast = await this.toastController.create({
      message: 'Register_Professional successfull...',
      position: 'middle',
      color: 'success',
      duration: 2000
    });
    toast.present();
  }

  async errorToast() {
    const toast = await this.toastController.create({
      message: 'Register_Professional Error... Please Check...',
      position: 'middle',
      color: 'danger',
      duration: 2000
    });
    toast.present();
  }

   get firstName() {
    return this.form.get('firstName');
  }

  get lastName() {
    return this.form.get('lastName');
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  get cpassword() {
    return this.form.get('cpassword');
  }

  onSubmit(form) {
    const user = form.value;
    user['role'] = 'professional';
    this.servicesService.registerUser(user).
      subscribe(res => {
        console.log('hello');
        console.log(res);
        if (res.success) {
          this.successToast( );
          localStorage.setItem('token', res.token);
          this.router.navigate(['/professional-login']);
        } else {
          if (res.has) {
            this.has = true;
          } else {
            this.regErr = true;
            this.errorToast();
          }
        }
      }, err => {
        this.regErr = true;
        this.errorToast();
      });
    form.reset();
  }
}
