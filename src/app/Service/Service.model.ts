import {Injectable} from '@angular/core';
import {Book} from '../ObjectDb/Book';
import {HttpClient} from '@angular/common/http';
import {Type} from '../ObjectDb/Type';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyService {

  dataBook: Array<Book>;
  listBooks = [];
  temp: number;

  constructor(private http: HttpClient) {
  }

  /* GET ALL BOOK STAR FROM DB */
  getBookStar(): Observable<Array<Book>> {
    return this.http.get<Array<Book>>('http://localhost:8080/getStarBook');
  }

  /* GET ALL BOOK FROM DB */
  getAllBook(): Observable<Array<Book>> {
    return this.http.get<Array<Book>>('http://localhost:8080/getAllBook');
  }


  /* SET LIST OF BOOK */
  setListBook(data: Array<Book>) {

    this.dataBook = data;
    this.temp = this.dataBook.length;

    for (let i = 0; i < this.temp; i++) {
      this.listBooks.push(this.dataBook[i]);
    }

    return this.listBooks;
  }


  /* GET ALL TYPE OF BOOK FROM DB */
  getTypeBook(): Observable<Array<Type>> {
    return this.http.get<Array<Type>>('http://localhost:8080/getTypeOfBook');
  }

}
