import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import{LoginComponent} from './login/login.component';
import{UserProfileComponent} from './user-profile/user-profile.component';
import{AuditProfileComponent} from './audit-profile/audit-profile.component';
import{ForgetPasswordComponent} from './forget-password/forget-password.component';
import{GetUsersComponent} from './get-users/get-users.component';
import{AuthGuardService} from './utils/authGuard/auth-guard.service'



const routes: Routes = [
  {
    path: '',
    redirectTo: 'register',
    pathMatch: 'full'
  },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "userProfile", component: UserProfileComponent,canActivate: [AuthGuardService]  },
  { path: "auditProfile", component: AuditProfileComponent ,canActivate: [AuthGuardService]  },
  { path: "changePassword", component: ForgetPasswordComponent,canActivate: [AuthGuardService]  },
  { path: "getUsersList", component: GetUsersComponent, canActivate: [AuthGuardService] },


  


  





  


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
