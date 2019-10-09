import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InvestorRegisterPage } from './investor-register.page';

const routes: Routes = [
  {
    path: '',
    component: InvestorRegisterPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InvestorRegisterPage]
})
export class InvestorRegisterPageModule {}
