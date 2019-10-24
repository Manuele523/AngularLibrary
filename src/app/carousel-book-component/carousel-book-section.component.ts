import {Component, OnInit, HostListener} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MyService} from '../service/Service.model';

@Component({
  selector: 'app-carousel-book-section',
  templateUrl: './carousel-book-section.component.html',
  styleUrls: ['./carousel-book-section.component.css']
})
export class CarouselBookSectionComponent implements OnInit {

  listBooks = [];

  constructor(private http: HttpClient, private myService: MyService) {
  }

  CAROUSEL_BREAKPOINT = 768;
  carouselDisplayMode = 'multiple';


  ngOnInit() {
    console.log('CarouselBookSectionComponent');

    this.listBooks.concat(this.myService.getBookStar());
    // console.log(this.listBooks);

    if (window.innerWidth <= this.CAROUSEL_BREAKPOINT) {
      this.carouselDisplayMode = 'single';
    } else {
      this.carouselDisplayMode = 'multiple';
    }
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
