import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProfessionalRegisterPage } from './professional-register.page';

const routes: Routes = [
  {
    path: '',
    component: ProfessionalRegisterPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProfessionalRegisterPage]
})
export class ProfessionalRegisterPageModule {}
