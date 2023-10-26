import { Component, HostListener, Renderer2, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; 

import { setTheme } from 'ngx-bootstrap/utils';

@Component({
  selector: 'app-ivisa',
  templateUrl: './ivisa.component.html',
  styleUrls: ['./ivisa.component.css']
})
export class IvisaComponent {
  constructor(){
    setTheme('bs5'); // or 'bs4'
  }
  
  
}


