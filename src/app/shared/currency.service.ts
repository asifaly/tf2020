import { Injectable } from '@angular/core';
import { Currency } from './currency.model';

const CURRENCYDATA: Currency[] = [
  { code: 'USD', description: 'UNITED STATES DOLLAR' },
  { code: 'EUR', description: 'EURO' },
  { code: 'GBP', description: 'GREAT BRITISH POUND' },
  { code: 'JPY', description: 'JAPANESE YEN' },
  { code: 'INR', description: 'INDIAN RUPEE' },
  { code: 'RUB', description: 'RUSSIAN ROUBLE' },
  { code: 'SEK', description: 'SWEDISH KRONER' },
  { code: 'THB', description: 'THAILAND BAHT' },
  { code: 'AED', description: 'UAE DIRHAM' },
];

@Injectable()
export class CurrencyService {

  constructor() { }
  getCurrency(): Promise<Currency[]> {
    return Promise.resolve(CURRENCYDATA);
  }

}
