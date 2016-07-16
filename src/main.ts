import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  FIREBASE_PROVIDERS,
  // Initialize Firebase app
  defaultFirebase({
    apiKey: "AIzaSyCbmPbfVH4cIXc3YPlFIMK5DmIUCVev638",
    authDomain: "todo-82111.firebaseapp.com",
    databaseURL: "https://todo-82111.firebaseio.com",
    storageBucket: "todo-82111.appspot.com",
  })
]);
