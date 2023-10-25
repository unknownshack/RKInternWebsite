import { Component, HostListener, Renderer2, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  constructor(private renderer: Renderer2, private el: ElementRef, private fb: FormBuilder, private router: Router) { 
    this.form = this.fb.group({
      inputField: ['', [Validators.required]], // Add required validation
    });
  }
  
  form: FormGroup;
  selectedCountry: string = 'Nepal - NP';
  selectedTravelCountry: string = '';
  isDropdownVisible: boolean = false;
  isDropdownTravelVisible: boolean = false;
  countries: { label: string, value: string }[] = [
    { label: 'Australia - AU', value: 'AU' },
{ label: 'Canada - CA', value: 'CA' },
{ label: 'France - FR', value: 'FR' },
{ label: 'Germany - DE', value: 'DE' },
{ label: 'United Kingdom - GB', value: 'GB' },
{ label: 'United States - US', value: 'US' },
{ label: 'Afghanistan - AF', value: 'AF' },
{ label: 'Aland Islands - AX', value: 'AX' },
{ label: 'Albania - AL', value: 'AL' },
{ label: 'Algeria - DZ', value: 'DZ' },
{ label: 'American Samoa - AS', value: 'AS' },
{ label: 'Andorra - AD', value: 'AD' },
{ label: 'Angola - AO', value: 'AO' },
{ label: 'Anguilla - AI', value: 'AI' },
{ label: 'Antarctica - AQ', value: 'AQ' },
{ label: 'Antigua &amp; Barbuda - AG', value: 'AG' },
{ label: 'Argentina - AR', value: 'AR' },
{ label: 'Armenia - AM', value: 'AM' },
{ label: 'Aruba - AW', value: 'AW' },
{ label: 'Austria - AT', value: 'AT' },
{ label: 'Azerbaijan - AZ', value: 'AZ' },
{ label: 'Bahamas - BS', value: 'BS' },
{ label: 'Bahrain - BH', value: 'BH' },
{ label: 'Bangladesh - BD', value: 'BD' },
{ label: 'Barbados - BB', value: 'BB' },
{ label: 'Belarus - BY', value: 'BY' },
{ label: 'Belgium - BE', value: 'BE' },
{ label: 'Belize - BZ', value: 'BZ' },
{ label: 'Benin - BJ', value: 'BJ' },
{ label: 'Bermuda - BM', value: 'BM' },
{ label: 'Bhutan - BT', value: 'BT' },
{ label: 'Bolivia - BO', value: 'BO' },
{ label: 'Bonaire, St Eustatius and Saba - BQ', value: 'BQ' },
{ label: 'Bosnia and Herzegovina - BA', value: 'BA' },
{ label: 'Botswana - BW', value: 'BW' },
{ label: 'Bouvet Island - BV', value: 'BV' },
{ label: 'Brazil - BR', value: 'BR' },
{ label: 'British Indian Ocean Territory - IO', value: 'IO' },
{ label: 'Brunei Darussalam - BN', value: 'BN' },
{ label: 'Bulgaria - BG', value: 'BG' },
{ label: 'Burkina Faso - BF', value: 'BF' },
{ label: 'Burundi - BI', value: 'BI' },
{ label: 'Cambodia - KH', value: 'KH' },
{ label: 'Cameroon - CM', value: 'CM' },
{ label: 'Canada - CA', value: 'CA' },
{ label: 'Cape Verde - CV', value: 'CV' },
{ label: 'Cayman Islands - KY', value: 'KY' },
{ label: 'Central African Republic - CF', value: 'CF' },
{ label: 'Chad - TD', value: 'TD' },
{ label: 'Chile - CL', value: 'CL' },
{ label: 'China - CN', value: 'CN' },
{ label: 'Christmas Island - CX', value: 'CX' },
{ label: 'Cocos (K) Island - CC', value: 'CC' },
{ label: 'Colombia - CO', value: 'CO' },
{ label: 'Comoros - KM', value: 'KM' },
{ label: 'Congo - CG', value: 'CG' },
{ label: 'Cook Islands - CK', value: 'CK' },
{ label: 'Costa Rica - CR', value: 'CR' },
{ label: 'Ivory Coast - CI', value: 'CI' },
{ label: 'Croatia - HR', value: 'HR' },
{ label: 'Cuba - CU', value: 'CU' },
{ label: 'Curacao - CW', value: 'CW' },
{ label: 'Cyprus - CY', value: 'CY' },
{ label: 'Czech Republic - CZ', value: 'CZ' },
{ label: 'Democratic Republic of Congo - CD', value: 'CD' },
{ label: 'Denmark - DK', value: 'DK' },
{ label: 'Djibouti - DJ', value: 'DJ' },
{ label: 'Dominica - DM', value: 'DM' },
{ label: 'Dominican Republic - DO', value: 'DO' },
{ label: 'East Timor - TL', value: 'TL' },
{ label: 'Ecuador - EC', value: 'EC' },
{ label: 'Egypt - EG', value: 'EG' },
{ label: 'El Salvador - SV', value: 'SV' },
{ label: 'Equatorial Guinea - GQ', value: 'GQ' },
{ label: 'Eritrea - ER', value: 'ER' },
{ label: 'Estonia - EE', value: 'EE' },
{ label: 'Ethiopia - ET', value: 'ET' },
{ label: 'Falkland Islands (Malvinas) - FK', value: 'FK' },
{ label: 'Faroe Islands - FO', value: 'FO' },
{ label: 'Fiji - FJ', value: 'FJ' },
{ label: 'Finland - FI', value: 'FI' },
{ label: 'France - FR', value: 'FR' },
{ label: 'French Guiana - GF', value: 'GF' },
{ label: 'French Polynesia - PF', value: 'PF' },
{ label: 'French West Indies - TF', value: 'TF' },
{ label: 'Gabon - GA', value: 'GA' },
{ label: 'Gambia - GM', value: 'GM' },
{ label: 'Georgia - GE', value: 'GE' },
{ label: 'Germany - DE', value: 'DE' },
{ label: 'Ghana - GH', value: 'GH' },
{ label: 'Gibraltar - GI', value: 'GI' },
{ label: 'Greece - GR', value: 'GR' },
{ label: 'Greenland - GL', value: 'GL' },
{ label: 'Grenada - GD', value: 'GD' },
{ label: 'Guadeloupe - GP', value: 'GP' },
{ label: 'Guam - GU', value: 'GU' },
{ label: 'Guatemala - GT', value: 'GT' },
{ label: 'Guernsey - GG', value: 'GG' },
{ label: 'Guinea - GN', value: 'GN' },
{ label: 'Guinea-Bissau - GW', value: 'GW' },
{ label: 'Guyana - GY', value: 'GY' },
{ label: 'Haiti - HT', value: 'HT' },
{ label: 'Heard Island and McDonald Islands - HM', value: 'HM' },
{ label: 'Honduras - HN', value: 'HN' },
{ label: 'Hong Kong - HK', value: 'HK' },
{ label: 'Hungary - HU', value: 'HU' },
{ label: 'Iceland - IS', value: 'IS' },
{ label: 'India - IN', value: 'IN' },
{ label: 'Indonesia - ID', value: 'ID' },
{ label: 'Iran - IR', value: 'IR' },
{ label: 'Iraq - IQ', value: 'IQ' },
{ label: 'Ireland - IE', value: 'IE' },
{ label: 'Isle of Man - IM', value: 'IM' },
{ label: 'Israel - IL', value: 'IL' },
{ label: 'Italy - IT', value: 'IT' },
{ label: 'Jamaica - JM', value: 'JM' },
{ label: 'Japan - JP', value: 'JP' },
{ label: 'Jersey - JE', value: 'JE' },
{ label: 'Jordan - JO', value: 'JO' },
{ label: 'Kazakhstan - KZ', value: 'KZ' },
{ label: 'Kenya - KE', value: 'KE' },
{ label: 'Kiribati - KI', value: 'KI' },
{ label: 'Kosovo - XK', value: 'XK' },
{ label: 'Kuwait - KW', value: 'KW' },
{ label: 'Kyrgyzstan - KG', value: 'KG' },
{ label: 'Laos - LA', value: 'LA' },
{ label: 'Latvia - LV', value: 'LV' },
{ label: 'Lebanon - LB', value: 'LB' },
{ label: 'Lesotho - LS', value: 'LS' },
{ label: 'Liberia - LR', value: 'LR' },
{ label: 'Libya - LY', value: 'LY' },
{ label: 'Liechtenstein - LI', value: 'LI' },
{ label: 'Lithuania - LT', value: 'LT' },
{ label: 'Luxembourg - LU', value: 'LU' },
{ label: 'Macao - MO', value: 'MO' },
{ label: 'Macedonia - MK', value: 'MK' },
{ label: 'Madagascar - MG', value: 'MG' },
{ label: 'Malawi - MW', value: 'MW' },
{ label: 'Malaysia - MY', value: 'MY' },
{ label: 'Maldives - MV', value: 'MV' },
{ label: 'Mali - ML', value: 'ML' },
{ label: 'Malta - MT', value: 'MT' },{ label: 'Marshall Islands - MH', value: 'MH' },
{ label: 'Martinique - MQ', value: 'MQ' },
{ label: 'Mauritania - MR', value: 'MR' },
{ label: 'Mauritius - MU', value: 'MU' },
{ label: 'Mayotte - YT', value: 'YT' },
{ label: 'Mexico - MX', value: 'MX' },
{ label: 'Micronesia - FM', value: 'FM' },
{ label: 'Moldova - MD', value: 'MD' },
{ label: 'Monaco - MC', value: 'MC' },
{ label: 'Mongolia - MN', value: 'MN' },
{ label: 'Montenegro - ME', value: 'ME' },
{ label: 'Montserrat - MS', value: 'MS' },
{ label: 'Morocco - MA', value: 'MA' },
{ label: 'Mozambique - MZ', value: 'MZ' },
{ label: 'Myanmar - MM', value: 'MM' },
{ label: 'Namibia - NA', value: 'NA' },
{ label: 'Nauru - NR', value: 'NR' },
{ label: 'Nepal - NP', value: 'NP' },
{ label: 'Netherlands - NL', value: 'NL' },
{ label: 'New Caledonia - NC', value: 'NC' },
{ label: 'New Zealand - NZ', value: 'NZ' },
{ label: 'Nicaragua - NI', value: 'NI' },
{ label: 'Niger - NE', value: 'NE' },
{ label: 'Nigeria - NG', value: 'NG' },
{ label: 'Niue - NU', value: 'NU' },
{ label: 'Norfolk Island - NF', value: 'NF' },
{ label: 'North Korea - KP', value: 'KP' },
{ label: 'Northern Mariana Islands - MP', value: 'MP' },
{ label: 'Norway - NO', value: 'NO' },
{ label: 'Oman - OM', value: 'OM' },
{ label: 'Pakistan - PK', value: 'PK' },
{ label: 'Palau - PW', value: 'PW' },
{ label: 'Palestine - PS', value: 'PS' },
{ label: 'Panama - PA', value: 'PA' },
{ label: 'Papua New Guinea - PG', value: 'PG' },
{ label: 'Paraguay - PY', value: 'PY' },
{ label: 'Peru - PE', value: 'PE' },
{ label: 'Philippines - PH', value: 'PH' },
{ label: 'Pitcairn - PN', value: 'PN' },
{ label: 'Poland - PL', value: 'PL' },
{ label: 'Portugal - PT', value: 'PT' },
{ label: 'Puerto Rico - PR', value: 'PR' },
{ label: 'Qatar - QA', value: 'QA' },
{ label: 'Reunion - RE', value: 'RE' },
{ label: 'Romania - RO', value: 'RO' },
{ label: 'Russia - RU', value: 'RU' },
{ label: 'Rwanda - RW', value: 'RW' },
{ label: 'Saint Barthelemy - BL', value: 'BL' },
{ label: 'Saint Helena - SH', value: 'SH' },
{ label: 'Saint Kitts and Nevis - KN', value: 'KN' },
{ label: 'Saint Lucia - LC', value: 'LC' },
{ label: 'Saint Martin - MF', value: 'MF' },
{ label: 'Saint Pierre and Miquelon - PM', value: 'PM' },
{ label: 'Saint Vincent &amp; Grenadines - VC', value: 'VC' },
{ label: 'Samoa - WS', value: 'WS' },
{ label: 'San Marino - SM', value: 'SM' },
{ label: 'Sao Tome &amp; Principe - ST', value: 'ST' },
{ label: 'Saudi Arabia - SA', value: 'SA' },
{ label: 'Senegal - SN', value: 'SN' },
{ label: 'Serbia - RS', value: 'RS' },
{ label: 'Seychelles - SC', value: 'SC' },
{ label: 'Sierra Leone - SL', value: 'SL' },
{ label: 'Singapore - SG', value: 'SG' },
{ label: 'Sint Maarten - SX', value: 'SX' },
{ label: 'Slovakia - SK', value: 'SK' },
{ label: 'Slovenia - SI', value: 'SI' },
{ label: 'Solomon Islands - SB', value: 'SB' },
{ label: 'Somalia - SO', value: 'SO' },
{ label: 'South Africa - ZA', value: 'ZA' },
{ label: 'South Georgia and the South Sandwich Islands - GS', value: 'GS' },
{ label: 'South Korea - KR', value: 'KR' },
{ label: 'South Sudan - SS', value: 'SS' },
{ label: 'Spain - ES', value: 'ES' },
{ label: 'Sri Lanka - LK', value: 'LK' },
{ label: 'Sudan - SD', value: 'SD' },
{ label: 'Suriname - SR', value: 'SR' },
{ label: 'Svalbard &amp; Jan Mayen - SJ', value: 'SJ' },
{ label: 'Swaziland - SZ', value: 'SZ' },
{ label: 'Sweden - SE', value: 'SE' },
{ label: 'Switzerland - CH', value: 'CH' },
{ label: 'Syria - SY', value: 'SY' },
{ label: 'Taiwan - TW', value: 'TW' },
{ label: 'Tajikistan - TJ', value: 'TJ' },
{ label: 'Tanzania - TZ', value: 'TZ' },
{ label: 'Thailand - TH', value: 'TH' },
{ label: 'Togo - TG', value: 'TG' },
{ label: 'Tokelau - TK', value: 'TK' },
{ label: 'Tonga - TO', value: 'TO' },
{ label: 'Trinidad and Tobago - TT', value: 'TT' },
{ label: 'Tunisia - TN', value: 'TN' },
{ label: 'Turkey - TR', value: 'TR' },
{ label: 'Turkmenistan - TM', value: 'TM' },
{ label: 'Turks &amp; Caicos Islands - TC', value: 'TC' },
{ label: 'Tuvalu - TV', value: 'TV' },
{ label: 'Uganda - UG', value: 'UG' },
{ label: 'UK Virgin Islands - VG', value: 'VG' },
{ label: 'Ukraine - UA', value: 'UA' },
{ label: 'United Arab Emirates - AE', value: 'AE' },
{ label: 'United Kingdom - GB', value: 'GB' },
{ label: 'United States - US', value: 'US' },
{ label: 'United States Minor Outlying Islands - UM', value: 'UM' },
{ label: 'Uruguay - UY', value: 'UY' },
{ label: 'US Virgin Islands - VI', value: 'VI' },
{ label: 'Uzbekistan - UZ', value: 'UZ' },
{ label: 'Vanuatu - VU', value: 'VU' },
{ label: 'Vatican City - VA', value: 'VA' },
{ label: 'Venezuela - VE', value: 'VE' },
{ label: 'Vietnam - VN', value: 'VN' },
{ label: 'Wallis and Futuna - WF', value: 'WF' },
{ label: 'Western Sahara - EH', value: 'EH' },
{ label: 'Yemen - YE', value: 'YE' },
{ label: 'Zambia - ZM', value: 'ZM' },
{ label: 'Zimbabwe - ZW', value: 'ZW' }
    // Add more countries here
  ];

  toggleDropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;
  }

  onSubmit(){
    if (this.selectedCountry !== '' && this.selectedTravelCountry !== '') 
    {
      this.router.navigate(['/visitor-visa', this.selectedTravelCountry.split(" - ")[0]]);
    } 
    else {
      alert("Select destionation"); 
    }
  }

  toggleDropdownTravel(){
    this.isDropdownTravelVisible = !this.isDropdownTravelVisible;
  }

  filteredCountries: { label: string, value: string }[] = this.countries; // Initialize with all countries

  filteredTravelCountries: { label: string, value: string }[] = this.countries; // Initialize with all countries

  filterCountries(searchTerm: string) {
    let searchString = searchTerm.toLowerCase();
    if (!searchString) {
      this.filteredCountries = this.countries.slice();
    } else {
      this.filteredCountries = this.countries.filter(country =>
        country.label.toLowerCase().includes(searchString)
      );
    }
  }

  filterTravelCountries(searchTerm: string) {
    let searchString = searchTerm.toLowerCase();
    if (!searchString) {
      this.filteredTravelCountries = this.filteredTravelCountries.slice();
    } else {
      this.filteredTravelCountries = this.filteredTravelCountries.filter(country =>
        country.label.toLowerCase().includes(searchString)
      );
    }
  }

  selectCountry(value: string) {
    this.selectedCountry = this.countries.find(country => country.value === value)?.label || '';
    this.isDropdownVisible = false;
  }

  selectTravelCountry(value: string) {
    this.selectedTravelCountry = this.filteredTravelCountries.find(country => country.value === value)?.label || '';
    this.isDropdownTravelVisible = false;
  }

  ngOnInit() {
  }

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
