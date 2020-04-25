import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';

const routes: Routes = [
  
  { path: '', redirectTo: 'customer', pathMatch: 'full' },
  { path: 'customers', component: CustomerListComponent },  
  { path: 'details/:customerId', component: CustomerDetailsComponent },
  { path: 'login',component: LoginComponent },
  { path: 'logout', component: LogoutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
