import { Component, HostListener, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-ivisa',
  templateUrl: './ivisa.component.html',
  styleUrls: ['./ivisa.component.css']
})
export class IvisaComponent {

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  @HostListener('document:click', ['$event'])
  onClick(event: Event) {
    const target = event.target as HTMLElement;

    // Close all dropdowns if not interacting with open dropdown
    if (!target.classList.contains('dropdown-js')) {
      const dropdownMenu = target.closest('.dropdown-menu') as HTMLElement;
      const navItem = target.closest('.nav-item') as HTMLElement;

      if (dropdownMenu === null || navItem === null) {
        this.closeAllDropdowns();
      }
    }
  }

  dropdownClickHandler(event: Event) {
    const button = event.target as HTMLElement;
    const menu = button.nextElementSibling as HTMLElement;

    if (menu.classList.contains('show')) {
      this.closeDropdown(menu, button);
    } else {
      this.closeAllDropdowns();
      this.openDropdown(menu, button);
    }
  }

  private openDropdown(menu: HTMLElement, button: HTMLElement) {
    menu.classList.add('show');
    button.setAttribute('aria-expanded', 'true');
  }

  private closeDropdown(menu: HTMLElement, button: HTMLElement) {
    menu.classList.remove('show');
    button.setAttribute('aria-expanded', 'false');
  }

  private closeAllDropdowns() {
    const dropdowns = this.el.nativeElement.querySelectorAll('.dropdown-js');
    dropdowns.forEach((node: HTMLElement) => {
      node.setAttribute('aria-expanded', 'false');
      const menu = node.nextElementSibling as HTMLElement;
      if (menu.classList.contains('show')) {
        menu.classList.remove('show');
      }
    });
  }

  scrollToTrustedBy(element: Element | null){
    element?.scrollIntoView({behavior: "smooth", block: "nearest", inline: 'end'})
  }

  showTrustedBy(id: string){
    this.scrollToTrustedBy(document.getElementById(id));
  }

  allTrustedByContainers(deviceType: string){
    return document.querySelectorAll(`[id^=trusted-by-${deviceType}]`);
  }

  showLastTrustedBy(deviceType: string){
    const allTrustedBy = this.allTrustedByContainers(deviceType);
    if(allTrustedBy.length > 0){
      this.scrollToTrustedBy(allTrustedBy[allTrustedBy.length - 1]);
    }
  }

  showFirstTrustedBy(deviceType: string){
    const allTrustedBy = this.allTrustedByContainers(deviceType);
    if(allTrustedBy.length > 0){
      this.scrollToTrustedBy(allTrustedBy[0]);
    }
  }

  toggleArrowImage() {
    const arrowImage = this.el.nativeElement.querySelector('#arrow-img');
    const viewMore = this.el.nativeElement.querySelector('#view-more');
    const viewLess = this.el.nativeElement.querySelector('#view-less');
    const collapseCountries = this.el.nativeElement.querySelector('#collapseCountries');
  
    if (arrowImage.classList.contains('transform')) {
      arrowImage.classList.add('icon-arrow-open');
      arrowImage.classList.remove('transform', 'rotate-180');
  
      viewMore.classList.remove('hidden');
      viewLess.classList.add('hidden');
  
      collapseCountries.classList.add('hidden');
    } else {
      arrowImage.classList.add('transform', 'rotate-180');
  
      viewMore.classList.add('hidden');
      viewLess.classList.remove('hidden');
  
      collapseCountries.classList.remove('hidden');
    }
  }
  
}
