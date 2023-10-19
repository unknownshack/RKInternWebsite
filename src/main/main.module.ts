import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { CarouselModule } from 'ngx-owl-carousel-o'; 


@NgModule({
  declarations: [ 
    MainComponent
  ],
  imports: [
    BrowserModule,
    MainRoutingModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class MainModule { }
