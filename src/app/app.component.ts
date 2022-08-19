/*
App-komponentin luokkaosa. Komponentti koostuu kolmesta osasta:
Luokkaosa, templaatti (HTML-sivupohja) ja CSS-osa.
App-komponentti on äitikomponentti jonka sisälle muut komponentit
tulevat. Sen tehtävänä on toimia "säiliönä".
*/
import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // komponentin html-tagin nimi
  templateUrl: './app.component.html', // templaattiosa
  styleUrls: ['./app.component.css'] // tyyliosa
})
// Luokka johon sovelluslogiikkakoodi tehdään
export class AppComponent {
  title = 'Laskin';



}
