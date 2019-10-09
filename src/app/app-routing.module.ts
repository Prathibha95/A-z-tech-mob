import { ServicesGuard } from './services.guard';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'ideapool', loadChildren: './ideapool/ideapool.module#IdeapoolPageModule',  canLoad: [ServicesGuard]},
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule', canLoad: [ServicesGuard] },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'add-idea', loadChildren: './add-idea/add-idea.module#AddIdeaPageModule' },
  { path: 'edit-idea', loadChildren: './edit-idea/edit-idea.module#EditIdeaPageModule' },
  { path: 'auth', loadChildren: './auth/auth.module#AuthPageModule' },
  { path: 'professional-login', loadChildren: './login/professional-login/professional-login.module#ProfessionalLoginPageModule' },
  { path: 'investor-login', loadChildren: './login/investor-login/investor-login.module#InvestorLoginPageModule' },
  // tslint:disable-next-line: max-line-length
  { path: 'professional-register', loadChildren: './register/professional-register/professional-register.module#ProfessionalRegisterPageModule' },
  { path: 'investor-register', loadChildren: './register/investor-register/investor-register.module#InvestorRegisterPageModule' },
  { path: 'aboutus', loadChildren: './aboutus/aboutus.module#AboutusPageModule', canLoad: [ServicesGuard] },
  // tslint:disable-next-line: max-line-length
  { path: 'investor-ideapool', loadChildren: './ideapool/investor-ideapool/investor-ideapool.module#InvestorIdeapoolPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
