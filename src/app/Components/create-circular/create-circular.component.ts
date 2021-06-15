import { Component, OnInit } from '@angular/core';
import { Circular } from 'src/app/Model/Circular.model';
import { User } from 'src/app/Model/User.model';
import { CircularService } from 'src/app/Service/circular.service';

@Component({
  selector: 'app-create-circular',
  templateUrl: './create-circular.component.html',
  styleUrls: ['./create-circular.component.css']
})
export class CreateCircularComponent implements OnInit {

  circular: Circular = new Circular();
  circularService: CircularService;
  owner: User = new User();
  message: string;

  constructor(circularService: CircularService) {
    this.circularService = circularService;
   }

  ngOnInit(): void {

  }

  createCircular(){
    this.owner.id = Number(localStorage.getItem("id"));
    this.circular.owner = this.owner;
    console.log(this.circular.deadTime);
    this.circularService.createCircular(this.circular).subscribe(result =>{
      if(result.status === 'success'){
        this.circular.token = result.token;
        this.message = "Circular is successfully created. Copy the token and circulate.";
      }
      else{
        this.message = "Sorry something went wrong !";
      }
    },
    error =>{
      this.message = "Sorry something went wrong. It might be a connection error.";
    }
    )
  }

}
