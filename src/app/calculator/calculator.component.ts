/*
Calculator-komponentin luokkaosa 

Komponentin luokkaosassa on TypeScriptillä koodattu sovelluslogiikka
Luokasta välitetään dataa käyttölittymään eli templaattiin ja toisinpäin.
Luokkaosaa kutsutaan myös varsinaiseksi komponentiksi, sillä se sisältää
kaikki komponentin osat määriteltynä dekoraattorissa.
*/

import { Component, OnInit } from '@angular/core';

// @Component -dekoraattorimetodin argumenttina
// olevassa oliossa määritellään komponentin osat
@Component({
  selector: 'app-calculator', // komponentin html-tagi
  templateUrl: './calculator.component.html', // templaatti
  styleUrls: ['./calculator.component.css'] // tyylitiedosto
})
/*
Luokassa on ominaisuuksia eli propertyjä ja
toiminnallisuuksia eli metodeja (luokan funktiota)
*/
export class CalculatorComponent implements OnInit {

//ominaisuudet

val1: number; // TS:ssä tietotyyppi merkitään kaksoispisteen perään
val2: number; // val1 ja val2 -arvot saadaan templaatin lomakkeelta
result: number; // result lasketaan tässä luokassa

  // konstruktori antaa luokasta syntyvän olion muuttujille alkuarvot
  constructor() {
    this.result = 0;
    this.val1 = 0;
    this.val2 = 0;

  }
  
  
// metodit
  
  // ngOnInit() ei sisällä mitään eli ole käytössä
  ngOnInit(): void {
  }
  
  // Sovelluslogiikan tuottavat metodit
  public doPlus(){

    this.result = this.val1 + this.val2;
  }

  public doMinus(){

    this.result = this.val1 - this.val2;
  }

  public doMulti(){

    this.result = this.val1 * this.val2;
  }

}
