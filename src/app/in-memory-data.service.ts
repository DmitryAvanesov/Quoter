import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Quote } from './quote';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const quotes: Quote[] = [
      {
        id: 0,
        author: 'Marilyn Monroe',
        text:
          "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
      },
      {
        id: 1,
        author: 'Oscar Wilde',
        text: 'Be yourself; everyone else is already taken.',
      },
      {
        id: 2,
        author: 'Albert Einstein',
        text:
          "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
      },
      {
        id: 3,
        author: 'Frank Zappa',
        text: 'So many books, so little time.',
      },
      {
        id: 4,
        author: 'Bernard M. Baruch',
        text:
          "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
      },
      {
        id: 5,
        author: 'Marcus Tullius Cicero',
        text: 'A room without books is like a body without a soul.',
      },
      {
        id: 6,
        author: 'William W. Purkey',
        text: `You've gotta dance like there's nobody watching,\nLove like you'll never be hurt,\nSing like there's nobody listening,\nAnd live like it's heaven on earth.`,
      },
      {
        id: 7,
        author: 'Dr. Seuss',
        text:
          "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
      },
      {
        id: 8,
        author: 'Mae West',
        text: 'You only live once, but if you do it right, once is enough.',
      },
      {
        id: 9,
        author: 'Mahatma Gandhi',
        text: 'Be the change that you wish to see in the world.',
      },
      {
        id: 10,
        author: 'Robert Frost',
        text:
          "In three words I can sum up everything I've learned about life: it goes on.",
      },
    ];

    return { quotes };
  }

  genId(quotes: Quote[]): number {
    return quotes.length == 0 ? 0 : Math.max(...quotes.map((x) => x.id)) + 1;
  }
}
