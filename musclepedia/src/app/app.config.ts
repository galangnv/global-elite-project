import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"musclepedia-daa3a","appId":"1:822438438225:web:8f9e49ded3e53064aa9f70","storageBucket":"musclepedia-daa3a.appspot.com","apiKey":"AIzaSyBQNBEkE-I112lFBRitaolLPT5BAN6B7Qs","authDomain":"musclepedia-daa3a.firebaseapp.com","messagingSenderId":"822438438225","measurementId":"G-115F4JRSG8"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideAnalytics(() => getAnalytics())), ScreenTrackingService, UserTrackingService, importProvidersFrom(provideFirestore(() => getFirestore())), provideAnimationsAsync('noop')]
};
