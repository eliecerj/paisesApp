import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.css']
})
export class ByCountryComponent  {

  termino: string = '';
  isError: boolean = false;
  countries: Country[] = [];
  suggestedCountries: Country[] = [];
  showSuggestion: boolean = false;

  constructor( private countryService: CountryService) { }

  buscar(termino: string) {
  this.showSuggestion = false;
  this.isError = false;
    this.termino = termino;
    this.countryService.searchCountry(this.termino)
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
    this.showSuggestion = true;
    this.isError = false;
    this.termino = term;

    this.countryService.searchCountry(term)
      .subscribe( 
        countries => this.suggestedCountries = countries.splice(0,5),
        (err) => this.suggestedCountries = []
        );
  }

  searchSuggested(term: string) {
    this.buscar(term);
  }
}
