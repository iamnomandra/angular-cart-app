import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { routes } from './app.routes';
import { provideToastr } from 'ngx-toastr';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { customInterceptor } from './interceptors/custom.interceptor';
import { errorInterceptor } from './interceptors/error.interceptor';
import { ConfirmationService } from 'primeng/api';
import { providePrimeNG } from 'primeng/config';

import Aura from '@primeng/themes/aura';

export const appConfig: ApplicationConfig = {
  providers: [
      provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
      provideAnimationsAsync(),
      provideToastr(),
      provideHttpClient(withInterceptors([customInterceptor, errorInterceptor])),
      ConfirmationService,
      providePrimeNG({
        theme: {
            preset: Aura
        }
    })
  ]
};

//ng g interceptor interceptors/custom

//ng generate guard gaurds/Auth

