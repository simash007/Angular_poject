import { Routes } from '@angular/router';
import { NewCustomerRegistrationComponent } from './new-customer-registration/new-customer-registration.component';
import { LoginPageComponent } from './login-page/login-page.component';

export const routes: Routes = [
    
    {path:'', component: LoginPageComponent},
    {path:'newCustomerReg', component: NewCustomerRegistrationComponent},


];
