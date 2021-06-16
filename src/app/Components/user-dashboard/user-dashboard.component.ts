import { createViewChild } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  router: Router;

  constructor(router: Router) {
    this.router = router;
   }

  ngOnInit(): void {
  }

  searchCircular(){
    this.router.navigateByUrl("/User-Dashboard");
  }

  showCv(){
    this.router.navigateByUrl("/User-Dashboard/(pannel:e-cv)");
  }

  requestedCircular(){
    this.router.navigateByUrl("/User-Dashboard/(pannel:requested-circular)");
  }

}
