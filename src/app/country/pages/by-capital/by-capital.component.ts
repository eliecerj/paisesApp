import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html'
})
export class ByCapitalComponent {

  termino: string = '';
  isError: boolean = false;
  countries: Country[] = [];

  constructor( private countryService: CountryService ) { }

  buscar(termino: string) {
    this.isError = false;
    this.termino = termino;
    this.countryService.searchCapital(this.termino)
      .subscribe( (countries) => {
        this.countries = countries;
        console.log(countries);
      }, (err)=> {
        console.info('Error', err);
        this.isError = true;
        this.countries = [];
      })
    
  }

  suggestion(term: string) {
    this.isError = false;
    // sugerencias

  }

}
