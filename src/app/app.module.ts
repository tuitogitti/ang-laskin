/*
AppModule eli sovelluksen päämoduuli

Angular-sovellusten suurin rakenneosa on moduuli.
Komponentit ja muut rakenneosat ovat moduulin sisällä.
*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';

// moduulin määrittely @NgModule -dekoraattorimetodissa
@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] // sovellus käynnistyy AppComponentista
})
export class AppModule { }
