import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from './../../services.service';
import { HttpClient } from '@angular/common/http';
import { PasswordValidator } from 'src/app/auth/auth.page';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-investor-register',
  templateUrl: './investor-register.page.html',
  styleUrls: ['./investor-register.page.scss'],
})
export class InvestorRegisterPage implements OnInit {
  form;

  constructor(private servicesService: ServicesService,
              private router: Router,
              private fb: FormBuilder,
              public toastController: ToastController) {
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
                async successToast() {
                const toast = await this.toastController.create({
                  message: 'Register_Investor successfull...',
                  position: 'middle',
                  color: 'light',
                  duration: 2000
                });
                toast.present();
              }
              async errorToast() {
                const toast = await this.toastController.create({
                  message: 'Register_Investor Error... Please Check...',
                  position: 'middle',
                  color: 'danger',
                  duration: 2000
                });
                toast.present();
              }
  ngOnInit() {
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
    user['role'] = 'investor';
    this.servicesService.registerUser(user).
      subscribe(res => {
        console.log('hello');
        console.log(res);
        if (res.success) {
          this.successToast( );
          //localStorage.setItem('token', res.token);
          this.router.navigate(['/investor-login']);
        } else {
            this.errorToast( );
          }
      });
    form.reset();
  // get email() {return this.loginForm.get('email')}
  // get password() {return this.loginForm.get('password')}
}
}
