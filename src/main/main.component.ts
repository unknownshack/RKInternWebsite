import { Component, OnInit, ElementRef } from '@angular/core';

declare var $: any;
declare const Waypoint: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  parallaxOffset = 0;

  animationClass: string = '';
  animationDelay: string = '0s';

  constructor(private el: ElementRef) {}

  ngOnInit() {
    window.addEventListener('scroll', () => {
      this.parallaxOffset = window.scrollY * 0;
    });

    // Assuming you have the onScrollInit function defined as shown in a previous response
    const items = $('.staggered-animation') as JQuery<HTMLElement>;
    const trigger = $('.staggered-animation-container') as JQuery<HTMLElement>;

    this.onScrollInit(items, trigger);
  }

  onScrollInit(items: JQuery<HTMLElement>, trigger: JQuery<HTMLElement> | undefined) {
    items.each(function(this: HTMLElement) {
      const osElement = $(this);
      var osAnimationClass = osElement.attr('data-os-animation');
      osAnimationClass = osAnimationClass ? osAnimationClass : "fadeIn";
      
      var osAnimationDelay = osElement.attr('data-os-animation-delay');
      osAnimationDelay = osAnimationDelay ? osAnimationDelay : "1s";

      const osTrigger = trigger ? trigger : osElement;

      osTrigger.waypoint(
        () => {
          osElement.addClass(`animate__animated animate__${osAnimationClass} animate__delay-${osAnimationDelay}`);
        },
        {
          triggerOnce: true,
          offset: '90%'
        }
      );
    });
  }
}
