import { Component, OnInit } from '@angular/core';
import { Quote } from '../types';
import { QuoteService } from '../quote.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss'],
})
export class QuotesComponent implements OnInit {
  constructor(private quoteService: QuoteService) {}

  quotes: Quote[];
  selectedQuote: Quote;

  ngOnInit(): void {
    this.getQuotes();
  }

  getQuotes(): void {
    this.quoteService.getQuotes().subscribe((quotes) => {
      this.quotes = quotes;
    });
  }

  add(author: string, text: string): void {
    author = author.trim();
    text = text.trim();

    if (!author || !text) {
      return;
    }

    this.quoteService.addQuote({ author, text } as Quote).subscribe((quote) => {
      this.quotes.push(quote);
    });
  }

  delete(quote: Quote): void {
    this.quotes = this.quotes.filter((q) => q !== quote);
    this.quoteService.deleteQuote(quote).subscribe();
  }
}
