import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CardsModule, CarouselModule, WavesModule} from 'angular-bootstrap-md';

import {AppComponent} from './app.component';
import {NavigationSectionComponent} from './Components/navigation-component/navigation-section.component';
import {CarouselBookSectionComponent} from './Components/carousel-book-component/carousel-book-section.component';
import {FooterComponentComponent} from './Components/footer-component/footer-component.component';
import {ListBookComponentComponent} from './Components/list-book-component/list-book-component.component';
import {AppRoutingModule} from './app-routing-module';
import {HomePageComponent} from './Templates/home-page/home-page.component';
import { ListPageComponent } from './Templates/list-page/list-page.component';
import { ADMINISTRATORComponent } from './ADMINISTRATOR/administrator.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationSectionComponent,
    CarouselBookSectionComponent,
    FooterComponentComponent,
    ListBookComponentComponent,
    HomePageComponent,
    ListPageComponent,
    ADMINISTRATORComponent
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
