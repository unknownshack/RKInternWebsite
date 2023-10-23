import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IvisaComponent } from './ivisa.component';
import { IVisaRoutingModule } from './ivisa-routing.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


@NgModule({
  declarations: [ 
    IvisaComponent
  ],
  imports: [
    BrowserModule,
    IVisaRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [IvisaComponent]
})
export class IVisaModule { }
