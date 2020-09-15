import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Quote } from '../types';
import { QuoteService } from '../quote.service';

@Component({
  selector: 'app-quote-search',
  templateUrl: './quote-search.component.html',
  styleUrls: ['./quote-search.component.scss'],
})
export class QuoteSearchComponent implements OnInit {
  constructor(private quoteService: QuoteService) {}

  quotes$: Observable<Quote[]>;
  private searchQueries = new Subject<string>();

  ngOnInit(): void {
    this.quotes$ = this.searchQueries.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((query: string) => this.quoteService.searchQuotes(query))
    );
  }

  search(query: string): void {
    this.searchQueries.next(query);
  }
}
