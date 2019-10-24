import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CardsModule, CarouselModule, WavesModule} from 'angular-bootstrap-md';

import {AppComponent} from './app.component';
import {NavigationSectionComponent} from './navigation-component/navigation-section.component';
import {CarouselBookSectionComponent} from './carousel-book-component/carousel-book-section.component';
import {FooterComponentComponent} from './footer-component/footer-component.component';
import {ListBookComponentComponent} from './list-book-component/list-book-component.component';
import {AppRoutingModule} from './app-routing-module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationSectionComponent,
    CarouselBookSectionComponent,
    FooterComponentComponent,
    ListBookComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    CarouselModule,
    WavesModule,
    CardsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
