import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  details = {
    newPass: "",
    conformPass: ""
  }
  msg:""
  constructor(private service: ServiceService, private route: Router,private location:Location) { }

  ngOnInit(): void {
  }


  changePass() {
    let query = {
      id:localStorage.getItem('id'),
      newPassword: this.details.newPass,
      confirmPassword: this.details.conformPass
    }
    this.service.changePassword(query).subscribe((ress)=>{
      if(ress['code']==2000){
        this.msg=ress['msg']
        this.route.navigate(['userProfile'])
      }else{
        console.log(ress)
      }
    })
  }
  back(){
    this.location.back()
  }

}
