import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  id: string;
  details ={
    name:""
  }

  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.setid();
    this.getDetails();

  }

  setid() {
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
        console.log(this.details,"result")
      }else{
        console.log("details get failed")

      }
    })
  }
  logout(){
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
    this.router.navigate(['login'])
  }


  changePass(){
    this.router.navigate(['changePassword'])
  }
  

}
