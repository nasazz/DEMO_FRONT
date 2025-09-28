// ...existing code...
import { ApplicationConfig } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

// import your preset exported from theming/mytheme.ts
import { MyPreset } from '../../theming/mytheme';

export const appConfig: ApplicationConfig = {
    providers: [
        provideAnimationsAsync(),
        provideRouter(routes),
        providePrimeNG({
            theme: {
               preset: MyPreset,
            }
        })
    ]
};
