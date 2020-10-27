import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-audit-profile',
  templateUrl: './audit-profile.component.html',
  styleUrls: ['./audit-profile.component.css']
})
export class AuditProfileComponent implements OnInit {

  details = {
    name: ""
  }
  id: string

  constructor(private service: ServiceService, private route: Router) { }
  ngOnInit(): void {
    this.setId()
    this.getDetails()
  }
  setId() {
    this.id = localStorage.getItem('id')
    console.log(this.id, "id")
  }

  getDetails() {
    let query = {
      id: this.id
    }
    this.service.details(query).subscribe((ress) => {
      if (ress) {
        this.details = ress['result']
        console.log(this.details, "result")
      } else {
        console.log("details get failed")

      }
    })
  }
  changePassword() {
    this.route.navigate(['changePassword'])
  }
  getuserDetails() {
    this.route.navigate(['getUsersList'])
  }
  logout() {
    let query={
      id:this.id
    }
    this.service.logtme(query).subscribe((Ress)=>{
      if(Ress){
        console.log(Ress,"time")
      }else{
        console.log("no time")
      }
    })
    localStorage.clear()
    this.route.navigate(['login'])
  }


}
