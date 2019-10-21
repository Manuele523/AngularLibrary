import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Book} from '../ObjectDb/Book';
import {Observable} from 'rxjs';

@Injectable()
export class ConfigService {

  // tslint:disable-next-line:ban-types
  data: Object[];

  constructor(private http: HttpClient) {
  }

}

