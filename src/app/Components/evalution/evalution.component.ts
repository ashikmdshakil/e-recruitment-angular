import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Certifications } from 'src/app/Model/Certifications.model';
import { Circular } from 'src/app/Model/Circular.model';
import { Education } from 'src/app/Model/Education.model';
import { Evalution } from 'src/app/Model/Evalution.model';
import { Experience } from 'src/app/Model/Experience.model';
import { User } from 'src/app/Model/User.model';
import { CircularService } from 'src/app/Service/circular.service';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-evalution',
  templateUrl: './evalution.component.html',
  styleUrls: ['./evalution.component.css']
})
export class EvalutionComponent implements OnInit {

  userId: number;
  circularId: number;
  route: ActivatedRoute;
  userService: UserService;
  circular: Circular = new Circular();
  applicant: User = new User();
  educations: Education[] = [];
  experiences: Experience[] = [];
  certifications: Certifications[] = [];
  evalution: Evalution = new Evalution();
  cercularService: CircularService;
  message: string;

  constructor(route: ActivatedRoute, userService: UserService, circularService: CircularService) {
    this.route = route;
    this.userService = userService;
    this.cercularService = circularService;
   }

  ngOnInit(): void {
    this.route.params.subscribe(param =>{
      this.userId = param.aId;
      this.circularId = param.cId;
    })
    this.userService.getUserById(this.userId.toString()).subscribe(result =>{
      this.applicant = result;
      this.experiences = this.applicant.experiences;
      this.educations = this.applicant.educations;
      this.certifications = this.applicant.certifications;
    })
    this.cercularService.getEvalution(this.userId.toString(),this.circularId.toString()).subscribe(result =>{
      //console.log(result);
      if(result !== null){
          this.evalution = result;
      }
    })
  }

  saveEvalution(){

    this.evalution.applicant = this.applicant;
    this.circular.id = this.circularId;
    this.evalution.circular = this.circular;

    this.cercularService.saveEvalution(this.evalution).subscribe(result =>{
      if(result === 'success'){
        this.message = "Evalution is saved successfully!";
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
