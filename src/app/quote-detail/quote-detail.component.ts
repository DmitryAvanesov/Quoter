import { Location } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Quote } from '../types';
import { QuoteService } from '../quote.service';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.scss'],
})
export class QuoteDetailComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private quoteService: QuoteService
  ) {}

  quote: Quote;

  ngOnInit(): void {
    this.getQuote();
  }

  getQuote(): void {
    const id = parseInt(this.activatedRoute.snapshot.params.id, 10);
    this.quoteService.getQuote(id).subscribe((quote) => {
      this.quote = quote;
    });
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.quoteService.updateQuote(this.quote).subscribe(() => this.goBack());
  }
}
