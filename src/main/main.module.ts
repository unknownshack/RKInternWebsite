import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CarouselComponentComponent } from './carousel-component/carousel-component.component';
import { CounterContainerComponent } from './counter-container/counter-container.component';


@NgModule({
  declarations: [ 
    MainComponent,
    CarouselComponentComponent,
    CounterContainerComponent
  ],
  imports: [
    BrowserModule,
    MainRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class MainModule { }
