import { InvestComponent } from './invest/invest.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InvestorIdeapoolPage } from './investor-ideapool.page';

const routes: Routes = [
  {
    path: '',
    component: InvestorIdeapoolPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InvestorIdeapoolPage, InvestComponent],
  entryComponents: [InvestComponent]
})
export class InvestorIdeapoolPageModule {}
