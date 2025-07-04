import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import Material from '@primeuix/themes/material';
import { ShareUiModule } from './modules/share-ui/share-ui.module';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { DashboardHomeComponent } from './admin/dashboard-home/dashboard-home.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomePageComponent,
    DashboardHomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ShareUiModule],
  providers: [
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Material,
        options: {
          darkModeSelector: '.my-app-dark',
        },
      },
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
