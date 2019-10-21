import {Component, OnInit, HostListener} from '@angular/core';
import {Book} from '../ObjectDb/Book';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-carousel-book-section',
  templateUrl: './carousel-book-section.component.html',
  styleUrls: ['./carousel-book-section.component.css']
})
export class CarouselBookSectionComponent implements OnInit {

  data: Array<Book>;
  listBooks = [];

  constructor(private http: HttpClient) {
  }

  CAROUSEL_BREAKPOINT = 768;
  carouselDisplayMode = 'multiple';


  ngOnInit() {
    console.log('CarouselBookSectionComponent');

    this.getValueOfBook();

    if (window.innerWidth <= this.CAROUSEL_BREAKPOINT) {
      this.carouselDisplayMode = 'single';
    } else {
      this.carouselDisplayMode = 'multiple';
    }
  }

  private getValueOfBook() {

    this.http.get<Array<Book>>('http://localhost:8080/getAdvisedBooks').subscribe(data => {
      this.data = data;

      for (let i = 0; i < 10; i += 2) {
        this.listBooks.push(this.data[i]);
      }

      console.log('listBooks contiene: ' + this.listBooks);
    });
  }


  @HostListener('window:resize')
  onWindowResize() {
    if (window.innerWidth <= this.CAROUSEL_BREAKPOINT) {
      this.carouselDisplayMode = 'single';
    } else {
      this.carouselDisplayMode = 'multiple';
    }
  }

}
