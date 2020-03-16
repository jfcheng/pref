import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StocksComponent } from './stocks/stocks.component';
import { SecuritiesComponent } from './securities/securities.component';
import { SecurityDetailComponent } from './security-detail/security-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    StocksComponent,
    SecuritiesComponent,
    SecurityDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
