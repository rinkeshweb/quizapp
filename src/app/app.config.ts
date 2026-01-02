import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { providePrimeNG } from 'primeng/config';
import { QuizAppPreset } from '../theme/quizapp.preset';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes), provideClientHydration(withEventReplay()),
    providePrimeNG({
      ripple: true,
      theme: {
        preset: QuizAppPreset,
        options: {
          darkModeSelector: '.p-dark',
          cssLayer: {
            name: 'primeng',
            order: 'theme, base, primeng'
          }
        },
      },
      zIndex: {
        modal: 1100,
        overlay: 1000,
        menu: 1000,
        tooltip: 1100
      }
    })
  ]
};
