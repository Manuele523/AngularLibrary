import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {ListBookComponentComponent} from './Components/list-book-component/list-book-component.component';
import {CarouselBookSectionComponent} from './Components/carousel-book-component/carousel-book-section.component';
import {ADMINISTRATORComponent} from './ADMINISTRATOR/administrator.component';


const routes: Routes = [
  { path: '', component: CarouselBookSectionComponent },
  { path: 'book', component: ListBookComponentComponent },
  { path: 'admin', component: ADMINISTRATORComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
