import { Injectable } from '@angular/core';
import { Quote } from './quote';
import { QUOTES } from './mock-quotes';

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  constructor() {}

  getQuotes(): Quote[] {
    return QUOTES;
  }
}
