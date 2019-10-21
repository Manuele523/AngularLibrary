import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {ConfigService} from './config/config-service';

import {AppComponent} from './app.component';
import {NavigationSectionComponent} from './navigation-section/navigation-section.component';
import {CarouselBookSectionComponent} from './carousel-book-section/carousel-book-section.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationSectionComponent,
    CarouselBookSectionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    ConfigService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
