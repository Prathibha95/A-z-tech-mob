import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InvestorLoginPage } from './investor-login.page';

const routes: Routes = [
  {
    path: '',
    component: InvestorLoginPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InvestorLoginPage]
})
export class InvestorLoginPageModule {}
