import * as core from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { VisitorVisaComponent } from './visitor-visa/visitor-visa.component';

const routes: Routes = [
  {
    component: MainComponent,
    path:''
  },
  {
    component: VisitorVisaComponent,
    path:'visitor-visa/:country'
  },
];

@core.NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class IVisaRoutingModule { }
