import { Component, OnInit } from '@angular/core';
import { Circular } from 'src/app/Model/Circular.model';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-requested-circular',
  templateUrl: './requested-circular.component.html',
  styleUrls: ['./requested-circular.component.css']
})
export class RequestedCircularComponent implements OnInit {

  userService: UserService;
  circulars: Circular[] = [];

  constructor(userService: UserService) {
    this.userService = userService;
   }

  ngOnInit(): void {
    this.userService.getRequestedCircular().subscribe(result =>{
      this.circulars = result;
    })

  }

}
