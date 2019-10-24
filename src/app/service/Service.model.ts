import {Injectable} from '@angular/core';
import {Book} from '../ObjectDb/Book';
import {HttpClient} from '@angular/common/http';
import {Type} from '../ObjectDb/Type';

@Injectable({
  providedIn: 'root'
})
export class MyService {

  dataBook: Array<Book>;
  dataType: Array<Type>;
  listTemp = [];
  listTypes = [];
  listBooks = [];
  temp: number;

  constructor(private http: HttpClient) {
  }

  /* GET ALL BOOK STAR FROM DB */
  getBookStar(): Array<Book> {
    const that = this;
    this.http.get<Array<Book>>('http://localhost:8080/getStarBook').subscribe(data => {
      that.listTemp = Object.assign({}, {...this.setListBook(data)});
      // console.log(this.listTemp);
    });
    console.log(this.listTemp);
    return this.listTemp;
  }

  /* GET ALL BOOK FROM DB */
  getAllBook() {
    this.http.get<Array<Book>>('http://localhost:8080/getAllBook').subscribe(data => {
      this.listTemp = this.setListBook(data);
    });
    return this.listTemp;
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
  getTypeBook() {
    this.http.get<Array<Type>>('http://localhost:8080/getTypeOfBook').subscribe(data => {
      this.dataType = data;
      this.temp = this.dataType.length;

      for (let i = 0; i < this.temp; i++) {
        this.listTypes.push(this.dataType[i]);
      }
      // console.log('listTypes contiene: ' + this.listTypes);
    });
    return this.listTypes;
  }

}
