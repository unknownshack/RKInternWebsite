import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IvisaComponent } from './ivisa.component';
import { IVisaRoutingModule } from './ivisa-routing.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [ 
    IvisaComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    IVisaRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [IvisaComponent]
})
export class IVisaModule { }
