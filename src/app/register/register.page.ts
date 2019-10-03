import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
        fname: new FormControl(null, {
          updateOn: 'blur',
          validators: [Validators.required, Validators.maxLength(30)]
        }),
        lname: new FormControl(null, {
          updateOn: 'blur',
          validators: [Validators.required, Validators.maxLength(30)]
        }),
        email: new FormControl(null, {
          updateOn: 'blur',
          validators: [Validators.required]
        }),
        password: new FormControl(null, {
          updateOn: 'blur',
          validators: [Validators.required]
        }),
        conpassword: new FormControl(null, {
          updateOn: 'blur',
          validators: [Validators.required]
      })
    })
  }

  onCreateProfile() {
    console.log(this.form);
  }

  }
