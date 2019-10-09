import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProfessionalLoginPage } from './professional-login.page';

const routes: Routes = [
  {
    path: '',
    component: ProfessionalLoginPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProfessionalLoginPage]
})
export class ProfessionalLoginPageModule {}
