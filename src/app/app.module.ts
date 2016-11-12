import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';
import { CurrencyService } from './shared';
import { CountryService } from './shared';
import { PartyService } from './shared';

import { AppComponent } from './app.component';
import { TestformComponent } from './testform/testform.component';
import { ImlcIssComponent } from './imlc-iss/imlc-iss.component';
import { ListfilterPipe } from './shared/listfilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TestformComponent,
    ImlcIssComponent,
    ListfilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [CurrencyService, CountryService, PartyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
