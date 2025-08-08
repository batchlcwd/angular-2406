import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Material from '@primeuix/themes/material';
import { ShareUiModule } from './modules/share-ui/share-ui.module';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { Badge } from 'primeng/badge';
import { counterReducer } from './store/counter.reducer';
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ErrorInterceptor } from './interceptors/error-interceptor';
import { LoginComponent } from './pages/login/login.component';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { StoreModule } from '@ngrx/store';
import { MyPreset } from './mypresent';
import { LoaderInterceptor } from './interceptors/loader.interceptor';
import { AUTH_FEATURE_KEY, authReducer } from './store/auth.reducer';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomePageComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShareUiModule,
    Badge,
    StoreModule.forRoot({
      counter: counterReducer,
      [AUTH_FEATURE_KEY]: authReducer,
    }),
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: MyPreset,
        options: {
          darkModeSelector: '.app-dark',
        },
      },
    }),
    ConfirmationService,
    MessageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
