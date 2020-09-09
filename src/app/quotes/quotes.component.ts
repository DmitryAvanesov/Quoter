import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss'],
})
export class QuotesComponent implements OnInit {
  quote: Quote = {
    id: 1,
    text: 'Sample quote',
  };

  constructor() {}

  ngOnInit(): void {}
}
