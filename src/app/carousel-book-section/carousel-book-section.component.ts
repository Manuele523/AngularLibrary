import {Component, OnInit} from '@angular/core';
import {ConfigService} from '../config/config-service';
import {Book} from '../ObjectDb/Book';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-carousel-book-section',
  templateUrl: './carousel-book-section.component.html',
  styleUrls: ['./carousel-book-section.component.css']
})
export class CarouselBookSectionComponent implements OnInit {

  books: Book;
  // tslint:disable-next-line:ban-types
  data: Object[];

  constructor(private http: HttpClient) {

    this.http.get<Object[]>('http://localhost:8080/getAdvisedBooks')
      .subscribe(data => {
        this.data = data;
      });

  }

  ngOnInit() {
    /*this.configService.getAdvBook().subscribe((data: Book) => this.books = {
      title: data.title
    });
    this.configService.getAdvBook();*/
  }

}
