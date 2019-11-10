import { ServicesGuard } from './services.guard';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'ideapool', loadChildren: './ideapool/ideapool.module#IdeapoolPageModule'},
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule'},
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
  { path: 'aboutus', loadChildren: './aboutus/aboutus.module#AboutusPageModule'},
  // tslint:disable-next-line: max-line-length
  { path: 'investor-ideapool', loadChildren: './ideapool/investor-ideapool/investor-ideapool.module#InvestorIdeapoolPageModule' },
  { path: 'discover', loadChildren: './discover/discover.module#DiscoverPageModule' },
  { path: 'investor-list', loadChildren: './investor-list/investor-list.module#InvestorListPageModule' },
  // tslint:disable-next-line: max-line-length
  { path: 'professional-edit-profile', loadChildren: './professional-edit-profile/professional-edit-profile.module#ProfessionalEditProfilePageModule' },
  { path: 'investor-view-more', loadChildren: './investor-view-more/investor-view-more.module#InvestorViewMorePageModule' },
  { path: 'investor-profile', loadChildren: './investor-profile/investor-profile.module#InvestorProfilePageModule' },
  { path: 'edit-idea-form', loadChildren: './edit-idea-form/edit-idea-form.module#EditIdeaFormPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// canLoad: [ServicesGuard]