import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
//import { AlertController } from '@ionic-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

loginForm: FormGroup;

error_messages = {
  'email': [
    { type: 'required', message: 'Email is required.'},
    { type: 'minLength', message: 'Email length must be longer than 6 characters.'},
    { type: 'maxLength', message: 'Email length must be lower than 50 characters.'},
    { type: 'pattern', message: 'Please enter valid Email address.'}
  ],
  'password': [
    { type: 'required', message: 'Password is required.'},
    { type: 'minLength', message: 'Password length must be longer than 6 characters.'},
    { type: 'maxLength', message: 'Password length must be lower than 30 characters.'},
    { type: 'pattern', message: 'Please must contains lowercase, uppercase and numbers.'}
  ],
}

  constructor(
    public formBuilder: FormBuilder
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

  login() {
    console.log('email: ', this.loginForm.value.email);
    console.log('password: ', this.loginForm.value.password);

    // let alert = this.alertCtrl.create({
    //   title:'' ,
    //   subTitle:'',
    //   buttons: ['OK']

    // });
    // alert.present();
  }

}
