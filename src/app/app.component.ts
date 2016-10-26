import { Component, OnInit } from '@angular/core';
import { Currency, CurrencyService } from './shared';
import { Country, CountryService } from './shared';
import { Party, PartyService} from './shared';

@Component({
  selector: 'tf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currencyList: Currency[] = [];
  countryList: Country[]=[];
  partyList: Party[]=[];
  title = 'tf works!';

  constructor(private _currencyservice: CurrencyService, private _countryservice: CountryService, private _partyservice: PartyService){}

  ngOnInit(){
    this._currencyservice.getCurrency().then(currency => this.currencyList = currency);
    this._countryservice.getCountry().then(country => this.countryList = country);
    this._partyservice.getParty().then(party => this.partyList = party);
  }

}
