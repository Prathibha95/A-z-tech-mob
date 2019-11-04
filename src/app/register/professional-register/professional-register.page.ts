import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-professional-register',
  templateUrl: './professional-register.page.html',
  styleUrls: ['./professional-register.page.scss'],
})
export class ProfessionalRegisterPage implements OnInit {
  form: FormGroup;
  public fieldOptions = [
    { value: 'agriculture', displayValue: 'Agriculure' },
    { value: 'education', displayValue: 'Education' },
    { value: 'engineering', displayValue: 'Engineering'},
    { value: 'it', displayValue: 'Information Technology' },
    { value: 'medical', displayValue: 'Medical' },
    { value: 'textile', displayValue: 'Textile' },
    { value: 'transport', displayValue: 'Transport'},
 ];
  constructor() {}

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
        validators: [Validators.required, Validators.pattern('^[a-zA-Z0-9.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9.]+$')]
      }),
      password: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.minLength(6), Validators.maxLength(30),
                     Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9-.]+$')]
      }),
      conpassword: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.minLength(6), Validators.maxLength(30),
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9-.]+$')]
    }),
    field: new FormControl({
      updateOn: '',
      validators: [Validators.required]
    })
  });
  }

  onCreateProfile() {
    console.log(this.form);
  }

  }

