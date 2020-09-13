import { Injectable } from '@angular/core';
import { Quote } from './quote';
import { QUOTES } from './mock-quotes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  constructor(
    private messageService: MessageService,
    private httpClient: HttpClient
  ) {}

  private quotesUrl = 'api/quotes';

  getQuotes(): Observable<Quote[]> {
    this.log('Quotes received');
    return this.httpClient.get<Quote[]>(this.quotesUrl);
  }

  getQuote(id: number): Observable<Quote> {
    this.log(`Quote #${id} received`);
    return of(QUOTES[id]);
  }

  private log(message: string): void {
    this.messageService.add(message);
  }
}
