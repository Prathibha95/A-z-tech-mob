import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { LoginPage } from './login.page';
import { LoginRoutingModule } from './login-routing.module';

// const routes: Routes = [
//   {
//     path: '',
//     component: LoginPage
//   }
// ];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    LoginRoutingModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
