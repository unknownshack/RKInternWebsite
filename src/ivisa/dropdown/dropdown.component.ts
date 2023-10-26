import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { DropDownModel } from '../../Model/dropdownModel';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit, OnChanges {
  

  @Input() dropdownData: DropDownModel[] = [];
  selectedValue: DropDownModel = {label:"", value:""};
  isDropdownVisible: boolean = false;
  
  filteredDropdownData: DropDownModel[] = [];
  
  ngOnInit(): void {
    this.filteredDropdownData = this.dropdownData;
  }

  ngOnChanges(): void{
  }


  toggleDropdown(){
    this.isDropdownVisible = !this.isDropdownVisible;
  }

  selectValue(value: DropDownModel){
    this.selectedValue = value;
    this.isDropdownVisible = false;
  }
  filterDropDownData(searchTerm: string){
    let searchString = searchTerm.toLowerCase();
    if (!searchString) {
      this.filteredDropdownData = this.dropdownData.slice();
    } else {
      this.filteredDropdownData = this.dropdownData.filter(data =>
        data.label.toLowerCase().includes(searchString)
      );
    } 
  }
}
