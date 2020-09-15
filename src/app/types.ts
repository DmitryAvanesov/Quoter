export interface Quote {
  id: number;
  author: string;
  text: string;
}

export interface Database {
  quotes: Quote[];
}
