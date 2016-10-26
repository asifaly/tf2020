import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Currency, CurrencyService } from '../shared';

@Component({
  selector: 'tf-testform',
  templateUrl: './testform.component.html',
  styleUrls: ['./testform.component.scss']
})
export class TestformComponent implements OnInit {
  @Input() private maxlen: number;
  @Input() private fieldnm: string;
  @Input() private fcname: string;
  @Input() private colstyle: string;
  currencyList: Currency[] = [];
  form: FormGroup;

  constructor(private _fb: FormBuilder, private _currencyservice: CurrencyService) { }

  ngOnInit() {
    this.form = this._fb.group({
      "copy_from": ["", Validators.maxLength(10)],
      "reference_no":["", Validators.maxLength(12)],
      "currency":["", Validators.required],
      "amount":["", [Validators.required,Validators.maxLength(10)]],
      "expiry_date":["", Validators.required]
    });
    this._currencyservice.getCurrency().then(currency => this.currencyList = currency);
  }

   onSubmitModelBased() {
      console.log("model-based form submitted");
      console.log(this.form);
    }
}
