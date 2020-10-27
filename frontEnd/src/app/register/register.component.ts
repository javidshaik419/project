import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 


  details = {
    name: "",
    email: "",
    password: "",
    mobile: "",
    role: ""


  }
  msg = ""
  roles = ["Employee", "Audit", "Student"]

  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
 
  }




  submit() {
    console.log("hiii")
    let query = {
      name: this.details.name,
      email: this.details.email,
      password: this.details.password,
      mobile: this.details.mobile,
      role: this.details.role
    }

    this.service.register(query).subscribe((ress) => {
      if (ress) {
        this.msg = ress['msg']
        this.router.navigate(['login'])
      } else {
        this.msg = ress["msg"]
      }
    })
  }

}
