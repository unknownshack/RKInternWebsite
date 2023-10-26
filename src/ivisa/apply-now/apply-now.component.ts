import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-apply-now',
  templateUrl: './apply-now.component.html',
  styleUrls: ['./apply-now.component.css']
})
export class ApplyNowComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute){}

  travelCountry: string = "";
  
  ngOnInit() {
    this.travelCountry = this.route.snapshot.paramMap.get("country") ?? "";
  }

  fillInformation(){
    this.router.navigate(["./apply-now-stepper", this.travelCountry]);
  }
}
