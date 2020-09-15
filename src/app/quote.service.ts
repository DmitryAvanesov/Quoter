import { Injectable } from '@angular/core';
import { Quote } from './types';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  constructor(
    private messageService: MessageService,
    private httpClient: HttpClient
  ) {}

  private quotesUrl = 'api/quotes';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private log(message: string): void {
    this.messageService.add(message);
  }

  private handleError<T>(
    operation = 'operation',
    result?: T
  ): (error: any) => Observable<T> {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.body.error}`);
      return of(result as T);
    };
  }

  getQuotes(): Observable<Quote[]> {
    return this.httpClient.get<Quote[]>(this.quotesUrl).pipe(
      tap(() => this.log('Quotes received')),
      catchError(this.handleError<Quote[]>('getQuotes', []))
    );
  }

  getQuote(id: number): Observable<Quote> {
    const quoteUrl = `${this.quotesUrl}/${id}`;

    return this.httpClient.get<Quote>(quoteUrl).pipe(
      tap(() => this.log(`Quote #${id} received`)),
      catchError(this.handleError<Quote>(`getQuote (#${id})`))
    );
  }

  updateQuote(quote: Quote): Observable<any> {
    return this.httpClient.put(this.quotesUrl, quote, this.httpOptions).pipe(
      tap(() => this.log(`Updated quote #${quote.id}`)),
      catchError(this.handleError<any>('updateQuote'))
    );
  }

  addQuote(quote: Quote): Observable<Quote> {
    return this.httpClient
      .post<Quote>(this.quotesUrl, quote, this.httpOptions)
      .pipe(
        tap((newQuote: Quote) =>
          this.log(`Added quote #${newQuote.id} by ${quote.author}`)
        ),
        catchError(this.handleError<Quote>('addHero'))
      );
  }

  deleteQuote(quote: Quote | number): Observable<Quote> {
    const id = typeof quote === 'number' ? quote : quote.id;
    const quoteUrl = `${this.quotesUrl}/${id}`;

    return this.httpClient.delete<Quote>(quoteUrl, this.httpOptions).pipe(
      tap(() => this.log(`Deleted quote #${id}`)),
      catchError(this.handleError<Quote>('deleteQuote'))
    );
  }

  searchQuotes(query: string): Observable<Quote[]> {
    query = query.trim();

    if (!query) {
      return of([]);
    }

    const quoteUrl = `${this.quotesUrl}/?text=${query}`;

    return this.httpClient.get<Quote[]>(quoteUrl).pipe(
      tap((quotes: Quote[]) =>
        quotes.length
          ? this.log(`Found quotes matching "${query}" query`)
          : this.log(`No quotes found matching "${query}" query`)
      ),
      catchError(this.handleError<Quote[]>('searchQuotes', []))
    );
  }
}
