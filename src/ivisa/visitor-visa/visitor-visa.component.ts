import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-visitor-visa',
  templateUrl: './visitor-visa.component.html',
  styleUrls: ['./visitor-visa.component.css']
})
export class VisitorVisaComponent implements OnInit {
  
  constructor(private router: Router, private route: ActivatedRoute){}

  travelCountry: string = "";
  
  ngOnInit() {
    this.travelCountry = this.route.snapshot.paramMap.get("country") ?? "";
  }
}
