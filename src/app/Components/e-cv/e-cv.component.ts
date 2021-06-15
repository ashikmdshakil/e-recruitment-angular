import { Component, OnInit } from '@angular/core';
import { Certifications } from 'src/app/Model/Certifications.model';
import { Education } from 'src/app/Model/Education.model';
import { Experience } from 'src/app/Model/Experience.model';
import { User } from 'src/app/Model/User.model';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-e-cv',
  templateUrl: './e-cv.component.html',
  styleUrls: ['./e-cv.component.css']
})
export class ECvComponent implements OnInit {

  user: User = new User();
  userService: UserService;
  experiences: any[] = [];
  experience: Experience = new Experience();
  educations: Education[] = [];
  education: Education = new Education();
  certifications: Certifications[] = [];
  certification: Certifications = new Certifications();
  message: string;
  constructor(userService: UserService) {
    this.userService = userService; 
   }

  ngOnInit(): void {
    this.userService.getUserByEmail(localStorage.getItem('username')).subscribe(result =>{
      console.log(result);
      this.user = result;
      this.experiences = this.user.experiences;
      this.educations = this.user.educations;
      this.certifications = this.user.certifications;
    })
  }

  exfieldsChange(event){
    if(event.currentTarget.checked){
      this.experience.continuing = true;
    }
    else{
      this.experience.continuing = false;
    }
  }
  edfieldsChange(event){
    if(event.currentTarget.checked){
      this.education.continuing = true;
    }
    else{
      this.education.continuing = false;
    }
  }
  ctfieldsChange(event){
    if(event.currentTarget.checked){
      this.certification.continuing = true;
    }
    else{
      this.certification.continuing = false;
    }
  }

  addExperience(){
    let user: User = new User();
    user.id = Number(localStorage.getItem("id"));
    this.experience.user = user;
    this.userService.addExperience(this.experience).subscribe(result =>{
      if(result === "success"){
        this.userService.getExperiences(localStorage.getItem("id")).subscribe(result =>{
          this.experiences = result;
        })
      }
    })
  }
  addEducation(){
    let user: User = new User();
    user.id = Number(localStorage.getItem("id"));
    this.education.user = user;
    this.userService.addEducation(this.education).subscribe(result =>{
      if(result === "success"){
        this.userService.getEducations(localStorage.getItem("id")).subscribe(result =>{
          this.educations = result;
        })
      }
    })
  }

  addCertification(){
    let user: User = new User();
    user.id = Number(localStorage.getItem("id"));
    this.certification.user = user;
    this.userService.addCertification(this.certification).subscribe(result =>{
      if(result === "success"){
        this.userService.getCertifications(localStorage.getItem("id")).subscribe(result =>{
          this.certifications = result;
        })
      }
    })
  }

  updateCv(){
    this.userService.updateCV(this.user).subscribe(result =>{
      if(result === 'success'){
          this.message = "Successfully saved !";
      }
      else{
        this.message = "Sorry Something went wrong !";
      }
    },
    error=>{
      this.message = "Sorry Something went wrong ! It can be a connection error.";
    }
    )
  }

}
