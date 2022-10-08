import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl: string ='https://restcountries.com/v3.1';

  get httpParams() {
    return new HttpParams()
            .set('fields', 'name,capital,cca2,flags,population');
  }

  constructor(private http: HttpClient) { }

  searchCountry (name: string): Observable<Country[]> {

    const url = `${this.apiUrl}/name/${name}`;
    return this.http.get<Country[]>(url, {params: this.httpParams});

  }

  searchCapital (name: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${name}`;
    return this.http.get<Country[]>(url, {params: this.httpParams});
  }

  searchByCountryCode (id: string): Observable<Country> {
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country>(url);
  }

  searchRegion (region: string): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${region}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }
}
