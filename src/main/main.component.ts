import { Component,  OnInit, ViewChildren, QueryList, ElementRef, AfterViewInit } from '@angular/core';


declare const Waypoint: any;
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  parallaxOffset = 0;

  ngOnInit() {
    // Add a scroll event listener to update the parallax offset
    window.addEventListener('scroll', () => {
      this.parallaxOffset = window.scrollY * 0;
    });
  }

}