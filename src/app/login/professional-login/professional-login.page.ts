import { ServicesService } from './../../services.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-professional-login',
  templateUrl: './professional-login.page.html',
  styleUrls: ['./professional-login.page.scss'],
})
export class ProfessionalLoginPage implements OnInit {
  loginForm: FormGroup;
  loginErr: boolean = false;
  error_messages= {
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
    // if (this.servicesService.currentUser) {
    //   if (this.servicesService.currentUser.role === "professional") {
    //     this.router.navigate(['/professional-login']);
    //   } else {
    //     this.router.navigate(['/investor-login']);
    //   }
    // }
  }

  async presentValid() {
    const toast = await this.toastController.create({
      message: 'Logging successfull...',
      position: 'middle',
      color: 'success',
      duration: 2000
    });
    toast.present();
  }

  async presentInvalid() {
    const toast = await this.toastController.create({
      message: 'Invalid User... Please Check...',
      position: 'middle',
      color: 'danger',
      duration: 2000
    });
    toast.present();
  }

  onSubmit(loginForm) {
    if (!this.loginForm.valid) {
      return;
    }
    const user = loginForm.value;
    user['role'] = 'professional';
    this.servicesService.loginUser(user).
    subscribe(res => {
      // console.log('hello')
      console.log(res);
      if (res.success) {
        localStorage.setItem('token', res.token);
        this.presentValid();
        this.router.navigate(['/ideapool']);
      } else {
        // console.log('hello');
        // this.presentInvalid();
        if (!res.confirmed) {
          this.presentInvalid();
        } else {
          this.loginErr = true;
          this.presentInvalid();
        }
      }
    },
    err => {
    this.loginErr = true;
    this.presentInvalid();
    }
    );
    loginForm.reset();
  }
  get email() {return this.loginForm.get('email')}
  get password() {return this.loginForm.get('password')}
}
