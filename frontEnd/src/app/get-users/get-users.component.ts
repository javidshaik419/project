import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-get-users',
  templateUrl: './get-users.component.html',
  styleUrls: ['./get-users.component.css']
})
export class GetUsersComponent implements OnInit {
  details: {
    // name:"",
    // email:"",
    // mobile:"",
    // lo

  }

  constructor(private service: ServiceService, private route: Router, private location: Location) { }

  ngOnInit(): void {
    this.list()

  }
  list() {
    this.service.getUserList().subscribe((ress) => {
      console.log(ress)
      if (ress['code']==2000) {
        this.details=ress['result']
      } else {
        console.log(ress)
      }
    })
  }
  goBack() {
    this.location.back()

  }

}
