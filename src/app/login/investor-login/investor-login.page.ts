import { ServicesService } from './../../services.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-investor-login',
  templateUrl: './investor-login.page.html',
  styleUrls: ['./investor-login.page.scss'],
})
export class InvestorLoginPage implements OnInit {
  loginForm: FormGroup;
  error_messages = {
    email: [
      { type: 'required', message: 'Email is required.'},
      { type: 'minLength', message: 'Email length must be longer than 6 characters.'},
      { type: 'maxLength', message: 'Email length must be lower than 50 characters.'},
      { type: 'pattern', message: 'Please enter valid Email address.'}
    ],
    password: [
      { type: 'required', message: 'Password is required.'},
      { type: 'minLength', message: 'Password length must be longer than 6 characters.'},
      { type: 'maxLength', message: 'Password length must be lower than 30 characters.'},
      { type: 'pattern', message: 'Please must contains lowercase, uppercase and numbers.'}
    ],
  };
  constructor(
    public formBuilder: FormBuilder,
    private servicesService: ServicesService,
    private router: Router,
    public toastController: ToastController
  ) {
    this.loginForm = this.formBuilder.group({
      password: new FormControl( '' , Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9-.]+$')
      ])),
      email: new FormControl( '' , Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(50),
        Validators.pattern('^[a-zA-Z0-9.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9.]+$')
      ]))
    });
   }

  ngOnInit() {
  }
  async presentValid() {
    const toast = await this.toastController.create({
      message: 'Logging successfull...',
      position: 'middle',
      color: 'light',
      duration: 2000
    });
    toast.present();
  }

  async presentInvalid() {
    const toast = await this.toastController.create({
      message: 'Logging Error... Please Check...',
      position: 'middle',
      color: 'light',
      duration: 2000
    });
    toast.present();
     }

     onSubmit(loginForm) {
      if (!this.loginForm.valid) {
        return;
      }
      const user = loginForm.value;
      user['role'] = 'investor';
      this.servicesService.loginUser(user).
      subscribe(res => {
        // console.log('hello')
        console.log(res);
        if (res.success) {
          this.presentValid();
          this.router.navigate(['/investor-ideapool']);
        } else {
          // console.log('hello');
          this.presentInvalid();
        }
      },
      err => {
      }
      );
      loginForm.reset();
    }
    get email() {return this.loginForm.get('email')}
    get password() {return this.loginForm.get('password')}
  }