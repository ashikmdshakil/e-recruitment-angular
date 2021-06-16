import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Circular } from 'src/app/Model/Circular.model';
import { User } from 'src/app/Model/User.model';
import { CircularService } from 'src/app/Service/circular.service';

@Component({
  selector: 'app-applicants',
  templateUrl: './applicants.component.html',
  styleUrls: ['./applicants.component.css']
})
export class ApplicantsComponent implements OnInit {

  id: number;
  route: ActivatedRoute;
  router: Router;
  circular: Circular = new Circular();
  circularService: CircularService;
  applicants: User[] = [];

  constructor(route: ActivatedRoute, circularService: CircularService, router: Router) {
    this.route = route;
    this.circularService = circularService;
    this.router = router;
   }

  ngOnInit(): void {
    this.route.params.subscribe(param=>{
      this.id = param.id;
      this.circularService.getCircularById(this.id.toString()).subscribe(result =>{
        this.circular = result;
        this.applicants = this.circular.applicants;
      })
    })
  }

  evaluate(aId: number){
    window.open("/evalution/"+aId+"/"+this.circular.id,"_blank");
  }

  sortApplicant(){
    this.circularService.getSortedEvalution(this.circular.id.toString()).subscribe(result =>{
      this.applicants = [];
      result.forEach(element => {
        this.applicants.push(element.applicant);
      });
    })
  }

}
