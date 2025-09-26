import { provideHttpClient } from '@angular/common/http';
import { provideEnvironmentInitializer } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {
    Routes,
    provideRouter,
    withComponentInputBinding,
    withEnabledBlockingInitialNavigation,
    withInMemoryScrolling,
    withRouterConfig,
} from '@angular/router';
import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';
import { MessageService } from 'primeng/api';
import { providePrimeNG } from 'primeng/config';
import { environment } from '../../environments/environment';
import { API_URL, PAGE_SIZE_OPTIONS, TABLE_PAGE_SIZE } from './api/api-config';

const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#F5F7FB', // Lightest - Almost white with a hint of blue
      100: '#E1E7F3', // Very light blue
      200: '#C3CFE7', // Light blue
      300: '#A4B7DB', // Medium-light blue
      400: '#869FCF', // Less light blue
      500: '#3C5D9E', // Main color - Your specified blue
      600: '#354F87', // Slightly darker
      700: '#2E4270', // Darker blue
      800: '#263459', // Very dark blue
      900: '#1E2942', // Nearly black blue
      950: '#161D2B', // Deepest blue, almost black
    },
  },
});

export interface CoreOptions {
  routes: Routes;
}

export function provideCore({ routes }: CoreOptions) {
  return [
    provideAnimationsAsync(),
    provideHttpClient(),
    provideRouter(
      routes,
      withRouterConfig({
        onSameUrlNavigation: 'reload',
      }),
      withComponentInputBinding(),
      withEnabledBlockingInitialNavigation(),
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled',
      })
    ),
    provideEnvironmentInitializer(() => {}),
    {
      provide: API_URL,
      useValue: environment.apiUrl,
    },
    {
      provide: TABLE_PAGE_SIZE,
      useValue: 25,
    },
    {
      provide: PAGE_SIZE_OPTIONS,
      useValue: [25, 50, 100, 200],
    },

    MessageService,

    providePrimeNG({
      ripple: true,

      theme: {
        options: {
          darkModeSelector: '.my-app-dark',
        },
        preset: MyPreset,
      },
    }),
  ];
}
