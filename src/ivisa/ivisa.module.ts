import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IvisaComponent } from './ivisa.component';
import { IVisaRoutingModule } from './ivisa-routing.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { ApplyNowComponent } from './apply-now/apply-now.component';
import { ApplyNowStepperComponent } from './apply-now-stepper/apply-now-stepper.component';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import { SideBannerComponent } from './side-banner/side-banner.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { DropdownComponent } from './dropdown/dropdown.component';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import {AlertModule } from 'ngx-bootstrap/alert';

@NgModule({
  declarations: [ 
    IvisaComponent,
    MainComponent,
    ApplyNowComponent,
    ApplyNowStepperComponent,
    SideBannerComponent,
    NavbarComponent,
    FooterComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    IVisaRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    BsDatepickerModule.forRoot(),
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [IvisaComponent]
})
export class IVisaModule { }
