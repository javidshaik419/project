import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  log = {
    email: "",
    password: ""
  }
  msg:""
  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
  }
  onsubmit() {
    let query = {
      email: this.log.email,
      password: this.log.password
    }
    this.service.login(query).subscribe((ress) => {
      if (ress['code'] == 2000) {
        localStorage.setItem('id', ress['data']._id)
        localStorage.setItem('token', ress['token'])
        console.log(ress, "login")
        if (ress['data'].role == "Audit") {
          this.router.navigate(['auditProfile'])
        }
        else {
          this.router.navigate(['userProfile'])
        }



      } else {
        console.log(ress, "reject")
        this.msg=ress['msg']
      }
    })
  }

}
