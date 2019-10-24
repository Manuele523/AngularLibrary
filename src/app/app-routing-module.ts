import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {ListBookComponentComponent} from './list-book-component/list-book-component.component';


const routes: Routes = [{
  path: 'book', component: ListBookComponentComponent,
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
