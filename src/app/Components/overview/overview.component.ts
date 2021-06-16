import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Model/User.model';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  totalCircular: number;
  user: User = new User();
  userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
   }

  ngOnInit(): void {
    this.userService.getUserByEmail(localStorage.getItem("username")).subscribe(result =>{
      this.user = result;
  })

  this.userService.getTotalCircular().subscribe(result =>{
    this.totalCircular = result;
  })

  }

}
