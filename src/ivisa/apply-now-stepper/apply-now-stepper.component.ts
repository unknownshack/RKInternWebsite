import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-apply-now-stepper',
  templateUrl: './apply-now-stepper.component.html',
  styleUrls: ['./apply-now-stepper.component.css']
})
export class ApplyNowStepperComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute,private _formBuilder: FormBuilder) {}

  travelCountry: string = "";
  
  ngOnInit() {
    this.travelCountry = this.route.snapshot.paramMap.get("country") ?? "";
  }


  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  
  submitPayment(){
    alert("You have submitted payment");
    this.router.navigate([""]);
  }

}
