import { Component, OnInit } from '@angular/core';
import { Quote } from '../types';
import { QuoteService } from '../quote.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private quoteService: QuoteService) {}

  quotes: Quote[];

  ngOnInit(): void {
    this.getQuotes();
  }

  getQuotes(): void {
    this.quoteService.getQuotes().subscribe((quotes) => {
      this.quotes = quotes.slice(-4);
      this.quotes.reverse();
    });
  }
}
