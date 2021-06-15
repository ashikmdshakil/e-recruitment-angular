import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  router: Router;

  constructor(router: Router) {
    this.router = router;
   }

  ngOnInit(): void {
  }

  showDashboard(){
      this.router.navigateByUrl("/Dashboard");
  }
  createCircular(){
    this.router.navigateByUrl("/Dashboard/(pannel:create-circular)");
  }
  previousCircular(){
    this.router.navigateByUrl("/Dashboard/(pannel:previous-circular)");
  }

}
