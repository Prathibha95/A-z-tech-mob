import { LoginPage } from './login.page';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'tabs',
        component: LoginPage,
        children: [
            {
                path: 'professional', children: [
                    {
                        path: '',
                        loadChildren: './professional-login/professional-login.module#ProfessionalLoginPageModule'
                    },
                ]
            },
            {
                path: 'investor', children: [
                    {
                        path: '',
                        loadChildren: './investor-login/investor-login.module#InvestorLoginPageModule'
                    },
                ]
            },
            {
                path: '',
                redirectTo: '/login/tabs/professional',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/login/tabs/professional',
        pathMatch: 'full'
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoginRoutingModule {}
