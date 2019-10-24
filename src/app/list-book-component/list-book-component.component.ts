import {Component, OnInit} from '@angular/core';
import {MyService} from '../service/Service.model';

@Component({
  selector: 'app-list-book-component',
  templateUrl: './list-book-component.component.html',
  styleUrls: ['./list-book-component.component.css']
})
export class ListBookComponentComponent implements OnInit {

  /*listTypes = [];
  listBooks = [];*/

  listTypesBooks = [];

  constructor(private myService: MyService) {
  }

  ngOnInit() {
    this.doSomething();
  }

  doSomething() {
    /*this.listTypesBooks[0] = this.myService.getTypeBook();
    this.listTypesBooks[1] = this.myService.getAllBook();

    console.log(this.listTypesBooks);*/
    // this.listBooks = this.myService.getAllBook();
  }

}
