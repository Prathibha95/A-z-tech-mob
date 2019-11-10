import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EditIdeaFormPage } from './edit-idea-form.page';

const routes: Routes = [
  {
    path: '',
    component: EditIdeaFormPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EditIdeaFormPage]
})
export class EditIdeaFormPageModule {}
