import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-view-country',
  templateUrl: './view-country.component.html',
  styleUrls: ['./view-country.component.css']
})
export class ViewCountryComponent implements OnInit {

  constructor( 
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService 
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe( ({id}) => {
        console.log(id);

        this.countryService.searchByCountryCode(id)
          .subscribe(country => {
            console.log('countryyy', country);
          })
        
      })
  }

}
