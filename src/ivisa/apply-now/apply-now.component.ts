import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DropDownModel } from 'src/Model/dropdownModel';


@Component({
  selector: 'app-apply-now',
  templateUrl: './apply-now.component.html',
  styleUrls: ['./apply-now.component.css']
})
export class ApplyNowComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute){}

  travelCountry: string = "";
  applyForOption: DropDownModel[] = [{label: "Visitor Visa - 10 years, Multiple Entry", value:"1"}, {label:"Advance CBSA Declaration (ArriveCAN) - 30 days, Single Entry", value:"2"}]

  ngOnInit() {
    this.travelCountry = this.route.snapshot.paramMap.get("country") ?? "";
  }

  fillInformation(){
    this.router.navigate(["./apply-now-stepper", this.travelCountry]);
  }
}
