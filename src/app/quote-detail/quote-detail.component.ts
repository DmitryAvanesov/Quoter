import { Location } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Quote } from '../quote';
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

  ngOnInit(): void {
    this.getQuote();
  }

  quote: Quote;

  getQuote(): void {
    const id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
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
