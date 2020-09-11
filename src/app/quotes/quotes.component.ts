import { Component, OnInit } from '@angular/core';
import { QUOTES } from '../mock-quotes';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss'],
})
export class QuotesComponent implements OnInit {
  quotes: Quote[] = QUOTES;
  selectedQuote: Quote;

  onClickQuote(quote: Quote): void {
    this.selectedQuote = quote;
  }

  constructor() {}

  ngOnInit(): void {}
}
