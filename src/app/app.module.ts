import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule }    from '@angular/common/http';

import {MatToolbarModule, MatMenuModule, MatButtonModule, MatRadioModule, MatCardModule,
  MatPaginatorModule, MatListModule, MatDividerModule, MatTooltipModule} from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatRadioModule,
    MatCardModule,
    MatPaginatorModule,
    MatListModule,
    MatDividerModule,
    MatTooltipModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
