import { Component, OnInit } from '@angular/core';
import { Currency, CurrencyService, Country, CountryService, Party, PartyService } from '../shared';

@Component({
  selector: 'tf-imlc-iss',
  templateUrl: './imlc-iss.component.html',
  styleUrls: ['./imlc-iss.component.scss']
})
export class ImlcIssComponent implements OnInit {
  currencyList: Currency[] = [];
  partyList: Party[] = [];
  countryList: Country[] = [];

  constructor(private _country:CountryService, private _party: PartyService, private _currency: CurrencyService) { }

  ngOnInit() {
    this._currency.getCurrency().then(currency => this.currencyList = currency);
    this._country.getCountry().then(country => this.countryList = country);
    this._party.getParty().then(party => this.partyList = party);
  }

}
