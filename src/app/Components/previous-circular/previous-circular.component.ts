import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Circular } from 'src/app/Model/Circular.model';
import { CircularService } from 'src/app/Service/circular.service';

@Component({
  selector: 'app-previous-circular',
  templateUrl: './previous-circular.component.html',
  styleUrls: ['./previous-circular.component.css']
})
export class PreviousCircularComponent implements OnInit {

  circularService: CircularService;
  circulars: Circular[] = [];
  route: Router;

  constructor(circularService: CircularService, route: Router) {
    this.circularService = circularService;
    this.route = route;
   }

  ngOnInit(): void {
    this.circularService.adminGetsCirculars(localStorage.getItem("id")).subscribe(result =>{
      console.log(result);
      this.circulars = result;
    })
  }
  showApplicants(id: number){
    this.route.navigateByUrl("/Dashboard/(pannel:applicants/"+id+")");
  }

}
