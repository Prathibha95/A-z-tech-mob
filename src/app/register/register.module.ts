import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { RegisterPage } from './register.page';
import { RegisterRoutingModule } from './register-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RegisterRoutingModule,
    IonicModule,
  ],
  declarations: [RegisterPage]
})
export class RegisterPageModule {}
