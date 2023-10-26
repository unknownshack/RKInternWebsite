import * as core from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { VisitorVisaComponent } from './visitor-visa/visitor-visa.component';
import { ApplyNowComponent } from './apply-now/apply-now.component';
import { ApplyNowStepperComponent } from './apply-now-stepper/apply-now-stepper.component';

const routes: Routes = [
  {
    component: MainComponent,
    path:''
  },
  {
    component: VisitorVisaComponent,
    path:'visitor-visa/:country'
  },
  {
    component: ApplyNowComponent,
    path:'apply-now/:country'
  },
  {
    component: ApplyNowStepperComponent,
    path: "apply-now-stepper/:country"
  }
];

@core.NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class IVisaRoutingModule { }
