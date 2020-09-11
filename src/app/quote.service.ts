import { Injectable } from '@angular/core';
import { Quote } from './quote';
import { QUOTES } from './mock-quotes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  constructor() {}

  getQuotes(): Observable<Quote[]> {
    return of(QUOTES);
  }
}
