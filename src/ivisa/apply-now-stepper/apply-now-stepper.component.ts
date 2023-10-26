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
  genderValue: string = "";

  showAlert: boolean = false;

  selectedDate: Date= new Date();

  ngOnInit() {
    this.travelCountry = this.route.snapshot.paramMap.get("country") ?? "";
  }


  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  onDateChange(event: Event){

  }
  
  submitPayment(){
    this.showAlert = true;
  }
  
  onAlertClose(){
    this.router.navigate([""]);
  }

}
