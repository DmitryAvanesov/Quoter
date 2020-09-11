import { Component, OnInit } from '@angular/core';
import { QUOTES } from '../mock-quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss'],
})
export class QuotesComponent implements OnInit {
  quotes = QUOTES;

  constructor() {}

  ngOnInit(): void {}
}
