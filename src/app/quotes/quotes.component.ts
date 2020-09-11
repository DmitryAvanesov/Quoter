import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
import { QuoteService } from '../quote.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss'],
})
export class QuotesComponent implements OnInit {
  constructor(
    private quoteService: QuoteService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getQuotes();
  }

  quotes: Quote[];
  selectedQuote: Quote;

  getQuotes(): void {
    this.quoteService.getQuotes().subscribe((quotes) => {
      this.quotes = quotes;
    });
  }

  onClickQuote(quote: Quote): void {
    this.selectedQuote = quote;
    this.messageService.add(`Quote #${quote.id} selected`);
  }
}
