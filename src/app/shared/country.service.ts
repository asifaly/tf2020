import { Injectable } from '@angular/core';
import { Country } from './country.model';

const COUNTRYDATA: Country[] = [
  { code: 'US', name: 'United States of America' },
  { code: 'GB', name: 'Great Britain' },
  { code: 'JP', name: 'Japan' },
  { code: 'IN', name: 'India' },
  { code: 'RU', name: 'Russia' },
  { code: 'SE', name: 'Sweden' },
  { code: 'TH', name: 'Thailand' },
  { code: 'AE', name: 'United Arab Emirates' },
];

@Injectable()
export class CountryService {

  constructor() { }
  getCountry(): Promise<Country[]> {
    return Promise.resolve(COUNTRYDATA);
  }

}
