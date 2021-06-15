import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CircularService } from 'src/app/Service/circular.service';

@Component({
  selector: 'app-search-job',
  templateUrl: './search-job.component.html',
  styleUrls: ['./search-job.component.css']
})
export class SearchJobComponent implements OnInit {

  message: string;
  token: string;
  circularService: CircularService;
  route: Router;

  constructor(circularService: CircularService, route: Router) {
    this.circularService = circularService;
    this.route = route;
   }

  ngOnInit(): void {
  }

  search(){
    this.circularService.getCircular(this.token.toString()).subscribe(result =>{
      if(result !== null){
        this.route.navigateByUrl("User-Dashboard/(pannel:circular/"+result.id+")");
      }
      else{
        this.message = "Sorry ! No circular was found.";
      }  
    },
    error =>{
      this.message = "Sorry something went wrong. It might be a connection error."
    }
    )
  }

}
