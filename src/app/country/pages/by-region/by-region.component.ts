import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styleUrls: ['./by-region.component.css']
})
export class ByRegionComponent {

  regions: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  activeRegion: string = '';
  countries: Country[] = [];

    
  constructor(private countryService: CountryService) { }
  getClassCSS(region: string): string {
    return (region === this.activeRegion) ? 'btn btn-primary': 'btn btn-outline-primary';
  }
  
  activateRegion(region: string) {
    if(region === this.activeRegion) return;
    this.activeRegion = region;
    this.countries = [];

    this.countryService.searchRegion(region)
      .subscribe(countries => {
        this.countries = countries;
        
      })


  }

  


}
