import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
import { QuoteService } from '../quote.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss'],
})
export class QuotesComponent implements OnInit {
  quotes: Quote[];
  selectedQuote: Quote;

  getQuotes(): void {
    this.quoteService.getQuotes().subscribe((quotes) => {
      this.quotes = quotes;
    });
  }

  onClickQuote(quote: Quote): void {
    this.selectedQuote = quote;
  }

  constructor(private quoteService: QuoteService) {}

  ngOnInit(): void {
    this.getQuotes();
  }
}
