import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Circular } from 'src/app/Model/Circular.model';
import { User } from 'src/app/Model/User.model';
import { CircularService } from 'src/app/Service/circular.service';

@Component({
  selector: 'app-circular-details',
  templateUrl: './circular-details.component.html',
  styleUrls: ['./circular-details.component.css']
})
export class CircularDetailsComponent implements OnInit {

  circularId: number;
  route: ActivatedRoute;
  circularService: CircularService;
  circular: Circular;
  user: User = new User();
  message: string;

  constructor(route: ActivatedRoute, circularService: CircularService) {
    this.route = route;
    this.circularService = circularService;
   }

  ngOnInit(): void {
    this.route.params.subscribe(result =>{
      this.circularId = result.id;
      this.circularService.getCircularById(this.circularId.toString()).subscribe(result =>{
        this.circular = result;
      })
    })
  }

  applyJob(){
    this.user.id = Number(localStorage.getItem("id"));
    this.circular.applicants.push(this.user);
    this.circularService.applyJob(this.circular).subscribe(result =>{
      if(result === 'success'){
        this.message = "Application is successfull !";
      }
      else{
        this.message = "Sorry something went wrong.";
      }
    },
    error =>{
      this.message = "Sorry something went wrong. It might be a connection error.";
    }
    )
  }

}
