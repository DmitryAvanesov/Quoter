import { Injectable } from '@angular/core';
import { Quote } from './quote';
import { QUOTES } from './mock-quotes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  constructor(private messageService: MessageService) {}

  getQuotes(): Observable<Quote[]> {
    this.messageService.add('Quotes received');
    return of(QUOTES);
  }

  getQuote(id: number): Observable<Quote> {
    this.messageService.add(`Quote #${id} received`);
    return of(QUOTES[id]);
  }
}
