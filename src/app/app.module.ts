import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstQuoteComponent } from './first-quote/first-quote.component';
import { MoreQuotesComponent } from './more-quotes/more-quotes.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstQuoteComponent,
    MoreQuotesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
