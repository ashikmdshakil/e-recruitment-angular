import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message: string;
  email: string;
  password: string;
  userService: UserService;
  router: Router;

  constructor(userService: UserService, router: Router) {
    this.userService = userService;
    this.router = router;
   }

  ngOnInit(): void {
  }

  signIn(){
    this.userService.signIn(this.email, this.password).subscribe(result =>{
      let user :any = result['principal'];
      let authorities: any = user.authorities;
      localStorage.setItem("username", user.username);
      localStorage.setItem("password",user.password);
      localStorage.setItem("role",user.authorities[0].authority);
      if(user.authorities[0].authority === 'admin'){
        this.router.navigateByUrl("/Dashboard");
      }
      else{
        this.router.navigateByUrl("/User-Dashboard");
      }     
    },
    error =>{
      this.message = "Sorry ! Something went wrong.";
    }
    )
  }

}
