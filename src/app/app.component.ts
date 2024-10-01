/*
App-komponentin luokkaosa. Komponentti koostuu kolmesta osasta:
Luokkaosa, templaatti (HTML-sivupohja) ja CSS-osa.
App-komponentti on äitikomponentti jonka sisälle muut komponentit
tulevat. Sen tehtävänä on toimia "säiliönä".
*/
import { Component } from '@angular/core';
import { CalculatorComponent } from './calculator/calculator.component';

@Component({
  selector: 'app-root', // komponentin html-tagin nimi
  standalone: true, // komponentti ei ole moduulin sisällä
  imports: [CalculatorComponent], // komponentin tarvitsemat riippuvuudet
  templateUrl: './app.component.html', // templaattiosa
  styleUrls: ['./app.component.css'] // tyyliosa
})
// Luokka johon sovelluslogiikkakoodi tehdään
export class AppComponent {
  title = 'Laskin';



}
