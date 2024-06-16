/*
App.config.ts on sovelluksen konfiguraatiotiedosto, joka importataan 
main.ts:ään. Näin kaikki komponentit saavat konfiguraation käyttöönsä. 
Tässä sovelluksessa konfiguraatio ei tosin sisällä mitään. Täällä
voitaisiin määritellä esim. reititys ja DOM:in muutosten havainnointi-
menetelmä.
*/

import { ApplicationConfig } from '@angular/core';

// appconfig-oliossa ovat koko sovellusta koskevat määritykset
export const appConfig: ApplicationConfig = {
  providers: []
};