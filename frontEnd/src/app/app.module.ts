import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ServiceService} from "./service.service";



import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import {HttpConfigInterceptor} from './utils/interceptor/httpconfig.interceptor';




import { AppComponent } from './app.component';
import { AuditProfileComponent } from './audit-profile/audit-profile.component';
import { RegisterComponent } from './register/register.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { GetUsersComponent } from './get-users/get-users.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AuditProfileComponent,
    RegisterComponent,
    ForgetPasswordComponent,
    GetUsersComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule


  ],
  providers: [
    ServiceService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
