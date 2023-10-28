import { Component, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { MatStepper } from '@angular/material/stepper';


@Component({
  selector: 'app-apply-now-stepper',
  templateUrl: './apply-now-stepper.component.html',
  styleUrls: ['./apply-now-stepper.component.css']
})
export class ApplyNowStepperComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute,private _formBuilder: FormBuilder) {
    
  }

  @ViewChild(MatStepper) stepper: MatStepper;
  tripDetailsIsFormSubmitted = false;
  isYourDetailsFormSubmitted = false;
  isPaymentInfoSubmitted = false;
  travelCountry: string = "";
  genderValue: string = "Select";
  isStandardOfferSelected: boolean = false;
  isRogerOfferSelected: boolean = false;
  showErrorForFeeSelection = false;
  showAlert: boolean = false;

  selectedDate: Date= new Date();

  ngOnInit() {
    this.travelCountry = this.route.snapshot.paramMap.get("country") ?? "";
    
  }


  form = this._formBuilder.group({
    arrivalDate: [ '',[Validators.required]],
    returnDate: [ '',[Validators.required]],
    phone: [ '',[Validators.required]],
    email: [ '',[Validators.required]]
  })

  secondForm = this._formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    gender: ['', Validators.required],
    dob: ['', Validators.required]
  });

  paymentForm = this._formBuilder.group({
    cardHolderName: ['', Validators.required],
    cardNumber: ['', Validators.required],
    expiryDate: ['', Validators.required],
    securityCode: ['', Validators.required]
  })


  submitStep1Form(){
    this.tripDetailsIsFormSubmitted = true;
    if (this.form.valid) { 
      this.stepper.next();
    }
  }

  submitStep2Form(){
    this.isYourDetailsFormSubmitted = true;
    if (this.secondForm.valid) { 
      this.stepper.next();
    }
  }

  standardOffer(){
    this.isRogerOfferSelected = false;
    this.isStandardOfferSelected = true;
    this.showErrorForFeeSelection = false;
  }

  rogerOffer(){
    this.isRogerOfferSelected = true;
    this.isStandardOfferSelected = false;
    this.showErrorForFeeSelection = false;
  }

  submitFeeChoice(){
    if(this.isRogerOfferSelected || this.isStandardOfferSelected){
      this.stepper.next();
    }else{
      this.showErrorForFeeSelection = true;
    }
  }

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  
  secondFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  

  onDateChange(event: Event){

  }
  
  submitPayment(){
    this.isPaymentInfoSubmitted = true;
    if(this.paymentForm.valid){
      this.showAlert = true;
    }
  }
  
  onAlertClose(){
    this.router.navigate([""]);
  }

}
