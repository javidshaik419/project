import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  register1 = environment.apiURL + 'api/register';
  login1 = environment.apiURL + 'api/login';
  getDetails1=environment.apiURL+'api/getUserById'
  logtme1=environment.apiURL+'api/logout';
  changePassword1=environment.apiURL+'api/updatePassword';
  getUserList1=environment.apiURL+'api/getUsers'


  register(body) {
   return this.http.post(this.register1, body)

  }
  login(body) {
   return this.http.post(this.login1, body)
  }
  details(body){
  return  this.http.post(this.getDetails1,body)
  }
  logtme(body){
    console.log(body,"service")
    return this.http.post(this.logtme1,body)
  }
  changePassword(body){
    return this.http.post(this.changePassword1,body)
  }
  getUserList(){
    return this.http.get(this.getUserList1)
  }



  constructor(private http: HttpClient) { }
}
