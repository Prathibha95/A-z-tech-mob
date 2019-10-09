import { RegisterPage } from './register.page';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'tabs',
        component: RegisterPage,
        children: [
            {
                path: 'professional', children: [
                    {
                        path: '',
                        loadChildren: './professional-register/professional-register.module#ProfessionalRegisterPageModule'
                    },
                ]
            },
            {
                path: 'investor', children: [
                    {
                        path: '',
                        loadChildren: './investor-register/investor-register.module#InvestorRegisterPageModule'
                    },
                ]
            },
            {
                path: '',
                redirectTo: '/register/tabs/professional',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/register/tabs/professional',
        pathMatch: 'full'
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RegisterRoutingModule {}
