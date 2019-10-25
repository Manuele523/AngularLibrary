import {Component, OnInit} from '@angular/core';
import {MyService} from '../../service/Service.model';

@Component({
  selector: 'app-list-book-component',
  templateUrl: './list-book-component.component.html',
  styleUrls: ['./list-book-component.component.css']
})
export class ListBookComponentComponent implements OnInit {

  listTypesBooks = [];
  startIndex: number;
  endIndex = 6;

  constructor(private myService: MyService) {
  }

  ngOnInit() {
    console.log('ListBookComponentComponent');
    this.myService.getTypeBook().subscribe((data) => {
      this.listTypesBooks[0] = data;
    });

    this.myService.getAllBook().subscribe((data) => {
      this.listTypesBooks[1] = data;
    });
  }

}
