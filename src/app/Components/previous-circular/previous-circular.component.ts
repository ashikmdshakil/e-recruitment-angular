import { Component, OnInit } from '@angular/core';
import { Circular } from 'src/app/Model/Circular.model';
import { CircularService } from 'src/app/Service/circular.service';

@Component({
  selector: 'app-previous-circular',
  templateUrl: './previous-circular.component.html',
  styleUrls: ['./previous-circular.component.css']
})
export class PreviousCircularComponent implements OnInit {

  circularService: CircularService;
  circulars: Circular[] = [];

  constructor(circularService: CircularService) {
    this.circularService = circularService;
   }

  ngOnInit(): void {
    this.circularService.adminGetsCirculars(localStorage.getItem("id")).subscribe(result =>{
      this.circulars = result;
    })

  }

}
