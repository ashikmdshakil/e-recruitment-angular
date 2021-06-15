import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Model/User.model';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  imageUrl: any;
  message: string;
  username: any;
  userService: UserService;
  user: User = new User();

  constructor(userService: UserService) {
    this.userService = userService;
   }

  ngOnInit(): void {
    this.userService.getUserByEmail(localStorage.getItem("username")).subscribe(result =>{
        this.user = result;
        localStorage.setItem("id",this.user.id.toString());
        this.username = this.user.name;
    })
  }

}
