import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Model/User.model';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: User = new User();
  userService: UserService;
  message: string;
  roleId: number;

  constructor(userService: UserService) {
    this.userService = userService;
   }

  ngOnInit(): void {
  }

  signUp(){
    if(this.roleId == 1){
      this.userService.signUpUser(this.user).subscribe(result =>{
        if(result === "success"){
          this.message = "Sign Up is successfull !";
        }
        else{
          this.message = "Sorry ! Something went wrong.";
        }
      },      
      error =>{
        this.message = "Sorry ! Something went wrong. It might be a connection error.";
      })
    }
    else{
      this.userService.signUpAdmin(this.user).subscribe(result =>{
        if(result === "success"){
          this.message = "Sign Up is successfull !";
        }
        else{
          this.message = "Sorry ! Something went wrong.";
        }
      },
      error =>{
        this.message = "Sorry ! Something went wrong. It might be a connection error.";
      }
      )
    }
   }

   handleChange(id, event){
    if(event.target.checked){
      this.roleId = id;
    }
   }


}
