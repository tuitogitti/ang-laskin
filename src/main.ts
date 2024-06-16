// Sovelluksen käynnistystiedosto (bootstrap tarkoittaa käynnistystä)
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config'; // sovelluksen konffit
import { AppComponent } from './app/app.component';

// Käynnistys tapahtuu AppComponentista ja konffit otetaan käyttöön
bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
