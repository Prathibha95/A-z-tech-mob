import { AddComponent } from './add/add.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddIdeaPage } from './add-idea.page';

const routes: Routes = [
  {
    path: '',
    component: AddIdeaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddIdeaPage, AddComponent],
  entryComponents: [AddComponent]
})
export class AddIdeaPageModule {}
