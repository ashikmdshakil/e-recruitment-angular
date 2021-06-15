import { Component, OnInit } from '@angular/core';
import { Circular } from 'src/app/Model/Circular.model';
import { CircularService } from 'src/app/Service/circular.service';

@Component({
  selector: 'app-erecruitment',
  templateUrl: './erecruitment.component.html',
  styleUrls: ['./erecruitment.component.css']
})
export class ErecruitmentComponent implements OnInit {

  circular: Circular = new Circular();
  circularService: CircularService;

  constructor(circularService: CircularService) {
    this.circularService = circularService;
   }

  ngOnInit(): void {

  }

  


}
