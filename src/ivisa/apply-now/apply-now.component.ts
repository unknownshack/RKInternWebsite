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

  selectedOption = "";
  showValidationError = false;
  travelCountry: string = "";
  applyForOption: DropDownModel[] = [{label: "Visitor Visa - 10 years, Multiple Entry", value:"1"}, {label:"Advance CBSA Declaration (ArriveCAN) - 30 days, Single Entry", value:"2"}]

  ngOnInit() {
    this.travelCountry = this.route.snapshot.paramMap.get("country") ?? "";
  }

  handleOnDropdownSelect(value: string){
    if(value != ""){
      this.selectedOption = value;
      this.showValidationError = false;
    }
  }

  onValidateSubmit(){
    if(this.selectedOption != ""){
      this.router.navigate(["./apply-now-stepper", this.travelCountry]);
    }
    else{
      this.showValidationError = true;
    }
  }
}
