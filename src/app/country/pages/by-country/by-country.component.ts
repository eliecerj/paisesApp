import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.css']
})
export class ByCountryComponent  {

  termino: string = '';
  isError: boolean = false;

  constructor( private countryService: CountryService) { }

  buscar() {
    this.isError = false;
    console.log(this.termino);

    this.countryService.searchCountry(this.termino)
      .subscribe( (countries) => {
        console.log(countries);
        


      }, (err)=> {
        console.info('Error', err);
        this.isError = true;
      })
    
  }


}
